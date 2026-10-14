---
{
  "id": "additive-combinatorics",
  "title": "Additive Combinatorics",
  "chinese": "加法组合学",
  "aliases": [],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Research",
  "summary": "Additive combinatorics studies arithmetic patterns and additive structure in finite sets, including inverse questions about small sumsets.",
  "prerequisites": [
    "additive-sumset",
    "finite-simple-graph",
    "sequence-convolution"
  ],
  "related": [
    "extremal-graph-theory",
    "probabilistic-method",
    "ordinary-generating-function"
  ],
  "references": [
    {
      "id": "additive-combinatorics-source-1",
      "label": "Ben Green — Additive Combinatorics, Oxford C3.10 (2024–25)",
      "url": "https://people.maths.ox.ac.uk/greenbj/papers/C3.10-Oxford-2025.pdf",
      "locator": "Section 0.1 Overview; Section 3.5, Definitions 3.10–3.11 and Proposition 3.12; Section 4.1, Theorem 4.1",
      "checked": "2026-10-14",
      "note": "Overview, Definitions 3.10–3.11, Proposition 3.12, and Theorem 4.1 support the sumset, energy, and integer inverse-theorem bridge."
    },
    {
      "id": "additive-combinatorics-source-2",
      "label": "Yufei Zhao — Graph Theory and Additive Combinatorics, author manuscript",
      "url": "https://yufeizhao.com/gtacbook/gtacbook.pdf",
      "locator": "Section 0.2, Theorems 0.2.3–0.2.4; Section 2.4, Graph Theoretic Proof of Roth’s Theorem",
      "checked": "2026-10-14",
      "note": "Supports the connection between density theorems and graph methods; only the stated density formulation is summarized."
    },
    {
      "id": "additive-combinatorics-source-3",
      "label": "华东师范大学 — 2019年运筹学与控制论在校博士全日制培养方案",
      "url": "https://math.ecnu.edu.cn/education/2019%E5%B9%B4%E8%BF%90%E7%AD%B9%E5%AD%A6%E4%B8%8E%E6%8E%A7%E5%88%B6%E8%AE%BA%E5%9C%A8%E6%A0%A1%E5%8D%9A%E5%A3%AB%E5%85%A8%E6%97%A5%E5%88%B6%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88.pdf",
      "locator": "PDF p.7，课程MATH0011120079「加法组合学 / Additive Combinatorics」",
      "checked": "2026-10-14",
      "note": "Course entry MATH0011120079 explicitly pairs 加法组合学 with Additive Combinatorics."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Additive combinatorics studies how arithmetic relations organize finite sets. Two guiding questions are whether a large set must contain a prescribed pattern and whether unusually small additive growth forces structure. This research bridge concentrates on finite subsets of integers and abelian groups; the hypotheses and the ambient group determine which structural conclusions are valid.

## Prerequisites

Use finite sets, abelian groups, counting, and Cauchy–Schwarz. Fourier analysis becomes useful for counting linear equations, while graph removal methods provide another route to progression results. Neither technique is developed fully in this overview.

## Definition and conventions

For finite subsets $A,B$ of an additively written abelian group, their sumset is $A+B=\{a+b:a\in A,b\in B\}$. Repeated representations produce only one element of the sumset. We allow repeated summands, so $A+A$ includes every $a+a$.

For nonempty $A$, the doubling ratio is $|A+A|/|A|$. “Small doubling” means this ratio is bounded by a specified constant $K\ge1$, often fixed while $|A|$ grows. Define unnormalized additive energy by

$$
E(A)=|\{(a,b,c,d)\in A^4:a+b=c+d\}|.
$$

Quadruples are ordered and repetitions are allowed. A nontrivial three-term progression in the integers is $x,x+d,x+2d$ with integer $d\ne0$. In groups with torsion, nonzero $d$ alone may not give three distinct elements.

## Intuition

A small sumset indicates that many pairs collide on the same sums. Energy measures the multiplicity of those collisions. These two measurements answer different questions: a structured portion of a set can create many collisions even when another portion contributes numerous distinct sums.

## Examples and non-examples

Let $A=\{0,2,4,6\}\subseteq\mathbb Z$. Then $A+A=\{0,2,4,6,8,10,12\}$ has seven elements, so its doubling ratio is $7/4$. The representation counts are $1,2,3,4,3,2,1$; therefore $E(A)=1+4+9+16+9+4+1=44$.

A finite subgroup $H$ of an abelian group satisfies $H+H=H$ and has doubling ratio one. This example cannot occur for a nontrivial finite subgroup of $\mathbb Z$. Moreover, $A+A$ is not scalar dilation $2\cdot A=\{2a:a\in A\}$: for the displayed set, dilation has only four elements.

## Important properties

Write $r(s)=|\{(a,b)\in A^2:a+b=s\}|$. Then $\sum_s r(s)=|A|^2$ and $\sum_s r(s)^2=E(A)$. Cauchy–Schwarz gives

$$
E(A)\ge\frac{|A|^4}{|A+A|}.
$$

This proof makes the connection between small growth and many additive relations explicit, without treating the converse as automatic.

Freiman’s theorem in the integer setting states that, for finite nonempty $A\subseteq\mathbb Z$ with $|A+A|\le K|A|$, one can contain $A$ in a generalized arithmetic progression of bounded rank and parameter volume at most $C(K)|A|$, with both bounds depending only on $K$. Such a progression has the form $\{x_0+\sum_{i=1}^r n_ix_i:0\le n_i<L_i\}$. Here $r$ is a nonnegative integer, $L_i$ are positive integers, and $x_i,n_i\in\mathbb Z$. Parameter volume is $\prod_i L_i$; it equals cardinality only when the parameterization is injective. For $r=0$, the progression is $\{x_0\}$ and its parameter volume is one.

## Connections and further reading

A complementary density theorem says that for each $\delta>0$, sufficiently large $N$ forces a nontrivial three-term progression in every $A\subseteq\{1,\ldots,N\}$ with $|A|\ge\delta N$. The required size depends on $\delta$; the statement is not a guarantee for every small interval. [Green, §3.5 and §4.1, Theorem 4.1](https://people.maths.ox.ac.uk/greenbj/papers/C3.10-Oxford-2025.pdf) develops the energy and inverse viewpoints; [Zhao, §0.2 and §2.4](https://yufeizhao.com/gtacbook/gtacbook.pdf) connects progression questions with graph methods.

