---
{
  "id": "spectral-theorem-compact-self-adjoint",
  "title": "Spectral Theorem for Compact Self-Adjoint Operators",
  "chinese": "紧自伴算子的谱定理",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A compact self-adjoint operator on a separable Hilbert space has an orthonormal eigenbasis, with nonzero eigenvalues of finite multiplicity accumulating only at zero.",
  "prerequisites": ["hilbert-space", "compact-linear-operator", "bounded-linear-operator"],
  "related": ["fourier-series", "weak-pde-solution", "sobolev-space", "linear-operator-norm"],
  "references": [{"id":"hunter-compact-spectral","label":"John K. Hunter — Notes on Partial Differential Equations","url":"https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf","locator":"Appendix 4.B.1, Theorem 4.37; §4.10, Theorem 4.25 and preceding resolvent discussion","checked":"2026-10-15","note":"Eigenbasis including the kernel, finite nonzero multiplicities, and the elliptic resolvent application inspected."},{"id":"mit-compact-spectral","label":"MIT OpenCourseWare — 18.102 Spring 2021, Complete Lecture Notes","url":"https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf","locator":"Lecture 22 (May 11), Theorems 228, 231–232 and proofs, printed pp.114–118","checked":"2026-10-15","note":"Separable formulation, maximum principle, recursive eigenvector construction and norm remainder estimate inspected."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

The compact self-adjoint spectral theorem extends orthogonal diagonalization of real symmetric or complex Hermitian matrices. It replaces a matrix's finite list of orthogonal eigenvectors by a possibly infinite orthonormal family, with convergence understood in the Hilbert norm.

The qualifications matter. Compactness controls the size and multiplicity of nonzero spectral values; self-adjointness gives real eigenvalues and orthogonality. The theorem here is not the general spectral theorem for arbitrary bounded or unbounded self-adjoint operators, which can involve continuous spectrum and spectral measures.

## Prerequisites

Know Hilbert spaces, orthonormal expansions, and compact operators. Take the inner product linear in its first argument. A bounded operator is self-adjoint when $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$. An eigenvector is nonzero, and its eigenvalue satisfies $Te=\lambda e$. The spectrum uses failure of a bounded inverse, a condition broader than existence of an eigenvector.

## Definition and conventions

Let $H$ be a real or complex separable Hilbert space and $T:H\to H$ compact and self-adjoint. There is an orthonormal basis consisting of eigenvectors. Write $(e_j)$ for those with nonzero eigenvalues $(\lambda_j)$, repeated according to multiplicity, and let $P_0$ be the orthogonal projection onto $\ker T$. Then
$$
x=P_0x+\sum_j\langle x,e_j\rangle e_j,
\qquad
Tx=\sum_j\lambda_j\langle x,e_j\rangle e_j.
$$
Both sums converge in norm. The nonzero eigenvalues are real and have finite-dimensional eigenspaces. If there are infinitely many, $\lambda_j\to0$. The list may also be finite or empty. The kernel can be infinite-dimensional, so its basis must be included to obtain a basis of all of $H$.

## Intuition

The operator stretches mutually perpendicular directions independently. Compactness forces the stretches on infinitely many orthogonal directions to become small: otherwise their images would remain separated and could not contain a convergent subsequence. Directions in the kernel are stretched by zero and may account for a large part of the space.

## Examples and non-examples

On $\ell^2$, the map $(Tx)_n=x_n/(n+1)$ has eigenvectors $e_n$ and eigenvalues $1/(n+1)$. Its kernel is zero, and the coordinate basis is already the required eigenbasis. Ordering by decreasing eigenvalue magnitude, truncation after $N$ terms has operator-norm error $1/(N+2)$.

Zero is nevertheless a spectral value: the formal inverse would multiply coordinate $n$ by $n+1$, which is unbounded. It is not an eigenvalue in this example. This separates a spectral limit point from an actual kernel vector.

Multiplication by $x$ on $L^2(0,1)$ is bounded and self-adjoint but has no nonzero eigenvectors: $(x-\lambda)f(x)=0$ forces $f$ to be supported on a measure-zero singleton. It is not compact. Conversely, a finite-rank operator need not be diagonalizable: a nonzero two-dimensional nilpotent Jordan block is compact but not self-adjoint.

## Important properties

A proof sketch starts by finding an eigenvector for a nonzero eigenvalue of maximal absolute value. Compactness supplies the limiting vector needed in the extremal argument. The orthogonal complement of that eigenvector is invariant under $T$ by self-adjointness, so the construction can be repeated there.

If the process continues indefinitely, compactness forces the selected eigenvalues to tend to zero. The norm of the remaining restriction tends to zero; otherwise another nontrivial extremal direction remains. This proves completeness after adding the kernel. Likewise, an infinite orthonormal family in a nonzero eigenspace would have images separated by $\sqrt2|\lambda|$, contradicting compactness.

For an infinite list ordered by $|\lambda_1|\ge|\lambda_2|\ge\cdots$, the spectral truncation satisfies
$$
\left\|T-\sum_{j=1}^N\lambda_j\langle\,\cdot\,,e_j\rangle e_j\right\|
=|\lambda_{N+1}|.
$$
This is a uniform approximation over the unit ball, stronger than convergence for each fixed input. For a finite list, retaining all nonzero eigenvalues gives the operator exactly.

## Connections and further reading

On a bounded smooth domain, apply this theorem to the compact, self-adjoint inverse of the positive Dirichlet Laplacian on $L^2$. Eigenvalues of the inverse tending to zero correspond to Laplacian eigenvalues tending to infinity; the differential operator itself is unbounded. [Hunter, §4.10](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) explains this bridge to PDEs, while [MIT, Lecture 22](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf) develops the proof mechanism.
