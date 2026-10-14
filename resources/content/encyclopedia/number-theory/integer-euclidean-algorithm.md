---
{"id":"integer-euclidean-algorithm","title":"Euclidean Algorithm for Integers","chinese":"整数辗转相除法","aliases":["Euclidean algorithm"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"Repeated division with remainder computes a greatest common divisor without prime factorization.","prerequisites":["integer-divisibility","integer-greatest-common-divisor"],"related":["integer-coprimality","integer-congruence","chinese-remainder-theorem"],"references":[{"id":"judson","label":"Thomas W. Judson — Abstract Algebra: Theory and Applications","url":"https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html","locator":"Subsection 2.2.1, The Euclidean Algorithm; Theorem 2.2.2","checked":"2026-10-14","note":"Remainder iteration and the integer linear-combination characterization of the gcd."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Euclidean algorithm transforms a common-divisor problem into a sequence of smaller problems. It is both an exact computational procedure and a short proof that greatest common divisors are accessible without knowing prime factorizations. Keeping track of the same divisions also produces coefficients for a linear combination of the original integers, which is the extended algorithm.

## Prerequisites

Understand integer divisibility and division with remainder. For $b>0$, division writes $a=qb+r$ with $0\le r<b$. A greatest common divisor is chosen nonnegative, so negative starting inputs can first be replaced by their absolute values.

## Definition and conventions

Start with a pair $(a,b)$ of nonnegative integers. While $b>0$, replace it by $(b,r)$, where $r$ is the remainder of $a$ on division by $b$. Stop when the second component is zero. The first component of the final pair is $\gcd(a,b)$.

For $(0,0)$, the procedure stops immediately and returns zero, matching the convention for that gcd. Division by a zero second component is never attempted. If the initial first component is smaller, the first quotient is zero; the next pair simply reverses the order.

## Intuition

The equality $a=qb+r$ shows that a common divisor of $a,b$ is also a divisor of $b,r$. The converse follows from $a=qb+r$. Therefore each step preserves exactly the same set of common divisors. Meanwhile the positive second components strictly decrease, so the process cannot continue forever.

## Examples and non-examples

For $119$ and $51$, the divisions are

$$
119=2\cdot51+17,\qquad51=3\cdot17+0.
$$

The gcd is $17$. The first equation gives the certificate $17=119-2\cdot51$. Hence $119x+51y=17$ has an integer solution, but $119x+51y=1$ does not.

For $35$ and $12$, division yields remainders $11$ and $1$. Back substitution gives $1=3\cdot12-35$, so $-1$ is an inverse of $35$ modulo $12$. It represents the same residue class as $11$. Returning the last quotient instead of the last nonzero remainder would give an incorrect algorithm.

## Important properties

The invariant and termination prove correctness. At the final pair $(d,0)$, the nonnegative greatest common divisor is $d$. Since the earlier pairs have the same common divisors, this is also the gcd of the initial pair.

Every remainder is an integer linear combination of the original inputs: this is true initially, and subtraction of a multiple preserves it. Thus back substitution constructs Bézout coefficients. Those coefficients are usually not unique. If $au+bv=d$ and both inputs are nonzero, replacing $(u,v)$ by $(u+tb/d,v-ta/d)$ leaves the equality unchanged for any integer $t$.

## Connections and further reading

The procedure solves linear Diophantine equations and computes modular inverses when the gcd is one. Polynomial division provides an analogous algorithm over a field; general rings need a suitable division function. [Judson, Subsection 2.2.1](https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html) gives the integer foundation.
