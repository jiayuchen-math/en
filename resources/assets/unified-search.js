// Works as either a deferred classic script (the portal shell default) or a module.
(() => {
const assetUrl = document.currentScript?.src
  || new URL('/en/resources/assets/unified-search.js', location.href).href;

async function initializeSearch() {
  const form = document.querySelector('form#unified-search');
  const results = document.getElementById('search-results');
  const count = document.getElementById('search-count');
  const pages = document.getElementById('search-pages');
  const query = form?.querySelector('input[name="q"]');
  const type = form?.querySelector('select[name="type"]');
  const area = form?.querySelector('select[name="area"]');
  // A homepage search form submits normally. No manifest, shard, or worker is
  // requested unless the complete search-page contract is present.
  if (!form || !results || !count || !pages || !query || !type || !area) return;

  let core;
  try {
    core = await import(new URL('./search-core.js', assetUrl).href);
  } catch {
    count.textContent = 'Search could not be loaded. Please reload this page to try again.';
    return;
  }
  const {isActive, searchState, validateManifest} = core;

  const manifestUrl = new URL('/en/resources/search/manifest.json', location.href).href;
  const chips = document.querySelector('.search-chips');
  const initialAreas = [...area.options].filter(option => option.value)
    .map(option => ({value: option.value, label: option.textContent}));
  const allTypeValue = [...type.options].find(option => !option.value || option.value === 'all')?.value || '';
  let manifest;
  let manifestPromise;
  let worker;
  let workerDisabled = false;
  let fallback;
  let requestId = 0;
  let timer;
  let updateTiming;
  let editingQuery = false;
  let state = readLocation();

  count.setAttribute('role', 'status');
  count.setAttribute('aria-live', 'polite');
  count.setAttribute('aria-atomic', 'true');
  results.setAttribute('aria-busy', 'false');
  results.classList.add('search-groups');
  if (pages.tagName === 'NAV') pages.setAttribute('aria-label', 'Search result pages');
  form.hidden = false;

  function node(tag, text, className) {
    const element = document.createElement(tag);
    if (text != null) element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function link(text, value) {
    const element = node('a', text);
    try {
      const url = new URL(value, location.href);
      if (!['http:', 'https:'].includes(url.protocol)) return node('span', text);
      element.href = url.href;
      if (url.origin !== location.origin) {
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        element.setAttribute('aria-label', `${text} (opens in a new tab)`);
      }
    } catch {
      return node('span', text);
    }
    return element;
  }

  function readLocation() {
    return searchState(Object.fromEntries(new URLSearchParams(location.search)));
  }

  function stateUrl(next) {
    const url = new URL(location.href);
    for (const key of ['q', 'type', 'area', 'page']) url.searchParams.delete(key);
    if (next.q) url.searchParams.set('q', next.q);
    if (next.type) url.searchParams.set('type', next.type);
    if (next.area) url.searchParams.set('area', next.area);
    if (next.type && next.page > 1) url.searchParams.set('page', String(next.page));
    return url;
  }

  function writeLocation(mode) {
    const url = stateUrl(state);
    if (url.href !== location.href) history[mode === 'push' ? 'pushState' : 'replaceState'](null, '', url.href);
  }

  function option(select, value, label) {
    select.append(new Option(label, value));
  }

  function syncControls(preserveQuery = false) {
    if (!preserveQuery) query.value = state.q;
    if (state.type && ![...type.options].some(item => item.value === state.type)) option(type, state.type, state.type);
    type.value = state.type || allTypeValue;
    if (state.area && ![...area.options].some(item => item.value === state.area)) option(area, state.area, state.area);
    area.value = state.area;
  }

  function updateAreas(values = []) {
    const choices = new Map(initialAreas.map(item => [item.value, item.label]));
    values.forEach(value => choices.set(value, value));
    if (state.area) choices.set(state.area, choices.get(state.area) || state.area);
    area.replaceChildren(new Option('All areas', ''));
    [...choices].sort(([a], [b]) => a.localeCompare(b, 'en')).forEach(([value, label]) => option(area, value, label));
    area.value = state.area;
  }

  function navigationLink(text, next) {
    const element = link(text, stateUrl(next).href);
    element.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate(next, 'push');
    });
    return element;
  }

  function renderChips() {
    if (!chips) return;
    chips.replaceChildren();
    const labels = {q: 'Query', type: 'Type', area: 'Area'};
    for (const key of ['q', 'type', 'area']) {
      if (!state[key]) continue;
      const value = key === 'type' ? manifest?.collections.find(collection => collection.id === state.type)?.label || state.type : state[key];
      const button = node('button', `${labels[key]}: ${value} ×`, 'badge');
      button.type = 'button';
      button.setAttribute('aria-label', `Remove ${labels[key].toLowerCase()} filter: ${value}`);
      button.addEventListener('click', () => navigate({...state, [key]: '', page: 1}, 'push'));
      chips.append(button);
    }
    chips.hidden = !chips.childElementCount;
  }

  async function loadManifest() {
    if (!manifestPromise) {
      manifestPromise = (async () => {
        const response = await fetch(manifestUrl, {credentials: 'same-origin', cache: 'no-cache'});
        if (!response.ok) throw new Error(`Search manifest unavailable (${response.status}).`);
        return validateManifest(await response.json());
      })();
      manifestPromise.catch(() => { manifestPromise = undefined; });
    }
    return manifestPromise;
  }

  function applyManifest(value) {
    if (manifest) return;
    manifest = value;
    type.replaceChildren(new Option('All collections', allTypeValue));
    manifest.collections.forEach(collection => option(type, collection.id, collection.label));
    syncControls(true);
    renderChips();
  }

  function clearView(message, busy = false) {
    results.replaceChildren();
    pages.replaceChildren();
    pages.hidden = true;
    results.setAttribute('aria-busy', String(busy));
    count.textContent = message;
    delete count.dataset.searchDuration;
    delete count.dataset.searchUpdate;
  }

  function renderBrowse() {
    clearView('Choose a collection, enter keywords, or select an area to search.');
    results.append(node('p', 'Browse collections or search by name, acronym, Chinese term, author, institution, or topic.'));
    const list = node('ul');
    for (const collection of manifest.collections) {
      const item = node('li');
      item.append(link(collection.label, collection.url), document.createTextNode(' · '),
        navigationLink(`Search ${collection.label}`, {...state, type: collection.id, page: 1}));
      list.append(item);
    }
    results.append(list);
  }

  function renderError(id) {
    if (id !== requestId) return;
    clearView('Search is unavailable. Please try again.');
    results.append(node('p', 'The search index could not be loaded. Check your connection and try again.', 'notice'));
    const retry = node('button', 'Try again');
    retry.type = 'button';
    retry.addEventListener('click', () => navigate(state, 'replace'));
    results.append(retry);
  }

  function renderEntry(entry) {
    const article = node('article', null, 'entry search-result');
    const heading = node('h3');
    heading.append(link(entry.title, entry.url));
    article.append(heading);
    if (entry.chinese) {
      const chinese = node('p', entry.chinese, 'chinese');
      chinese.lang = 'zh-Hans';
      article.append(chinese);
    }
    const metadata = [entry.author, entry.institution, entry.area?.split('|').join(' · ')].filter(Boolean);
    if (metadata.length) article.append(node('p', [...new Set(metadata)].join(' · '), 'meta'));
    if (entry.summary) article.append(node('p', entry.summary));
    const actions = node('div', null, 'actions');
    const links = [[entry.termUrl, 'Terminology'], [entry.encyclopediaUrl, 'Encyclopedia']];
    const seen = new Set([entry.url]);
    for (const [url, label] of links) {
      if (!url || seen.has(url)) continue;
      seen.add(url);
      const anchor = link(label, url);
      anchor.setAttribute('aria-label', `${label}: ${entry.title}${anchor.target === '_blank' ? ' (opens in a new tab)' : ''}`);
      actions.append(anchor);
    }
    if (actions.childElementCount) article.append(actions);
    return article;
  }

  function renderPagination(result) {
    pages.replaceChildren();
    pages.hidden = result.pages <= 1;
    if (pages.hidden) return;
    if (result.page > 1) pages.append(navigationLink('Previous', {...state, page: result.page - 1}));
    const numbers = new Set([1, result.pages]);
    for (let page = Math.max(1, result.page - 2); page <= Math.min(result.pages, result.page + 2); page++) numbers.add(page);
    let previous = 0;
    for (const page of [...numbers].sort((a, b) => a - b)) {
      if (previous && page > previous + 1) pages.append(node('span', '…'));
      if (page === result.page) {
        const current = node('span', String(page));
        current.setAttribute('aria-current', 'page');
        current.setAttribute('aria-label', `Page ${page}, current page`);
        pages.append(current);
      } else {
        const anchor = navigationLink(String(page), {...state, page});
        anchor.setAttribute('aria-label', `Page ${page}`);
        pages.append(anchor);
      }
      previous = page;
    }
    if (result.page < result.pages) pages.append(navigationLink('Next', {...state, page: result.page + 1}));
  }

  function renderResult(result, id) {
    if (id !== requestId) return;
    renderResults(result);
    if (updateTiming?.id === id) {
      const {startedAt} = updateTiming;
      requestAnimationFrame(() => {
        if (id !== requestId) return;
        count.dataset.searchUpdate = String(performance.now() - startedAt);
      });
    }
  }

  function renderResults(result) {
    clearView(`${result.total} ${result.total === 1 ? 'result' : 'results'}${state.type && result.total ? ` · Page ${result.page} of ${result.pages}` : ''}`);
    count.dataset.searchDuration = String(result.elapsedMs);
    updateAreas(result.areas);
    if (state.page !== result.page) {
      state = {...state, page: result.page};
      writeLocation('replace');
    }
    if (!result.total) {
      results.append(node('p', 'No matching results. Try fewer keywords, change the area, or clear the filters.'));
      const clear = node('button', 'Clear search and filters');
      clear.type = 'button';
      clear.addEventListener('click', () => navigate(searchState(), 'push'));
      results.append(clear);
      return;
    }
    if (state.type) {
      results.append(node('h2', manifest.collections.find(collection => collection.id === state.type)?.label || state.type));
      result.items.forEach(entry => results.append(renderEntry(entry)));
      renderPagination(result);
      return;
    }
    for (const group of result.groups) {
      const section = node('section', null, 'search-group');
      const heading = node('h2', `${group.label} (${group.total})`);
      heading.id = `search-group-${group.id}`;
      section.setAttribute('aria-labelledby', heading.id);
      section.append(heading);
      group.items.forEach(entry => section.append(renderEntry(entry)));
      section.append(navigationLink(`View all ${group.label} results`, {...state, type: group.id, page: 1}));
      results.append(section);
    }
  }

  async function runFallback(id, snapshot) {
    try {
      if (!fallback) {
        fallback = import(new URL('./search-worker.js', assetUrl).href)
          .then(({createSearchService}) => createSearchService({manifest, manifestUrl}));
        fallback.catch(() => { fallback = undefined; });
      }
      const service = await fallback;
      if (id !== requestId) return;
      renderResult(await service.search(snapshot), id);
    } catch {
      renderError(id);
    }
  }

  function disableWorker() {
    workerDisabled = true;
    worker?.terminate();
    worker = undefined;
    if (isActive(state)) void runFallback(requestId, {...state});
  }

  function runSearch(id, snapshot) {
    if (!workerDisabled && !worker) {
      try {
        worker = new Worker(new URL('./search-worker.js', assetUrl), {type: 'module'});
        worker.addEventListener('message', event => {
          const message = event.data;
          if (!message || message.id !== requestId) return;
          if (message.kind === 'result') renderResult(message.result, message.id);
          else if (message.kind === 'error') renderError(message.id);
        });
        worker.addEventListener('error', event => { event.preventDefault(); disableWorker(); });
        worker.addEventListener('messageerror', disableWorker);
      } catch {
        workerDisabled = true;
      }
    }
    if (workerDisabled) {
      void runFallback(id, snapshot);
      return;
    }
    try {
      worker.postMessage({kind: 'search', id, state: snapshot, manifest, manifestUrl});
    } catch {
      disableWorker();
    }
  }

  async function execute(id) {
    if (id !== requestId) return;
    // Start after the input debounce/loading state; include the cached manifest
    // lookup, worker round trip or fallback search, and the complete DOM update.
    updateTiming = isActive(state) ? {id, startedAt: performance.now()} : undefined;
    try {
      const value = await loadManifest();
      if (id !== requestId) return;
      applyManifest(value);
      if (!isActive(state)) renderBrowse();
      else runSearch(id, {...state});
    } catch {
      renderError(id);
    }
  }

  function navigate(next, mode, delay = 0, preserveQuery = false) {
    clearTimeout(timer);
    if (!preserveQuery) editingQuery = false;
    state = searchState(next);
    const id = ++requestId; // Invalidate old responses immediately, including during debounce.
    updateTiming = undefined;
    syncControls(preserveQuery);
    renderChips();
    if (mode) writeLocation(mode);
    clearView(isActive(state) ? 'Loading search results…' : 'Loading search collections…', true);
    if (delay) timer = setTimeout(() => void execute(id), delay);
    else void execute(id);
  }

  const controlState = () => searchState({q: query.value, type: type.value, area: area.value, page: 1});
  function queryChanged(event) {
    if (event.isComposing) return;
    navigate(controlState(), editingQuery ? 'replace' : 'push', 180, true);
    editingQuery = true;
  }
  query.addEventListener('input', queryChanged);
  query.addEventListener('compositionend', queryChanged);
  type.addEventListener('change', () => navigate(controlState(), 'push'));
  area.addEventListener('change', () => navigate(controlState(), 'push'));
  form.addEventListener('submit', event => {
    event.preventDefault();
    navigate(controlState(), 'push');
  });
  form.addEventListener('reset', event => {
    event.preventDefault();
    navigate(searchState(), 'push');
    query.focus();
  });
  window.addEventListener('popstate', () => navigate(readLocation()));
  window.addEventListener('pagehide', () => {
    worker?.terminate();
    worker = undefined;
  });
  window.addEventListener('pageshow', event => {
    if (event.persisted) navigate(readLocation());
  });
  navigate(state, 'replace');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeSearch, {once: true});
else void initializeSearch();
})();
