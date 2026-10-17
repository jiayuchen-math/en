# Make examples that answer a question

An example becomes useful when you can explain what it tests. After a new definition, resist filling a notebook with objects that merely have the right name. Choose a question: which condition is doing the work, which familiar operation preserves the property, or where might a tempting converse fail?

For a first experiment, compare subspaces of $\mathbb R^2$. The set $U=\{(x,y):x+y=0\}$ contains zero and is closed under linear combinations. The parallel line $L=\{(x,y):x+y=1\}$ misses zero. That is already a decisive failure, so there is no need to check every subspace axiom for $L$. Moving a line a small distance has preserved its appearance while changing its algebraic status.

## Change one feature and keep a record

Write the defining equation, the property being tested, and the decisive calculation. Then make a nearby object. Replace an equality by an inequality, allow an endpoint, or remove a finiteness condition. Change one feature at a time so that the comparison has an explanation.

For instance, $x\mapsto x^2$ is continuous on $\mathbb R$ but is not uniformly continuous there. Take $x_n=n$ and $y_n=n+1/n$. Their distance tends to zero, while

$$
|y_n^2-x_n^2|=2+\frac{1}{n^2}.
$$

Uniform continuity would force these output distances to tend to zero: apply its single $\delta$ to both inputs once $1/n<\delta$. On a bounded closed interval the same function is uniformly continuous. The domain belongs in the example's name; “the square function” alone leaves out the relevant information.

A failed construction can be informative too. If you seek a continuous function on $[0,1]$ that is unbounded, the extreme value theorem rules it out. Record the obstruction. Searching longer will not produce the requested object; changing the domain or dropping continuity might.

## Test the quantifiers with a moving point

To distinguish pointwise and uniform convergence, try

$$
f_n(x)=\frac{nx}{1+n^2x^2},\qquad 0\leq x\leq1.
$$

At $x=0$ the value is zero. At each fixed $x>0$, dividing numerator and denominator by $n^2$ shows convergence to zero. But at the moving point $x=1/n$, the value is always $1/2$. Thus the convergence is not uniform. The inequality $2t\leq1+t^2$ for $t\geq0$ also shows that the supremum is exactly $1/2$.

This example earns its space because it identifies a specific trap: checking each fixed input does not control all inputs at once. Jiří Lebl's [Basic Analysis, §6.1](https://www.jirka.org/ra/html/sec_puconv.html), especially §§6.1.2–6.1.3, gives the definitions and uniform norm language needed to state that distinction precisely.

Keep a small collection organized by questions rather than prestige: a map with a large kernel, a continuous function with an inconvenient domain, a sequence whose bad behavior moves. Add enough verification that another reader could check the claim. Ravi Vakil's [learning advice](https://math.stanford.edu/~vakil/potentialstudents.html), in the opening discussion of learning theory, recommends calculating basic cases. The practical extension here is to keep the calculation attached to the question it resolves.
