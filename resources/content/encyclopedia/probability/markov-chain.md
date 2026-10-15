---
{
  "id": "markov-chain",
  "title": "Markov Chain",
  "chinese": "马尔可夫链",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "A finite-state Markov chain evolves by transition probabilities determined by its current state rather than its full observed history.",
  "prerequisites": ["conditional-probability", "stochastic-process"],
  "related": ["conditional-expectation", "independent-random-variables", "stopping-time"],
  "references": [
    {"id":"cambridge-markov","label":"University of Cambridge — Markov Chains, course notes hosted by Richard Weber","url":"https://www.statslab.cam.ac.uk/~rrw1/markov/M.pdf","locator":"§1.2, Definition 1.2; §§1.4–1.6, transition powers; §8.1, invariant distributions; §§9.1–9.3, Theorems 9.1 and 9.8","checked":"2026-10-15","note":"Definition, row-vector convention, stationarity, and convergence under irreducibility and aperiodicity; specialized here to finite states."},
    {"id":"pku-markov-name","label":"陈大岳 — 应用随机过程课程（北京大学）","url":"https://math.pku.edu.cn/teachers/dayue/Homepage/asp.htm","locator":"《应用随机过程》2008年秋，主要内容，第二章：马尔可夫链，items 1–3","checked":"2026-10-15","note":"Chinese term in a university course outline; used as terminology evidence, not as a mathematical definition."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A Markov chain is a stochastic model whose present state contains the information from its past needed to predict the next step. This article treats discrete time and a finite state space, with transition probabilities that do not change with time.

The Markov property is conditional. Consecutive states can be strongly dependent. It also depends on what is recorded as the state: omitting a relevant component can make an observed process fail the property.

## Prerequisites

Know conditional probability, finite probability distributions, and matrix multiplication. A stochastic process is an indexed family of random variables. Here its index is $n=0,1,\ldots$, and its state space is a finite set $S$.

Use row vectors for distributions. This fixes the direction of matrix multiplication and prevents ambiguity in formulas for evolution and stationarity.

## Definition and conventions

A time-homogeneous Markov chain has an initial law $\alpha$ and a matrix $P=(p_{ij})_{i,j\in S}$ with nonnegative entries and row sums one. For every positive-probability history,
$$
P(X_{n+1}=j\mid X_0=i_0,\ldots,X_n=i)
=p_{ij}.
$$
Equivalently, $P(X_{n+1}=j\mid\sigma(X_0,\ldots,X_n))=p_{X_nj}$ almost surely. This latter formulation avoids assigning ratios to impossible histories.

The matrix being independent of $n$ is time homogeneity, an additional convention beyond the Markov property itself. A stationary distribution is a probability row vector $\pi$ satisfying $\pi P=\pi$.

## Intuition

The current state is a summary for prediction, not a statement that the past never influences the present. For instance, a machine's current operating mode can reflect its earlier history while still being sufficient to specify its next transition probabilities.

An iid finite-valued sequence is a special case, obtained when every row of $P$ is the same distribution and the initial law agrees with it. Most transition matrices have different rows, so knowledge of the current state changes the next-state prediction.

## Examples and non-examples

On $S=\{0,1\}$, take
$$
P=\begin{pmatrix}0.8&0.2\\0.4&0.6\end{pmatrix}.
$$
Starting from $0$, the probability of being at $1$ after two steps is
$0.8(0.2)+0.2(0.6)=0.28$.
Solving $\pi_0(0.2)=\pi_1(0.4)$ and $\pi_0+\pi_1=1$ gives $\pi=(2/3,1/3)$.

Even when started in $\pi$, the chain is not independent: $P(X_{n+1}=1\mid X_n=1)=0.6$, whereas $P(X_{n+1}=1)=1/3$.

For a nonexample, choose independent fair bits $A,B$, and define $X_0=A$, $X_1=B$, $X_2=A$. Knowing $X_1$ alone leaves $X_2$ fair, while knowing $X_0$ determines $X_2$. The current state has lost information needed to predict the future.

The deterministic alternation $0,1,0,1,\ldots$ is a Markov chain. Its matrix has zero diagonal and unit off-diagonal entries. It has stationary law $(1/2,1/2)$, but from state $0$ its distributions alternate forever.

## Important properties

Multiplying one-step probabilities along a path and summing over intermediate states gives the Chapman–Kolmogorov identity. Hence the $n$-step matrix is $P^n$ and the time-$n$ law is $\alpha P^n$.

Every finite stochastic matrix has a stationary distribution. One existence proof averages $\alpha,\alpha P,\ldots,\alpha P^{n-1}$, takes a convergent subsequence in the probability simplex, and observes that multiplying the average by $P$ changes it by $(\alpha P^n-\alpha)/n$.

If the finite chain is irreducible, every state can reach every other and the stationary distribution is unique and positive. If it is also aperiodic, the greatest common divisor of possible positive return times is one, and $\alpha P^n\to\pi$ for every initial law.

Proof idea for convergence: irreducibility and aperiodicity make some power of a finite transition matrix strictly positive. This permits coupling with a uniformly positive chance to make two copies meet in each block. Their remaining disagreement probability decays geometrically.

## Connections and further reading

Stopping times describe first visits; conditional expectation extends the transition rule to functions of the next state. [Cambridge, §§1, 8 and 9](https://www.statslab.cam.ac.uk/~rrw1/markov/M.pdf) develops the theory. [Chen's course outline, Chapter 2](https://math.pku.edu.cn/teachers/dayue/Homepage/asp.htm) documents 马尔可夫链 as literature usage.
