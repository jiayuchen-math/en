import MarkdownIt from 'markdown-it';
import katex from 'katex';

export const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const renderMath=(source,display)=>katex.renderToString(source,{displayMode:display,throwOnError:true,trust:false,strict:'error',output:'htmlAndMathml',maxExpand:1000});
export function createMarkdown(){
 const md=new MarkdownIt({html:false,linkify:false,typographer:false});
 md.inline.ruler.after('escape','math_inline',(state,silent)=>{
  const start=state.pos;if(state.src[start]!=='$'||state.src[start+1]==='$')return false;
  let end=start+1;while((end=state.src.indexOf('$',end))>=0){if(state.src[end-1]!=='\\')break;end++}
  if(end<0||end===start+1||state.src.slice(start+1,end).includes('\n'))return false;
  if(!silent){const token=state.push('math_inline','math',0);token.content=state.src.slice(start+1,end)}state.pos=end+1;return true;
 });
 md.block.ruler.before('fence','math_block',(state,start,end,silent)=>{
  const first=state.src.slice(state.bMarks[start]+state.tShift[start],state.eMarks[start]);if(!first.startsWith('$$'))return false;
  let content=first.slice(2),next=start+1;
  if(content.endsWith('$$'))content=content.slice(0,-2);else{
   const parts=[content];let closed=false;for(;next<end;next++){const line=state.src.slice(state.bMarks[next]+state.tShift[next],state.eMarks[next]);if(line.trim().endsWith('$$')){parts.push(line.slice(0,line.lastIndexOf('$$')));next++;closed=true;break}parts.push(line)}
   if(!closed)throw Error('Unclosed display formula at line '+(start+1));content=parts.join('\n');
  }
  if(silent)return true;const token=state.push('math_block','math',0);token.block=true;token.content=content.trim();token.map=[start,next];state.line=next;return true;
 },{alt:['paragraph','reference','blockquote','list']});
 md.renderer.rules.math_inline=(tokens,i)=>renderMath(tokens[i].content,false);
 md.renderer.rules.math_block=(tokens,i)=>'<div class="formula">'+renderMath(tokens[i].content,true)+'</div>\n';
 const originalLink=md.renderer.rules.link_open||((tokens,i,o,env,self)=>self.renderToken(tokens,i,o));
 md.renderer.rules.link_open=(tokens,i,o,env,self)=>{const href=tokens[i].attrGet('href')||'';if(/^https?:\/\//.test(href)&&new URL(href).hostname!=='jiayuchen-math.github.io'){tokens[i].attrSet('target','_blank');tokens[i].attrSet('rel','noopener noreferrer')}return originalLink(tokens,i,o,env,self)};
 return md;
}
export const markdown=createMarkdown();
export function readArticle(raw){const match=raw.replaceAll('\r\n','\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!match)throw Error('Expected JSON front matter');return {...JSON.parse(match[1]),body:match[2]}}
export function renderArticle(body){
 const tokens=markdown.parse(body,{}),contents=[],used=new Set();
 for(let i=0;i<tokens.length;i++)if(tokens[i].type==='heading_open'){
  const label=tokens[i+1].content;let id=label.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'section',n=2,base=id;while(used.has(id))id=base+'-'+n++;used.add(id);tokens[i].attrSet('id',id);if(tokens[i].tag==='h2')contents.push({id,label});
 }
 return {html:markdown.renderer.render(tokens,markdown.options,{}),contents};
}
