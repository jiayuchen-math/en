import fs from 'node:fs';import assert from 'node:assert/strict';
import open from './data/library-open-source.mjs';import {withAccess} from './data/library-access.mjs';
const read=p=>fs.readFileSync(p,'utf8');
const catalogue=JSON.parse(read('notes/reading-notes/library/catalogue.json'));
const works=[...new Map(catalogue.topics.flatMap(t=>t.books).map(e=>[e.url.replace(/\/$/,''),withAccess(e)])).values()];
const free=works.filter(e=>e.readingAccess==='Free to read'),popular=free.filter(e=>e.readingMode==='Popular / exposition');
assert(open.length>0);assert(new Set(open.map(e=>e.url)).size===open.length);
for(const e of open){
 for(const f of ['title','author','topic','kind','level','url','source','note','prerequisites','use','language','version','access','readingMode'])assert(e[f],e.title+' missing '+f);
 assert(['Direct open PDF','Open online text / archive'].includes(e.access),e.title);
 assert(e.checked==='2026-10-13'&&e.verification?.checked===e.checked,e.title+' evidence date');
 assert(e.verification?.method&&e.verification.source&&e.verification.url,e.title+' access evidence');
 assert(catalogue.topics.some(t=>t.id===e.topic));
}
for(const [file,expected] of [['open-reading.html',free],['exposition.html',popular]]){
 const html=read('notes/reading-notes/library/'+file);
 assert.equal((html.match(/<article class="entry"/g)||[]).length,expected.length);
 assert(html.includes('data-catalogue hidden')&&html.includes('<noscript>'));
 assert(!html.includes('data-reading-access="Institutional / purchase"'));
 assert(!html.includes('data-reading-access="Access not confirmed"'));
 assert(!html.includes('</article>\\n<article'));
 const tags=[...html.matchAll(/<a\b[^>]*href="https?:[^>]*>/g)].map(m=>m[0]);
 assert(tags.every(t=>t.includes('target="_blank"')&&t.includes('noopener noreferrer')));
}
const entry=read('notes/reading-notes/library.html');
assert.equal((entry.match(/<!-- open-reading:start -->/g)||[]).length,1,'Repeated free entrance');
assert(entry.includes('library/open-reading.html')&&entry.includes('library/exposition.html'));
const full=read('notes/reading-notes/library/catalogue.html');assert(full.includes('filter-readingAccess')&&full.includes('filter-readingMode'));
for(const t of catalogue.topics){const html=read('notes/reading-notes/library/'+t.route);const shortcut='open-reading.html?topic='+encodeURIComponent(t.title);assert.equal(html.split(shortcut).length-1,1,'Missing / repeated subject shortcut '+t.id)}
const report=JSON.parse(read('resources/build-report.json'));
assert.equal(report.openReading.freeWorks,free.length);assert.equal(report.openReading.essays,popular.length);assert.equal(report.openReading.newOpenWorks,open.length);
console.log(JSON.stringify({newFreelyReadableWorks:open.length,allFreeWorks:free.length,popularWorks:popular.length,paidEntriesExcluded:true,sourceDatesPreserved:true}));
