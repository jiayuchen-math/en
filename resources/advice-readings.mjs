import fs from 'node:fs';
import path from 'node:path';

const E=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const languageTag={Chinese:'zh-Hans',English:'en',French:'fr',Japanese:'ja'};
export const adviceSections=[
  ['learning-research','Learning, writing & research'],
  ['us-phd','US mathematics PhD applications'],
  ['france-europe','France & European masters'],
  ['japan-exams','Japanese mathematics entrance exams'],
];
const external=(url,label)=>`<a href="${E(url)}" target="_blank" rel="noopener noreferrer">${E(label)}</a>`;

export function loadAdviceReadings(root){
  const rows=JSON.parse(fs.readFileSync(path.join(root,'resources/data/advice-readings.json'),'utf8'));
  const ids=new Set(),urls=new Set();
  for(const entry of rows){
    for(const key of ['id','title','author','url','source','section','kind','area','language','note','use','checked'])
      if(typeof entry[key]!=='string'||!entry[key].trim())throw new Error(`Advice reading ${entry.id}: missing ${key}`);
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id)||ids.has(entry.id))throw new Error('Duplicate or invalid advice ID: '+entry.id);
    const key=new URL(entry.url).href.replace(/\/$/,'');
    if(urls.has(key))throw new Error('Duplicate advice URL: '+entry.url);
    if(!adviceSections.some(([id])=>id===entry.section))throw new Error('Unknown advice section: '+entry.section);
    if(!/^\d{4}-\d{2}-\d{2}$/.test(entry.checked))throw new Error('Missing review date: '+entry.id);
    for(const url of [entry.url,entry.source,entry.alternateUrl].filter(Boolean))if(!/^https?:$/.test(new URL(url).protocol))throw new Error('Unsafe advice link: '+url);
    ids.add(entry.id);urls.add(key);
  }
  return rows.map(entry=>({...entry,category:entry.section==='learning-research'?'Learning & research advice':'Application advice & experiences'}));
}

export function adviceMetadata(entry){
  return [entry.kind,entry.published,entry.accessNote,entry.caveat].filter(Boolean).join(' · ');
}

export function renderAdviceEntry(entry){
  const original=entry.originalTitle||entry.chineseLabel;
  return `<article class="portal-entry" id="${E(entry.id)}"><h3>${external(entry.url,entry.title)}</h3>${original?`<p lang="${entry.script==='Traditional'?'zh-Hant':languageTag[entry.language]||'und'}">${E(original)}</p>`:''}<p class="entry-meta">${E([entry.author,entry.language,entry.kind,entry.published].filter(Boolean).join(' · '))}</p><p>${E(entry.note)}</p><p>${E(entry.use)}</p>${entry.caveat?`<p class="meta">${E(entry.caveat)}</p>`:''}<p class="meta">${E(entry.accessNote?entry.accessNote+' · ':'')}Checked ${E(entry.checked)}${entry.source!==entry.url?' · '+external(entry.source,entry.source.includes('zhihu.com/en/')?'Zhihu English rendering (reviewed)':'Source / author page'):''}${entry.alternateUrl?' · '+external(entry.alternateUrl,entry.alternateLabel||'Author’s alternative version'):''}</p></article>`;
}

export function advicePage(allRows,{scope='all'}={}){
  const rows=allRows.filter(entry=>scope==='learning'?entry.section==='learning-research':scope==='applications'?entry.section!=='learning-research':true);
  const sections=adviceSections.filter(([id])=>rows.some(entry=>entry.section===id));
  const contents=sections.map(([id,label])=>({id,label}));
  const chinese=rows.filter(entry=>entry.language==='Chinese');
  const title=scope==='learning'?'Study Advice':scope==='applications'?'Application Experiences':'Advice & Experiences';
  const introduction=scope==='learning'?'How other mathematicians read, learn, write and find worthwhile questions.':scope==='applications'?'Accounts of choosing programs, preparing applications and taking mathematics entrance exams.':'The complete advice collection. For a focused view, choose study advice or application experiences.';
  const body=`<p>${introduction}</p><p><a href="/en/resources/links/study-advice.html">Study advice</a> · <a href="/en/resources/study-careers/experiences.html">Application experiences</a> · <a href="/en/resources/library-paths/reading-a-text.html">Reading a mathematics text</a></p><details id="chinese-readings" data-portal-disclosure><summary>Chinese-language reading — ${chinese.length} selections</summary><ul>${chinese.map(entry=>`<li><a href="#${E(entry.id)}" lang="${entry.script==='Traditional'?'zh-Hant':'zh-Hans'}">${E(entry.originalTitle||entry.chineseLabel||entry.title)}</a> — ${E(entry.author)}</li>`).join('')}</ul></details>${sections.map(([id,label])=>`<section id="${id}"><h2>${E(label)}</h2>${rows.filter(entry=>entry.section===id).map(renderAdviceEntry).join('\n')}</section>`).join('\n')}`;
  return {title,body,contents:[{id:'chinese-readings',label:'Chinese-language reading'},...contents]};
}
