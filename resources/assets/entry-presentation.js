// Shared by generated HTML and filtered results: destination != stable bookmark.
export const titleDestination=row=>row.readingUrl||row.url;
export const showsDetails=row=>Boolean(row.detail)&&row.hasDetails!==false;
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
