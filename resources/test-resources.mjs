import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const decode=s=>s.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
for(const file of ['notes/reading-notes/library/catalogue.html','resources/links/index.html','resources/study-careers/index.html']){
 const html=fs.readFileSync(file,'utf8'),applications=file.includes('study-careers');
 const entries=[...html.matchAll(/<article class="entry" ([^>]+)>/g)].map(m=>({dataset:Object.fromEntries([...m[1].matchAll(/data-([a-z-]+)="([^"]*)"/g)].map(a=>[camel(a[1]),decode(a[2])])),hidden:false,querySelector:()=>applications?{}:null}));
 const fields=[...html.matchAll(/<select[^>]*data-field="([^"]+)"/g)].map(m=>({dataset:{field:m[1]},value:''}));
 const search={value:''},listeners={},status={textContent:'',focus(){this.focused=true}},empty={hidden:true};
 const button=()=>({disabled:false,attributes:{},addEventListener(t,fn){this.fn=fn},setAttribute(k,v){this.attributes[k]=v}});
 const quick=applications?button():null,all=applications?button():null;
 const pages=Array.from({length:2},()=>{const a={'[data-prev]':button(),'[data-next]':button(),'[data-page-label]':{textContent:''}};return {hidden:true,querySelector:s=>a[s]}});
 const form={hidden:true,querySelectorAll:()=>fields,querySelector:s=>s==='[data-open-now]'?quick:s==='[data-all-programmes]'?all:search,addEventListener:(t,fn)=>listeners[t]=fn};
 const document={querySelector:()=>form,querySelectorAll:s=>s.startsWith('article')?entries:pages,getElementById:s=>s==='result-count'?status:empty};
 let now=Date.parse('2026-10-11T12:00:00Z'),tick;
 class TestDate extends Date{static now(){return now}}
 vm.runInNewContext(fs.readFileSync('resources/assets/catalogue.js','utf8'),{document,Date:TestDate,setInterval:fn=>{tick=fn}});
 const visible=()=>entries.filter(e=>!e.hidden);
 if(applications){assert.equal(visible().length,8);assert(visible().every(e=>e.dataset.openFrom&&e.dataset.closeBefore));assert.equal(quick.attributes['aria-pressed'],'true');all.fn()}
 assert.equal(visible().length,25);pages[0].querySelector('[data-next]').fn();assert.equal(visible().length,25);assert(status.focused);
 search.value='no-such-mathematical-resource-7429';listeners.input();assert.equal(visible().length,0);assert.equal(empty.hidden,false);
 fields[0].value='nonmatching-filter';let prevented=false;listeners.reset({preventDefault(){prevented=true}});assert(prevented);assert.equal(search.value,'');assert(fields.every(f=>f.value===''));assert.equal(visible().length,25);assert.equal(empty.hidden,true);
 if(file.includes('catalogue.html')){
  search.value='etale';listeners.input();assert(visible().some(e=>e.dataset.search.includes('Étale')));
  search.value='HTT';listeners.input();assert.equal(visible().length,1);
  search.value='';fields.find(f=>f.dataset.field==='level').value='Graduate';fields.find(f=>f.dataset.field==='access').value='Institutional / purchase access';listeners.change();assert(visible().length>0);assert(visible().every(e=>e.dataset.level==='Graduate'&&e.dataset.access==='Institutional / purchase access'));
 }
 if(applications){
  search.value='Weizmann';fields.find(f=>f.dataset.field==='degree').value='Masters';listeners.input();assert.equal(visible().length,1);quick.fn();assert.equal(visible().length,0,'Upcoming Weizmann window must not be labelled currently open');
  listeners.reset({preventDefault(){}});quick.fn();assert.equal(visible().length,8);
  now=Date.parse('2026-12-02T05:00:00Z');tick();assert(!visible().some(e=>e.dataset.search.includes('Berkeley')));assert(visible().some(e=>e.dataset.search.includes('Stanford')));
  now=Date.parse('2026-12-02T08:00:00Z');tick();assert(!visible().some(e=>e.dataset.search.includes('Stanford')));
  now=Date.parse('2027-04-01T00:00:00Z');tick();assert.equal(visible().length,0,'Expired and unknown cycles must not reappear as open');all.fn();assert.equal(visible().length,25);
 }
 console.log(file+': search, access filters, reset, pagination, keyboard focus and dated-window checks passed');
}
