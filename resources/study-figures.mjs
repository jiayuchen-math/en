import {escape as E,markdown} from './knowledge-markdown.mjs';

// Original, schematic drawings. Curves are sampled from the displayed equations;
// algebraic structure is stated in the captions rather than encoded as thickness.
const picture=(id,description,body,box='0 0 300 245')=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" role="img" aria-labelledby="${id}-label" aria-describedby="${id}-description"><title id="${id}-label">${E(description)}</title><desc id="${id}-description">${E(description)}</desc>${body}</svg>`;
const label=(x,y,value,size=17)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="currentColor" font-size="${size}">${E(value)}</text>`;
function drawing(id,title,panels,caption){
 return `<figure class="study-figure" id="${id}"><p class="figure-title">${E(title)}</p><div class="figure-panels${panels.length===1?' single-panel':''}">${panels.map(p=>`<div class="figure-panel">${p.title?'<p class="panel-title">'+E(p.title)+'</p>':''}${p.svg}</div>`).join('')}</div><figcaption>${markdown.renderInline(caption)}</figcaption></figure>`;
}
function pathOf(fn,start,end,count=100,map=([x,y])=>[130+70*x,125-70*y]){
 return Array.from({length:count+1},(_,i)=>{const p=map(fn(start+(end-start)*i/count));return (i?'L':'M')+p.map(v=>v.toFixed(2)).join(',')}).join(' ');
}
const axes=`<path d="M22 125H279M130 18V206" fill="none" stroke="currentColor" stroke-opacity=".35"/><text x="280" y="144" fill="currentColor" font-size="15">x</text><text x="139" y="23" fill="currentColor" font-size="15">y</text>`;

export function nilpotentFigure(){
 const panel=(id,ring,lines)=>picture(id,'One underlying point, with coordinate ring '+ring,
  `<circle cx="150" cy="51" r="8" fill="var(--link)"/>${label(150,98,ring,24)}${lines.map((s,i)=>label(150,143+i*28,s,17)).join('')}`,'0 0 300 195');
 return drawing('same-point-different-rings','One point is not the whole story',[
  {title:'A reduced point',svg:panel('reduced-point','ℂ',['No nonzero nilpotents'])},
  {title:'A nonreduced point',svg:panel('nonreduced-point','ℂ[ε]/(ε²)',['ε ≠ 0, but ε² = 0'])},
 ],'Both spectra have one underlying point. In $\\mathbb C[x]/(x^2)$ the class of $x$ is nonzero and has square zero. That extra algebra belongs to the structure sheaf; a second visible point, or a physically thicker dot, would not explain it.');
}
export function cuspFigure(){
 const smooth=picture('smooth-parabola','Real graph of y=x squared, with horizontal tangent at the origin',
  axes+`<path d="M22 125H279" stroke="var(--link)" stroke-width="1.6" stroke-dasharray="5 5"/><path d="${pathOf(t=>[t,t*t],-1.15,1.15)}" fill="none" stroke="var(--link)" stroke-width="3"/><circle cx="130" cy="125" r="4" fill="currentColor"/>${label(150,232,'y = x² · tangent dimension 1',16)}`);
 const cusp=picture('singular-cusp','Real cusp y squared=x cubed. At the origin all directions satisfy the linearized equation, so the Zariski tangent space is the ambient plane',
  `<rect x="22" y="18" width="257" height="188" fill="var(--link)" opacity=".09"/>`+axes+`<path d="${pathOf(t=>[t*t,t*t*t],-1,1)}" fill="none" stroke="var(--link)" stroke-width="3"/><circle cx="130" cy="125" r="4" fill="currentColor"/>${label(150,232,'y² = x³ · tangent dimension 2',16)}`);
 return drawing('smooth-and-singular','What linearization sees',[
  {title:'Smooth at the origin',svg:smooth},{title:'Singular at the origin',svg:cusp},
 ],'These drawings show **real points**, not the whole complex curve. For $F=y-x^2$, the linear part at the origin is $y$, giving a tangent line. For $F=y^2-x^3$, the linear part vanishes: its Zariski tangent space is the entire plane (shaded), even though the visible cusp has a horizontal limiting tangent direction.');
}
export function convergenceFigure(){
 const map=([x,y])=>[52+405*x,234-185*y],styles=['','7 4','2 4','10 3 2 3'];
 const curves=[1,2,5,20].map((n,i)=>`<path d="${pathOf(x=>[x,x**n],0,1,160,map)}" fill="none" stroke="var(--link)" stroke-width="2.4"${styles[i]?' stroke-dasharray="'+styles[i]+'"':''}/>`).join('');
 const body=`<path d="M52 38V234H475" stroke="currentColor" stroke-opacity=".45" fill="none"/>${label(35,57,'1',16)}${label(43,254,'0',16)}${label(457,254,'1',16)}${label(482,237,'x',16)}${curves}<path d="M52 234H457" stroke="currentColor" stroke-width="3"/><circle cx="457" cy="234" r="5" fill="var(--bg)" stroke="currentColor" stroke-width="2"/><circle cx="457" cy="49" r="5" fill="currentColor"/>${[1,2,5,20].map((n,i)=>`<path d="M${60+i*110} 282h25" stroke="var(--link)" stroke-width="2.4"${styles[i]?' stroke-dasharray="'+styles[i]+'"':''}/><text x="${91+i*110}" y="287" font-size="16" fill="currentColor">n=${n}</text>`).join('')}`;
 return drawing('pointwise-not-uniform','The steep part keeps moving',[
  {svg:picture('power-convergence','Graphs of x to the powers 1, 2, 5 and 20 on [0,1], together with their discontinuous pointwise limit',body,'0 0 520 310')},
 ],'At each fixed $x<1$, $x^n$ approaches zero. But for every $n$, points sufficiently close to $1$ still give values arbitrarily close to $1$. The dark segment and endpoint dot show the pointwise limit; the open circle is excluded. The supremum error remains $1$, so convergence is not uniform.');
}
export function loopsFigure(){
 const panel=(id,hole)=>picture(id,hole?'A loop winding once around the hole of an annulus':'A loop in a disc shrinking toward its centre',
  `<circle cx="150" cy="115" r="87" fill="var(--soft)" stroke="currentColor" stroke-opacity=".4"/>${hole?'<circle cx="150" cy="115" r="34" fill="var(--bg)" stroke="currentColor" stroke-opacity=".4"/>':''}<circle cx="150" cy="115" r="60" fill="none" stroke="var(--link)" stroke-width="3"/>${hole?'': '<circle cx="150" cy="115" r="26" fill="none" stroke="var(--link)" stroke-width="1.7" stroke-dasharray="5 4"/><circle cx="150" cy="115" r="3" fill="var(--link)"/>'}${label(150,232,hole?'A hole obstructs contraction':'The loop can contract',16)}`);
 return drawing('loops-and-holes','The ambient space matters',[
  {title:'Disc',svg:panel('disc-loop',false)},{title:'Annulus',svg:panel('annulus-loop',true)},
 ],'The circle-shaped loop contracts inside the disc. In the annulus, a loop winding once around the missing region cannot contract while remaining in that space. The obstruction is topological, not a restriction on the shape of the drawn loop.');
}

export function subjectFigure(id){
 return id==='algebraic-geometry'?cuspFigure():id==='real-analysis'?convergenceFigure():id==='algebraic-topology'?loopsFigure():'';
}
