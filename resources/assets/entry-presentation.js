// Shared by generated HTML and filtered results: destination != stable bookmark.
export const titleDestination=row=>row.readingUrl||row.url;
export const showsDetails=row=>Boolean(row.detail)&&row.hasDetails===true;
// A wrapper, heading or disclosure label is not an actual detail body.
// Shared by the generator and browser; input is trusted generated HTML.
export function hasDetailContent(html){
 const content=String(html||'')
  .replace(/<!--[\s\S]*?-->/g,'')
  .replace(/<(script|style|template|summary|h[1-6])\b[^>]*>[\s\S]*?<\/\1>/gi,'')
  .replace(/<([a-z][\w-]*)\b[^>]*\shidden(?:\s|=[^>]*|>)[\s\S]*?<\/\1>/gi,'')
  .replace(/<[^>]*>/g,' ').replace(/&(?:nbsp|#0*160|#x0*a0);/gi,' ')
  .replace(/[\s\u200b-\u200d\ufeff·|:—–.…-]/g,'');
 return Boolean(content);
}
export function entryActions(row){
 const actions=[],seen=new Set();
 const add=(url,label)=>{if(!url)return;const key=String(url).replace(/\/$/,'');if(seen.has(key))return;seen.add(key);actions.push({url,label});};
 add(row.readingUrl,row.readingLabel||'Open resource');
 add(row.sourceUrl,row.sourceLabel||'Official source');
 add(row.email&&'mailto:'+row.email,'Email');
 add(row.termUrl,'Terminology');
 add(row.encyclopediaUrl,'Encyclopedia');
 return actions;
}
