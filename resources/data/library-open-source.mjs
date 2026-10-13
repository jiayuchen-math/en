import fs from 'node:fs';
const parts=['analysis','geometry','algebra-logic','number-theory','probability-discrete','foundations','exposition'];
const works=[];
for(const part of parts){
 const url=new URL(`./library-open-${part}.json`,import.meta.url);
 if(fs.existsSync(url))works.push(...JSON.parse(fs.readFileSync(url,'utf8')));
}
export default works;
