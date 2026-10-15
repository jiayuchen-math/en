---
{
  "id": "law-of-large-numbers",
  "title": "Law of Large Numbers",
  "chinese": "大数定律",
  "aliases": ["LLN"],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "For iid integrable observations, the sample average converges to the common expectation, almost surely and therefore in probability.",
  "prerequisites": ["independent-identically-distributed", "expectation", "convergence-in-probability"],
  "related": ["almost-sure-convergence", "central-limit-theorem", "variance"],
  "references": [
    {"id":"durrett-strong-law","label":"Rick Durrett — Probability: Theory and Examples, fifth edition","url":"https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf","locator":"§2.4, Theorem 2.4.1 and its truncation proof, beginning with Lemma 2.4.2; §3.3, Example 3.3.16 and Exercise 3.3.6","checked":"2026-10-15","note":"Finite absolute first moment suffices; the theorem even allows pairwise independence with identical distributions. Also verifies the Cauchy comparison."},
    {"id":"lawler-large-numbers","label":"Gregory F. Lawler — Notes on Probability","url":"https://www.math.uchicago.edu/~lawler/probnotes.pdf","locator":"Section 4, Theorems 4.2 and 4.4 and the iid integrable extension following Theorem 4.4","checked":"2026-10-15","note":"Weak-law variance argument and an elementary strong-law proof under stronger fourth-moment assumptions."},
    {"id":"lidf-lln-name","label":"李东风 — 概率统计课件（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/psbclw/psbp.pdf","locator":"§4.6.1, Theorem 6.1 (大数定律), printed pp.150–151","checked":"2026-10-15","note":"Chinese term and finite-variance weak-law statement; not evidence that finite variance is necessary."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

The law of large numbers explains why repeated measurements can estimate a theoretical mean. Individual observations may fluctuate widely, yet their average stabilizes under suitable assumptions. “Law” names a family of theorems; the hypotheses and the mode of convergence must always be specified.

This article focuses on independent, identically distributed real observations. There are extensions to dependent and nonidentically distributed data, but those require their own conditions.

## Prerequisites

Let $X_1,X_2,\ldots$ be iid random variables on one probability space. Write $S_n=\sum_{j=1}^n X_j$ and $\overline X_n=S_n/n$. Independence and identical distribution are separate requirements: one concerns joint behavior, the other concerns marginal laws.

Integrability means $E|X_1|<\infty$. The distinction between convergence in probability and almost-sure convergence determines whether a law is called weak or strong.

## Definition and conventions

For iid real variables with $E|X_1|<\infty$ and $\mu=E[X_1]$, the strong law states
$$
P\left(\lim_{n\to\infty}\overline X_n=\mu\right)=1.
$$
Consequently the weak law holds:
$$
P(|\overline X_n-\mu|>\varepsilon)\longrightarrow0
\qquad(\varepsilon>0).
$$
Neither statement in this iid formulation requires finite variance. A finite second moment is a convenient sufficient assumption for a short proof of the weak law.

These are asymptotic statements, not a promise that a prescribed finite sample is accurate. The strong law supplies one event of probability one on which the entire sequence of averages converges.

## Intuition

An average divides each observation's contribution by the number of observations. Independence prevents a common random error from being repeated unchanged forever; integrability controls extreme observations sufficiently for a finite-mean limit.

Stabilization does not require errors to alternate or compensate deliberately. A long run of heads does not force tails to become more likely on the next independent toss. The limit concerns proportions over growing samples.

## Examples and non-examples

For iid Bernoulli variables with success probability $p$, $\overline X_n$ is the observed success fraction. Since $\operatorname{Var}(X_1)=p(1-p)$, Chebyshev's inequality gives
$$
P(|\overline X_n-p|\ge0.05)
\le\frac{p(1-p)}{n(0.05)^2}\le\frac{100}{n}.
$$
Thus $n=10{,}000$ gives the conservative upper bound $0.01$. The strong law additionally describes convergence along almost every infinite sequence.

If $X_j=Z$ for every $j$, with $Z$ a nonconstant Bernoulli variable, all observations have the same bounded distribution but $\overline X_n=Z$. Identical distributions and finite moments alone do not ensure averaging toward $E[Z]$.

For iid standard Cauchy variables, the sample average remains standard Cauchy: multiplying characteristic functions gives $[e^{-|t|/n}]^n=e^{-|t|}$. It cannot converge in probability to a constant. Here the finite absolute first moment assumption fails.

## Important properties

With finite variance $\sigma^2$, independence gives $\operatorname{Var}(\overline X_n)=\sigma^2/n$. Chebyshev then proves the weak law immediately. That bound alone is not a proof of the strong law: its $1/n$ upper bounds are not summable.

Proof idea for the integrable strong law: truncate $X_k$ at a level growing with $k$. Integrability makes the probabilities of discarded observations summable, so Borel–Cantelli leaves only finitely many discarded terms almost surely. Variance estimates for the truncated variables, followed by a subsequence argument and interpolation, establish convergence. Removing truncation recovers the original averages. The extra work is what avoids assuming a second moment.

## Connections and further reading

The central limit theorem studies the fluctuation scale around the law-of-large-numbers limit and needs stronger assumptions in its classical iid form. See [Durrett, §2.4](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf) for the integrable strong law and [Lawler, Section 4](https://www.math.uchicago.edu/~lawler/probnotes.pdf) for elementary arguments. [Li, §4.6.1](https://math.pku.edu.cn/teachers/lidf/course/psbclw/psbp.pdf) supports the Chinese name 大数定律.
