---
{"id":"differential-graded-category","title":"Differential Graded Category","chinese":"dg-范畴","aliases":["dg category","DG category"],"area":"algebra","topic":"homological-algebra","level":"Research","summary":"A differential graded category retains complexes of morphisms and composition compatible with their differentials.","prerequisites":["chain-complex-modules","module-homology"],"related":["module-ext-group","tensor-product-modules"],"references":[{"id":"keller-dg","label":"Bernhard Keller — On Differential Graded Categories","url":"https://arxiv.org/pdf/math/0601185v5","checked":"2026-10-14","locator":"Section 2.2, Differential graded categories; Sections 3–4, derived categories and dg categories","note":"Scoped definition and stated comparisons; original explanatory examples."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A differential graded category stores morphisms as complexes rather than just sets or vector spaces. Passing to degree-zero cohomology produces an ordinary category, but discards information about homotopies and higher morphism degrees. Keeping that information is useful in derived algebra, deformation theory, and comparisons between algebraic models.

## Prerequisites

Use cochain complexes, graded modules, chain maps, and categories. Fix a commutative base ring $k$. A cochain differential has degree $+1$ and square zero. Homogeneous morphisms have specified degrees, which control signs in compositions.

## Definition and conventions

A small $k$-linear dg category $\mathcal A$ has a set of objects and, for each pair $X,Y$, a complex $\mathcal A(X,Y)$ of $k$-modules. Composition is a degree-zero map of complexes, is associative, and has closed degree-zero identity morphisms. For homogeneous composable $f,g$, this means
$$
d(g\circ f)=d(g)\circ f+(-1)^{|g|}g\circ d(f).
$$
We use cohomological grading. Reversing the convention without changing signs gives a different presentation and may break the differential law.

The category $H^0(\mathcal A)$ has the same objects and morphisms $H^0(\mathcal A(X,Y))$. A dg category is an enhancement of a specified ordinary category only when an appropriate equivalence with that category is supplied.

## Intuition

Closed degree-zero maps describe maps compatible with differentials. Boundaries identify maps that differ by a homotopy. Other degrees retain derived information that an ordinary category has no place to record. The enrichment organizes these data and their compositions together.

## Examples and non-examples

A dg algebra is a dg category with one object. Ordinary $k$-algebras are special cases concentrated in degree zero.

For complexes $X,Y$, the degree-$n$ part of their morphism complex consists of graded maps $f:X^i\to Y^{i+n}$, with differential
$$
d(f)=d_Yf-(-1)^nf d_X.
$$
A closed degree-zero element is a chain map. A degree-zero boundary is a null-homotopic map. Hence $H^0$ of the dg category of complexes is the homotopy category of complexes.

This homotopy category is generally not the derived category: quasi-isomorphisms must also be inverted. Nor is an arbitrary triangulated category automatically a dg category; it does not come equipped with morphism complexes.

## Important properties

A dg functor is a quasi-equivalence if its maps on morphism complexes are quasi-isomorphisms and its induced functor on $H^0$ is essentially surjective. This compares both the retained cohomology and the ordinary categorical shadow.

The displayed differential on morphisms squares to zero because $d_X^2=d_Y^2=0$ and the cross terms cancel with their signs. That elementary calculation is the foundation for the enriched composition law.

## Connections and further reading

Derived Morita theory compares dg categories through their module categories rather than only their objects. These distinctions matter when constructing enhancements or invariants. See [Keller, Section 2.2 and Sections 3–4](https://arxiv.org/pdf/math/0601185v5); this overview does not assert that all triangulated categories admit unique enhancements.

