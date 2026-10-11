// Only publicly posted professional contacts. Missing email is not guessed.
const checked='2026-10-11', people=[];
function add(name,institution,country,region,role,area,topics,official,email='',emailSource=official,extra={}){people.push({id:name.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,institution,country,region,role,area,topics,official,researchSource:official,affiliationChecked:checked,interestsChecked:checked,availability:'Not confirmed',availabilityNote:'A listed affiliation or email is not evidence of a current student vacancy. Use the degree programme’s official admission process; do not send automated or bulk enquiries.',studentRecords:[],...(email?{email,emailSource,emailChecked:checked}:{}),...extra})}
const mitDirectory='https://math.mit.edu/directory/index.html?show=detail';
const mit=[
 ['Roman Bezrukavnikov',22,'Algebra & representation theory','Representation theory|Algebraic geometry','bezrukav@math.mit.edu','https://math.mit.edu/lg/'],
 ['Alexei Borodin',1222,'Probability & representation theory','Integrable probability|Random matrices|Representation theory','borodin@math.mit.edu','https://math.mit.edu/classes/18.05/index.html'],
 ['Tobias Holck Colding',50,'Geometry & PDE','Differential geometry|Geometric analysis|Partial differential equations','colding@math.mit.edu',mitDirectory],
 ['Semyon Dyatlov',1581,'Analysis & dynamics','Quantum chaos|Microlocal analysis|Scattering theory|Dynamical systems','dyatlov@math.mit.edu',mitDirectory],
 ['Pavel Etingof',66,'Algebra & representation theory','Representation theory|Quantum groups|Noncommutative algebra','etingof@math.mit.edu','https://www-math.mit.edu/~etingof/'],
 ['Larry Guth',1461,'Analysis & combinatorics','Harmonic analysis|Metric geometry|Extremal combinatorics|Kakeya','lguth@math.mit.edu','https://math.mit.edu/~lguth/'],
 ['Jeremy Hahn',2073,'Categories & topology','Algebraic topology|Homotopy theory|Structured ring spectra|Chromatic homotopy|Algebraic K-theory','jhahn01@mit.edu','https://web.mit.edu/~jhahn01/www/'],
 ['William Minicozzi',1464,'Geometry & PDE','Geometric analysis|Partial differential equations|Minimal surfaces','minicozz@math.mit.edu',mitDirectory],
 ['Bjorn Poonen',213,'Number theory & logic','Arithmetic geometry|Algebraic number theory|Rational points|Undecidability','poonen@math.mit.edu',mitDirectory],
 ['Gigliola Staffilani',262,'Analysis & PDE','Dispersive partial differential equations|Nonlinear PDE','gigliola@math.mit.edu',mitDirectory],
 ['Nike Sun',1651,'Probability & combinatorics','Probability|Statistical physics|Theory of computing','nsun@mit.edu',mitDirectory]
];
for(const [name,pid,area,topics,email,emailSource] of mit)add(name,'Massachusetts Institute of Technology','US','Americas',name==='Jeremy Hahn'?'Associate Professor':'Professor',area,topics,'https://math.mit.edu/directory/profile.html?pid='+pid,email,emailSource);
const chicago='https://mathematics.uchicago.edu/people/profile/';
const chi=[
 ['Danny Calegari','danny-calegari','Geometry & topology','Low-dimensional geometry|Foliations|Geometric group theory|Dynamics','dannyc@math.uchicago.edu'],
 ['Denis Hirschfeldt','denis-hirschfeldt','Logic & foundations','Computability theory|Algorithmic randomness|Reverse mathematics|Computable model theory','drh@math.uchicago.edu'],
 ['Maryanthe Malliaris','maryanthe-malliaris','Logic & foundations','Model theory|Classification theory','mem@math.uchicago.edu'],
 ['André Neves','andre-neves','Geometry & analysis','Geometric analysis|Variational methods|Minimal surfaces','aneves@math.uchicago.edu'],
 ['Simion Filip','simion-filip','Dynamics & geometry','Dynamical systems|Complex geometry|Algebraic geometry','sfilip@math.uchicago.edu'],
 ['Ewain Gwynne','ewain-gwynne','Probability','Liouville quantum gravity|LQG|Schramm-Loewner evolution|SLE|Random planar maps|Random geometric objects','ewain@uchicago.edu','https://math.uchicago.edu/~ewain/'],
 ['Carlos Kenig','carlos-kenig','Analysis & PDE','Analysis|Partial differential equations','cek@math.uchicago.edu'],
 ['Huy Tuan Pham','huy-tuan-pham','Probability & combinatorics','Combinatorics|Probability','htpham@uchicago.edu','https://huytuanpham.github.io/'],
 ['Akhil Mathew','akhil-mathew','Categories & topology','Homotopy theory|Arithmetic geometry','amathew@math.uchicago.edu','https://math.uchicago.edu/~amathew/'],
 ['Amie Wilkinson','amie-wilkinson','Dynamics & geometry','Dynamical systems|Ergodic theory','amie.wilkinson.math@gmail.com','https://math.uchicago.edu/~wilkinso/']
];
for(const [name,slug,area,topics,email,personal] of chi)add(name,'University of Chicago','US','Americas','Professor',area,topics,chicago+slug+'/',email,personal||chicago+slug+'/',{researchSource:personal||chicago+slug+'/',...(name==='Amie Wilkinson'?{contactNote:'The author explicitly prefers this professionally posted Gmail address and says not to use the two older uchicago.edu addresses, which do not forward correctly.'}:{}),...(name==='Ewain Gwynne'?{studentRecords:[{student:'Jinwoo Sung',type:'Degree completion',date:'2025',precision:'year',institution:'University of Chicago',relationship:'Listed among PhD students advised at least in part by Ewain Gwynne',description:'The author records graduation in June 2025. This is completion evidence, not evidence of a 2025 recruitment event.',sources:['https://math.uchicago.edu/~ewain/'],checked}]}:{})});

const ymsc='https://ymsc.tsinghua.edu.cn/en/';
const ts=[
 ['Dylan G. Allegretti','1033/2289','Geometry & mathematical physics','Geometry|Mathematical physics|Stability conditions|Cluster varieties'],
 ['Caucher Birkar','1031/1892','Algebra & geometry','Algebraic geometry|Birational geometry'],
 ['Weiyan Chen','1033/1249','Geometry & topology','Geometry|Topology'],
 ['Yitwah Cheung','1031/2454','Dynamics & number theory','Dynamics on moduli spaces|Ergodic theory|Diophantine approximation'],
 ['Hansheng Diao','1032/1216','Number theory & arithmetic geometry','p-adic Hodge theory|(phi, Gamma)-modules|Families of Galois representations'],
 ['William Donovan','1032/1215','Algebra & geometry','Algebraic geometry'],
 ['Heng Du','1033/3044','Number theory & representation theory','Number theory|Representation theory|p-adic Hodge theory|Fargues-Fontaine curve|p-adic Langlands'],
 ['Lei Fu','1031/1888','Number theory & arithmetic geometry','Arithmetic algebraic geometry|l-adic cohomology|p-adic cohomology'],
 ['Akito Futaki','1031/1887','Geometry','Differential geometry'],
 ['Bin Gui','1033/1829','Algebra & mathematical physics','Conformal field theory|Operator algebras|Conformal nets'],
 ['Honghao Gao','1032/3377','Symplectic geometry & topology','Contact topology|Symplectic topology'],
 ['Chenlin Gu','1033/2311','Probability & PDE','Probability|Stochastic processes|Partial differential equations'],
 ['Jianping Jiang','1033/1978','Probability & mathematical physics','Probability|Statistical physics|Ising model'],
 ['Long Jin','1032/1213','Analysis & PDE','Analysis|Partial differential equations|Scattering resonances|Microlocal analysis'],
 ['Penghui Li','1032/3191','Algebra & representation theory','Geometric representation theory|Geometric Langlands|Singular support|Character sheaves|Hecke algebras'],
 ['Huajie Li','1033/3473','Number theory','Number theory|Automorphic forms|Relative trace formula'],
 ['Li Li','1033/3049','Analysis & PDE','Partial differential equations|Inverse problems'],
 ['Wenbo Li','1033/3675','Geometry & analysis','Metric measure spaces|Metric geometry|Stochastic geometry'],
 ['Jianfeng Lin','1032/1835','Geometry & topology','Topology'],
 ['Si Li','1031/3712','Geometry & mathematical physics','Mathematical physics'],
 ['Zhengwei Liu','1031/1883','Analysis & operator algebras','Subfactor theory|Functional analysis'],
 ['Vladimir Markovic','1031/3108','Geometry & topology','Geometry|Topology'],
 ['Robert McRae','1032/3604','Algebra & mathematical physics','Vertex operator algebras|Braided tensor categories|Conformal field theory'],
 ['Yu Qiu','1031/1881','Algebra & topology','Algebraic representation theory|Geometric topology'],
 ['Nicolai Reshetikhin','1031/1880','Representation theory & mathematical physics','Mathematical physics|Low-dimensional topology|Representation theory'],
 ['Peng Shan','1031/2374','Algebra & representation theory','Geometric representation theory'],
 ['Koji Shimizu','1033/2461','Number theory & arithmetic geometry','p-adic Hodge theory|p-adic geometry'],
 ['Changjian Su','1033/2845','Algebra & representation theory','Representation theory'],
 ['Weifeng Sun','1033/3047','Geometry & topology','Gauge theory|Low-dimensional topology'],
 ['Xuecheng Wang','1032/2643','Analysis & PDE','Nonlinear partial differential equations'],
 ['Hao Wu','1031/1876','Probability & mathematical physics','Probability|Statistical physics'],
 ['Yunhui Wu','1031/2783','Geometry','Teichmuller theory|Geometry'],
 ['Jian Xiao','1032/1980','Geometry','Complex geometry'],
 ['Bin Xu','1032/1209','Number theory','Automorphic forms|Langlands programme'],
 ['Cheng Zhang','1033/2337','Analysis','Harmonic analysis'],
 ['Hao Zheng','1031/2339','Topology & mathematical physics','Low-dimensional topology|Mathematical physics|Representation theory'],
 ['Zhifei Zhu','1033/3045','Geometry','Differential geometry'],
 ['Yihang Zhu','1031/2759','Number theory','Number theory']
];
for(const [name,slug,area,topics] of ts)add(name,'Tsinghua University — YMSC','China','Asia','Listed faculty member — verify exact supervision eligibility',area,topics,ymsc+'info/'+slug+'.htm','','',{affiliationSource:ymsc+'People/Faculty1.htm',researchNote:'Present listing is corroborated by the current institutional faculty directory. Individual biographies may retain older ranks or concurrent appointments; this record does not assert a particular tenure category or automatic doctoral-supervision eligibility.',relatedInstitutions:['Tsinghua University — YMSC / Qiuzhen']});

add('Baoping Liu','Peking University','China','Asia','Associate Professor','Analysis & PDE','Nonlinear PDE|Fluid mechanics|Mathematical physics','https://math.pku.edu.cn/teachers/~baoping/','baoping@math.pku.edu.cn');
add('Zhiqiang Li','Peking University — BICMR / SMS','China','Asia','Associate Professor','Dynamics & geometry','Dynamical systems|Fractal geometry','https://www.math.pku.edu.cn/teachers/lizq/','zli@math.pku.edu.cn');
add('Shuonan Wu','Peking University','China','Asia','Associate Professor','Applied mathematics & numerical analysis','Numerical PDE|Finite element methods|Nonconforming methods|Fractional Laplacian','https://math.pku.edu.cn/teachers/snwu/','snwu@math.pku.edu.cn');
add('Guo Chuan Thiang','Peking University — BICMR','China','Asia','Assistant Professor','Topology & mathematical physics','K-theory|Index theory|Noncommutative geometry|Operator algebras|Topological phases of matter','https://faculty.bicmr.pku.edu.cn/~guochuanthiang/','guochuanthiang@bicmr.pku.edu.cn');
add('Alessio Figalli','ETH Zurich','Switzerland','Europe','Full Professor; FIM Director','Analysis & PDE','Calculus of variations|Optimal transport|Free boundary problems|Elliptic PDE|Geometric inequalities','https://people.math.ethz.ch/~afigalli/','alessio.figalli@math.ethz.ch',undefined,{contactNote:'The official page directs academic invitations and public-appearance requests to the named assistant. Follow its contact guidance; this email listing does not authorize unsolicited mass mail.'});
add('Jack Thorne','University of Cambridge','UK','Europe','Professor of Number Theory','Number theory','Number theory|Arithmetic geometry','https://www.dpmms.cam.ac.uk/node/306','thorne@dpmms.cam.ac.uk');
add('Nathalie Wahl','University of Copenhagen','Denmark','Europe','Professor; GeoTop Director','Categories & topology','Algebraic topology|Homological stability|Mapping class groups|String topology|Operads','https://web.math.ku.dk/~wahl/','wahl@math.ku.dk');
add('Bálint Virág','University of Toronto','Canada','Americas','Professor','Probability','Probability|Random operators','https://www.math.utoronto.ca/balint/','balint@math.toronto.edu','https://www.math.utoronto.ca/~balint/virag-cv.pdf',{contactNote:'Address explicitly stated in the author-hosted CV; the homepage’s old Harvard personal page is not used as a current contact source.'});
add('Ben Andrews','Australian National University','Australia','Oceania','Professor; Associate Director (Research)','Geometry & analysis','Differential geometry|Geometric PDE|Mean curvature flow|Ricci flow|Isoperimetric inequalities','https://maths.anu.edu.au/people/ben-andrews','Ben.Andrews@anu.edu.au');

const ethDirectory='https://math.ethz.ch/de/das-departement/organisation/unabhaengige-professuren.html';
const eth=[
 ['Paul Biran','Symplectic geometry & topology','Symplectic geometry|Symplectic topology','https://math.ethz.ch/research/symplectic-algebraic-geometry-topology.html','paul.biran@math.ethz.ch'],
 ['Ana Cannas da Silva','Symplectic geometry & topology','Symplectic geometry|Symplectic toric manifolds','https://people.math.ethz.ch/~acannas/','ana.cannas@math.ethz.ch'],
 ['Manfred Einsiedler','Dynamics & number theory','Homogeneous dynamics|Equidistribution|Ergodic theory','https://people.math.ethz.ch/~einsiedl/','manfred.einsiedler@math.ethz.ch'],
 ['Lorenz Halbeisen','Logic & foundations','Set theory|Forcing|Combinatorial set theory','https://people.math.ethz.ch/~halorenz/','lorenz.halbeisen@math.ethz.ch'],
 ['Emmanuel Kowalski','Number theory','Analytic number theory|Spectral gaps','https://people.math.ethz.ch/~kowalski/','emmanuel.kowalski@math.ethz.ch'],
 ['Francesca Da Lio','Analysis & geometry','Analysis|Geometry','https://people.math.ethz.ch/~fdalio/','francesca.dalio@math.ethz.ch'],
 ['Vincent Tassion','Probability','Probability|Percolation','https://people.math.ethz.ch/~vtassion/','vincent.tassion@math.ethz.ch'],
 ['Rahul Pandharipande','Algebra & geometry','Algebraic geometry|Moduli spaces','https://people.math.ethz.ch/~rahul/','rahul.pandharipande@math.ethz.ch']
];
for(const [name,area,topics,personal,email] of eth)add(name,'ETH Zurich','Switzerland','Europe',name==='Lorenz Halbeisen'?'Adjunct Professor':'Listed mathematics faculty',area,topics,ethDirectory,email,ethDirectory,{researchSource:personal,...(name==='Emmanuel Kowalski'?{availabilityNote:'The author says the advertised 2026 postdoctoral position has been filled. This is not a current open-position advertisement and does not establish student availability.'}:{})});
add('Perla Sousi','University of Cambridge','UK','Europe','Professor of Probability','Probability','Random walks|Brownian motion|Mixing times|Dynamical percolation','https://www.dpmms.cam.ac.uk/person/ps422','p.sousi@statslab.cam.ac.uk');
add('Julia Wolf','University of Cambridge','UK','Europe','Professor','Combinatorics & analysis','Arithmetic combinatorics|Harmonic analysis|Analytic number theory','https://www.dpmms.cam.ac.uk/person/jw291','julia.wolf@dpmms.cam.ac.uk');
add('Henry Wilton','University of Cambridge','UK','Europe','Professor','Groups & topology','Geometric group theory|Low-dimensional topology','https://www.dpmms.cam.ac.uk/person/hjrw2','hjrw2@cam.ac.uk');
add('Ivan Smith','University of Cambridge','UK','Europe','Professor of Geometry','Symplectic geometry & topology','Symplectic topology','https://www.dpmms.cam.ac.uk/person/is200','I.Smith@dpmms.cam.ac.uk');
export default people;
