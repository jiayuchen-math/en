---
{"id":"connected-space","title":"Connected Space","chinese":"连通","aliases":[],"area":"geometry-topology","topic":"point-set-topology","level":"Undergraduate","summary":"Connectedness expresses that a space cannot be separated into two disjoint open pieces.","prerequisites":["topological-space"],"related":["path-connected-space","connected-component"],"references":[{"id":"petrunin-topology","label":"Anton Petrunin — A minimalist intro to topology","url":"https://anton-petrunin.github.io/topology/book.pdf","locator":"Chapter 11A–D, Connected spaces; Chapter 12A, Path-connected spaces","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Connectedness expresses that a space cannot be separated into two disjoint open pieces. It concerns the space as a whole, while continuity concerns maps. It is one of the simplest topological properties preserved by continuous images, and it explains why intermediate values occur on intervals. A space may be connected without admitting paths between all its points.

## Prerequisites

Understand subspace topology and complements. To test a subset for connectedness, first specify its inherited topology. The familiar intermediate value theorem supplies a useful bridge from real analysis, but the general definition does not require an order or a metric.

## Definition and conventions

A separation of $X$ is a decomposition $X=U\cup V$ into disjoint, nonempty open subsets. A space is connected if it has no separation. Equivalently, its only subsets that are both open and closed are $\varnothing$ and $X$. We include the empty space as connected; Petrunin uses a different empty-space convention, which has no effect on the nonempty examples here.

Path connectedness requires a continuous map $\gamma:[0,1]\to X$ joining every prescribed pair of points. No separation or countability hypotheses are required for either definition.

## Intuition

A separation is a detectable division: each piece can be recognized by open neighborhoods without crossing into the other. A path provides a stronger way to prevent such a division because the interval itself is connected. Connectedness makes no promise about how to travel between points or how long such a journey might take.

## Examples and non-examples

Every interval of the real line is connected. Indeed, if an interval were separated, points in different pieces and the least-upper-bound property would produce a point at which neither piece can remain open. The set $[0,1]\cup[2,3]$ is disconnected: the two intervals are relatively open and disjoint.

The topologist's sine curve
$$
\{(x,\sin(1/x)):0<x\leq1\}\cup(\{0\}\times[-1,1])
$$
is connected because it is the closure of a connected graph. It is not path connected. A path from the vertical segment into the graph would force the oscillating sine values to approach a single value as the positive $x$ coordinate first leaves zero, which is impossible.

## Important properties

A continuous image of a connected space is connected. If the image had a separation, its inverse images would separate the original space. This short argument underlies the intermediate value theorem.

The closure of a connected subset is connected. Otherwise both sides of a separation of the closure would meet the original dense subset and separate it. A connected component is a maximal connected subset, and components are closed. They need not be open; in $\mathbb Q$ with its usual topology, each component is a singleton.

## Connections and further reading

On locally path connected spaces, connected components agree with path components and are open. Manifolds satisfy this local condition, making the two global notions equivalent there. See [Petrunin, Chapters 11–12](https://anton-petrunin.github.io/topology/book.pdf), while retaining the explicit empty-space convention used in this entry.

