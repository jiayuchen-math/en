---
{"id":"topological-space","title":"Topological Space","chinese":"拓扑空间","aliases":[],"area":"geometry-topology","topic":"point-set-topology","level":"Undergraduate","summary":"A topology specifies open subsets and thereby continuity without choosing distances.","prerequisites":[],"related":["topological-basis","subspace-topology","hausdorff-space"],"references":[{"id":"petrunin-topology","label":"Anton Petrunin — A minimalist intro to topology","url":"https://anton-petrunin.github.io/topology/book.pdf","locator":"Chapter 2, A–D: Definitions, Examples, Comparison of topologies, Continuous maps; printed pp. 17–19","checked":"2026-10-14","note":"Topology axioms, discrete and cofinite examples, and inverse-image continuity."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A topological space records which subsets are open. This is enough to discuss continuous maps, convergence, and connectedness, even when no numerical distance is available. The structure belongs to a set together with a chosen topology; the underlying set alone does not determine it. Different topologies on the same points can encode very different notions of proximity.

## Prerequisites

Use unions, intersections, complements, and inverse images of functions. Infinite unions and finite intersections play different roles, so their quantifiers matter. A metric space is a useful motivating example but is not a prerequisite for the definition.

## Definition and conventions

A topology on a set $X$ is a collection $\tau$ of subsets satisfying $\varnothing,X\in\tau$, closure under arbitrary unions, and closure under finite intersections. The pair $(X,\tau)$ is a topological space, and members of $\tau$ are open. Closed subsets are complements of open subsets. Empty unions and empty finite intersections give the two required extreme sets.

No Hausdorff, countability, or nonemptiness condition is included here. These are additional hypotheses. A function $f:X\to Y$ between topological spaces is continuous when $f^{-1}(V)$ is open for every open $V\subseteq Y$. This definition concerns inverse images, not images of open sets.

## Intuition

An open set describes a region in which membership remains valid under sufficiently small local changes. The topology axioms allow such regions to be assembled and finitely combined. This interpretation does not imply that distinct points can always be separated: that requires an additional separation axiom. Topology deliberately retains less information than a metric.

## Examples and non-examples

On $X=\{a,b\}$, the collection $\{\varnothing,\{a\},X\}$ is a topology. Its only nontrivial open set is $\{a\}$. The indicator $f:X\to\{0,1\}$, with discrete target and $f(a)=1$, $f(b)=0$, is not continuous because $f^{-1}(\{0\})=\{b\}$ is not open.

On $\{a,b,c\}$, the collection $\{\varnothing,\{a\},\{b\},X\}$ fails the axioms: the union $\{a,b\}$ is missing. In contrast, the discrete topology consists of every subset. The indiscrete topology consists only of the empty set and the whole set. These examples show why a drawing of the underlying set cannot settle topological questions.

## Important properties

Composites of continuous maps are continuous: the inverse image under $g\circ f$ is obtained by first taking the inverse image under $g$, then under $f$. The same calculation proves that the inverse-image collection $\{f^{-1}(V):V\text{ open in }Y\}$ is a topology on $X$.

A finer topology has more open sets. Refining the source topology makes continuity easier to satisfy; refining the target makes it harder. For example, every map from a discrete source is continuous, while every map to an indiscrete target is continuous. Neither observation guarantees continuity in the reverse direction.

## Connections and further reading

Bases give economical descriptions of large topologies. Subspace, product, and quotient topologies transport the structure through common constructions. Read [Petrunin, Chapter 2](https://anton-petrunin.github.io/topology/book.pdf) for the axioms and continuity, then Chapter 6 for constructions. Later manifold articles explicitly add Hausdorff and second countability assumptions.
