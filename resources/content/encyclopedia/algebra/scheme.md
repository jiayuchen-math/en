---
{"id":"scheme","title":"Scheme","chinese":"概形","aliases":[],"area":"algebra","topic":"algebraic-geometry","level":"Graduate","summary":"A scheme is a locally ringed space locally isomorphic to the prime spectrum of a commutative ring equipped with its structure sheaf.","prerequisites":["algebraic-prime-spectrum","localization-commutative-ring","local-ring","sheaf"],"related":["commutative-ring","prime-ideal","noetherian-ring"],"references":[{"id":"stacks-locally-ringed","label":"The Stacks Project — Locally ringed spaces","url":"https://stacks.math.columbia.edu/tag/01HA","locator":"Section 26.2, opening ringed-space discussion and Definition 26.2.1","checked":"2026-10-15","note":"Local stalks and local homomorphisms in morphisms of locally ringed spaces."},{"id":"stacks-affine-schemes","label":"The Stacks Project — Affine schemes","url":"https://stacks.math.columbia.edu/tag/01HR","locator":"Section 26.5, construction on standard opens, Definition 26.5.3, Lemma 26.5.4 and Definition 26.5.5","checked":"2026-10-15","note":"Structure sheaf, localized sections and stalks, and affine schemes."},{"id":"stacks-schemes","label":"The Stacks Project — Schemes","url":"https://stacks.math.columbia.edu/tag/01II","locator":"Section 26.9, Definition 26.9.1 and Lemma 26.9.2","checked":"2026-10-15","note":"Local affine definition and open subschemes."},{"id":"stacks-affine-morphisms","label":"The Stacks Project — Morphisms to an affine scheme","url":"https://stacks.math.columbia.edu/tag/01I1","locator":"Lemma 26.6.4, statement and construction using inverse images of maximal ideals and localization on standard opens","checked":"2026-10-15","note":"Ring maps correspond to morphisms into affine schemes; source need only be locally ringed."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A scheme is a geometric space assembled locally from commutative rings. Its points and topology describe where algebraic phenomena occur, while its structure sheaf records the algebra available on each open region. This entry gives the affine model and the local definition. It does not attempt a construction of projective geometry, intersection theory, or the general theory of morphisms.

## Prerequisites

Know prime spectra with their Zariski topology, localization, local rings, and sheaves. A local ring is a nonzero commutative ring with a unique maximal ideal. A locally ringed space is a topological space $X$ with a sheaf of commutative rings $\mathcal O_X$ whose stalk at every point is local. The rings of sections on larger opens need not themselves be local.

## Definition and conventions

For a commutative unital ring $R$, the affine model has underlying space $\operatorname{Spec}R$ and structure sheaf specified on standard opens by
$$
D(f)=\{\mathfrak p:f\notin\mathfrak p\},\qquad
\mathcal O_{\operatorname{Spec}R}(D(f))=R_f.
$$
Restrictions are the canonical localization maps. These data extend to a sheaf on all opens, and its stalk at $\mathfrak p$ is $R_{\mathfrak p}$. An affine scheme is a locally ringed space isomorphic to this model for some $R$.

A scheme is a locally ringed space $(X,\mathcal O_X)$ for which every point has an open neighborhood isomorphic, with its restricted sheaf, to an affine scheme. Equivalently, it has an affine open cover. No Noetherian, reduced, separated, or finite-type hypothesis is part of this definition. The empty scheme is allowed.

A morphism $X\to Y$ includes a continuous map $f$ and a sheaf map $f^\sharp:\mathcal O_Y\to f_*\mathcal O_X$. On stalks, the resulting homomorphism $\mathcal O_{Y,f(x)}\to\mathcal O_{X,x}$ must be local: it takes the source maximal ideal into the target maximal ideal.

## Intuition

Affine charts play the role of coordinate neighborhoods, but their coordinates belong to rings that may have zero divisors or nilpotents. Restricting to $D(f)$ makes $f$ invertible. Passing to a stalk makes every function not vanishing at the chosen prime invertible. Gluing preserves these algebraic observations across charts, rather than keeping only a point set.

## Examples and non-examples

For a field $k$, $\operatorname{Spec}k$ has one point and its ring of global sections is $k$. The scheme $\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$ also has one point: every prime contains the nilpotent $\epsilon$, and the quotient by $(\epsilon)$ is $k$. Its global sections nevertheless contain the nonzero element $\epsilon$ with square zero. These two schemes are not isomorphic, because a scheme isomorphism induces an isomorphism of global-section rings, and one ring is reduced while the other is not.

For a second explicit chart calculation, in $\operatorname{Spec}\mathbb Z$ the open $D(6)$ has section ring $\mathbb Z[1/6]$. At the point $(5)$ the stalk is $\mathbb Z_{(5)}$, whose elements have denominators not divisible by $5$. The stalk and the ring on a particular neighborhood encode different amounts of localization.

A one-point space with structure ring $\mathbb Z$ is a ringed space but is not a scheme: its only stalk is $\mathbb Z$, which has multiple maximal ideals and hence is not local. Merely supplying a topology and a sheaf of rings is insufficient.

## Important properties

Every open subspace of a scheme, equipped with the restricted structure sheaf, is a scheme. Proof idea: intersect it with an affine chart around a point and choose a standard open inside that intersection. Standard opens in an affine scheme are affine, so they supply the required smaller chart.

For commutative rings $R,S$, there is a natural bijection
$$
\operatorname{Hom}_{\mathrm{Sch}}(\operatorname{Spec}S,\operatorname{Spec}R)
\cong\operatorname{Hom}_{\mathrm{Ring}}(R,S).
$$
A ring map sends a prime of $S$ to its inverse image in $R$ and supplies compatible maps of localized sections. Conversely, global sections recover the ring map. The direction reverses, and the structure sheaves are essential to this correspondence. The same classification by global rings is not asserted for arbitrary schemes.

## Connections and further reading

The scheme construction extends the existing prime-spectrum entry by restoring local algebra, especially nilpotents. Read [Stacks, Section 26.5](https://stacks.math.columbia.edu/tag/01HR) for the affine construction and [Section 26.9](https://stacks.math.columbia.edu/tag/01II) for the local definition.
