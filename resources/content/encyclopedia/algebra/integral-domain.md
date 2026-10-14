---
{"id":"integral-domain","title":"Integral Domain","chinese":"整环","aliases":[],"area":"algebra","topic":"abstract-algebra","level":"Undergraduate","summary":"An integral domain is a nonzero commutative ring with identity and no nonzero zero divisors.","prerequisites":["commutative-ring"],"related":["irreducible-element","prime-element","field"],"references":[{"id":"milne-ca","label":"J. S. Milne — A Primer of Commutative Algebra","url":"https://www.jmilne.org/math/xnotes/CA.pdf","checked":"2026-10-14","locator":"Section 1, Rings and algebras; Section 4, Unique factorization","note":"Definition and structural properties; examples and explanation written for this compilation."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

An integral domain is a ring where a product can vanish only because one factor vanishes. This condition permits multiplicative cancellation and the construction of fractions. It does not permit division by every nonzero element inside the ring, and it does not guarantee unique factorization.

## Prerequisites

Know commutative rings with identity. A zero divisor here means a nonzero element $a$ for which $ab=0$ with some nonzero $b$. A unit has a multiplicative inverse within the ring. A field is a nonzero commutative ring in which every nonzero element is a unit.

## Definition and conventions

An integral domain is a commutative ring $R$ with $1\ne0$ such that
$$
ab=0\Longrightarrow a=0\text{ or }b=0.
$$
The zero ring is excluded. We require ring homomorphisms to preserve identity. Commutativity is part of the definition: division rings and certain noncommutative rings without zero divisors are different concepts.

For a nonzero nonunit $r$, irreducibility says every factorization $r=ab$ has a unit factor. Primality says $r\mid ab$ implies $r\mid a$ or $r\mid b$. These properties must not be conflated.

## Intuition

Products preserve enough information for cancellation. If $a\ne0$, the equation $ab=ac$ forces $b=c$ because $a(b-c)=0$. The ring can still lack solutions to $ax=1$: cancellation means that multiplication is injective, not necessarily surjective.

## Examples and non-examples

The integers are a domain but not a field, because $2$ has no integer inverse. For a field $F$, the polynomial ring $F[x]$ is a domain: the leading coefficient of a product is the product of the leading coefficients.

The ring $\mathbb Z/6\mathbb Z$ is not a domain, since the nonzero classes of $2$ and $3$ multiply to zero. The ring $\mathbb Z[\sqrt{-5}]$ is a domain as a subring of $\mathbb C$, but unique factorization fails. In particular,
$$
6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5}).
$$
The element $2$ is irreducible: a nontrivial factorization would require an element of norm two, and $a^2+5b^2=2$ has no integer solution. Yet $2$ divides this product without dividing either displayed factor, so it is not prime.

## Important properties

Every domain embeds in its field of fractions. Fractions $a/b$ have $b\ne0$, with $a/b=c/d$ exactly when $ad=bc$. The domain condition makes the natural map injective.

Every finite domain is a field. For nonzero $a$, multiplication by $a$ is an injective map on a finite set, hence surjective; some element therefore maps to $1$. Finiteness cannot be omitted, as $\mathbb Z$ demonstrates.

Every prime element is irreducible. The converse holds in unique factorization domains, but the example above disproves it for arbitrary domains.

## Connections and further reading

A proper ideal is prime precisely when its quotient is an integral domain. Localization creates domains of fractions with selected denominators. See [Milne, Sections 1 and 4](https://www.jmilne.org/math/xnotes/CA.pdf) for domains and the factorization distinctions.

