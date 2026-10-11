(()=>{'use strict';
const form=document.querySelector('[data-catalogue]');if(!form)return;
const normalize=s=>String(s).normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[’']/g,'');
const entries=[...document.querySelectorAll('article[data-search]')];
const fields=[...form.querySelectorAll('select[data-field]')];
const search=form.querySelector('input[type=search]');
const status=document.getElementById('result-count'),empty=document.getElementById('no-results');
const pages=[...document.querySelectorAll('.pagination')];
const shortcut=form.querySelector('[data-open-now]'),all=form.querySelector('[data-all-programmes]');
let current=1,openOnly=Boolean(shortcut);const size=25;
if(shortcut&&typeof location!=='undefined'&&new URLSearchParams(location.search).get('applications')==='all')openOnly=false;
function windowState(entry,now){const start=Date.parse(entry.dataset.openFrom),end=Date.parse(entry.dataset.closeBefore);if(!Number.isFinite(start)||!Number.isFinite(end))return 'Window not verified';return now<start?'Upcoming reviewed window':now>=end?'Reviewed window ended':'Within reviewed application window'}
function render(){
 const now=Date.now(),words=normalize(search.value).trim().split(/\s+/).filter(Boolean);
 const found=entries.filter(e=>(!openOnly||windowState(e,now)==='Within reviewed application window')&&words.every(w=>normalize(e.dataset.search).includes(w))&&fields.every(f=>!f.value||e.dataset[f.dataset.field].split('|').includes(f.value)));
 const total=Math.max(1,Math.ceil(found.length/size));current=Math.min(current,total);
 const visible=new Set(found.slice((current-1)*size,current*size));
 entries.forEach(e=>{e.hidden=!visible.has(e);const badge=e.querySelector('[data-window-state]');if(badge)badge.textContent=windowState(e,now)+' · based on reviewed dates'});
 status.textContent=`${found.length} of ${entries.length} results${openOnly?' · reviewed windows open now':''}`;
 empty.hidden=found.length>0;
 if(shortcut){shortcut.setAttribute('aria-pressed',String(openOnly));all.setAttribute('aria-pressed',String(!openOnly))}
 pages.forEach(p=>{p.hidden=found.length<=size;p.querySelector('[data-page-label]').textContent=`Page ${current} of ${total}`;p.querySelector('[data-prev]').disabled=current===1;p.querySelector('[data-next]').disabled=current===total});
}
form.hidden=false;
form.addEventListener('submit',e=>e.preventDefault());
form.addEventListener('input',()=>{current=1;render()});
form.addEventListener('change',()=>{current=1;render()});
form.addEventListener('reset',e=>{e.preventDefault();search.value='';fields.forEach(f=>f.value='');openOnly=false;current=1;render()});
if(shortcut){shortcut.addEventListener('click',()=>{openOnly=true;current=1;render()});all.addEventListener('click',()=>{openOnly=false;current=1;render()});setInterval(render,60000)}
pages.forEach(p=>{p.querySelector('[data-prev]').addEventListener('click',()=>{current--;render();status.focus()});p.querySelector('[data-next]').addEventListener('click',()=>{current++;render();status.focus()})});
render();})();
