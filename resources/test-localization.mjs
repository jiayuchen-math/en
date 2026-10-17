import fs from 'node:fs';
import assert from 'node:assert/strict';
import {translateUI,languageURL,zh} from './assets/locale-data.js';
import {initialLanguage} from './assets/language.js';
import {stateURL,readState} from './assets/portal-catalogue-core.js';
import {shell} from './ui-shell.mjs';
import {chineseCompanion,localizedSubjects,chineseSubjectMetadata,subjectGuideFile} from './localization.mjs';
const root=new URL('../',import.meta.url),read=file=>fs.readFileSync(new URL(file,root),'utf8');
assert.equal(translateUI('Search'),'搜索');assert.equal(translateUI('Search','en'),'Search');
assert.equal(translateUI('The Rising Sea: Foundations of Algebraic Geometry'),'The Rising Sea: Foundations of Algebraic Geometry');
assert.equal(translateUI('Page 3 of 19'),'第 3／19 页');
assert.equal(translateUI('53 of 576 results · Showing 26–50 · Page 2 of 3'),'53／576 条结果 · 显示 26–50 条 · 第 2／3 页');
const original='https://jiayuchen-math.github.io/resources/study-careers/?q=math&country=France&page=2&deadline-from=2027-01-01#project';
const url=languageURL(original,'zh');assert.equal(url.pathname,new URL(original).pathname);assert.equal(url.hash,'#project');
for(const [key,value]of new URL(original).searchParams)assert.equal(url.searchParams.get(key),value);
assert.equal(initialLanguage(url.href,{getItem:()=> 'en'}),'zh');assert.equal(initialLanguage('https://example.org/',null),'en');
assert.equal(initialLanguage('https://example.org/',{getItem(){throw Error('blocked')}}),'en');
assert.equal(initialLanguage('https://example.org/',{getItem:()=> 'zh'}),'zh');
const state=readState(url,{fields:['country']});assert.equal(stateURL(url,state,{},url).searchParams.get('lang'),'zh');
const page=shell({title:'Search',url:'/en/resources/search/',body:'<p>source text</p>'});assert(page.includes('id="language-toggle"'));assert(page.includes('Language switching requires JavaScript'));assert(page.includes('/language.js?v='));
const data=JSON.parse(read('resources/data/learning-zh.json'));assert.equal(Object.keys(data.guides).length,7);assert.equal(localizedSubjects.length,29);
const courses=JSON.parse(read('resources/data/course-study-guides.json'));
assert.deepEqual(Object.keys(chineseSubjectMetadata).sort(),Object.keys(courses).sort(),'Every real subject, without duplicate topics');
for(const id of localizedSubjects){
 const entry=chineseSubjectMetadata[id],body=fs.readFileSync(subjectGuideFile(id),'utf8'),html=chineseCompanion(id,'subjects'),course=courses[id];
 assert(entry.title&&entry.summary,id+' metadata');assert(body.length>500,id+' independently readable guide');assert((body.match(/^### /gm)||[]).length>=2,id+' structured reading');
 assert(!html.includes('katex-error'),id+' valid mathematics');assert(html.includes('2026-10-18'));assert(html.includes(course.primary.url.replaceAll('&','&amp;')),id+' exact primary target');
 assert(html.includes(course.practice.url.replaceAll('&','&amp;')),id+' actual exercises');assert(html.includes(course.primary.checked),id+' source dates retained');
 assert(html.includes('建议修改本篇')&&html.includes('报告具体错误'),id+' actionable correction links');
 assert(!/全面掌握|最好的教材|保姆级|亲测|我的经验/.test(body),id+' no generic promises or invented personal experience');
}
for(const kind of ['guides','subjects'])for(const [id,entry]of Object.entries(data[kind])){
 assert(entry.title&&entry.body.length>200,id);const html=chineseCompanion(id,kind);assert(html.includes('data-language-content="zh"'));assert(html.includes('非逐句全文翻译'));assert(html.includes('lang="zh-Hans"'));
 if(kind==='guides'){const built=read(`resources/library-paths/guides/${id}.html`);assert(built.includes('data-language-content="en"'));assert(built.includes(entry.title));assert.equal((built.match(/class="chinese-companion"/g)||[]).length,1)}
}
for(const file of ['index.html','resources/index.html','resources/study-careers/researchers.html','notes/mathematical-notes/page.html'])assert(read(file).includes('id="language-toggle"'),file);
const guideIndex=read('resources/library-paths/index.html');assert(guideIndex.includes('id="chinese-subject-guides"'));assert.equal((guideIndex.match(/\?lang=zh#subject-guide-zh/g)||[]).length,29,'All subject guides reachable from a real index');
assert(!read('resources/assets/language.js').includes('fetch('),'No machine-translation service or remote locale lookup');
console.log(JSON.stringify({passed:true,interfaceLabels:Object.keys(zh).length,chineseGuides:7,chineseSubjectCompanions:29,englishDefault:true,sourceTitlesRetained:true}));
