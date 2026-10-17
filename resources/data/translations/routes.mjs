// Translations of goal-paths.mjs and its existing preparation/source records.
// Names are plain subject names; facts, IDs, links and dates stay in English data.
export const routes={
 'algebraic-geometry':{title:'代数几何',goal:'先了解概形与层，再准备阅读第一本研究层次的几何教材。',stages:[
  ['证明与代数基础','熟悉商构造、域扩张与模。'],
  ['局部代数与层','交换代数与拓扑可以并行学习；层将局部数据与整体对象联系起来。'],
  ['代数簇与概形','先选一门入门课程，做过具体例子，再选专门方向的资料。'],
  ['后续方向','按具体读物的先修要求，选择上同调、叠、算术几何或导出方法。这些是分支，不是必须依次完成的最后几门课。'] ]},
 'representation-theory':{title:'表示论',goal:'从线性映射与群作用出发，学习表示与李理论。',stages:[
  ['线性代数基础','熟悉不变子空间与换基。'],['抽象代数','使用群、模与商构造。'],
  ['群表示与李理论','先做有限维的具体例子，再选群或李代数分支。'],
  ['范畴与同调工具','所选表示论读物用到时，再补范畴或同调方法。'] ]},
 'analysis-pde':{title:'泛函分析与偏微分方程',goal:'从第一门严谨的分析课程，走到泛函分析与弱解方法。',stages:[
  ['分析基础','计算与证明相互补充，只复习尚未掌握的部分。'],
  ['测度与函数空间','在用它们做估计之前，先学习收敛定理与 Banach、Hilbert 空间。'],
  ['微分方程','从例子开始，再按学科阅读说明学习分布、弱导数与 Sobolev 空间。'],
  ['后续方向','选择椭圆、演化或非线性问题。Fourier 与调和方法是其中一些分支的工具，并非每个分支都用相同方法。'] ]},
 'complex-harmonic-analysis':{title:'复分析与调和分析',goal:'为 Fourier 方法、复变量与进一步的分析估计做准备。',stages:[
  ['实变量基础','练习收敛论证与定量估计。'],
  ['复分析与测度论','两门课相互补充，不是可以彼此替代的先修知识。'],
  ['算子与 Fourier 分析','学习 Lp 估计、有界算子与 Fourier 变换。'],
  ['进一步阅读','从现有学科页面中选择多复变，或一个进阶调和分析主题。'] ]},
 geometry:{title:'微分几何与辛几何',goal:'从多元微积分到流形、曲率，再选择一个几何方向。',stages:[
  ['局部计算与拓扑','坐标计算与拓扑论证都需要。'],
  ['光滑几何','学习切空间、微分形式与度量，并配合具体流形例子。'],
  ['整体不变量','几何问题需要整体信息时，使用同调与上同调。'],
  ['辛几何','先学辛形式与 Hamilton 动力学；阅读 Floer 理论前，另行检查所需分析基础。'] ]},
 topology:{title:'代数拓扑与同伦论',goal:'联系拓扑空间、代数不变量与高阶同伦方法。',stages:[
  ['空间与代数','商空间与群构造应成为能使用的例子，而不只是定义。'],
  ['基本群与同调','学习覆盖空间、胞腔例子、同调与上同调。'],
  ['复形与范畴语言','配合拓扑计算，随时回来补这些工具。'],
  ['同伦论','从学科页面选择稳定同伦或高阶范畴参考，检查所选资料要求的准备。'] ]},
 'number-theory':{title:'数论',goal:'从初等算术开始，再选择代数、分析或模形式方向。',stages:[
  ['算术与证明','练习整除、同余与互反律的例子。'],
  ['代数数论','从域与理想走向局部、整体算术。'],
  ['解析数论','这条分支与代数数论并行，不必排在它后面。'],
  ['模形式','补充相关代数或分析；若选算术几何，还需要相应的几何先修知识。'] ]},
 logic:{title:'逻辑、集合论与模型论',goal:'从数学语言进入形式系统，再选择一个基础方向。',stages:[
  ['数学语言','熟悉量词与证明方法。'],['逻辑与集合','语法、语义与公理提供相互补充的视角。'],
  ['代数例子','这对模型论分支有用，并不是所有逻辑方向的共同先修要求。'],
  ['后续方向','按对应学科的阅读说明，选择模型论、可计算性或进阶集合论。'] ]},
 probability:{title:'测度论概率',goal:'将初等随机变量与严谨概率论联系起来，为随机过程阅读做准备。',stages:[
  ['计算与随机变量','学习分布、期望与初等条件概率。'],
  ['严谨积分','即使已熟悉初等概率，测度论概率仍需要这套语言。'],
  ['测度论概率','按学科页面选读测度论教材、极限定理与条件期望。'],
  ['后续方向','选择鞅、随机过程或进阶概率。泛函分析是相应分支的补充工具。'] ]},
 dynamics:{title:'动力系统与遍历论',goal:'从迭代与流，继续学习不变测度与遍历方法。',stages:[
  ['分析与空间','这些工具支持迭代、局部行为与拓扑论证。'],
  ['映射与流','从显式轨道、回复与不变集开始。'],
  ['测度与算子','测度论是遍历论的核心语言，算子方法支持进一步学习。'],
  ['遍历论','可以选拓扑动力系统或保测系统，不能把一者当作另一者的替代。'] ]},
 combinatorics:{title:'组合数学',goal:'从计数与图论证明，走向代数、极值或概率方法。',stages:[
  ['离散数学与证明','练习计数、递推与具体图论论证。'],
  ['按分支补工具','选择当前分支需要的工具，不要求先学完线性代数、抽象代数与概率三门课。'],
  ['专题方向','按学科页面选择枚举、代数、极值、加法或概率组合。'] ]},
 'higher-categories':{title:'范畴论与高阶结构',goal:'从具体泛性质，走向同伦与高阶范畴读物。',stages:[
  ['代数例子','学习能提供函子与泛性质例子的构造。'],
  ['普通范畴','练习自然变换、可表性、极限与伴随。'],
  ['拓扑与同调','拓扑与同调例子为高阶构造提供动机；所需深度取决于具体读物。'],
  ['高阶结构','从书库选择高阶范畴或同伦参考。第一门范畴论课不是全部准备。'] ]}
};

export const labels={
 'Choose a destination, then follow a connected route from foundations through core study to more advanced branches.':'先选一个想学的方向，看看需要哪些基础，再按自己的进度往下读。',
 'Choose a direction':'按方向选路线','Review a single prerequisite':'查先修知识','Library cards':'学科书目',
 'Reading a mathematics text':'怎样读数学书',
 '— choosing a book, working through proofs, and using hints without losing the problem.':'——怎么选书、读证明，做题时又该怎么看提示。',
 'Individual subject preparation — all 29 reviews':'各学科先修知识（29 科）',
 'These are the smaller building blocks used by the routes above, not additional end-to-end paths.':'这里分别介绍上面路线用到的先修知识，不是另外一组完整路线。',
 '← All goal-oriented paths':'← 所有学习路线','Start at the foundations':'从基础开始',
 'Enter at the first unfamiliar stage. Follow a branch that matches your goal, and use the preparation checks only when you need a review.':'从第一个还不熟悉的阶段开始即可。按目标选分支，需要复习时再检查先修知识。',
 'Preparation & skip guidance':'先修要求与跳过建议','Open the prerequisite review':'查看先修知识',
 'Browse the library by subject cards':'按学科浏览书库','Search all resources':'搜索全部资源',
 'Sources for this introduction':'本页参考资料','Introduction':'方向介绍','Route stages':'本页目录',
 'Suggest an edit':'建议修改','Report a correction':'报告错误',
 'Original introduction:':'原创导读：',
 'Questions that come up while studying':'学习中的常见问题','Connections between subjects':'学科之间的联系',
 'From calculations to proofs':'从计算到证明','Make examples that answer a question':'怎样选例子',
 'Find the prerequisite gap that is actually blocking you':'卡住时该补哪些基础',
 'Let algebra and geometry check each other':'代数计算与几何直观',
 'Read a first mathematics paper with a question in hand':'怎样开始读数学论文',
 'Covering spaces and Galois theory: compare the correspondences':'覆盖空间与伽罗瓦理论',
 'From linear functionals to duality in analysis':'线性泛函与对偶'
};

export const preparation={
 proofs:'能解释命题中的量词，并独立写出直接证明、逆否证明、反证与归纳证明，不依赖现成解答。',
 calculus:'能完成典型的求导、积分与收敛习题，并解释使用了哪些假设。',
 'linear-algebra':'能证明秩–零化度定理、完成换基，并区分可对角化映射与一般线性映射。',
 'abstract-algebra':'能正确构造商群与商环，并陈述同构定理的假设。',
 'commutative-algebra':'能局部化环或模，使用素理想，并在基本模例子中核查正合性。',
 'category-theory':'能表述泛性质，并在具体例子中验证自然变换或伴随。',
 'homological-algebra':'能计算初等同调，解释核、余核与正合性；更深的导出函子内容可能仍需补充。',
 'representation-theory':'能构造表示、交织映射与基本分解；无限维和李理论的准备应另行检查。',
 sheaves:'能区分预层与层，使用茎，并在基本例子中检验粘合公理。',
 'algebraic-geometry':'已经使用过仿射概形与粘合。可跳过入门复习，但不能跳过高级读物自己的先修要求。',
 'set-theory':'能区分可数性、基数与序型；力迫法所需的专门准备是下一步。',
 logic:'能区分有效性与可推导性，并解释相关的可靠性和完备性陈述。',
 'model-theory':'能在例子中使用紧致性与初等嵌入；稳定性或分类理论可能仍需过渡。',
 'real-analysis':'能使用 ε 论证，并证明标准的紧致性与收敛结论，不只是计算极限。',
 'measure-theory':'能在核查假设后使用单调收敛、控制收敛与 Tonelli/Fubini。',
 'complex-analysis':'能在适当假设下使用 Cauchy 定理与留数方法；多复变可能还需准备。',
 'functional-analysis':'能使用完备性、对偶与基本算子例子；具体读物的谱理论或测度要求仍需核对。',
 'harmonic-analysis':'熟悉 Lp 估计、Fourier 变换与插值；高级乘子主题仍需另学。',
 'differential-equations':'实分析要求已掌握时，可跳过对应复习；所选 PDE 读物需要的分布、弱导数与 Sobolev 空间不能一并省去。',
 'point-set-topology':'能用这些定义证明命题，并构造基本的分离性或紧致性反例。',
 'algebraic-topology':'能计算标准基本群与同调群；稳定同伦和高阶范畴需要额外过渡。',
 'differential-geometry':'能换坐标、使用切映射并计算外微分；曲率与几何分析可能仍有缺口。',
 'symplectic-geometry':'能使用微分形式与 Hamilton 例子；伪全纯曲线和 Floer 理论各有分析准备。',
 'elementary-number-theory':'能证明初等算术命题并解同余，不只是套记住的公式。',
 'algebraic-number-theory':'能使用 Dedekind 环与域扩张的论证；类域论和上同调可能还需基础。',
 'analytic-number-theory':'能处理算术函数并论证基本复分析估计；筛法需要单独过渡。',
 'modular-forms':'能使用全纯函数与群作用；高级读物的算术和表示论先修要求仍要核对。',
 combinatorics:'能证明计数恒等式与初等图论结论；代数或概率分支还需要相应工具。',
 probability:'能使用期望、条件概率与初等分布；初等概率不能代替测度论准备。',
 dynamics:'能分析基本迭代与不变集；保测方向仍需要测度论。'
};

export const locators={
 'algebraic-geometry':[
  '0.1 节 For the reader；第 2 章层；第 3–4 章仿射概形，尤其 4.2 节 Visualizing schemes II: nilpotents（133–134 页）。PDF 明确说明这是早期、过时版本。',
  '第 1 章交换代数准备；第 2 章代数集；第 3 章仿射代数簇；第 4 章局部研究，尤其 4a–4c 节（81–85 页）。',
  '26.9 节：定义 26.9.1、引理 26.9.2、例 26.9.3（去心仿射平面）。'],
 'representation-theory':[
  '1.1–1.5 节讲代数、表示、理想与商；1.8–1.14 节含箭图与李理论例子；第 3 章重点读 3.1 节 Maschke 定理及 3.2–3.9 节的特征标与分解。',
  '第 1 节 What is Representation Theory?；第 3 节 Complete Reducibility and Unitarity，定理 3.1；第 10 节特征标表（24–25 页）。作者的 Old Course Notes 页链接此稿。',
  '第 2 章李群基本定义；第 3 章李群与李代数；第 4 章李群与李代数表示；5.1 节 sl(2,C) 的表示。'],
 'analysis-pde':[
  '第 2 章 Laplace 方程；3.1–3.5 节弱导数、分布与 Sobolev 空间；4.1–4.5 节弱 Dirichlet 问题，包括定义 4.2 与定理 4.11；第 5–7 章演化方程。',
  '第 2–3 章测度与积分，尤其 3B；第 6–8 章 Banach、Lp、Hilbert 空间，尤其 8B 正交性。开放 PDF 日期为 2026 年 6 月 12 日。',
  '序言中的测度论准备；1.9 节强弱拓扑；1.12–1.14 节 Fourier 变换、分布与 Sobolev 空间（183–256 页）。'],
 'complex-harmonic-analysis':[
  '第 3–8 节；尤其第 7 节 Cauchy 定理的推论，第 55–58 条讨论微分后的积分公式、Cauchy 不等式与解析性（23–25 页）。',
  '序言与引言；第 1–5 章 Fourier 系数与可和性，尤其定理 5.3–5.4；第 6–13 章极大函数、收敛、Hilbert 变换与插值。',
  '第 1 章多复变全纯函数；第 2 章凸性与伪凸性，尤其 2.1 节全纯域与全纯延拓，定理 2.1.4 及其 Hartogs 延拓推论（47–53 页）。PDF 日期为 2026 年 5 月 31 日。'],
 geometry:[
  '第 2–4 节流形、切向量／余切向量与向量场；第 5–7 节张量、微分形式、de Rham 上同调与积分；第 9 节黎曼度量。完整 PDF 来自作者 Oxford 主页。',
  '第 2 章第 1–4 节，尤其第 3 节定理 3.1（Gauss 绝妙定理，纸本 60 页）；第 3 章第 1 节 Holonomy 与 Gauss–Bonnet。',
  '第 1–2 讲辛形式与余切丛上的辛形式；8.1 节定理 8.1（Darboux）；第 18 讲 Hamilton 向量场，尤其 18.1–18.2 节。'],
 topology:[
  '第 0 章同伦、同伦型与胞腔复形；1.1 节基本构造，尤其圆的基本群定理 1.7（纸本 29 页）；1.3 节覆盖空间。',
  '第 1–3 章基本点集拓扑、连通性与紧致性；第 4 章商空间，尤其 The Quotient Topology（41 页）与 Surfaces（47 页）。',
  '第 1–3 章基本群、范畴语言与覆盖空间；第 6–11 章余纤维化、纤维化、高阶同伦群、CW 复形与悬挂；第 12–14 章链复形与胞腔同调；第 23–25 章示性类、K 理论与配边。'],
 'number-theory':[
  '2017 年 1 月 23 日版；第 1–2 章，尤其 2.2 节中国剩余定理、定理 2.2.2；第 4 章二次互反律；5.7 节两平方和。',
  '3.08 版（2020）；第 1–3 章：交换代数准备、整数环、Dedekind 环与分解。第 3 章的理想唯一分解、理想类群两部分，以及定理 3.29。',
  '1.31 版（2017）；先修说明与引言；第一部分第 1–2 节预备知识与模曲线作为 Riemann 曲面，第 4 节模函数与模形式，尤其定义 4.5。'],
 logic:[
  '修订 6178f32（2026-07-11），Open Logic Text 修订 9620cc7（2026-07-12）；第一部分集合、关系、函数；第 6 章 6.2 节一阶语言；第 12 章 12.8–12.11 节完备性、紧致性及直接证明、Löwenheim–Skolem；后续图灵机与不可判定性章节。',
  'HTML 标为 Fall 2025，修订 c5cb415（2026-09-27）；第 I–IV 部分论证、真值函项逻辑、真值表与推导；第 V–VII 部分一阶逻辑、解释与一阶自然演绎；第 VI 部分第 31–34 章讨论一阶真、语义概念、解释的使用及其推理。'],
 probability:[
  'CHANCE Project 版日期为 2006 年 7 月 22 日；第 1–2 章离散概率分布与连续概率密度；第 4 章条件概率；第 6 章期望与方差；第 8–9 章大数律与中心极限定理；第 11 章 Markov 链。',
  '作者第 5 版 PDF，Version 5，2019 年 1 月 11 日；第 1 章测度论，第 2–3 章大数律与中心极限定理，第 4 章鞅，尤其 4.1 节条件期望、有限分割例子与定理 4.1.13（迭代条件化）。'],
 dynamics:[
  '作者获 AMS 许可公开的初稿；1.3–1.5 节，第 2 章初值问题，第 6 章动力系统，第 10 章 10.1–10.4 节 logistic 方程、不动点与周期点、线性差分方程和局部行为，第 11 章一维离散动力。',
  'MATH41112/61112 PDF，2018 年 1 月 4 日；第 1–4 节均匀分布、测度空间、积分与不变测度，第 5 节遍历测度，第 9 节回复，第 10 节 Birkhoff 遍历定理，尤其定理 10.1.1 与推论 10.1.2。入口页较早的更新标记与此 PDF 扉页日期不同。'],
 combinatorics:[
  '2016 年 HTML 版；第 2 章 2.4 节组合证明，第 5 章图论，第 7–9 章容斥、生成函数与递推；第 11 章，尤其 11.6 节概率方法、定理 11.7；第 15 章 Pólya 枚举定理。',
  '作者 gtacbook 页面链接的完整书稿；1.1 节 Forbidding a Triangle: Mantel’s Theorem，含两个证明与注 1.1.2（取等情形）；第 6–7 章三项等差数列与集合加法结构。作者说明稿件页码与出版书不同。'],
 'higher-categories':[
  '作者提供的第 2 版 PDF；第 1–4 章范畴、函子、自然变换、泛性质、可表性、Yoneda、极限与余极限、伴随，尤其 2.1–2.3、3.1、4.1–4.2 节。',
  '作者完整讲义，14 页；第 2–4 节单纯集、例子与伴随，包括脉及例 3.3 的全奇异复形；第 5 节引理 5.6（奇异复形为 Kan 复形）、定义 5.7（拟范畴）、例 5.8（脉有唯一内角填充）。',
  '作者完整出版前版本（版权 2018–2021），允许免费浏览与下载供个人使用；Preface 与 Aims；第 1 章 1.1–1.4 节拟范畴、∞-Cosmoi、Cosmological Functors、同伦 2-范畴；第 2 章伴随、极限与余极限 I。']
};
