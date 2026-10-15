---
{
  "id": "central-limit-theorem",
  "title": "Central Limit Theorem",
  "chinese": "中心极限定理",
  "aliases": ["CLT"],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "For iid observations with finite positive variance, the centered sum divided by its standard deviation converges in distribution to a standard normal law.",
  "prerequisites": ["independent-identically-distributed", "variance", "convergence-in-distribution", "gaussian-distribution"],
  "related": ["law-of-large-numbers", "characteristic-function-probability", "binomial-distribution"],
  "references": [
    {"id":"lawler-clt","label":"Gregory F. Lawler — Notes on Probability","url":"https://www.math.uchicago.edu/~lawler/probnotes.pdf","locator":"Section 5, Proposition 5.4 and Theorem 5.5, printed pp.20–21","checked":"2026-10-15","note":"Iid finite-variance CLT and characteristic-function expansion."},
    {"id":"durrett-cauchy","label":"Rick Durrett — Probability: Theory and Examples, fifth edition","url":"https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf","locator":"§3.3, Example 3.3.16 and Exercise 3.3.6","checked":"2026-10-15","note":"Cauchy characteristic function and failure of averaging to remove its scale."},
    {"id":"lidf-clt-name","label":"李东风 — 概率统计课件（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/psbclw/psbp.pdf","locator":"§4.6.2, Theorem 6.2 (中心极限定理), printed p.153; §4.6.4, binomial application","checked":"2026-10-15","note":"Chinese terminology and classical iid statement."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

The central limit theorem describes the distribution of fluctuations in a large sum. It explains why normal approximations can arise from observations that are individually discrete or asymmetric. The approximation concerns a centered and rescaled sum, not a claim that the original observations become normal.

There are many central limit theorems. Here the scope is the classical iid theorem for real variables with finite positive variance. Dependence, unequal distributions, and infinite variance require separate hypotheses and sometimes different limits.

## Prerequisites

For iid $X_1,X_2,\ldots$, set $S_n=\sum_{j=1}^n X_j$. Know expectation, variance, and convergence in distribution. Write $\Phi$ for the CDF of a standard normal variable.

Finite variance makes the natural scale of $S_n-n\mu$ equal to $\sigma\sqrt n$. Independence is what makes the variances add in this calculation.

## Definition and conventions

Assume $\mu=E[X_1]$ and $0<\sigma^2=\operatorname{Var}(X_1)<\infty$. Then
$$
Z_n=\frac{S_n-n\mu}{\sigma\sqrt n}\Rightarrow N(0,1).
$$
Since $\Phi$ is continuous everywhere, this means $P(Z_n\le x)\to\Phi(x)$ for every real $x$. Equivalently, $\sqrt n(\overline X_n-\mu)/\sigma$ has this limit.

If $\sigma=0$, each $X_j=\mu$ almost surely; the displayed standardization is undefined. The theorem needs no third or fourth moment. Quantitative error bounds require additional conditions and do not follow from this statement alone.

## Intuition

Centering removes the predictable linear growth, while division by $\sqrt n$ keeps the remaining variance fixed. Without this scaling, a sample average collapses toward its mean rather than retaining a nondegenerate limiting shape.

At the transform level, finite variance gives every centered, standardized summand the same leading quadratic behavior near the origin. Independence turns the transform of the sum into a product; the quadratic term survives the limit while the smaller remainder disappears.

## Examples and non-examples

Let $X_j$ indicate success in independent trials with $p=0.3$. Then $S_n$ is binomial, its mean is $0.3n$, and its variance is $0.21n$. Thus
$$
P\left(\left|\overline X_n-0.3\right|
\le 2\sqrt{\frac{0.21}{n}}\right)
\longrightarrow \Phi(2)-\Phi(-2).
$$
For $n=2100$, the interval has half-width $0.02$. The limiting normal probability suggests about $0.9545$, but the theorem supplies no certified error at this particular sample size.

If the observations themselves are independent $N(\mu,\sigma^2)$ variables with $\sigma>0$, then $Z_n$ is exactly standard normal for every $n$. Approximation becomes equality in this special case.

For perfect dependence $X_j=Z$ with $Z$ a fair sign, $S_n/\sqrt n=\sqrt n Z$ does not approach a normal law, despite bounded individual observations. Independence cannot simply be omitted.

Iid standard Cauchy observations fail the moment hypothesis. Their sum has the law of $nX_1$, so the $\sqrt n$ normalization does not yield a standard normal limit.

## Important properties

Proof sketch: set $Y=(X_1-\mu)/\sigma$, so $E[Y]=0$ and $E[Y^2]=1$. Its characteristic function satisfies
$$
\varphi_Y(u)=1-\frac{u^2}{2}+o(u^2).
$$
Consequently, independence gives
$$
\varphi_{Z_n}(t)=\left[\varphi_Y(t/\sqrt n)\right]^n
\longrightarrow e^{-t^2/2}.
$$
The characteristic-function continuity theorem identifies the limit as standard normal. Finite second moment justifies the expansion; an infinite power-series expansion of all moments is unnecessary.

The CLT and the law of large numbers answer different questions: stabilization of an average versus the limiting distribution of its magnified error. Neither theorem guarantees that relative errors in extremely small tail probabilities are small for a chosen finite $n$.

## Connections and further reading

Characteristic functions provide the main proof mechanism. The binomial specialization is the de Moivre–Laplace limit. [Lawler, Proposition 5.4 and Theorem 5.5](https://www.math.uchicago.edu/~lawler/probnotes.pdf) give the proof, while [Li, §4.6.2](https://math.pku.edu.cn/teachers/lidf/course/psbclw/psbp.pdf) documents 中心极限定理. [Durrett, Example 3.3.16](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf) supplies the Cauchy comparison.
