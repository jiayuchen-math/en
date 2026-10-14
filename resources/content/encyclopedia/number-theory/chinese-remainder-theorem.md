---
{"id":"chinese-remainder-theorem","title":"Chinese Remainder Theorem","chinese":"中国剩余定理","aliases":["CRT","中國剩餘定理"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"Congruences with pairwise coprime moduli can be solved independently and recombined into one residue class.","prerequisites":["integer-congruence","integer-greatest-common-divisor","integer-euclidean-algorithm"],"related":["euler-totient","number-field","localization-commutative-ring"],"references":[{"id":"conrad","label":"Keith Conrad — The Chinese Remainder Theorem","url":"https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf","locator":"Theorem 1.1 and Section 2","checked":"2026-10-14","note":"Two-modulus statement and constructive proof."},{"id":"milne","label":"J. S. Milne — Algebraic Number Theory","url":"https://www.jmilne.org/math/CourseNotes/ANT.pdf","locator":"Chapter 1, The Chinese remainder theorem, Theorem 1.14","checked":"2026-10-14","note":"Several moduli and the corresponding theorem for comaximal ideals."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Chinese remainder theorem explains when separate modular calculations contain exactly the same information as one calculation with a larger modulus. It gives both existence of a solution and the correct uniqueness statement. There are usually infinitely many integer solutions; uniqueness concerns a residue class, not one integer.

## Prerequisites

Understand congruence, coprimality and Bézout identities. The Euclidean algorithm provides the inverses used in a constructive solution. For the ring formulation, know quotient rings and products of rings, whose operations are performed component by component.

## Definition and conventions

Let $m_1,\ldots,m_r$ be positive, pairwise coprime integers and put $M=\prod_i m_i$. For any integers $a_1,\ldots,a_r$, the system $x\equiv a_i\pmod{m_i}$ has a solution, unique modulo $M$. Equivalently, reduction gives a ring isomorphism

$$
\mathbb Z/M\mathbb Z\longrightarrow\prod_i\mathbb Z/m_i\mathbb Z.
$$

Pairwise coprimality means every pair has gcd one. A collective gcd of one is not sufficient: the moduli $6,10,15$ have joint gcd one but are not pairwise coprime.

## Intuition

Each component records a different remainder. Coprimality makes these requirements independent. The theorem constructs integers that affect one remainder while vanishing in the other components, much as coordinate vectors isolate a coordinate in linear algebra. This is a statement about the arithmetic structure, not just the size of the sets involved.

## Examples and non-examples

Solve $x\equiv1\pmod4$ and $x\equiv2\pmod7$. Write $x=1+4t$. The second condition becomes $4t\equiv1\pmod7$. Since $4^{-1}\equiv2$, take $t\equiv2$. Thus $x\equiv9\pmod{28}$. Every integer $9+28k$ satisfies the two conditions.

For noncoprime moduli, arbitrary remainders may conflict: $x\equiv0\pmod4$ and $x\equiv1\pmod6$ cannot both hold, since the first makes $x$ even and the second makes it odd. Compatible noncoprime conditions are still possible, but their period is the lcm rather than necessarily the product.

## Important properties

For a constructive proof, set $M_i=M/m_i$ and choose $u_i$ with $u_iM_i\equiv1\pmod{m_i}$. Then $x=\sum_i a_i u_iM_i$ satisfies every congruence: only its matching summand survives modulo $m_i$. If two solutions exist, each modulus divides their difference; pairwise coprimality implies the product does too.

For two arbitrary positive moduli $m,n$, compatibility is exactly $\gcd(m,n)\mid(a-b)$. This follows by writing $x=a+mt$ and asking whether $mt\equiv b-a\pmod n$ is solvable. In a commutative ring, pairwise comaximal ideals give the analogous quotient-product isomorphism, with their intersection equal to their product.

## Connections and further reading

The theorem explains multiplicativity of the totient and reduces computations to prime powers. The ideal version underlies decompositions in algebraic number theory. [Milne, Theorem 1.14](https://www.jmilne.org/math/CourseNotes/ANT.pdf) provides that extension.
