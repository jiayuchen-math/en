---
{
  "id": "ordinary-generating-function",
  "title": "Ordinary Generating Function",
  "chinese": "普通生成函数",
  "aliases": [
    "OGF"
  ],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "An ordinary generating function encodes a sequence as coefficients of a formal power series.",
  "prerequisites": [
    "formal-power-series",
    "counting-multiplication-principle"
  ],
  "related": [
    "exponential-generating-function",
    "sequence-convolution",
    "inclusion-exclusion-principle"
  ],
  "references": [
    {
      "id": "ordinary-generating-function-source-1",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_genfunction_intro.html",
      "locator": "Section 8.1, opening definition and Proposition 8.3",
      "checked": "2026-10-14",
      "note": "Supports the mathematical formulation; exposition and examples are original."
    },
    {
      "id": "ordinary-generating-function-source-2",
      "label": "上海交通大学 — CS0901 组合数学（2026）",
      "url": "https://jhc.sjtu.edu.cn/public/home/kuanyang/teaching/CS0901/2026/content/chapter-2-generating-functions.html",
      "locator": "§2.1，定义2.1「普通生成函数」",
      "checked": "2026-10-14",
      "note": "Supports the complementary convention or Chinese terminology."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

An ordinary generating function stores a sequence in powers of an indeterminate. Its usefulness comes from translating operations on objects into algebra on coefficients. One formula can describe all sizes at once, but the interpretation of size and the convention for the constant term must be fixed before manipulating it.

## Prerequisites

Know sequences indexed from zero, polynomial multiplication, and elementary counting. Formal power series extend polynomial arithmetic while preserving a crucial feature: computing any fixed coefficient involves only finitely many terms. Analysis is needed only if the series is later evaluated numerically.

## Definition and conventions

For a sequence $(a_n)_{n\ge0}$ in a commutative ring $R$, define its ordinary generating function, abbreviated OGF, by

$$
A(x)=\sum_{n\ge0}a_nx^n\in R[[x]].
$$

Here $x$ is an indeterminate and $[x^n]A(x)=a_n$ means coefficient extraction. Equality is coefficientwise. In counting applications $a_n$ counts objects of size $n$; $a_0$ is the actual number of size-zero objects, not an automatically imposed value.

Multiplication uses the finite formula

$$
[x^n](A(x)B(x))=\sum_{k=0}^n a_kb_{n-k}.
$$

Over a field, a series has a multiplicative inverse exactly when its constant term is nonzero. More generally that term must be a unit in $R$.

## Intuition

Imagine selecting one object from each of two classes, with total size equal to the sum of their sizes. The exponents record sizes, and multiplication considers every split of a total. This interpretation requires a unique ordered decomposition into the two components. If different decompositions describe the same final object, the product counts decompositions instead.

## Examples and non-examples

Suppose one compartment holds any number of identical unit tokens and another holds any number of identical double tokens. The compartments are distinguishable. Their combined OGF is

$$
\frac1{(1-x)(1-x^2)}.
$$

For total weight six, the second compartment can contain zero, one, two, or three tokens. The first then contains six, four, two, or zero. Thus the coefficient of $x^6$ is four; generally it is $\lfloor n/2\rfloor+1$.

The series $\sum_{n\ge0}n!x^n$ is another legitimate OGF, but it diverges at every nonzero real $x$. Its formal validity does not license numerical evaluation. Likewise, $1/x$ is not a member of $R[[x]]$: ordinary series here have no negative exponents.

## Important properties

A formal identity such as $(1-x)\sum_{n\ge0}x^n=1$ follows by checking coefficients, without convergence. Multiplying a series by $x^k$ shifts its sequence right by $k$ places, filling the initial entries with zeros.

For $a_0=1$ and $a_n=2a_{n-1}+1$ for $n\ge1$, summing the recurrence gives $A=1+2xA+x/(1-x)$. Hence $A=1/((1-x)(1-2x))$, and partial fractions yield $a_n=2^{n+1}-1$. The constant term is essential to this derivation.

## Connections and further reading

Exponential generating functions encode a different normalization, useful when labels are distributed between components. Analytic combinatorics adds convergence and singularity analysis to the formal starting point. See [Keller and Trotter, §8.1, Proposition 8.3](https://rellek.net/book-2016/s_genfunction_intro.html) for the convolution rule and [上海交通大学，§2.1，定义2.1](https://jhc.sjtu.edu.cn/public/home/kuanyang/teaching/CS0901/2026/content/chapter-2-generating-functions.html) for the Chinese name.

