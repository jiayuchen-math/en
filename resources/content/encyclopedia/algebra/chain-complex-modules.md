---
{"id":"chain-complex-modules","title":"Chain Complex of Modules","chinese":"模的链复形","aliases":[],"area":"algebra","topic":"homological-algebra","level":"Graduate","summary":"A chain complex is a sequence of modules with degree-lowering differentials whose consecutive composites vanish, allowing homology to measure failure of exactness.","prerequisites":["left-module","module-homomorphism","quotient-module"],"related":["module-homology","short-exact-sequence-modules","module-ext-group","spectral-sequence"],"references":[{"id":"stacks-complexes","label":"The Stacks Project — Complexes","url":"https://stacks.math.columbia.edu/tag/010V","locator":"Section 12.13, chain-complex and chain-homotopy definitions, homology formula, Definition 12.13.4 and Lemmas 12.13.5–12.13.6","checked":"2026-10-15","note":"Chain maps, homotopies, quasi-isomorphisms, and the long exact homology sequence."},{"id":"li-chain-convention","label":"Wen-Wei Li — Methods in Algebra II, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter2.tex","locator":"def:complex, def:cohomology and rem:cochain-vs-chain (链复形的同调)","checked":"2026-10-15","note":"Chain versus cochain indexing, homology and exactness."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A chain complex organizes successive linear constraints. Its defining equation says that every output of one differential automatically satisfies the next constraint. Homology then asks whether all solutions arise in this way. The same pattern governs relations among module generators and boundaries of geometric chains. This entry uses modules so that kernels, images, and quotient objects can be computed explicitly.

## Prerequisites

Know modules over a unital ring, module homomorphisms, submodules, and quotients. Kernels represent solutions of homogeneous equations; images represent attainable outputs. Short exact sequences are useful for understanding the main structural theorem, but are not needed merely to specify a complex.

## Definition and conventions

Fix a unital ring $R$ and use left $R$-modules. A chain complex $C_\bullet$ consists of modules $C_n$ and homomorphisms $d_n:C_n\to C_{n-1}$ for every integer $n$, satisfying
$$
d_{n-1}d_n=0.
$$
Terms outside a stated finite range are understood to be zero. A chain map $f:C_\bullet\to D_\bullet$ consists of maps $f_n:C_n\to D_n$ with $d^D_nf_n=f_{n-1}d^C_n$.

Define cycles $Z_n=\ker d_n$, boundaries $B_n=\operatorname{im}d_{n+1}$, and
$$
H_n(C_\bullet)=Z_n/B_n.
$$
The differential equation ensures $B_n\subseteq Z_n$, so this quotient exists. A complex is exact at degree $n$ if $H_n=0$, and acyclic if every homology module vanishes. Cochain complexes instead have differentials $d^n:C^n\to C^{n+1}$. Reindexing by $C^n=C_{-n}$ converts the chain convention to the cochain convention.

## Intuition

A cycle is an admissible candidate for a homology class. Adding a boundary changes its representative without changing its class. Thus homology measures solutions modulo those already explained by a previous stage. It is a quotient module, rather than merely a count of dimensions, which matters when torsion is present.

## Examples and non-examples

Take $C_1=C_0=\mathbb Z$, $d_1$ multiplication by $6$, and all other terms zero. The chain condition holds because neighboring differentials are zero. Since multiplication by $6$ is injective,
$$
H_1(C_\bullet)=0,\qquad H_0(C_\bullet)=\mathbb Z/6\mathbb Z.
$$
The example is a complex but not an exact complex. Its degree-zero homology retains torsion that a dimension count over $\mathbb Q$ would miss.

The displayed sequence $\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{3}\mathbb Z$ is not a complex: the consecutive composite is multiplication by $6$, not zero. In contrast, $\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\mathbb Z$, with reduction modulo $2$ as its second map, has zero composite and is exact at the middle term. Adding zeros at both ends makes the latter sequence acyclic in all degrees.

## Important properties

A chain map preserves cycles and boundaries and therefore induces $H_n(f):H_n(C)\to H_n(D)$. A quasi-isomorphism is a chain map inducing isomorphisms in every homology degree; it need not be an isomorphism on individual modules.

Maps $f,g:C\to D$ are chain homotopic if there are maps $h_n:C_n\to D_{n+1}$ with
$$
f_n-g_n=d^D_{n+1}h_n+h_{n-1}d^C_n.
$$
For a cycle $z$, the last summand vanishes, leaving a boundary. This proves that homotopic maps induce the same homology map. In particular a chain homotopy equivalence is a quasi-isomorphism.

A degreewise short exact sequence of complexes $0\to A\to B\to C\to0$ yields a long exact sequence with connecting maps $H_n(C)\to H_{n-1}(A)$. Proof idea: lift a cycle of $C$ to $B$, apply its differential, and use exactness to identify the result with an element of $A$. The square-zero equation makes it a cycle; changing the lift alters its class only by a boundary. This construction explains the one-degree decrease.

## Connections and further reading

Projective resolutions are exact augmented complexes used to compute Ext. Filtered complexes organize successive homology calculations into spectral sequences. For the conventions and theorems above, see [Stacks, Section 12.13](https://stacks.math.columbia.edu/tag/010V) and [Li's chain/cochain comparison](https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter2.tex).
