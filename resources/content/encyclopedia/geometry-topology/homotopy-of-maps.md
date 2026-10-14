---
{"id":"homotopy-of-maps","title":"Homotopy of Maps","chinese":"同伦","aliases":[],"area":"geometry-topology","topic":"algebraic-topology","level":"Undergraduate","summary":"Homotopy is a continuous deformation from one map to another, with the domain and codomain fixed.","prerequisites":["topological-space","product-topology"],"related":["homotopy-equivalence","contractible-space"],"references":[{"id":"hatcher-at","label":"Allen Hatcher — Algebraic Topology","url":"https://pi.math.cornell.edu/~hatcher/AT/AT.pdf","locator":"Chapter 0, Homotopy and Homotopy Type, printed pp. 1–4; §1.1, Paths and Homotopy","checked":"2026-10-14","note":"Inspected definitions and conventions relevant to this entry."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Homotopy is a continuous deformation from one map to another, with the domain and codomain fixed. It replaces literal equality by an equivalence sensitive to the topology of both spaces. A family of drawings may suggest a homotopy, but the mathematical requirement is joint continuity in the point being mapped and the deformation parameter.

## Prerequisites

Understand continuous maps, products, and the interval $I=[0,1]$. Basic examples come from interpolation in vector spaces. For loops and fundamental groups, distinguish the map's domain from a chosen basepoint that must remain fixed throughout a deformation.

## Definition and conventions

Continuous maps $f,g:X\to Y$ are homotopic if there is a continuous $H:X\times I\to Y$ with $H(x,0)=f(x)$ and $H(x,1)=g(x)$. We write $f\simeq g$. A homotopy relative to $A\subseteq X$ satisfies $H(a,t)=f(a)=g(a)$ for all $a\in A$ and $t\in I$.

The unqualified definition here is unbased. A based homotopy fixes the basepoint. A map is null homotopic when it is homotopic to a constant map, with any additional relative or based requirement specified separately.

## Intuition

Think of $H$ as assigning a moving image to every point of the domain. Every point moves continuously, and nearby domain points must move compatibly. Separate continuity of all time slices is not sufficient. Requiring a homotopy relative to a subset adds fixed anchors; changing those anchors changes the problem.

## Examples and non-examples

If $Y$ is a convex subset of $\mathbb R^m$, then
$$
H(x,t)=(1-t)f(x)+tg(x)
$$
is a homotopy between any continuous $f,g:X\to Y$. Convexity ensures that each interpolation remains in $Y$.

On the circle, the maps $z\mapsto z$ and $z\mapsto z^2$ are not homotopic because their degrees are $1$ and $2$. Straight-line interpolation in the ambient complex plane is not a counterargument: at some points it passes through zero and so leaves the circle. By contrast, rotating the circle through an angle gives a homotopy of its identity to a rotation.

## Important properties

Homotopy is an equivalence relation. A constant deformation gives reflexivity, reversing time gives symmetry, and concatenating deformations gives transitivity. Continuity of concatenation follows from the pasting lemma at the shared time slice.

Composing a homotopy on either side with continuous maps preserves it. Thus homotopy classes admit composition. Ordinary singular homology sends homotopic maps to the same homomorphism; a prism decomposition produces the chain homotopy establishing this. Based fundamental groups need based homotopies or an explicit basepoint-change comparison.

## Connections and further reading

Homotopy equivalence compares spaces through maps whose composites are homotopic to identities. It is weaker than homeomorphism. Read [Hatcher, Chapter 0 and §1.1](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf) for the inspected definitions and the fixed-endpoint convention used for paths.

