---
{"id":"hilbert-class-field","title":"Hilbert Class Field","chinese":"希尔伯特类域","aliases":[],"area":"number-theory","topic":"algebraic-number-theory","level":"Graduate","summary":"The ordinary Hilbert class field is the maximal abelian extension unramified at finite places and split at real places, with Galois group canonically identified with the ideal class group.","prerequisites":["number-field","ideal-class-group","galois-extension","ramification-index"],"related":["class-number","idele-group","dedekind-zeta-function","dirichlet-l-function"],"references":[{"id":"zhang-ordinary","label":"Shenxing Zhang — Algebraic Number Theory notes v2.5.0.0","url":"https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf","locator":"Section 3.3.5, Propositions 3.75–3.76 and following Artin-symbol construction, printed p.99 (PDF p.107); Theorem 3.77, printed p.100; Theorem 4.25, printed p.113","checked":"2026-10-15","note":"Explicit ordinary versus narrow convention, class-group identification, Artin map and abelian zeta factorization."},{"id":"sutherland-hilbert","label":"Andrew V. Sutherland — MIT 18.785, Lecture 22 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes22.pdf","locator":"Section 22.6, Definition 22.30 and following discussion, p.11; Section 22.3, Definition 22.24, p.9","checked":"2026-10-15","note":"Hilbert class field as the trivial-modulus ray class field, finiteness, real-place conductor convention and limits of the abelian statement."},{"id":"milne-example","label":"J. S. Milne — Algebraic Number Theory","url":"https://www.jmilne.org/math/CourseNotes/ANT.pdf","locator":"Chapter 4, Remark 4.11 and footnote 1, printed p.72","checked":"2026-10-15","note":"Canonical class-group interpretation with the condition at infinite primes made explicit."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Hilbert class field gives a Galois interpretation of ideal classes. A group originally defined by multiplying ideals becomes the automorphism group of a distinguished extension of the number field. This converts the question whether a prime ideal is principal into a question about its splitting in that extension.

This is a specific consequence of global class field theory. The full theory also treats abelian extensions with ramification, using ray class groups or idele class groups; the Hilbert class field alone does not classify those extensions.

## Prerequisites

Know finite Galois extensions, decomposition of prime ideals, ramification indices and the ordinary ideal class group. A Frobenius automorphism acts on a finite residue field by a power map. Idele groups are needed only for the proof outline, which assumes the existence and reciprocity theorems of global class field theory.

## Definition and conventions

Fix an algebraic closure of a number field $K$. Its ordinary Hilbert class field $H_K$ is the maximal abelian extension of $K$ that is unramified at every finite prime and in which every real place splits completely. Equivalently, form the compositum of all finite abelian extensions with these properties; class field theory proves that the compositum is finite.

The condition at a real place says that its extensions remain real, rather than becoming complex. Authors sometimes use “unramified” only for finite primes. Allowing real places to become complex can produce a larger class field corresponding to the narrow class group. Here the ordinary convention agrees with the existing ideal-class-group entry. [Zhang, Proposition 3.76 and its preceding paragraph](https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf) explicitly makes this distinction.

## Intuition

A principal ideal is trivial after passing to the class group. Reciprocity realizes the same triviality as an identity automorphism. The extension packages all ideal classes simultaneously, so prime splitting tests their classes without selecting generators.

“Maximal” is relative to the fixed base $K$ and to abelian extensions. Iterating Hilbert class fields changes the base at each stage. A tower can therefore continue beyond the first field, and the theorem does not say that every unramified extension of $K$ lies in $H_K$.

## Examples and non-examples

Since $\mathbb Z$ is principal, $\operatorname{Cl}(\mathbb Q)=1$ and $H_{\mathbb Q}=\mathbb Q$. Likewise, the Euclidean ring $\mathbb Z[i]$ has class number one, so $H_{\mathbb Q(i)}=\mathbb Q(i)$. An imaginary quadratic base need not have a nontrivial Hilbert class field.

By contrast, $K=\mathbb Q(\sqrt{-5})$ has class group of order two, as calculated in the ideal-class-group article. Hence $[H_K:K]=2$. The ideal $\mathfrak p=(2,1+\sqrt{-5})$ is nonprincipal and has class of order two. Its Frobenius is therefore the nonidentity automorphism, so $\mathfrak p$ remains prime in $H_K$ and has residue degree two. This concerns a prime of $K$; the rational prime $2$ already ramifies in $K/\mathbb Q$.

The abelian extension $\mathbb Q(i)/\mathbb Q$ is not a Hilbert class field extension of $\mathbb Q$: the prime $2$ ramifies, and the real place becomes complex.

## Important properties

The Hilbert class field theorem gives a canonical isomorphism

$$
\operatorname{Cl}(K)\longrightarrow\operatorname{Gal}(H_K/K),
\qquad [\mathfrak p]\longmapsto\operatorname{Frob}_{\mathfrak p}.
$$

We use arithmetic Frobenius, acting on residue fields by $x\mapsto x^{N\mathfrak p}$. Inverting all Frobenius elements gives the alternative geometric convention. Since the extension is abelian and unramified, the element does not depend on a choice of prime above $\mathfrak p$.

Consequently $[H_K:K]=h_K$, and a nonzero prime ideal splits completely exactly when it is principal. More generally, its residue degree is the order of its class. Every finite abelian extension satisfying the defining local conditions is a subfield of $H_K$.

Proof outline, assuming global class field theory: quotient the idele class group by the images of all finite local unit groups and all archimedean multiplicative groups. The quotient identifies with the ordinary ideal class group. The existence theorem supplies its finite abelian extension; local reciprocity makes finite inertia trivial and real places split. Global reciprocity identifies the quotient map with the Artin map, proving the stated isomorphism and maximality.

## Connections and further reading

Characters of the class group give ideal-character L-functions. The abelian factorization theorem expresses $\zeta_{H_K}$ as their product, joining the Galois description to analytic ideal counting. These are generally Hecke L-functions over $K$, rather than ordinary Dirichlet L-functions over $\mathbb Q$. [Sutherland, Section 22.6](https://math.mit.edu/classes/18.785/2021fa/LectureNotes22.pdf) discusses why the abelian restriction is essential.
