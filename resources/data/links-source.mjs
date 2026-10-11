const entries=[];const checked='2026-10-11';
function group(category,use,rows){for(const [title,author,url,area,note,language='English'] of rows)entries.push({title,author,url,source:url,category,area,note,use,language,checked})}
group('Reference & archives','Use references to locate primary literature; check versions, conventions and terms.',[
['Stacks Project','The Stacks Project Authors','https://stacks.math.columbia.edu/','Algebraic geometry','An open, tagged reference on schemes, stacks and related algebra.'],
['Kerodon','Jacob Lurie','https://kerodon.net/','Higher categories','An evolving tagged text for higher categorical and homotopical foundations.'],
['arXiv Mathematics','arXiv / Cornell University','https://arxiv.org/archive/math','All mathematics','Author-submitted preprints; submission is not peer-review certification.'],
['zbMATH Open','FIZ Karlsruhe, EMS and Heidelberg Academy','https://zbmath.org/','All mathematics','Bibliographic metadata and mathematical reviews with open search.'],
['NUMDAM','French mathematical digitization programme','https://www.numdam.org/','All mathematics','Authorized digitized journals, seminars and monographs.','English / French'],
['EuDML','European Digital Mathematics Library','https://eudml.org/','All mathematics','Discovery across European digital mathematics collections.'],
['nLab','nLab contributors','https://ncatlab.org/nlab/show/HomePage','Higher categories','Community articles about categories and related geometry; verify statements in primary references.'],
['Digital Library of Mathematical Functions','NIST','https://dlmf.nist.gov/','Analysis','Definitions, identities and references for special functions.'],
['LMFDB','LMFDB collaboration','https://www.lmfdb.org/','Number theory','A database of L-functions, modular forms and related arithmetic objects.'],
['MathWorld','Eric W. Weisstein / Wolfram Research','https://mathworld.wolfram.com/','All mathematics','An illustrated mathematical reference with bibliographic links.']
]);
group('Courses & video','Choose a coherent series and check the course syllabus and prerequisite level.',[
['MIT OpenCourseWare Mathematics','MIT','https://ocw.mit.edu/search/?d=Mathematics','All mathematics','Course materials at multiple levels; video availability varies by course.'],
['Cambridge Part III Preparation','University of Cambridge','https://www.maths.cam.ac.uk/postgrad/part-iii/node/85','All mathematics','Preparation guidance for advanced taught mathematics.'],
['Oxford Mathematics Public Lectures','University of Oxford','https://www.maths.ox.ac.uk/events/public-lectures-events','All mathematics','Public-facing talks, not a complete degree curriculum.'],
['Richard Borcherds Lectures','Richard E. Borcherds','https://www.youtube.com/@richarde.borcherds7998','Algebra & geometry','Author-recorded lecture series in advanced mathematics.'],
['SLMath Video Library','Simons Laufer Mathematical Sciences Institute','https://www.slmath.org/videos','All mathematics','Research-programme and school lecture recordings.'],
['IAS Video Lectures','Institute for Advanced Study','https://www.ias.edu/video','All mathematics','Institute lectures and seminars; many mathematical talks require research-level preparation.'],
['IHÉS Audiovisual Resources','IHÉS','https://www.ihes.fr/en/library/the-nicolaas-hendrik-kuiper-library/','Geometry & mathematical physics','Recorded research and school material.','English / French'],
['CIRM Audiovisual Mathematics Library','CIRM','https://library.cirm-math.fr/','All mathematics','Conference and school lectures with subject metadata.','English / French'],
['NPTEL Courses','IITs and IISc','https://nptel.ac.in/courses','All mathematics','A course portal with mathematics among its disciplines.'],
['ICTP Mathematics','Abdus Salam ICTP','https://www.ictp.it/math','All mathematics','Mathematical activities and training; distinguish non-degree diplomas from degrees.']
]);
group('Institutes & summer schools','Dates and eligibility are activity-specific; archived events are not open calls.',[
['Clay Mathematics Institute','CMI','https://www.claymath.org/','All mathematics','Research, exposition and mathematics school information.'],
['Isaac Newton Institute','University of Cambridge','https://www.newton.ac.uk/','All mathematics','Thematic research programmes and recordings.'],
['Banff International Research Station','BIRS','https://www.birs.ca/','All mathematics','Workshops and lecture archives across mathematics.'],
['Oberwolfach','Mathematisches Forschungsinstitut Oberwolfach','https://www.mfo.de/','All mathematics','Workshops, seminars and mathematical resources.'],
['Hausdorff Research Institute','University of Bonn','https://www.mathematics.uni-bonn.de/him','All mathematics','Thematic programmes and junior research activities.'],
['Fields Institute','Fields Institute','https://www.fields.utoronto.ca/','All mathematics','Thematic activities, schools and lectures.'],
['International Centre for Mathematical Sciences','ICMS','https://www.icms.org.uk/','All mathematics','Research workshops and advanced schools.'],
['IMPA','Instituto de Matemática Pura e Aplicada','https://impa.br/','All mathematics','Graduate mathematics, summer courses and research in Brazil.','Portuguese / English'],
['Institut Henri Poincaré','IHP','https://www.ihp.fr/en','All mathematics','Thematic programmes in mathematics and theoretical physics.','English / French'],
['Centre de Recerca Matemàtica','CRM Barcelona','https://www.crm.cat/','All mathematics','Research programmes, advanced courses and seminars.']
]);
group('Subject portals','These are discovery or advanced-study portals; follow the cited original sources.',[
['Hatcher’s Topology Resources','Allen Hatcher','https://pi.math.cornell.edu/~hatcher/','Topology','Author books, notes and supplementary material in algebraic and geometric topology.'],
['Calegari’s Geometry & Topology Resources','Danny Calegari','https://math.uchicago.edu/~dannyc/','Topology','Author books, course materials and exposition in topology and geometry.'],
['Number Theory Resources at UNCG','University of North Carolina at Greensboro','https://mathstats.uncg.edu/number-theory/resources/','Number theory','An academic directory of arithmetic references and computational tools.'],
['Probability Surveys','Probability Surveys editors / Project Euclid','https://projecteuclid.org/journals/probability-surveys','Probability','An open-access journal of expository probability articles, often at graduate or research level.'],
['Dennis Gaitsgory’s Exposition','Dennis Gaitsgory','https://people.mpim-bonn.mpg.de/gaitsgde/','Algebraic geometry','Author material around geometric representation theory and derived geometry.'],
['Arizona Winter School','University of Arizona','https://swc-math.github.io/','Number theory','Graduate arithmetic schools with notes, projects and lecture archives.'],
['Park City Mathematics Institute','IAS / PCMI','https://www.ias.edu/pcmi','Geometry & topology','School programmes for several mathematical audiences; tracks have different levels.'],
['AIM Problem Lists','American Institute of Mathematics','https://aimath.org/problemlists/','All mathematics','Research problem lists; unsolved questions are not routine exercises.'],
['Association for Symbolic Logic','ASL','https://aslonline.org/','Logic','Logic meetings, publications and professional information.'],
['Electronic Journal of Combinatorics','EJC editors','https://www.combinatorics.org/','Combinatorics','Open research articles and dynamic surveys.']
]);
group('Mathematicians’ writing & blogs','Exposition and opinions are attributed to their authors, not universal conclusions.',[
['What’s New','Terence Tao','https://terrytao.wordpress.com/','Analysis & number theory','Research exposition, notes and personal professional advice.'],
['Gowers’s Weblog','Timothy Gowers','https://gowers.wordpress.com/','Combinatorics & analysis','Mathematical discussion and personal commentary.'],
['Azimuth','John Baez and contributors','https://johncarlosbaez.wordpress.com/','Categories & mathematical physics','Expository writing across mathematics and science.'],
['Peter Cameron’s Blog','Peter J. Cameron','https://cameroncounts.wordpress.com/','Combinatorics & algebra','Expository and reflective writing in discrete mathematics.'],
['J. S. Milne’s Mathematics','J. S. Milne','https://www.jmilne.org/math/','Algebra & number theory','Author books, notes, errata and background material.'],
['Ravi Vakil’s Geometry Course','Ravi Vakil','https://math.stanford.edu/~vakil/216blog/','Algebraic geometry','The Rising Sea and associated course guidance.'],
['Dominic Joyce’s Resources','Dominic Joyce','https://people.maths.ox.ac.uk/joyce/','Geometry','Author notes, books and surveys; draft definitions can differ from published ones.'],
['Peter Scholze’s Notes & Papers','Peter Scholze','https://people.mpim-bonn.mpg.de/scholze/papers.html','Arithmetic geometry','Author papers and long lecture notes, generally graduate or research level.'],
['Jacob Lurie’s Texts','Jacob Lurie','https://www.math.ias.edu/~lurie/','Higher categories','Author texts with explicit warnings about unfinished drafts.'],
['Emily Riehl’s Writing','Emily Riehl','https://emilyriehl.github.io/','Category theory','Books and exposition, from ordinary to infinity-category theory.']
]);
group('Communities & communication','Community answers and personal reflections are not automatically verified or current.',[
['MathOverflow','MathOverflow community','https://mathoverflow.net/tour','All mathematics','Research-level questions and answers; not a homework help forum.'],
['Mathematics Stack Exchange','Mathematics Stack Exchange community','https://math.stackexchange.com/tour','All mathematics','Mathematical questions across many levels; include your own attempts.'],
['Polymath','Polymath contributors','https://polymathprojects.org/','Combinatorics & number theory','Public collaborative projects and archives; historical projects may no longer be active.'],
['The n-Category Café','John Baez, David Corfield and Urs Schreiber','https://golem.ph.utexas.edu/category/','Higher categories','Categorical discussions, exposition and author viewpoints.'],
['Mathstodon','Mathstodon community','https://mathstodon.xyz/','All mathematics','A mathematical social community; posts are not peer-reviewed sources.'],
['AMS Mathematical Communication','American Mathematical Society','https://www.ams.org/profession/leaders/workshops/mathcomm','Mathematical writing','Resources for mathematical communication and presentations.'],
['Graduate Student Blog','AMS / contributors','https://blogs.ams.org/mathgradblog/','Study & careers','Student perspectives; older posts do not establish current admissions requirements.'],
['LMS Newsletter','London Mathematical Society','https://www.lms.ac.uk/publications/lms-newsletter','All mathematics','Community news and expository writing; date-check announcements.'],
['Notices of the AMS','American Mathematical Society','https://www.ams.org/notices','All mathematics','Expository and professional articles; distinguish opinion from research.'],
['EMS Magazine','European Mathematical Society','https://euromathsoc.org/magazine','All mathematics','Mathematical exposition and professional perspectives.']
]);
group('Computation & formalization','Learn the documentation; numerical experiments are not a substitute for proof.',[
['SageMath','SageMath developers','https://www.sagemath.org/','Computational mathematics','Open mathematical computation across algebra, arithmetic and geometry.'],
['GAP','GAP Group','https://www.gap-system.org/','Computational algebra','Software for computational discrete algebra and groups.'],
['PARI/GP','PARI Group','https://pari.math.u-bordeaux.fr/','Number theory','A number-theoretic computation system.'],
['Macaulay2','Macaulay2 developers','https://macaulay2.com/','Algebraic geometry','Computation in commutative algebra and algebraic geometry.'],
['Singular','Singular team','https://www.singular.uni-kl.de/','Computational algebra','Polynomial computation and computational algebra.'],
['Lean Community & mathlib','Lean community','https://leanprover-community.github.io/','Formal proof','Libraries, documentation and learning routes for formal mathematics.'],
['Theorem Proving in Lean 4','Lean developers and contributors','https://lean-lang.org/theorem_proving_in_lean4/','Formal proof','A structured introduction to formal theorem proving.'],
['Rocq Prover','Rocq developers','https://rocq-prover.org/','Formal proof','An interactive proof assistant formerly named Coq.'],
['Isabelle','Isabelle developers','https://isabelle.in.tum.de/','Formal proof','A proof assistant with mature higher-order logic infrastructure.'],
['Agda','Agda developers','https://agda.readthedocs.io/','Formal proof','Dependent types, programming and formal proof documentation.']
]);
group('Open textbooks & study tools','Follow each author’s prerequisites and use the legally available edition.',[
['Open Logic Project','Open Logic Project contributors','https://openlogicproject.org/','Logic','Open modular logic teaching material.'],
['AIM Open Textbook Initiative','American Institute of Mathematics','https://aimath.org/textbooks/','All mathematics','A portal to open mathematics textbooks.'],
['OpenStax Mathematics','Rice University / OpenStax','https://openstax.org/subjects/math','Undergraduate mathematics','Open introductory textbooks, not research monographs.'],
['LibreTexts Mathematics','LibreTexts contributors','https://math.libretexts.org/','Undergraduate mathematics','Open teaching resources with varying authorship and course levels.'],
['Judson’s Abstract Algebra','Thomas W. Judson','https://abstract.ups.edu/','Algebra','An open algebra text with accessible formats.'],
['Jiří Lebl’s Books','Jiří Lebl','https://www.jirka.org/','Analysis','Author-written open analysis texts.'],
['Axler’s Books','Sheldon Axler','https://www.axler.net/','Analysis & linear algebra','Author information and legally available editions of selected books.'],
['The Infinite Napkin','Evan Chen','https://web.evanchen.cc/napkin.html','All mathematics','Broad personal exposition; not a replacement for a detailed subject textbook.'],
['David Tong’s Lecture Notes','David Tong','https://www.damtp.cam.ac.uk/user/tong/teaching.html','Mathematical physics','Author theoretical-physics notes with mathematically relevant topics.'],
['ProofWiki','ProofWiki contributors','https://proofwiki.org/','Proofs & foundations','Community definitions and proofs; check arguments and references independently.']
]);
export default entries;
