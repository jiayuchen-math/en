import {backgroundAssessment} from './background-rules.js?v=20261013-copy';
const form=document.querySelector('[data-background]');
if(form){
 const entries=[...document.querySelectorAll('article[data-background-record]')];const names=['residence','qualificationCountry','stage','languages','citizenship','koreanCitizenship','permitCountry','permit','permitValid','governmentFunded','previousDutchDegree','feeYear','budget','currency','funding','courses'];
 function render(){
  const b=Object.fromEntries(names.map(n=>[n,form.elements.namedItem(n)?.value||'']));
  const active=Object.values(b).some(Boolean);const state=form.querySelector('[data-background-summary]');
  state.textContent=active?'Background matching is active. Choose a background filter to explore matching routes.':'Choose any fields to explore matching routes.';
  for(const entry of entries){const output=entry.querySelector('[data-background-output]');output.hidden=!active;if(!active){entry.dataset.backgroundMatch='Eligibility not established';output.replaceChildren();continue}
   const programme=JSON.parse(entry.dataset.backgroundRecord);const result=backgroundAssessment(programme,b);entry.dataset.backgroundMatch=result.state;const title=document.createElement('strong');title.textContent=result.state;output.replaceChildren(title);
   for(const reason of result.reasons){const p=document.createElement('p');p.className='meta';p.textContent=reason;output.append(p)}
   const p=document.createElement('p');p.className='meta';p.textContent=result.fee.state+': '+result.fee.text;output.append(p);
   if(result.fee.source){const a=document.createElement('a');a.href=result.fee.source;a.textContent='Official fee-status rule';a.target='_blank';a.rel='noopener noreferrer';output.append(a)}
  }
  document.dispatchEvent(new Event('background-updated'));
 }
 form.hidden=false;form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('input',render);form.addEventListener('change',render);form.addEventListener('reset',()=>queueMicrotask(render));render();
}
