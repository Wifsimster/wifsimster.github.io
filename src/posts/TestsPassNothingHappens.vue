<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'tests-pass-nothing-happens',
  date: '2026-08-29',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'The Tests Passed. Nothing Happened.',
  description: 'A merged fix, a green pipeline, a signed review — and in the field, nothing. The defect agents produce most often has no symptom, and no amount of rereading finds it. How the checks got written, one incident at a time, and the failure they will never catch.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> For six weeks, four of our services wrote legally-opposable audit records into a queue that nothing drained. The code was correct. The pipeline was green. The reviewer had signed. Four hundred and sixty-eight records waited, and the guarantee they were meant to produce did not exist. That is the defect this way of working produces most often: not a wrong line, an absent one. So no, we do not trust the output with our eyes closed — and reading it line by line is not the alternative either. We moved the check out of the reading and into the build. Thirty-nine of our forty-one repository checks now fail the pipeline, one per mistake we had already paid for once.</p></div>
<hr>
<p>Six weeks after we shipped it, we found out the feature had never once done its job.</p>
<p>Not slowly. Not partially. Never. The change had been reviewed by a human, typechecked, unit-tested, run through our pre-merge gate and merged green. Every instrument we own said yes. And the thing it was supposed to guarantee — a regulatory obligation on <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, the hospital <abbr title="Enterprise Resource Planning — the administrative backbone of a hospital group">ERP</abbr> my team builds — had quietly not been happening since the day it went out.</p>

<h2>The defect that has no symptom</h2>
<p>The mechanism is worth stating precisely, because the whole argument sits on it.</p>
<p>Regulated healthcare writes carry a legal audit trail. Ours is fail-closed by construction: the audit row shares the transaction of the mutation it documents, so if the audit cannot be written, the mutation is refused. That part worked exactly as designed. It still does.</p>
<p>The next link was dead. Four services enqueued their audit events into a local outbox and never started the loop that relays them to the audit database. The events piled up locally and went nowhere.</p>
<p>Now look at why every instrument stayed green. No test broke, because the write itself works — that is what the tests assert. The boot probe passed, because it proves the audit database is reachable, not that anything reaches it. And on one of the four services, a different relay loop — the event bus, unrelated — prints a nearly identical line at startup, so the logs read as correct to anyone scanning them.</p>
<p>The defect is only visible if you query the audit database already knowing what to look for. On 28 August we did, and found 468 opposable events waiting since 21 July with zero delivery attempts: absent from the twenty-year retention base, absent from the hash chain that makes the trail tamper-evident, absent from every audit screen a compliance officer would open.</p>
<blockquote><p>Nothing was broken. Nothing happened. Only one of those two failures has a symptom.</p></blockquote>

<h2>Why rereading the diff stopped working</h2>
<p>There are two separate reasons, and only one of them is about volume.</p>
<p>The volume argument is real and I will concede it quickly. More code arrives per week than any team reads with actual attention. Everyone in this conversation has already made that observation.</p>
<p>The second reason is the interesting one, because it survives even if you had infinite reading time. Reading a diff is an instrument for finding a wrong line. This was a missing line, in a file the diff never opened. You cannot notice an absence in a document that does not contain it. The obligation spanned two files: writing an audit event here obliges starting a relay loop there, and nothing in the first file says so.</p>
<p>That shape repeats across almost half our checks. A resource class announced in our public interoperability contract obliges a <abbr title="Uniform Resource Locator — here, the address of the service that owns the resource">URL</abbr> provisioned in the deployment file. A port published next to the gateway silently removes the authentication that the gateway performs. A configuration flag declared as replacing an environment variable obliges that nothing, anywhere, still reads that variable. In every case the change is locally correct and the obligation lives somewhere the reviewer is not looking.</p>
<p>Human review is weakest exactly where the obligation crosses files. A script is strongest exactly there. That is the whole trade, and it is less about artificial intelligence than the framing usually suggests.</p>
<p>One finding did change how I read a pull request, though. A study accepted at <abbr title="Mining Software Repositories — a peer-reviewed software-engineering conference">MSR</abbr> 2026 found that agent-written pull requests ship measurably more redundant code, and — the part that stings — that reviewers expressed more neutral-to-positive sentiment toward those pull requests than toward human ones. Well-formed, idiomatic, generously commented code buys less suspicion per line than it has earned. The output is plausible before it is correct, and plausibility is what a reviewer is actually sampling.</p>
<p>I want to be accurate about the claim, because the overclaim is tempting. This is not a new species of bug. A tired engineer forgets the same call on a Friday afternoon, and has since long before any of this. What changed is the rate at which the omission is produced and the economics of catching it by reading.</p>
<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One merged change passed every gate the team owns — typecheck, unit tests, human review, boot probe, pre-merge gate and CI were all green — and yet 468 legally-opposable audit records were enqueued over six weeks with zero delivery attempts, none of them reaching the twenty-year retention base." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">ONE CHANGE · EVERY GATE IT PASSED</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Six gates green. Zero records delivered.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="178" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="292" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="406" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="520" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="634" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.75">
<text x="115" y="120">typecheck</text>
<text x="229" y="120">unit tests</text>
<text x="343" y="120">review</text>
<text x="457" y="120">boot probe</text>
<text x="571" y="120">pre-merge</text>
<text x="685" y="120">CI</text>
</g>
<text x="64" y="176" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.55" letter-spacing="0.1em">OPPOSABLE AUDIT RECORDS · 21 JUL TO 28 AUG</text>
<rect x="64" y="190" width="672" height="38" rx="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="84" y="215" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">468 enqueued</text>
<text x="716" y="215" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" text-anchor="end" opacity="0.8">0 delivered</text>
<path d="M 64 240 L 64 252 L 736 252 L 736 240" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 400 252 L 400 264" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="400" y="292" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">none of them reached the retention base</text>
<text x="64" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">real incident, counts as found on 28 August 2026</text>
</svg>

<h2>A check is a scar, written down</h2>
<p>Three more, quickly, because the pattern only becomes visible in repetition.</p>
<p><strong>The stub that propagated.</strong> Fifteen services resolved the acting user from a plain request header, falling back to a fixed identifier when it was absent. On a shared machine that meant a document could be uploaded — and deleted — with no session at all, and the actor recorded in the legal audit trail was whatever the caller typed. Nobody decided to write that fifteen times. It was scaffolded once and carried forward, service after service, each copy locally consistent with the last.</p>
<p><strong>The switch that switched nothing.</strong> Our configuration catalogue declared a flag as replacing an environment variable. The settings screen rendered the toggle. The service kept reading the environment variable. An operator believed they had restricted calls to a national identity teleservice. They had not. A guarantee you believe you have and do not is worth less than no guarantee at all, because you stop checking.</p>
<p><strong>The contract that lied.</strong> Our public interoperability contract is generated from the targets actually wired in the code, so the code cannot contradict itself. The deployment could. Three service addresses were missing from the compose file, so three resource classes answered with a server error in every deployment while the published contract advertised them — and the error we returned was the retryable kind, so a partner would retry forever for something that was never going to arrive.</p>
<p>Each of these is now a script that fails the build. They share one design rule, and it is the only transferable thing in this post: derive the perimeter from the code, never recopy it. A hand-maintained list of paths drifts at the first rename, and a new file enters the sensitive perimeter without anyone thinking to declare it there. The rule is worth something only when forgetting is structurally impossible.</p>
<blockquote><p>A check does not make the code correct. It makes one specific mistake impossible to repeat.</p></blockquote>

<h2>What a check cannot see</h2>
<p>Now the honest half, which matters more than the first.</p>
<p>Our thirty-nine blocking checks encode thirty-nine defects we eventually found, most of them after they had already cost something. The audit-relay check exists precisely because the audit-relay check did not exist. That is a ratchet, not a net. It does not tell me the pipeline is trustworthy. It tells me we cannot repeat thirty-nine specific mistakes, and says nothing whatsoever about the class still running that nobody has noticed yet.</p>
<p>The gate flatters itself, too. Our pre-merge command returns a single verdict in parity with <abbr title="Continuous Integration — the automated pipeline that builds and checks every change">CI</abbr>, and what it proves is narrower than it looks: no known executable rule is violated. Its end-to-end phase runs against mocks and never touches a real database. Not one of the four incidents above would have been caught by it.</p>
<p>Checks also catch the disease they treat. We keep a list of the write operations that are legally opposable. It held twelve entries while the code had grown to a hundred and twenty-five. So we wired a check — and its first version missed twenty-eight further writes through four blind spots, while the pipeline cheerfully reported the list up to date. The script had reproduced, inside itself, the exact failure it was built to close.</p>
<p>And the escape hatches. A rule that can never be waived gets worked around instead, so ours carry greppable derogations, each with a written reason next to it. About a dozen are in use across the codebase. But exactly one of the forty-one checks counts its derogations over time against a baseline that can only go down. The others could accumulate exemptions quietly, and nothing at all prevents an agent from writing its own exemption to get itself green. That is the open flaw in everything I have just described, and I do not have a fix shipped for it.</p>
<blockquote><p>An exemption nobody counts is a rule with an expiry date nobody set.</p></blockquote>

<h2>The bill</h2>
<p>The counts, with their caveats, because a number without its caveat is the thing this blog exists to refuse.</p>
<p>An internal inventory in late July found twenty-three of these scripts. The repository holds forty-one today: thirty-nine fail the build, one is advisory on purpose — it reminds a pull request that it changed a service without touching that service's context file — and one is not wired to the pipeline at all. Five were written in the last eight days.</p>
<p>I cannot date the older ones. The repository history was squashed when it was imported on 21 August, so every file older than that reports the same creation date, and the growth curve I would like to show you does not exist. The only rate I can honestly quote is the recent window.</p>
<p>They are not free. Each check is code, with its own bugs, and it has to stay fast or it gets skipped. Several have nothing to do with agents — an icon-class check, a report-theme check — and I am not going to dress up ordinary hygiene as an artificial-intelligence story.</p>
<p>One thing cuts the other way, and leaving it out would be dishonest. Writing a check immediately after an incident used to be the action item that died in a backlog; it now costs almost nothing, which is why there are forty-one instead of six. And before touching a structural change, an agent reads all sixty-seven of our architecture decisions and every rule we have written down. No human on the team does that. I do not do that.</p>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The repository's executable checks grew from 23 in late July to 41 today, an increase of 18 in about five weeks; of the 41, thirty-nine fail the build, one is advisory by design and one is not wired to the pipeline." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">EXECUTABLE CHECKS IN THE REPOSITORY</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">23 in late July. 41 today.</text>
<rect x="64" y="106" width="377" height="46" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="441" y="106" width="295" height="46" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="84" y="135" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.75">23 already there</text>
<text x="461" y="135" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.85">18 added</text>
<path d="M 441 164 L 441 176 L 736 176 L 736 164" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 588 176 L 588 188" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="588" y="214" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">+18 in five weeks</text>
<text x="64" y="252" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.65">39 of the 41 fail the build · 1 advisory by design · 1 not wired to the pipeline</text>
<text x="64" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">late-July figure from an internal inventory, today's counted in the repository</text>
</svg>

<h2>What still belongs to humans</h2>
<p>Being surprised first. Every one of these checks exists because a person felt something was off and went looking in a database at eleven at night. No rule has ever written the first rule.</p>
<p>Deciding what a defect means. That 468 records are stalled is a technical fact. That this breaks a retention obligation with a twenty-year horizon is a judgement, and it is the judgement that decides whether the fix ships tonight or next sprint.</p>
<p>Judging a derogation. Greppable means auditable if someone actually greps.</p>
<p>And one perimeter where we chose a person on purpose: the surface reachable from outside the hospital information system, the one with a static entry secret and a destructive delete. Changes there require review by someone who did not write them. We could have written a script. We decided that this specific class of mistake should cost a human conversation.</p>
<p>The question no check asks is whether the thing should exist at all.</p>
<p>None of this is an argument for fewer people. The people are the ones who get surprised first, and being surprised is the only part of this that does not scale by writing more scripts.</p>

<h2>What to do Monday morning</h2>
<ol>
<li><strong>Take one incident you have already paid for and make it fail the build this week.</strong> Not a policy, not a list. One incident, one script.</li>
<li><strong>Prefer the obligations that cross files.</strong> Writing here obliges starting there; announcing here obliges provisioning there. That is where review is blind and a script is cheap.</li>
<li><strong>Derive the perimeter from the code, never recopy it.</strong> Any hand-maintained list of paths is wrong one rename later, and it fails silently.</li>
<li><strong>Give every check an honest scope section, inside the file, saying what it does not see.</strong> You will read it back on the day it lets something through, and you will want it to have been written before you were disappointed.</li>
<li><strong>Count your derogations against a baseline that can only go down.</strong> I have one of those. I should have forty.</li>
<li><strong>Write down what your gate proves and what it does not.</strong> Ours proves that no known rule is broken. It has nothing to say about the rule nobody has written yet, and that is the one that will cost you.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> — the argument this post puts a floor under. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">The Backlog Was Never the Job</a> — who signs when the rule and the judgement disagree. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — the verification tax, counted. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">The Loop That Reads You Back</a> — why my own sense of speed is not evidence. <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">The LAN Is Dead</a> — the checkbox nobody read, ancestor of every defect in this post.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2601.21276">More Code, Less Reuse (MSR 2026)</a>: agent-written pull requests carry measurably more redundant code, and reviewers rated them <em>more</em> favourably than human ones. Peer-reviewed, no vendor funding. Sentiment analysis is not review rigour — take the direction, not a rate.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2211.03622">Perry et al., Do Users Write More Insecure Code with AI Assistants? (ACM CCS 2023)</a>: assisted participants wrote less secure code and were more confident it was secure. Forty-seven participants, a lab setting, a model three generations old. Cite it for the mechanism — false confidence — never as a current rate.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2603.28592v1">Debt Behind the AI Boom (2026)</a>: 304,362 metadata-verified agent-authored commits; of the issues found, 89.1% code smells, 5.8% runtime bugs, 5.1% security. The authors state plainly that they ran no human-written baseline, so this describes the shape of the debt and not a delta against people. It is the closest thing to evidence for the claim in this post.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.gitclear.com/the_ai_code_quality_maintainability_gap">GitClear — The AI Code Quality Maintainability Gap (2026)</a>: 623 million changed lines, duplication up and refactoring down. Calendar-year correlation with no attribution of authorship, published by a company selling code-quality analytics. Corroboration, not proof.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/">Veracode GenAI Code Security (2025, re-tested 2026)</a>: 45% of generated samples failed a security check, unchanged across model generations. Vendor-funded, synthetic prompts, no review and no pipeline in the loop — it measures raw model output, not shipped code. The flat line across generations is the only durable point.</li>
<li>On the most-quoted number in this debate — the 19% slowdown measured on experienced developers in mature repositories — I already wrote what happened when its own authors withdrew the framing, in <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">the post on measuring your own perception</a>. It is not re-argued here.</li>
<li>Solstice* — the incidents, the check scripts and the counts in this post come from the repository and its issue tracker. Internal, no links: the codename is fictitious and the real project, its products and its vendor are anonymized. Figures verified on 29 August 2026.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: "Les tests passent. Il ne se passe rien.",
  description: "Un correctif fusionné, une CI verte, une revue signée — et sur le terrain, rien. Le défaut que produisent le plus souvent nos agents n'a pas de symptôme, et le relire ne le trouve pas. Récit des garde-fous écrits un incident à la fois, et de ce qu'ils ne verront jamais.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Pendant six semaines, quatre de nos services ont écrit des enregistrements d'audit juridiquement opposables dans une file que rien ne vidait. Le code était juste. La chaîne était verte. La revue était signée. Quatre cent soixante-huit enregistrements ont attendu, et la garantie qu'ils devaient produire n'existait pas. C'est le défaut que cette façon de travailler produit le plus souvent : pas une ligne fausse, une ligne absente. Alors non, nous ne faisons pas confiance à la sortie les yeux fermés — et la relire ligne à ligne n'est pas davantage la solution. Nous avons déplacé la vérification de la lecture vers la compilation. Trente-neuf de nos quarante et un contrôles font désormais échouer la chaîne, un par erreur déjà payée une fois.</p></div>
<hr>
<p>Six semaines après la mise en production, nous avons découvert que la fonctionnalité n'avait jamais fait son travail. Pas une seule fois.</p>
<p>Ni lentement, ni partiellement. Jamais. Le changement avait été relu par un humain, typé, couvert par des tests unitaires, passé par notre porte de pré-fusion et fusionné au vert. Tous nos instruments disaient oui. Et l'obligation réglementaire qu'il devait tenir sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, l'<abbr title="Enterprise Resource Planning — la colonne vertébrale administrative d'un groupement hospitalier">ERP</abbr> hospitalier que construit mon équipe, ne se produisait tout simplement pas depuis le premier jour.</p>

<h2>Le défaut sans symptôme</h2>
<p>Le mécanisme mérite d'être posé précisément, parce que tout l'argument repose dessus.</p>
<p>En santé régulée, les écritures portent une trace d'audit opposable. La nôtre est fermée par construction : la ligne d'audit partage la transaction de la mutation qu'elle documente, donc si l'audit ne peut pas s'écrire, la mutation est refusée. Cette partie fonctionnait exactement comme prévu. Elle fonctionne toujours.</p>
<p>Le maillon suivant était mort. Quatre services empilaient leurs événements d'audit dans une file locale et ne démarraient jamais la boucle qui les relaie vers la base d'audit. Les événements s'accumulaient sur place et n'allaient nulle part.</p>
<p>Regardez maintenant pourquoi chaque instrument est resté vert. Aucun test ne casse, puisque l'écriture, elle, marche : c'est précisément ce que les tests vérifient. La sonde de démarrage passe, puisqu'elle prouve que la base d'audit est joignable, pas que quoi que ce soit y arrive. Et sur l'un des quatre services, une autre boucle de relais — le bus d'événements, sans rapport — écrit au démarrage une ligne presque identique. Les journaux se lisaient donc comme corrects.</p>
<p>Le défaut n'est visible qu'en interrogeant la base d'audit en sachant déjà quoi y chercher. Le 28 août, nous l'avons fait : 468 événements opposables attendaient depuis le 21 juillet, avec zéro tentative de remise. Absents de la base à rétention vingt ans, absents de la chaîne de hachage qui rend la trace infalsifiable, absents de tous les écrans qu'ouvrirait un responsable conformité.</p>
<blockquote><p>Rien n'était cassé. Rien ne se produisait. Une seule de ces deux pannes a un symptôme.</p></blockquote>

<h2>Pourquoi relire le diff a cessé de marcher</h2>
<p>Il y a deux raisons distinctes, et une seule concerne le volume.</p>
<p>L'argument du volume est réel et je le concède vite. Il arrive chaque semaine plus de code qu'aucune équipe n'en lit avec une attention véritable. Tout le monde dans cette conversation a déjà fait ce constat.</p>
<p>La seconde raison est la plus intéressante, parce qu'elle tient même avec un temps de lecture infini. Relire un diff est un instrument fait pour trouver une ligne fausse. Ici la ligne était manquante, dans un fichier que le diff n'a jamais ouvert. On ne remarque pas une absence dans un document qui ne la contient pas. L'obligation reliait deux fichiers : écrire un événement d'audit ici oblige à démarrer une boucle de relais là-bas, et rien dans le premier fichier ne le dit.</p>
<p>Cette forme se répète dans près de la moitié de nos contrôles. Une classe de ressource annoncée dans notre contrat d'interopérabilité public oblige à provisionner une adresse dans le fichier de déploiement. Un port publié à côté de la passerelle supprime silencieusement l'authentification que la passerelle assure. Un drapeau de configuration déclaré comme remplaçant une variable d'environnement oblige à ce que plus rien, nulle part, ne lise cette variable. À chaque fois le changement est localement correct, et l'obligation vit là où le relecteur ne regarde pas.</p>
<p>La revue humaine est la plus faible exactement là où l'obligation traverse les fichiers. Un script est le plus fort exactement là. C'est tout l'échange, et il tient moins à l'intelligence artificielle que le cadrage habituel ne le laisse croire.</p>
<p>Un résultat a tout de même changé ma façon de lire une <abbr title="Pull Request — la proposition de fusion d'un changement, soumise à revue">PR</abbr>. Une étude acceptée à <abbr title="Mining Software Repositories — conférence de génie logiciel à comité de lecture">MSR</abbr> 2026 mesure que les propositions écrites par des agents embarquent nettement plus de code redondant, et — c'est la partie qui pique — que les relecteurs y ont exprimé un sentiment plus favorable qu'envers celles des humains. Un code bien formé, idiomatique, généreusement commenté achète moins de méfiance par ligne qu'il n'en mériterait. La sortie est plausible avant d'être juste, et c'est la plausibilité que le relecteur échantillonne en réalité.</p>
<p>Je veux rester exact sur l'affirmation, parce que la surenchère est tentante. Ce n'est pas une nouvelle espèce de bogue. Un ingénieur fatigué oublie le même appel un vendredi après-midi, et cela bien avant tout ceci. Ce qui a changé, c'est la cadence à laquelle l'omission est produite, et l'économie de sa détection par la lecture.</p>
<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Un changement fusionné a passé toutes les portes de l'équipe — typage, tests unitaires, revue humaine, sonde de démarrage, porte de pré-fusion et intégration continue toutes au vert — et pourtant 468 enregistrements d'audit opposables ont été empilés en six semaines avec zéro tentative de remise, aucun n'atteignant la base à rétention vingt ans." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">UN CHANGEMENT · TOUTES LES PORTES PASSÉES</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Six portes au vert. Zéro remis.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="178" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="292" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="406" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="520" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="634" y="98" width="102" height="34" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.75">
<text x="115" y="120">typage</text>
<text x="229" y="120">tests</text>
<text x="343" y="120">revue</text>
<text x="457" y="120">sonde</text>
<text x="571" y="120">pré-fusion</text>
<text x="685" y="120">CI</text>
</g>
<text x="64" y="176" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.55" letter-spacing="0.1em">ÉVÉNEMENTS D'AUDIT OPPOSABLES · 21 JUIL. AU 28 AOÛT</text>
<rect x="64" y="190" width="672" height="38" rx="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="84" y="215" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">468 empilés</text>
<text x="716" y="215" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" text-anchor="end" opacity="0.8">0 remis</text>
<path d="M 64 240 L 64 252 L 736 252 L 736 240" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 400 252 L 400 264" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="400" y="292" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">aucun n'a atteint la base de rétention</text>
<text x="64" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">incident réel, décompte constaté le 28 août 2026</text>
</svg>

<h2>Un contrôle est une cicatrice, écrite</h2>
<p>Trois autres, rapidement, parce que le motif n'apparaît que dans la répétition.</p>
<p><strong>Le squelette qui s'est propagé.</strong> Quinze services résolvaient l'utilisateur agissant depuis un simple en-tête de requête, avec un identifiant fixe en repli quand il manquait. Sur une machine partagée, cela signifiait qu'un document pouvait être déposé — et supprimé — sans aucune session, et que l'acteur inscrit dans la trace d'audit opposable était celui que l'appelant avait tapé. Personne n'a décidé d'écrire cela quinze fois. Cela a été échafaudé une fois, puis repris de service en service, chaque copie cohérente avec la précédente.</p>
<p><strong>L'interrupteur qui n'interrompait rien.</strong> Notre catalogue de configuration déclarait un drapeau comme remplaçant une variable d'environnement. L'écran de paramétrage affichait l'interrupteur. Le service continuait de lire la variable d'environnement. Un exploitant croyait avoir restreint les appels à un téléservice national d'identité. Il ne l'avait pas fait. Une garantie qu'on croit avoir et qu'on n'a pas vaut moins que pas de garantie du tout, parce qu'on cesse de vérifier.</p>
<p><strong>Le contrat qui mentait.</strong> Notre contrat d'interopérabilité public est engendré depuis les cibles réellement câblées dans le code, donc le code ne peut pas se contredire. Le déploiement, si. Trois adresses de service manquaient au fichier de composition : trois classes de ressources répondaient une erreur serveur dans tous les déploiements, alors que le contrat publié les annonçait — et l'erreur rendue était celle qu'on réessaie, donc un partenaire réessayait indéfiniment pour quelque chose qui n'arriverait jamais.</p>
<p>Chacun de ces cas est aujourd'hui un script qui fait échouer la compilation. Ils partagent une seule règle de conception, et c'est la seule chose transposable de ce billet : dériver le périmètre du code, jamais le recopier. Une liste de chemins tenue à la main dérive au premier renommage, et un fichier neuf entre dans le périmètre sensible sans que personne ne pense à l'y déclarer. La règle ne vaut que si l'oubli est structurellement impossible.</p>
<blockquote><p>Un contrôle ne rend pas le code juste. Il rend une erreur précise impossible à refaire.</p></blockquote>

<h2>Ce qu'un contrôle ne voit pas</h2>
<p>Vient maintenant la moitié honnête, qui compte davantage que la première.</p>
<p>Nos trente-neuf contrôles bloquants encodent trente-neuf défauts que nous avons fini par trouver, la plupart après qu'ils aient coûté quelque chose. Le contrôle sur le relais d'audit existe précisément parce que le contrôle sur le relais d'audit n'existait pas. C'est un cliquet, pas un filet. Il ne me dit pas que la chaîne est digne de confiance. Il me dit que nous ne pouvons plus refaire trente-neuf erreurs précises, et ne dit strictement rien de la classe encore en cours que personne n'a remarquée.</p>
<p>La porte se flatte elle aussi. Notre commande de pré-fusion rend un verdict unique en parité avec la <abbr title="Intégration continue — la chaîne automatisée qui construit et vérifie chaque changement">CI</abbr>, et ce qu'elle prouve est plus étroit qu'il n'y paraît : aucune règle exécutable connue n'est violée. Sa phase de bout en bout tourne sur des bouchons et ne touche jamais une vraie base. Aucun des quatre incidents ci-dessus n'aurait été attrapé par elle.</p>
<p>Les contrôles attrapent aussi la maladie qu'ils soignent. Nous tenons une liste des écritures juridiquement opposables. Elle comptait douze entrées quand le code en avait cent vingt-cinq. Nous avons donc câblé un contrôle — et sa première version en a manqué vingt-huit autres, par quatre angles morts, pendant que la chaîne annonçait joyeusement la liste à jour. Le script avait reproduit, en son sein, la panne exacte qu'il devait fermer.</p>
<p>Et les portes de sortie. Une règle à laquelle on ne peut jamais déroger se contourne, alors les nôtres portent des dérogations greppables, chacune avec sa raison écrite à côté. Une douzaine sont en usage dans le dépôt. Mais un seul des quarante et un contrôles compte ses dérogations dans le temps, contre une référence qui ne peut que décroître. Les autres pourraient accumuler des exemptions en silence, et rien n'empêche un agent d'écrire sa propre exemption pour se rendre vert. C'est la faille ouverte de tout ce que je viens de décrire, et je n'ai pas de correctif livré pour elle.</p>
<blockquote><p>Une exemption que personne ne compte est une règle avec une date de péremption que personne n'a fixée.</p></blockquote>

<h2>La facture</h2>
<p>Les décomptes, avec leurs réserves, parce qu'un chiffre sans sa réserve est ce que ce blog existe pour refuser.</p>
<p>Un inventaire interne de fin juillet trouvait vingt-trois de ces scripts. Le dépôt en contient quarante et un aujourd'hui : trente-neuf font échouer la compilation, un est consultatif à dessein — il rappelle à une proposition de fusion qu'elle a modifié un service sans toucher au fichier de contexte de ce service — et un n'est pas câblé du tout à la chaîne. Cinq ont été écrits ces huit derniers jours.</p>
<p>Je ne peux pas dater les plus anciens. L'historique du dépôt a été aplati lors de son import le 21 août : tout fichier antérieur affiche donc la même date de création, et la courbe de croissance que j'aimerais vous montrer n'existe pas. Le seul rythme que je peux citer honnêtement est celui de la fenêtre récente.</p>
<p>Ils ne sont pas gratuits. Chaque contrôle est du code, avec ses propres bogues, et il doit rester rapide sous peine d'être contourné. Plusieurs n'ont rien à voir avec les agents — un contrôle de classes d'icônes, un contrôle de thème de rapport — et je ne vais pas déguiser de l'hygiène ordinaire en récit d'intelligence artificielle.</p>
<p>Une chose joue en sens inverse, et l'omettre serait malhonnête. Écrire un contrôle juste après un incident était l'action qui mourait dans le backlog ; cela ne coûte presque plus rien, et c'est pourquoi il y en a quarante et un plutôt que six. Et avant de toucher à un changement structurant, un agent lit nos soixante-sept décisions d'architecture et chaque règle que nous avons écrite. Aucun humain de l'équipe ne fait cela. Moi non plus.</p>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les contrôles exécutables du dépôt sont passés de 23 fin juillet à 41 aujourd'hui, soit 18 de plus en environ cinq semaines ; sur ces 41, trente-neuf font échouer la compilation, un est consultatif par choix et un n'est pas câblé à la chaîne." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CONTRÔLES EXÉCUTABLES DANS LE DÉPÔT</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">23 fin juillet. 41 aujourd'hui.</text>
<rect x="64" y="106" width="377" height="46" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="441" y="106" width="295" height="46" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="84" y="135" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.75">23 déjà là</text>
<text x="461" y="135" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.85">18 ajoutés</text>
<path d="M 441 164 L 441 176 L 736 176 L 736 164" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 588 176 L 588 188" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="588" y="214" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">+18 en cinq semaines</text>
<text x="64" y="252" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.65">39 des 41 font échouer la compilation · 1 consultatif par choix · 1 non câblé</text>
<text x="64" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">chiffre de fin juillet issu d'un inventaire interne, celui du jour compté dans le dépôt</text>
</svg>

<h2>Ce qui reste aux humains</h2>
<p>Être surpris le premier. Chacun de ces contrôles existe parce qu'une personne a senti que quelque chose clochait et est allée regarder dans une base à onze heures du soir. Aucune règle n'a jamais écrit la première règle.</p>
<p>Décider ce qu'un défaut signifie. Que 468 enregistrements soient bloqués est un fait technique. Que cela rompe une obligation de rétention à horizon vingt ans est un jugement, et c'est ce jugement qui décide si le correctif part ce soir ou au prochain sprint.</p>
<p>Juger une dérogation. Greppable veut dire auditable si quelqu'un greppe vraiment.</p>
<p>Et un périmètre où nous avons choisi une personne exprès : la surface joignable depuis l'extérieur du système d'information hospitalier, celle qui a un secret d'entrée statique et une suppression destructrice. Les changements y exigent la revue de quelqu'un qui ne les a pas écrits. Nous aurions pu écrire un script. Nous avons décidé que cette classe d'erreur devait coûter une conversation humaine.</p>
<p>La question qu'aucun contrôle ne pose est de savoir si la chose devrait exister.</p>
<p>Rien de tout cela n'est un argument pour moins de monde. Ce sont les gens qui sont surpris les premiers, et être surpris est la seule partie de tout ceci qui ne passe pas à l'échelle en écrivant plus de scripts.</p>

<h2>Quoi faire lundi matin</h2>
<ol>
<li><strong>Prenez un incident que vous avez déjà payé et faites-le échouer la compilation cette semaine.</strong> Pas une politique, pas une liste. Un incident, un script.</li>
<li><strong>Préférez les obligations qui traversent les fichiers.</strong> Écrire ici oblige à démarrer là-bas ; annoncer ici oblige à provisionner là-bas. C'est là que la revue est aveugle et le script bon marché.</li>
<li><strong>Dérivez le périmètre du code, ne le recopiez jamais.</strong> Toute liste de chemins tenue à la main est fausse un renommage plus tard, et elle échoue en silence.</li>
<li><strong>Donnez à chaque contrôle une section de portée honnête, dans le fichier, disant ce qu'il ne voit pas.</strong> Vous la relirez le jour où il laissera passer quelque chose, et vous voudrez qu'elle ait été écrite avant votre déception.</li>
<li><strong>Comptez vos dérogations contre une référence qui ne peut que décroître.</strong> J'en ai une. Je devrais en avoir quarante.</li>
<li><strong>Écrivez ce que votre porte prouve et ce qu'elle ne prouve pas.</strong> La nôtre prouve qu'aucune règle connue n'est enfreinte. Elle n'a rien à dire de la règle que personne n'a encore écrite, et c'est celle-là qui vous coûtera cher.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> — l'argument sous lequel ce billet pose un plancher. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">Le backlog n'a jamais été le métier</a> — qui signe quand la règle et le jugement divergent. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % écrit par des agents</a> — la taxe de vérification, comptée. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">La boucle qui vous lit en retour</a> — pourquoi mon propre ressenti de vitesse n'est pas une preuve. <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">Le LAN est mort</a> — la case que personne n'a lue, ancêtre de tous les défauts de ce billet.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2601.21276">More Code, Less Reuse (MSR 2026)</a> : les propositions de fusion écrites par des agents portent nettement plus de code redondant, et les relecteurs les ont jugées <em>plus</em> favorablement que celles des humains. Comité de lecture, aucun financement d'éditeur. L'analyse de sentiment n'est pas la rigueur de revue : prenez la direction, pas un taux.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2211.03622">Perry et coll., Do Users Write More Insecure Code with AI Assistants ? (ACM CCS 2023)</a> : les participants assistés ont écrit du code moins sûr et étaient plus convaincus qu'il l'était. Quarante-sept participants, cadre de laboratoire, modèle vieux de trois générations. À citer pour le mécanisme — la fausse confiance — jamais comme un taux actuel.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2603.28592v1">Debt Behind the AI Boom (2026)</a> : 304 362 commits écrits par des agents et vérifiés par métadonnées ; parmi les problèmes trouvés, 89,1 % de défauts de maintenabilité, 5,8 % de bogues d'exécution, 5,1 % de sécurité. Les auteurs déclarent eux-mêmes n'avoir fait tourner aucune référence humaine : cela décrit donc la forme de la dette, pas un écart avec les gens. C'est ce qui se rapproche le plus d'une preuve pour la thèse de ce billet.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.gitclear.com/the_ai_code_quality_maintainability_gap">GitClear — The AI Code Quality Maintainability Gap (2026)</a> : 623 millions de lignes modifiées, duplication en hausse et remaniement en baisse. Corrélation par année civile, sans attribution d'auteur, publiée par une société qui vend de l'analyse de qualité de code. Corroboration, pas preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/">Veracode GenAI Code Security (2025, retesté en 2026)</a> : 45 % des échantillons produits échouent à un contrôle de sécurité, inchangé d'une génération de modèles à l'autre. Financé par l'éditeur, invites synthétiques, sans revue ni chaîne dans la boucle : cela mesure la sortie brute d'un modèle, pas du code livré. La platitude de la courbe entre générations est le seul point durable.</li>
<li>Sur le chiffre le plus cité de ce débat — les 19 % de ralentissement mesurés sur des développeurs expérimentés dans des dépôts matures — j'ai déjà écrit ce qui s'est passé quand ses propres auteurs en ont retiré le cadrage, dans <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">le billet sur la mesure de son propre ressenti</a>. Il n'est pas rejoué ici.</li>
<li>Solstice* — les incidents, les scripts de contrôle et les décomptes de ce billet viennent du dépôt et de son suivi d'issues. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés. Chiffres vérifiés le 29 août 2026.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'TestsPassNothingHappens',
  props: {
    locale: {
      type: String as () => 'fr' | 'en',
      required: true
    }
  },
  setup(props) {
    const content = computed(() => {
      return getContent(props.locale)
    })
    return { content }
  },
  template: '<div v-html="content.html"></div>'
})
</script>

<template>
  <div v-html="content.html"></div>
</template>
