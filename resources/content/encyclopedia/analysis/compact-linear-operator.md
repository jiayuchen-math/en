---
{
  "id": "compact-linear-operator",
  "title": "Compact Linear Operator",
  "chinese": "紧算子",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A compact linear operator sends bounded sets to sets with compact closure, allowing subsequence arguments in infinite-dimensional problems.",
  "prerequisites": ["banach-space", "bounded-linear-operator", "topological-compactness"],
  "related": ["linear-operator-norm", "weak-convergence-normed-space", "hilbert-space", "spectral-theorem-compact-self-adjoint", "weak-pde-solution"],
  "references": [{"id":"erdman-compact-operators","label":"John M. Erdman — Functional Analysis and Operator Algebras: An Introduction","url":"https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf","locator":"§7.1, Definition 7.1.12, Propositions 7.1.13–7.1.14, Examples 7.1.17–7.1.18 and 7.1.21, Corollary 7.1.20","checked":"2026-10-15","note":"Relative compactness, sequence criterion, integral examples, closed ideal property and noncompact identity inspected."},{"id":"hunter-compact-resolvent","label":"John K. Hunter — Notes on Partial Differential Equations","url":"https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf","locator":"§4.8, Theorem 4.23 and proof; Appendix 4.B.1, Example 4.36","checked":"2026-10-15","note":"Compactness from an energy estimate followed by compact embedding; diagonal example inspected."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

Compact operators recover a useful part of finite-dimensional behavior inside infinite-dimensional spaces. Their inputs may range over a bounded family with no convergent subsequence, yet their outputs always admit one. This extra control underlies existence arguments, integral equations, and the discrete spectral description of compact self-adjoint operators.

Compactness concerns the operator together with its domain and codomain norms. The same formula can behave differently when the function spaces change, so a statement that an operator is compact must name those spaces.

## Prerequisites

Know Banach spaces, bounded linear maps, and norm convergence. A set is relatively compact when its closure is compact. In metric spaces this can be checked using sequences. In a complete metric space, total boundedness is equivalent to relative compactness; total boundedness means that finitely many balls of any prescribed positive radius cover the set.

## Definition and conventions

For Banach spaces $X,Y$, a linear map $T:X\to Y$ is compact if $T(B)$ has compact closure in $Y$ for every bounded $B\subseteq X$. It suffices to test the closed unit ball $B_X$.

Equivalently, every bounded sequence $(x_m)$ in $X$ has a subsequence $(x_{m_k})$ for which $Tx_{m_k}$ converges in the norm of $Y$. The inputs themselves need not converge. Since relatively compact sets are bounded, this definition implies that $T$ is a bounded operator. The image $T(B_X)$ need not be closed for general Banach domain spaces.

## Intuition

A compact operator makes its unit-ball image approximable, at each resolution, by finitely many output points. This does not say that its range is finite-dimensional. Instead, infinitely many directions may survive while their effects become progressively smaller. The shrinking diagonal operator below makes that distinction concrete.

## Examples and non-examples

On $\ell^2$, indexed by $n\ge1$, set $(Tx)_n=x_n/(n+1)$. Let $T_N$ retain only the first $N$ output coordinates. Then $T_N$ has finite rank and
$$
\|T-T_N\|=\sup_{n>N}\frac1{n+1}=\frac1{N+2}.
$$
The upper bound follows by summing squared coordinates; equality follows by using $x=e_{N+1}$. Therefore $T$ is compact as an operator-norm limit of compact operators, although its range contains every finitely supported sequence and has infinite dimension.

The identity on an infinite-dimensional Hilbert space is bounded but not compact: an orthonormal sequence is bounded and its distinct terms stay distance $\sqrt2$ apart. It has no norm-convergent subsequence.

For a continuous kernel $k$ on $[0,1]^2$, the operator $Kf(x)=\int_0^1k(x,y)f(y)\,dy$ is compact from $C[0,1]$ to itself. Bounded inputs produce uniformly bounded, equicontinuous outputs, so Arzelà–Ascoli applies. Continuity of the kernel is a sufficient hypothesis in this example, not part of the definition of compactness.

## Important properties

Every bounded finite-rank operator is compact. Operator-norm limits of compact maps into a Banach space are compact as well. For a proof sketch, approximate the image of the unit ball uniformly by a compact operator's image, cover that image by finitely many small balls, and obtain total boundedness. Completeness of the codomain then gives compact closure.

Composing a compact map on either side with compatible bounded linear maps preserves compactness. Bounded maps preserve bounded sets, and continuous maps preserve compact sets, which explains the two compositions.

If $x_m$ converges weakly to $x$, a compact operator satisfies $Tx_m\to Tx$ in norm. Weakly convergent sequences are bounded. Any norm-convergent subsequence of their images must have limit $Tx$, since bounded linear functionals distinguish points. A subsequence staying a fixed distance from $Tx$ would contradict compactness.

## Connections and further reading

For the zero-Dirichlet Laplacian on a bounded smooth domain, the solution operator maps $L^2$ boundedly into $H^1_0$; the compact inclusion back into $L^2$ makes it compact. This connects weak PDE solutions with spectral theory. [Hunter, §4.8](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) gives this mechanism for elliptic resolvents; [Erdman, §7.1](https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf) develops the operator framework.
