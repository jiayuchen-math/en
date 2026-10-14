---
{"id":"tangent-space","title":"Tangent Space","chinese":"切空间","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Undergraduate","summary":"The tangent space at a manifold point captures first-order directions in local smooth coordinates.","prerequisites":["smooth-manifold"],"related":["cotangent-space","tangent-bundle","vector-field"],"references":[{"id":"nicolaescu-manifolds","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§2.1.1, Definitions 2.1.2 and 2.1.4 and Lemma 2.1.5 (curve construction); §2.1.2, The tangent bundle; §3.4.3, Definition 3.4.17 and Example 3.4.18(a) (boundary manifolds via an ambient manifold)","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The tangent space at a manifold point captures first-order directions in local smooth coordinates. It is a vector space attached to the point, rather than a subset intrinsically sitting in one ambient Euclidean space. Tangent spaces let the derivative of a smooth map become a linear map without choosing coordinates permanently.

## Prerequisites

Understand smooth curves, the chain rule, and finite-dimensional vector spaces. For embedded surfaces, the familiar tangent plane is a model for the abstract construction. Derivations provide an equivalent formulation useful for functions and vector fields.

## Definition and conventions

For a smooth manifold $M$ without boundary, or an interior point $p$ of a manifold with boundary, consider smooth curves $\gamma:(-\varepsilon,\varepsilon)\to M$ with $\gamma(0)=p$. Two such curves are equivalent when their coordinate velocities at zero agree in one chart, hence in every chart. Their classes form $T_pM$, with addition and scalar multiplication transferred from coordinate velocities.

At every point, including the boundary, define $T_pM$ through real-linear derivations on smooth real-valued function germs: $v(fg)=f(p)v(g)+g(p)v(f)$. This agrees with the curve construction at interior points. Smoothness at the boundary means local smooth extendibility across a half-space chart. Differentiating these extensions identifies the tangent space with the full $\mathbb R^n$, including outward directions, not just the cone of inward velocities. Extensions agreeing on the half-space have the same differential at its boundary by continuity from the interior. All manifolds here are Hausdorff and second countable.

## Intuition

Curves that look different away from $p$ can have the same first-order behavior there. The tangent space forgets higher-order bending and remembers only that behavior. A vector has no canonical location in a nearby tangent space. Comparing vectors at distinct points requires extra structure such as a connection.

## Examples and non-examples

For $S^2\subseteq\mathbb R^3$, differentiating $\gamma(t)\cdot\gamma(t)=1$ gives $p\cdot\gamma'(0)=0$. Every vector perpendicular to $p$ arises from a curve on the sphere, so
$$
T_pS^2=\{v\in\mathbb R^3:p\cdot v=0\}.
$$
At $p=(0,0,1)$ this is the horizontal plane.

The vector $(0,0,1)$ at that point is a normal vector, not a tangent vector. Also, a tangent vector is not an actual displacement to another point on the sphere: moving along the ambient line $p+tv$ generally leaves the sphere, even though its initial velocity is tangent.

At $0\in[0,\infty)$, every two-sided smooth curve staying in the half-line has a local minimum and derivative zero. Nevertheless $T_0[0,\infty)\cong\mathbb R$: for example, $v(f)=-f'(0)$, using a smooth extension, is a nonzero outward derivation. This explains why boundary tangents need the extended-chart or derivation formulation.

## Important properties

A smooth map $F:M\to N$ induces $dF_p:T_pM\to T_{F(p)}N$ by
$$
(dF_pv)(h)=v(h\circ F).
$$
This definition uses function germs and works at boundary points too; in extended charts it is the usual derivative of a smooth local extension. Where the two-sided curve construction applies, it agrees with composing representative curves with $F$. The chain rule gives
$$
d(G\circ F)_p=dG_{F(p)}\circ dF_p.
$$
For a regular level set $M=F^{-1}(c)$ in Euclidean space, $T_pM=\ker dF_p$. The rank hypothesis is essential: a singular equation may define a set that is not a manifold.

## Connections and further reading

The tangent bundle assembles the spaces $T_pM$ smoothly. Its dual bundle contains differential one-forms. Read [Nicolaescu, §§2.1.1–2.1.2 and §3.4.3](https://academicweb.nd.edu/~lnicolae/Lectures.pdf) for the inspected curve construction, regular-level-set examples, and ambient-manifold treatment of boundary charts.

