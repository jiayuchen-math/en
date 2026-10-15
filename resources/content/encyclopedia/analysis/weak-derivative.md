---
{
  "id": "weak-derivative",
  "title": "Weak Derivative",
  "chinese": "弱导数",
  "aliases": [],
  "area": "analysis",
  "topic": "differential-equations",
  "level": "Graduate",
  "summary": "A weak derivative is a locally integrable function representing differentiation through integration against smooth test functions.",
  "prerequisites": ["lebesgue-integral", "real-derivative", "analysis-distribution"],
  "related": ["sobolev-space", "sobolev-trace", "weak-pde-solution", "fourier-transform"],
  "references": [{"id":"hunter-weak-derivatives","label":"John K. Hunter — Notes on Partial Differential Equations","url":"https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf","locator":"§3.1, Definitions 3.1–3.2; §3.2, Examples 3.3–3.4; §3.3, regular distribution interpretation; §3.4, Propositions 3.16–3.17","checked":"2026-10-15","note":"Definition, corner and jump examples, distinction from a.e. derivatives, product rule and commutation inspected."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

Weak differentiation extends classical differentiation by preserving its integration-by-parts identity. The derivative need not exist pointwise everywhere, but must be represented by a locally integrable function. This allows corners while still detecting jumps and other singular variation that pointwise differentiation away from exceptional sets can miss.

The definition supplies the derivative notion used in integer-order Sobolev spaces. It also explains why weak solutions of partial differential equations can satisfy useful identities even when their second classical derivatives do not exist.

## Prerequisites

Know local integrability and smooth compactly supported test functions. A function belongs to $L^1_{\mathrm{loc}}(\Omega)$ when it is integrable on every compact subset of the open set $\Omega$. A test function $\varphi\in C_c^\infty(\Omega)$ vanishes near the boundary, so integration by parts introduces no boundary term. Distributions provide the wider setting in which every derivative exists.

## Definition and conventions

Let $\Omega\subseteq\mathbb R^n$ be open and $u,v\in L^1_{\mathrm{loc}}(\Omega)$. We call $v$ the $j$th weak derivative of $u$ when
$$
\int_\Omega u\,\partial_j\varphi\,dx
=-\int_\Omega v\varphi\,dx
\quad\text{for every }\varphi\in C_c^\infty(\Omega).
$$
Write $v=\partial_j u$. For a multi-index $\alpha$, the corresponding identity is
$$
\int_\Omega (\partial^\alpha u)\varphi\,dx
=(-1)^{|\alpha|}\int_\Omega u\,\partial^\alpha\varphi\,dx.
$$
Weak derivatives are unique almost everywhere. This article reserves the name for locally integrable representatives; a general distributional derivative may instead be a measure or a more singular distribution. Test pairings here use ordinary products without complex conjugation.

## Intuition

Moving the derivative onto a smooth probe replaces a small-scale difference quotient by an averaged identity. The identity still examines every probe, so it contains more information than a derivative calculated at almost every point. A missing jump creates a nonzero contribution for probes crossing the jump, even though differentiation on either side gives zero.

## Examples and non-examples

On $(-1,1)$ take $u(x)=|x|$. Splitting the integral at zero gives
$$
\int_{-1}^1|x|\varphi'(x)\,dx
=\int_{-1}^0\varphi(x)\,dx-\int_0^1\varphi(x)\,dx.
$$
Thus $u'=\operatorname{sgn}(x)$ weakly. The value assigned to this derivative at zero is irrelevant. The corner prevents a classical derivative at zero, but does not prevent membership in $W^{1,p}(-1,1)$ for any $1\le p\le\infty$.

For the step $s=\mathbf1_{(0,1)}$ on $(-1,1)$, the same calculation gives $\int s\varphi'=-\varphi(0)$. Its distributional derivative is $\delta_0$, not a locally integrable function. To see the obstruction, choose smooth probes equal to one at zero, uniformly bounded, and supported in shrinking intervals. Integrals against any fixed locally integrable candidate tend to zero, but $\delta_0$ evaluates every probe to one.

Consequently the pointwise derivative zero away from the jump is not a weak derivative. Differentiating $|x|$ twice likewise gives $2\delta_0$, so the first weak derivative exists while the second does not exist as a locally integrable function.

## Important properties

For $C^1$ functions, integration by parts proves agreement with the classical derivative. For uniqueness, the difference of two candidates integrates to zero against every test function. Convolution locally with a smooth approximate identity makes that difference identically zero on smaller open sets; approximation then shows it vanishes almost everywhere.

Multiplication by a smooth function preserves weak differentiability, with
$$
\partial_j(\psi u)=(\partial_j\psi)u+\psi\partial_j u.
$$
The proof inserts $\psi\varphi$ into the defining identity. Weak mixed derivatives commute whenever the relevant locally integrable representatives exist, because the derivatives on smooth probes commute.

There is also a useful closure principle: if $u_m\to u$ and $\partial_j u_m\to v$ locally in $L^1$, passing to the test identities proves $\partial_j u=v$. This is one reason Sobolev spaces are complete and smooth approximation is effective.

## Connections and further reading

Sobolev spaces add $L^p$ bounds to these identities; trace theorems supply boundary data that interior probes cannot encode. Fourier transformation converts weak differentiation into frequency multiplication in suitable global settings. [Hunter, §§3.1–3.4](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) develops the definition and its relation to distributions.
