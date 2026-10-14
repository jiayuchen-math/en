---
{"id":"quotient-topology","title":"Quotient Topology","chinese":"商拓扑","aliases":[],"area":"geometry-topology","topic":"point-set-topology","level":"Undergraduate","summary":"A quotient topology describes a space formed by identifying points.","prerequisites":["topological-space","subspace-topology"],"related":["quotient-map","homeomorphism"],"references":[{"id":"petrunin-topology","label":"Anton Petrunin — A minimalist intro to topology","url":"https://anton-petrunin.github.io/topology/book.pdf","locator":"Chapter 6E, Claim 6.17 (continuous surjective open/closed maps); Chapter 6F, Quotient topology; Chapter 9D, Compact-to-Hausdorff maps","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A quotient topology describes a space formed by identifying points. It appears when an interval is bent into a circle, when opposite edges of a square produce a torus, and when symmetry orbits replace individual points. The equivalence classes specify the underlying set, but the topology must still be supplied. The quotient construction supplies it through inverse images.

## Prerequisites

Understand equivalence relations, surjective maps, and inverse-image continuity. A subset of the original space is saturated if it is a union of entire equivalence classes. Saturation is useful for recognizing which open subsets can descend to the quotient.

## Definition and conventions

Let $q:X\to Y$ be a surjection from a topological space onto a set. The quotient topology on $Y$ is defined by
$$
U\text{ open in }Y\quad\Longleftrightarrow\quad q^{-1}(U)\text{ open in }X.
$$
It is the finest topology making $q$ continuous. For an equivalence relation, take $Y=X/{\sim}$ and $q(x)=[x]$.

A quotient map is a surjection between already topologized spaces satisfying this equivalence. Mere continuity gives only one implication. Quotients are not assumed Hausdorff, second countable, or manifolds.

## Intuition

An identified point represents all members of one class. A neighborhood of that point must pull back to a neighborhood of every representative. The quotient topology encodes this simultaneous requirement. It can preserve familiar geometry, but identifying a badly chosen subset can also make distinct classes impossible to separate.

## Examples and non-examples

Identify $0$ and $1$ in $[0,1]$. The function $t\mapsto e^{2\pi it}$ is constant exactly on the identified class and otherwise injective. It induces a continuous bijection from the quotient to $S^1$. Since the quotient is a continuous image of a compact space and the circle is Hausdorff, the induced map is a homeomorphism.

For a contrasting example, identify all rational points of $\mathbb R$ to one class and leave irrational points separate. A saturated open neighborhood of an irrational point contains a rational point and hence every rational point. It cannot be disjoint from any neighborhood of the rational class. The quotient is therefore not Hausdorff.

## Important properties

A map $f:Y\to Z$ is continuous exactly when $f\circ q$ is continuous. One proves this by comparing inverse images of every open subset of $Z$. This universal property often makes an explicit description of all quotient open sets unnecessary.

Surjective continuous open maps and surjective continuous closed maps are quotient maps. Continuity is essential: the identity from the usual real line to the discrete real line is surjective, open, and closed, but not continuous and hence not quotient. In particular, a continuous surjection from a compact space to a Hausdorff space is closed and therefore quotient. Neither openness nor closedness is required of every quotient map.

## Connections and further reading

Quotients build cell complexes, projective spaces, and orbit spaces. Smooth or symplectic reduction needs extra hypotheses beyond this topological construction. Read [Petrunin, Claim 6.17 in Chapter 6E, Chapter 6F, and Chapter 9D](https://anton-petrunin.github.io/topology/book.pdf) for the inspected open/closed-map criterion, quotient definition, and compact-to-Hausdorff result.

