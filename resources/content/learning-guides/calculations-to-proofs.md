# From calculations to proofs

A calculation often contains the idea of a proof before it contains the proof itself. The next step is to say which objects the calculation concerns, why each operation is allowed, and why the conclusion covers every case in the statement. Keep the useful algebra; give it a job.

Suppose a few numerical values suggest that $a_n=1+3/(2n+1)$ tends to $1$, with $n$ a positive integer. Subtracting $1$ gives the whole mathematical mechanism:

$$
|a_n-1|=\frac{3}{2n+1}\leq\frac{3}{2n}.
$$

The proof must now turn that estimate into a promise about an arbitrary requested accuracy.

## Put the choices in order

Let $\varepsilon>0$. Choose a positive integer $N>3/(2\varepsilon)$. For every $n\geq N$, the displayed estimate gives $|a_n-1|\leq3/(2N)<\varepsilon$. That proves convergence.

Notice what the proof records: the reader supplies $\varepsilon$, you choose $N$ depending on it, and the same $N$ works for every later index. A table of values cannot make that final promise. Solving an inequality backwards is useful scratch work, but the finished argument should show that the chosen integer actually works.

Try changing the numerator to $7$ and the denominator to $n+4$. Before calculating again, identify the parts of the argument that survive. This is a practical way to learn a proof method without memorizing its particular constants.

## Ask what made the operation legal

In a numerical exercise, dividing by a visible nonzero number needs little comment. In a proof, dividing by a parameter creates a condition. For real numbers $a,b$, the equation $ax=b$ has the unique solution $b/a$ when $a\ne0$. If $a=0$, there are either no solutions or every real number is a solution, depending on $b$. Writing down $b/a$ before inspecting $a$ has silently discarded part of the problem.

The same habit matters with matrices. Computing the kernel of one matrix gives information about that matrix. To prove that the kernel of every linear map $T:V\to W$ is a subspace, take arbitrary $u,v$ in the kernel and arbitrary scalars $r,s$. Linearity gives $T(ru+sv)=rT(u)+sT(v)=0$; also $T(0)=0$. The calculation is short because the definitions have already supplied exactly what it needs.

For your next exercise, mark each line as an assumption, a definition, an established result, or a consequence of earlier lines. A line that fits none of these categories may be a guess worth investigating. It is not yet a justified step.

Timothy Gowers's [analysis proof discussion](https://gowers.wordpress.com/2014/02/03/how-to-work-out-proofs-in-analysis-i/) names several useful moves, especially expanding definitions and introducing the objects they assert exist. Richard Hammack's [Book of Proof, §4.3](https://richardhammack.github.io/BookOfProof/Main.pdf#page=130), printed pages 118–123, provides a concrete next reading on direct arguments. Use either reading to revisit one unfinished proof, then close it and write your own complete argument.
