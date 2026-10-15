---
{"id":"morse-function","title":"Morse Function","chinese":"Morse函数","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"A Morse function is a smooth real-valued function whose critical points all have nonsingular Hessians.","prerequisites":["smooth-manifold","tangent-space","linear-map"],"related":["cw-complex","singular-homology","euler-characteristic","riemannian-geodesic"],"references":[{"id":"cohen-iga-norbury-morse","label":"Ralph L. Cohen, Kevin Iga and Paul Norbury — Topics in Morse Theory","url":"https://math.stanford.edu/~ralph/morsecourse/biglectures.pdf","locator":"Introduction, critical points, Hessian and Morse-function definition; Chapter 5, Theorems 5.1, 5.3, 5.6–5.7 and Corollaries 5.9–5.10","checked":"2026-10-15","note":"Inspected nondegeneracy, the regular interval theorem, Morse normal form and its proof, cell attachment, and numerical consequences on closed manifolds."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A Morse function is a smooth height function with only nondegenerate critical points. Near each critical point its shape is controlled by a nonsingular quadratic form. Tracking sublevel sets then connects derivatives of a function to the topology of its domain. The critical points indicate possible topological changes, while their indices specify the dimensions of the cells involved.

## Prerequisites

Use differentials of smooth functions, Hessian matrices, symmetric bilinear forms, and the inverse function theorem. Homology and CW complexes are needed for the global applications. A Riemannian metric helps construct a gradient flow, but the definition of a Morse function does not depend on choosing one.

## Definition and conventions

Let $M$ be a smooth Hausdorff, second countable $n$-manifold without boundary. A point $p$ is critical for $f:M\to\mathbb R$ when $df_p=0$. At a critical point, the matrix
$$
\left(\frac{\partial^2 f}{\partial x^i\partial x^j}(p)\right)
$$
represents an intrinsic symmetric bilinear form on $T_pM$, the Hessian. Under a change of coordinates, extra chain-rule terms vanish because $df_p=0$; the matrices are related by congruence.

The critical point is nondegenerate when this form is nonsingular. Its index $\lambda(p)$ is the dimension of a maximal subspace on which the Hessian is negative definite. Equivalently, it counts negative eigenvalues in any coordinate representation. The function is Morse when every critical point is nondegenerate. A function with no critical points satisfies this condition vacuously. Distinct critical values are not required.

## Intuition

A nondegenerate critical point has no infinitesimally flat direction in its quadratic approximation. A minimum has index zero; a maximum has index $n$; intermediate indices describe saddles. The Morse lemma strengthens the approximation: suitable smooth coordinates remove all higher-order terms locally, giving an exact quadratic normal form.

This local conclusion must be distinguished from global control. On a noncompact domain, topology can be influenced by behavior at infinity unless suitable compactness or properness conditions are supplied.

## Examples and non-examples

On $\mathbb R^2$, $f(x,y)=x^2-3y^2$ has one critical point, with Hessian $\operatorname{diag}(2,-6)$ and index one. In contrast, $x^4+y^2$ has an isolated strict minimum at the origin but Hessian $\operatorname{diag}(0,2)$. Isolation and strict minimality do not imply the Morse condition.

On the torus $T^2=(\mathbb R/2\pi\mathbb Z)^2$, take
$$
f(\theta,\phi)=\cos\theta+2\cos\phi.
$$
The derivative vanishes exactly when both angles are $0$ or $\pi$. Its Hessian there is $\operatorname{diag}(-\cos\theta,-2\cos\phi)$. The point $(\pi,\pi)$ has index zero, $(0,0)$ index two, and the other two points index one. Their values are respectively $-3,3,-1,1$. Consequently $c_0-c_1+c_2=1-2+1=0$, matching the torus's Euler characteristic. The formula is well defined on the quotient because cosine is periodic.

The height function $f(x)=x$ on $\mathbb R$ has no critical points and is Morse. A constant function on a positive-dimensional manifold is not: its Hessian vanishes at every point.

## Important properties

The Morse lemma gives coordinates centered at a nondegenerate critical point with
$$
f(x)=f(p)-x_1^2-\cdots-x_\lambda^2
+x_{\lambda+1}^2+\cdots+x_n^2.
$$
**Proof idea:** Taylor's formula writes $f-f(p)$ as a quadratic expression with smooth coefficient functions. Nondegeneracy allows successive smooth completions of squares; the inverse function theorem verifies that the resulting transformations are coordinates. Sylvester's law of inertia fixes the number of negative squares.

For a Morse function on a closed manifold, critical points are isolated and form a closed set, hence there are finitely many. Between regular levels containing no critical value, the sublevel sets are diffeomorphic. The normalized gradient field $\nabla f/\|\nabla f\|^2$ changes the function value at unit rate; compactness controls its flow across the interval.

Crossing a single critical point of index $\lambda$ attaches a $\lambda$-cell up to homotopy. Thus a closed manifold has the homotopy type of a finite CW complex with one cell for each critical point. If $c_k$ counts index-$k$ points, then $\chi(M)=\sum_k(-1)^kc_k$ and $\dim H_k(M;\mathbb F)\leq c_k$ for a field $\mathbb F$. Orientability is unnecessary for these statements. Manifolds with boundary require additional boundary hypotheses.

## Connections and further reading

Morse theory turns local calculus into global topology; energy functionals on path spaces lead toward geodesic applications with further analytic assumptions. Read [Cohen–Iga–Norbury, Chapter 5](https://math.stanford.edu/~ralph/morsecourse/biglectures.pdf) for the inspected normal form, sublevel-set arguments, and homological consequences.
