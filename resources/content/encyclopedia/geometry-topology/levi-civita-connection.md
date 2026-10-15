---
{"id":"levi-civita-connection","title":"Levi–Civita Connection","chinese":"Riemann联络","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"The Levi–Civita connection is the unique rule for differentiating tangent vector fields that both preserves a Riemannian metric and has zero torsion.","prerequisites":["riemannian-metric"],"related":["parallel-transport","riemannian-geodesic","riemann-curvature-tensor"],"references":[{"id":"nicolaescu-manifolds","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§4.1.2, Proposition 4.1.9 and Koszul formula; Definition 4.1.10, geodesics","checked":"2026-10-14","note":"Inspected definitions; differences of conventions are stated in the article."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Levi–Civita connection is the unique rule for differentiating tangent vector fields that both preserves a Riemannian metric and has zero torsion. It makes parallel transport, geodesics, and curvature intrinsic. Although it is determined by the metric, it is not obtained by simply differentiating every vector-field component in arbitrary coordinates.

## Prerequisites

Use vector fields, their Lie bracket, and covariant differentiation. An affine connection is linear in the differentiating vector field over smooth functions and satisfies a product rule in the field being differentiated. The Lie bracket measures the failure of flows to commute.

## Definition and conventions

For a smooth Riemannian manifold $(M,g)$, the Levi–Civita connection $\nabla$ satisfies
$$
\nabla_XY-\nabla_YX=[X,Y],
$$
and
$$
Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ).
$$
The first identity says torsion vanishes; the second says $\nabla g=0$. We assume Hausdorff and second countable manifolds without boundary here. The same characterization works for a nondegenerate pseudo-Riemannian metric, but the length statements below concern positive-definite metrics.

The Chinese headword records the inspected publisher's “Riemann联络”; it is used here specifically for this metric's torsion-free compatible connection.

## Intuition

Differentiating vectors at different points requires deciding how to compare their tangent spaces. Metric compatibility asks that this comparison preserve inner products. Zero torsion supplies the additional symmetry that singles out one connection. Each condition alone leaves freedom, which is why both are required in the uniqueness theorem.

## Examples and non-examples

For the Euclidean metric in Cartesian coordinates, $\nabla_{\partial_i}\partial_j=0$. In polar coordinates away from the origin,
$$
g=dr^2+r^2d\theta^2,\qquad
\nabla_{\partial_\theta}\partial_\theta=-r\partial_r.
$$
Also $\nabla_{\partial_r}\partial_\theta=r^{-1}\partial_\theta$. Nonzero connection coefficients in these coordinates do not imply curvature: the Euclidean plane remains flat.

Declaring every coordinate basis vector to have zero derivative in polar coordinates gives a connection, but it fails metric compatibility because $\partial_r g(\partial_\theta,\partial_\theta)=2r$. This is a direct nonexample of the Levi–Civita connection for that metric.

## Important properties

Permuting the metric-compatibility identity and substituting zero torsion yields the Koszul formula. Its right-hand side expresses $2g(\nabla_XY,Z)$ entirely through $g$, derivatives of scalar pairings, and Lie brackets. Nondegeneracy then proves uniqueness. Defining $\nabla$ by that formula and checking the product rules proves existence.

Parallel transport for this connection preserves inner products. A geodesic satisfies $\nabla_{\dot\gamma}\dot\gamma=0$ and has constant speed. Geodesics minimize length only locally under suitable restrictions; a long great-circle arc need not be a shortest path between its endpoints.

## Connections and further reading

The connection's curvature measures the obstruction to path-independent parallel transport. Christoffel symbols are coordinate-dependent coefficients, whereas curvature is tensorial. Read [Nicolaescu, §4.1.2](https://academicweb.nd.edu/~lnicolae/Lectures.pdf), especially Proposition 4.1.9, for the inspected existence and uniqueness argument.

