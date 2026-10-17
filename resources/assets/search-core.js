// Pure search rules shared by the worker and the main-thread fallback.
export const TYPES = Object.freeze([
  'library', 'encyclopedia', 'terminology', 'links',
  'programs', 'researchers', 'notes', 'guides',
]);
export const PAGE_SIZE = 25;
export const GROUP_SIZE = 3;

export function normalize(value) {
  return String(value ?? '').normalize('NFKD').replace(/\p{M}/gu, '')
    .toLowerCase().replace(/[’']/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

export function tokenize(value) {
  return [...new Set(normalize(value).split(/\s+/).filter(Boolean))];
}

export function searchState(value = {}) {
  const page = Number(value.page);
  return {
    q: String(value.q ?? '').trim(),
    type: TYPES.includes(value.type) ? value.type : '',
    area: String(value.area ?? '').trim(),
    page: Number.isSafeInteger(page) && page > 0 ? page : 1,
    sense: /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(value.sense||'')) ? String(value.sense) : '',
  };
}

export function isActive(state) {
  return Boolean(state.q || state.type || state.area || state.sense);
}

export function validateManifest(manifest) {
  if (!manifest || !Array.isArray(manifest.collections)
    || !['string', 'number'].includes(typeof manifest.version)) {
    throw new Error('Invalid search manifest.');
  }
  const ids = new Set();
  const collections = manifest.collections.map(collection => {
    if (!collection || !TYPES.includes(collection.id) || ids.has(collection.id)
      || !['label', 'url', 'index'].every(key => typeof collection[key] === 'string' && collection[key])) {
      throw new Error('Invalid search collection.');
    }
    ids.add(collection.id);
    return {id: collection.id, label: collection.label, url: collection.url, index: collection.index};
  });
  return {version: manifest.version, collections};
}

export function validateShard(entries, type) {
  if (!Array.isArray(entries)) throw new Error('Invalid search index.');
  return entries.map(entry => {
    if (!entry || entry.type !== type || !TYPES.includes(entry.type)
      || !['id', 'title', 'url'].every(key => typeof entry[key] === 'string' && entry[key])
      || typeof entry.summary !== 'string') {
      throw new Error('Invalid search entry.');
    }
    const copy = {id: entry.id, type: entry.type, title: entry.title, summary: entry.summary, url: entry.url};
    for (const key of ['chinese', 'author', 'institution', 'topics', 'area', 'termUrl', 'encyclopediaUrl']) {
      if (typeof entry[key] === 'string') copy[key] = entry[key];
    }
    if (Array.isArray(entry.aliases)) copy.aliases = entry.aliases.filter(alias => typeof alias === 'string');
    return copy;
  });
}

function normalizedValues(values) {
  return [...new Set(values.filter(Boolean).map(normalize).filter(Boolean))];
}

function prepare(entry) {
  const aliases = entry.aliases || [];
  // Only supplied acronym spellings are recognized; translations are never inferred.
  const acronyms = aliases.filter(alias => /^[A-Z][A-Z\d .&-]+$/.test(alias.trim()))
    .map(alias => normalize(alias).replace(/ /g, ''));
  return {
    entry,
    names: normalizedValues([entry.title, entry.chinese]),
    aliases: normalizedValues(aliases),
    people: normalizedValues([entry.author, entry.institution]),
    subjects: normalizedValues([entry.topics, entry.area]),
    summaries: normalizedValues([entry.summary]),
    areas: normalizedValues((entry.area || '').split('|')),
    areaLabels: (entry.area || '').split('|').map(value => value.trim()).filter(Boolean),
    acronyms,
  };
}

export function prepareEntries(entries, mergeConcepts = false) {
  const documents = [];
  const seen = new Set();
  for (const entry of entries) {
    const key = JSON.stringify([entry.type, entry.id]);
    if (seen.has(key)) continue;
    seen.add(key);
    documents.push(prepare(entry));
  }
  if (!mergeConcepts) return documents;
  const encyclopedia = new Map(documents.filter(doc => doc.entry.type === 'encyclopedia')
    .map(doc => [doc.entry.id, doc]));
  return documents.filter(doc => {
    if (doc.entry.type !== 'terminology') return true;
    const concept = encyclopedia.get(doc.entry.id);
    if (!concept) return true;
    concept.entry = {...concept.entry, termUrl: concept.entry.termUrl || doc.entry.termUrl || doc.entry.url};
    for (const field of ['names', 'aliases', 'people', 'subjects', 'summaries', 'areas', 'areaLabels', 'acronyms']) {
      concept[field] = [...new Set([...concept[field], ...doc[field]])];
    }
    return false;
  });
}

function rank(doc, query, tokens) {
  const fields = [doc.names, doc.aliases, doc.people, doc.subjects, doc.summaries];
  if (!tokens.every(token => fields.some(values => values.some(value => value.includes(token)))
    || doc.acronyms.some(value => value.includes(token)))) return -1;
  if (!tokens.length) return 0;
  let tier = 100;
  if (doc.names.includes(query)) tier = 1000;
  else if (doc.acronyms.includes(query.replace(/ /g, ''))) tier = 950;
  else if (doc.names.some(value => value.startsWith(query))) tier = 800;
  else if (tokens.every(token => doc.names.some(value => value.split(' ').some(word => word.startsWith(token))))) tier = 750;
  else if (tokens.every(token => [...doc.names, ...doc.aliases, ...doc.people].some(value => value.includes(token)))) tier = 600;
  else if (tokens.every(token => [...doc.names, ...doc.aliases, ...doc.people, ...doc.subjects].some(value => value.includes(token)))) tier = 350;
  // A bounded tie-breaker cannot overtake the next relevance tier.
  const weights = [5, 4, 3, 2, 1];
  const detail = tokens.reduce((sum, token) => sum + Math.max(...fields.map((values, i) =>
    values.some(value => value.includes(token)) ? weights[i] : 0)), 0) / tokens.length;
  return tier + detail;
}

export function searchEntries(documents, value = {}) {
  const state = searchState(value);
  const query = normalize(state.q);
  const tokens = tokenize(state.q);
  const area = normalize(state.area);
  if (!isActive(state)) return [];
  if (state.q && !tokens.length) return [];
  return documents.filter(doc => (!state.type || doc.entry.type === state.type)
    && (!state.sense || doc.entry.id === state.sense)
    && (!area || doc.areas.includes(area)))
    .map(doc => ({entry: doc.entry, score: rank(doc, query, tokens)}))
    .filter(hit => hit.score >= 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, 'en')
      || a.entry.id.localeCompare(b.entry.id, 'en'))
    .map(hit => hit.entry);
}

export function searchResponse(documents, value, collections) {
  const state = searchState(value);
  const matches = searchEntries(documents, state);
  const areas = [...new Set(documents.flatMap(doc => doc.areaLabels))]
    .sort((a, b) => a.localeCompare(b, 'en'));
  if (state.type) {
    const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
    const page = Math.min(state.page, pages);
    return {total: matches.length, page, pages, areas,
      items: matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), groups: []};
  }
  return {total: matches.length, page: 1, pages: 1, areas, items: [],
    groups: collections.map(collection => {
      const items = matches.filter(entry => entry.type === collection.id);
      return {id: collection.id, label: collection.label, total: items.length, items: items.slice(0, GROUP_SIZE)};
    }).filter(group => group.total)};
}
