---
{"id":"noetherian-ring","title":"Noetherian Commutative Ring","chinese":"Noether 环","aliases":[],"area":"algebra","topic":"commutative-algebra","level":"Undergraduate","summary":"A commutative ring is Noetherian when all its ideals are finitely generated, equivalently when every ascending ideal chain stabilizes.","prerequisites":["commutative-ring","ring-ideal","finitely-generated-module"],"related":["polynomial-ring","principal-ideal-domain","localization-commutative-ring","algebraic-prime-spectrum"],"references":[{"id":"stacks-noetherian","label":"The Stacks Project — Noetherian rings","url":"https://stacks.math.columbia.edu/tag/00FM","locator":"Section 10.31, opening definition and Lemmas 10.31.1, 10.31.3–10.31.5","checked":"2026-10-15","note":"Equivalent chain condition; polynomial, quotient and localization permanence; finite modules and spectra."},{"id":"li-noetherian","label":"Wen-Wei Li — Methods in Algebra I, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter6.tex","locator":"链条件和模的合成列, def:ACC-DCC-mod and ring specialization; prop:fg-noetherian","checked":"2026-10-15","note":"Noetherian modules, rings, and equivalence with finite generation of all submodules."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Noetherian condition places a finiteness requirement on ideals rather than on the number of ring elements. It ensures that a potentially infinite collection of algebraic constraints has finitely many ideal generators. This is a central reason polynomial algebra can be studied using finite presentations. The condition controls existence of finite descriptions; it does not supply an algorithm or a bound on the number of generators.

## Prerequisites

Understand ideals, generated ideals, and ascending chains. A module is finitely generated if finitely many elements span it using ring coefficients. Ideals are submodules of the ring viewed as a module over itself. These observations connect the ring definition to its module version.

## Definition and conventions

A commutative unital ring $R$ is Noetherian if every ideal $I\subseteq R$ is finitely generated. Equivalently, every ascending chain
$$
I_1\subseteq I_2\subseteq I_3\subseteq\cdots
$$
stabilizes: there is some $N$ with $I_n=I_N$ for every $n\geq N$. The index $N$ may depend on the chain; no uniform stabilization time is asserted.

More generally, an $R$-module is Noetherian if its submodules satisfy the ascending chain condition. For a commutative ring, $R$ is Noetherian precisely when the module $R$ is Noetherian. Noncommutative versions require specifying left or right ideals and are outside this entry.

## Intuition

Imagine adjoining new equations one at a time and recording the ideals they generate. In a Noetherian ring, an ascending sequence of such ideals eventually stops acquiring new algebraic consequences. The generators need not be minimal or independent. Finite generation of the ring as an algebra over a specified base is a different condition from finite generation of each of its ideals.

## Examples and non-examples

Every ideal in $\mathbb Z$ is $(n)$ for some $n\geq0$, so $\mathbb Z$ is Noetherian. It nevertheless has infinitely many ideals. Any field is Noetherian because its only ideals are $(0)$ and the whole field; this includes fields that are infinite sets.

For a field $k$, the ring $k[x_1,x_2,\ldots]$ in countably many indeterminates is not Noetherian. The chain
$$
(x_1)\subsetneq(x_1,x_2)\subsetneq(x_1,x_2,x_3)\subsetneq\cdots
$$
is strict. To verify the $n$th strict inclusion, evaluate $x_1,\ldots,x_n$ at zero. Every element of the preceding ideal becomes zero, while $x_{n+1}$ remains a nonzero polynomial.

Noetherianity does not prevent descending chains. In $\mathbb Z$,
$$
(2)\supsetneq(4)\supsetneq(8)\supsetneq\cdots
$$
never stabilizes. A descending chain condition is the distinct Artinian condition.

## Important properties

Here is a proof of the equivalence in the definition. If every ideal is finitely generated, the union $I=\bigcup_n I_n$ of an ascending chain is an ideal. Its finitely many generators all lie in one $I_N$, so $I=I_N$. Conversely, if an ideal were not finitely generated, choose an element outside each previously generated finite ideal. This recursively produces a strictly ascending chain, contradicting stabilization.

Hilbert's basis theorem states that if $R$ is Noetherian, then $R[x]$ is Noetherian. A proof organizes an ideal by leading coefficients in each polynomial degree, uses stabilization in $R$, and then subtracts matching leading terms to lower degree. Iteration and passage to quotients show that every finitely generated commutative $R$-algebra is Noetherian. The finite number of algebra generators is essential, as the infinite-variable example shows.

Quotients and localizations of Noetherian rings are Noetherian. Their ideals come from ideals upstairs, whose finite generating sets descend or localize. Also, every submodule of a finitely generated module over a Noetherian ring is finitely generated. Both the hypothesis on the base ring and the finite generation of the ambient module are needed for that statement.

## Connections and further reading

The spectrum of a Noetherian ring is a Noetherian topological space: an ascending chain of ideals reverses to a descending chain of their zero sets. See [Stacks, Section 10.31](https://stacks.math.columbia.edu/tag/00FM) for permanence results and [Li, chain conditions](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter6.tex) for the module perspective.
