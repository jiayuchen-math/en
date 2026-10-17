import {readFileSync} from 'node:fs';
import {isShelfEntry, normalizeEntries, normalizePrograms} from './assets/learning-tools.js';

const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const link = (url, title) => `<a href="${escape(url)}">${escape(title)}</a>`;
const browse = `<nav aria-label="Browse learning collections"><ul>
<li>${link('/en/notes/reading-notes/library/catalogue.html', 'Library')}</li>
<li>${link('/en/resources/encyclopedia/', 'Encyclopedia')}</li>
<li>${link('/en/notes/', 'Notes')}</li>
<li>${link('/en/resources/library-paths/', 'Learning paths and study guides')}</li>
</ul></nav>`;

/** No writes or builders. File paths are repository relative; the caller saves
 * files and wraps page bodies in its shell. Shared CSS/module URLs are identical
 * to the shell's URLs so the caller can deduplicate by src/href. */
export function createLearningTools({learningEntries = [], programs = []} = {}) {
  if (!Array.isArray(learningEntries) || !Array.isArray(programs)) throw new TypeError('Learning collections must be arrays.');
  const entries = normalizeEntries(learningEntries.filter(isShelfEntry));
  const comparison = normalizePrograms(programs);
  const common = {
    head:'<link rel="stylesheet" href="/en/resources/assets/learning-tools.css">',
    scripts:[{src:'/en/resources/assets/learning-tools.js', type:'module'}],
  };
  return {
    pages:[{
      ...common, file:'resources/bookshelf/index.html', title:'My bookshelf',
      body:`<div class="learning-tools" data-learning-tool="shelf">
<p>Keep a local reading list with a reading status and your own page or chapter position.</p>
<div data-learning-ui hidden>
<p data-tool-message role="status" aria-live="polite" aria-atomic="true"></p>
<section aria-labelledby="shelf-heading"><h2 id="shelf-heading" tabindex="-1">Saved reading</h2>
<details class="learning-settings"><summary>Bookshelf settings and backups</summary>
<p>Your list stays in this browser without an account or sync. Clearing browser data removes it; export a backup to keep a copy. Exports contain resource IDs, reading statuses and manual positions. Application answers are not stored.</p>
<div class="learning-actions"><button type="button" data-shelf-export>Export bookshelf</button><label class="learning-file">Import bookshelf JSON <input type="file" accept=".json,application/json" data-shelf-import></label><button type="button" data-shelf-clear>Clear bookshelf</button></div>
<p>Import accepts version 1 bookshelf JSON, up to 8 MiB and 2,000 entries, and merges by resource type and ID. Existing progress wins on duplicates; missing catalogue IDs are retained.</p>
<p>${link('/en/resources/study-careers/compare/', 'Compare programs separately')}.</p></details>
<div data-shelf-items></div></section>
<section aria-labelledby="shelf-find-heading"><h2 id="shelf-find-heading">Find something to save</h2>
<form data-learning-search role="search"><label for="shelf-query">Search title, summary or subject</label><input id="shelf-query" type="search" name="q" maxlength="300">
<label for="shelf-type">Resource type</label><select id="shelf-type" name="type"><option value="">All learning resources</option><option value="library">Library</option><option value="encyclopedia">Encyclopedia</option><option value="notes">Notes</option><option value="guides">Learning paths and guides</option></select><button type="submit">Search resources</button></form>
<p data-learning-count role="status" aria-live="polite"></p><ul data-learning-results class="learning-results"></ul>
<nav class="learning-actions" aria-label="Learning resource result pages"><button type="button" data-learning-prev>Previous</button><span data-learning-page></span><button type="button" data-learning-next>Next</button></nav></section>
</div><div data-learning-fallback><p>Browse these collections to read resources. The local bookshelf controls require JavaScript and a loaded catalogue.</p>${browse}</div></div>`,
    }, {
      ...common, file:'resources/study-careers/compare/index.html', title:'Compare programs',
      body:`<div class="learning-tools" data-learning-tool="compare">
<p>Compare up to three programs for this browser tab’s session.</p>
<p>Catalogue evidence and review dates stay attached.</p>
<div data-learning-ui hidden><p data-tool-message role="status" aria-live="polite" aria-atomic="true"></p>
<section aria-labelledby="comparison-heading"><h2 id="comparison-heading" tabindex="-1">Selected programs</h2><details class="learning-settings"><summary>Comparison settings and provenance</summary><p>Selections use this tab’s session storage. A selection link contains program IDs only; application background and answers are not stored. Fields reproduce catalogue wording, evidence status and review dates.</p><div class="learning-actions"><button type="button" data-compare-clear>Clear comparison</button><button type="button" data-compare-link>Create selection link</button></div></details><div data-compare-share></div><div data-comparison></div></section>
<section aria-labelledby="program-find-heading"><h2 id="program-find-heading">Find programs</h2><form data-learning-search role="search"><label for="program-query">Search program, institution, degree or country</label><input id="program-query" type="search" name="q" maxlength="300"><button type="submit">Search programs</button></form>
<p data-learning-count role="status" aria-live="polite"></p><ul data-learning-results class="learning-results"></ul><nav class="learning-actions" aria-label="Program result pages"><button type="button" data-learning-prev>Previous</button><span data-learning-page></span><button type="button" data-learning-next>Next</button></nav></section></div>
<div data-learning-fallback><p>Browse the ${link('/en/resources/study-careers/', 'program directory')} or follow a program link below. Interactive comparisons require JavaScript and a loaded catalogue.</p><details><summary>Program links</summary><ul>${comparison.map(p=>`<li>${p.url ? `<a href="${escape(p.url)}" target="_blank" rel="noopener noreferrer">${escape(`${p.institution ? p.institution + ' — ' : ''}${p.title}`)} (new tab)</a>` : `${escape(p.title)} — ${link('/en/resources/study-careers/', 'Program directory')}`}</li>`).join('')}</ul></details></div></div>`,
    }],
    files:[
      {file:'resources/catalogue-data/learning-tools/entries.json', content:JSON.stringify(entries) + '\n'},
      {file:'resources/catalogue-data/learning-tools/programs.json', content:JSON.stringify(comparison) + '\n'},
      ...['js','css'].map(extension=>({file:`resources/assets/learning-tools.${extension}`, content:readFileSync(new URL(`./assets/learning-tools.${extension}`, import.meta.url), 'utf8')})),
    ],
  };
}
