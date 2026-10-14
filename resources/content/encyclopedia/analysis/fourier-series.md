---
{
  "id": "fourier-series",
  "title": "Fourier Series",
  "chinese": "Fourier级数",
  "aliases": [],
  "area": "analysis",
  "topic": "harmonic-analysis",
  "level": "Undergraduate",
  "summary": "A Fourier series represents a periodic function through its coefficients against exponential frequencies.",
  "prerequisites": [
    "lebesgue-integral",
    "hilbert-space"
  ],
  "related": [
    "fourier-transform",
    "parseval-fourier-series",
    "littlewood-paley-decomposition"
  ],
  "references": [
    {
      "id": "s-analysis-notes",
      "label": "Mikko Salo — Fourier Analysis and Distribution Theory",
      "url": "https://users.jyu.fi/~salomi/lecturenotes/FA_distributions.pdf",
      "locator": "§2.1, Theorem 2.1.3; §2.2 Pointwise convergence",
      "checked": "2026-10-14",
      "note": "Definition and stated hypotheses inspected; original examples and explanatory synthesis."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A Fourier series decomposes periodic behavior into oscillations at integer frequencies. Its coefficients distinguish the contributions of those frequencies, just as coordinates distinguish components of a vector. The analogy becomes exact in the Hilbert space of square-integrable periodic functions.

Writing a formal series is not yet a convergence statement. Pointwise, uniform, and mean-square convergence have different requirements and can give different interpretations at a jump.

## Prerequisites

Know complex exponentials, integration, and orthogonality. The exponentials satisfy $e^{ikx}=\cos(kx)+i\sin(kx)$. For the mean-square theory, functions differing on a null set are identified, and an $L^2$ norm measures average squared error.

## Definition and conventions

For a $2\pi$-periodic integrable function $f$, define
$$
\widehat f(k)=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-ikx}\,dx,\qquad k\in\mathbb Z.
$$
Its Fourier series is the formal expression $\sum_{k\in\mathbb Z}\widehat f(k)e^{ikx}$, with symmetric partial sums
$$
S_Nf(x)=\sum_{|k|\le N}\widehat f(k)e^{ikx}.
$$
These choices fix the period, sign, and normalization. This article uses normalized measure $dx/(2\pi)$ for periodic $L^2$ norms. Other periods rescale the frequencies.

## Intuition

A coefficient tests how strongly the function aligns with one pure oscillation. Orthogonality prevents different integer frequencies from interfering in an average inner product. An individual graph value can nevertheless be sensitive to how many oscillations have been retained.

## Examples and non-examples

For $f(x)=2+3\cos x-\sin(2x)$, the nonzero coefficients are
$$
\widehat f(0)=2,\quad \widehat f(\pm1)=3/2,\quad
\widehat f(2)=i/2,\quad\widehat f(-2)=-i/2.
$$
Every symmetric partial sum with $N\ge2$ equals $f$ exactly.

A periodic function taking value one on $(0,\pi)$ and zero on $(-\pi,0)$ has jumps. The usual symmetric Fourier sums converge to one-half at those jumps under the piecewise smooth convergence theorem, regardless of how the function is assigned at the single endpoint. They cannot converge uniformly to this discontinuous function because every partial sum is continuous.

## Important properties

For $f\in L^2$, symmetric partial sums converge in $L^2$, and Parseval's identity states
$$
\frac1{2\pi}\int_{-\pi}^{\pi}|f|^2=\sum_{k\in\mathbb Z}|\widehat f(k)|^2.
$$
A proof first establishes density of trigonometric polynomials, using approximate identities, then applies orthogonal projection. The missing density step is what turns an orthogonal family into a complete coordinate system.

If $f$ is smooth and periodic, repeated integration by parts gives rapid coefficient decay and uniform convergence. Mere integrability is insufficient for a universal pointwise convergence claim. Averaging partial sums, as in Fejér summation, improves convergence behavior without changing the underlying coefficients.

## Connections and further reading

Fourier transforms replace discrete frequencies by continuous ones on Euclidean space. Distribution theory extends Fourier series to singular periodic objects. Littlewood–Paley methods group frequencies by size to measure regularity. [Salo, §§2.1–2.2](https://users.jyu.fi/~salomi/lecturenotes/FA_distributions.pdf) distinguishes the Hilbert-space and pointwise theories.

