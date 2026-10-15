---
{"id":"stokes-theorem-manifolds","title":"Stokes' Theorem on Manifolds","chinese":"Stokes 定理","aliases":["generalized Stokes theorem"],"area":"geometry-topology","topic":"differential-geometry","level":"Undergraduate","summary":"Stokes' theorem equates the integral of an exterior derivative over an oriented manifold with the integral of the original form over its oriented boundary.","prerequisites":["differential-form","exterior-derivative","manifold-orientation","manifold-with-boundary"],"related":["de-rham-cohomology","poincare-duality","fundamental-theorem-calculus"],"references":[{"id":"gualtieri-stokes","label":"Marco Gualtieri — Geometry and Topology I","url":"https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf","locator":"§6.4, Proposition 6.17, the local half-space calculation, Theorem 6.18 and Corollary 6.19, printed pp. 60–61","checked":"2026-10-15","note":"Inspected induced boundary orientation, compact support, partition-of-unity proof, and the boundary-free corollary."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Stokes' theorem relates differentiation inside a region to integration along its boundary. The fundamental theorem of calculus, Green's theorem, the curl form of the classical Stokes theorem, and the divergence theorem share this structure. Differential forms express the common statement without choosing an ambient Euclidean space or a Riemannian metric.

## Prerequisites

Use differential forms, their exterior derivative, pullback, and integration on oriented manifolds. Orientation determines signs in integration. A smooth manifold with boundary has local half-space charts near boundary points; its boundary is itself a manifold of one lower dimension.

## Definition and conventions

Let $M$ be a smooth oriented Hausdorff, second countable $n$-manifold with boundary, with $n\geq1$. Let $j:\partial M\hookrightarrow M$ be the inclusion. For a smooth compactly supported $(n-1)$-form $\omega$ on $M$,
$$
\int_M d\omega=\int_{\partial M}j^*\omega.
$$
The support may meet the boundary. When $M$ is compact, every smooth form has compact support, so no additional support restriction is needed. We use manifolds with smooth boundary, without corners, in this formulation.

The boundary has the outward-normal-first orientation: a basis $(v_1,\ldots,v_{n-1})$ of $T_p\partial M$ is positive when $(\nu,v_1,\ldots,v_{n-1})$ is positive in $T_pM$ for an outward-pointing transverse vector $\nu$. No unit normal or metric is needed. On $[a,b]$ oriented by increasing coordinate, the right endpoint has positive sign and the left endpoint negative sign.

## Intuition

An exterior derivative measures local change. Integrating these changes makes contributions across internal interfaces cancel, leaving a boundary contribution with its induced sign. A partition of unity makes this local-to-global intuition rigorous without requiring one global coordinate system.

The pullback $j^*\omega$ keeps only values on tangent vectors to the boundary. It is not an independently chosen boundary form, and its orientation cannot be selected independently if the displayed identity is to hold with a plus sign.

## Examples and non-examples

For a smooth function $f$ on $[a,b]$, Stokes reads $\int_a^b f'(t)dt=f(b)-f(a)$. A function is a zero-form, so this is exactly the one-dimensional case.

For the unit disk $D\subset\mathbb R^2$ with orientation $dx\wedge dy$, set
$$
\omega=\tfrac12(x\,dy-y\,dx),\qquad d\omega=dx\wedge dy.
$$
The induced boundary orientation is counterclockwise. Under $\gamma(t)=(\cos t,\sin t)$, $0\leq t\leq2\pi$, the pullback is $\gamma^*\omega=\tfrac12dt$. Thus both sides equal $\pi$. Reversing only the boundary orientation would instead give $-\pi$ on the right.

On the punctured plane, $\alpha=(-y\,dx+x\,dy)/(x^2+y^2)$ is closed and has integral $2\pi$ around the unit circle. There is no contradiction: $\alpha$ does not extend smoothly across the origin, so Stokes cannot be applied to that form on the whole disk. On an annulus, the inner and outer boundary contributions cancel with their induced orientations.

Compact support also matters on a noncompact manifold. On the oriented line, $f(x)=\arctan x$ has $\int_{\mathbb R}df=\pi$, while the line has no boundary. This is not a counterexample to the theorem: $f$ lacks compact support. The missing contribution comes from its unequal limits at the two ends.

## Important properties

**Proof sketch:** first take a form supported in a single coordinate chart. On an interior chart, iterated integration of partial derivatives gives zero by the fundamental theorem of calculus and compact support. In a boundary half-space chart, the transverse derivative leaves exactly the boundary term, with the outward-first sign. Decompose a general form as $\sum_i\rho_i\omega$ using a subordinate partition of unity and add the local formulas. Linearity of $d$ and $\sum_i\rho_i=1$ recover the original form.

If $M$ has no boundary and $\eta$ is a compactly supported $(n-1)$-form, then $\int_M d\eta=0$. On a noncompact manifold it is not enough to assume that $d\eta$ alone has compact support: its primitive must meet the theorem's support hypothesis. On a closed oriented manifold every smooth primitive has compact support, so a positive volume form cannot be exact, since its integral is positive. More generally, Stokes shows that integration over cycles depends only on de Rham cohomology classes.

## Connections and further reading

Stokes supplies the compatibility between exterior differentiation and the boundary operation that underlies de Rham theory and integration pairings in Poincaré duality. [Gualtieri, §6.4](https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf) contains the inspected boundary-orientation and local-to-global proof.
