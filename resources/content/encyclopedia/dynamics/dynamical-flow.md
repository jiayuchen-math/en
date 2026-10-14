---
{
  "id": "dynamical-flow",
  "title": "Dynamical Flow",
  "chinese": "流",
  "aliases": [],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Undergraduate",
  "summary": "A flow is a continuous real-time action whose maps compose by addition of time and are invertible.",
  "prerequisites": [
    "topological-dynamical-system",
    "dynamical-orbit"
  ],
  "related": [
    "dynamical-semiflow",
    "poincare-return-map",
    "suspension-flow"
  ],
  "references": [
    {
      "id": "teschl-reference",
      "label": "Gerald Teschl — Ordinary Differential Equations and Dynamical Systems",
      "url": "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf",
      "locator": "§6.1 Dynamical systems; §6.2 The flow of an autonomous equation",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    },
    {
      "id": "sarig-reference",
      "label": "Omri Sarig — Lecture Notes on Ergodic Theory",
      "url": "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf",
      "locator": "§1.6, Definition 1.20, suspension semi-flow",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A flow describes deterministic evolution through continuous time. Its essential feature is time consistency: evolving for one duration and then another equals evolving for their sum. A global flow permits both positive and negative times; each time map is therefore reversible.

Flows can arise from differential equations, but the topological definition is broader. It states how time acts on the space without requiring coordinates, derivatives, or a particular equation.

## Prerequisites

One needs continuous maps, composition, and real addition. Differential-equation examples require existence and uniqueness of initial-value problems. Orbit language describes the trajectory through a state, and completeness specifies whether that trajectory exists for all time.

## Definition and conventions

A continuous flow on a space $X$ is a jointly continuous map $\phi:\mathbb R\times X\to X$ satisfying
$$
\phi_0(x)=x,\qquad \phi_{t+s}(x)=\phi_t(\phi_s(x)).
$$
Every $\phi_t$ is a homeomorphism with inverse $\phi_{-t}$. If the time parameter is restricted to $[0,\infty)$, the object is a semiflow and its maps need not be invertible.

A locally Lipschitz autonomous vector field has unique local solution trajectories. These provide a local flow on the times where solutions exist. Calling it a global flow additionally requires existence for every real time and every initial state.

## Intuition

The current state is sufficient to restart the evolution: there is no need to remember the absolute start time. This is the structural reason autonomous equations produce flow identities. A nonautonomous equation may require a two-time evolution family, or enlargement of the state to include time.

The continuous trajectory carries more information than observations made once per unit time. Sampling can obscure motion occurring between the observations.

## Examples and non-examples

The equation $\dot x=-x$ on $\mathbb R$ has global flow $\phi_t(x)=e^{-t}x$. Direct multiplication of exponentials proves the composition law. Every positive initial state tends toward zero as $t\to\infty$, even though each finite-time map is invertible.

On the circle, $\phi_t(x)=x+t\bmod1$ is a global flow. Its time-one map is the identity, but each flow orbit traverses the whole circle. Thus properties of one sampled map need not describe the full continuous-time action.

For $\dot x=x^2$ with $x_0>0$, the solution is $x(t)=x_0/(1-x_0t)$. It explodes at $t=1/x_0$, so these solutions do not define a global flow on the whole real line of states.

## Important properties

Uniqueness proves the flow law for an autonomous differential equation: both successive evolution and direct evolution solve the same initial-value problem after restarting. Without uniqueness, choosing arbitrary solution branches need not produce a consistent flow.

A fixed point of a flow remains fixed at every time; being fixed only by the time-one map can instead indicate periodic motion. A measure is invariant for a flow if every time map preserves it. Ergodicity of the whole action and ergodicity of a particular time map are separate questions.

## Connections and further reading

A Poincaré map records returns to a transverse section. A suspension builds a continuous-time system from a discrete map and a return-time function; it generally changes the state space. [Teschl, §§6.1–6.2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) develops local and global evolution. [Sarig, Definition 1.20](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf) describes suspensions. [陈绥阳–褚蕾蕾, §2.1, p.10](https://www.ecsponline.com/yz/BBC6874D396194DA3981A0BBFCD9F78AE000.pdf) explicitly uses 流 for real-time dynamics.

