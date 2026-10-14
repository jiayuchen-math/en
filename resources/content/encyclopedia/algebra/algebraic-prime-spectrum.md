---
{"id":"algebraic-prime-spectrum","title":"Prime Spectrum of a Commutative Ring","chinese":"交换环的素谱空间","aliases":[],"area":"algebra","topic":"algebraic-geometry","level":"Graduate","summary":"The prime spectrum turns a commutative ring into a topological space whose points are prime ideals.","prerequisites":["prime-ideal","localization-commutative-ring"],"related":["maximal-ideal","local-ring","noetherian-ring"],"references":[{"id":"milne-ca","label":"J. S. Milne — A Primer of Commutative Algebra","url":"https://www.jmilne.org/math/xnotes/CA.pdf","checked":"2026-10-14","locator":"Section 14, The spectrum of a ring, Zariski topology and distinguished open sets","note":"Scoped definition and stated comparisons; original explanatory examples."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The prime spectrum provides a bridge from commutative algebra to algebraic geometry. It treats prime ideals as points and ring elements as functions on a space. This article concerns the underlying topological construction and its local rings; a full affine scheme additionally includes a structure sheaf.

## Prerequisites

Use commutative unital rings, prime ideals, localization, and elementary topology. A prime ideal is proper and contains one factor whenever it contains a product. Equivalently, quotienting by it gives an integral domain. Maximal ideals are prime, but the converse need not hold.

## Definition and conventions

For a commutative ring $R$,
$$
\operatorname{Spec}R=\{\mathfrak p\subset R:\mathfrak p\text{ is prime}\}.
$$
Give it the Zariski topology whose closed sets are
$$
V(I)=\{\mathfrak p:I\subseteq\mathfrak p\},
$$
where $I$ ranges over ideals of $R$. The distinguished open set $D(f)$ consists of primes not containing $f$. The local ring at $\mathfrak p$ is $R_{\mathfrak p}$.

The ID here is qualified as algebraic-prime-spectrum: it does not denote the spectrum of a linear operator or a topological spectrum.

## Intuition

The condition $f\in\mathfrak p$ says that the function represented by $f$ vanishes at that prime point. Localization allows division by functions not vanishing there. Prime ideals include generic points that describe an entire irreducible region, not just ordinary closed points.

## Examples and non-examples

In $\operatorname{Spec}\mathbb Z$, the points are $(0)$ and $(p)$ for positive primes $p$. The point $(0)$ is dense, since every prime contains the zero ideal. The point $(p)$ is closed, since it is maximal. The open set $D(6)$ omits $(2)$ and $(3)$ but contains $(0)$ and all other prime points.

For an algebraically closed field $k$, the maximal ideals of $k[x]$ are $(x-a)$, with $a\in k$, and $(0)$ is a generic point. Restricting to maximal ideals would remove this generic point and lose part of the spectral topology.

The ideal $(6)\subset\mathbb Z$ is not a point of the spectrum: $2\cdot3$ belongs to it although neither factor does. Also, the spectrum is usually not Hausdorff; a dense nonclosed singleton already demonstrates the failure in $\operatorname{Spec}\mathbb Z$.

## Important properties

The formulas
$$
V(I)\cap V(J)=V(I+J),\qquad V(I)\cup V(J)=V(IJ)
$$
verify the finite closed-set axioms; arbitrary intersections are handled by sums of ideals. The union formula uses primality, which is why arbitrary ideals cannot serve as points in this construction.

A ring homomorphism $R\to S$ induces a continuous map $\operatorname{Spec}S\to\operatorname{Spec}R$ by contraction. Distinguished opens identify with spectra of localizations. Nilpotent elements lie in every prime, so the underlying space cannot alone detect nilpotent structure.

## Connections and further reading

The structure sheaf restores the local algebra that topology loses, including nilpotents. This is the assignment's single algebraic-geometry bridge. Read [Milne, Section 14](https://www.jmilne.org/math/xnotes/CA.pdf), The spectrum of a ring, for the topology and localization correspondence.

