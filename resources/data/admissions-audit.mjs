import fs from 'node:fs';
import core from './admissions-audit-core.mjs';
import kaust from './admissions-audit-kaust.mjs';
export const auditFields=['tuition','fundingDetail','selection','cycle'];
export const auditFieldLabels={tuition:'Tuition',fundingDetail:'Funding',selection:'Tests / supervisor',cycle:'Application dates'};
const files=['north-america-ug','north-america-grad','asia','commonwealth','europe-other','latam-other'];
const overrides={...core};
for(const part of files){
 const url=new URL(`./admissions-audit-${part}.json`,import.meta.url);
 if(!fs.existsSync(url))continue;
 const data=JSON.parse(fs.readFileSync(url,'utf8'));
 for(const [id,e] of Object.entries(data)){
  if(overrides[id])throw Error('Duplicate admissions audit ownership: '+id);
  overrides[id]=e;
 }
}
// Explicit second-pass owners may replace their assigned base entries only.
const followups=[kaust];
for(const part of ['asia-undergraduate','asia-additional']){
 const url=new URL(`./admissions-audit-${part}.json`,import.meta.url);
 if(fs.existsSync(url))followups.push(JSON.parse(fs.readFileSync(url,'utf8')));
}
const followed=new Set();
for(const data of followups)for(const [id,e] of Object.entries(data)){
 if(!overrides[id]||followed.has(id))throw Error('Invalid second-pass ownership: '+id);
 followed.add(id);
 const prior=overrides[id];
 overrides[id]={...prior,...e,audit:{...prior.audit,...e.audit,fields:{...prior.audit?.fields,...e.audit?.fields}}};
}
export const auditedIds=Object.keys(overrides);
const uniqueSources=sources=>[...new Map(sources.filter(Boolean).map(s=>[typeof s==='string'?s:s.url,typeof s==='string'?{url:s,label:'Official source'}:s])).values()];
export function withAdmissionsAudit(programme){
 const change=overrides[programme.id];
 if(!change)return {...programme,admissionsAuditStatus:'Not reviewed in this batch'};
 const fields=Object.fromEntries(auditFields.map(field=>{
  const f=change.audit?.fields?.[field];
  return [field,f?{...f,checked:f.checked||change.audit.checked}: {status:'Not verified',checked:change.audit?.checked||change.checked,note:'This field has no new field-level verification.'}];
 }));
 const audit={...change.audit,fields};
 const unsupported=auditFields.filter(f=>['Not verified','Not published'].includes(fields[f].status));
 const limited=auditFields.filter(f=>['Historical','Partially verified'].includes(fields[f].status));
 const e={...programme,...change,audit,
  admissionsAuditStatus:unsupported.length?'Contains unresolved fields':limited.length?'Contains partial / historical information':'All four stated rules reviewed',
  sources:uniqueSources([...(programme.sources||[]),...(change.sources||[]),...Object.values(fields).filter(f=>f.source).map(f=>({url:f.source,label:'Field-level official audit source'}))]),
  evidence:[...(programme.evidence||[]).filter(f=>!auditFields.includes(f.field)),...(change.evidence||[])],
  applicationDates:change.applicationDates||programme.applicationDates||[]
 };
 if(change.clearApplicationWindow)e.applicationWindow=null;
 // Show the new source-specific limitation instead of a generic old placeholder.
 for(const field of auditFields)if(!Object.hasOwn(change,field)&&fields[field].note){
  const prior=e[field];
  e[field]=fields[field].note;
  if(!['Not verified','Not published'].includes(fields[field].status)&&prior)e[field]+=' Prior recorded detail (not newly established): '+prior;
 }
 // Preserve a previous dated source when a new review only found general rules.
 // The dated record retains its own review date and does not acquire this audit's date.
 if(e.applicationWindow&&change.intakeYear==='Year not verified')e.intakeYear=programme.intakeYear;
 e.applicationDates=[...new Map(e.applicationDates.map(d=>[`${d.type}|${d.date}|${d.label||''}|${d.source}`,d])).values()];
 return e;
}
export function admissionsAuditReport(programmes){
 const reviewedThrough=programmes.flatMap(e=>[e.audit?.checked,...Object.values(e.audit?.fields||{}).map(f=>f.checked)]).filter(Boolean).sort().at(-1)||'Not reviewed';
 const tally=entries=>Object.fromEntries(auditFields.map(field=>[field,Object.fromEntries(['Verified','Partially verified','Historical','Not published','Not verified','Not reviewed'].map(status=>[status,entries.filter(e=>(e.audit?.fields?.[field]?.status||'Not reviewed')===status).length]))]));
 return {checked:reviewedThrough,scope:'Existing routes only; four fields checked independently. Verified means the stated sourced rule, not guaranteed admission or funding. Recurring rules are not projected into dated calls.',routes:programmes.length,audited:programmes.filter(e=>e.audit).length,fields:tally(programmes),countries:[...new Set(programmes.flatMap(e=>e.country.split('|')))].sort().map(country=>{const routes=programmes.filter(e=>e.country.split('|').includes(country));return {country,routes:routes.length,fields:tally(routes)}}),unresolved:programmes.filter(e=>auditFields.some(f=>!e.audit||['Not verified','Not published','Partially verified','Historical'].includes(e.audit.fields[f].status))).map(e=>({id:e.id,institution:e.institution,degree:e.degree,country:e.country,fields:Object.fromEntries(auditFields.filter(f=>e.audit?.fields[f]?.status!=='Verified').map(f=>[f,e.audit?.fields[f]||{status:'Not reviewed'}]))}))};
}
