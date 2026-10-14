---
{
  "id": "proof-by-contradiction",
  "title": "Proof by Contradiction",
  "chinese": "反证法",
  "aliases": [],
  "area": "foundations",
  "topic": "proofs",
  "level": "Undergraduate",
  "summary": "Classical proof by contradiction establishes a statement by deriving an impossibility from its negation.",
  "prerequisites": [
    "direct-proof",
    "negation"
  ],
  "related": [
    "syntactic-consistency",
    "logical-implication"
  ],
  "references": [
    {
      "id": "classical",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/classical_reasoning.html",
      "locator": "§5.1 Proof by Contradiction; §5.2 Some Classical Principles",
      "checked": "2026-10-14",
      "note": "Definition, stated hypotheses and proof framework."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Proof by contradiction is a method for proving a claim when its denial creates stronger or more manageable information. The argument temporarily assumes the negation of the desired statement, derives an impossibility, and rejects that temporary assumption. It is particularly useful for uniqueness, irrationality, and nonexistence statements.

## Prerequisites

Understand negation and the difference between a hypothesis and a conclusion. Know the background logic: classical mathematics permits elimination of double negation, while constructive mathematics generally does not. Also distinguish an actual contradiction from an outcome that merely seems surprising.

## Definition and conventions

In classical logic, to prove $P$ from premises $\Gamma$, it suffices to derive falsity $\bot$ from $\Gamma$ together with $\neg P$:
$$
\Gamma,\neg P\vdash\bot\quad\Longrightarrow\quad\Gamma\vdash P.
$$
For a negative conclusion $\neg Q$, deriving $\bot$ from $Q$ proves the result even intuitionistically. The difference arises when the intended conclusion is positive: the argument first establishes $\neg\neg P$, and the classical principle converts this into $P$.

A contradiction may take the form $R$ and $\neg R$, or an impossibility already established from the definitions.

## Intuition

Temporarily explore a world in which the claim fails. If the exploration necessarily conflicts with the original hypotheses, that world cannot be a permitted case. The force comes from necessity: a poor choice made during the exploration might fail without showing that every proposed counterexample fails.

## Examples and non-examples

There is no smallest positive rational number. Suppose instead that $r$ is one. The rational number $r/3$ is positive and strictly smaller than $r$, contradicting minimality. The argument uses both positivity and closure under division by the nonzero integer three.

This conclusion fails for positive integers: one is smallest. Dividing an integer by three need not produce another integer, so the proposed contradiction would leave the required domain. A calculation outside the domain is a non-example of a valid contradiction proof.

## Important properties

Negate the whole target carefully. The denial of “every element has property $P$” is classically the existence of an element without $P$, rather than the claim that no element has $P$.

Track which assumptions remain after the contradiction. If $\Gamma$ is itself inconsistent, every conclusion follows in classical logic; the proof then gives no evidence that the assumptions describe a possible situation. A valid contradiction must be derived using legitimate steps, not a division by zero or an unproved auxiliary claim.

## Connections and further reading

Contraposition proves $\neg Q\to\neg P$ to establish $P\to Q$, and often yields a shorter argument than a full reductio. Consistency and model existence make the same distinction between impossibility and admissible assumptions at the level of theories. Read [Logic and Proof, §5.1–§5.2](https://leanprover-community.github.io/logic_and_proof/classical_reasoning.html) for the classical principles involved.

