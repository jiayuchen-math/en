---
{"id":"riemann-curvature-tensor","title":"Curvature of a Riemannian Metric","chinese":"曲率张量","aliases":["Riemann curvature tensor","Riemannian curvature tensor"],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"The Riemann curvature tensor measures the failure of covariant derivatives for the Levi–Civita connection to commute after correcting for the Lie bracket.","prerequisites":["riemannian-metric","levi-civita-connection","smooth-vector-field"],"related":["riemannian-geodesic","parallel-transport","smooth-vector-bundle"],"references":[{"id":"meinrenken-curvature","label":"Eckhard Meinrenken — Riemannian Geometry","url":"https://www.math.toronto.edu/mein/teaching/LectureNotes/rieall.pdf","locator":"§18, Definition 18.1 and Theorems 18.2, 18.3, 18.5, printed pp. 51–53","checked":"2026-10-15","note":"Inspected the sign convention, tensoriality proof, coordinate formula, and Riemannian curvature symmetries."},{"id":"wang-curvature","label":"Wang Wenlong — 黎曼几何","url":"https://my.nankai.edu.cn/_upload/article/files/6c/e0/25c21ba84c4aa63e26da8793050a/0c35346a-aaa6-4650-b76c-cfa464f214aa.pdf","locator":"Chapter 4, §4.1 曲率张量, Definition 4.1; §4.2 三种曲率, Definition 4.2","checked":"2026-10-15","note":"Inspected Chinese tensor terminology, sectional/Ricci/scalar conventions, the sphere computation, and the submanifold curvature formula."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Curvature is an intrinsic measurement of a Riemannian metric, independent of how the manifold is drawn or embedded. Its basic form is the Riemann curvature tensor. Sectional, Ricci, and scalar curvature extract different information from that tensor. This article centers on the full tensor, because a single number cannot generally describe curvature in every tangent direction.

## Prerequisites

Use the Levi–Civita connection, the Lie bracket of vector fields, and multilinear algebra. A connection differentiates vector fields but is not itself a tensor in both arguments. Understanding this distinction helps explain why curvature needs a correction term and why Christoffel symbols alone cannot measure intrinsic bending.

## Definition and conventions

Let $(M,g)$ be a smooth Riemannian manifold without boundary, with Levi–Civita connection $\nabla$. No orientation or compactness is required. Our sign convention is
$$
R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.
$$
This expression is linear over smooth functions in all three fields. Hence at $p$ it depends only on $X_p,Y_p,Z_p$ and defines a tensor with three vector inputs and one vector output. Lowering the output with the metric gives
$$
\mathcal R(X,Y,Z,W)=g(R(X,Y)Z,W).
$$
Some authors negate $R$ or reorder the four slots. Formulas should therefore be compared together with their sign and slot conventions.

For linearly independent $u,v\in T_pM$, sectional curvature is
$$
K(\operatorname{span}\{u,v\})=
\frac{g(R(u,v)v,u)}{g(u,u)g(v,v)-g(u,v)^2}.
$$
This convention gives the unit round sphere positive sectional curvature.

## Intuition

Differentiating first in one direction and then in another need not produce the same result in reverse order. Even scalar derivatives have a commutator, represented by $[X,Y]$. Subtracting its covariant derivative isolates the geometric discrepancy. Infinitesimal parallel transport around a small loop offers another interpretation of this discrepancy; finite-loop transport additionally contains global information.

## Examples and non-examples

The Euclidean plane is flat in Cartesian coordinates. In polar coordinates $r>0$, its metric is $dr^2+r^2d\theta^2$ and
$$
\nabla_{\partial_\theta}\partial_\theta=-r\partial_r,
\qquad
\nabla_{\partial_r}\partial_\theta
=\nabla_{\partial_\theta}\partial_r=r^{-1}\partial_\theta.
$$
Nevertheless, direct calculation gives
$$
R(\partial_r,\partial_\theta)\partial_\theta
=-\partial_r-(-\partial_r)=0.
$$
The first term differentiates $-r\partial_r$ radially; the second differentiates $r^{-1}\partial_\theta$ angularly. Nonzero Christoffel symbols are therefore not evidence of nonzero curvature.

For the unit round sphere, the tensor is $R(u,v)w=g(v,w)u-g(u,w)v$. Taking orthonormal $u,v$ gives $R(u,v)v=u$ and $K=1$. A round sphere of radius $a$ has sectional curvature $a^{-2}$. By contrast, a circular cylinder with its induced metric unwraps locally isometrically to a plane, so it has zero intrinsic curvature despite bending visibly in three-dimensional space.

## Important properties

**Tensoriality proof idea:** expand $R(X,Y)(fZ)$ using the connection's product rule. Terms involving first derivatives of $f$ cancel, and the remaining second-derivative contribution is $(XYf-YXf-[X,Y]f)Z=0$. The same calculation in the other slots proves their smooth-function linearity.

The four-tensor is antisymmetric in its first pair and last pair, and unchanged by exchanging the two pairs. Since the Levi–Civita connection has zero torsion, it also satisfies the first Bianchi identity
$$
R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0.
$$
Metric compatibility and zero torsion supply different parts of these symmetries; arbitrary connections need not satisfy the entire list.

Ricci curvature contracts the tensor: for an orthonormal basis $(e_i)$, $\operatorname{Ric}(u,v)=\sum_i g(R(e_i,u)v,e_i)$. Scalar curvature is its metric trace. On a surface scalar curvature is $2K$. Traces discard information, so zero scalar curvature alone is weaker than zero full curvature.

Normal coordinates make the Christoffel symbols zero at one chosen point. Their derivatives can remain nonzero there, and those derivatives contribute to curvature. Flattening first-order coordinate data is therefore compatible with a curved metric.

## Connections and further reading

Curvature governs geodesic variation and extends to connections on arbitrary vector bundles. Read [Meinrenken, §18](https://www.math.toronto.edu/mein/teaching/LectureNotes/rieall.pdf) for tensoriality and symmetries, and [Wang, Chapter 4](https://my.nankai.edu.cn/_upload/article/files/6c/e0/25c21ba84c4aa63e26da8793050a/0c35346a-aaa6-4650-b76c-cfa464f214aa.pdf) for the sectional-curvature formulation.
