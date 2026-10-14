---
{"id":"fundamental-theorem-of-arithmetic","title":"Fundamental Theorem of Arithmetic","chinese":"算术基本定理","aliases":["unique prime factorization"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"Every positive integer greater than one has a unique prime factorization, apart from the order of the factors.","prerequisites":["integer-divisibility","integer-greatest-common-divisor"],"related":["euler-totient","number-field","integral-domain"],"references":[{"id":"li","label":"Wen-Wei Li — Methods in Algebra I, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex","locator":"唯一分解性, definition def:UFD and following paragraph naming 算术基本定理 for Z","checked":"2026-10-14","note":"The integer theorem as a special case of unique factorization."},{"id":"judson","label":"Thomas W. Judson — Abstract Algebra: Theory and Applications","url":"https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html","locator":"Theorem 2.2.2 and Corollary 2.2.3","checked":"2026-10-14","note":"Bézout identity and cancellation under coprimality, used in the proof sketch."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Prime factorization supplies a coordinate system for positive integers under multiplication. Instead of viewing an integer as one large object, one records how many times each prime occurs. The fundamental theorem says both that these coordinates exist and that they do not depend on the sequence of divisions used to find them. Existence and uniqueness are separate assertions.

## Prerequisites

A positive integer $p>1$ is prime if its only positive divisors are $1$ and $p$. Know divisibility, induction, and the Bézout identity for coprime integers. The number $1$ is not prime; this convention is necessary for uniqueness without arbitrary extra factors.

## Definition and conventions

Every integer $n>1$ can be written

$$
n=\prod_{p}p^{v_p(n)},
$$

where each exponent is a nonnegative integer and only finitely many are nonzero. The exponents are uniquely determined by $n$. Equivalently, any two expressions as products of positive primes differ only in the ordering of factors. For $n=1$, the empty product is used. A negative integer additionally has a sign, while zero has no finite prime factorization of this kind.

## Intuition

Primes are indivisible building blocks within positive integer multiplication. The uniqueness statement is stronger than the ability to split a composite number repeatedly. In another ring, irreducible elements may exist and factorizations may terminate, yet different factorizations need not be related by rearrangement or units.

## Examples and non-examples

The factorization $360=2^3\cdot3^2\cdot5$ gives $v_2(360)=3$ and $v_7(360)=0$. It also shows that $72$ divides $360$, since its exponents $3$ and $2$ at $2$ and $3$ do not exceed those of $360$. By contrast $16$ does not divide $360$ because it needs four factors of $2$.

The equality $12=2\cdot6=3\cdot4$ is not a failure of uniqueness: those are not prime factorizations. Breaking the composite factors further produces $2^2\cdot3$ in both cases.

## Important properties

Existence follows by induction: an integer is prime or is a product of two smaller positive integers greater than one, to which induction applies. For uniqueness, the key lemma says that if a prime $p$ divides $ab$, it divides $a$ or $b$. If it does not divide $a$, then $\gcd(p,a)=1$; multiplying a Bézout identity by $b$ proves $p\mid b$.

Apply this lemma to match one prime from the first factorization with a prime in the second, cancel it, and repeat. Thus $a\mid b$ for positive integers exactly when $v_p(a)\le v_p(b)$ for every prime. The gcd takes the smaller exponents and the lcm takes the larger ones.

## Connections and further reading

Unique factorization domains abstract this arithmetic pattern. Rings of integers of number fields may fail element factorization, leading instead to prime ideal factorization and class groups. [Li, Chapter 5](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex) places the integer theorem in its algebraic setting.
