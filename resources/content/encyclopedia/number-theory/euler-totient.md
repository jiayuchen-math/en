---
{"id":"euler-totient","title":"Euler's Totient Function","chinese":"欧拉函数","aliases":["Euler phi function","totient","歐拉函數"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"Euler's totient counts invertible residue classes and connects factorization with modular exponentiation.","prerequisites":["integer-congruence","integer-coprimality","fundamental-theorem-of-arithmetic"],"related":["fermats-little-theorem","chinese-remainder-theorem","dirichlet-character"],"references":[{"id":"conrad","label":"Keith Conrad — Euler's Theorem","url":"https://kconrad.math.uconn.edu/blurbs/ugradnumthy/eulerthm.pdf","locator":"Section 1, formula (1.1), Theorem 1.2; Section 3","checked":"2026-10-14","note":"Totient definition, prime-power values and Euler's theorem."},{"id":"milne-crt","label":"J. S. Milne — Algebraic Number Theory","url":"https://www.jmilne.org/math/CourseNotes/ANT.pdf","locator":"Chapter 1, Theorem 1.14","checked":"2026-10-14","note":"The product decomposition explains multiplicativity for coprime inputs."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Euler's totient function measures how much multiplication modulo an integer remains invertible. It is an arithmetic function: its input is a positive integer, and its value reflects prime factors rather than numerical size alone. It connects the elementary act of counting coprime integers with a finite group and a useful exponentiation theorem.

## Prerequisites

Use congruence, gcds, prime factorization and the criterion that a residue modulo $n$ is invertible exactly when it is coprime to $n$. Understanding the Chinese remainder theorem explains the product formula, though direct counting also gives it.

## Definition and conventions

For a positive integer $n$, define

$$
\varphi(n)=\#\{a:1\le a\le n,\ \gcd(a,n)=1\}.
$$

For $n>1$, this is the order of $(\mathbb Z/n\mathbb Z)^\times$. The convention $\varphi(1)=1$ follows from the displayed count and makes multiplicative formulas uniform. For a prime $p$ and integer $r\ge1$, there are $p^{r-1}$ multiples of $p$ among the $p^r$ possible representatives, so $\varphi(p^r)=p^r-p^{r-1}$.

## Intuition

The obstruction to invertibility is sharing a prime factor with the modulus. The totient counts the residue classes avoiding every such obstruction. This depends on which primes occur, not just on the number of classes. That is why a simple monotonic rule in $n$ is not available.

## Examples and non-examples

For modulus $18$, the invertible representatives are $1,5,7,11,13,17$, giving $\varphi(18)=6$. For modulus $20$, the prime-factor formula gives $20(1-1/2)(1-1/5)=8$.

The function is not monotone: $\varphi(11)=10$ but $\varphi(12)=4$. Nor is it multiplicative for arbitrary pairs: $\varphi(4)=2$, whereas $\varphi(2)\varphi(2)=1$. Coprimality is part of the multiplicativity statement, not an optional simplification.

## Important properties

If $\gcd(m,n)=1$, the Chinese remainder theorem identifies a class modulo $mn$ with a pair of classes modulo $m,n$. A pair is invertible exactly when both components are invertible. Counting gives $\varphi(mn)=\varphi(m)\varphi(n)$. Combining this with the prime-power calculation yields

$$
\varphi(n)=n\prod_{p\mid n}\left(1-\frac1p\right),
$$

where the product is over distinct primes.

Euler's theorem says that if $n\ge2$ and $\gcd(a,n)=1$, then $a^{\varphi(n)}\equiv1\pmod n$. It follows from the finite unit group, or by multiplying all units before and after their permutation by $a$. Without coprimality, the assertion fails: $2^4\not\equiv1\pmod{12}$.

The group size need not be its smallest common exponent. Modulo $8$, the four units are $1,3,5,7$, and each squares to one. Thus exponent two already works for all units, although $\varphi(8)=4$. Euler's theorem provides a valid exponent, not necessarily the smallest one.

## Connections and further reading

The totient appears in cyclic groups, cyclotomic fields and Dirichlet characters. It counts units, not their smallest common exponent; those are different invariants. [Conrad, Sections 1–3](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/eulerthm.pdf) provides an accessible bridge to Euler's theorem.
