import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {root,destination,publicFiles,migrateURLs} from './build-site.mjs';

const files=publicFiles();
assert(files.length>1000,'Full public site must be present');
assert.equal(migrateURLs('"/en/resources/"'), '"/resources/"');
assert.equal(migrateURLs('https://example.edu/en/fees'), 'https://example.edu/en/fees');
assert.equal(migrateURLs('https://github.com/jiayuchen-math/en/edit/main/a'),
  'https://github.com/jiayuchen-math/jiayuchen-math.github.io/edit/main/a');
let pdfs=0,html=0;
for(const relative of files) {
  const original=fs.readFileSync(path.join(root,relative));
  const actual=fs.readFileSync(path.join(destination,relative));
  assert.deepEqual(actual,fs.readFileSync(path.join(destination,'en',relative)),relative+' old URL parity');
  if(!/\.(html|css|js|json)$/i.test(relative)) assert.deepEqual(actual,original,relative+' protected bytes');
  if(relative.endsWith('.pdf')) pdfs++;
  if(relative.endsWith('.html')) {
    html++;
    const text=actual.toString('utf8');
    assert(!/(?:href|src|action|data-base|data-index)=["']\/en\//.test(text),relative+' old root-relative link');
    assert(!text.includes('https://github.com/jiayuchen-math/en/'),relative+' old GitHub edit link');
  }
}
assert(pdfs>0);
const home=fs.readFileSync(path.join(destination,'index.html'),'utf8');
assert(home.includes('href="/resources/'));
assert(!/<h2[^>]*>Education<\/h2>/.test(home));
assert(!home.includes('jiayuchen-math.github.io/zh'));
const search=fs.readFileSync(path.join(destination,'resources/assets/unified-search.js'),'utf8');
assert(search.includes("'/resources/search/manifest.json'"));
const weekly=fs.readFileSync(path.join(destination,'resources/assets/weekly-entrance.js'),'utf8');
assert(weekly.includes('"/notes/mathematical-notes/"'));
// Validate actual local targets across the entire deployment, including legacy paths.
const missing=[];
for(const relative of files.filter(f=>f.endsWith('.html'))) {
  const text=fs.readFileSync(path.join(destination,relative),'utf8');
  for(const match of text.matchAll(/(?:href|src|action|data-base|data-index)=["']([^"']+)["']/g)) {
    const value=match[1].replaceAll('&amp;','&');
    if(!value.startsWith('/') || value.startsWith('//')) continue;
    const url=new URL(value,'https://jiayuchen-math.github.io');
    let name=decodeURIComponent(url.pathname).slice(1);
    if(!name || name.endsWith('/')) name+='index.html';
    const target=path.join(destination,name);
    if(!fs.existsSync(target)) missing.push({from:relative,to:name});
  }
}
assert.deepEqual(missing,[],'Internal deployed links');
console.log(JSON.stringify({passed:true,files:files.length,html,pdfs,oldURLs:'all files preserved',source:'unchanged'}));
