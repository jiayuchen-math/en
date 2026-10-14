---
{"id":"fundamental-group","title":"Fundamental Group","chinese":"基本群","aliases":[],"area":"geometry-topology","topic":"algebraic-topology","level":"Undergraduate","summary":"The fundamental group records loops that cannot be contracted while their basepoint stays fixed.","prerequisites":["homotopy-of-maps","path-connected-space"],"related":["covering-space","singular-homology"],"references":[{"id":"hatcher-at","label":"Allen Hatcher — Algebraic Topology","url":"https://pi.math.cornell.edu/~hatcher/AT/AT.pdf","locator":"§1.1, Paths and Homotopy, The Fundamental Group of the Circle, Induced Homomorphisms; §1.2, van Kampen's theorem","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The fundamental group records loops that cannot be contracted while their basepoint stays fixed. It turns questions about winding and obstruction into group calculations. Its multiplication depends on traversing loops in sequence, so unlike ordinary homology it can detect noncommutative behavior. A basepoint is part of the definition even when notation suppresses it.

## Prerequisites

Use paths, homotopies relative to endpoints, and elementary group operations. Path connectedness lets basepoints be compared, but it does not make all resulting comparisons canonical. Covering spaces supply an especially concrete method of computing winding numbers.

## Definition and conventions

For a space $X$ and $x_0\in X$, a loop is a continuous $\alpha:I\to X$ with $\alpha(0)=\alpha(1)=x_0$. The group $\pi_1(X,x_0)$ consists of loops modulo homotopy relative to both endpoints. Here the product $[\alpha][\beta]$ traverses $\alpha$ first and $\beta$ second, each in half the available time.

The constant loop is the identity and time reversal gives inverses. No Hausdorff or countability axiom is needed to define the group. “Simply connected” here means nonempty, path connected, and having trivial fundamental group.

## Intuition

A loop is a journey that returns to its starting point. Homotopy permits that journey to slide around continuously, but keeps the start fixed. A hole can prevent contraction. Multiple holes can make the order of journeys matter, so knowing only the total number of times each hole is encircled may lose information.

## Examples and non-examples

For $S^1$ based at $1$, lift a loop along $p(t)=e^{2\pi it}$ with initial lift $0$. Its final lift is an integer, the winding number. Homotopic loops have the same endpoint, and every integer occurs. Concatenation adds endpoints, giving $\pi_1(S^1,1)\cong\mathbb Z$.

A disk has trivial fundamental group: straight-line contraction to its center stays inside the disk. The punctured plane retracts onto the circle and has fundamental group $\mathbb Z$, although the full plane is contractible. Removing a single point can therefore change the answer completely.

## Important properties

Reparametrization makes concatenation associative on homotopy classes even though the usual parametrized loops need not satisfy literal associativity. A based map induces a homomorphism by composition with loops.

A path between two basepoints induces an isomorphism of fundamental groups. Different choices can differ by inner automorphisms. For a path connected space, the first integral homology group is the abelianization of the fundamental group; this comparison explains why homology loses commutator information.

## Connections and further reading

Van Kampen's theorem computes the group from a suitable open cover with path connected overlap. Covering theory interprets subgroups geometrically. See [Hatcher, §§1.1–1.3](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), especially the inspected circle calculation and basepoint conventions.

