---
{"id":"commutative-ring","title":"Commutative Ring","chinese":"交换环","aliases":[],"area":"algebra","topic":"commutative-algebra","level":"Undergraduate","summary":"A commutative ring supports addition, subtraction, and commutative multiplication with identity, without requiring division or cancellation.","prerequisites":["abelian-group","unital-ring"],"related":["ring-ideal","integral-domain","polynomial-ring","algebraic-prime-spectrum"],"references":[{"id":"li-ring-basics","label":"Wen-Wei Li — Methods in Algebra I, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex","locator":"基本概念 (sec:ring-basics), initial ring axioms, opposite-ring definition naming 交换环, and ring-homomorphism definition","checked":"2026-10-15","note":"Ring axioms, commutativity, and identity-preserving homomorphisms."},{"id":"stacks-ring-conventions","label":"The Stacks Project — Conventions","url":"https://stacks.math.columbia.edu/tag/00AQ","locator":"Section 10.2, opening convention","checked":"2026-10-15","note":"Commutative rings with identity and inclusion of the zero ring."},{"id":"milne-ca-rings","label":"J. S. Milne — A Primer of Commutative Algebra","url":"https://www.jmilne.org/math/xnotes/CA.pdf","locator":"Section 1, Rings and algebras, especially polynomial rings and the finite-dimensional domain argument, printed p.3","checked":"2026-10-15","note":"Algebras, polynomial rings, and the finite-dimensional domain-to-field criterion."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A commutative ring is an environment for polynomial arithmetic in which addition and multiplication behave much as they do for integers. Division is optional, and nonzero products can vanish. The concept therefore includes number systems, polynomial expressions, and functions with pointwise operations. Keeping these examples together makes it possible to study equations before choosing a particular kind of solution space.

## Prerequisites

Understand abelian groups, binary operations, and homomorphisms. The additive group supplies subtraction. A unital ring additionally supplies multiplication and its identity. Ideals and modules are natural next steps, rather than prerequisites for the axioms themselves.

## Definition and conventions

A commutative ring $R$ has operations $+$ and multiplication such that $(R,+)$ is an abelian group, multiplication is associative and commutative, and
$$
r(s+t)=rs+rt,\qquad 1r=r=r1.
$$
The identities $0$ and $1$ need not be distinct: the zero ring is allowed. Indeed, if $1=0$, then every $r$ equals $r1=r0=0$. An integral domain or a field, by contrast, is required to be nonzero.

Ring homomorphisms here preserve addition, multiplication, and $1$. This last requirement matters: a map preserving the two operations need not preserve the chosen identity. A unit is an element with a multiplicative inverse; the word does not mean only the distinguished element $1$.

## Intuition

The axioms permit expansion, factorization, and substitution. They do not justify cancelling a factor. For example, from $ab=ac$ one obtains $a(b-c)=0$, but concluding $b=c$ requires information about $a$. Likewise, writing $1/a$ requires that $a$ be a unit. These are mathematical hypotheses, not merely notational choices.

## Examples and non-examples

In $\mathbb Z/12\mathbb Z$, classes of integers are added and multiplied modulo $12$. The class of $5$ is a unit because $5\cdot5=25\equiv1$. The nonzero class of $3$ is a zero divisor because $3\cdot4=0$. The class of $2$ is also nonzero, yet $2\cdot1=2\cdot7$, demonstrating failed cancellation directly.

For a field $k$, the polynomial ring $k[x]$ is commutative, but $x$ has no polynomial inverse. In the quotient $k[\epsilon]/(\epsilon^2)$, the class $\epsilon$ is nonzero and has square zero. Nevertheless $1+\epsilon$ is invertible, with inverse $1-\epsilon$. Thus nilpotent behavior can coexist with many units.

The full matrix ring $M_2(\mathbb R)$ is unital but noncommutative: the matrix units satisfy $E_{12}E_{21}=E_{11}$ and $E_{21}E_{12}=E_{22}$. The natural numbers with ordinary operations fail a different axiom: they lack additive inverses. Both examples isolate exactly what the definition excludes.

## Important properties

The units form an abelian group under multiplication. If $u,v$ are units, then $(uv)^{-1}=v^{-1}u^{-1}$; associativity verifies both inverse identities. Addition need not preserve units, as $1+(-1)=0$ in a nonzero ring.

If $R$ is an integral domain, multiplication by any nonzero $a$ is injective: $ax=ay$ implies $a(x-y)=0$. This proof identifies the precise hypothesis missing in the modular example.

If a nonzero commutative $k$-algebra $A$ is finite-dimensional over a field $k$ and is an integral domain, then $A$ is a field. Proof idea: multiplication by $a\ne0$ is an injective linear endomorphism of a finite-dimensional space, hence surjective. A preimage of $1$ supplies an inverse. Finite dimension is essential: $k[x]$ is a domain but not a field.

## Connections and further reading

Ideals specify which expressions become zero in a quotient; localization specifies which elements become invertible. These constructions lead to the prime spectrum and its scheme structure. Read [Li's ring definitions](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex) and [Milne, Section 1](https://www.jmilne.org/math/xnotes/CA.pdf) for the algebra conventions used here.
