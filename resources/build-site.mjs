import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Deployment only: leave authored notes, original records and their tests intact.
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const destination = path.join(root, '_site');
const extensions = new Set(['.html','.css','.js','.json','.pdf','.tex','.md','.png','.jpg','.jpeg','.svg','.webp','.gif','.ico','.woff','.woff2','.ttf','.otf','.txt','.zip']);
const rewritten = new Set(['.html','.css','.js','.json']);

export function migrateURLs(text) {
  return text
    .replaceAll('https://jiayuchen-math.github.io/en/', 'https://jiayuchen-math.github.io/')
    .replace(/https:\/\/(github\.com|raw\.githubusercontent\.com)\/jiayuchen-math\/en(?=[/#?]|$)/g,
      'https://$1/jiayuchen-math/jiayuchen-math.github.io')
    // Only root-relative strings: never rewrite another site's /en/ language path.
    .replace(/(["'`])\/en(?=\/|["'`?#])/g, '$1');
}

export function publicFiles(directory=root, prefix='') {
  const found=[];
  for (const item of fs.readdirSync(directory,{withFileTypes:true})) {
    if(item.name.startsWith('.') || ['node_modules','_site'].includes(item.name)) continue;
    const relative=prefix+item.name;
    if(item.isSymbolicLink()) throw new Error('Symlink is not a deployable file: '+relative);
    if(item.isDirectory()) {
      if(!prefix && !['notes','resources'].includes(item.name)) continue;
      found.push(...publicFiles(path.join(directory,item.name),relative+'/'));
    } else if(extensions.has(path.extname(item.name).toLowerCase()) &&
      (prefix || ['index.html','disclaimer.html'].includes(item.name))) found.push(relative);
  }
  return found.sort();
}

export function buildSite() {
  // Do not delete directories. Remove stale *files* only inside the fixed output.
  if(fs.existsSync(destination)) {
    const clean=directory=>{for(const entry of fs.readdirSync(directory,{withFileTypes:true})) {
      const file=path.join(directory,entry.name);
      if(entry.isSymbolicLink()) throw new Error('Unexpected symlink in deployment output');
      if(entry.isDirectory()) clean(file); else fs.unlinkSync(file);
    }};
    clean(destination);
  }
  const files=publicFiles();
  for(const relative of files) {
    const source=fs.readFileSync(path.join(root,relative));
    let bytes=rewritten.has(path.extname(relative).toLowerCase())
      ? Buffer.from(migrateURLs(source.toString('utf8'))) : source;
    if(relative.endsWith('.html')) {
      const canonical='https://jiayuchen-math.github.io/'+encodeURI(relative.replace(/index\.html$/, ''));
      bytes=Buffer.from(bytes.toString('utf8').replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi,'')
        .replace('</head>',`<link rel="canonical" href="${canonical}"></head>`));
    }
    // Old HTML stays readable even without JavaScript, with navigation to root.
    // Old PDFs and other download addresses are exact byte-for-byte aliases.
    for(const prefix of ['', 'en/']) {
      const target=path.join(destination,prefix,relative);
      fs.mkdirSync(path.dirname(target),{recursive:true});
      fs.writeFileSync(target,bytes);
    }
  }
  fs.writeFileSync(path.join(destination,'.nojekyll'),'');
  return {files:files.length,compatibilityPrefix:'/en/',canonicalBase:'/'};
}

if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url))
  console.log(JSON.stringify(buildSite()));
