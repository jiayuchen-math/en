import {applicationState} from './application-time.js';
import {backgroundAssessment} from './background-rules.js';

export const PAGE_SIZE = 25;
export const DATE_PARAMETERS = ['deadline-from', 'deadline-to', 'date-type', 'deadline-sort'];
const reserved = new Set(['q', 'page', ...DATE_PARAMETERS]);
export const normalize = value => String(value ?? '').normalize('NFKD')
  .replace(/\p{M}/gu, '').toLowerCase().replace(/[’']/g, '');

export function pageNumber(value, fallback = 1) {
  return /^\d+$/.test(String(value)) && Number.isSafeInteger(Number(value)) && Number(value) > 0
    ? Number(value) : fallback;
}

// Real static pages work when JavaScript is disabled or a shared URL is opened directly.
export function pageURL(base, page, origin = 'https://catalogue.invalid') {
  const url = new URL(base, origin);
  if (/-all-page-\d+\.html$/.test(url.pathname)) {
    url.pathname = url.pathname.replace(/-page-\d+\.html$/, `-page-${page}.html`);
  } else if (page > 1) {
    const path = url.pathname.endsWith('/') ? `${url.pathname}index.html` : url.pathname;
    url.pathname = path.replace(/(?:\.html)?$/, `-page-${page}.html`);
  }
  url.search = '';
  url.hash = '';
  return url;
}

export function fieldNames(records, filters = [], defaults = {}, controls = []) {
  return [...new Set([
    ...records.flatMap(row => Object.keys(row.fields || {})),
    ...filters.map(filter => filter.field), ...Object.keys(defaults), ...controls,
  ])].filter(name => name && !reserved.has(name) && !name.startsWith('bg.'));
}

export function readState(url, {fields, defaults = {}, page = 1}) {
  // Background answers are document-local; obsolete bg.* URL values are ignored.
  const params = url.searchParams;
  const selected = Object.create(null);
  for (const field of fields) selected[field] = params.has(field)
    ? params.get(field) : String(defaults[field] ?? '');
  // Older directory links called the topic filter "area". Keep genuine area fields distinct.
  if (!fields.includes('area') && fields.includes('topic') && params.has('area') && !params.has('topic')) {
    selected.topic = params.get('area');
  }
  return {
    q: params.get('q') || '', filters: selected, background: Object.create(null),
    page: pageNumber(params.get('page'), page),
    from: params.get('deadline-from') || '', to: params.get('deadline-to') || '',
    dateType: params.get('date-type') || 'Admission', sort: params.get('deadline-sort') || '',
  };
}

export function stateURL(base, state, defaults = {}, current = new URL(base, 'https://catalogue.invalid')) {
  const url = pageURL(base, state.page, current.origin);
  url.search = current.search;
  const params = url.searchParams;
  for (const key of [...params.keys()]) {
    if (reserved.has(key) || key.startsWith('bg.') || Object.hasOwn(state.filters, key)
      || (key === 'area' && !Object.hasOwn(state.filters, 'area') && Object.hasOwn(state.filters, 'topic'))) params.delete(key);
  }
  if (state.q) params.set('q', state.q);
  for (const [field, value] of Object.entries(state.filters)) {
    // An explicit empty value is necessary to share "All" when a default is active.
    if (value !== String(defaults[field] ?? '')) params.set(field, value);
  }
  if (state.from) params.set('deadline-from', state.from);
  if (state.to) params.set('deadline-to', state.to);
  if (state.dateType !== 'Admission') params.set('date-type', state.dateType);
  if (state.sort) params.set('deadline-sort', state.sort);
  if (state.page > 1) params.set('page', String(state.page));
  return url;
}

export function applicationData(row) {
  // applicationView() supplies the same date-only and timezone contract as article.dataset.
  return row.applicationWindow || row;
}

export function selectedDeadlines(row, type) {
  let dates = row.applicationDates || [];
  if (typeof dates === 'string') {
    try { dates = JSON.parse(dates); } catch { dates = []; }
  }
  return Array.isArray(dates) ? dates.filter(date => date.type === type && date.date) : [];
}

export function assessRecords(records, background) {
  const active = Object.values(background).some(Boolean);
  const assessments = new Map();
  for (const row of records) {
    const assessment = active && row.background ? backgroundAssessment(row.background, background) : null;
    row.fields ||= {};
    row.fields.backgroundMatch = assessment?.state || 'Eligibility not established';
    if (assessment) assessments.set(row.id, assessment);
  }
  return assessments;
}

export function matchingRecords(records, state, now = Date.now()) {
  const invalid = Boolean(state.from && state.to && state.from > state.to);
  if (invalid) return {records: [], invalid};
  const words = normalize(state.q).trim().split(/\s+/).filter(Boolean);
  const found = records.filter(row => words.every(word => normalize(row.search).includes(word))
    && Object.entries(state.filters).every(([field, expected]) => {
      if (!expected) return true;
      const value = field === 'applicationStatus' ? applicationState(applicationData(row), now)
        : row.fields?.[field] ?? (field === 'area' ? row.fields?.topic : undefined)
          ?? (field === 'topic' ? row.fields?.area : undefined) ?? '';
      return String(value).split('|').includes(expected);
    }) && (!(state.from || state.to) || selectedDeadlines(row, state.dateType)
      .some(date => (!state.from || date.date >= state.from) && (!state.to || date.date <= state.to))));
  if (state.sort === 'deadline') {
    const first = row => selectedDeadlines(row, state.dateType).map(date => date.date).sort()[0] || '9999-12-31';
    found.sort((a, b) => first(a).localeCompare(first(b)));
  }
  return {records: found, invalid};
}
