---
{
  "id": "sobolev-space",
  "title": "Sobolev Space",
  "chinese": "Sobolev空间",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A Sobolev space controls a function and its weak derivatives in specified Lebesgue norms.",
  "prerequisites": [
    "lp-space",
    "weak-derivative",
    "analysis-distribution"
  ],
  "related": [
    "weak-pde-solution",
    "sobolev-trace",
    "littlewood-paley-decomposition"
  ],
  "references": [
    {
      "id": "p-analysis-notes",
      "label": "John K. Hunter — Notes on Partial Differential Equations",
      "url": "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf",
      "locator": "§§3.1–3.2 and 3.5–3.10, Definition 3.23",
      "checked": "2026-10-14",
      "note": "Inspected definitions and scoped theorem statements; original formulation, examples, and proof explanations."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Sobolev spaces describe smoothness through integrability of weak derivatives. They include functions with corners and other defects that prevent classical differentiation, while retaining enough derivative information for energy estimates. This makes them central to modern analysis and partial differential equations.

The parameters record two independent choices: how many derivatives are controlled and how strongly their size is measured. Domain geometry becomes important when regularity is converted into continuity or boundary values.

## Prerequisites

Know $L^p$ spaces, locally integrable functions, and distributions. For an open $\Omega\subseteq\mathbb R^n$, $g$ is the weak derivative $\partial_j u$ if
$$
\int_\Omega u\,\partial_j\varphi\,dx=-\int_\Omega g\varphi\,dx
$$
for every $\varphi\in C_c^\infty(\Omega)$. Both $u$ and $g$ are locally integrable.

## Definition and conventions

For a nonnegative integer $k$ and $1\le p\le\infty$, $W^{k,p}(\Omega)$ consists of $L^p$ classes whose weak derivatives $\partial^\alpha u$ belong to $L^p$ for all $|\alpha|\le k$. For finite $p$, one norm is
$$
\|u\|_{W^{k,p}}=\left(\sum_{|\alpha|\le k}\|\partial^\alpha u\|_p^p\right)^{1/p}.
$$
For $p=\infty$, use the sum of the derivative essential-supremum norms. Write $H^k=W^{k,2}$. The space $W^{1,p}_0$ is the closure of compactly supported smooth functions in $W^{1,p}$; identifying it with zero trace requires a suitable trace theorem.

## Intuition

A weak derivative tests variation after averaging against smooth probes. The norm then quantifies how much variation is present. This permits local irregularities that cost finite energy, while excluding defects such as jumps whose derivative is a point mass rather than an integrable function.

## Examples and non-examples

On $(-1,1)$, $u(x)=|x|$ has weak derivative $\operatorname{sgn}(x)$. Splitting the test-function integral at zero and integrating by parts gives this result, with canceling boundary terms because $u$ is continuous. Thus $u\in W^{1,p}$ for every $1\le p\le\infty$, despite lacking a classical derivative at zero.

Its second distributional derivative is $2\delta_0$, so it does not belong to $W^{2,p}$ for these exponents. A step function is not even in $W^{1,p}$ on an interval containing its jump: its first derivative is Dirac mass. Membership is not established merely by differentiating away from the exceptional point.

## Important properties

Sobolev spaces are Banach, and $H^k$ is Hilbert. For completeness, take limits of a Cauchy sequence's derivative components in $L^p$ and pass to the defining integration identities; the limits remain weak derivatives of the limiting function.

Embedding theorems translate derivative integrability into improved integrability or continuity. For example, when $p>n$, first-order Sobolev control gives local Hölder representatives, with global versions needing domain assumptions. Trace and compact embedding theorems likewise require explicit geometric and exponent conditions; they are not consequences of notation alone.

## Connections and further reading

Fractional Sobolev spaces admit noninteger smoothness, but several nonequivalent constructions exist when $p\ne2$. Weak solutions use Sobolev membership to make differential identities meaningful. [Hunter, Chapter 3](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) develops the weak-derivative definition, examples, embeddings, and traces.

