---
{"id":"riemannian-metric","title":"Riemannian Metric","chinese":"Riemann度量","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"A Riemannian metric equips each tangent space with an inner product varying smoothly from point to point.","prerequisites":["smooth-manifold","tangent-space"],"related":["levi-civita-connection","riemannian-geodesic","sectional-curvature"],"references":[{"id":"nicolaescu-manifolds","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§4.1.1, Definitions and examples; §4.1.2, Levi–Civita connection; §4.1.4, Length minimizing property and Hopf–Rinow theorem","checked":"2026-10-14","note":"Inspected definitions; differences of conventions are stated in the article."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A Riemannian metric equips each tangent space with an inner product varying smoothly from point to point. It adds lengths and angles to a smooth manifold. These pointwise measurements define lengths of curves and, on a connected manifold, a distance between points. The smooth metric tensor and the resulting distance function are related objects with different domains.

## Prerequisites

Understand tangent spaces, symmetric bilinear forms, and smooth tensors. Curve length uses elementary integration. Differential equations become relevant when a metric determines its Levi–Civita connection and geodesics, but they are not needed for the definition itself.

## Definition and conventions

On a smooth Hausdorff, second countable manifold $M$ without boundary, a Riemannian metric is a smooth section $g$ of $\operatorname{Sym}^2T^*M$ such that $g_p$ is positive definite for every $p$. In coordinates, $g=g_{ij}\,dx^i\otimes dx^j$ with a symmetric positive-definite coefficient matrix.

For a piecewise smooth curve $\gamma$, its length is $\int\sqrt{g(\dot\gamma,\dot\gamma)}\,dt$. On a connected manifold, define $d_g(p,q)$ as the infimum of lengths of curves joining them. For disconnected manifolds this construction is applied componentwise; different components do not have a finite connecting distance.

## Intuition

The metric is a smoothly varying ruler applied to instantaneous velocities. A curve's length is assembled from those local measurements. Two metrics may have the same topology and smooth structure while producing different lengths and curvature. Topological equivalence therefore does not determine the Riemannian geometry.

## Examples and non-examples

Euclidean space has $g=\sum_i dx^i\otimes dx^i$. Restricting this inner product to the tangent spaces of the unit sphere produces its round metric. Great-circle arcs then have length equal to the angle they sweep, and antipodal points have distance $\pi$.

The form $dx\otimes dx-dy\otimes dy$ on $\mathbb R^2$ is nondegenerate but not Riemannian: it assigns negative squared length to $\partial_y$. It is a pseudo-Riemannian metric instead. A positive-semidefinite tensor with a nonzero null direction also fails the positive-definiteness requirement.

## Important properties

Every smooth manifold under these global assumptions admits a Riemannian metric. Choose local Euclidean metrics and average them using a smooth partition of unity. A positive weighted sum remains positive definite at every point because at least one weight is positive.

The induced distance gives the manifold topology. A metric uniquely determines a torsion-free metric-compatible connection. For connected manifolds without boundary, Hopf–Rinow relates metric completeness to geodesic completeness and compactness of closed bounded subsets. These conclusions do not make every Riemannian manifold complete: the usual metric on $(0,1)$ is incomplete.

## Connections and further reading

Curvature describes the second-order behavior of the metric through its connection. Symplectic forms provide a different geometric structure and are not positive-definite metrics. See [Nicolaescu, §4.1](https://academicweb.nd.edu/~lnicolae/Lectures.pdf) for the inspected metric examples, connection, and completeness statements. The Chinese headword follows the publisher's mixed-script heading.

