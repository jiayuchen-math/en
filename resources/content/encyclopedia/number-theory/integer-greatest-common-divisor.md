---
{"id":"integer-greatest-common-divisor","title":"Greatest Common Divisor of Integers","chinese":"整数的最大公因数","aliases":["gcd","greatest common factor","最大公约数","最大公因子"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"The greatest common divisor generates the ideal of all integer linear combinations of two integers.","prerequisites":["integer-divisibility"],"related":["integer-coprimality","integer-euclidean-algorithm","chinese-remainder-theorem"],"references":[{"id":"judson-division","label":"Thomas W. Judson — Abstract Algebra: Theory and Applications","url":"https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html","locator":"Section 2.2, definition preceding Theorem 2.2.2; Theorem 2.2.2; Subsection 2.2.1","checked":"2026-10-14","note":"Divisibility definition, integer linear-combination characterization, and Euclidean algorithm."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The greatest common divisor measures the common divisibility of two integers. It also answers an apparently different question: which integers can be made by adding integer multiples of the two inputs? This second interpretation makes the gcd useful for linear Diophantine equations, modular inverses, and calculations with ideals.

## Prerequisites

For integers $d,n$, write $d\mid n$ if $n=dk$ for some integer $k$. Understand division with remainder: for $b>0$, every integer $a$ has a unique expression $a=qb+r$ with $0\le r<b$. Negative inputs can be replaced by their absolute values when computing a gcd.

## Definition and conventions

If $a,b$ are not both zero, $\gcd(a,b)$ is the unique positive integer $d$ dividing both such that every common divisor divides $d$. Equivalently, it is their largest positive common divisor. We use the extension $\gcd(0,0)=0$ and $\gcd(a,0)=|a|$; this convention keeps the ideal characterization valid even for zero inputs. Two integers are coprime when their gcd is $1$, without any requirement that either integer itself be prime.

## Intuition

Divisibility is a better guide than numerical size. The gcd gathers exactly the prime powers shared by the inputs, using the smaller exponent at each prime. Yet computing it need not require factoring either input. Repeated remainder operations preserve the common divisors while shrinking the numbers under consideration.

## Examples and non-examples

For $252$ and $198$, calculate

$$
252=198+54,\qquad198=3\cdot54+36,\qquad54=36+18.
$$

The next remainder is zero, so the gcd is $18$. Reversing the equations gives

$$
18=4\cdot252-5\cdot198.
$$

Thus $252x+198y=18$ has the solution $(4,-5)$, while $252x+198y=10$ has no integer solution because $18\nmid10$. Although $9$ divides both inputs, it is not their gcd: the larger common divisor $18$ does not divide $9$.

## Important properties

For inputs not both zero, there exist integers $u,v$ with $au+bv=d$. To see the mechanism, choose the smallest positive integer linear combination. Dividing either input by that combination leaves a remainder that is again a linear combination. Minimality forces each remainder to vanish. Every common divisor divides all such combinations, completing the argument.

Consequently $a\mathbb Z+b\mathbb Z=d\mathbb Z$, and $ax+by=c$ is solvable precisely when $d\mid c$. If $\gcd(a,m)=1$, reducing $au+mv=1$ modulo $m$ produces a multiplicative inverse of $a$. The coprimality hypothesis cannot be omitted.

## Connections and further reading

The Euclidean algorithm supplies the gcd and, by back substitution, its linear-combination coefficients. The same viewpoint extends to principal ideal domains, where a gcd is determined up to multiplication by a unit. See [Judson, Section 2.2 and Subsection 2.2.1](https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html) for the underlying arithmetic statements.
