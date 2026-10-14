---
{
  "id": "fundamental-theorem-calculus",
  "title": "Fundamental Theorem of Calculus",
  "chinese": "微积分基本定理",
  "aliases": [],
  "area": "analysis",
  "topic": "calculus",
  "level": "Undergraduate",
  "summary": "For continuous integrands, differentiation recovers accumulation and antiderivatives evaluate definite integrals.",
  "prerequisites": [
    "real-derivative",
    "riemann-integral"
  ],
  "related": [
    "lebesgue-integral",
    "absolute-continuous-real-function"
  ],
  "references": [
    {
      "id": "t-analysis-notes",
      "label": "Michael Taylor — Introduction to Analysis in One Variable",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf",
      "locator": "§4.2, Theorems 4.2.6–4.2.7",
      "checked": "2026-10-14",
      "note": "Inspected definition and theorem passages; exposition and calculations are original."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The fundamental theorem of calculus connects a local operation, differentiation, with a global operation, integration. Its two directions answer different questions: what is the rate of change of an accumulated quantity, and how can total accumulation be computed from a primitive? Keeping these directions distinct prevents a computational formula from being applied without its hypotheses.

The theorem explains why an integral can often be evaluated by finding a function whose derivative is the integrand. It does not assert that every useful integrand has an elementary primitive.

## Prerequisites

Understand derivatives, continuous functions, and the Riemann integral on a compact interval. An antiderivative of $f$ is a differentiable function $F$ satisfying $F'=f$. Two antiderivatives on an interval differ by a constant, a consequence of the mean value theorem.

## Definition and conventions

Let $a<b$ and $f:[a,b]\to\mathbb R$ be continuous. Define
$$
A(x)=\int_a^x f(t)\,dt.
$$
Then $A$ is differentiable on $(a,b)$ and $A'(x)=f(x)$. Moreover, if $F$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with $F'=f$, then
$$
\int_a^b f(t)\,dt=F(b)-F(a).
$$
Endpoint derivatives, when needed, are one-sided. Reversing the integration bounds changes the sign. These are classical continuous-integrand statements; more general versions need different assumptions.

## Intuition

Adding a short interval of width $h$ changes accumulation by approximately $hf(x)$. Dividing by $h$ gives an average of nearby function values. Continuity forces that average toward $f(x)$, which is why accumulation differentiates back to the integrand.

## Examples and non-examples

For $f(t)=3t^2$ on $[0,2]$, the accumulation is $A(x)=x^3$, so $A'(x)=3x^2$ and the total integral is $8$.

Let $f$ be zero for negative inputs and one for nonnegative inputs on $[-1,1]$. Its accumulation from $-1$ is zero up to zero and equals $x$ afterward. The left and right derivatives at zero are $0$ and $1$. Thus the formula $A'=f$ fails at the jump, although $f$ is Riemann integrable. Integrability alone does not give pointwise differentiability everywhere.

## Important properties

For nonzero $h$ near an interior point,
$$
\frac{A(x+h)-A(x)}h-f(x)=\frac1h\int_x^{x+h}(f(t)-f(x))\,dt.
$$
Its absolute value is bounded by the largest nearby deviation of $f(t)$ from $f(x)$, which tends to zero. This proves the first direction. Subtracting $A$ from $F$ gives a function with zero derivative; the mean value theorem makes it constant, proving the second.

Integration by parts follows by applying the theorem to a product of continuously differentiable functions. Substitution follows from the chain rule with the appropriate interval and orientation conditions.

## Connections and further reading

Lebesgue integration replaces continuity by integrability in an almost-everywhere differentiation theorem. Recovering a function from its derivative requires absolute continuity, rather than merely an almost-everywhere derivative. [Taylor, §4.2](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf) proves the classical statements used here.

