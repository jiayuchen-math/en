---
{"id":"topological-compactness","title":"Topological Compactness","chinese":"紧致性","aliases":["compactness"],"area":"geometry-topology","topic":"point-set-topology","level":"Undergraduate","summary":"Compactness requires every open cover to admit a finite subcover.","prerequisites":["topological-space"],"related":["hausdorff-space","product-topology","sequential-compactness"],"references":[{"id":"petrunin-topology","label":"Anton Petrunin — A minimalist intro to topology","url":"https://anton-petrunin.github.io/topology/book.pdf","locator":"Chapter 7, A–E: Definition, Finite intersection property, Real interval, Images, Closed subsets; Chapter 9, C–D: Hausdorff meets compactness, Compact-to-Hausdorff maps","checked":"2026-10-14","note":"Open-cover definition and the roles of closedness and Hausdorff separation."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Compactness lets an argument involving arbitrarily many local neighborhoods be reduced to finitely many. It is a property of a topology, not of a particular picture or numerical bound. In Euclidean space it agrees with being closed and bounded, but that characterization must not be exported to arbitrary metric or topological spaces.

## Prerequisites

Understand open sets, subspaces, and continuous maps. An open cover of $X$ is a family of open subsets whose union is $X$. A subcover uses members of that same family; one cannot replace the given sets by a convenient new cover.

## Definition and conventions

A space $X$ is compact if every open cover has a finite subcover. A subset is compact when equipped with its subspace topology. Here compactness does not include Hausdorff separation; authors who reserve “compact” for Hausdorff spaces may call this condition quasi-compact. The empty space is compact.

Sequential compactness means that every sequence admits a subsequence converging to a point of the space. It agrees with compactness for metric spaces, but the two definitions are not interchangeable in general topology. Every claim involving their equivalence needs its hypotheses stated.

## Intuition

Suppose each point has a neighborhood on which some estimate works. Compactness selects finitely many of these neighborhoods. Taking a maximum of their constants or a minimum of their positive tolerances can then produce a global estimate. The actual mechanism is finite selection, rather than a vague assertion that the space is small.

## Examples and non-examples

The interval $[0,1]$ is compact in the usual topology. One proof considers points $t$ for which $[0,t]$ has a finite subcover. A neighborhood of their supremum extends the finite covering farther unless the supremum is $1$; a final neighborhood covers the endpoint.

The interval $(0,1)$ is bounded but not compact. The relative open sets $U_n=(1/n,1)$, for integers $n\geq2$, cover it. Any finite subfamily is contained in the member with largest index $N$ and misses, for example, $1/(2N)$. This is a concrete failure of finite selection. An infinite discrete space also fails compactness: its singleton cover has no finite subcover.

## Important properties

Continuous images of compact spaces are compact. Pull an open cover of the image back to the domain, select finitely many inverse images, and push the resulting coverage forward. A closed subset of a compact space is compact: append its open complement to a cover before selecting finitely many sets.

A compact subset of a Hausdorff space is closed. To separate an exterior point from the subset, use pairwise disjoint neighborhoods and compactness to retain finitely many of them. Consequently a continuous bijection from a compact space to a Hausdorff space is a homeomorphism. Without the Hausdorff hypothesis, this conclusion can fail.

## Connections and further reading

Compactness controls extrema, properness, and many local-to-global arguments on manifolds. Product compactness introduces further set-theoretic considerations for arbitrary products. Consult [Petrunin, Chapters 7 and 9](https://anton-petrunin.github.io/topology/book.pdf) for the inspected cover arguments and separation hypotheses. Distinguish compact manifolds with boundary from closed manifolds, which here have no boundary.
