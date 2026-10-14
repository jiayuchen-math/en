---
{
  "id": "stochastic-differential-equation",
  "title": "Stochastic Differential Equation",
  "chinese": "随机微分方程",
  "aliases": [
    "SDE"
  ],
  "area": "probability",
  "topic": "probability",
  "level": "Research",
  "summary": "A stochastic differential equation specifies an integral evolution driven by noise, with solution and integration conventions forming part of the problem.",
  "prerequisites": [
    "brownian-motion",
    "adapted-stochastic-process"
  ],
  "related": [
    "martingale",
    "probability-filtration",
    "stochastic-process"
  ],
  "references": [
    {
      "id": "finbook-reference",
      "label": "Gregory F. Lawler — Stochastic Calculus: An Introduction with Applications",
      "url": "https://www.math.uchicago.edu/~lawler/finbook.pdf",
      "locator": "§3.2 Stochastic integral; §3.4 Itô's formula; §3.5 Diffusions, equation (3.21) and Picard iteration",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    },
    {
      "id": "rough-reference",
      "label": "Peter K. Friz and Martin Hairer — A Course on Rough Paths",
      "url": "https://hairer.org/notes/RoughPaths.pdf",
      "locator": "Chapter 9, Stochastic differential equations, Theorem 9.1 and Theorem 9.3 (Wong–Zakai)",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A stochastic differential equation, or SDE, couples an evolving state to a random driver. Its differential notation abbreviates an integral identity. At research level, specifying the noise, integration convention, admissible solutions, and uniqueness notion is essential: a formal expression alone does not determine a well-posed problem.

This overview is scoped to finite-dimensional equations driven by Brownian motion. Jump-driven equations, distributional coefficients, and stochastic partial differential equations require additional frameworks and are not covered by the existence statement below.

## Prerequisites

The classical formulation uses a filtered probability space, an adapted Brownian motion, and Itô integration. Useful analytic tools include moment estimates, Lipschitz continuity, and Gronwall's inequality. Pathwise approaches also study iterated integrals of the driver, rather than only its time-indexed values.

## Definition and conventions

For $X_t\in\mathbb R^d$ and an $m$-dimensional Brownian motion $B_t$, the Itô equation
$$
dX_t=b(X_t)\,dt+\sigma(X_t)\,dB_t
$$
means an adapted continuous process satisfies
$$
X_t=X_0+\int_0^t b(X_s)\,ds+\int_0^t\sigma(X_s)\,dB_s.
$$
The drift takes values in $\mathbb R^d$ and the diffusion coefficient in $d$ by $m$ matrices. The integrands must satisfy the conditions needed for these integrals, possibly after localization.

A strong solution uses the prescribed noise and initial variable. A weak solution allows the probability space and driver to be part of the construction. These uses of “strong” and “weak” concern solutions, not convergence modes or mixing.

## Intuition

Over a small interval, the drift contributes at scale $h$ and the noise at scale $\sqrt h$. The state's influence on the noise amplitude creates the quadratic correction in Itô's change-of-variable formula. Approximating a rough driver by smooth paths can change the limiting equation unless the integration convention is accounted for.

## Examples and non-examples

With deterministic initial value $x>0$, geometric Brownian motion solves
$$
dX_t=aX_t\,dt+cX_t\,dB_t,\qquad
X_t=x\exp\left((a-c^2/2)t+cB_t\right).
$$
Applying Itô's formula to the exponential produces a drift contribution $c^2X_t/2$, which explains the subtraction in the exponent. Its paths stay positive for all finite times.

The expression $B'_t$ is not an ordinary function that can be inserted into a classical differential equation. Brownian sample paths do not have classical derivatives suitable for that operation. Likewise, applying the ordinary chain rule to $e^{cB_t}$ misses its Itô drift.

## Important properties

If $b$ and $\sigma$ are globally Lipschitz, satisfy linear growth, and the initial variable is square-integrable and independent of future Brownian increments, the classical equation has a global strong solution with pathwise uniqueness. Picard iteration supplies a proof idea: Itô isometry controls successive stochastic-integral differences, while deterministic integral estimates and Gronwall control their accumulation.

Local Lipschitz conditions generally supply a solution only up to explosion. Merely continuous coefficients do not justify asserting the same uniqueness theorem.

For a scalar equation with differentiable $\sigma$, a Stratonovich diffusion term $\sigma(X_t)\circ dB_t$ corresponds to an Itô drift correction $\sigma\sigma'/2$. The integration symbol and correction must therefore be specified together.

## Connections and further reading

Research questions include stability of solutions under noise approximation and formulations with less regular coefficients. Rough paths encode iterated increments to make appropriate solution maps continuous; this is a distinct mathematical mechanism, not ordinary differentiation of the noise. [Lawler, §§3.2–3.5](https://www.math.uchicago.edu/~lawler/finbook.pdf) develops the integral and classical estimates. [Friz–Hairer, Chapter 9, Theorems 9.1 and 9.3](https://hairer.org/notes/RoughPaths.pdf) connects rough equations, SDEs, and smooth approximation. [Peking University's stochastic-process syllabus](https://math.pku.edu.cn/bks/sykc/148757.htm), item 4, documents 随机微分方程.

