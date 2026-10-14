---
{"id":"integer-divisibility","title":"Integer Divisibility","chinese":"整数整除","aliases":["divides","整除性"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"Divisibility asks whether an integer is an exact integer multiple of another, and organizes arithmetic without using fractions.","prerequisites":[],"related":["integer-greatest-common-divisor","integer-congruence","fundamental-theorem-of-arithmetic"],"references":[{"id":"judson","label":"Thomas W. Judson — Abstract Algebra: Theory and Applications","url":"https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html","locator":"Section 2.2, Theorem 2.2.1 and divisibility paragraph before Theorem 2.2.2","checked":"2026-10-14","note":"Division with remainder and integer divisibility; examples and deductions below are editorial."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Divisibility is the basic language of integer arithmetic. Instead of asking how large two numbers are, it asks whether one can be obtained by repeating the other an integer number of times. This relation supports prime factorization, common divisors, congruences and integer equations. The phrase “integer number” is essential: allowing arbitrary rational multiples would make every nonzero integer divide every integer.

## Prerequisites

Use the integers, their addition and multiplication, and the distinction between an integer and a fraction. No notion of prime number is required for the definition. It is useful to know that a product of nonzero integers cannot be zero.

## Definition and conventions

For integers $a,b$, write $a\mid b$ if there exists an integer $k$ with $b=ak$. Write $a\nmid b$ when no such integer exists. The order is important: the expression says that $a$ divides $b$, not the reverse. Every integer divides zero, including zero itself. Conversely, $0\mid b$ holds exactly when $b=0$. The units $1$ and $-1$ divide every integer.

Divisibility is reflexive and transitive. It is not antisymmetric on all integers: $3\mid-3$ and $-3\mid3$, although the two integers differ. Restricting to positive integers gives a partial order.

## Intuition

The multiples of $a$ form the set $a\mathbb Z$. Thus $a\mid b$ means membership in a regularly spaced collection, rather than an inequality. A large integer may divide a smaller negative integer, and a smaller positive integer may fail to divide a larger one. Numerical ordering and divisibility ordering answer different questions.

## Examples and non-examples

The equality $18=6\cdot3$ proves $6\mid18$. The equality $18=(-6)(-3)$ also proves $-6\mid18$. However, $6\nmid20$: division gives $20=6\cdot3+2$, with a nonzero remainder. Although $2<3$, it does not divide $3$.

If an integer $d$ divides both $42$ and $30$, it divides their difference $12$. Continuing with differences, it divides $30-2\cdot12=6$. This elementary observation already suggests why reducing numbers by remainders can reveal their greatest common divisor.

## Important properties

If $a\mid b$ and $a\mid c$, then $a\mid xb+yc$ for any integers $x,y$: substitute $b=au$ and $c=av$. If $a\mid b$ and $b\mid c$, multiplication of the integer witnesses proves $a\mid c$.

Cancellation requires care. From $ac\mid bc$, one may conclude $a\mid b$ when $c\ne0$; cancel $c$ in an equality $bc=ack$. With $c=0$, the hypothesis is always true and conveys no information. Similarly, the claim that a prime dividing a product divides a factor needs primality; $6\mid2\cdot3$ does not imply $6\mid2$ or $6\mid3$.

## Connections and further reading

Congruence records divisibility of a difference. Common-divisor questions lead to the Euclidean algorithm, while prime divisibility leads to unique factorization. [Judson, Section 2.2](https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html) develops the foundational arithmetic used in these transitions.
