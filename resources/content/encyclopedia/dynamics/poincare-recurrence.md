---
{
  "id": "poincare-recurrence",
  "title": "Poincaré Recurrence Theorem",
  "chinese": "庞加莱回复定理",
  "aliases": ["Poincaré recurrence"],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Graduate",
  "summary": "In a probability-preserving system, almost every point of each measurable set returns to that set infinitely often.",
  "prerequisites": ["probability-space", "measure-preserving-transformation", "almost-everywhere", "dynamical-orbit"],
  "related": ["invariant-measure", "ergodic-transformation", "strong-mixing", "birkhoff-ergodic-theorem", "poincare-return-map", "nonwandering-point"],
  "references": [
    {
      "id": "sarig-recurrence",
      "label": "Omri Sarig — Lecture Notes on Ergodic Theory",
      "url": "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf",
      "locator": "§1.2, Definition 1.2 and Theorem 1.1, printed p.4 / PDF p.12; infinite-measure translation counterexample immediately after Theorem 1.1",
      "checked": "2026-10-15",
      "note": "Supports probability preservation, infinitely many returns and the necessity of a finite-measure hypothesis for the general guarantee."
    },
    {
      "id": "bruin-recurrence",
      "label": "Henk Bruin — Notes on Ergodic Theory",
      "url": "https://www.mat.univie.ac.at/~bruin/ET3.pdf",
      "locator": "Section 7 Poincaré Recurrence: Theorem 12 and proof; first-return-time definition and opening proof of Lemma 4 (Kac Lemma)",
      "checked": "2026-10-15",
      "note": "Supports the finite-volume recurrence mechanism, return-time notation and reduction of finitely returning points to a nonreturning set; no Kac formula is asserted here."
    }
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

Poincaré recurrence says that finite invariant measure prevents almost all starting points from leaving a measurable region permanently. It applies even when the map is not invertible and the trajectories are not chaotic. The theorem supplies infinitely many returns, rather than a numerical return schedule or exact repetition of the starting state.

## Prerequisites

Work on a probability space $(X,\mathcal B,\mu)$ with a measurable self-map $T$. Measure preservation means $\mu(T^{-1}A)=\mu(A)$ for every $A\in\mathcal B$. Here $T^{-1}A$ is a preimage, so this notation requires no inverse function. Understand null sets, countable additivity and iteration.

## Definition and conventions

The Poincaré recurrence theorem states that, for each measurable $A$,

$$
\mu\bigl(\{x\in A:T^n(x)\in A
\text{ for only finitely many }n\ge1\}\bigr)=0.
$$

Equivalently, almost every $x\in A$ admits positive integers $n_k\to\infty$ with $T^{n_k}(x)\in A$. The exceptional null set may depend on $A$. The assertion is automatic when $\mu(A)=0$, and useful when $A$ has positive measure.

The same conclusion holds when $0<\mu(X)<\infty$, by normalizing $\mu$. Ergodicity and mixing are additional hypotheses used in other theorems; neither is needed here.

## Intuition

Imagine a set of points that never comes back. Its successive preimages are disjoint: belonging to two would imply that a point in the original set eventually returns there. Invariance assigns equal measure to all these disjoint preimages. Finite total measure then forces the original set to have measure zero. This argument works without assuming the forward images are disjoint or have unchanged measure.

## Examples and non-examples

Let $X=\mathbb Z/7\mathbb Z$ carry uniform probability and set $T(x)=x+2$. For $A=\{0,1\}$, the orbit from $0$ reads

$$
0,2,4,6,1,3,5,0,\ldots.
$$

Its first positive return to $A$ is at time four, and later visits repeat indefinitely. In this finite probability space each singleton has positive measure, so there can be no nonempty null exceptional set.

The identity map on $[0,1]$ with Lebesgue probability returns every point to its original set at every time. Yet it is neither ergodic nor strongly mixing: the invariant half-interval has measure $1/2$. Recurrence is therefore much weaker than either property.

By contrast, $T(n)=n+1$ on $\mathbb Z$ preserves counting measure, but $0$ never returns to $\{0\}$. The space has infinite total measure. Finite volume cannot simply be dropped from the general theorem.

Almost every point is also different from every point. The map $T(x)=x/2$ on $[0,1]$ preserves the probability measure concentrated at zero. Every positive point tends toward zero and has a neighborhood it eventually leaves forever. All these exceptions together have measure zero for this invariant measure.

## Important properties

Proof sketch for the full infinite-return assertion: fix $A$ and put

$$
B=A\setminus\bigcup_{n\ge1}T^{-n}A.
$$

This is the measurable set of points in $A$ with no future return. If a point lay in both $T^{-i}B$ and $T^{-j}B$, with $i<j$, then $T^i(x)\in B$ would return to $B\subseteq A$ after $j-i$ steps, a contradiction. Thus these preimages are pairwise disjoint. Each has measure $\mu(B)$, and finite total measure forces $\mu(B)=0$.

A point of $A$ with only finitely many future visits has a last visit, counting time zero. At that time it enters $B$. All such points therefore lie in $\bigcup_{m\ge0}T^{-m}B$, a null set by invariance and countable subadditivity. This proves the theorem for noninvertible maps as well.

For a metric space with a countable base of measurable open sets, apply the theorem to each basic open set and combine the countably many exceptional sets. Outside their union, a point returns to every neighborhood of itself infinitely often. This topological conclusion uses the countable-base assumption to control the exceptional sets simultaneously.

## Connections and further reading

The first positive return time $r_A(x)=\min\{n\ge1:T^n(x)\in A\}$ is finite for almost every $x\in A$. It defines the induced return map on that full-measure part of $A$. Recurrence alone gives no uniform upper bound on $r_A$ and no limiting frequency of visits. Ergodic theorems address frequencies; strong mixing addresses correlations between observations separated in time.

See [Sarig, §1.2, Theorem 1.1](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf) and [Bruin, Section 7](https://www.mat.univie.ac.at/~bruin/ET3.pdf) for recurrence and the transition to return maps.
