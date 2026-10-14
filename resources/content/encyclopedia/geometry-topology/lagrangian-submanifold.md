---
{"id":"lagrangian-submanifold","title":"Lagrangian Submanifold","chinese":"拉格朗日子流形","aliases":[],"area":"geometry-topology","topic":"symplectic-geometry","level":"Graduate","summary":"A Lagrangian submanifold is a half-dimensional submanifold on which the ambient symplectic form vanishes.","prerequisites":["symplectic-manifold","smooth-embedding"],"related":["symplectomorphism","hamiltonian-floer-homology"],"references":[{"id":"cannas-symplectic","label":"Ana Cannas da Silva — Lectures on Symplectic Geometry","url":"https://people.math.ethz.ch/~acannas/Papers/lsg.pdf","locator":"§3.2, Definition 3.3 and Proposition 3.4, Lagrangian submanifolds of cotangent bundles; §1.2, symplectic linear algebra","checked":"2026-10-14","note":"Inspected definitions; differences of conventions are stated in the article."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A Lagrangian submanifold is a half-dimensional submanifold on which the ambient symplectic form vanishes. Its tangent directions are maximally isotropic. These submanifolds describe possible configuration sections in cotangent geometry and boundary conditions for holomorphic curves. Their global embeddings retain information beyond the linear condition at individual points.

## Prerequisites

Understand symplectic vector spaces, smooth embeddings, and pullback of differential forms. In a vector space with symplectic form $\omega$, the symplectic orthogonal of a subspace $W$ consists of vectors pairing to zero with every vector in $W$. It is not an orthogonal complement defined by an inner product.

## Definition and conventions

Let $(M^{2n},\omega)$ be a smooth symplectic manifold and $i:L\hookrightarrow M$ a smooth embedded $n$-manifold. It is Lagrangian if $i^*\omega=0$, or equivalently $T_pL=(T_pL)^\omega$ at every point. Manifolds are Hausdorff and second countable; no boundary is assumed here.

This entry allows embedded Lagrangians that are not closed subsets of $M$. Cannas da Silva's general submanifold convention in §3.1 uses closed embeddings, so that source is applied locally for the tangent condition rather than importing its closedness restriction. Immersed Lagrangians are a separate variant and may self-intersect.

## Intuition

A Lagrangian contains as many mutually symplectically invisible directions as possible. Adding another independent direction would force a nonzero pairing. The half-dimension requirement is essential: every curve is isotropic in a four-dimensional symplectic manifold, but a curve there is too small to be Lagrangian.

## Examples and non-examples

The zero section of $T^*Q$ is Lagrangian for the canonical form $\omega=-d\lambda$. More generally, a smooth one-form $\alpha$ on $Q$ defines a graph section $s_\alpha(q)=(q,\alpha_q)$. Since $s_\alpha^*\lambda=\alpha$,
$$
s_\alpha^*\omega=-d\alpha.
$$
Thus its graph is Lagrangian precisely when $\alpha$ is closed. For $\alpha=df$, the graph is Lagrangian and exact.

On $Q=\mathbb R^2$, the graph of $x\,dy$ is not Lagrangian because $d(x\,dy)=dx\wedge dy$. A line in standard symplectic $\mathbb R^2$ is Lagrangian; a line in standard symplectic $\mathbb R^4$ is only isotropic.

## Important properties

Linear algebra gives $\dim W+\dim W^\omega=2n$. If $W\subseteq W^\omega$, then $\dim W\leq n$, and equality characterizes a Lagrangian subspace. This proves maximality directly.

Symplectomorphisms send Lagrangians to Lagrangians by the pullback identity. A neighborhood of a Lagrangian has a cotangent model, although the precise neighborhood theorem has its own hypotheses. Global intersection behavior is much subtler than this local normal form and motivates Lagrangian Floer theory.

## Connections and further reading

Hamiltonian perturbations of Lagrangians and pseudoholomorphic strips provide one route to Floer invariants. Disk bubbling and transversality must be addressed before a differential can be claimed. Read [Cannas da Silva, §3.2](https://people.math.ethz.ch/~acannas/Papers/lsg.pdf) for the inspected graph criterion and its sign-independent closedness test.

