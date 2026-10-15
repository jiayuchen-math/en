---
{"id":"smooth-vector-bundle","title":"Smooth Vector Bundle","chinese":"向量丛","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"A smooth vector bundle is a locally trivial smooth family of vector spaces whose changes of fiber coordinates are linear.","prerequisites":["smooth-manifold","vector-space","linear-map"],"related":["tangent-bundle","cotangent-space","lie-group"],"references":[{"id":"nicolaescu-bundles","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§2.1.4, Definition 2.1.23, gluing cocycles and Definition 2.1.27; §2.1.5, Definition 2.1.45 and Remark 2.1.46","checked":"2026-10-15","note":"Inspected local triviality, sections, cocycle reconstruction, and the global-frame criterion."},{"id":"gualtieri-bundles","label":"Marco Gualtieri — Geometry and Topology I","url":"https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf","locator":"§5, Definitions 5.1, 5.5–5.6 and Example 5.9; §5.1, Examples 5.15–5.17","checked":"2026-10-15","note":"Inspected bundle maps, pullbacks, and operations on bundles."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A smooth vector bundle assigns a vector space to every point of a smooth manifold. Nearby fibers admit smoothly varying coordinates, but these coordinates may twist when carried around the base. Tangent vectors, covectors, and differential forms all fit this framework. It separates the linear algebra performed at a point from the global problem of making compatible choices everywhere.

## Prerequisites

Use smooth manifolds, invertible linear maps, and changes of coordinates. A vector space has addition and scalar multiplication; a manifold need not. The distinction matters because the total space of a bundle is a manifold even when it has no natural vector-space structure.

## Definition and conventions

Here $M$ is a smooth Hausdorff, second countable manifold without boundary. A smooth real vector bundle of rank $r$ consists of a smooth manifold $E$, a smooth surjection $\pi:E\to M$, and an $r$-dimensional real vector-space structure on each fiber $E_p=\pi^{-1}(p)$. Each point has an open neighborhood $U$ with a diffeomorphism
$$
\Phi_U:\pi^{-1}(U)\longrightarrow U\times\mathbb R^r
$$
that preserves the base point and restricts to a linear isomorphism on every fiber. Complex bundles replace $\mathbb R^r$ by $\mathbb C^r$ and require complex-linear fiber maps; they are outside the default real convention of this entry.

On overlaps, two trivializations differ by $(p,v)\mapsto(p,g_{VU}(p)v)$, where $g_{VU}:U\cap V\to\operatorname{GL}(r,\mathbb R)$ is smooth. Composition forces $g_{WU}=g_{WV}g_{VU}$. The rank is the fiber dimension; the total-space dimension is $\dim M+r$.

A smooth section is a map $s:M\to E$ with $\pi\circ s=\operatorname{id}_M$. The zero section exists for every vector bundle.

## Intuition

A local trivialization provides a temporary common coordinate system for nearby vector spaces. Transition matrices describe how to translate between such systems. Vectors in one fiber can be added intrinsically. Comparing vectors in different fibers requires additional information, such as a connection; local coordinates alone do not give a preferred global comparison.

## Examples and non-examples

The product $M\times\mathbb R^r\to M$ is trivial. Its standard basis gives $r$ sections forming a basis at every point. For $TS^1$, the vector field $(-y,x)$ never vanishes, so
$$
(p,a)\longmapsto a(-p_2,p_1)
$$
is an explicit bundle isomorphism $S^1\times\mathbb R\to TS^1$.

For a contrasting line bundle, identify $(0,t)$ with $(1,-t)$ in $[0,1]\times\mathbb R$. This gives the Möbius line bundle over the circle. A section lifts to a function $a:[0,1]\to\mathbb R$ satisfying $a(1)=-a(0)$. If it were nowhere zero, the intermediate value theorem would contradict that sign reversal. Consequently this bundle cannot be trivial.

The infinite fiber direction matters: the Möbius line bundle is not the compact strip obtained by restricting $|t|\leq1$. A closed interval is not a real vector space under ordinary scalar multiplication, so that restricted projection is not a vector bundle.

## Important properties

A rank-$r$ bundle is trivial exactly when it has $r$ smooth sections that form a basis in every fiber. **Proof sketch:** a frame defines $(p,a_1,\ldots,a_r)\mapsto\sum a_i s_i(p)$. In local trivializations its inverse is matrix inversion, hence smooth. A trivialization gives the frame in the reverse direction.

Conversely, smooth invertible transition matrices satisfying the cocycle identities reconstruct a bundle by gluing local products. The identities ensure that identification is consistent on triple overlaps. Duals, direct sums, and tensor products are constructed by applying the corresponding linear-algebra operations to these transitions. Pullback along a smooth map $f:N\to M$ gives fibers $(f^*E)_q=E_{f(q)}$.

## Connections and further reading

Differential forms are sections of exterior powers of the cotangent bundle. Connections add differentiation of sections, while characteristic classes detect some obstructions to global triviality. Read [Nicolaescu, §§2.1.4–2.1.5](https://academicweb.nd.edu/~lnicolae/Lectures.pdf) for cocycles and frames, and [Gualtieri, §5](https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf) for pullbacks and bundle operations.
