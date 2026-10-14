---
{"id":"smooth-manifold","title":"Smooth Manifold","chinese":"微分流形","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Undergraduate","summary":"A smooth manifold is a space on which multivariable calculus works through compatible local coordinate systems.","prerequisites":["hausdorff-space","second-countable-space","homeomorphism"],"related":["tangent-space","manifold-with-boundary"],"references":[{"id":"nicolaescu-manifolds","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§1.2.1, Definition 1.2.1 and smooth maps; §1.2.2, Partitions of unity; §1.2.3, Examples","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A smooth manifold is a space on which multivariable calculus works through compatible local coordinate systems. It need not come with an embedding into Euclidean space, a length function, or a preferred coordinate system. Its smooth structure controls which functions and maps are differentiable; the topology supplies the neighborhoods where coordinates are valid.

## Prerequisites

Use open subsets of Euclidean space, homeomorphisms, derivatives, and the chain rule. Hausdorff separation and second countability are genuine global assumptions. They allow local coordinate calculations to participate in the usual global theory, including partitions of unity.

## Definition and conventions

A smooth $n$-manifold here is a Hausdorff, second countable space locally homeomorphic to open subsets of $\mathbb R^n$, equipped with a maximal atlas whose transition maps are $C^\infty$. A chart $\varphi:U\to\varphi(U)$ is a homeomorphism onto an open Euclidean subset. On overlaps, $\psi\circ\varphi^{-1}$ must be smooth.

Unless explicitly stated, manifolds have no boundary. A manifold with boundary instead uses relatively open subsets of the closed half-space and smoothly extendible coordinate transitions. A closed manifold means compact and without boundary, not merely a closed subset of another space.

## Intuition

Charts give several local descriptions of the same point. Smooth transition maps ensure that differentiability survives a change of description. An atlas acts like a collection of measuring conventions that agree wherever they overlap. Smoothness is a compatibility condition; it does not measure the physical roughness of a drawing.

## Examples and non-examples

The sphere $S^n$ is a smooth manifold. On a neighborhood where one coordinate is nonzero, solve its defining equation $\sum x_i^2=1$ for that coordinate. The resulting charts have smooth transitions. Equivalently, the defining function has nonzero differential along the sphere, so the regular-level-set theorem applies.

The union of the two coordinate axes in $\mathbb R^2$ is not a one-dimensional manifold at the origin. Removing the origin from a small connected neighborhood leaves four arms, whereas removing a point from an interval leaves two. The interval $[0,1]$ is a manifold with boundary, but it is not a manifold without boundary.

## Important properties

A map between smooth manifolds is smooth when its coordinate expressions are smooth; the chain rule proves this condition is independent of the charts chosen. A diffeomorphism has a smooth inverse as well as being bijective and smooth.

Second countability and the local Euclidean structure give paracompactness in the Hausdorff setting. Smooth partitions of unity then combine local data, producing global metrics and other structures. The line with two origins illustrates why local Euclidean appearance alone does not replace Hausdorff separation.

## Connections and further reading

Tangent spaces organize derivatives intrinsically, while differential forms organize integration. A Riemannian or symplectic structure is additional data on a smooth manifold. See [Nicolaescu, §1.2](https://academicweb.nd.edu/~lnicolae/Lectures.pdf), especially Definition 1.2.1 and the inspected examples.

