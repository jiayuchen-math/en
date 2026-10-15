---
{
  "id": "hahn-banach-theorem",
  "title": "Hahn–Banach Extension Theorem",
  "chinese": "Hahn-Banach定理",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A bounded scalar linear functional on a subspace of a normed space extends to the whole space without increasing its norm.",
  "prerequisites": ["normed-vector-space", "continuous-dual-space", "bounded-linear-operator"],
  "related": ["banach-space", "hilbert-space", "weak-convergence-normed-space"],
  "references": [{"id":"erdman-hahn-banach","label":"John M. Erdman — Functional Analysis and Operator Algebras: An Introduction","url":"https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf","locator":"§3.8, Theorems 3.8.3–3.8.5 and proof hints; Theorem 3.8.7; Corollaries 3.8.10–3.8.11; Proposition 3.8.13","checked":"2026-10-15","note":"Real and complex extension, one-dimensional extension argument, norm preservation and separating functionals inspected."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

The Hahn–Banach extension theorem says that a bounded scalar linear measurement defined on part of a normed vector space can be continued to the whole space at no additional norm cost. It explains why continuous dual spaces contain enough functionals to detect vectors and recover their norms.

There are several related theorems under the same name, including domination and geometric separation forms. The main statement here is the norm-preserving extension form for real or complex normed spaces. Completeness of the space and closedness of the initial subspace are unnecessary.

## Prerequisites

Know normed spaces, linear subspaces, and the continuous dual $X^*$. For a bounded functional $f:M\to\mathbb F$, where $\mathbb F=\mathbb R$ or $\mathbb C$, its norm is $\sup_{\|m\|\le1}|f(m)|$, with the norm inherited from $X$. Boundedness is equivalent to continuity for linear maps. The zero functional on the zero subspace has norm zero.

## Definition and conventions

Let $M$ be any linear subspace of a normed space $X$ over $\mathbb F$, and let $f\in M^*$. There exists $F\in X^*$ such that
$$
F|_M=f,\qquad \|F\|_{X^*}=\|f\|_{M^*}.
$$
The extension respects the chosen scalar field; in a complex space it is complex-linear. The theorem asserts existence, not uniqueness or a canonical extension rule. It concerns scalar-valued functionals and does not assert the same norm-preserving extension property for arbitrary maps into Banach spaces.

An underlying real version states that if $p:X\to\mathbb R$ is sublinear and $f\le p$ on $M$, then a real linear extension exists with $F\le p$ on $X$. Sublinear means subadditive and positively homogeneous. Taking $p(x)=\|f\|\|x\|$ produces the norm form.

## Intuition

The norm bound constrains the new value assigned when one extra direction is added. Subadditivity ensures that all resulting upper and lower constraints are compatible. The surprising part is that this compatibility persists across the whole vector space, even without an inner product or orthogonal projection.

## Examples and non-examples

In Euclidean $\mathbb R^2$, take $M=\{(x,0)\}$ and $f(x,0)=2x$. The extension $F(x,y)=2x$ has norm two because $|2x|\le2\sqrt{x^2+y^2}$, with equality on the horizontal axis.

Nonuniqueness appears with the $\ell^1$ norm on $\mathbb R^2$. For $f(x,0)=x$, every functional $F_a(x,y)=x+ay$ with $|a|\le1$ has norm $\max(1,|a|)=1$, so all preserve the original norm. On the other hand, $F_2(x,y)=x+2y$ also extends $f$ algebraically but has norm two. An arbitrary algebraic extension need not meet the theorem's estimate.

A norming functional for $x_0\ne0$ is obtained by first setting $f(\alpha x_0)=\alpha\|x_0\|$ on its one-dimensional span. This has norm one; extension gives $F(x_0)=\|x_0\|$ and $\|F\|=1$.

## Important properties

A proof sketch for the real domination form extends to $M+\mathbb Rz$ by assigning $F(z)=c$. The inequalities $F(m+tz)\le p(m+tz)$ give an interval of allowable $c$ values; subadditivity makes the lower endpoint no larger than the upper endpoint. Order all dominated extensions by inclusion. Unions provide upper bounds for chains, and Zorn's lemma produces a maximal extension. The one-direction argument forces its domain to be all of $X$.

For the complex norm form, extend the real part $u=\operatorname{Re}f$ on the underlying real space and reconstruct $F(x)=U(x)-iU(ix)$. A phase rotation proves the required absolute-value bound.

Norming functionals yield
$$
\|x\|=\sup_{\|F\|\le1}|F(x)|.
$$
Functionals also separate a point from a closed subspace: for $x\notin M$ with $M$ closed, there is a norm-one functional vanishing on $M$ and taking value $\operatorname{dist}(x,M)>0$ at $x$. Closedness matters here because it makes that distance positive.

## Connections and further reading

These consequences make weak convergence a meaningful test of vectors and embed every normed space isometrically into its bidual. Hilbert-space geometry supplies special explicit extensions through orthogonal projections, while Hahn–Banach works in general normed spaces. [Erdman, §3.8](https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf) develops the extension and separation forms.
