import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
import researchers from './data/researchers.mjs';
const read=p=>fs.readFileSync(p,'utf8'),audit=JSON.parse(read('resources/data/researcher-coverage.json'));
assert.equal(audit.researchers,researchers.length);assert.equal(audit.countries.reduce((n,c)=>n+c.records,0),researchers.length);
for(const c of audit.countries){assert(Number.isInteger(c.publicEmails)&&c.publicEmails>=0&&c.publicEmails<=c.records);assert.equal(c.publishedTopics+c.groupEvidence+c.unknownTopics,c.records);assert(!c.status.toLowerCase().includes('complete'));if(!c.records)assert.equal(c.status,'Not represented yet')}
assert(audit.countries.find(c=>c.country==='France').records>=200);assert(audit.countries.find(c=>c.country==='Germany').records>=150);
assert.equal(audit.countries.find(c=>c.country==='Finland').records,0);assert.equal(audit.countries.find(c=>c.country==='Czech Republic').records,17);
const decode=s=>s.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&'),camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
function setup(file,query){const html=read(file),entries=[...html.matchAll(/<article class="entry" ([^>]+)>/g)].map(m=>({dataset:Object.fromEntries([...m[1].matchAll(/data-([a-z-]+)="([^"]*)"/g)].map(a=>[camel(a[1]),decode(a[2])])),hidden:false,querySelector:()=>null}));
 const fields=[...html.matchAll(/<select[^>]*data-field="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)].map(m=>({dataset:{field:m[1]},value:'',options:[...m[2].matchAll(/<option value="([^"]*)"/g)].map(o=>({value:decode(o[1])}))}));
 const search={value:''},events={},status={textContent:'',focus(){}},empty={hidden:true},button=()=>({addEventListener(t,fn){this.fn=fn},disabled:false});
 const pages=Array.from({length:2},()=>{const d={'[data-prev]':button(),'[data-next]':button(),'[data-page-label]':{textContent:''}};return {hidden:true,querySelector:s=>d[s]}});
 const form={hidden:true,querySelectorAll:()=>fields,querySelector:s=>s==='input[type=search]'?search:null,addEventListener:(t,fn)=>events[t]=fn};
 const document={querySelector:()=>form,querySelectorAll:s=>s.startsWith('article')?entries:pages,getElementById:id=>id==='result-count'?status:empty};
 vm.runInNewContext(read('resources/assets/catalogue.js').replace(/^import[^\n]+\n/,''),{document,location:{search:query},URLSearchParams,Date});return {entries,fields,events,status,pages,empty,visible:()=>entries.filter(e=>!e.hidden)};
}
for(const country of ['France','Germany','Czech Republic']){const t=setup('resources/study-careers/researchers.html','?country='+encodeURIComponent(country));const n=audit.countries.find(c=>c.country===country).records;assert(t.status.textContent.startsWith(n+' of'));assert(t.visible().every(e=>e.dataset.country===country));assert.equal(t.visible().length,Math.min(n,25));if(n>25){t.pages[0].querySelector('[data-next]').fn();assert(t.visible().every(e=>e.dataset.country===country))}t.events.reset({preventDefault(){}});assert.equal(t.visible().length,25)}
const invalid=setup('resources/study-careers/researchers.html','?country=Not-a-real-filter');assert.equal(invalid.visible().length,25);
const gaps=setup('resources/study-careers/coverage.html','?region=Europe&status=Not%20represented%20yet');assert(gaps.visible().every(e=>e.dataset.region==='Europe'&&e.dataset.status==='Not represented yet'));assert(gaps.status.textContent.startsWith(audit.countries.filter(c=>c.region==='Europe'&&!c.records).length+' of'));
const countryCard=setup('resources/study-careers/coverage.html','?q=Germany');assert.equal(countryCard.visible().length,1);assert(read('resources/study-careers/coverage.html').includes('href="coverage.html?q=Germany"'));
for(const c of audit.countries.filter(c=>c.records))assert(read('resources/study-careers/coverage.html').includes('researchers.html?country='+encodeURIComponent(c.country)),'Country link does not use the canonical filter name: '+c.country);
for(const f of ['resources/study-careers/coverage.html','resources/study-careers/researchers.html']){const h=read(f);assert(h.includes('<noscript>'));assert(!/<article[^>]*\bhidden\b/.test(h));assert(h.includes('coverage.html')||h.includes('Country Coverage'))}
console.log('Country totals, zero-country gaps, evidence counts, exact query filters, pagination and no-JS coverage passed');
