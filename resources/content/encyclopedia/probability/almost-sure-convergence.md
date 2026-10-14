---
{
  "id": "almost-sure-convergence",
  "title": "Almost Sure Convergence",
  "chinese": "几乎必然收敛",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "Almost sure convergence means pointwise convergence on one event of probability one and differs from other probabilistic limits.",
  "prerequisites": [
    "random-variable"
  ],
  "related": [
    "convergence-in-probability",
    "convergence-in-distribution",
    "lp-convergence-random-variables"
  ],
  "references": [
    {
      "id": "lawler-reference",
      "label": "Gregory F. Lawler — Notes on Probability",
      "url": "https://www.math.uchicago.edu/~lawler/probnotes.pdf",
      "locator": "Section 4, Sums of independent random variables, opening convergence definitions",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    },
    {
      "id": "durrett-reference",
      "label": "Rick Durrett — Probability: Theory and Examples, fifth edition",
      "url": "https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf",
      "locator": "§3.2 Weak Convergence; §4.6 Uniform Integrability, Convergence in L1",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Almost sure convergence states that a sequence of observations converges along almost every possible outcome. Its exceptional outcomes form one event of probability zero. This is a pathwise statement, stronger than saying that the probability of a large error becomes small at each individual time.

Probability theory uses several notions of convergence because experiments can be compared at different levels: individual paths, error probabilities, average errors, or distributions. Specifying the mode is part of a mathematical assertion.

## Prerequisites

The variables $X_n$ and $X$ must be defined on one probability space for pathwise comparisons. Events, limits of real sequences, and expectations are enough to state the principal modes. Convergence in distribution instead compares laws and does not require a shared outcome space.

## Definition and conventions

We write $X_n\to X$ almost surely when
$$
P\{\omega:X_n(\omega)\to X(\omega)\}=1.
$$
Equivalently, there is one probability-one event on which all the pointwise limits hold. “Almost surely,” “with probability one,” and the abbreviation a.s. describe this same convention.

Convergence in probability means $P(|X_n-X|>\varepsilon)\to0$ for each $\varepsilon>0$. For $p\ge1$, convergence in $L^p$ requires finite $p$th moments and $E|X_n-X|^p\to0$. Distributional convergence on the real line means convergence of CDFs at every continuity point of the limiting CDF.

## Intuition

Almost sure convergence follows one outcome through all times. Convergence in probability looks across outcomes at each time. A small set of bad outcomes can move with time and repeatedly catch almost every path, preventing pathwise convergence despite vanishing error probabilities.

Average-error convergence additionally controls the sizes of rare mistakes. Very large errors on very small events may disappear on each path but still contribute appreciably to an expectation.

## Examples and non-examples

Let $U$ be uniform on $(0,1)$ and set $X_n=n1_{\{U<1/n\}}$. For every $U>0$, the indicator is eventually zero, so $X_n\to0$ almost surely. Yet $E[X_n]=n(1/n)=1$ for every $n$, and $E|X_n|^p=n^{p-1}$. There is no convergence to zero in $L^p$ for any $p\ge1$.

Conversely, take independent events $A_n$ with $P(A_n)=1/n$ for $n\ge2$. Their indicators converge to zero in probability. The independent Borel–Cantelli lemma says infinitely many $A_n$ occur almost surely, so the indicators do not converge almost surely to zero.

## Important properties

Almost sure convergence implies convergence in probability by applying bounded convergence to the large-error indicators. Markov's inequality shows that $L^p$ convergence implies convergence in probability. Convergence in probability implies convergence in distribution.

Neither almost sure nor $L^p$ convergence generally implies the other. If almost sure convergence has an integrable dominating bound for the relevant $p$th powers, dominated convergence supplies $L^p$ convergence. For $p=1$, uniform integrability is the precise additional condition accompanying convergence in probability.

## Connections and further reading

Strong laws concern almost sure limits; central limit theorems concern distributional limits. Martingale convergence illustrates why an almost sure limit can lose expectation. [Lawler, Section 4](https://www.math.uchicago.edu/~lawler/probnotes.pdf), [Durrett, §§3.2 and 4.6](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf), and [Peking University, §1.4, Definition 1.14](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/prob.html) give the precise modes and their conventions.

