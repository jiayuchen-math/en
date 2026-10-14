---
{
  "id": "ergodic-transformation",
  "title": "Ergodic Transformation",
  "chinese": "遍历变换",
  "aliases": [],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Graduate",
  "summary": "An ergodic probability-preserving transformation has no invariant measurable event of intermediate probability.",
  "prerequisites": [
    "invariant-measure",
    "measure-preserving-transformation"
  ],
  "related": [
    "birkhoff-ergodic-theorem",
    "weak-mixing",
    "strong-mixing"
  ],
  "references": [
    {
      "id": "sarig-reference",
      "label": "Omri Sarig — Lecture Notes on Ergodic Theory",
      "url": "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf",
      "locator": "§1.4 Ergodicity and mixing, Definition 1.4 and Proposition 1.1; §2.3 Birkhoff's pointwise ergodic theorem",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    },
    {
      "id": "bruin-reference",
      "label": "Henk Bruin — Notes on Ergodic Theory",
      "url": "https://www.mat.univie.ac.at/~bruin/ET3.pdf",
      "locator": "Section 12, Mixing and weak mixing, irrational-rotation example",
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

Ergodicity means a measure-preserving system cannot be divided into two invariant measurable pieces of positive probability. It is the statistical irreducibility of a specified invariant law. The transformation and the measure must both be named.

Ergodicity does not require every orbit to visit every state, and it does not imply that observations far apart become independent. Its role in time averages is precise, but its relationship with topology and mixing requires additional distinctions.

## Prerequisites

Work on a probability space $(X,\mathcal B,\mu)$ with a measurable transformation $T$ preserving $\mu$. One needs invariant events, equality modulo null sets, and integration. Conditional expectation with respect to invariant information describes time averages when the system is not ergodic.

## Definition and conventions

The system is ergodic when, for every $A\in\mathcal B$,
$$
\mu(T^{-1}A\mathbin{\triangle}A)=0
\quad\Longrightarrow\quad
\mu(A)\in\{0,1\}.
$$
Here $\triangle$ denotes symmetric difference. Using exact invariant sets gives an equivalent formulation in the usual probability-preserving setting, but the modulo-null formulation directly matches measurable functions identified almost everywhere.

An ergodic measure is an invariant probability measure for which this property holds. Unique ergodicity instead means there is only one invariant probability measure; the two phrases ask different questions.

## Intuition

An invariant event would reveal a permanent label carried by trajectories. If that label divides the population into two substantial groups, one orbit cannot represent both groups. Ergodicity excludes such a division in the chosen measure, while allowing exceptional zero-measure trajectories.

The system can still retain oscillatory correlations. Statistical indivisibility is weaker than loss of memory.

## Examples and non-examples

For irrational $\alpha$, the circle rotation $T(x)=x+\alpha\bmod1$ is ergodic for normalized length. If an invariant $L^2$ function has Fourier coefficients $c_k$, invariance gives
$$
c_k e^{2\pi i k\alpha}=c_k.
$$
For $k\ne0$ the factor is not one, so those coefficients vanish. Only a constant function remains, which proves ergodicity.

The identity on $[0,1]$ with length measure is not ergodic: $[0,1/2]$ is invariant with probability one half. However, the identity is ergodic with respect to any single point mass. This shows why ergodicity is not a property of a bare map.

## Important properties

A system is ergodic exactly when every invariant measurable real function is constant almost everywhere. One direction tests level sets of the function; the other applies this criterion to an invariant event's indicator.

Birkhoff's theorem says that for $f\in L^1(\mu)$, the averages $n^{-1}\sum_{j=0}^{n-1}f(T^jx)$ converge almost everywhere to $E[f\mid\mathcal I]$, where $\mathcal I$ is invariant information. In an ergodic system this limit is the constant $\int f\,d\mu$. The conclusion is almost everywhere for each observable, not a promise for every initial state.

Irrational rotations are ergodic but not weakly mixing: they possess nonconstant eigenfunctions with unit-modulus eigenvalues.

## Connections and further reading

Strong mixing implies weak mixing, which implies ergodicity, while the reverse implications fail in general. Topological minimality uses all trajectories and open sets instead of a chosen law. [Sarig, §1.4 and §2.3](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf) supplies the invariant-set and average formulations. [Bruin, Section 12](https://www.mat.univie.ac.at/~bruin/ET3.pdf) analyzes rotations. [朱子阳, §2, Definition 2.1](https://ziyangzhu.github.io/home/DS.pdf) explicitly calls this a 遍历变换.

