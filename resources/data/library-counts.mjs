// Count unique catalogue works, not editions, repeated links, or the number of cards.
const identity=work=>work.url.replace(/\/$/,'');
export function libraryCounts(catalogue,works){
 const byTopic=Object.fromEntries(catalogue.topics.map(topic=>[topic.id,new Set(works.filter(work=>work.topic.split('|').includes(topic.title)).map(identity)).size]));
 const byGroup=Object.fromEntries(catalogue.groups.map(group=>{
  const titles=new Set(catalogue.topics.filter(topic=>topic.group===group.id).map(topic=>topic.title));
  return [group.id,new Set(works.filter(work=>work.topic.split('|').some(title=>titles.has(title))).map(identity)).size];
 }));
 return {total:new Set(works.map(identity)).size,byTopic,byGroup};
}
export const countLabel=count=>`${count} resource${count===1?'':'s'}`;
export function updateLibraryCards(html,counts){
 const updated=new Set();
 const result=html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi,(whole,attributes,body)=>{
  const classes=attributes.match(/\bclass\s*=\s*(["'])(.*?)\1/i)?.[2]?.split(/\s+/)||[];
  const href=attributes.match(/\bhref\s*=\s*(["'])(.*?)\1/i)?.[2];
  if(!classes.includes('card')||!counts.has(href))return whole;
  const count=counts.get(href),badge=`<span class="resource-count" data-resource-count="${count}">${countLabel(count)}</span>`;let found=false;
  body=body.replace(/<span\b([^>]*)>([\s\S]*?)<\/span>/gi,(span,attrs,text)=>{
   if(!/\bdata-resource-count\s*=/.test(attrs)&&!/^\s*\d+\s+(?:full-text\s+)?resources?\s*$/i.test(text))return span;
   if(found)throw Error('Repeated resource count in card '+href);
   found=true;return badge;
  });
  if(!found)body+=badge;updated.add(href);
  return `<a${attributes}>${body}</a>`;
 });
 for(const href of counts.keys())if(!updated.has(href))throw Error('Library count target card missing: '+href);
 return result;
}
