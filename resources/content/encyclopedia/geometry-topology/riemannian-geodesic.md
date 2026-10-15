---
{"id":"riemannian-geodesic","title":"Riemannian Geodesic","chinese":"测地线","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Undergraduate","summary":"A Riemannian geodesic is an affinely parametrized curve with zero covariant acceleration for the Levi–Civita connection.","prerequisites":["riemannian-metric","levi-civita-connection"],"related":["parallel-transport","riemann-curvature-tensor","morse-function"],"references":[{"id":"meinrenken-geodesics","label":"Eckhard Meinrenken — Riemannian Geometry","url":"https://www.math.toronto.edu/mein/teaching/LectureNotes/rieall.pdf","locator":"§16, Definition 16.1, Theorems 16.3, 16.5, 16.9 and 16.13; §17, Theorem 17.3, Lemma 17.4 and Theorem 17.7","checked":"2026-10-15","note":"Inspected the geodesic equation, initial-value theorem, energy characterization, local minimizing argument, and Hopf–Rinow hypotheses."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A geodesic is the intrinsic counterpart of a straight line moving at constant speed. Its velocity remains parallel along its own path. This differential equation controls local motion, while topology and curvature determine whether a longer segment remains shortest. The distinction between a geodesic and a globally minimizing path is essential even on the round sphere.

## Prerequisites

Use tangent vectors, a smooth positive-definite metric, and its Levi–Civita connection. Basic existence and uniqueness for ordinary differential equations explains how a starting point and velocity determine a geodesic. Curve length is $L(\gamma)=\int\|\dot\gamma\|_g\,dt$.

## Definition and conventions

Let $(M,g)$ be a smooth Hausdorff, second countable Riemannian manifold without boundary. A smooth curve $\gamma:I\to M$ on an interval is a geodesic if
$$
\nabla_{\dot\gamma}\dot\gamma=0.
$$
The parameter is affine. Constant curves are allowed. In coordinates this becomes
$$
\ddot x^k+\sum_{i,j}\Gamma^k_{ij}(x)\dot x^i\dot x^j=0.
$$
Replacing $t$ by $at+b$ preserves the equation. For a nonconstant geodesic, a general smooth change of parameter does not: the new acceleration includes a term proportional to the second derivative of the parameter change. Thus the geometric image of a geodesic and its parametrization are different data.

## Intuition

On an embedded surface with its induced metric, covariant acceleration is the tangential component of ambient acceleration. A geodesic may visibly bend in the surrounding Euclidean space, but its acceleration points normally to the surface. Intrinsic straightness therefore does not require an ambient straight line.

Metric compatibility gives
$$
\frac{d}{dt}\|\dot\gamma\|_g^2
=2g(\nabla_{\dot\gamma}\dot\gamma,\dot\gamma)=0.
$$
Every geodesic has constant speed, although constant speed alone does not imply the geodesic equation.

## Examples and non-examples

In Euclidean space, the Christoffel symbols vanish in Cartesian coordinates and $\gamma(t)=p+tv$ is the general solution. The curve $(t^3,0)$ on $t>0$ has the image of a straight ray, but acceleration $(6t,0)$, so this parametrized curve is not a geodesic.

On the unit sphere, $\gamma(t)=(\cos t,\sin t,0)$ has ambient acceleration $-\gamma(t)$, which is normal. It is therefore a unit-speed geodesic. Its segment from $t=0$ to $t=3\pi/2$ has length $3\pi/2$, while the opposite-direction quarter circle joins the same endpoints with length $\pi/2$. The longer segment is a concrete nonexample of global minimization.

The Euclidean interval $(0,1)$ is a manifold without boundary in the manifold sense. The geodesic $\gamma(t)=1/2+t$ exits it at finite time, illustrating geodesic incompleteness without a manifold boundary.

## Important properties

For every $p\in M$ and $v\in T_pM$, there is a unique maximal geodesic with $\gamma(0)=p$ and $\dot\gamma(0)=v$. **Proof idea:** introduce velocity coordinates to turn the second-order equation into a smooth first-order system on $TM$, then apply the ordinary differential equation theorem.

The exponential map $\exp_p(v)=\gamma_v(1)$ is defined near zero even without completeness. Its derivative at zero is the identity, so it gives coordinates near $p$. Gauss's lemma makes radial and angular directions orthogonal there. The resulting length estimate proves that sufficiently short geodesic segments minimize distance.

For fixed parameter interval and fixed endpoints, geodesics are precisely stationary curves of energy $\frac12\int\|\dot\gamma\|_g^2dt$. Integration by parts in the first variation leaves the covariant acceleration. Stationary does not mean globally minimizing.

For a connected Riemannian manifold without boundary, Hopf–Rinow equates metric completeness with existence of every geodesic for all real time. Under these equivalent conditions every two points admit a minimizing geodesic. It asserts existence of a minimizer, not minimization by every geodesic between those points.

## Connections and further reading

Curvature enters the equation for variations through geodesics; energy on spaces of curves motivates Morse theory. [Meinrenken, §§16–17](https://www.math.toronto.edu/mein/teaching/LectureNotes/rieall.pdf) supplies the inspected initial-value, variation, and completeness arguments.
