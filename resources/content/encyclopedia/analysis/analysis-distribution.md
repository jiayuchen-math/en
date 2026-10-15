---
{
  "id": "analysis-distribution",
  "title": "Distribution in Analysis",
  "chinese": "分布（分析）",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A distribution is a continuous linear functional on smooth compactly supported test functions.",
  "prerequisites": [
    "lebesgue-integral"
  ],
  "related": [
    "weak-derivative",
    "tempered-distribution",
    "sobolev-space"
  ],
  "references": [
    {
      "id": "s-analysis-notes",
      "label": "Mikko Salo — Fourier Analysis and Distribution Theory",
      "url": "https://users.jyu.fi/~salomi/lecturenotes/FA_distributions.pdf",
      "locator": "§§3.6–3.7, definition of D′, equation (3.18), Examples 3.7.1–3.7.6",
      "checked": "2026-10-14",
      "note": "Definition, conventions, and basic results inspected; original explanation and examples."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Distributions extend functions by specifying how an object acts on smooth probes. They permit point sources, jumps, and derivatives of nonsmooth functions to be handled with the same linear calculus. The object is an exact mathematical functional, not a vague approximation to a function.

This extension is especially valuable when a sequence concentrates or oscillates. Its pointwise limit may lose the behavior that integration against probes still detects.

## Prerequisites

Understand smooth functions, compact support, locally integrable functions, and linear functionals. A test function is a smooth function whose support lies in a compact subset of the open domain. Compact support eliminates boundary terms in integration by parts.

## Definition and conventions

Let $\Omega\subseteq\mathbb R^n$ be open and $\mathcal D(\Omega)=C_c^\infty(\Omega)$. A distribution is a continuous linear functional $T:\mathcal D(\Omega)\to\mathbb C$. Concretely, for every compact $K\subset\Omega$, there exist $C_K$ and a nonnegative integer $m_K$ such that
$$
|T(\varphi)|\le C_K\sum_{|\alpha|\le m_K}\sup_K|\partial^\alpha\varphi|
$$
for tests supported in $K$. The space is denoted $\mathcal D'(\Omega)$. Pairing here is linear, without inserting complex conjugation.

Its derivative is defined by
$$
(\partial_jT)(\varphi)=-T(\partial_j\varphi).
$$

## Intuition

A probe summarizes behavior in a small region instead of demanding a value at each point. Smoothness of the probes controls how rapidly that summary can change. The continuity estimate prevents arbitrary algebraic functionals from masquerading as distributions.

## Examples and non-examples

A locally integrable function $f$ defines $T_f(\varphi)=\int f\varphi$. The Dirac distribution at $a$ acts by $\delta_a(\varphi)=\varphi(a)$.

For the step function $H=\mathbf1_{(0,\infty)}$ on $\mathbb R$,
$$
H'(\varphi)=-\int_0^\infty\varphi'(x)\,dx=\varphi(0),
$$
so $H'=\delta_0$. Differentiating $H$ pointwise away from zero gives zero and misses this term.

Dirac evaluation is not integration against a locally integrable function. If such a function represented it, tests supported away from $a$ would force that function to vanish almost everywhere away from $a$, hence almost everywhere altogether; its functional would then be zero.

## Important properties

Every distribution has derivatives of every order, and differentiation is continuous for convergence against all test functions. Multiplication by a smooth function is defined by $(gT)(\varphi)=T(g\varphi)$. Multiplication of arbitrary distributions has no general canonical definition: expressions such as $\delta_0^2$ require extra structure.

A distribution need not have one finite derivative order valid across an unbounded domain; the estimate's order may depend on the compact set. Locally integrable representatives determine the same distribution exactly when they agree almost everywhere.

## Connections and further reading

Weak derivatives are distributional derivatives represented by locally integrable functions. Tempered distributions impose a different continuity condition using rapidly decreasing probes and support Fourier transformation. [Salo, §§3.6–3.7](https://users.jyu.fi/~salomi/lecturenotes/FA_distributions.pdf) specifies the topology, local estimate, and derivative convention used here.

