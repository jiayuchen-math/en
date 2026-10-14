---
{
  "id": "direct-proof",
  "title": "Direct Proof",
  "chinese": "直接证明",
  "aliases": [],
  "area": "foundations",
  "topic": "proofs",
  "level": "Undergraduate",
  "summary": "A direct proof establishes a conclusion by justified deductions from the stated assumptions.",
  "prerequisites": [
    "logical-implication"
  ],
  "related": [
    "proof-by-contradiction",
    "mathematical-induction"
  ],
  "references": [
    {
      "id": "deduction",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/natural_deduction_for_propositional_logic.html",
      "locator": "§3.1 Derivations in Natural Deduction; §3.3 Forward and Backward Reasoning",
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

A direct proof begins with the hypotheses of a statement and develops consequences until it reaches the required conclusion. The method is especially effective when definitions turn abstract words into concrete equations or membership conditions. Its success depends on making the connection between assumptions and conclusion explicit, rather than relying on a suggestive pattern.

## Prerequisites

Know what an implication claims and what the relevant definitions mean. A theorem may have several hypotheses, all of which remain available during the argument. Previously proved results may also be used, provided their hypotheses are checked in the current situation.

## Definition and conventions

To prove $P\to Q$ directly, assume $P$ and derive $Q$ by accepted inference steps. Discharging the temporary assumption establishes the implication. More generally, a derivation from premises $\Gamma$ is written $\Gamma\vdash Q$. There is no universal formal classifier for every informal proof called “direct”; the useful distinction is its route from given hypotheses to the intended conclusion.

A direct argument can introduce witnesses, split into cases, or invoke an induction theorem. “Direct” does not mean “contains no assumptions”: assuming the antecedent is exactly the right starting point for an implication.

## Intuition

Treat the conclusion as a destination and the definitions as available roads. If the destination says “divisible by six,” look for an integer $k$ giving the expression $6k$. This backward inspection identifies what must eventually be constructed, while the written proof travels forward from information that is already justified.

## Examples and non-examples

Suppose integers $a$ and $b$ are divisible by six. Then $a=6r$ and $b=6s$ for integers $r,s$, so
$$
a-2b=6(r-2s).
$$
Since $r-2s$ is an integer, $a-2b$ is divisible by six. Every step records either a definition, an algebraic identity, or closure of the integers under subtraction and multiplication.

The statement “$a-2b$ is divisible by six, therefore write it as $6k$” cannot start this proof: it assumes the conclusion. Likewise, checking a few pairs of multiples does not establish the theorem for arbitrary integers.

## Important properties

A sound inference preserves truth from premises to conclusion. Thus a sequence of justified steps cannot turn true assumptions into a false result. The truth of the assumptions still matters: proving an implication does not prove its antecedent.

A useful proof audit asks which premise each step uses and whether an introduced object satisfies its promised conditions. In the example, integrality of the constructed witness is essential. The same symbolic equation over arbitrary real numbers would not establish integer divisibility.

## Connections and further reading

Direct proofs interact naturally with universal quantification: choose arbitrary inputs first, then prove the implication for those inputs. Contraposition changes the target implication, while contradiction introduces its negation. See [Logic and Proof, §3.1 and §3.3](https://leanprover-community.github.io/logic_and_proof/natural_deduction_for_propositional_logic.html) for hypothesis discharge and proof organization.

