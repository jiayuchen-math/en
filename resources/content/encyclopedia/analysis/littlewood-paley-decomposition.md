---
{
  "id": "littlewood-paley-decomposition",
  "title": "Littlewood–Paley Decomposition",
  "chinese": "Littlewood-Paley分解",
  "aliases": [],
  "area": "analysis",
  "topic": "harmonic-analysis",
  "level": "Research",
  "summary": "Littlewood–Paley decomposition separates a distribution into smooth frequency bands to measure scale-dependent regularity.",
  "prerequisites": [
    "fourier-transform",
    "tempered-distribution",
    "lp-space"
  ],
  "related": [
    "sobolev-space",
    "wavefront-set"
  ],
  "references": [
    {
      "id": "b-analysis-notes",
      "label": "Mikko Salo — Function Spaces",
      "url": "https://users.jyu.fi/~salomi/lecturenotes/fsp08_lectures.pdf",
      "locator": "§3.3, Littlewood–Paley partition of unity, dyadic pieces, and Theorem 3; §3.4",
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

Littlewood–Paley decomposition groups Fourier frequencies into bands whose sizes grow geometrically. It provides a language for smoothness at different scales and a practical way to estimate functions outside the special Hilbert-space setting of $L^2$. Its research uses include nonlinear estimates and refined spaces such as Besov and Triebel–Lizorkin spaces.

The decomposition depends on chosen smooth cutoffs. The resulting pieces are not unique, but carefully constructed choices yield equivalent norms.

## Prerequisites

Know Fourier transforms, tempered distributions, $L^p$ norms, and convolution. Multiplication by a smooth frequency cutoff corresponds to convolution with a rapidly decreasing kernel. Orthogonality and Plancherel explain the square-function idea at exponent two.

## Definition and conventions

Choose a smooth compactly supported radial function $\chi$, equal to one near zero. Arrange its support and plateau so that
$$
\rho_0(\xi)=\chi(\xi),\qquad
\rho_j(\xi)=\chi(2^{-j}\xi)-\chi(2^{-j+1}\xi),\quad j\ge1
$$
form a smooth partition of unity. For $u\in\mathcal S'(\mathbb R^n)$ set
$$
\Delta_j u=\mathcal F^{-1}(\rho_j\widehat u).
$$
Then $u=\sum_{j\ge0}\Delta_j u$ in the tempered-distribution sense. This is an inhomogeneous convention: the low-frequency block is retained. Salo also uses a squared partition for an exact $L^2$ square-function identity; it gives equivalent estimates to the sum-partition convention here.

## Intuition

A band near frequency $2^j$ resolves spatial features near scale $2^{-j}$. Differentiation costs roughly a factor $2^j$ within that band. Separating the scales makes such costs visible and lets one compare roughness by weighting the bands.

## Examples and non-examples

On $\mathbb R$, $u(x)=e^{i\lambda x}$ is a tempered distribution. Since its Fourier transform is concentrated at $\lambda$,
$$
\Delta_j u=\rho_j(\lambda)e^{i\lambda x}.
$$
For large $|\lambda|$, only a bounded number of bands near $2^j\approx|\lambda|$ contribute. This is an exact calculation, though the exponential is not in $L^p(\mathbb R)$ for finite $p$.

A constant is captured by the low-frequency block. If that block is simply discarded, an inhomogeneous norm no longer measures constants. A homogeneous construction can be useful, but it requires its own treatment of zero frequency and polynomial ambiguity.

## Important properties

For $1<p<\infty$, a suitable square function satisfies
$$
\|f\|_p\asymp
\left\|\left(\sum_{j\ge0}|\Delta_j f|^2\right)^{1/2}\right\|_p.
$$
The constants depend on the cutoff system and exponent, not on $f$. At $p=2$, Plancherel and bounded frequency overlap prove comparability directly. For the squared partition in Salo, the identity is exact. Other exponents need singular-integral estimates and interpolation, not just orthogonality. Endpoint estimates require changed spaces or weaker conclusions.

Weighting blocks by $2^{js}$ measures smoothness. Summing their $L^p$ sizes in an $\ell^q$ norm leads to Besov spaces; putting the sequence norm inside the spatial norm leads to Triebel–Lizorkin spaces.

## Connections and further reading

Frequency-band methods complement wavefront sets: bands record size, while cones additionally record direction. Fractional Sobolev regularity and nonlinear product estimates are natural continuations. [Salo, §§3.3–3.4](https://users.jyu.fi/~salomi/lecturenotes/fsp08_lectures.pdf) states the inspected square-function results and explains which proofs are omitted.

