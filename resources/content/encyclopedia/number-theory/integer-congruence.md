---
{"id":"integer-congruence","title":"Integer Congruence","chinese":"整数同余","aliases":["congruence modulo an integer"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"Congruence identifies integers whose difference is divisible by a fixed modulus, allowing arithmetic on finitely many residue classes.","prerequisites":["integer-divisibility"],"related":["integer-euclidean-algorithm","chinese-remainder-theorem","fermats-little-theorem"],"references":[{"id":"milne-crt","label":"J. S. Milne — Algebraic Number Theory","url":"https://www.jmilne.org/math/CourseNotes/ANT.pdf","locator":"Chapter 1, The Chinese remainder theorem, printed pages 19–20, before Theorem 1.14","checked":"2026-10-14","note":"Congruences as arithmetic in quotient rings and their relation to ideals."},{"id":"xxu","label":"Xinxiang University — Elementary Number Theory course syllabus","url":"https://sx.xxu.edu.cn/chudengshulun-110823.pdf","locator":"第三章 同余, 第一节 同余的概念及其基本性质, PDF pages 3–4","checked":"2026-10-14","note":"Chinese name and curriculum context; not a source for the proof below."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Congruence allows a calculation to retain only the information relevant to a modulus. It turns infinitely many integers into finitely many classes while preserving addition and multiplication. This is useful for divisibility tests, integer equations and finite algebra. A congruence is not an approximate equality: it is an exact statement about divisibility of a difference.

## Prerequisites

Know integer divisibility and division with remainder. For inverse calculations, use gcds and the Bézout identity. The modulus in this article is a positive integer $m$; allowing other conventions is possible but does not help the basic construction.

## Definition and conventions

Write $a\equiv b\pmod m$ when $m\mid(a-b)$. This is an equivalence relation. The equivalence class of $a$ consists of the integers $a+km$ for $k\in\mathbb Z$. Every class has a unique representative among $0,1,\ldots,m-1$, but the class is not identical to that chosen representative.

The quotient $\mathbb Z/m\mathbb Z$ consists of these classes. Define $[a]+[b]=[a+b]$ and $[a][b]=[ab]$. These operations are well-defined because replacing either input by a congruent integer changes the result by a multiple of $m$. When $m=1$, there is just one class.

## Intuition

Think of reducing a computation to a remainder without repeatedly choosing a new representative. The class remembers a whole family of integers. Multiplication and addition respect this reduction, so intermediate numbers can be replaced by smaller convenient values. Division is different: not every nonzero class has a multiplicative inverse.

## Examples and non-examples

Since $-13-2=-15$, one has $-13\equiv2\pmod5$. Squaring gives $169\equiv4\pmod5$ without computing a quotient of $169$.

Modulo $8$, $3\cdot3\equiv1$, so the inverse of $3$ is $3$. But $2$ has no inverse: every product $2x$ is even and cannot be congruent to $1$. The congruence $2x\equiv2y\pmod8$ does not force $x\equiv y\pmod8$; take $x=1$ and $y=5$.

## Important properties

A class $[a]$ is invertible precisely when $\gcd(a,m)=1$. A Bézout identity gives an inverse when the gcd is one. Conversely, an inverse implies $ax-my=1$ for some integers, so every common divisor of $a,m$ divides one.

More generally, $ax\equiv b\pmod m$ is solvable exactly when $d=\gcd(a,m)$ divides $b$. Necessity follows from divisibility of $ax-my$. Sufficiency follows by multiplying a Bézout identity by $b/d$. Cancellation by a nonunit may reduce the modulus rather than preserve it, which explains the failure in the example above.

## Connections and further reading

Prime moduli give finite fields; composite moduli usually give zero divisors. The Chinese remainder theorem decomposes a composite modulus with coprime factors into independent calculations. [Milne, Chapter 1](https://www.jmilne.org/math/CourseNotes/ANT.pdf) connects congruences with quotient rings and ideals.
