const R=String.raw;
export const figures={
 'same-point-different-rings':{title:'一个点并不说明全部信息',caption:R`两个谱的底层空间都只有一个点。在 $\mathbb C[x]/(x^2)$ 中，$x$ 的剩余类非零，平方却为零。额外的代数信息属于结构层；多画一个点，或把点画粗，并不能解释它。`},
 'smooth-and-singular':{title:'线性化看到了什么',caption:R`图中画的是**实点**，不是整条复曲线。对 $F=y-x^2$，原点处的线性部分为 $y$，给出一条切线。对 $F=y^2-x^3$，线性部分为零，Zariski 切空间是整个平面（阴影），尽管可见尖点的极限切线方向是水平的。`},
 'learning-ag-local-gluing':{title:'局部分式与一个全局函数',caption:R`对任意域 $k$，主开集 $D(t)$ 与 $D(1-t)$ 覆盖 $\operatorname{Spec}(k[t])$，因为素理想不能同时包含 $t$ 与 $1-t$。两个局部表达式在各自的局部化中都等于 $t$，在 $D(t(1-t))$ 上一致，因而粘合为唯一的全局正则函数 $t$。重叠椭圆只是开覆盖成员关系的示意，不是谱的几何图像。`},
 'pointwise-not-uniform':{title:'陡峭部分不断移动',caption:R`对每个固定 $x<1$，$x^n$ 趋于零。但对每个 $n$，只要点足够接近 $1$，函数值仍可任意接近 $1$。深色线段与端点实心点表示逐点极限，空心点不取到。误差上确界始终为 $1$，故收敛不一致。`},
 'learning-real-uniform-tail':{title:'同一个界控制整个区间',caption:R`这里 $f_n(x)=\sum_{k=0}^n x^k$。对 $m>n$，在整个 $x\in[0,1/2]$ 上一致地有 $0\le f_m(x)-f_n(x)\le\sum_{k=n+1}^{\infty}2^{-k}=2^{-n}$。极限为 $1/(1-x)$，误差上确界恰为 $2^{-n}$。$n=3$ 的阴影尾项在 $x=1/2$ 处达到 $1/8$。同一个界同时证明一致 Cauchy 条件与一致收敛。`},
 'learning-probability-conditioning':{title:'条件化重新归一化样本空间',caption:R`令 $A$ 表示“第一次正面”，$B$ 表示“至少一次正面”。公平且独立的两次投掷使四个有序结果等可能。条件化于 $B$ 时，去掉 $TT$，将其余概率分别除以 $3/4$。因此 $\mathbb P(A\mid B)=(1/2)/(3/4)=2/3$，而 $\mathbb P(B\mid A)=1$。虽然两次投掷独立，这两个事件却不独立：$\mathbb P(A\cap B)=1/2\ne3/8=\mathbb P(A)\mathbb P(B)$。`},
 'learning-probability-expectation':{title:'期望是结果的加权平均',caption:R`对四个独立的 Bernoulli$(1/2)$ 随机变量，$\bar X_4$ 取 $k/4$ 的概率为 $\binom4k/16$。柱高之和为 $1$，加权平均为 $1/2$，加权平方偏差为 $1/16$。这些是离散概率质量，不是密度下的面积。一般地，在独立假设下 $\mathbb E\bar X_n=p$、$\operatorname{Var}(\bar X_n)=p(1-p)/n$。Chebyshev 给出 $\mathbb P(|\bar X_n-p|\ge\varepsilon)\le p(1-p)/(n\varepsilon^2)$。`},
 'loops-and-holes':{title:'回路所在的空间很重要',caption:'圆形回路可以在圆盘内收缩。在圆环中，绕缺失区域一周的回路不能在留在空间内的同时收缩。障碍来自拓扑，而不是所画回路的形状限制。'}
};
export const descriptions={
 'reduced-point':'只有一个底层点，坐标环为 ℂ。',
 'nonreduced-point':'只有一个底层点，坐标环为 ℂ[ε]/(ε²)。',
 'smooth-parabola':'实曲线 y=x²，原点处切线水平。',
 'singular-cusp':'实尖点 y²=x³。原点处所有方向都满足线性化方程，因此 Zariski 切空间是整个环境平面。',
 'power-convergence':'[0,1] 上 x 的 1、2、5、20 次幂图像，以及不连续的逐点极限。',
 'learning-ag-local-gluing':'域 k 上 Spec(k[t]) 的开覆盖示意。U=D(t)、V=D(1−t)，因 t 与 1−t 生成单位理想而覆盖。在 U 上 t²/t=t，在 V 上 (t−t²)/(1−t)=t，两者在 D(t(1−t)) 上限制相同，都是唯一全局截面 t 的限制。椭圆位置仅为示意，并非 Zariski 拓扑图像。',
 'learning-real-uniform-tail':'闭区间 [0,1/2] 上几何部分和 f₀、f₁、f₃ 与极限 1/(1−x) 的采样图像。不同虚线表示部分和，实线为极限。阴影为 f₃ 上方的尾项，在 x=1/2 处最大间距为 1/8。任意 n 的一致尾项界为 2⁻ⁿ，也控制 m>n 时的全部差 f_m−f_n。',
 'learning-probability-conditioning':'四个有序结果 HH、HT、TH、TT 的初始概率均为 1/4。A 为第一次正面，即 HH、HT，用粗边框与阴影标记。B 为至少一次正面，即 HH、HT、TH。TT 在 B 外，用虚框标记。条件化于 B 后，三个结果概率各为 1/3，其中两个属于 A，故 P(A|B)=2/3。因 A 包含于 B，P(B|A)=1。两事件相交且不独立。',
 'learning-probability-expectation':'四个独立公平 Bernoulli 随机变量均值的概率质量柱状图，而非密度图。可能值 0、1/4、1/2、3/4、1 的概率依次为 1/16、4/16、6/16、4/16、1/16。柱等宽，高度表示概率，竖虚线标记期望 1/2。方差 1/16，与 p=1/2、n=4 时的 p(1−p)/n 相符。',
 'disc-loop':'圆盘中的回路向其中心收缩。',
 'annulus-loop':'绕圆环孔洞一周的回路。'
};
export const figureLabels={
 'A reduced point':'约化的点','A nonreduced point':'非约化的点','No nonzero nilpotents':'没有非零幂零元',
 'Smooth at the origin':'原点处光滑','Singular at the origin':'原点处奇异',
 'y = x² · tangent dimension 1':'y = x² · 切空间维数 1','y² = x³ · tangent dimension 2':'y² = x³ · 切空间维数 2',
 'agree here':'在这里一致','Global section: t on X = Spec(k[t])':'全局截面：X = Spec(k[t]) 上的 t',
 'U ∪ V = X because t + (1 − t) = 1':'U ∪ V = X，因为 t + (1 − t) = 1',
 'error at 1/2':'1/2 处的误差','fₙ(x) = 1 + x + ⋯ + xⁿ on [0, 1/2]':'[0, 1/2] 上 fₙ(x) = 1 + x + ⋯ + xⁿ',
 'in B':'属于 B','outside B':'在 B 外','Condition on B:':'条件化于 B：',
 'three outcomes remain':'剩下三个结果','each has mass 1/3':'各自的概率为 1/3',
 'Two fair, independent tosses: four outcomes of mass 1/4':'两次公平且独立的投掷：四个结果各有概率 1/4',
 'Solid thick borders / shading: A = first toss heads':'实心粗框／阴影：A = 第一次正面',
 'A ⊂ B; these events are neither independent nor disjoint':'A ⊂ B；两事件既不独立，也不互斥',
 'Average of four independent Bernoulli(1/2) variables':'四个独立 Bernoulli(1/2) 变量的均值',
 'mean = 1/2':'期望 = 1/2','In general: E[X̄ₙ] = p and Var(X̄ₙ) = p(1 − p)/n':'一般地：E[X̄ₙ] = p，Var(X̄ₙ) = p(1 − p)/n',
 'Disc':'圆盘','Annulus':'圆环','A hole obstructs contraction':'孔洞阻止收缩','The loop can contract':'回路可以收缩'
};
