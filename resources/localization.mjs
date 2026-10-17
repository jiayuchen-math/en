import fs from 'node:fs';
import {markdown} from './knowledge-markdown.mjs';
const data=JSON.parse(fs.readFileSync(new URL('./data/learning-zh.json',import.meta.url),'utf8'));
const E=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function chineseCompanion(id,kind='guides'){
 const entry=data[kind]?.[id];if(!entry)return '';
 return `<section class="chinese-companion" data-language-content="zh" lang="zh-Hans" hidden><h2>${E(entry.title)}</h2><p class="knowledge-meta">中文导读 · 非逐句全文翻译 · 修订 ${E(data.reviewed)}</p>${markdown.render(entry.body)}<p><a href="?lang=en" data-language-choice="en" lang="en">Read the English ${kind==='subjects'?'learning guide':'full text'}</a> · 原始资料见下方来源。</p></section>`;
}
export const localizedSubjects=Object.keys(data.subjects);
