import fs from 'node:fs';
import assert from 'node:assert/strict';
import source from './data/programs-source.mjs';
import {withApplicationWindow} from './data/application-windows.mjs';
import {withAdmissionsAudit,admissionsAuditReport,auditFields,auditedIds} from './data/admissions-audit.mjs';
const programmes=JSON.parse(fs.readFileSync('resources/data/programs.json','utf8'));
const html=fs.readFileSync('resources/study-careers/index.html','utf8');
const statuses=new Set(['Verified','Partially verified','Historical','Not published','Not verified']);
assert.equal(programmes.length,source.length);
assert.equal(new Set(programmes.map(e=>e.id)).size,225);
assert.equal(auditedIds.length,225);
for(const e of programmes){
 assert(e.audit,'Missing field audit: '+e.id);
 for(const f of auditFields){
  assert.equal(typeof e[f],'string',`${e.id}: ${f} text`);
  assert(e[f].trim(),`${e.id}: empty ${f}`);
  const a=e.audit.fields[f];assert(statuses.has(a.status),`${e.id}: ${f} ${a.status}`);
  assert(/^2026-10-(12|13)$/.test(a.checked),`${e.id}: actual field review date`);
  if(a.status!=='Not verified')assert(a.source&&/^https?:\/\//.test(a.source),`${e.id}: ${f} source`);
 }
 for(const d of e.applicationDates){
  assert(['Admission','Scholarship','Supporting documents','Test registration'].includes(d.type));
  assert(/^\d{4}-\d{2}-\d{2}$/.test(d.date));
  assert.equal(new Date(d.date+'T12:00:00Z').toISOString().slice(0,10),d.date);
  assert(/^https?:\/\//.test(d.source),`${e.id}: dated milestone source`);
 }
 const article=html.slice(html.indexOf(`id="${e.id}"`)).split('</article>')[0];
 for(const f of auditFields)assert(article.includes(e.audit.fields[f].status));
}
for(const name of ['Harvard University','Stanford University','University of California, Berkeley']){
 const p=programmes.find(e=>e.institution===name&&e.degree==='Doctorate');
 assert(!p.applicationWindow,`${name}: no inferred opening`);
}
const synthetic={id:'synthetic-missing-next-cycle',institution:'Test',cycle:'Unsupported older explicit date',applicationDates:[],sources:[],evidence:[]};
assert.equal(withAdmissionsAudit(synthetic).admissionsAuditStatus,'Not reviewed in this batch');
const report=admissionsAuditReport(programmes);assert.equal(report.audited,225);
for(const f of auditFields)assert.equal(Object.values(report.fields[f]).reduce((a,b)=>a+b,0),225);
assert(html.includes('admissions-audit-report.json'));
assert(html.includes('<noscript>'));
assert.equal((html.match(/<article class="entry"/g)||[]).length,225);
const external=[...html.matchAll(/<a\s+[^>]*href="https?:\/\/[^>]+>/g)].map(m=>m[0]);
assert(external.every(a=>a.includes('target="_blank"')&&a.includes('rel="noopener noreferrer"')));
assert(!html.includes('href="undefined"'));
console.log(JSON.stringify({routes:225,fieldStatuses:report.fields,datedMilestones:programmes.reduce((s,e)=>s+e.applicationDates.length,0),externalSourcesOpenNewTabs:true,allEntriesWithoutJavaScript:true}));
