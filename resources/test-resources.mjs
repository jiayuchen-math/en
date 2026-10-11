import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {applicationState} from './assets/application-time.js';import {nodes,routeFor} from './data/learning-paths.mjs';import {feeAssessment,backgroundAssessment} from './assets/background-rules.js';import researchers,{recentRecord} from './data/researchers.mjs';
const decode=s=>s.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
for(const file of ['notes/reading-notes/library/catalogue.html','resources/links/index.html','resources/study-careers/index.html']){
 const html=fs.readFileSync(file,'utf8'),applications=file.includes('study-careers');
 const entries=[...html.matchAll(/<article class="entry" ([^>]+)>/g)].map(m=>({dataset:Object.fromEntries([...m[1].matchAll(/data-([a-z-]+)="([^"]*)"/g)].map(a=>[camel(a[1]),decode(a[2])])),hidden:false,querySelector:()=>applications?{}:null}));
 const fields=[...html.matchAll(/<select[^>]*data-field="([^"]+)"/g)].map(m=>({dataset:{field:m[1]},value:''}));
 const search={value:''},listeners={},status={textContent:'',focus(){this.focused=true}},empty={hidden:true};
 const button=()=>({disabled:false,attributes:{},addEventListener(t,fn){this.fn=fn},setAttribute(k,v){this.attributes[k]=v}});
 const from={value:''},to={value:''},dateType={value:'Admission'},sort={value:''},dateError={hidden:true};
 const pages=Array.from({length:2},()=>{const a={'[data-prev]':button(),'[data-next]':button(),'[data-page-label]':{textContent:''}};return {hidden:true,querySelector:s=>a[s]}});
 const form={hidden:true,querySelectorAll:()=>fields,querySelector:s=>s==='input[type=search]'?search:applications?({'[name=deadline-from]':from,'[name=deadline-to]':to,'[name=date-type]':dateType,'[name=deadline-sort]':sort,'[data-date-error]':dateError}[s]||null):null,addEventListener:(t,fn)=>listeners[t]=fn};
 const document={querySelector:()=>form,querySelectorAll:s=>s.startsWith('article')?entries:pages,getElementById:s=>s==='result-count'?status:empty,addEventListener(){}};
 let now=Date.parse('2026-10-11T12:00:00Z'),tick;
 class TestDate extends Date{static now(){return now}}
 vm.runInNewContext(fs.readFileSync('resources/assets/catalogue.js','utf8').replace(/^import[^\n]+\n/,''),{document,applicationState,Date:TestDate,location:{search:''},URLSearchParams,setInterval:fn=>{tick=fn}});
 const visible=()=>entries.filter(e=>!e.hidden);
 if(applications){assert(!html.includes('data-open-now'));assert(status.textContent.startsWith(entries.length+' of'));assert(entries.some(e=>!e.dataset.deadlineDate))}
 assert.equal(visible().length,25);pages[0].querySelector('[data-next]').fn();assert.equal(visible().length,25);assert(status.focused);
 search.value='no-such-mathematical-resource-7429';listeners.input();assert.equal(visible().length,0);assert.equal(empty.hidden,false);
 fields[0].value='nonmatching-filter';let prevented=false;listeners.reset({preventDefault(){prevented=true}});assert(prevented);assert.equal(search.value,'');assert(fields.every(f=>f.value===''));assert.equal(visible().length,25);assert.equal(empty.hidden,true);
 if(file.includes('catalogue.html')){
  search.value='etale';listeners.input();assert(visible().some(e=>e.dataset.search.includes('Étale')));
  search.value='HTT';listeners.input();assert.equal(visible().length,1);
  search.value='';fields.find(f=>f.dataset.field==='level').value='Graduate';fields.find(f=>f.dataset.field==='access').value='Institutional / purchase access';listeners.change();assert(visible().length>0);assert(visible().every(e=>e.dataset.level==='Graduate'&&e.dataset.access==='Institutional / purchase access'));
 }
 if(applications){
  const select=(k,v)=>fields.find(f=>f.dataset.field===k).value=v;
  search.value='Weizmann';select('degree','Masters');listeners.input();assert.equal(visible().length,1);select('applicationStatus','Within reviewed window');listeners.change();assert.equal(visible().length,0,'Upcoming Weizmann window must not be labelled currently open');
  listeners.reset({preventDefault(){}});select('applicationStatus','Within reviewed window');listeners.change();assert.equal(visible().length,10);
  now=Date.parse('2026-12-02T05:00:00Z');tick();assert(!visible().some(e=>e.dataset.search.includes('Berkeley')));assert(visible().some(e=>e.dataset.search.includes('Stanford')));
  now=Date.parse('2026-12-02T08:00:00Z');tick();assert(!visible().some(e=>e.dataset.search.includes('Stanford')));
  now=Date.parse('2027-04-01T00:00:00Z');tick();assert.equal(visible().length,0,'Expired and unknown cycles must not reappear as open');listeners.reset({preventDefault(){}});assert.equal(visible().length,25);
  select('country','Italy');select('programmeForm','Multi-country joint programme');listeners.change();assert(visible().some(e=>e.dataset.search.includes('ALGANT')));assert(visible().every(e=>e.dataset.country.split('|').includes('Italy')));
  listeners.reset({preventDefault(){}});from.value='2027-01-06';to.value='2027-01-06';dateType.value='Scholarship';listeners.change();assert.equal(visible().length,2);assert(visible().every(e=>/Cambridge|Oxford/.test(e.dataset.search)));
  dateType.value='Admission';listeners.change();assert.equal(visible().length,0);from.value='2027-02-01';to.value='2026-12-01';listeners.change();assert.equal(visible().length,0);assert(!dateError.hidden);
  listeners.reset({preventDefault(){}});assert.equal(dateType.value,'Admission');assert.equal(from.value,'');assert(dateError.hidden);
 }
 console.log(file+': search, access filters, reset, pagination, keyboard focus and dated-window checks passed');
}
assert.equal(applicationState({deadlineDate:'2026-12-15',deadlinePrecision:'date',openFrom:'2026-10-01T00:00:00Z',closeBefore:'2026-12-16T00:00:00Z'},Date.parse('2026-12-15T16:00:00Z')),'Deadline day — time unverified');
assert.equal(applicationState({},Date.now()),'Dates not verified');
for(const id of Object.keys(nodes)){const route=routeFor(id,true);assert.equal(new Set(route).size,route.length);assert.equal(route.at(-1),id)}
console.log('Date-only uncertainty, unknown windows and acyclic learning paths passed');
const sw={country:'Sweden',degree:'Masters'},nl={country:'Netherlands',degree:'Masters'};
assert.equal(feeAssessment(sw,{permitCountry:'Sweden',permit:'Student visa / study permit',permitValid:'yes'}).state,'Fee status not established');
assert.equal(feeAssessment(sw,{permitCountry:'Sweden',permit:'Permanent residence',permitValid:'yes'}).state,'Potential fee exemption');
assert.equal(feeAssessment(sw,{permitCountry:'Sweden',permit:'Permanent residence',permitValid:'no'}).state,'Fee status not established');
assert.equal(feeAssessment(sw,{permitCountry:'Germany',permit:'Permanent residence',permitValid:'yes'}).state,'Fee status not established');
assert.equal(feeAssessment(nl,{citizenship:'EU / EEA',governmentFunded:'yes',previousDutchDegree:'no',feeYear:'2026-27'}).state,'Potential statutory fee category');
assert.equal(feeAssessment(nl,{citizenship:'EU / EEA',governmentFunded:'yes',previousDutchDegree:'yes',feeYear:'2026-27'}).state,'Fee status not established');
assert.equal(feeAssessment(nl,{citizenship:'EU / EEA',governmentFunded:'yes',previousDutchDegree:'no',feeYear:'2027-28 or later'}).state,'Fee status not established');
assert.equal(backgroundAssessment({eligibilityRule:'KAIST-international'}, {koreanCitizenship:'yes'}).state,'Documented route mismatch');
assert.equal(researchers.filter(p=>p.studentRecords.some(recentRecord)).length,2);
assert(!recentRecord({date:'2023',precision:'year'}));assert(recentRecord({date:'2024',precision:'year'}));assert(!recentRecord({date:'2026',precision:'year'}));
console.log('Visa-only, expiry, cross-country, prior-degree, unknown-fee-year and public-record boundaries passed');
