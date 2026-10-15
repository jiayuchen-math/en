import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
import {loadKnowledge,validateKnowledge,areas,headings} from './build-knowledge.mjs';import {markdown,renderArticle} from './knowledge-markdown.mjs';
import {knowledgePaths} from './data/knowledge-paths.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const k=loadKnowledge(root),catalogue=JSON.parse(read('notes/reading-notes/library/catalogue.json'));validateKnowledge(k,catalogue.topics);
assert(markdown.render('$x^2+1$').includes('katex-mathml'));assert(markdown.render('$$\nx^2+1\n$$').includes('katex-display'));
assert(markdown.render('<script>alert(1)</script>').includes('&lt;script&gt;'));assert(!markdown.render('[bad](javascript:alert(1))').includes('href="javascript:'));
assert.throws(()=>markdown.render('$\\notarealmathcommand{x}$'));assert.throws(()=>markdown.render('$$\nx'));
const rendered=renderArticle('## A heading\n\n$x$\n\n## A heading\n\n$y$');assert.deepEqual(rendered.contents.map(x=>x.id),['a-heading','a-heading-2']);
if(process.argv.includes('--release')){
 assert.equal(k.articles.length,100);assert.equal(k.terms.length,500);
 for(const [area,quota] of Object.entries(areas)){assert.equal(k.articles.filter(e=>e.area===area).length,quota.articles,area);assert.equal(k.terms.filter(e=>e.area===area).length,quota.terms,area)}
 for(const [level,count] of Object.entries({Undergraduate:60,Graduate:30,Research:10}))assert.equal(k.articles.filter(e=>e.level===level).length,count,level);
 assert(k.articles.every(a=>k.terms.some(t=>t.id===a.id)),'Article lacks corresponding terminology');
}
if(process.argv.includes('--minimum')){assert(k.articles.length>=100&&k.terms.length>=500);for(const [area,q] of Object.entries(areas)){assert(k.articles.filter(e=>e.area===area).length>=q.articles,area);assert(k.terms.filter(e=>e.area===area).length>=q.terms,area)}}
const semantic=new Set();for(const t of k.terms){const key=[t.english,t.chinese,t.topic].join('|').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase();assert(!semantic.has(key),'Duplicate sense '+t.id);semantic.add(key)}
const conceptIds=new Set([...k.articles,...k.terms].map(e=>e.id));
assert.equal(new Set(knowledgePaths.map(r=>r.id)).size,knowledgePaths.length,'Duplicate reading route');
for(const route of knowledgePaths){assert(route.skip&&route.concepts.length>=3,'Incomplete reading route '+route.id);for(const id of route.concepts)assert(conceptIds.has(id),'Reading route references absent concept '+id)}
const pages=['resources/encyclopedia/index.html','resources/encyclopedia/paths.html','resources/encyclopedia/contributing.html','resources/terminology/index.html',...k.articles.map(a=>'resources/encyclopedia/'+a.id+'/index.html'),...k.terms.map(t=>'resources/terminology/'+t.id+'/index.html')];
for(const page of pages){
 const html=read(page),ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'Duplicate ID '+page);
 const article=k.articles.find(a=>page==='resources/encyclopedia/'+a.id+'/index.html');if(article)assert(html.includes(renderArticle(article.body).html),'Compiled article body differs: '+article.id);
 const term=k.terms.find(t=>page==='resources/terminology/'+t.id+'/index.html');if(term)for(const field of ['definitionEn','definitionZh','example','distinction'])assert(html.includes(markdown.render(term[field])),'Compiled term differs: '+term.id+' '+field);
 assert(html.includes('data-content-license')&&html.includes('CC BY-SA 4.0'),page+' licence');assert(!html.includes('cdn.jsdelivr')&&!html.includes('katex.js'),page+' client formula dependency');
 for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const url=match[1].replaceAll('&amp;','&');if(/^(?:https?:|mailto:)/.test(url))continue;
  const [address,anchor]=url.split('#'),relative=decodeURIComponent(address.split('?')[0]);let target=!relative?path.join(root,page):relative.startsWith('/en/')?path.join(root,relative.slice(4)):path.resolve(root,path.dirname(page),relative);if(relative.endsWith('/'))target=path.join(target,'index.html');assert(fs.existsSync(target),page+' -> '+url);if(anchor&&target.endsWith('.html'))assert(fs.readFileSync(target,'utf8').includes('id="'+decodeURIComponent(anchor)+'"'),page+' anchor '+url);
 }
 for(const tag of html.matchAll(/<a\b[^>]*href="https?:[^>]*>/g))assert(tag[0].includes('target="_blank"')&&tag[0].includes('noopener noreferrer'),page+' external target');
}
for(const page of ['resources/encyclopedia/index.html','resources/terminology/index.html']){
 const html=read(page),expected=page.includes('encyclopedia')?k.articles.length:k.terms.length;assert.equal([...html.matchAll(/<article class="entry/g)].length,expected);assert(html.includes('<noscript>'));assert(!/<article[^>]*\bhidden\b/.test(html));
 const decode=s=>s.replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>'),camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
 const entries=[...html.matchAll(/<article class="entry[^\"]*" ([^>]+)>/g)].map(m=>({dataset:Object.fromEntries([...m[1].matchAll(/data-([a-z-]+)="([^"]*)"/g)].map(a=>[camel(a[1]),decode(a[2])])),hidden:false,querySelector:()=>null}));
 const fields=[...html.matchAll(/<select[^>]*data-field="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)].map(m=>({dataset:{field:m[1]},value:'',options:[...m[2].matchAll(/<option value="([^"]*)"/g)].map(a=>({value:decode(a[1])}))}));
 const search={value:''},status={textContent:'',focus(){this.focused=true}},empty={hidden:true},events={};
 const button=()=>({disabled:false,addEventListener(t,fn){this.fn=fn}});const pages=[{hidden:true,parts:{'[data-prev]':button(),'[data-next]':button(),'[data-page-label]':{textContent:''}},querySelector(s){return this.parts[s]}}];
 const form={hidden:true,querySelectorAll:()=>fields,querySelector:s=>s==='input[type=search]'?search:null,addEventListener:(t,fn)=>events[t]=fn};const document={querySelector:()=>form,querySelectorAll:s=>s.startsWith('article')?entries:pages,getElementById:s=>s==='result-count'?status:empty};
 vm.runInNewContext(read('resources/assets/catalogue.js').replace(/^import[^\n]+\n/,''),{document,Date,URLSearchParams,location:{search:''}});
 const visible=()=>entries.filter(e=>!e.hidden);assert.equal(visible().length,Math.min(25,entries.length));if(entries.length>25){pages[0].parts['[data-next]'].fn();assert(status.focused)}
 const findQuery=(query,id)=>{events.reset({preventDefault(){}});search.value=query;events.input();assert(visible().some(e=>e.dataset.conceptId===id),page+' search '+query+' -> '+id)};
 if(page.includes('terminology')){
  findQuery('GCD','integer-greatest-common-divisor');
  findQuery('Poincare duality','poincare-duality');
  findQuery('SDE','stochastic-differential-equation');
  events.reset({preventDefault(){}});search.value='normal';events.input();
  for(const id of ['normal-subgroup','normal-topological-space','gaussian-distribution'])assert(visible().some(e=>e.dataset.conceptId===id),'Distinct normal sense '+id);
  const area=fields.find(f=>f.dataset.field==='area'),level=fields.find(f=>f.dataset.field==='level');
  area.value='Probability';level.value='Undergraduate';events.change();assert(visible().some(e=>e.dataset.conceptId==='gaussian-distribution'));assert(visible().every(e=>e.dataset.area===area.value&&e.dataset.level===level.value));
  events.reset({preventDefault(){}});const coverage=fields.find(f=>f.dataset.field==='coverage');assert(coverage,'Missing explanation-depth filter');coverage.value='Short definition only';events.change();assert(visible().length>0);assert(visible().every(e=>e.dataset.coverage===coverage.value));coverage.value='Encyclopedia explanation';events.change();assert(visible().length>0);assert(visible().every(e=>e.dataset.coverage===coverage.value));
 }else if(k.articles.some(e=>e.id==='fermats-little-theorem'))findQuery('費馬小定理','fermats-little-theorem');
 events.reset({preventDefault(){}});
 if(entries.length){search.value=(page.includes('encyclopedia')?k.articles[0]:k.terms[0]).chinese;events.input();assert(visible().length>0);assert(visible().every(e=>e.dataset.search.includes(search.value)));events.reset({preventDefault(){}});fields[0].value=entries[0].dataset.area;events.change();assert(visible().every(e=>e.dataset.area===fields[0].value));events.reset({preventDefault(){}});search.value='impossible-term-qx84921';events.input();assert.equal(visible().length,0);assert(!empty.hidden);events.reset({preventDefault(){}});assert.equal(visible().length,Math.min(25,entries.length))}
}
const report=JSON.parse(read('resources/knowledge-report.json'));assert.equal(report.articles,k.articles.length);assert.equal(report.terms,k.terms.length);
assert.equal(report.uniqueConcepts,conceptIds.size);assert.equal(report.readingRoutes,knowledgePaths.length);assert.equal(report.termsWithoutArticle,k.terms.filter(t=>!k.articles.some(a=>a.id===t.id)).length);
assert(!k.articles.some(a=>/this is the assignment|assignment's single|requested quota/i.test(a.body)),'Task scaffolding in published article');
const fontCss=read('resources/assets/katex/katex.min.css');for(const m of fontCss.matchAll(/url\(([^)]+)\)/g))assert(fs.existsSync(path.join(root,'resources/assets/katex',m[1])),'missing font '+m[1]);
assert.equal([...read('resources/index.html').matchAll(/<!-- knowledge-cards:start -->/g)].length,1);assert(read('notes/reading-notes/library/catalogue.html').includes('value="Free to read" selected'));
console.log(JSON.stringify({encyclopedia:k.articles.length,terminology:k.terms.length,checkedPages:pages.length,staticMath:true,sourceEvidenceSeparated:true,release:process.argv.includes('--release')}));
