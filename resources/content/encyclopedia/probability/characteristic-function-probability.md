---
{
  "id": "characteristic-function-probability",
  "title": "Characteristic Function of a Probability Distribution",
  "chinese": "特征函数",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "The characteristic function is the expected complex exponential of a random variable and uniquely determines its probability law.",
  "prerequisites": ["probability-distribution", "expectation", "independent-random-variables"],
  "related": ["central-limit-theorem", "convergence-in-distribution", "gaussian-distribution"],
  "references": [
    {"id":"lawler-characteristic","label":"Gregory F. Lawler — Notes on Probability","url":"https://www.math.uchicago.edu/~lawler/probnotes.pdf","locator":"Section 5, characteristic-function definition and properties, Propositions 5.2–5.3 (derivatives at zero), and Proposition 5.6","checked":"2026-10-15","note":"Transform convention, independent sums, moment assumptions, and uniqueness by inversion."},
    {"id":"durrett-characteristic","label":"Rick Durrett — Probability: Theory and Examples, fifth edition","url":"https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf","locator":"§3.3, Example 3.3.16 and Theorem 3.3.17","checked":"2026-10-15","note":"Cauchy transform and continuity theorem, including continuity at zero of the pointwise limit."},
    {"id":"lidf-characteristic","label":"李东风 — 应用随机过程（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/prob.html","locator":"§1.3.5, Definition 1.13 and characteristic-function properties","checked":"2026-10-15","note":"Chinese terminology and Fourier-transform viewpoint."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A characteristic function packages a probability law as a complex-valued function of frequency. It converts sums of independent variables into products of ordinary functions, making it an effective tool for identifying distributions and proving limit theorems.

Every real random variable has a characteristic function, including variables whose expectation or variance does not exist. The bounded complex exponential makes this possible.

## Prerequisites

Know expectation as integration against a probability law, complex exponentials $e^{iu}=\cos u+i\sin u$, and independence. Dominated convergence explains continuity and differentiation under appropriate moment assumptions.

A density is optional. The definition applies equally to discrete, absolutely continuous, and singular probability laws.

## Definition and conventions

For real $X$ with law $\mu$, define
$$
\varphi_X(t)=E[e^{itX}]=\int_{\mathbb R}e^{itx}\,\mu(dx),
\qquad t\in\mathbb R.
$$
The sign convention here is positive in the exponent. Fourier transforms using a negative exponent therefore differ by replacing $t$ with $-t$.

The expectation is a complex integral, equivalently the expectations of cosine and sine separately. Since $|e^{itX}|=1$, no moment condition is needed. If a density $f$ exists, one can write $\int e^{itx}f(x)\,dx$ instead.

In this article, “characteristic function” never means the indicator $1_A$ of an event. That separate usage is common in analysis.

## Intuition

For each frequency, a possible value $x$ contributes a point $e^{itx}$ on the unit circle. Averaging these points records cancellation and phase. Repeating this measurement over all frequencies determines the full law.

A characteristic function can be negative or complex; it is not itself a probability density. Knowing its values for all real frequencies is much more information than knowing only a mean and variance.

## Examples and non-examples

Let $P(X=0)=1/3$ and $P(X=2)=2/3$. Then
$$
\varphi_X(t)=\frac13+\frac23e^{2it}.
$$
Its first two derivatives at zero are $4i/3$ and $-8/3$, recovering $E[X]=4/3$ and $E[X^2]=8/3$. Thus $\operatorname{Var}(X)=8/9$.

If $X,Y$ are independent copies, $\varphi_{X+Y}(t)=(1/3+2e^{2it}/3)^2$. Expanding gives probabilities $1/9$, $4/9$, and $4/9$ at $0$, $2$, and $4$.

A normal law $N(\mu,\sigma^2)$ has transform $e^{i\mu t-\sigma^2t^2/2}$. A standard Cauchy law has transform $e^{-|t|}$ despite having no finite absolute first moment.

The function $e^{t^2}$ cannot be a characteristic function: its magnitude exceeds one when $t\ne0$. Even normalization and the magnitude bound alone are insufficient; discontinuous candidates such as $1_{\{0\}}(t)$ fail continuity at zero.

## Important properties

One has $\varphi_X(0)=1$, $|\varphi_X(t)|\le1$, and $\varphi_X(-t)=\overline{\varphi_X(t)}$. Uniform continuity follows from
$$
|\varphi_X(t+h)-\varphi_X(t)|
\le E|e^{ihX}-1|\longrightarrow0,
$$
where dominated convergence applies with bound two.

Affine transformation gives $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$. For independent $X,Y$, factorization of the exponential gives $\varphi_{X+Y}=\varphi_X\varphi_Y$. The independence hypothesis matters.

If $E|X|^k<\infty$, differentiation under the integral is valid through order $k$, yielding $\varphi_X^{(j)}(t)=E[(iX)^j e^{itX}]$ and $\varphi_X^{(j)}(0)=i^j E[X^j]$. Existence of the function alone does not justify these derivatives.

Equal characteristic functions imply equal laws, not equality of the variables on a shared probability space. The continuity theorem further says that if characteristic functions converge pointwise to a function continuous at zero, that function is a characteristic function and the corresponding laws converge weakly. The continuity assumption excludes loss of mass in the limit.

## Connections and further reading

The CLT proof applies the independent-sum formula to a quadratic expansion near zero. [Lawler, Section 5](https://www.math.uchicago.edu/~lawler/probnotes.pdf) develops this route and inversion. [Durrett, §3.3](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf) proves the continuity theorem. [Li, §1.3.5](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/prob.html) documents 特征函数.
