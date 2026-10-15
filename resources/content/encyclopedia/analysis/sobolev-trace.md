---
{
  "id": "sobolev-trace",
  "title": "Sobolev Trace",
  "chinese": "Sobolev函数的迹",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A Sobolev trace assigns boundary values by continuously extending restriction from smooth functions.",
  "prerequisites": ["sobolev-space", "weak-derivative", "lp-space"],
  "related": ["weak-pde-solution", "bounded-linear-operator", "hilbert-space"],
  "references": [{"id":"hunter-sobolev-trace","label":"John K. Hunter — Notes on Partial Differential Equations","url":"https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf","locator":"§3.9, Definition 3.43, Theorem 3.44 and proof, printed pp.71–73; §3.11, boundary flattening and partition-of-unity discussion","checked":"2026-10-15","note":"First-order half-space trace bound, zero-trace characterization and transfer to smooth bounded domains inspected; higher-order zero boundary data require more traces."},{"id":"cheng-zhao-trace","label":"程代展、赵寅 — 系统与控制中的近代数学基础（第2版），清华大学出版社预览","url":"https://www.tup.tsinghua.edu.cn/upload/books/yz/047803-01.pdf","locator":"§3.9, 定理3.9.1（迹定理）, printed p.134","checked":"2026-10-15","note":"Chinese boundary-trace usage and Hm trace theorem inspected; m=1 gives the H1 to H1/2 boundary formulation."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A Sobolev trace supplies boundary values for functions whose regularity is measured by integrals rather than pointwise smoothness. It is what makes a Dirichlet condition meaningful for an energy solution of a PDE.

An $L^p$ equivalence class records values only up to sets of volume zero, while a smooth boundary itself has volume zero. Arbitrarily assigning values on that boundary therefore cannot define a boundary operator on equivalence classes. The trace is instead determined by interior Sobolev regularity and approximation.

## Prerequisites

Know $W^{1,p}(\Omega)$ and weak derivatives. For $1\le p<\infty$, $W^{1,p}_0(\Omega)$ denotes the closure of $C_c^\infty(\Omega)$ in the Sobolev norm. That definition makes sense on any open set. Its identification with functions having zero boundary trace requires a theorem and suitable domain geometry.

## Definition and conventions

For this article, let $\Omega\subseteq\mathbb R^n$ be a bounded domain with smooth boundary and $1\le p<\infty$. The first-order trace is the unique bounded linear map
$$
T:W^{1,p}(\Omega)\longrightarrow L^p(\partial\Omega,dS)
$$
agreeing with ordinary boundary restriction for smooth functions on $\overline\Omega$. There is a constant $C=C(\Omega,p)$ such that
$$
\|Tu\|_{L^p(\partial\Omega)}\le C\|u\|_{W^{1,p}(\Omega)}.
$$
If smooth $u_m\to u$ in $W^{1,p}$, then their boundary restrictions converge to $Tu$ in boundary $L^p$. The estimate makes that limit independent of the approximating sequence. Surface measure $dS$ is different from volume measure $dx$. On an interval, boundary data are the two endpoint values, measured with counting measure.

## Intuition

Derivative control couples nearby interior layers, preventing them from carrying unrelated boundary values at small Sobolev cost. The trace estimate formalizes that coupling. It does not generally assert a pointwise boundary limit at every boundary point. The output is itself an equivalence class on the boundary.

## Examples and non-examples

On $(0,1)$, a $W^{1,p}$ function has an absolutely continuous representative, and its trace is $(u(0),u(1))$. For $u(x)=x(1-x)$, both entries are zero, so $u\in W^{1,p}_0(0,1)$. For $v(x)=1$, the trace is $(1,1)$, and $v$ is not in that zero-boundary space.

Endpoint evaluation is not bounded in the $L^2(0,1)$ norm alone. Take $w_m(x)=\max(1-mx,0)$. Then $w_m(0)=1$ while
$$
\|w_m\|_2^2=\int_0^{1/m}(1-mx)^2\,dx=\frac1{3m}\longrightarrow0.
$$
Its derivative has squared $L^2$ norm $m$, so the sequence does not tend to zero in $H^1$. This calculation pinpoints why the derivative term is essential to trace continuity.

## Important properties

For a proof sketch, begin with a smooth compactly supported function on the closed upper half-space. Integrating along the inward normal gives, for $p>1$,
$$
|u(x',0)|^p\le p\int_0^\infty |u(x',t)|^{p-1}|\partial_nu(x',t)|\,dt.
$$
Integrate in $x'$, apply Hölder's inequality, and bound by the Sobolev norm. For $p=1$, use the fundamental theorem of calculus and the integral of $|\partial_nu|$. Density extends the boundary restriction operator. Boundary charts and a partition of unity transfer the estimate to a smooth bounded domain.

Under these hypotheses, $\ker T=W^{1,p}_0(\Omega)$. One inclusion follows by continuity from compactly supported smooth approximation. For the converse, zero trace permits cutoff and smoothing constructions that remove a boundary layer with vanishing Sobolev error.

In the Hilbert case, the natural trace range is $H^{1/2}(\partial\Omega)$, and $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ is onto. Thus the $L^2$ target above is a convenient weaker description, not a claim that all $L^2$ boundary data arise from $H^1$ functions. For higher-order Sobolev spaces, zero function trace alone is insufficient to characterize $W^{k,p}_0$; derivative traces must also be considered.

## Connections and further reading

Zero trace defines homogeneous Dirichlet data in weak elliptic problems. Nonzero data can be handled by choosing a Sobolev extension and subtracting it before solving a zero-boundary problem. [Hunter, §3.9](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) develops the first-order construction; [程代展、赵寅, §3.9](https://www.tup.tsinghua.edu.cn/upload/books/yz/047803-01.pdf) describes the Hilbert-space trace range.
