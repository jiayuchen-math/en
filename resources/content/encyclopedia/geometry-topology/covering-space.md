---
{"id":"covering-space","title":"Covering Space","chinese":"覆盖空间","aliases":[],"area":"geometry-topology","topic":"algebraic-topology","level":"Undergraduate","summary":"A covering space is a space lying over another in locally separate sheets.","prerequisites":["homeomorphism","fundamental-group"],"related":["universal-covering-space","deck-transformation"],"references":[{"id":"hatcher-at","label":"Allen Hatcher — Algebraic Topology","url":"https://pi.math.cornell.edu/~hatcher/AT/AT.pdf","locator":"§1.3, Covering Spaces, Lifting Properties, Classification of Covering Spaces, Deck Transformations and Group Actions","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A covering space is a space lying over another in locally separate sheets. Each sheet reproduces an entire neighborhood of the base, so a path can be followed upstairs once its starting lift is chosen. Coverings connect the local topology of a map with the global fundamental group of its target.

## Prerequisites

Understand homeomorphisms, open neighborhoods, and based loops. The classification theorem also needs local path connectedness and a condition that sufficiently small loops become trivial in the whole space. These hypotheses belong to classification and existence statements, not to the bare definition of a covering.

## Definition and conventions

A covering map here is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighborhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets, each mapped homeomorphically onto $U$. Such a neighborhood is evenly covered. The covering space includes both $E$ and $p$.

A universal covering is a covering with path connected, simply connected total space. For a nonempty path connected, locally path connected, semilocally simply connected base, it exists and is unique up to covering isomorphism. No assertion of existence for arbitrary spaces is intended.

## Intuition

Local sheets are indistinguishable copies of the base neighborhood. Following a loop may nevertheless carry a chosen point to a different sheet. This global permutation is monodromy. The word “covering” here describes a map with evenly covered neighborhoods, not just any collection of subsets whose union is the base.

## Examples and non-examples

The map $\mathbb R\to S^1$, $t\mapsto e^{2\pi it}$, is a universal covering. The loop $s\mapsto e^{2\pi iks}$ lifts from $0$ to the path $s\mapsto ks$, ending at $k$. For $n\geq1$, the map $z\mapsto z^n$ on $S^1$ is an $n$-sheeted covering.

The map $z\mapsto z^2$ from the complex plane to itself is not a covering at zero. Every neighborhood of zero contains nonzero points with two preimages, while zero has only one; an evenly covered neighborhood would force a constant number of sheets there.

## Important properties

Paths lift uniquely after their starting point is fixed. Subdivide the compact interval into pieces mapped into evenly covered neighborhoods, then use the local inverses successively. The same mechanism gives homotopy lifting.

For path connected coverings over a locally path connected base, $p_*$ injects the fundamental group of $E$ into that of $B$. Under the additional semilocal simple connectivity condition, conjugacy classes of subgroups classify connected coverings. Based coverings correspond to actual subgroups, retaining more information than the unbased formulation.

## Connections and further reading

Deck transformations are homeomorphisms of the total space preserving the projection. Their behavior reflects normality of the associated subgroup. Consult [Hatcher, §1.3](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf) for the inspected lifting and classification discussions.

