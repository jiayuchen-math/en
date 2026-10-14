---
{"id":"fermats-little-theorem","title":"Fermat's Little Theorem","chinese":"费马小定理","aliases":["Fermat little theorem","費馬小定理"],"area":"number-theory","topic":"elementary-number-theory","level":"Undergraduate","summary":"For a prime modulus, every nonzero residue raised to the power one less than the prime equals one.","prerequisites":["integer-congruence","integer-coprimality"],"related":["euler-totient","group","fundamental-theorem-of-arithmetic"],"references":[{"id":"conrad","label":"Keith Conrad — Fermat's Little Theorem","url":"https://kconrad.math.uconn.edu/blurbs/ugradnumthy/fermatlittletheorem.pdf","locator":"Theorem 1.2; Sections 2–3","checked":"2026-10-14","note":"Statement, permutation proof and the distinction between a compositeness witness and a primality proof."},{"id":"milne","label":"J. S. Milne — Group Theory","url":"https://www.jmilne.org/math/CourseNotes/GT.pdf","locator":"Theorem 1.26 and Corollary 1.27","checked":"2026-10-14","note":"Lagrange's theorem gives the group-theoretic explanation."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Fermat's little theorem is a universal statement about powers modulo a prime. It lets one reduce large exponents and detect some composite numbers without factoring them. Its strength comes from working in a finite multiplicative group. The hypotheses are indispensable, and the converse is false: passing a particular power test does not establish primality.

## Prerequisites

Understand congruence, prime numbers and coprimality. A nonzero residue modulo a prime is invertible. For the group interpretation, know the order of an element and Lagrange's theorem; the elementary proof only requires cancellation of invertible residues.

## Definition and conventions

If $p$ is prime and $a$ is an integer with $p\nmid a$, then

$$
a^{p-1}\equiv1\pmod p.
$$

An equivalent formulation, with no restriction on $a$, is $a^p\equiv a\pmod p$. For multiples of $p$, this second statement holds because both sides are zero modulo $p$. For other integers, multiply the first statement by $a$. This is the little theorem, not Fermat's last theorem about sums of positive integer powers.

## Intuition

Multiplication by a nonzero residue rearranges the nonzero residues modulo $p$. It cannot lose a residue, create a zero, or identify two different residues because multiplication is invertible. The theorem captures a numerical consequence of this finite symmetry. It does not say that $p-1$ is the smallest exponent giving one.

## Examples and non-examples

To find $2^{100}$ modulo $13$, use $2^{12}\equiv1$. Since $100=8\cdot12+4$, the answer is $2^4\equiv3\pmod{13}$. This reduces a large calculation to one small power.

For the composite modulus $9$, $2^8\equiv4$, not one. Yet some composite moduli pass particular tests: $341=11\cdot31$ and $2^{10}=1024\equiv1\pmod{341}$, so $2^{340}\equiv1\pmod{341}$. This explicit counterexample prevents reversing the theorem even for an integer coprime to the modulus.

## Important properties

An elementary proof compares the product of all nonzero residues with its image after multiplication by $a$. The image is a permutation, so the products agree. Factoring out one $a$ from each of the $p-1$ terms gives $a^{p-1}$ times the original product. The product is invertible, so cancellation gives the theorem.

Equivalently, the group $(\mathbb Z/p\mathbb Z)^\times$ has $p-1$ elements. The order of $[a]$ divides $p-1$ by Lagrange's theorem. Thus a failed congruence proves compositeness, but a successful congruence may reflect only one element's order, not the primality of the modulus.

## Connections and further reading

Euler's theorem replaces $p-1$ with the number of units for a composite modulus and explicitly requires coprimality. More sophisticated primality tests use stronger conditions. [Conrad's note](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/fermatlittletheorem.pdf) treats the elementary proof and testing limitations.
