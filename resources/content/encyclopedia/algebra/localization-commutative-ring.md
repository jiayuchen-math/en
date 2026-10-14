---
{"id":"localization-commutative-ring","title":"Localization of a Commutative Ring","chinese":"交换环的局部化","aliases":[],"area":"algebra","topic":"commutative-algebra","level":"Graduate","summary":"Localization universally makes a chosen multiplicative set of ring elements invertible.","prerequisites":["commutative-ring","ring-ideal"],"related":["local-ring","algebraic-prime-spectrum","tensor-product-modules"],"references":[{"id":"milne-ca","label":"J. S. Milne — A Primer of Commutative Algebra","url":"https://www.jmilne.org/math/xnotes/CA.pdf","checked":"2026-10-14","locator":"Section 5, Rings of fractions, construction and universal property","note":"Definition and structural properties; examples and explanation written for this compilation."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Localization constructs a ring in which selected elements admit inverses. It generalizes the passage from integers to rational numbers and makes algebra near a prime ideal accessible. The general construction must accommodate zero divisors; ordinary cross multiplication alone is insufficient.

## Prerequisites

Use commutative rings with identity, ideals, and homomorphisms preserving identity. A multiplicative subset $S$ contains $1$ and is closed under multiplication. We allow $0\in S$, in which case localization produces the zero ring. For a nonzero localization one usually assumes $0\notin S$.

## Definition and conventions

The localization $S^{-1}R$ consists of pairs $(a,s)\in R\times S$, written $a/s$, modulo
$$
(a,s)\sim(b,t)\quad\Longleftrightarrow\quad
u(ta-sb)=0\text{ for some }u\in S.
$$
Addition and multiplication follow the usual fraction formulas. Its defining property is universal: any homomorphism $f:R\to A$ for which every $f(s)$ is a unit factors uniquely through $R\to S^{-1}R$, with $a/s$ mapped to $f(a)f(s)^{-1}$.

For a prime ideal $\mathfrak p$, write $R_{\mathfrak p}$ for localization at $R\setminus\mathfrak p$. This notation differs from inverting the elements inside $\mathfrak p$.

## Intuition

Fractions enforce specified inverses with no extra arbitrary choices. At a prime ideal, elements outside the prime become invertible, while elements inside it retain their local significance. Some elements may disappear if an allowed denominator annihilates them.

## Examples and non-examples

For $R=\mathbb Z$ and $S=\{1,2,4,\ldots\}$, the localization is $\mathbb Z[1/2]$. It contains $3/8$ but not $1/3$: an equation $a/2^k=1/3$ would require $3a=2^k$.

In $R=\mathbb Z/6\mathbb Z$, invert the class of $2$. Since $2\cdot3=0$, the image of $3$ becomes zero. The resulting ring is isomorphic to $\mathbb Z/3\mathbb Z$. Thus localization is not always an embedding. This example explains the factor $u$ in the equivalence relation.

The field of fractions of a domain arises by inverting every nonzero element. For a ring with zero divisors that set need not even be multiplicatively closed.

## Important properties

The kernel of $R\to S^{-1}R$ consists of elements annihilated by some member of $S$. Prime ideals of the localization correspond to prime ideals of $R$ disjoint from $S$, via extension and contraction.

The ring $R_{\mathfrak p}$ is local, with maximal ideal $\mathfrak pR_{\mathfrak p}$. Any fraction whose numerator is outside $\mathfrak p$ has an explicit inverse; the remaining fractions form the unique maximal ideal. Localization of modules is exact, so it preserves short exact sequences even when the original ring map is not injective.

## Connections and further reading

Localization gives the local rings attached to points of an affine scheme. It also detects module properties prime by prime. Read [Milne, Section 5](https://www.jmilne.org/math/xnotes/CA.pdf), Rings of fractions, for the construction and universal property.

