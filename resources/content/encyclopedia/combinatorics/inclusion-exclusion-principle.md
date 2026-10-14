---
{
  "id": "inclusion-exclusion-principle",
  "title": "Inclusion–Exclusion Principle",
  "chinese": "容斥原理",
  "aliases": [
    "PIE",
    "principle of inclusion and exclusion"
  ],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "Inclusion–exclusion counts a finite union by alternating sums of intersection sizes.",
  "prerequisites": [
    "counting-addition-principle",
    "binomial-coefficient"
  ],
  "related": [
    "permutation-derangement",
    "ordinary-generating-function"
  ],
  "references": [
    {
      "id": "inclusion-exclusion-principle-source-1",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_inclusion-exclusion_statement.html",
      "locator": "Section 7.2, Theorem 7.7 and equation (7.2.1)",
      "checked": "2026-10-14",
      "note": "Supports the mathematical formulation; exposition and examples are original."
    },
    {
      "id": "inclusion-exclusion-principle-source-2",
      "label": "上海交通大学 — CS0901 组合数学（2026）",
      "url": "https://jhc.sjtu.edu.cn/public/home/kuanyang/teaching/CS0901/2026/content/chapter-3-inclusion-exclusion.html",
      "locator": "§3.1，定理3.1「容斥原理」",
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

Inclusion–exclusion makes counting possible when natural cases overlap. It replaces the demand for a disjoint classification with a different demand: know how many objects lie in each relevant intersection. The resulting cancellation is exact, rather than an approximation to the amount of overlap.

## Prerequisites

Use finite sets, unions, intersections, cardinalities, and binomial coefficients. When counting objects that avoid restrictions, first choose a finite universe containing every allowed and forbidden object. Changing that universe changes the answer.

## Definition and conventions

Let $m\ge1$ and let $A_1,\ldots,A_m$ be finite sets. Write $[m]=\{1,\ldots,m\}$. Then

$$
\left|\bigcup_{i=1}^m A_i\right|
=\sum_{\varnothing\ne S\subseteq[m]}
(-1)^{|S|+1}\left|\bigcap_{i\in S}A_i\right|.
$$

If all $A_i$ lie in a finite universe $U$, the number avoiding every $A_i$ is

$$
\sum_{S\subseteq[m]}(-1)^{|S|}
\left|\bigcap_{i\in S}A_i\right|,
$$

where the empty intersection means $U$. For zero restrictions this complement formula correctly returns $|U|$. Finiteness prevents expressions such as subtracting one infinite cardinality from another.

## Intuition

Each object carries a list of the restrictions it meets. Inclusion–exclusion assigns positive and negative contributions to subsets of that list. Objects meeting many restrictions are not treated as independent coincidences: their complete membership pattern determines the cancellation. This explains why knowing only single-set and pairwise counts generally does not suffice when three or more sets overlap.

## Examples and non-examples

Consider integers from 1 through 60 divisible by 4 or 9. There are 15 multiples of 4 and 6 multiples of 9. Their common multiples are multiples of 36, so there is exactly one. The union has $15+6-1=20$ elements; 40 avoid both conditions.

As a non-example of the uncorrected sum rule, take $A=B=\{u,v\}$. Adding their sizes gives four, although their union has two elements. Applying inclusion–exclusion gives $2+2-2=2$. Distinct indices may name identical sets; the formula still works.

## Important properties

A short proof examines one object belonging to exactly $r\ge1$ of the sets. Its contribution to the union formula is

$$
\sum_{j=1}^r(-1)^{j+1}\binom rj=1,
$$

by the binomial expansion of $(1-1)^r$. An object outside every set contributes zero. Summing these individual contributions proves the identity.

For derangements of $n$ positions, choose all $n!$ permutations as the universe and let $A_i$ mean that position $i$ is fixed. Specifying $k$ fixed positions leaves $(n-k)!$ permutations, giving $\sum_{k=0}^n(-1)^k\binom nk(n-k)!$. The empty permutation supplies the value one at $n=0$.

## Connections and further reading

The method links restricted counting to generating functions and to inversion on the lattice of subsets. The pointwise cancellation proof also works for indicator functions of finitely many events, followed by expectation. See [Keller and Trotter, §7.2, Theorem 7.7](https://rellek.net/book-2016/s_inclusion-exclusion_statement.html) for the complement formulation and its inductive proof.

