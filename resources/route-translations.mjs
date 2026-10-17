import fs from 'node:fs';
import path from 'node:path';
import {decodeHTML} from 'entities';
import {routes,labels,preparation,locators} from './data/translations/routes.mjs';
import {subjectTranslations,translateSubjectFigures} from './subject-translations.mjs';
import {sectionDirectionBody} from './direction-sections.mjs';
import {escape as E,renderArticle} from './knowledge-markdown.mjs';
export {routes as routeTranslations};

export function translatedRoute(route){
 const entry=routes[route.id];if(!entry||entry.stages.length!==route.stages.length)throw Error('Missing route translation: '+route.id);
 return {...route,title:entry.title,goal:entry.goal,stages:route.stages.map((s,i)=>({...s,title:entry.stages[i][0],note:entry.stages[i][1]}))};
}
export function translatedRouteTopics(topics){return topics.map(t=>({...t,title:subjectTranslations[t.id]?.title||t.title}))}
export function translatedRouteNodes(nodes){
 return Object.fromEntries(Object.entries(nodes).map(([id,node])=>{
  if(!preparation[id])throw Error('Missing route preparation translation: '+id);
  return [id,{...node,skip:preparation[id],...(node.title?{title:id==='sheaves'?'层与粘合':subjectTranslations[id]?.title||node.title}:{})}];
 }));
}
export function translateRouteLabels(html,protectedLabels=[]){
 const protectedText=new Set(protectedLabels);
 return html.replace(/>([^<>]+)</g,(_,value)=>{
  const text=decodeHTML(value).trim();return '>'+(!protectedText.has(text)&&labels[text]?value.replace(value.trim(),E(labels[text])):value)+'<';
 }).replace(/Checked (\d{4}-\d{2}-\d{2})/g,'核查日期 $1');
}
export function translatedDirectionIntroduction(entry,id,root,render){
 const file=path.join(root,'resources/content/route-translations-zh',id+'.md');
 const body=fs.readFileSync(file,'utf8').trim();
 const english=renderArticle(sectionDirectionBody(id,entry.body));
 const referenceLocators=locators[id];if(referenceLocators?.length!==entry.references.length)throw Error('Translation reference count: '+id);
 const translated={...entry,body,references:entry.references.map((r,i)=>({...r,locator:referenceLocators[i]}))};
 const result=render(translated,id),sourceHeadings=[...english.html.matchAll(/<h([23]) id="([^"]+)">/g)];let index=0;
 // Translate labels while keeping all original heading URLs, including deep links.
 result.html=result.html.replace(/<h([23]) id="[^"]+">/g,(_,level)=>{
  const original=sourceHeadings[index++];if(!original||level!==original[1])throw Error('Translation heading structure: '+id);
  return '<h'+level+' id="'+original[2]+'">';
 });
 if(index!==sourceHeadings.length||result.contents.length!==english.contents.length)throw Error('Incomplete translation sections: '+id);
 result.contents=result.contents.map((h,i)=>({...h,id:english.contents[i].id}));
 result.html=translateRouteLabels(translateSubjectFigures(result.html),entry.references.map(r=>r.label||r.title)).replaceAll('。. 核查日期','。核查日期');
 return result;
}
