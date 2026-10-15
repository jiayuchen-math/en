---
{"id":"poincare-duality","title":"Poincaré Duality","chinese":"Poincaré 对偶","aliases":[],"area":"geometry-topology","topic":"algebraic-topology","level":"Graduate","summary":"On a closed oriented manifold, cap product with its fundamental class identifies cohomology with homology in complementary dimensions.","prerequisites":["singular-homology","singular-cohomology","manifold-orientation","closed-manifold"],"related":["cup-product","de-rham-cohomology","stokes-theorem-manifolds"],"references":[{"id":"hatcher-duality","label":"Allen Hatcher — Algebraic Topology","url":"https://pi.math.cornell.edu/~hatcher/AT/AT.pdf","locator":"§3.3, Theorem 3.30 and Example 3.31, printed pp. 241–242; Theorem 3.35, Lemma 3.36 and proof, pp. 245–248; Theorem 3.43, p. 254","checked":"2026-10-15","note":"Inspected cap-product duality, the surface example, compact supports, the Mayer–Vietoris proof, and relative boundary duality."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Poincaré duality pairs the topology of an oriented manifold in complementary dimensions. A degree-$k$ cohomology class determines an $(n-k)$-dimensional homology class by cap product with the fundamental class. This is a specific isomorphism, not merely an equality of Betti numbers. Its formulation also explains why compactness, orientation, and the absence of a boundary must be checked.

## Prerequisites

Use singular homology and cohomology, the cup product, and relative groups. An orientation specifies compatible generators of the local top-dimensional homology groups. For a closed oriented manifold those local choices assemble into a fundamental class. Here “closed” means compact and without boundary, not closed as a subset of an ambient space.

## Definition and conventions

Let $M$ be a connected closed oriented topological $n$-manifold, Hausdorff and second countable. Choose its integral fundamental class $[M]\in H_n(M;\mathbb Z)$. Then
$$
D_M:H^k(M;\mathbb Z)\longrightarrow H_{n-k}(M;\mathbb Z),
\qquad D_M(\alpha)=[M]\frown\alpha
$$
is an isomorphism for every $k$. We place the homology argument first in the cap product. Reversing orientation negates $[M]$ and the duality map.

The theorem also works over a commutative coefficient ring when the manifold has a compatible orientation over that ring. In particular, mod-$2$ duality requires no integral orientation. The integral statement remains an isomorphism of abelian groups, including torsion; replacing it by a pairing of real vector spaces loses that information.

## Intuition

A cohomology class tests cycles. Its dual homology class can often be pictured as a complementary-dimensional locus that cycles intersect. This geometric picture requires appropriate representatives and transversality; the cap-product definition supplies a general construction even when no convenient embedded representative has been chosen.

Dimension counting alone is insufficient. The orientation supplies signed intersection data, and the fundamental class tells the construction which global top-dimensional cycle to use.

## Examples and non-examples

For the oriented two-torus, let $a,b$ be the standard coordinate loops and choose the usual orientation with intersection $a\cdot b=1$. If $\alpha,\beta\in H^1(T^2;\mathbb Z)$ evaluate respectively as $(1,0)$ and $(0,1)$ on $(a,b)$, the cap convention gives $D(\alpha)=b$ and $D(\beta)=-a$. Thus the cohomology class detecting one coordinate direction corresponds to the transverse loop, rather than to that same coordinate loop.

In real differential-form coordinates $x,y$ of period one, this sign choice is reflected in $\int_{T^2}dx\wedge dy=1$ and $\int_{T^2}dy\wedge dx=-1$. The pairing on degree one has matrix
$$
\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$

For the disk $D^2$, ordinary $H^0(D^2;\mathbb Z)=\mathbb Z$ but $H_2(D^2;\mathbb Z)=0$. The boundary prevents the displayed closed-manifold isomorphism. For $\mathbb R^n$ with $n>0$, the same mismatch shows that orientability alone does not replace compactness. For $\mathbb{RP}^2$, integral top homology is zero, while mod-$2$ top homology is nonzero; coefficient choice repairs the orientation obstruction.

## Important properties

Over a field, cup product followed by evaluation on $[M]$ gives a nondegenerate pairing between degrees $k$ and $n-k$. Consequently the corresponding Betti numbers agree. On a smooth oriented closed manifold, de Rham theory expresses the real pairing as $([\omega],[\eta])\mapsto\int_M\omega\wedge\eta$. Stokes' theorem makes it independent of representatives.

For an oriented manifold without boundary that may be noncompact, the appropriate statement is $H_c^k(M;\mathbb Z)\cong H_{n-k}(M;\mathbb Z)$, using compact supports. For a compact oriented manifold with boundary, the two Lefschetz forms are
$$
H^k(M;\mathbb Z)\cong H_{n-k}(M,\partial M;\mathbb Z),\qquad
H^k(M,\partial M;\mathbb Z)\cong H_{n-k}(M;\mathbb Z).
$$

**Proof sketch:** first prove compact-support duality in Euclidean coordinate neighborhoods. Compatibility of cap product with Mayer–Vietoris sequences lets the five-lemma glue these local isomorphisms. An increasing-union argument passes to a whole manifold. Compactness then identifies compactly supported cohomology with ordinary cohomology.

## Connections and further reading

Intersection theory and integration of forms provide complementary views of the same duality. [Hatcher, §3.3](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf) gives the inspected surface calculation and explains both compact supports and the boundary corrections.
