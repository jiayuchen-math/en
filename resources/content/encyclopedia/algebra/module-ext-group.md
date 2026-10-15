---
{"id":"module-ext-group","title":"Ext Group of Modules","chinese":"模的 Ext 群","aliases":[],"area":"algebra","topic":"homological-algebra","level":"Graduate","summary":"Ext groups are derived Hom groups whose first degree classifies extensions of modules with fixed end terms.","prerequisites":["chain-complex-modules","projective-module","short-exact-sequence-modules"],"related":["module-homology","tensor-product-modules","spectral-sequence","differential-graded-category"],"references":[{"id":"li-classical-ext","label":"Wen-Wei Li — Methods in Algebra II, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter3.tex","locator":"实例: Ext 和 Tor (sec:Ext-Tor), projective/injective constructions preceding def:Ext-classical, that definition-proposition, and following module specialization, exact sequences, and vanishing criteria","checked":"2026-10-15","note":"Resolution construction, variance, degree zero, and projective vanishing."},{"id":"stacks-ext","label":"The Stacks Project — Ext groups","url":"https://stacks.math.columbia.edu/tag/06XP","locator":"Section 13.27, Lemmas 13.27.2–13.27.3, short-exact-sequence discussion, Definition 13.27.4 and Lemmas 13.27.5–13.27.6","checked":"2026-10-15","note":"Resolution computations, long exact sequences and extension classification."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The functor $\operatorname{Hom}_R(M,-)$ preserves kernels, but may fail to carry a surjection to a surjection. Ext measures the missing exactness. Its degree-one part also answers a concrete classification question: how can a module $M$ be realized as a quotient with a prescribed kernel $N$? Higher degrees retain information about longer systems of relations.

## Prerequisites

Know modules, Hom, short exact sequences, and chain-complex homology. A projective module has the lifting property against surjective homomorphisms. A projective resolution of $M$ is an exact augmented sequence $\cdots\to P_1\to P_0\to M\to0$ with each $P_i$ projective. Such resolutions exist for modules over every unital ring, by repeatedly taking free modules surjecting onto kernels.

## Definition and conventions

Fix a unital ring $R$ and left modules $M,N$. Choose a projective resolution $P_\bullet\to M$ and apply $\operatorname{Hom}_R(-,N)$. This reverses arrows, giving a cochain complex with degree-$n$ term $\operatorname{Hom}_R(P_n,N)$ and differential $f\mapsto f\circ d_{n+1}$. Define, for $n\geq0$,
$$
\operatorname{Ext}^n_R(M,N)=H^n\bigl(\operatorname{Hom}_R(P_\bullet,N)\bigr).
$$
The result is an abelian group, and an $R$-module when $R$ is commutative. It is contravariant in $M$ and covariant in $N$. In degree zero it is naturally $\operatorname{Hom}_R(M,N)$. Specifying the base ring matters: the same underlying abelian groups can have different module structures and different Ext groups.

## Intuition

The resolution replaces $M$ by modules on which lifting works. Applying Hom exposes which candidate maps on generators fail to respect relations, and which remaining discrepancies are removable. Taking cohomology keeps exactly the obstructions left after those corrections. Resolving the first variable is therefore a computational construction, not an extra structure attached permanently to $M$.

## Examples and non-examples

For an integer $m\geq2$, use the free resolution
$$
0\longrightarrow\mathbb Z\xrightarrow{m}\mathbb Z\longrightarrow\mathbb Z/m\mathbb Z\longrightarrow0.
$$
For an abelian group $N$, the resulting Hom complex is $N\xrightarrow{m}N$. Consequently
$$
\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/m\mathbb Z,N)\cong N/mN,
$$
while degree zero is $\{n\in N:mn=0\}$ and all degrees at least two vanish. Thus $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/m,\mathbb Z)\cong\mathbb Z/m$ even though $\operatorname{Hom}_{\mathbb Z}(\mathbb Z/m,\mathbb Z)=0$.

For $m=2$, a nonzero extension class is represented by the displayed short exact sequence itself. It cannot split: a section would send the nonzero class in $\mathbb Z/2$ to a nonzero element of order two in $\mathbb Z$, which does not exist. The split extension has middle module $\mathbb Z\oplus\mathbb Z/2$.

Ext is not symmetric in its inputs. Since $\mathbb Z$ is projective over itself, $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z,\mathbb Z/m)=0$, whereas the reversed group above is nonzero. A single vanishing Ext group also does not establish projectivity: $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/m,\mathbb Q)=0$ because multiplication by $m$ on $\mathbb Q$ is surjective.

## Important properties

Resolution independence follows from the comparison theorem: projectivity constructs chain maps lifting the identity between two resolutions, and those lifts are unique up to chain homotopy. Homotopic maps induce equal cohomology maps, so the resulting identifications of Ext are canonical.

For fixed $M$, a short exact sequence $0\to N'\to N\to N''\to0$ gives a long exact Ext sequence. Its start contains the connecting map
$$
\operatorname{Hom}_R(M,N'')\longrightarrow\operatorname{Ext}^1_R(M,N').
$$
The image of a map $M\to N''$ is the obstruction to lifting it to $N$. Analogous sequences exist in the first variable, with its order reversed.

The group $\operatorname{Ext}^1_R(M,N)$ classifies short exact sequences $0\to N\to E\to M\to0$, with equivalence fixing both outer modules and with the split sequence representing zero. Classifying only the abstract middle modules loses information. Finally, $M$ is projective exactly when $\operatorname{Ext}^1_R(M,N)=0$ for every module $N$; the quantifier is essential.

## Connections and further reading

Ext connects extension problems, derived categories, and sheaf cohomology. See [Li, Ext and Tor](https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter3.tex) for resolutions and [Stacks, Section 13.27](https://stacks.math.columbia.edu/tag/06XP) for the extension interpretation.
