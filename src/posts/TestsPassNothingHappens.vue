<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'tests-pass-nothing-happens',
  date: '2026-08-29',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'Quality Isn\'t Read. It\'s Executed.',
  description: 'Can you trust agent-written code with your eyes closed? No. But reading it line by line is not the alternative either. Here is the quality system I built on a regulated hospital ERP — what quality means when the software is opposable, the 4 layers that enforce it, the ladder we measure it on, and the part none of it proves.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> On regulated healthcare software, quality is not a bug count. It is a set of properties that must hold on every single change: an audit trail that stands up in court, an identity nobody can forge, accessibility as a legal obligation, interoperability contracts that do not lie. Agents now write most of our code, so I stopped defending those properties by reading diffs and started compiling them. 67 recorded decisions, 39 checks that fail the build, one pre-merge verdict, and exactly one perimeter where the answer is deliberately a human. We measure the result on a single ladder: how far right a defect gets before something catches it. This is what I built, and the part of it that proves nothing.</p></div>
<hr>
<p>Ask me whether I trust the code my team's agents write and the honest answer is that the question is badly posed. I do not trust it. I also do not read it, not line by line, not any more. Neither of those is the interesting part.</p>
<p>The interesting part is what you build when both of those are true at once.</p>

<h2>What quality means here</h2>
<p>I lead engineering on <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, a hospital <abbr title="Enterprise Resource Planning — the administrative backbone of a hospital group">ERP</abbr> for a French public hospital group. That context decides the whole definition, so it goes first.</p>
<p>Quality here is not a score and not a defect count. It is a short list of properties that have to be true after every change, without exception:</p>
<ul>
<li>Writes that can be held against us later carry a legal audit trail, and the write is refused if the trail cannot be written.</li>
<li>A user's identity is never inferred from something the caller can type.</li>
<li>Regulated fields are never returned in the clear.</li>
<li>Accessibility is not a nice-to-have. In French public procurement it is a legal obligation with a named standard.</li>
<li>The interoperability contract we publish describes what the deployment actually serves.</li>
</ul>
<p>Note what those have in common. Not one of them is verified by asking "does the feature work". Each is a property of the system that a perfectly working feature can silently violate. That is the whole problem, and it existed long before agents.</p>
<blockquote><p>Quality is not the absence of bugs. It is the set of properties that survive the next change.</p></blockquote>

<h2>Why reading stopped being the instrument</h2>
<p>Two reasons, and only one is about volume.</p>
<p>The volume argument is real and I will concede it in one sentence: more code now arrives per week than any team reads with genuine attention. Everyone has made that observation by now.</p>
<p>The second reason survives even with infinite reading time. Reading a diff is an instrument for finding a wrong line. The defects that get through are usually a <em>missing</em> line, in a file the diff never opened. You cannot notice an absence in a document that does not contain it.</p>
<p>Almost half our checks exist because the obligation spans files. A resource class announced in the public contract obliges a service address provisioned in the deployment file. A port published next to the gateway silently removes the authentication the gateway performs. A flag declared as replacing an environment variable obliges that nothing, anywhere, still reads that variable. In each case the change under review is locally correct, and the obligation lives where the reviewer is not looking.</p>
<p>Human review is weakest exactly where the obligation crosses files. A script is strongest exactly there. That trade has less to do with artificial intelligence than the framing usually suggests.</p>
<p>One finding did change how I read a proposal, though. A study accepted at <abbr title="Mining Software Repositories — a peer-reviewed software-engineering conference">MSR</abbr> 2026 measured that agent-written pull requests carry noticeably more redundant code, and that reviewers expressed <em>more</em> favourable sentiment toward them than toward human ones. Well-formed, idiomatic, generously commented code buys less suspicion per line than it has earned. Plausibility arrives before correctness, and plausibility is what a reviewer samples.</p>
<p>I want to be exact, because the overclaim is tempting. This is not a new species of defect. A tired engineer forgets the same call on a Friday afternoon and always did. What changed is the rate at which the omission is produced, and the economics of catching it by reading.</p>

<h2>The 4 layers</h2>
<p>So the properties moved out of people's attention and into things that execute. 4 layers, in the order a change meets them.</p>
<p><strong>Recorded decisions.</strong> 67 architecture decisions, dated and versioned in the repository. They carry the <em>reason</em>, which is the part an agent otherwise refactors away because it looks like an accident. Every agent reads them before touching anything structural. No human on the team reads all 67. I do not read all 67.</p>
<p><strong>Executable rules.</strong> 39 checks that fail the build, inside 44 continuous-integration jobs. Each one encodes one property, and each exists because we got it wrong once. They share a single design rule, and it is the only genuinely transferable thing in this post: <strong>derive the perimeter from the code, never recopy it</strong>. A hand-maintained list of paths is wrong one rename later, and it fails silently, which is worse than failing loudly.</p>
<p><strong>One verdict before the merge.</strong> A single command, scoped to the diff, in parity with the pipeline, that prints PASS or FAIL. A proposal is opened only on PASS. This is the layer that made agent-written work reviewable at all: not because it proves the change is good, but because it converts "please have a look" into a claim someone can check.</p>
<p><strong>One perimeter left to a human, on purpose.</strong> The surface reachable from outside the hospital information system, the one with a static entry secret and a destructive delete. Changes there require review by someone who did not write them. We could have written a script. We decided that this specific class of mistake should cost a human conversation.</p>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The quality system has 4 layers, each narrower than the last: 67 recorded architecture decisions, 39 checks that fail the build, one pre-merge PASS or FAIL verdict, and one perimeter deliberately reserved for human review." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHAT A CHANGE MEETS, IN ORDER</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">4 layers. Only one is a person.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="100" width="672" height="46" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="64" y="156" width="520" height="46" rx="8" fill="currentColor" fill-opacity="0.18"></rect>
<rect x="64" y="212" width="368" height="46" rx="8" fill="currentColor" fill-opacity="0.24"></rect>
<rect x="64" y="268" width="216" height="46" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600">
<text x="84" y="129">67 recorded decisions</text>
<text x="84" y="185">39 checks that fail the build</text>
<text x="84" y="241">1 pre-merge verdict</text>
<text x="84" y="297">1 human perimeter</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="end">
<text x="736" y="129">the reasons, so they survive a refactor</text>
<text x="736" y="185">one property each, one past mistake each</text>
<text x="736" y="241">PASS or FAIL, scoped to the diff</text>
<text x="736" y="297">reviewed by a non-author, by choice</text>
</g>
</svg>

<h2>How we prove it</h2>
<p>Here is where most write-ups of this kind stop, and it is the half that actually matters. "We have guardrails" is a claim, not evidence. A system that enforces properties has to be measured, or it is just architecture with good intentions.</p>
<p>We measure on one ladder: <strong>how far right a defect travels before something catches it.</strong> 6 rungs, in order — the pipeline, code review, manual testing, formal <abbr title="Quality Assurance — the qualification stage before a release is accepted">QA</abbr>, the pilot site, and production. Every defect is labelled with the rung that caught it. Everything else we track hangs off that: defect density against merged proposals, time to fix by severity, the reopen rate, the standing backlog.</p>
<p>The rightmost two rungs get their own name, and it is the only number I would defend in a steering committee: <strong>escaped defects</strong>. Anything found at the pilot or in production escaped every net we own.</p>
<p>This reframes what a guardrail is <em>for</em>. A check is not there to reduce a defect count. It is there to move one class of defect permanently leftward — from "a tester finds it" to "the build refuses it" — and it never moves back. That is why the count of executable rules matters more than the count of bugs. Bugs are a flow. Rules are a ratchet.</p>
<blockquote><p>The question is not how many defects we found. It is how far each one got before something stopped it.</p></blockquote>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Defects are classified by the stage that caught them, across 6 rungs from the build pipeline through code review, manual testing, QA and the pilot site to production; the last two rungs are counted as escaped defects, and every executable rule added moves a class of defect permanently leftward." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE ONLY LADDER WE SCORE ON</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">How far right did it get?</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.30"></rect>
<rect x="178" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.25"></rect>
<rect x="292" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.20"></rect>
<rect x="406" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="520" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="634" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8">
<text x="115" y="138">build</text>
<text x="229" y="138">review</text>
<text x="343" y="138">manual test</text>
<text x="457" y="138">QA</text>
<text x="571" y="138">pilot</text>
<text x="685" y="138">production</text>
</g>
<path d="M 520 166 L 520 178 L 736 178 L 736 166" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 628 178 L 628 190" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="628" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">escaped defects</text>
<path d="M 640 268 L 96 268" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M 108 260 L 96 268 L 108 276" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="96" y="250" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">every executable rule moves a class one rung left, for good</text>
<text x="64" y="304" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the classification we use, not a measured distribution</text>
<text x="64" y="326" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">we are pre-production: the last rungs are empty by stage, not by merit</text>
</svg>

<h2>What none of this proves</h2>
<p>Now the honest half, which matters more than the architecture.</p>
<p><strong>It is a ratchet, not a net.</strong> 39 checks encode 39 defects we eventually found, most after they had already cost us something. Each new check exists precisely because that check did not exist. This does not tell me the pipeline is trustworthy. It tells me we cannot repeat 39 specific mistakes, and it says nothing at all about the class still running that nobody has noticed.</p>
<p><strong>The verdict is narrower than it looks.</strong> PASS means no <em>known</em> executable rule is violated. The end-to-end phase runs against mocks and never touches a real database. Several of the defects that taught us the most would have sailed straight through it.</p>
<p><strong>The rungs on the right are empty because of where we are, not how good we are.</strong> We are not in production yet. That means the hardest evidence — what survives contact with real users, on real hospital data, at real volume — is evidence we simply do not have. Anyone showing you a leakage chart with nothing in the last two columns is showing you a calendar, not a quality result. Including me.</p>
<p><strong>Checks catch the disease they treat.</strong> One of ours was added after a schema change that only ever applied to freshly created databases: green in the pipeline, green locally, broken on every existing environment. The worst possible defect profile, and our first version of the check had a blind spot of exactly the same shape.</p>
<p><strong>The escape hatches are not counted.</strong> A rule that can never be waived gets worked around, so ours carry greppable derogations with a written reason beside each. About 12 are in use. But exactly one check counts its derogations over time against a baseline that can only go down. The rest could accumulate exemptions quietly, and nothing prevents an agent from writing its own exemption to turn itself green. That is the open flaw in everything above, and I do not have a fix shipped for it.</p>

<h2>What still belongs to humans</h2>
<p>Being surprised first. Every one of these checks exists because a person felt something was off and went looking. No rule has ever written the first rule.</p>
<p>Deciding what a defect means. That a control cannot be reached with a keyboard is a technical fact. That this puts us outside a legal accessibility obligation, and therefore blocks a release instead of joining a backlog, is a judgement.</p>
<p>Judging a derogation. Greppable means auditable only if somebody greps.</p>
<p>Choosing where not to automate — the externally reachable perimeter, where we deliberately kept a person in the path.</p>
<p>And the question no check asks: whether the thing should exist at all.</p>
<p>None of this is an argument for fewer people. People are the ones who get surprised first, and being surprised is the only part of this that does not scale by writing more scripts.</p>

<h2>What to do Monday morning</h2>
<ol>
<li><strong>Write down the properties, not the process.</strong> 5 sentences that must be true after every change. If you cannot name them, no amount of tooling will protect them.</li>
<li><strong>Label every defect with the stage that caught it.</strong> This costs one field and it is the single highest-value measurement in this post. Without it you are counting bugs instead of measuring reach.</li>
<li><strong>Take one incident you already paid for and make it fail the build this week.</strong> Not a policy. One incident, one script.</li>
<li><strong>Prefer the obligations that cross files.</strong> Writing here obliges starting there; announcing here obliges provisioning there. That is where review is blind and a script is cheap.</li>
<li><strong>Derive every perimeter from the code.</strong> A hand-maintained list is wrong one rename later, and it fails silently.</li>
<li><strong>Count your derogations against a baseline that can only go down.</strong> I have one of those. I should have 40.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> — why the rules outlive the models that read them. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">The Backlog Was Never the Job</a> — who signs when the rule and the judgement disagree. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — the verification tax, counted. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">One More Prompt</a> — why my own sense of speed is not evidence. <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">The LAN Is Dead</a> — the checkbox nobody read.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2601.21276">More Code, Less Reuse (MSR 2026)</a>: agent-written proposals carry measurably more redundant code, and reviewers rated them <em>more</em> favourably than human ones. Peer-reviewed, no vendor funding. Sentiment is not review rigour — take the direction, not a rate.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2211.03622">Perry et al., Do Users Write More Insecure Code with AI Assistants? (ACM CCS 2023)</a>: assisted participants wrote less secure code and were more confident it was secure. 47 participants, lab setting, a model three generations old. Cite it for the mechanism, never as a current rate.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2603.28592v1">Debt Behind the AI Boom (2026)</a>: 304,362 metadata-verified agent-authored commits; of the issues found, 89.1% maintainability, 5.8% runtime bugs, 5.1% security. The authors state they ran no human baseline, so it describes the shape of the debt, not a gap against people.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.gitclear.com/the_ai_code_quality_maintainability_gap">GitClear — The AI Code Quality Maintainability Gap (2026)</a>: duplication up, refactoring down across 623 million changed lines. Calendar-year correlation with no authorship attribution, published by a vendor selling code-quality analytics. Corroboration, not proof.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/">Veracode GenAI Code Security (2025, re-tested 2026)</a>: 45% of generated samples failed a security check, flat across model generations. Vendor-funded, synthetic prompts, no review and no pipeline in the loop — raw model output, not shipped code. The flat line is the only durable point.</li>
<li>On the most-quoted number in this debate — the 19% slowdown measured on experienced developers in mature repositories — I wrote what happened when its own authors withdrew the framing, in <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">the post on measuring your own perception</a>. It is not re-argued here.</li>
<li>Solstice* — the layers, the counts and the measurement ladder come from the repository and its issue tracker. Internal, no links: the codename is fictitious and the real project, its products and its vendor are anonymized. Figures verified on 29 August 2026.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: "La qualité ne se relit pas. Elle s'exécute.",
  description: "Peut-on faire confiance au code écrit par des agents les yeux fermés ? Non. Mais le relire ligne à ligne n'est pas davantage la solution. Voici le système qualité que j'ai construit sur un ERP hospitalier régulé : ce que qualité veut dire quand le logiciel est opposable, les 4 couches qui la tiennent, l'échelle sur laquelle on la mesure, et ce que tout cela ne prouve pas.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> En santé régulée, la qualité n'est pas un nombre de bogues. C'est un jeu de propriétés qui doivent tenir après chaque changement : une trace d'audit opposable, une identité que personne ne peut forger, l'accessibilité comme obligation légale, des contrats d'interopérabilité qui ne mentent pas. Nos agents écrivent aujourd'hui l'essentiel du code, alors j'ai cessé de défendre ces propriétés en relisant des diffs et j'ai commencé à les compiler. 67 décisions consignées, 39 contrôles qui font échouer la compilation, un verdict avant fusion, et exactement un périmètre où la réponse reste volontairement humaine. On mesure le résultat sur une seule échelle : jusqu'où un défaut va vers la droite avant que quelque chose l'arrête. Voici ce que j'ai construit, et la part qui ne prouve rien.</p></div>
<hr>
<p>Quand on me demande si je fais confiance au code que les agents de mon équipe écrivent, la réponse honnête est que la question est mal posée. Je ne lui fais pas confiance. Je ne le relis pas non plus, plus ligne à ligne, plus du tout. Ce n'est ni l'un ni l'autre qui est intéressant.</p>
<p>Ce qui est intéressant, c'est ce qu'on construit quand ces deux choses sont vraies en même temps.</p>

<h2>Ce que « qualité » veut dire ici</h2>
<p>Je dirige l'ingénierie sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, un <abbr title="Enterprise Resource Planning — la colonne vertébrale administrative d'un groupement hospitalier">ERP</abbr> hospitalier pour un groupement public. Ce contexte décide de toute la définition, donc il passe en premier.</p>
<p>Ici, la qualité n'est ni une note ni un décompte de défauts. C'est une courte liste de propriétés qui doivent être vraies après chaque changement, sans exception :</p>
<ul>
<li>Une écriture qui peut nous être opposée porte une trace d'audit légale, et l'écriture est refusée si la trace ne peut pas être écrite.</li>
<li>L'identité d'un utilisateur ne se déduit jamais de quelque chose que l'appelant peut taper.</li>
<li>Les champs régulés ne sortent jamais en clair.</li>
<li>L'accessibilité n'est pas un confort. Dans la commande publique française, c'est une obligation légale avec un référentiel nommé.</li>
<li>Le contrat d'interopérabilité que nous publions décrit ce que le déploiement sert réellement.</li>
</ul>
<p>Remarquez ce qu'elles ont en commun. Aucune ne se vérifie en demandant « est-ce que la fonctionnalité marche ». Chacune est une propriété du système qu'une fonctionnalité parfaitement fonctionnelle peut violer en silence. C'est tout le problème, et il existait bien avant les agents.</p>
<blockquote><p>La qualité n'est pas l'absence de bogues. C'est l'ensemble des propriétés qui survivent au changement suivant.</p></blockquote>

<h2>Pourquoi la relecture a cessé d'être l'instrument</h2>
<p>Deux raisons, et une seule concerne le volume.</p>
<p>L'argument du volume est réel et je le concède en une phrase : il arrive chaque semaine plus de code qu'aucune équipe n'en lit avec une attention véritable. Tout le monde a fait ce constat.</p>
<p>La seconde raison tient même avec un temps de lecture infini. Relire un diff est un instrument fait pour trouver une ligne fausse. Les défauts qui passent sont le plus souvent une ligne <em>manquante</em>, dans un fichier que le diff n'a jamais ouvert. On ne remarque pas une absence dans un document qui ne la contient pas.</p>
<p>Près de la moitié de nos contrôles existent parce que l'obligation traverse les fichiers. Une classe de ressource annoncée dans le contrat public oblige à provisionner une adresse de service dans le fichier de déploiement. Un port publié à côté de la passerelle supprime silencieusement l'authentification qu'elle assure. Un drapeau déclaré comme remplaçant une variable d'environnement oblige à ce que plus rien, nulle part, ne lise cette variable. À chaque fois le changement relu est localement correct, et l'obligation vit là où le relecteur ne regarde pas.</p>
<p>La revue humaine est la plus faible exactement là où l'obligation traverse les fichiers. Un script est le plus fort exactement là. Cet échange tient moins à l'intelligence artificielle que le cadrage habituel ne le laisse croire.</p>
<p>Un résultat a tout de même changé ma façon de lire une proposition. Une étude acceptée à <abbr title="Mining Software Repositories — conférence de génie logiciel à comité de lecture">MSR</abbr> 2026 mesure que les propositions écrites par des agents portent nettement plus de code redondant, et que les relecteurs y ont exprimé un sentiment <em>plus</em> favorable qu'envers celles des humains. Un code bien formé, idiomatique, généreusement commenté achète moins de méfiance par ligne qu'il n'en mériterait. La plausibilité arrive avant la justesse, et c'est la plausibilité que le relecteur échantillonne.</p>
<p>Je veux rester exact, parce que la surenchère est tentante. Ce n'est pas une nouvelle espèce de défaut. Un ingénieur fatigué oublie le même appel un vendredi après-midi, et l'a toujours fait. Ce qui a changé, c'est la cadence à laquelle l'omission est produite, et l'économie de sa détection par la lecture.</p>

<h2>Les 4 couches</h2>
<p>Les propriétés ont donc quitté l'attention des gens pour rejoindre des choses qui s'exécutent. 4 couches, dans l'ordre où un changement les rencontre.</p>
<p><strong>Les décisions consignées.</strong> 67 décisions d'architecture, datées et versionnées dans le dépôt. Elles portent la <em>raison</em>, c'est-à-dire la partie qu'un agent supprime au premier remaniement parce qu'elle ressemble à un accident. Chaque agent les lit avant de toucher à quoi que ce soit de structurant. Aucun humain de l'équipe ne lit les 67. Moi non plus.</p>
<p><strong>Les règles exécutables.</strong> 39 contrôles qui font échouer la compilation, à l'intérieur de 44 travaux d'intégration continue. Chacun encode une propriété, et chacun existe parce que nous nous sommes trompés une fois. Ils partagent une seule règle de conception, et c'est la seule chose vraiment transposable de ce billet : <strong>dériver le périmètre du code, jamais le recopier</strong>. Une liste de chemins tenue à la main est fausse un renommage plus tard, et elle échoue en silence, ce qui est pire qu'échouer bruyamment.</p>
<p><strong>Un verdict avant la fusion.</strong> Une commande unique, cadrée sur le diff, en parité avec la chaîne, qui imprime PASS ou FAIL. Une proposition ne s'ouvre que sur PASS. C'est la couche qui a rendu le travail des agents relisable : non parce qu'elle prouve que le changement est bon, mais parce qu'elle transforme « jette un œil » en une affirmation vérifiable.</p>
<p><strong>Un périmètre laissé à un humain, exprès.</strong> La surface joignable depuis l'extérieur du système d'information hospitalier, celle qui a un secret d'entrée statique et une suppression destructrice. Les changements y exigent la revue de quelqu'un qui ne les a pas écrits. Nous aurions pu écrire un script. Nous avons décidé que cette classe d'erreur devait coûter une conversation humaine.</p>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le système qualité compte 4 couches, chacune plus étroite que la précédente : 67 décisions d'architecture consignées, 39 contrôles qui font échouer la compilation, un verdict PASS ou FAIL avant fusion, et un périmètre volontairement réservé à la revue humaine." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CE QU'UN CHANGEMENT RENCONTRE, DANS L'ORDRE</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">4 couches. Une seule est humaine.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="100" width="672" height="46" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="64" y="156" width="520" height="46" rx="8" fill="currentColor" fill-opacity="0.18"></rect>
<rect x="64" y="212" width="368" height="46" rx="8" fill="currentColor" fill-opacity="0.24"></rect>
<rect x="64" y="268" width="216" height="46" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600">
<text x="84" y="129">67 décisions consignées</text>
<text x="84" y="185">39 contrôles bloquants</text>
<text x="84" y="241">1 verdict avant fusion</text>
<text x="84" y="297">1 périmètre humain</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="end">
<text x="736" y="129">les raisons, pour qu'elles survivent</text>
<text x="736" y="185">une propriété, une erreur passée chacun</text>
<text x="736" y="241">PASS ou FAIL, cadré sur le diff</text>
<text x="736" y="297">relu par un non-auteur, par choix</text>
</g>
</svg>

<h2>Comment on le prouve</h2>
<p>C'est ici que la plupart des récits de ce genre s'arrêtent, et c'est la moitié qui compte vraiment. « Nous avons des garde-fous » est une affirmation, pas une preuve. Un système qui impose des propriétés doit être mesuré, sinon ce n'est que de l'architecture pleine de bonnes intentions.</p>
<p>Nous mesurons sur une seule échelle : <strong>jusqu'où un défaut voyage vers la droite avant que quelque chose l'attrape.</strong> 6 barreaux, dans l'ordre — la chaîne, la revue de code, le test manuel, la <abbr title="Quality Assurance — l'étape de qualification avant acceptation d'une livraison">recette</abbr>, le client pilote, la production. Chaque défaut porte le barreau qui l'a attrapé. Tout le reste en découle : densité de défauts rapportée aux propositions fusionnées, délai de correction par sévérité, taux de réouverture, encours ouvert.</p>
<p>Les deux barreaux de droite ont leur propre nom, et c'est le seul chiffre que je défendrais en comité de pilotage : les <strong>défauts échappés</strong>. Tout ce qui est trouvé chez le pilote ou en production a échappé à tous nos filets.</p>
<p>Cela redéfinit ce à quoi sert un garde-fou. Un contrôle n'est pas là pour faire baisser un décompte. Il est là pour déplacer une classe de défauts définitivement vers la gauche — de « un testeur le trouve » à « la compilation le refuse » — et cela ne revient jamais en arrière. Voilà pourquoi le nombre de règles exécutables compte davantage que le nombre de bogues. Les bogues sont un flux. Les règles sont un cliquet.</p>
<blockquote><p>La question n'est pas combien de défauts nous avons trouvés. C'est jusqu'où chacun est allé avant que quelque chose l'arrête.</p></blockquote>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les défauts sont classés par l'étape qui les a attrapés, sur 6 barreaux allant de la chaîne de compilation à la production en passant par la revue, le test manuel, la recette et le client pilote ; les deux derniers barreaux comptent comme défauts échappés, et chaque règle exécutable ajoutée déplace une classe de défauts définitivement vers la gauche." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA SEULE ÉCHELLE QUI NOUS NOTE</text>
<text x="64" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Jusqu'où est-il allé vers la droite ?</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.30"></rect>
<rect x="178" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.25"></rect>
<rect x="292" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.20"></rect>
<rect x="406" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="520" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="634" y="112" width="102" height="42" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8">
<text x="115" y="138">chaîne</text>
<text x="229" y="138">revue</text>
<text x="343" y="138">test manuel</text>
<text x="457" y="138">recette</text>
<text x="571" y="138">pilote</text>
<text x="685" y="138">production</text>
</g>
<path d="M 520 166 L 520 178 L 736 178 L 736 166" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 628 178 L 628 190" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="628" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">défauts échappés</text>
<path d="M 640 268 L 96 268" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M 108 260 L 96 268 L 108 276" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="96" y="250" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">chaque règle exécutable déplace une classe d'un barreau, définitivement</text>
<text x="64" y="304" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">la classification que nous utilisons, pas une distribution mesurée</text>
<text x="64" y="326" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">nous sommes avant production : les derniers barreaux sont vides par étape, pas par mérite</text>
</svg>

<h2>Ce que rien de tout cela ne prouve</h2>
<p>Vient la moitié honnête, qui compte plus que l'architecture.</p>
<p><strong>C'est un cliquet, pas un filet.</strong> 39 contrôles encodent 39 défauts que nous avons fini par trouver, la plupart après qu'ils nous aient coûté quelque chose. Chaque nouveau contrôle existe précisément parce que ce contrôle n'existait pas. Cela ne me dit pas que la chaîne est digne de confiance. Cela me dit que nous ne pouvons plus refaire 39 erreurs précises, et ne dit rien de la classe encore en cours que personne n'a remarquée.</p>
<p><strong>Le verdict est plus étroit qu'il n'y paraît.</strong> PASS signifie qu'aucune règle exécutable <em>connue</em> n'est violée. La phase de bout en bout tourne sur des bouchons et ne touche jamais une vraie base. Plusieurs des défauts qui nous ont le plus appris seraient passés au travers.</p>
<p><strong>Les barreaux de droite sont vides à cause de notre étape, pas de notre mérite.</strong> Nous ne sommes pas encore en production. La preuve la plus dure — ce qui survit au contact d'utilisateurs réels, sur des données hospitalières réelles, à volume réel — est donc une preuve que nous n'avons pas. Quiconque vous montre une répartition de fuite avec les deux dernières colonnes vides vous montre un calendrier, pas un résultat qualité. Moi compris.</p>
<p><strong>Les contrôles attrapent la maladie qu'ils soignent.</strong> L'un des nôtres a été ajouté après un changement de schéma qui ne s'appliquait qu'aux bases fraîchement créées : vert dans la chaîne, vert en local, cassé sur tous les environnements existants. Le pire profil de défaut possible — et la première version de notre contrôle avait un angle mort exactement de la même forme.</p>
<p><strong>Les portes de sortie ne sont pas comptées.</strong> Une règle à laquelle on ne peut jamais déroger se contourne, alors les nôtres portent des dérogations greppables avec leur raison écrite à côté. Environ 12 sont en usage. Mais un seul contrôle compte ses dérogations dans le temps, contre une référence qui ne peut que décroître. Les autres pourraient accumuler des exemptions en silence, et rien n'empêche un agent d'écrire sa propre exemption pour se rendre vert. C'est la faille ouverte de tout ce qui précède, et je n'ai pas de correctif livré pour elle.</p>

<h2>Ce qui reste aux humains</h2>
<p>Être surpris le premier. Chacun de ces contrôles existe parce qu'une personne a senti que quelque chose clochait et est allée regarder. Aucune règle n'a jamais écrit la première règle.</p>
<p>Décider ce qu'un défaut signifie. Qu'un contrôle ne soit pas atteignable au clavier est un fait technique. Que cela nous place hors d'une obligation légale d'accessibilité, et bloque donc une livraison au lieu de rejoindre un backlog, est un jugement.</p>
<p>Juger une dérogation. Greppable veut dire auditable seulement si quelqu'un greppe.</p>
<p>Choisir où ne pas automatiser — le périmètre joignable de l'extérieur, où nous avons délibérément gardé une personne sur le chemin.</p>
<p>Et la question qu'aucun contrôle ne pose : est-ce que cette chose devrait exister.</p>
<p>Rien de tout cela n'est un argument pour moins de monde. Ce sont les gens qui sont surpris les premiers, et être surpris est la seule partie de tout ceci qui ne passe pas à l'échelle en écrivant plus de scripts.</p>

<h2>Quoi faire lundi matin</h2>
<ol>
<li><strong>Écrivez les propriétés, pas le processus.</strong> 5 phrases qui doivent être vraies après chaque changement. Si vous ne savez pas les nommer, aucun outillage ne les protégera.</li>
<li><strong>Étiquetez chaque défaut avec l'étape qui l'a attrapé.</strong> Cela coûte un champ et c'est la mesure la plus rentable de ce billet. Sans elle, vous comptez des bogues au lieu de mesurer leur portée.</li>
<li><strong>Prenez un incident déjà payé et faites-le échouer la compilation cette semaine.</strong> Pas une politique. Un incident, un script.</li>
<li><strong>Préférez les obligations qui traversent les fichiers.</strong> Écrire ici oblige à démarrer là-bas ; annoncer ici oblige à provisionner là-bas. C'est là que la revue est aveugle et le script bon marché.</li>
<li><strong>Dérivez chaque périmètre du code.</strong> Une liste tenue à la main est fausse un renommage plus tard, et elle échoue en silence.</li>
<li><strong>Comptez vos dérogations contre une référence qui ne peut que décroître.</strong> J'en ai un. Je devrais en avoir 40.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> — pourquoi les règles survivent aux modèles qui les lisent. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">Le backlog n'a jamais été le métier</a> — qui signe quand la règle et le jugement divergent. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % écrit par des agents</a> — la taxe de vérification, comptée. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">Encore un prompt</a> — pourquoi mon propre ressenti de vitesse n'est pas une preuve. <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">Le LAN est mort</a> — la case que personne n'a lue.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2601.21276">More Code, Less Reuse (MSR 2026)</a> : les propositions écrites par des agents portent nettement plus de code redondant, et les relecteurs les ont jugées <em>plus</em> favorablement que celles des humains. Comité de lecture, aucun financement d'éditeur. Le sentiment n'est pas la rigueur de revue : prenez la direction, pas un taux.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2211.03622">Perry et coll., Do Users Write More Insecure Code with AI Assistants ? (ACM CCS 2023)</a> : les participants assistés ont écrit du code moins sûr et étaient plus convaincus qu'il l'était. 47 participants, cadre de laboratoire, modèle vieux de trois générations. À citer pour le mécanisme, jamais comme un taux actuel.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2603.28592v1">Debt Behind the AI Boom (2026)</a> : 304 362 commits écrits par des agents et vérifiés par métadonnées ; parmi les problèmes trouvés, 89,1 % de maintenabilité, 5,8 % de bogues d'exécution, 5,1 % de sécurité. Les auteurs déclarent n'avoir fait tourner aucune référence humaine : cela décrit la forme de la dette, pas un écart avec les gens.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.gitclear.com/the_ai_code_quality_maintainability_gap">GitClear — The AI Code Quality Maintainability Gap (2026)</a> : duplication en hausse, remaniement en baisse sur 623 millions de lignes modifiées. Corrélation par année civile, sans attribution d'auteur, publiée par une société qui vend de l'analyse de qualité de code. Corroboration, pas preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/">Veracode GenAI Code Security (2025, retesté en 2026)</a> : 45 % des échantillons produits échouent à un contrôle de sécurité, stable d'une génération à l'autre. Financé par l'éditeur, invites synthétiques, sans revue ni chaîne dans la boucle : sortie brute d'un modèle, pas du code livré. La platitude de la courbe est le seul point durable.</li>
<li>Sur le chiffre le plus cité de ce débat — les 19 % de ralentissement mesurés sur des développeurs expérimentés dans des dépôts matures — j'ai écrit ce qui s'est passé quand ses propres auteurs en ont retiré le cadrage, dans <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">le billet sur la mesure de son propre ressenti</a>. Il n'est pas rejoué ici.</li>
<li>Solstice* — les couches, les décomptes et l'échelle de mesure viennent du dépôt et de son suivi d'issues. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés. Chiffres vérifiés le 29 août 2026.</li>
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
