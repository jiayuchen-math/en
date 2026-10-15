import {isActive, prepareEntries, searchResponse, searchState, validateManifest, validateShard} from './search-core.js';

// Also imported on demand by unified-search.js when module workers are unavailable.
// Importing this file on the main thread neither fetches data nor installs a listener.
export function createSearchService({manifest, manifestUrl, fetcher = globalThis.fetch.bind(globalThis)}) {
  const {version, collections} = validateManifest(manifest);
  const shards = new Map();
  const prepared = new Map();
  const base = new URL(manifestUrl);

  function timedResponse(documents, state) {
    // Measure lookup/ranking/grouping only, excluding shard fetch and preparation.
    // Both the worker and the fallback use this same calculation.
    const start = performance.now();
    const result = searchResponse(documents, state, collections);
    result.elapsedMs = performance.now() - start;
    return result;
  }

  function load(collection) {
    if (!shards.has(collection.id)) {
      const pending = (async () => {
        const url = new URL(collection.index, base);
        if (!['http:', 'https:'].includes(url.protocol) || url.origin !== base.origin) {
          throw new Error('Invalid search index URL.');
        }
        url.searchParams.set('v', String(version));
        const response = await fetcher(url.href, {credentials: 'same-origin'});
        if (!response.ok) throw new Error(`Search index unavailable (${response.status}).`);
        return validateShard(await response.json(), collection.id);
      })();
      shards.set(collection.id, pending);
      pending.catch(() => shards.delete(collection.id));
    }
    return shards.get(collection.id);
  }

  return {
    async search(value) {
      const state = searchState(value);
      if (!isActive(state)) return timedResponse([], state);
      const selected = state.type ? collections.filter(collection => collection.id === state.type) : collections;
      if (state.type && !selected.length) throw new Error('Search collection unavailable.');
      const key = state.type || 'all';
      if (!prepared.has(key)) {
        const entries = (await Promise.all(selected.map(load))).flat();
        prepared.set(key, prepareEntries(entries, !state.type));
      }
      return timedResponse(prepared.get(key), state);
    },
  };
}

if (typeof WorkerGlobalScope !== 'undefined' && globalThis instanceof WorkerGlobalScope) {
  let service;
  let latestId = 0;
  globalThis.addEventListener('message', async event => {
    const message = event.data;
    if (!message || message.kind !== 'search' || !Number.isSafeInteger(message.id)) return;
    latestId = message.id;
    try {
      if (!service) service = createSearchService({manifest: message.manifest, manifestUrl: message.manifestUrl});
      const result = await service.search(message.state);
      if (message.id === latestId) globalThis.postMessage({kind: 'result', id: message.id, result});
    } catch (error) {
      if (message.id === latestId) {
        globalThis.postMessage({kind: 'error', id: message.id, error: error.message || 'Search unavailable.'});
      }
    }
  });
}
