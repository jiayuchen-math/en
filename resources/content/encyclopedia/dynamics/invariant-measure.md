---
{
  "id": "invariant-measure",
  "title": "Invariant Measure",
  "chinese": "不变测度",
  "aliases": [],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Undergraduate",
  "summary": "An invariant measure assigns unchanged weights to events when pulled back by a measurable transformation.",
  "prerequisites": [
    "probability-space"
  ],
  "related": [
    "measure-preserving-transformation",
    "ergodic-transformation",
    "unique-ergodicity"
  ],
  "references": [
    {
      "id": "sarig-reference",
      "label": "Omri Sarig — Lecture Notes on Ergodic Theory",
      "url": "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf",
      "locator": "§1.2 The abstract setup of ergodic theory, Definition 1.2",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    },
    {
      "id": "bruin-reference",
      "label": "Henk Bruin — Notes on Ergodic Theory",
      "url": "https://www.mat.univie.ac.at/~bruin/ET3.pdf",
      "locator": "Section 2, What are the invariant measures of the cat map?, Theorem 1 (Krylov–Bogol'ubov)",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

An invariant measure describes a distribution that stays unchanged under the evolution of a dynamical system. Individual points can move substantially while the statistical weights of events remain fixed. Invariance therefore describes a law, not the immobility of every state.

A single transformation may preserve many measures. Choosing an invariant measure determines which initial states are considered typical and which events matter statistically. Ergodicity is an additional property of that chosen measure.

## Prerequisites

One needs a measurable transformation, inverse images of sets, and countably additive measures. Probability measures are the main examples here. The existence argument for continuous dynamics also uses compact metric spaces and convergence of integrals of continuous functions.

## Definition and conventions

For a measurable map $T:X\to X$, a measure $\mu$ on its event sigma-algebra is invariant when
$$
\mu(T^{-1}A)=\mu(A)
$$
for every measurable $A$. Equivalently, the pushforward $T_*\mu$ equals $\mu$. This definition uses inverse images and makes sense when $T$ is not invertible.

A measure-preserving system specifies the map together with the space and this measure. General invariant measures need not have total mass one. Whenever ergodicity or averages below refer to probability, the normalization $\mu(X)=1$ is assumed.

## Intuition

Choose an initial state at random according to $\mu$ and apply $T$. Invariance means the resulting state has the same distribution as the initial state. It does not say the two states are independent, or that repeated evolution converges to anything.

The preimage $T^{-1}A$ consists of all states that enter $A$ after one step. Equal weights for $A$ and its preimage express the statistical balance.

## Examples and non-examples

On the circle $\mathbb R/\mathbb Z$, every rotation preserves normalized length. For the doubling map $T(x)=2x\bmod1$, the preimage of an interval has two pieces, each of half its length. Their total length equals the original interval's length; extending from intervals proves invariance.

If $x_0$ is fixed, the point mass $\delta_{x_0}$ is invariant. For a cycle of least period $r$, the measure assigning mass $1/r$ to each cycle point is invariant because the map permutes its atoms.

An individual point mass at a nonfixed point is not invariant: its pushforward is the point mass at the next point. Normalized length on $[0,1]$ is not invariant under $T(x)=x/2$, since the preimage of $[0,1/2]$ has mass one while the interval itself has mass one half.

## Important properties

Convex combinations of invariant probability measures remain invariant by linearity. Invariance also implies $\int f\circ T\,d\mu=\int f\,d\mu$ for integrable $f$, first for indicators, then by approximation.

For continuous $T$ on a nonempty compact metric space, an invariant Borel probability measure exists. Average the first $n$ point masses along an orbit and take a weakly convergent subsequence. The difference of integrals before and after applying $T$ telescopes to $(f(T^nx)-f(x))/n$, which tends to zero. Compactness supplies the subsequence; continuity passes invariance to the limit.

## Connections and further reading

Unique ergodicity asks for exactly one invariant probability measure. Ergodicity asks whether a particular invariant measure has nontrivial invariant events. [Sarig, §1.2](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf) gives the measurable definition. [Bruin, Section 2](https://www.mat.univie.ac.at/~bruin/ET3.pdf) proves compact-space existence. [朱子阳, Definition 1.1](https://ziyangzhu.github.io/home/DS.pdf) documents 不变测度 and 保测变换.

