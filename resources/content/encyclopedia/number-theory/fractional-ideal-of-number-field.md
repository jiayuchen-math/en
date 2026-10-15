---
{"id":"fractional-ideal-of-number-field","title":"Fractional Ideal of a Number Field","chinese":"数域的分式理想","aliases":["number-field fractional ideal"],"area":"number-theory","topic":"algebraic-number-theory","level":"Graduate","summary":"Nonzero fractional ideals extend integral ideals by allowing bounded denominators, forming a group whose quotient by principal ideals is the ideal class group.","prerequisites":["number-field","ring-of-integers","prime-ideal"],"related":["ideal-class-group","number-field-norm","dedekind-zeta-function"],"references":[{"id":"sutherland-definition","label":"Andrew V. Sutherland — MIT 18.785, Lecture 2 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes2.pdf","locator":"Sections 2.5–2.6, Definition 2.13, Lemma 2.14, Lemma 2.20 and Example 2.21, pp.5–7","checked":"2026-10-15","note":"Definition, denominator criterion, inverse formula and failure of invertibility in a nonmaximal order; this article excludes zero."},{"id":"sutherland-factorization","label":"Andrew V. Sutherland — MIT 18.785, Lecture 3 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes3.pdf","locator":"Theorem 3.2, Corollary 3.3, Theorem 3.11, Corollary 3.13 and following valuation formulas, pp.1–4","checked":"2026-10-15","note":"Local proof of invertibility and prime ideal factorization with integer exponents."},{"id":"sutherland-norm","label":"Andrew V. Sutherland — MIT 18.785, Lecture 14 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes14.pdf","locator":"Section 14.3, paragraph preceding Corollary 14.17 and its proof, p.6","checked":"2026-10-15","note":"Fractional ideal norm, scaling by a rational integer and the absolute value of a principal field norm."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Integral ideals support multiplication, but their inverses usually leave the ring. Fractional ideals supply those inverses while retaining finite generation and a common denominator. They allow arithmetic statements about ideals to be expressed as group identities, even when elements do not factor uniquely.

The setting matters: throughout, $K$ is a number field and $A=\mathcal O_K$ is its full ring of integers. The group structure below uses the Dedekind property of $A$.

## Prerequisites

Know modules over a commutative ring, ideals, fraction fields and prime ideals. Familiarity with localization explains the proof sketch. The field norm and the index of a subgroup are useful for the final connection, but they are different constructions.

## Definition and conventions

A fractional ideal is a nonzero finitely generated $A$-submodule $I\subseteq K$. Equivalently, $I$ is a nonzero $A$-submodule for which some $d\in A\setminus\{0\}$ satisfies $dI\subseteq A$. Clearing denominators of finitely many generators proves one implication; the converse uses that $A$ is noetherian, so its ideal $dI$ is finitely generated.

An integral ideal additionally satisfies $I\subseteq A$. A principal fractional ideal has the form $(\alpha)=\alpha A$ for $\alpha\in K^\times$. We exclude the zero ideal, although some authors include it in the definition of fractional ideal before restricting to nonzero ideals for multiplication.

The product $IJ$ consists of finite sums of products $xy$, with $x\in I$ and $y\in J$. It is a module product, not merely the set of individual products. Define

$$
I^{-1}=\{x\in K:xI\subseteq A\}.
$$

For $A=\mathcal O_K$, one has $II^{-1}=A$.

## Intuition

Think of a fractional ideal as an integral ideal after rescaling. Allowing denominators changes its position inside $K$, but does not discard its arithmetic structure. Prime ideals provide coordinates: multiplication adds their exponents, and inversion negates them. A denominator is therefore a controlled collection of negative prime exponents.

## Examples and non-examples

Over $A=\mathbb Z$, take $I=(2/3)\mathbb Z$. Multiplication by $3$ gives the integral ideal $2\mathbb Z$, and

$$
I^{-1}=(3/2)\mathbb Z,\qquad II^{-1}=\mathbb Z.
$$

Here $I=(2)(3)^{-1}$ has exponent $1$ at $(2)$ and $-1$ at $(3)$. It is fractional but not integral, since $2/3\notin\mathbb Z$.

By contrast, $\mathbb Z[1/2]$ is a $\mathbb Z$-submodule of $\mathbb Q$ but not a fractional ideal: no nonzero integer clears every denominator $2^m$. Similarly, $\mathbb Q$ itself is not a fractional $\mathbb Z$-ideal.

Invertibility is not automatic in smaller orders. For $B=\mathbb Z[2i]$ and $J=2\mathbb Z[i]$, one computes $(B:J)=\mathbb Z[i]$, so $J(B:J)=J\ne B$. Thus a legitimate fractional ideal over a nonmaximal order can fail to be invertible; see [Sutherland, Example 2.21](https://math.mit.edu/classes/18.785/2021fa/LectureNotes2.pdf).

## Important properties

Every nonzero fractional $A$-ideal has a unique factorization

$$
I=\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}(I)},
\qquad v_{\mathfrak p}(I)\in\mathbb Z,
$$

with only finitely many nonzero exponents. It is integral exactly when all exponents are nonnegative. Consequently the fractional ideal group is free abelian on the nonzero prime ideals. Inclusion reverses coordinate size: $I\subseteq J$ exactly when every exponent of $I$ is at least the corresponding exponent of $J$.

Proof sketch: localizing at each nonzero prime gives a discrete valuation ring, where every fractional ideal is generated by an integer power of a uniformizer. These local powers determine the original module; finite generation gives finite support. The inverse formula and uniqueness then follow from these coordinates.

## Connections and further reading

Quotienting the fractional ideal group by principal fractional ideals gives the ideal class group. For an integral ideal, $N(I)=|A/I|$; for a fractional ideal set $N(I)=N(dI)/|N_{K/\mathbb Q}(d)|$. This positive rational number is independent of the denominator, and $N((\alpha))=|N_{K/\mathbb Q}(\alpha)|$. For $(2/3)\mathbb Z$ it equals $2/3$.

The Dedekind zeta function sums over nonzero integral ideals, whose norms are positive integers. Summing over all fractional ideals would introduce arbitrarily small norms and destroy that counting interpretation. [Sutherland's Lecture 3](https://math.mit.edu/classes/18.785/2021fa/LectureNotes3.pdf) develops the underlying local arithmetic.
