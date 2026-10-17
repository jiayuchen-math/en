import fs from 'node:fs';
import {markdown} from './knowledge-markdown.mjs';
import {subjects,reviewed} from './data/subject-guides-zh.mjs';
const data=JSON.parse(fs.readFileSync(new URL('./data/learning-zh.json',import.meta.url),'utf8'));
const courses=JSON.parse(fs.readFileSync(new URL('./data/course-study-guides.json',import.meta.url),'utf8'));
const E=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sourceLink=(url,label)=>`<a href="${E(url)}" target="_blank" rel="noopener noreferrer">${E(label)}</a>`;
export function subjectGuideFile(id){return new URL(`./content/subject-guides-zh/${id}.md`,import.meta.url)}
export function chineseCompanion(id,kind='guides'){
 if(kind==='subjects'&&subjects[id]&&fs.existsSync(subjectGuideFile(id))){
  const entry=subjects[id],course=courses[id],file=`resources/content/subject-guides-zh/${id}.md`;
  if(!course?.primary?.url||!course.practice?.url)throw Error('Missing subject reading evidence: '+id);
  return `<section class="chinese-companion subject-companion" id="subject-guide-zh" data-language-content="zh" lang="zh-Hans" hidden><h2>${E(entry.title)}</h2><p class="knowledge-meta">独立中文导读 · 非逐句全文翻译 · 修订 ${reviewed}</p>${markdown.render(fs.readFileSync(subjectGuideFile(id),'utf8'))}<section class="guide-reading"><h3>打开读物与练习</h3><p>${sourceLink(course.primary.url,course.primary.title)} — ${E(course.primary.author)}</p><div class="actions">${sourceLink(course.practice.url,'打开对应练习')} <a href="#choose-reading">比较本页读物</a> <a href="/en/resources/library-paths/${E(id)}.html">检查先修知识</a></div><details><summary>阅读位置与来源记录</summary><p lang="en">${E(course.primary.locator)}</p><p lang="en">${E(course.practice.locator)}</p><p lang="en">${E(course.practice.availability)}</p><p class="knowledge-meta">书目核查沿用原记录：${E(course.primary.checked)}；习题核查：${E(course.practice.checked||course.primary.checked)}。</p></details></section><p class="knowledge-meta">编写：AI 辅助编辑；资料依据见上方。${sourceLink('https://github.com/jiayuchen-math/jiayuchen-math.github.io/edit/main/'+file,'建议修改本篇')} · ${sourceLink('https://github.com/jiayuchen-math/jiayuchen-math.github.io/issues/new?template=math-correction.yml','报告具体错误')}</p><p><a href="?lang=en" data-language-choice="en" lang="en">Read the English learning guide</a> · 下方原有英文选读、图示和自测继续保留。</p></section>`;
 }
 const entry=data[kind]?.[id];if(!entry)return '';
 return `<section class="chinese-companion" data-language-content="zh" lang="zh-Hans" hidden><h2>${E(entry.title)}</h2><p class="knowledge-meta">中文导读 · 非逐句全文翻译 · 修订 ${E(data.reviewed)}</p>${markdown.render(entry.body)}<p><a href="?lang=en" data-language-choice="en" lang="en">Read the English ${kind==='subjects'?'learning guide':'full text'}</a> · 原始资料见下方来源。</p></section>`;
}
export const localizedSubjects=[...new Set([...Object.keys(data.subjects),...Object.keys(subjects).filter(id=>fs.existsSync(subjectGuideFile(id)))])];
export const chineseSubjectMetadata=subjects;
