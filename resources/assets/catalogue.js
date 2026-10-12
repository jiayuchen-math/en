import {applicationState} from './application-time.js?v=20261011a';
(()=>{'use strict';
const form=document.querySelector('[data-catalogue]');if(!form)return;
const normalize=s=>String(s).normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[’']/g,'');
const entries=[...document.querySelectorAll('article[data-search]')];
const fields=[...form.querySelectorAll('select[data-field]')],search=form.querySelector('input[type=search]');
const parameters=new URLSearchParams(location.search);
search.value=parameters.get('q')||'';
// Country audit links use a real exact-match filter, not an ambiguous keyword.
fields.forEach(f=>{const v=parameters.get(f.dataset.field);if(v&&[...f.options].some(o=>o.value===v))f.value=v});
const status=document.getElementById('result-count'),empty=document.getElementById('no-results');
const pages=[...document.querySelectorAll('.pagination')];
const from=form.querySelector('[name=deadline-from]'),to=form.querySelector('[name=deadline-to]');
const dateType=form.querySelector('[name=date-type]'),sort=form.querySelector('[name=deadline-sort]');
const dateError=form.querySelector('[data-date-error]');let current=1;const size=25;
const dates=e=>{try{return JSON.parse(e.dataset.applicationDates||'[]')}catch{return []}};
const deadlines=e=>dates(e).filter(d=>d.type===(dateType?.value||'Admission')&&d.date);
const firstDeadline=e=>deadlines(e).map(d=>d.date).sort()[0]||'9999-12-31';
function render(){
 const now=Date.now(),words=normalize(search.value).trim().split(/\s+/).filter(Boolean);
 const invalid=Boolean(from?.value&&to?.value&&from.value>to.value);
 if(dateError)dateError.hidden=!invalid;
 const found=entries.filter(e=>!invalid&&words.every(w=>normalize(e.dataset.search).includes(w))&&fields.every(f=>{
  const value=f.dataset.field==='applicationStatus'?applicationState(e.dataset,now):e.dataset[f.dataset.field]||'';
  return !f.value||value.split('|').includes(f.value);
 })&&(!(from?.value||to?.value)||deadlines(e).some(d=>(!from.value||d.date>=from.value)&&(!to.value||d.date<=to.value))));
 if(sort?.value==='deadline')found.sort((a,b)=>firstDeadline(a).localeCompare(firstDeadline(b)));
 const total=Math.max(1,Math.ceil(found.length/size));current=Math.min(current,total);
 const visible=new Set(found.slice((current-1)*size,current*size));
 entries.forEach(e=>{e.hidden=!visible.has(e);const badge=e.querySelector('[data-window-state]');if(badge)badge.textContent=applicationState(e.dataset,now)+' · based on reviewed dates'});
 status.textContent=`${found.length} of ${entries.length} results`;
 empty.hidden=found.length>0;
 pages.forEach(p=>{p.hidden=found.length<=size;p.querySelector('[data-page-label]').textContent=`Page ${current} of ${total}`;p.querySelector('[data-prev]').disabled=current===1;p.querySelector('[data-next]').disabled=current===total});
}
form.hidden=false;form.addEventListener('submit',e=>e.preventDefault());
form.addEventListener('input',()=>{current=1;render()});form.addEventListener('change',()=>{current=1;render()});
form.addEventListener('reset',e=>{e.preventDefault();search.value='';fields.forEach(f=>f.value='');if(from)from.value='';if(to)to.value='';if(dateType)dateType.value='Admission';if(sort)sort.value='';current=1;render()});
if(from){setInterval(render,60000);document.addEventListener('background-updated',()=>{current=1;render()})}
pages.forEach(p=>{p.querySelector('[data-prev]').addEventListener('click',()=>{current--;render();status.focus()});p.querySelector('[data-next]').addEventListener('click',()=>{current++;render();status.focus()})});
render();})();
