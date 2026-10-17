import {escape as E, markdown} from './knowledge-markdown.mjs';
import {cuspFigure, convergenceFigure} from './study-figures.mjs';

// Integration: replace subjectFigure(subjectId) ONLY on the three pilot subject
// pages with learningIllustrations(subjectId). This returns the FULL pair:
// AG = existing cusp + local gluing; real = existing powers + uniform tail;
// probability = conditioning + expectation. Do not append subjectFigure too.
// The AG route's nilpotentFigure() remains separate and unchanged.
// Existing cusp/convergence IDs are preserved in the main view. Copies inside
// native enlargement controls have suffixed IDs and matching ARIA references.
// All four new diagrams are original, equation-/outcome-derived schematics,
// not adaptations. Existing illustrations retain their original captions.
// CSS hooks: .learning-illustrations, .learning-figure, .learning-enlargement,
// .learning-enlargement-viewport, .learning-enlarged-svg. Enlargement also works
// without extra CSS, via native details and an inline horizontally scrollable view.

const ink = 'currentColor';
const accent = 'var(--link, currentColor)';
const text = (x, y, value, size = 20, anchor = 'middle') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${ink}" font-size="${size}">${E(value)}</text>`;
const line = (x1, y1, x2, y2, extra = '') =>
  `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${ink}" ${extra}/>`;

function svg(id, title, description, body, box = '0 0 720 380') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" role="img" aria-labelledby="${id}-title" aria-describedby="${id}-desc" style="display:block;width:100%;height:auto"><title id="${id}-title">${E(title)}</title><desc id="${id}-desc">${E(description)}</desc>${body}</svg>`;
}

function enlargedSvg(source) {
  // Copy only SVGs, never figure IDs. Every internal label gets its own ID.
  return source.replace(/\b(id|aria-labelledby|aria-describedby)="([^"]*)"/g,
    (_, attr, value) => `${attr}="${value.split(/\s+/).map(id => id + '-enlarged').join(' ')}"`)
    .replace('<svg ', '<svg class="learning-enlarged-svg" ')
    .replace(/style="[^"]*"/, '')
    .replace('<svg ', '<svg style="display:block;width:150%;min-width:60rem;max-width:none;height:auto" ');
}

function enlargement(svgs, title) {
  return `<details class="learning-enlargement"><summary>Enlarge: ${E(title)}</summary><div class="learning-enlargement-viewport" tabindex="0" role="region" aria-label="${E(title)} — enlarged diagrams; scroll horizontally if needed" style="max-width:100%;overflow-x:auto">${svgs.map(enlargedSvg).join('')}</div></details>`;
}

function enlargeExisting(html, title) {
  const svgs = html.match(/<svg\b[\s\S]*?<\/svg>/g) || [];
  return html.replace('class="study-figure"', 'class="study-figure learning-figure"')
    .replace('</figure>', `${enlargement(svgs, title)}</figure>`);
}

function figure(id, title, description, body, caption, box) {
  const image = svg(id, title, description, body, box);
  return `<figure class="study-figure learning-figure" id="${id}"><p class="figure-title">${E(title)}</p><div class="figure-panels single-panel"><div class="figure-panel">${image}</div></div><figcaption>${markdown.renderInline(caption)}</figcaption>${enlargement([image], title)}</figure>`;
}

function gluingFigure() {
  const body =
    `<ellipse cx="250" cy="163" rx="199" ry="108" fill="${accent}" fill-opacity=".07" stroke="${ink}" stroke-width="2"/>` +
    `<ellipse cx="470" cy="163" rx="199" ry="108" fill="${accent}" fill-opacity=".07" stroke="${accent}" stroke-width="2" stroke-dasharray="8 5"/>` +
    text(161, 116, 'U = D(t)', 24) + text(161, 153, 'sᵤ = t²/t = t', 21) +
    text(560, 116, 'V = D(1 − t)', 24) + text(560, 153, 'sᵥ = (t − t²)/(1 − t)', 18) +
    text(560, 185, '= t', 21) + text(360, 155, 'U ∩ V', 22) +
    text(360, 188, 't = t', 24) + text(360, 224, 'agree here', 17) +
    line(184, 277, 308, 314, 'stroke-width="2"') + line(536, 277, 412, 314, 'stroke-width="2"') +
    text(360, 336, 'Global section: t on X = Spec(k[t])', 23) +
    text(360, 32, 'U ∪ V = X because t + (1 − t) = 1', 22);
  return figure('learning-ag-local-gluing', 'Local fractions, one global function',
    'Schematic open cover of Spec(k[t]), for a field k. U is D(t) and V is D(1 minus t); they cover because t and 1 minus t generate the unit ideal. On U the fraction t squared over t equals t. On V the fraction (t minus t squared) over (1 minus t) equals t. Their restrictions agree on D(t(1 minus t)), so both are restrictions of the unique global section t. Ellipse positions are schematic, not a drawing of the Zariski topology.',
    body,
    'For any field $k$, the principal opens $D(t)$ and $D(1-t)$ cover $\\operatorname{Spec}(k[t])$: no prime contains both $t$ and $1-t$. The local expressions equal $t$ in their respective localizations and agree on $D(t(1-t))$. They glue to the unique global regular function $t$. The overlapping ellipses depict cover membership schematically, not the geometry of the spectrum.');
}

function samplePath(fn, from, to, map, count = 100) {
  return Array.from({length: count + 1}, (_, i) => {
    const x = from + (to - from) * i / count;
    const p = map(x, fn(x));
    return `${i ? 'L' : 'M'}${p.map(v => v.toFixed(2)).join(',')}`;
  }).join(' ');
}

function uniformTailFigure() {
  const map = (x, y) => [72 + 960 * x, 300 - 110 * y];
  const partial = (x, n) => Array.from({length: n + 1}, (_, k) => x ** k).reduce((a, b) => a + b, 0);
  const limit = x => 1 / (1 - x);
  const lower = samplePath(x => partial(x, 3), 0, .5, map);
  const upperBack = samplePath(limit, .5, 0, map).replace(/^M/, 'L');
  const curves = [0, 1, 3].map((n, i) =>
    `<path d="${samplePath(x => partial(x, n), 0, .5, map)}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-dasharray="${['2 5', '9 5', '14 4 2 4'][i]}"/>`).join('');
  const body = line(72, 52, 72, 300, 'stroke-opacity=".5"') + line(72, 300, 580, 300, 'stroke-opacity=".5"') +
    [0, 1, 2].map(y => text(49, 306 - 110 * y, String(y), 18)).join('') +
    text(72, 325, '0', 18) + text(552, 325, '1/2', 18) + text(591, 306, 'x', 18) +
    `<path d="${lower} ${upperBack} Z" fill="${accent}" fill-opacity=".22"/>` + curves +
    `<path d="${samplePath(limit, 0, .5, map)}" fill="none" stroke="${ink}" stroke-width="3"/>` +
    line(574, 80, 574, 93.75, 'stroke-width="2"') + line(568, 80, 580, 80, 'stroke-width="2"') +
    line(568, 93.75, 580, 93.75, 'stroke-width="2"') +
    text(595, 70, 'error at 1/2', 17, 'start') + text(595, 99, '= 1/8', 20, 'start') +
    text(360, 28, 'fₙ(x) = 1 + x + ⋯ + xⁿ on [0, 1/2]', 23) +
    [0, 1, 3].map((n, i) => line(70 + i * 150, 357, 105 + i * 150, 357,
      `stroke-width="2.5" stroke-dasharray="${['2 5', '9 5', '14 4 2 4'][i]}"`) +
      text(116 + i * 150, 363, `n = ${n}`, 18, 'start')).join('') +
    line(535, 357, 570, 357, 'stroke-width="3"') + text(580, 363, '1/(1 − x)', 18, 'start');
  return figure('learning-real-uniform-tail', 'One bound controls the whole interval',
    'Exact sampled graphs of geometric partial sums f zero, f one and f three, together with the limit 1/(1 minus x) on the closed interval zero to one half. Distinct dash patterns identify the partial sums; the solid curve is the limit. The shaded region is the tail above f three. Its maximum vertical gap is one eighth at x equals one half. For any n, the uniform tail bound is 2 to the power minus n, which also bounds every later difference f m minus f n for m greater than n.',
    body,
    'Here $f_n(x)=\\sum_{k=0}^n x^k$. For $m>n$, $0\\le f_m(x)-f_n(x)\\le\\sum_{k=n+1}^{\\infty}2^{-k}=2^{-n}$, uniformly for $x\\in[0,1/2]$. The limit is $1/(1-x)$, with supremum error exactly $2^{-n}$. The shaded tail for $n=3$ reaches $1/8$ at $x=1/2$. This common bound proves both the uniform Cauchy condition and uniform convergence.');
}

function conditioningFigure() {
  const outcomes = [
    {name: 'HH', x: 115, y: 95, inA: true, inB: true},
    {name: 'HT', x: 295, y: 95, inA: true, inB: true},
    {name: 'TH', x: 115, y: 205, inA: false, inB: true},
    {name: 'TT', x: 295, y: 205, inA: false, inB: false}
  ];
  const cells = outcomes.map(o => `<rect x="${o.x - 65}" y="${o.y - 38}" width="130" height="80" rx="8" fill="${o.inA ? accent : ink}" fill-opacity="${o.inA ? '.16' : '.04'}" stroke="${ink}" stroke-width="${o.inA ? '3' : '1'}"${o.inB ? '' : ' stroke-dasharray="5 5"'}/>` +
    text(o.x, o.y - 3, o.name, 25) + text(o.x, o.y + 26, o.inB ? 'in B' : 'outside B', 17)).join('');
  const body = text(360, 30, 'Two fair, independent tosses: four outcomes of mass 1/4', 21) + cells +
    text(520, 87, 'B = {HH, HT, TH}', 21) + text(520, 124, 'Condition on B:', 21) +
    text(520, 161, 'three outcomes remain', 20) + text(520, 198, 'each has mass 1/3', 20) +
    text(520, 243, 'A ∩ B = {HH, HT}', 21) +
    text(360, 293, 'Solid thick borders / shading: A = first toss heads', 20) +
    text(360, 330, 'P(A | B) = 2/3     P(B | A) = 1', 24) +
    text(360, 365, 'A ⊂ B; these events are neither independent nor disjoint', 20);
  return figure('learning-probability-conditioning', 'Conditioning renormalizes the sample space',
    'Four ordered outcomes HH, HT, TH, TT each initially have probability one quarter. A means the first toss is heads: HH and HT, marked with thick borders and shading. B means at least one heads: HH, HT and TH. TT is outside B and has a dashed border. After conditioning on B, each of its three outcomes has probability one third. Two are in A, so P(A given B) is two thirds. Since A is a subset of B, P(B given A) is one. The events overlap and are dependent.',
    body,
    'Let $A$ be “first toss heads” and $B$ be “at least one heads.” Fair independent tosses make the four ordered outcomes equiprobable. Conditioning on $B$ removes $TT$ and divides each remaining mass by $3/4$. Thus $\\mathbb P(A\\mid B)=(1/2)/(3/4)=2/3$, while $\\mathbb P(B\\mid A)=1$. Although the tosses are independent, these events are dependent: $\\mathbb P(A\\cap B)=1/2\\ne3/8=\\mathbb P(A)\\mathbb P(B)$.');
}

function expectationFigure() {
  // Heights are exact probabilities for Binomial(4, 1/2), plotted at Xbar=k/4.
  const counts = [1, 4, 6, 4, 1];
  const body = line(85, 70, 85, 285, 'stroke-opacity=".5"') + line(85, 285, 660, 285, 'stroke-opacity=".5"') +
    [0, 2, 4, 6].map(k => text(66, 291 - k * 30, `${k}/16`, 17, 'end')).join('') +
    counts.map((count, k) => {
      const x = 130 + k * 120;
      return `<rect x="${x - 24}" y="${285 - count * 30}" width="48" height="${count * 30}" fill="${accent}" fill-opacity=".22" stroke="${ink}"/>` +
        text(x, 275 - count * 30, `${count}/16`, 18) + text(x, 314, ['0', '1/4', '1/2', '3/4', '1'][k], 19);
    }).join('') +
    line(370, 62, 370, 290, 'stroke-dasharray="6 5" stroke-width="2"') +
    text(360, 28, 'Average of four independent Bernoulli(1/2) variables', 22) +
    text(370, 53, 'mean = 1/2', 18) + text(676, 292, 'X̄₄', 20) +
    text(360, 353, 'E[X̄₄] = 1/2     Var(X̄₄) = (1/4)/4 = 1/16', 23) +
    text(360, 387, 'In general: E[X̄ₙ] = p and Var(X̄ₙ) = p(1 − p)/n', 21);
  return figure('learning-probability-expectation', 'Expectation is a weighted mean of outcomes',
    'Probability mass bars, not a density, for the average of four independent fair Bernoulli variables. The possible values zero, one quarter, one half, three quarters and one have respective probabilities one sixteenth, four sixteenths, six sixteenths, four sixteenths and one sixteenth. Bars are equally wide, with height indicating probability. The dashed vertical line marks the expectation one half. The variance is one sixteenth, consistent with p times (1 minus p) divided by n for p one half and n four.',
    body,
    'For four independent Bernoulli$(1/2)$ variables, $\\bar X_4$ takes $k/4$ with probability $\\binom4k/16$. The bar heights sum to $1$; their weighted mean is $1/2$, and the weighted squared deviation is $1/16$. These are discrete probability masses, not areas under a density. Generally $\\mathbb E\\bar X_n=p$ and $\\operatorname{Var}(\\bar X_n)=p(1-p)/n$ under independence. Chebyshev then gives $\\mathbb P(|\\bar X_n-p|\\ge\\varepsilon)\\le p(1-p)/(n\\varepsilon^2)$.',
    '0 0 720 410');
}

export function learningIllustrations(subjectId) {
  let figures;
  if (subjectId === 'algebraic-geometry') {
    figures = enlargeExisting(cuspFigure(), 'What linearization sees') + gluingFigure();
  } else if (subjectId === 'real-analysis') {
    figures = enlargeExisting(convergenceFigure(), 'The steep part keeps moving') + uniformTailFigure();
  } else if (subjectId === 'probability') {
    figures = conditioningFigure() + expectationFigure();
  } else {
    return '';
  }
  return `<div class="learning-illustrations" data-learning-subject="${E(subjectId)}">${figures}</div>`;
}
