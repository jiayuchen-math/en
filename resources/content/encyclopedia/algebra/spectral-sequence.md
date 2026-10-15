---
{"id":"spectral-sequence","title":"Spectral Sequence","chinese":"谱序列","aliases":[],"area":"algebra","topic":"homological-algebra","level":"Graduate","summary":"A spectral sequence is a sequence of differential objects whose successive pages are their cohomology, often computing associated graded pieces of a filtered cohomology group.","prerequisites":["chain-complex-modules","module-homology","quotient-module"],"related":["module-ext-group","sheaf","differential-graded-category"],"references":[{"id":"li-spectral-sequence","label":"Wen-Wei Li — Methods in Algebra II, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter5.tex","locator":"谱序列的一般定义 (sec:spectral-sequence), def:SS-abstract and def:graded-spectral-sequence; 滤过复形的谱序列 (sec:filtered-cplx-ss), page formulas","checked":"2026-10-15","note":"Abstract pages, specified transition isomorphisms, cohomological bigrading and filtered-complex construction."},{"id":"stacks-filtered-complex","label":"The Stacks Project — Spectral sequences: filtered complexes","url":"https://stacks.math.columbia.edu/tag/012K","locator":"Section 12.24, Definition 12.24.1, Lemma 12.24.2, Definition 12.24.5 and Lemma 12.24.11","checked":"2026-10-15","note":"Filtered complexes, initial pages, induced cohomology filtration and convergence for degreewise finite filtrations."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A spectral sequence packages a succession of cohomology computations. Its early pages usually involve simpler pieces of a problem, while later differentials record interactions between those pieces. When a convergence theorem applies, the surviving terms describe a filtration on the desired answer. This article uses the cohomological convention and focuses on spectral sequences arising from filtered complexes of modules.

## Prerequisites

Understand chain complexes, their cochain reindexing, and homology as kernel modulo image. A decreasing filtration is a family of submodules $\cdots\supseteq F^pC\supseteq F^{p+1}C\supseteq\cdots$. Its associated graded pieces are $\operatorname{gr}^pC=F^pC/F^{p+1}C$. No derived-category formalism is needed for the construction described here.

## Definition and conventions

A cohomological bigraded spectral sequence of left modules over a fixed unital ring $R$ consists of modules $E_r^{p,q}$, for integers $p,q$ and pages $r\geq r_0$, with square-zero differentials
$$
d_r^{p,q}:E_r^{p,q}\longrightarrow E_r^{p+r,q-r+1}
$$
and specified isomorphisms
$$
E_{r+1}^{p,q}\cong
\frac{\ker(d_r^{p,q})}{\operatorname{im}(d_r^{p-r,q+r-1})}.
$$
The total degree $p+q$ increases by one under $d_r$. Abstract spectral sequences can instead be defined using differential objects without bigradings; convergence to a target is additional information.

For a cochain complex $C^\bullet$ with $d(F^pC^n)\subseteq F^pC^{n+1}$, its filtration gives a spectral sequence starting with
$$
E_0^{p,q}=\operatorname{gr}^pC^{p+q},\qquad
E_1^{p,q}=H^{p+q}(\operatorname{gr}^pC^\bullet).
$$
Different sources start numbering at different pages or use homological indices; the differential convention must be checked before comparing formulas.

## Intuition

The first approximation sees only the part of the differential that stays at the same filtration level. A class surviving that approximation may still fail to be a genuine cocycle: its differential can lie deeper in the filtration. Later pages detect these increasingly distant failures. Taking cohomology discards classes killed by outgoing differentials and identifies those hit by incoming differentials.

## Examples and non-examples

Let $k$ be a field and let $C^0=ka$, $C^1=kb$, with $d(a)=b$ and all other terms zero. Give $a$ filtration degree zero and $b$ filtration degree two: $F^pC^0=ka$ for $p\leq0$, zero otherwise, and $F^pC^1=kb$ for $p\leq2$, zero otherwise. This filtration is preserved by $d$.

The only nonzero $E_0$ terms occur at $(0,0)$ and $(2,-1)$. Both $d_0$ and $d_1$ vanish because their target bidegrees contain no possible nonzero terms. Yet
$$
d_2^{0,0}:ka\longrightarrow kb=E_2^{2,-1}
$$
is an isomorphism, induced by $d(a)=b$. Hence $E_3=0$, agreeing with the zero cohomology of $C$. Vanishing of one page's differentials therefore does not imply vanishing of all subsequent differentials.

A sequence of bigraded modules with arbitrarily selected square-zero maps is not automatically a spectral sequence: the next page must be identified with the preceding page's cohomology. A collection of ranks without those maps and identifications is insufficient.

## Important properties

Suppose the filtration on each $C^n$ is finite: for each $n$ there are integers $a(n),b(n)$ with $F^{a(n)}C^n=C^n$ and $F^{b(n)}C^n=0$. Then the filtered-complex spectral sequence converges, with
$$
E_\infty^{p,n-p}\cong F^pH^n(C)/F^{p+1}H^n(C),
$$
where $F^pH^n$ is the image of $H^n(F^pC)\to H^n(C)$. Proof idea: finiteness ensures that the successive conditions of being a cycle modulo deeper filtration eventually become actual cocycle conditions, and all relevant boundaries eventually appear. Unbounded filtrations require separate convergence arguments.

Even after convergence, graded pieces need not determine the target module. The abelian groups $\mathbb Z/4$ and $(\mathbb Z/2)^2$ both admit filtrations with two successive quotients $\mathbb Z/2$, although the groups are not isomorphic. Such extension information survives beyond the page calculation.

## Connections and further reading

Double complexes and compositions of derived functors produce important spectral sequences used in Ext and sheaf cohomology. Read [Li's general definitions](https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter5.tex) alongside [Stacks, Section 12.24](https://stacks.math.columbia.edu/tag/012K), keeping the finite-filtration hypothesis in view.
