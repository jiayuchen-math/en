// Editorial landmarks, tied to the actual prose rather than arbitrary lengths.
// Keep original paragraphs intact; a changed opening fails loudly at build time.
const sections={
 'algebraic-geometry':[
  ['Start with Ravi','A first route through schemes'],
  ['For a different entry','Varieties first, or a reference?'],
  ['A common misconception','What the algebra is buying you']],
 'representation-theory':[
  ['The deeper motivation','Decomposing symmetry'],
  ['Start with **Introduction','A first course and its preparation'],
  ['For an alternative centered','Finite groups or continuous symmetry?'],
  ['The most consequential','When decomposition fails']],
 'analysis-pde':[
  ["Start with John K. Hunter","First solve one boundary value problem"],
  ['For that preparation','Fill the analytical gaps'],
  ['Weak solutions are sometimes','What a weak solution does—and does not—say']],
 'complex-harmonic-analysis':[
  ["Start with **Dan Romik","One variable first"],
  ['For that branch','Following Fourier analysis'],
  ['There is a second genuine','When one complex variable stops being enough']],
 geometry:[
  ['Start with **Nigel Hitchin','From coordinates to manifolds'],
  ['One alternative is','Two other entry points'],
  ['A common misconception','Metrics are not symplectic forms']],
 topology:[
  ["Start with **Allen Hatcher","Calculate before abstracting"],
  ['For a slower entry','Repair the space constructions'],
  ['Homology introduces','From loops to chains']],
 'number-theory':[
  ['A good first spine','Begin with arithmetic'],
  ['The algebraic branch','Three ways the subject opens up'],
  ['Keep a notebook','Keep examples within reach']],
 logic:[
  ['For the main route','Learn a formal language, then study it'],
  ['Work on a tiny language','Keep a small structure beside the definitions'],
  ['After completeness','Three different continuations'],
  ['Two confusions','Which completeness theorem?']],
 probability:[
  ['If distributions','From calculations to measure'],
  ['A useful exercise','A limit that cannot pass through expectation'],
  ['From there, choose','Conditioning on information']],
 dynamics:[
  ['For a first project','Start with a map'],
  ['Flows provide','Flows give another entrance'],
  ['The measurable branch','From individual orbits to averages']],
 combinatorics:[
  ['For a broad undergraduate','A first collection of problems'],
  ['Enumeration offers','Count, exclude, or prove existence'],
  ['Choose further tools','Choose tools for the obstruction']],
 'higher-categories':[
  ['Begin with ordinary','Have ordinary examples first'],
  ['The next bridge','Why keep homotopical information?'],
  ['For deeper study','A further change of language']],
};
export function sectionDirectionBody(id,body){
 if(/^## /m.test(body))return body;
 const paragraphs=body.split('\n\n'),headings=new Map();
 for(const [opening,title]of sections[id]||[]){
  const index=paragraphs.findIndex(p=>p.startsWith(opening));
  if(index<0||headings.has(index))throw Error('Missing or ambiguous editorial landmark '+id+': '+opening);
  headings.set(index,title);
 }
 return paragraphs.map((p,i)=>headings.has(i)?'## '+headings.get(i)+'\n\n'+p:p).join('\n\n');
}
