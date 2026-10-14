---
{"id":"diagonalizable-linear-map","title":"Diagonalizable Linear Map","chinese":"可对角化线性映射","aliases":[],"area":"algebra","topic":"linear-algebra","level":"Undergraduate","summary":"An endomorphism of a finite-dimensional vector space is diagonalizable when the space has a basis of eigenvectors.","prerequisites":["linear-map","vector-basis"],"related":["eigenvalue-linear-map","characteristic-polynomial-linear-map"],"references":[{"id":"hefferon-la","label":"Jim Hefferon — Linear Algebra, fourth edition","url":"https://jheffero.w3.uvm.edu/linearalgebra/book.pdf","checked":"2026-10-14","locator":"Chapter Five, II.1 Definition and Examples and II.2 Diagonalizability","note":"Definitions and principal structural statements; calculations and explanatory prose are original."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Diagonalization replaces a linear transformation with independent scalar multiplications along basis directions. It simplifies repeated application, polynomial expressions in an operator, and linear recurrences. It is a property over a specified field, and the presence of eigenvalues alone does not guarantee it.

## Prerequisites

Use finite-dimensional vector spaces, bases, and linear endomorphisms. A nonzero vector $v$ is an eigenvector of $T$ with eigenvalue $\lambda$ when $Tv=\lambda v$. The zero vector is excluded from this definition because it satisfies the equation for every scalar.

## Definition and conventions

An endomorphism $T:V\to V$ of a finite-dimensional $F$-vector space is diagonalizable over $F$ if some $F$-basis consists of eigenvectors. In matrix language, its matrix $A$ satisfies
$$
P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$
for some invertible matrix $P$ with entries in $F$. The columns of $P$ are the eigenvectors in the original coordinates. Similarity, rather than arbitrary row reduction, is the relevant change of matrix.

## Intuition

Eigenvectors identify directions preserved by the operator. A complete eigenbasis lets each vector be split into independently evolving components. Distinct eigenvalues supply independent directions, but a repeated eigenvalue can have too few eigenvectors to fill the space.

## Examples and non-examples

Take
$$
A=\begin{pmatrix}2&1\\0&3\end{pmatrix}.
$$
Vectors $(1,0)$ and $(1,1)$ have eigenvalues $2$ and $3$. With $P$ formed from these columns, $P^{-1}AP=\operatorname{diag}(2,3)$, so $A^m=P\operatorname{diag}(2^m,3^m)P^{-1}$ for nonnegative integers $m$.

The matrix
$$
J=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$
is not diagonalizable over any field: its eigenspace for $1$ has dimension one although its characteristic polynomial is $(x-1)^2$. By contrast the identity matrix has the same characteristic polynomial and is diagonalizable. Repeated roots therefore do not decide the issue.

Rotation by a right angle on $\mathbb R^2$ has characteristic polynomial $x^2+1$. It is not diagonalizable over $\mathbb R$, but becomes diagonalizable over $\mathbb C$.

## Important properties

Eigenvectors for distinct eigenvalues are linearly independent. One proof applies $T-\lambda I$ to a shortest supposed dependence, reducing its length and obtaining a contradiction.

More generally, $T$ is diagonalizable exactly when its minimal polynomial is a product of distinct linear factors over $F$. Both splitting and absence of repeated factors matter. A self-adjoint real operator on a finite-dimensional inner product space is diagonalizable with an orthonormal eigenbasis, but arbitrary real operators do not satisfy this spectral theorem.

## Connections and further reading

Diagonalization is the simplest case of decomposing a space as a module over $F[x]$, where $x$ acts by $T$. Jordan form describes failures when the characteristic polynomial splits. Read [Hefferon, Chapter Five, Section II](https://jheffero.w3.uvm.edu/linearalgebra/book.pdf) for the eigenvalue definitions and diagonalizability criterion.

