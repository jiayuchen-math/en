import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import {markdown,readArticle,renderArticle,escape as E} from './knowledge-markdown.mjs';

export const areas={foundations:{title:'Foundations & Logic',articles:10,terms:50},algebra:{title:'Algebra & Algebraic Geometry',articles:14,terms:70},analysis:{title:'Analysis, Measure & PDE',articles:18,terms:90},'geometry-topology':{title:'Geometry & Topology',articles:18,terms:90},'number-theory':{title:'Number Theory',articles:12,terms:60},probability:{title:'Probability',articles:8,terms:40},combinatorics:{title:'Combinatorics',articles:8,terms:40},dynamics:{title:'Dynamical Systems',articles:6,terms:30},'category-theory':{title:'Category Theory',articles:6,terms:30}};
export const headings=['Overview','Prerequisites','Definition and conventions','Intuition','Examples and non-examples','Important properties','Connections and further reading'];
export function loadKnowledge(root){
 const articles=[],terms=[],base=path.join(root,'resources/content/encyclopedia');
 const walk=dir=>{if(!fs.existsSync(dir))return;for(const e of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,e.name);if(e.isDirectory())walk(file);else if(e.name.endsWith('.md')){const a=readArticle(fs.readFileSync(file,'utf8'));if(a.status!=='draft')articles.push({...a,sourcePath:path.relative(root,file).replaceAll('\\','/')})}}};walk(base);
 for(const area of Object.keys(areas)){const file=path.join(root,'resources/data/terminology-'+area+'.json');if(fs.existsSync(file))terms.push(...JSON.parse(fs.readFileSync(file,'utf8')).filter(e=>e.status!=='draft'))}
 return {articles:articles.sort((a,b)=>a.title.localeCompare(b.title,'en')),terms:terms.sort((a,b)=>a.english.localeCompare(b.english,'en'))};
}
export function validateKnowledge({articles,terms},topics){
 const fail=(e,m)=>{throw Error(e.id+': '+m)},ids=list=>{const seen=new Set();for(const e of list){if(seen.has(e.id))fail(e,'duplicate concept ID');seen.add(e.id)}};ids(articles);ids(terms);
 const validateSource=(e,s)=>{if(!s.label||!/^https:\/\//.test(s.url)||!s.locator||!/^\d{4}-\d{2}-\d{2}$/.test(s.checked)||!Number.isFinite(Date.parse(s.checked)))fail(e,'incomplete primary-source evidence')};
 for(const e of [...articles,...terms]){if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.id)||!areas[e.area]||!['Undergraduate','Graduate','Research'].includes(e.level)||!topics.some(t=>t.id===e.topic))fail(e,'invalid identity, taxonomy or level');if(!e.chinese||!e.contributors?.length||!Array.isArray(e.aliases))fail(e,'missing language or attribution metadata')}
 for(const a of articles){for(const field of ['title','summary','body'])if(!a[field])fail(a,'missing '+field);for(const h of headings)if(!a.body.split('\n').some(line=>line.trim()==='## '+h))fail(a,'missing heading '+h);if(!a.references?.length)fail(a,'no source');a.references.forEach(s=>validateSource(a,s));if(!Array.isArray(a.prerequisites)||!Array.isArray(a.related))fail(a,'missing relations');const words=a.body.replace(/\$\$[\s\S]*?\$\$/g,'').split(/\s+/).filter(Boolean).length;if(words<350)fail(a,'article is too short ('+words+' words)')}
 for(const t of terms){for(const field of ['english','definitionEn','definitionZh','example','distinction','translationStatus'])if(!t[field])fail(t,'missing '+field);if(!['Standardized','Literature usage','Community usage','Terminology unsettled'].includes(t.translationStatus))fail(t,'unknown translation status');if(!t.definitionSources?.length||!t.translationSources?.length)fail(t,'definition and translation need separate evidence');[...t.definitionSources,...t.translationSources].forEach(s=>validateSource(t,s))}
 for(const a of articles){const words=a.body.replace(/\$\$[\s\S]*?\$\$/g,'').split(/\s+/).filter(Boolean).length;if(words>750)fail(a,'article exceeds the 750-word content contract ('+words+' words)')}
 for(const t of terms)for(const s of [...t.definitionSources,...t.translationSources])if(/relevant definitions|各相应\s*(?:definition|定义)/i.test(s.locator))fail(t,'replace generic source bundle with an inspected concept-specific locator');
 return true;
}
export function buildKnowledge({root,wrap,controls,pagination,external}){
 const knowledge=loadKnowledge(root),{articles,terms}=knowledge;
 const catalogue=JSON.parse(fs.readFileSync(path.join(root,'notes/reading-notes/library/catalogue.json'),'utf8'));validateKnowledge(knowledge,catalogue.topics);
 const save=(p,s)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),s)};
 const read=p=>fs.readFileSync(path.join(root,p),'utf8'),topic=id=>catalogue.topics.find(t=>t.id===id);
 const articleById=new Map(articles.map(a=>[a.id,a])),termById=new Map(terms.map(t=>[t.id,t]));
 const articleUrl=id=>'/en/resources/encyclopedia/'+id+'/',termUrl=id=>'/en/resources/terminology/'+id+'/';
 const concept=id=>articleById.has(id)?{url:articleUrl(id),title:articleById.get(id).title}:termById.has(id)?{url:termUrl(id),title:termById.get(id).english}:null;
 const anchor=(url,title)=>`<a href="${E(url)}">${E(title)}</a>`;
 const relations=ids=>ids.map(concept).filter(Boolean).map(c=>anchor(c.url,c.title)).join(' · ');
 const sourceList=sources=>`<ol class="source-list">${sources.map(s=>`<li>${external(s.url,s.label)}<span class="source-locator">${E(s.locator)} · Checked ${E(s.checked)}</span>${s.note?'<span class="source-locator">'+E(s.note)+'</span>':''}</li>`).join('')}</ol>`;
 const licence=`<p class="knowledge-meta" data-content-license>Original encyclopedia and terminology content: ${external('https://creativecommons.org/licenses/by-sa/4.0/','CC BY-SA 4.0')}. ${anchor('/en/resources/encyclopedia/contributing.html','Contribute or report a correction')}.</p>`;
 const contribution=(source,id)=>`<div class="actions contribution-controls">${external('https://github.com/jiayuchen-math/en/edit/main/'+source,'Edit source / propose a PR')}${external('https://github.com/jiayuchen-math/en/issues/new?title='+encodeURIComponent('Knowledge correction: '+id)+'&body='+encodeURIComponent('Entry: '+id+'\nSuggested correction:\nSource and exact location:\n'),'Report a correction')}</div>`;
 const knowledgeWrap=(title,body,section)=>{
  let html=wrap(title,body+licence);html=html.replace('</head>','<link rel="stylesheet" href="/en/resources/assets/knowledge.css?v='+createHash('sha256').update(read('resources/assets/knowledge.css')).digest('hex').slice(0,12)+'"><link rel="stylesheet" href="/en/resources/assets/katex/katex.min.css"></head>');
  html=html.replace('</nav>',' · '+anchor('/en/resources/'+section+'/',section==='encyclopedia'?'Encyclopedia':'Terminology')+'</nav>');return html;
 };
 const meta=e=>`<p class="knowledge-meta">${E(areas[e.area].title)} · ${E(e.level)} · ${E(e.contributors.join('; '))}</p>`;
 const attrs=e=>`data-concept-id="${E(e.id)}" data-search="${E([e.title||e.english,e.chinese,...e.aliases,areas[e.area].title,topic(e.topic).title,e.summary||e.definitionEn,e.definitionZh||''].join(' '))}" data-area="${E(areas[e.area].title)}" data-topic="${E(topic(e.topic).title)}" data-level="${E(e.level)}" data-translation-status="${E(e.translationStatus||'')}"`;
 const library=e=>`<p class="concept-links">${anchor('/en/notes/reading-notes/library/catalogue.html?topic='+encodeURIComponent(topic(e.topic).title),'Recommended reading in this subject')} · ${anchor('/en/resources/library-paths/'+e.topic+'.html','Preparation & skip guidance')}</p>`;
 for(const a of articles){
  const rendered=renderArticle(a.body),toc='<nav class="contents" aria-label="Article contents"><strong>Contents</strong><ul>'+rendered.contents.map(c=>'<li>'+anchor('#'+c.id,c.label)+'</li>').join('')+'</ul></nav>';
  const links=`${termById.has(a.id)?'<p>'+anchor(termUrl(a.id),'Chinese translation, usage & terminology')+'</p>':''}${a.prerequisites.length?'<p>Prerequisite concepts: '+(relations(a.prerequisites)||'See the preparation described below.')+'</p>':''}`;
  const relatedLinks=relations(a.related);
  const body=`<p class="chinese" lang="zh-Hans">${E(a.chinese)}</p>${meta(a)}<p>${E(a.summary)}</p>${links}${toc}<div class="article-body">${rendered.html}</div>${relatedLinks?'<h2>Related concepts</h2><p class="concept-links">'+relatedLinks+'</p>':''}${library(a)}<section><h2 id="sources">Sources</h2>${sourceList(a.references)}</section>${contribution(a.sourcePath,a.id)}`;
  save('resources/encyclopedia/'+a.id+'/index.html',knowledgeWrap(a.title,body,'encyclopedia'));
 }
 for(const t of terms){
  const body=`<p class="chinese" lang="zh-Hans">${E(t.chinese)}</p>${meta(t)}${t.aliases.length?'<p class="knowledge-meta">Other names / variants: '+E(t.aliases.join(' · '))+'</p>':''}<p class="knowledge-meta">Translation evidence: ${E(t.translationStatus)}</p><section class="definition-pair"><h2>Meaning in context</h2>${markdown.render(t.definitionEn)}<div lang="zh-Hans">${markdown.render(t.definitionZh)}</div></section><h2>Example</h2>${markdown.render(t.example)}<h2>Usage and distinctions</h2>${markdown.render(t.distinction)}${articleById.has(t.id)?'<p>'+anchor(articleUrl(t.id),'Read the encyclopedia explanation')+'</p>':''}${library(t)}<h2>Definition sources</h2>${sourceList(t.definitionSources)}<h2>Translation sources</h2>${sourceList(t.translationSources)}${contribution('resources/data/terminology-'+t.area+'.json',t.id)}`;
  save('resources/terminology/'+t.id+'/index.html',knowledgeWrap(t.english,body,'terminology'));
 }
 const articleCards=articles.map(a=>`<article class="entry" ${attrs(a)}><h3>${anchor(articleUrl(a.id),a.title)} <span lang="zh-Hans">${E(a.chinese)}</span></h3>${meta(a)}<p>${E(a.summary)}</p>${termById.has(a.id)?'<p>'+anchor(termUrl(a.id),'Terminology & translation')+'</p>':''}</article>`).join('\n');
 const termCards=terms.map(t=>`<article class="entry term-list" ${attrs(t)}><h3>${anchor(termUrl(t.id),t.english)} · <span lang="zh-Hans">${E(t.chinese)}</span></h3>${meta(t)}${markdown.render(t.definitionEn)}<p class="knowledge-meta">${E(t.translationStatus)}${t.aliases.length?' · '+E(t.aliases.join(' · ')):''}</p>${articleById.has(t.id)?'<p>'+anchor(articleUrl(t.id),'Encyclopedia explanation')+'</p>':''}</article>`).join('\n');
 const filtered=list=>list.map(e=>({...e,area:areas[e.area].title,topic:topic(e.topic).title})),filters=[['area','Area'],['topic','Subject'],['level','Level']];
 save('resources/encyclopedia/index.html',knowledgeWrap('Mathematics Encyclopedia',`<p>${articles.length} source-linked editorial explanations, from undergraduate foundations to research ideas.</p><p>${anchor('/en/resources/terminology/','Terminology & Translations')} · ${anchor('contributing.html','Writing & contribution guide')}</p>${controls(filtered(articles),filters)}${articleCards}${pagination()}`,'encyclopedia'));
 save('resources/terminology/index.html',knowledgeWrap('Terminology & Translations',`<p>${terms.length} mathematical senses with English names, Chinese translations, contextual definitions and source evidence.</p><p>${anchor('/en/resources/encyclopedia/','Mathematics Encyclopedia')}</p>${controls(filtered(terms),[...filters,['translationStatus','Translation evidence']])}${termCards}${pagination()}`,'terminology'));
 save('resources/encyclopedia/contributing.html',knowledgeWrap('Writing & Contribution Guide',markdown.render(read('resources/content/CONTRIBUTING.md')),'encyclopedia'));
 const areaCounts=Object.fromEntries(Object.keys(areas).map(area=>[area,{articles:articles.filter(a=>a.area===area).length,terms:terms.filter(t=>t.area===area).length}]));
 const report={articles:articles.length,terms:terms.length,areaCounts,levels:Object.fromEntries(['Undergraduate','Graduate','Research'].map(level=>[level,articles.filter(a=>a.level===level).length])),reviewDate:[...articles.flatMap(a=>a.references),...terms.flatMap(t=>[...t.definitionSources,...t.translationSources])].map(s=>s.checked).sort().at(-1)||null};
 save('resources/data/knowledge-index.json',JSON.stringify({articles:articles.map(({body,...a})=>a),terms},null,2)+'\n');save('resources/knowledge-report.json',JSON.stringify(report,null,2)+'\n');
 const marker='</div><h2>How to use this collection</h2>';let hub=read('resources/index.html').replace(/<!-- knowledge-cards:start -->[\s\S]*?<!-- knowledge-cards:end -->/g,'');
 if(!hub.includes(marker))throw Error('Resources hub card insertion point missing');hub=hub.replace(marker,`<!-- knowledge-cards:start --><section class="card"><h2><a href="encyclopedia/">Mathematics Encyclopedia</a></h2><p>${articles.length} original, source-linked concept explanations, with examples, conventions and further reading.</p></section><section class="card"><h2><a href="terminology/">Terminology &amp; Translations</a></h2><p>${terms.length} English–Chinese mathematical senses, with usage and translation evidence.</p></section><!-- knowledge-cards:end -->`+marker);save('resources/index.html',hub);
 // Ship only the fonts referenced by the bundled stylesheet; no runtime CDN.
 const dist=path.join(root,'resources/node_modules/katex/dist'),vendor='resources/assets/katex';fs.mkdirSync(path.join(root,vendor,'fonts'),{recursive:true});
 const css=fs.readFileSync(path.join(dist,'katex.min.css'),'utf8').replace(/,url\(fonts\/[^)]+\.(?:woff|ttf)\) format\("(?:woff|truetype)"\)/g,'');save(vendor+'/katex.min.css',css);fs.copyFileSync(path.join(root,'resources/node_modules/katex/LICENSE'),path.join(root,vendor,'LICENSE'));
 for(const font of fs.readdirSync(path.join(dist,'fonts')).filter(f=>f.endsWith('.woff2')))fs.copyFileSync(path.join(dist,'fonts',font),path.join(root,vendor,'fonts',font));
 return report;
}
