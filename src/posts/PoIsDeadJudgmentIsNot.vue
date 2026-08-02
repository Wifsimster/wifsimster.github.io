<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'po-is-dead-judgment-is-not',
  date: '2026-08-02',
  tags: ['Software', 'AI', 'Opinion', 'Work']
}

const englishContent: PostContent = {
  title: 'The Backlog Was Never the Job',
  description: 'The same week, my feed buried the Product Owner, saved the Product Manager, gave up reading AI code line by line, and handed a whole product to one person. Four posts, one event: production stopped being the scarce thing. What dies is the transmission belt. What survives is product judgment — and it no longer belongs to a single role.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> The same week, my feed buried the <abbr title="Product Owner — the Scrum role responsible for the backlog">PO</abbr> and saved the <abbr title="Product Manager">PM</abbr>. A third post gave up re-reading AI-generated code line by line. A fourth argued that one person can now carry a product end to end. Four posts, one event: production stopped being the scarce thing. What dies is the transmission-belt function — feeding a backlog, formatting tickets, relaying answers. What survives is product judgment, and it stops being the property of one role. People stay. The job description doesn't.</p></div>
<hr>
<p>The same week, my feed buried the Product Owner and saved him.</p>
<p>Four posts, four authors who don't know each other, four angles. A lead product manager wrote that the PO role was always an organizational aberration and has become indefensible in the AI era: hiring someone to feed a backlog, write tickets and relay information between business and developers is optimizing an organization that is already obsolete. A transformation consultant answered, without knowing she was answering: her team generated two days' worth of user stories in two hours, well-written, well-sliced — and disconnected from the field constraints only real interviews would have surfaced. Her conclusion: the tool accelerated production, not the understanding of the problem, so the PM's value moves to arbitration and to field knowledge that cannot be delegated. A staff platform engineer admitted he no longer has the capacity to re-read all the code his agents produce, and that line-by-line review is probably no longer the right fight: invest in specifications, give the agents the means to test their own work, demand verifiable reports. And an independent developer observed that a single person can now carry a product end to end — code becoming one means among others, no longer the main activity.</p>
<p>Each of them is right about their segment. The lead PM is right that a role reduced to relaying is dead weight. The consultant is right that generated output is not understanding. The engineer is right that human attention has to move upstream, toward the spec and the verification harness. The indie developer is right that the walls between specialties are falling. They just aren't describing four different things.</p>
<blockquote><p>Four angles, one event: production stopped being the scarce thing.</p></blockquote>
<p>I wrote the engineering side of this a few months ago: <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coding was never the job</a>. This is the product side, seen from where I sit — an engineering lead on regulated healthcare software, on the other side of the wall from the product people. And from that side, the debate about whether the PO is dead misses the corpse.</p>

<h2>What the product week was actually made of</h2>
<p>Take an honest inventory of what the transmission-belt configuration filled a week with. Feeding the backlog. Formatting tickets so developers would accept them. Relaying a user's answer to a developer's question, then relaying the follow-up question back. Chasing statuses to feed a steering committee. Reformatting the same information for three audiences. None of this was ever the job. It was the packaging around the job, and it expanded to fill the week because someone had to do it and the tools were bad.</p>
<p>That packaging is what agents absorb. On my team, I have already <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">described</a> what that looks like on an ordinary Tuesday: agents triage the incoming tickets, persona panels debate a design before a human reads the synthesis. What we stopped asking of product is well-formatted tickets. What we ask for instead is the brief: the context, the constraints, what is forbidden and why. Twenty minutes of context assembly by someone who knows the domain, thirty seconds of generation, and then the conversation that actually matters — this draft contradicts the retention policy, kill it; these two stories assume the same screen, merge them.</p>
<blockquote><p>The brief became the work. The drafting was only ever the packaging.</p></blockquote>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative decomposition of a product week as a single stacked bar: the transmission share — backlog feeding, ticket writing, relaying and status — is what AI agents absorb; the remaining share — arbitration, field knowledge, refusal — is what survives and becomes the job." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE PRODUCT WEEK, DECOMPOSED · ILLUSTRATIVE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">The drafting leaves. The judgment stays.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 118 L 64 110 L 450 110 L 450 118"></path>
</g>
<text x="257" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle" opacity="0.75">what agents absorb</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="140" width="136" height="56" rx="8" fill="currentColor" fill-opacity="0.10"></rect>
<rect x="204" y="140" width="126" height="56" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="334" y="140" width="116" height="56" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="458" y="140" width="96" height="56" rx="8" fill="currentColor" fill-opacity="0.30"></rect>
<rect x="558" y="140" width="92" height="56" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
<rect x="654" y="140" width="82" height="56" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6">
<text x="132" y="216">backlog</text>
<text x="267" y="216">tickets</text>
<text x="392" y="216">relay &amp; status</text>
<text x="506" y="216">arbitration</text>
<text x="604" y="216">field</text>
<text x="695" y="216">refusal</text>
</g>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 458 228 L 458 236 L 736 236 L 736 228"></path>
</g>
<text x="597" y="258" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle">what remains — and becomes the job</text>
<text x="64" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">illustrative proportions — a model, not a measurement</text>
</svg>
<p>One thing the obituary posts get wrong, though. The ticket-clerk PO was not born a clerk. <abbr title="Marty Cagan — founder of the Silicon Valley Product Group, theorist of empowered product teams">Marty Cagan</abbr> has said for a decade that "product owner" names a set of responsibilities in a delivery process, not a profession — and that feature-factory organizations manufactured backlog administrators by design: output roadmaps, proxy stakeholders, no mandate to talk to users. Keep his taxonomy, keep your skepticism — he has been selling the empowered-team alternative for twenty years. But the diagnosis stands. The role was configured into a transmission belt by the organization around it. What AI removes is not the person. It removes the excuse for that configuration.</p>

<h2>What survives — and who signs it</h2>
<p>So what is the judgment share made of, concretely? Three things, seen from the engineering side of the wall.</p>
<p><strong>Arbitration.</strong> When an agent generates ten plausible hypotheses in thirty seconds, the scarce act is choosing: what we keep, what we test, what we throw away. A choice that holds when the client escalates, which means a choice someone is accountable for by name.</p>
<p><strong>Refusal.</strong> The most valuable sentence a product person says to my team is no. No, this drafted requirement contradicts how the certified module handles retention. No, we will not ship this to satisfy one hospital's workaround. Refusal requires knowing why, and being able to say why in a language an auditor accepts.</p>
<p><strong>The field.</strong> Agents interpolate from tickets, and tickets lie by omission. Nobody's backlog contains the fact that the night-shift nurse uses the software with gloves on, standing, interrupted every ninety seconds. Someone has to have watched. That knowledge does not come out of a language model, because it was never written down anywhere a model could read it.</p>
<p>My industry adds a fourth thing, and it is the one the LinkedIn debate never touches. In regulated healthcare software, a requirement is not a to-do item. It is a compliance artifact. The chain from user need to requirement to architecture to verification test is not bureaucracy; it is the thing the auditor reads, and every link carries a human signature that means something. An agent can draft every link of that chain. It cannot own a single one. "The agent generated it" is not provenance an audit accepts — the questions remain who reviewed it, when, under which procedure.</p>
<p>And here the acceleration cuts both ways. A product owner who wrote twelve requirements had read them. A product owner who approves sixty agent-drafted requirements per sprint is a click-through risk. The failure mode is not new. I have <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">already been burned</a> by a checkbox that everyone trusted and nobody read; the same checkbox is now waiting inside the traceability chain. AI makes the chain cheaper to produce and more dangerous to rubber-stamp. The trap even has a recognizable shape: a generated story that is internally perfect — testable, well-sliced, <abbr title="INVEST — Independent, Negotiable, Valuable, Estimable, Small, Testable: the classic checklist for well-formed user stories">INVEST</abbr>-compliant — and wrong, because it assumes a field is editable that is locked after signature for legal reasons. Every test passes. Only the person who knows the domain flinches. That person is the exact mirror of the engineer I described in the <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder post</a>: the one who notices something is wrong when everything is green.</p>

<h2>The boundary dissolves — and the trap accelerates</h2>
<p>Now put the two sides of the wall together. My engineers, driving agents all day, make product micro-decisions hourly: this edge case matters, that one doesn't, this error message will confuse a nurse. The product people, briefing agents that draft their specifications, are doing design. <abbr title="DORA — DevOps Research and Assessment, Google Cloud's research program on software delivery">DORA</abbr>'s 2025 research describes the same blur from survey data — product managers and analysts now use AI to do technical work that used to be beyond their reach, engineers absorb product work — treat the percentages with the usual survey caution, but the direction is symmetrical. Job boards have started advertising "product engineers". The two roles are not trading tasks. They are converging on the same scarce thing.</p>
<blockquote><p>AI accelerated production. It did not accelerate understanding the problem. It made understanding the only expensive thing left.</p></blockquote>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conceptual chart: since 2023 the cost of producing a feature collapses while the cost of knowing what to build stays flat; the widening gap between the two curves is where product judgment now lives." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">COST OF PRODUCING vs COST OF UNDERSTANDING · CONCEPTUAL</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">The gap is the new job.</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="96" x2="64" y2="292"></line>
<line x1="64" y1="292" x2="736" y2="292"></line>
</g>
<path d="M 80 130 C 300 127 500 126 716 124 L 716 280 C 650 278 550 274 440 248 C 320 214 220 148 80 130 Z" fill="currentColor" fill-opacity="0.10" stroke="none"></path>
<path d="M 80 130 C 220 148 320 214 440 248 C 550 274 650 278 716 280" fill="none" stroke="currentColor" stroke-width="2.5" stroke-opacity="0.8" stroke-linecap="round"></path>
<path d="M 80 130 C 300 127 500 126 716 124" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5,4" stroke-linecap="round"></path>
<text x="360" y="272" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" opacity="0.7">cost of producing a feature</text>
<text x="360" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" opacity="0.7">cost of knowing what to build</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 738 124 L 744 124 L 744 280 L 738 280"></path>
</g>
<text x="764" y="202" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle" transform="rotate(-90 764 202)">where product judgment lives</text>
<text x="736" y="312" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="end" opacity="0.6">2023 → 2026</text>
<text x="48" y="194" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6" transform="rotate(-90 48 194)">cost</text>
<text x="64" y="332" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">conceptual diagram — shapes, not measurements</text>
</svg>
<p>Which is exactly why the acceleration is dangerous. Ten hypotheses in thirty seconds is not ten times more understanding; it is ten times more output against the same discovery deficit. <abbr title="Melissa Perri — product management author and consultant, wrote Escaping the Build Trap">Melissa Perri</abbr> named this trap years before the agents arrived: a team measured on output ships features nobody needs, faithfully and forever. A feature factory with agents is a faster feature factory. I made the same point about my own field in the <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA post</a>: AI amplifies the system you have. If your product organization was a transmission belt, automation makes the belt spin faster. It does not tell you the conveyor is pointed at the wrong wall.</p>
<p>One more honest complication, because my own team is the counterexample to any tidy story. We grew this year — interns and apprentices included. Distributed product judgment is a senior-team luxury. A senior engineer with years in the domain can absorb arbitration; an apprentice given the same fused role produces confident, well-formatted, wrong decisions — faster than before, because the agent formats the wrongness beautifully. And the transmission belt, whatever its waste, was accidentally a school: writing tickets badly was how juniors learned the domain. Kill the belt and you kill the on-ramp with it. The replacement has to be built on purpose — juniors in the user calls, juniors reviewing requirements next to a senior who explains their no. It is the same junior-pipeline problem I flagged for engineers, transposed to product. Nobody inherits judgment. Someone teaches it.</p>

<h2>What still belongs to humans</h2>
<p>The list, stated plainly, because this is the section the obituary posts skip.</p>
<p><strong>Named accountability.</strong> Judgment can spread across a team; responsibility cannot. Someone still signs the priority call, the requirement, the refusal — someone is still the name the auditor writes down and the person the client calls at 8am. "Everyone owns the product" is the fastest way for nobody to own it.</p>
<p><strong>Discovery.</strong> No agent talks to your users. The interviews, the observation, the workflow watched in situ — untouched by everything above.</p>
<p><strong>Political arbitration.</strong> When a client's medical director wants a feature the risk analysis argues against, that negotiation is a trust relationship built over years. No generated spec settles it.</p>
<p><strong>Teaching.</strong> The apprenticeship path for product judgment, now that the tasks juniors learned on are automated.</p>
<p>And what this post does not say: that you need fewer product people. The freed hours have a destination — discovery, the field, the regulatory work that was always underwater. Cutting the people would mean cutting the judgment this whole article just argued is the only expensive thing left. The teams that win will be the ones that reinvest the hours, not the ones that harvest them.</p>

<h2>Monday morning</h2>
<ol>
<li><strong>Audit one week.</strong> Take a real week of product time and sort every hour: transmission or judgment. Not to cut anyone — to know what you should automate and what you should protect.</li>
<li><strong>Move one relay loop to an agent.</strong> Story drafting from a brief is the obvious first one. With a named human reviewer at the exit, and a rule that approving without reading is the failure mode you are watching for.</li>
<li><strong>Make the brief the deliverable.</strong> Context, constraints, what is forbidden and why. Judge the week by the quality of the briefs, not the volume of tickets.</li>
<li><strong>Put an engineer in one user call per sprint.</strong> And a junior next to them. The wall falls faster when people cross it in both directions.</li>
<li><strong>Rewrite one epic as a problem statement.</strong> Not a list of tickets — a description of who hurts, when, and how you will know it stopped.</li>
<li><strong>Name who signs.</strong> For each product decision chain, one accountable name. If you cannot find the name, you have found the problem.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — the engineering side of this exact argument. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the amplifier, measured. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — six months of agents, graded.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/product-manager-vs-product-owner/">SVPG — Product Manager vs. Product Owner</a>: Cagan's decade-old distinction between the Scrum role and the profession. He sells the empowered-team model — keep the taxonomy, keep your skepticism.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/ai-product-management-2-years-in/">SVPG — AI Product Management: 2 Years In</a>: the January 2026 piece splitting delivery-team PO, feature-team PM and empowered PM, and predicting the reckoning for the first two.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://melissaperri.com/book">Melissa Perri — Escaping the Build Trap</a>: the output-vs-outcome frame this post leans on. Written before agents; more relevant since.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/dora-report-2025/">DORA — 2025 State of AI-assisted Software Development</a>: the bidirectional role blur. Self-reported survey data — directions, not decimals.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.mindtheproduct.com/what-the-data-tells-us-about-tech-and-pm-lay-offs-in-2026/">Mind the Product — What the data tells us about tech and PM layoffs</a>: the senior-exit numbers. Nobody can cleanly separate AI from the post-2021 correction, and honest sources say so.</li>
<li>Four LinkedIn posts, paraphrased anonymously with their arguments intact. The authors don't know each other, or me. That's rather the point.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'Le backlog n\'a jamais été le métier',
  description: 'La même semaine, mon fil a enterré le Product Owner, sauvé le Product Manager, renoncé à relire le code ligne à ligne et confié un produit entier à une seule personne. Quatre posts, un seul événement : la production a cessé d\'être la chose rare. Ce qui meurt, c\'est la courroie de transmission. Ce qui survit, c\'est le jugement produit — et il n\'appartient plus à un seul rôle.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> La même semaine, mon fil a enterré le <abbr title="Product Owner — le rôle Scrum responsable du backlog">PO</abbr> et sauvé le <abbr title="Product Manager — responsable produit">PM</abbr>. Un troisième post renonçait à relire ligne à ligne le code généré par l'IA. Un quatrième affirmait qu'une personne seule peut désormais porter un produit de bout en bout. Quatre posts, un seul événement : la production a cessé d'être la chose rare. Ce qui meurt, c'est la fonction de courroie de transmission — alimenter un backlog, formater des tickets, relayer des réponses. Ce qui survit, c'est le jugement produit, et il cesse d'appartenir à un seul rôle. Les personnes restent. La fiche de poste, non.</p></div>
<hr>
<p>La même semaine, mon fil a enterré le Product Owner et l'a sauvé.</p>
<p>Quatre posts, quatre auteurs qui ne se connaissent pas, quatre angles. Un lead product écrivait que le poste de PO a toujours été une aberration organisationnelle et devient indéfendable à l'ère de l'IA : recruter quelqu'un pour alimenter un backlog, rédiger des tickets et faire l'intermédiaire entre le métier et les développeurs, c'est optimiser une organisation déjà obsolète. Une consultante en transformation lui répondait sans le savoir : son équipe a généré en deux heures ce qui prenait deux jours de user stories — bien rédigées, bien découpées, et déconnectées des contraintes terrain que seuls de vrais entretiens auraient fait remonter. Sa conclusion : l'outil a accéléré la production, pas la compréhension du problème ; la valeur du PM se déplace vers l'arbitrage et vers une connaissance du terrain qui ne se délègue pas. Un staff engineer reconnaissait ne plus avoir la capacité de relire tout le code produit par ses agents, et que la relecture ligne à ligne n'est probablement plus le bon combat : investir dans les spécifications, donner aux agents les moyens de tester leur travail, exiger des rapports vérifiables. Et un développeur indépendant observait qu'une personne seule peut désormais porter un produit de bout en bout — le code devenant un moyen parmi d'autres, et non plus l'activité principale.</p>
<p>Chacun a raison sur son segment. Le lead product a raison : un rôle réduit au relais est un poids mort. La consultante a raison : la production générée n'est pas de la compréhension. L'ingénieur a raison : l'attention humaine doit remonter vers la spec et le harnais de vérification. L'indépendant a raison : les murs entre spécialités tombent. Simplement, ils ne décrivent pas quatre choses différentes.</p>
<blockquote><p>Quatre angles, un seul événement : la production a cessé d'être la chose rare.</p></blockquote>
<p>J'ai écrit le versant ingénierie de cette histoire il y a quelques mois : <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder n'a jamais été le métier</a>. Voici le versant produit, vu de là où je suis — lead d'une équipe sur du logiciel de santé réglementé, de l'autre côté du mur des gens du produit. Et vu de ce côté-là, le débat sur la mort du PO se trompe de cadavre.</p>

<h2>Ce que la semaine produit contenait vraiment</h2>
<p>Faites l'inventaire honnête de ce qui remplissait une semaine dans la configuration courroie de transmission. Alimenter le backlog. Formater des tickets pour que les développeurs les acceptent. Relayer la réponse d'un utilisateur à la question d'un développeur, puis relayer la question suivante dans l'autre sens. Courir après les statuts pour nourrir un comité. Reformater la même information pour trois audiences. Rien de tout cela n'a jamais été le métier. C'était l'emballage autour du métier, et il a fini par remplir la semaine parce qu'il fallait bien que quelqu'un le fasse et que les outils étaient mauvais.</p>
<p>Cet emballage, c'est ce que les agents absorbent. Sur mon équipe, j'ai déjà <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">raconté</a> à quoi ça ressemble un mardi ordinaire : des agents trient les tickets entrants, des panels de personas débattent d'une conception avant qu'un humain ne lise la synthèse. Ce qu'on a cessé de demander au produit : des tickets bien formatés. Ce qu'on demande à la place : le brief. Le contexte, les contraintes, ce qui est interdit et pourquoi. Vingt minutes d'assemblage de contexte par quelqu'un qui connaît le domaine, trente secondes de génération, puis la conversation qui compte vraiment — ce brouillon contredit la politique de rétention, on le tue ; ces deux stories supposent le même écran, on les fusionne.</p>
<blockquote><p>Le brief est devenu le travail. La rédaction n'a jamais été que l'emballage.</p></blockquote>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Décomposition illustrative d'une semaine produit en une seule barre empilée : la part transmission — alimentation du backlog, rédaction de tickets, relais et statuts — est ce que les agents IA absorbent ; la part restante — arbitrage, terrain, refus — est ce qui survit et devient le métier." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA SEMAINE PRODUIT, DÉCOMPOSÉE · ILLUSTRATIF</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">La rédaction part. Le jugement reste.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 118 L 64 110 L 450 110 L 450 118"></path>
</g>
<text x="257" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle" opacity="0.75">ce que les agents absorbent</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="140" width="136" height="56" rx="8" fill="currentColor" fill-opacity="0.10"></rect>
<rect x="204" y="140" width="126" height="56" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="334" y="140" width="116" height="56" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="458" y="140" width="96" height="56" rx="8" fill="currentColor" fill-opacity="0.30"></rect>
<rect x="558" y="140" width="92" height="56" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
<rect x="654" y="140" width="82" height="56" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6">
<text x="132" y="216">backlog</text>
<text x="267" y="216">tickets</text>
<text x="392" y="216">relais &amp; statuts</text>
<text x="506" y="216">arbitrage</text>
<text x="604" y="216">terrain</text>
<text x="695" y="216">refus</text>
</g>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 458 228 L 458 236 L 736 236 L 736 228"></path>
</g>
<text x="597" y="258" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle">ce qui reste — et devient le métier</text>
<text x="64" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">proportions illustratives — un modèle, pas une mesure</text>
</svg>
<p>Un point, quand même, que les posts-nécrologies ratent. Le PO greffier de tickets n'est pas né greffier. <abbr title="Marty Cagan — fondateur du Silicon Valley Product Group, théoricien des équipes produit « empowered »">Marty Cagan</abbr> répète depuis dix ans que « product owner » désigne un ensemble de responsabilités dans un processus de livraison, pas une profession — et que les usines à features ont fabriqué des administrateurs de backlog par construction : des roadmaps d'output, des parties prenantes par procuration, aucun mandat pour parler aux utilisateurs. Gardez sa taxonomie, gardez votre scepticisme — il vend l'alternative « empowered » depuis vingt ans. Mais le diagnostic tient. C'est l'organisation qui a configuré le rôle en courroie de transmission. Ce que l'IA supprime, ce n'est pas la personne. C'est l'excuse de cette configuration.</p>

<h2>Ce qui survit — et qui le signe</h2>
<p>De quoi est faite la part jugement, concrètement ? Trois choses, vues du côté ingénierie du mur.</p>
<p><strong>L'arbitrage.</strong> Quand un agent génère dix hypothèses plausibles en trente secondes, l'acte rare, c'est choisir : ce qu'on garde, ce qu'on teste, ce qu'on jette. Un choix qui tient quand le client escalade — donc un choix dont quelqu'un répond, nommément.</p>
<p><strong>Le refus.</strong> La phrase la plus précieuse qu'une personne produit dit à mon équipe, c'est non. Non, cette exigence générée contredit la gestion de la rétention du module certifié. Non, on ne livre pas ça pour satisfaire le contournement d'un seul établissement. Refuser exige de savoir pourquoi, et de pouvoir le dire dans une langue qu'un auditeur accepte.</p>
<p><strong>Le terrain.</strong> Les agents interpolent à partir des tickets, et les tickets mentent par omission. Aucun backlog ne contient le fait que l'infirmière de nuit utilise le logiciel debout, avec des gants, interrompue toutes les quatre-vingt-dix secondes. Il faut que quelqu'un ait regardé. Ce savoir-là ne sort pas d'un modèle de langage : il n'a jamais été écrit nulle part où un modèle aurait pu le lire.</p>
<p>Mon secteur ajoute une quatrième chose, celle que le débat LinkedIn ne touche jamais. Dans le logiciel de santé réglementé, une exigence n'est pas une tâche à faire. C'est un artefact de conformité. La chaîne qui va du besoin utilisateur à l'exigence, à l'architecture, au test de vérification n'est pas de la bureaucratie : c'est ce que l'auditeur lit, et chaque maillon porte une signature humaine qui veut dire quelque chose. Un agent peut rédiger chaque maillon de cette chaîne. Il ne peut en posséder aucun. « C'est l'agent qui l'a générée » n'est pas une provenance qu'un audit accepte — les questions restent : qui a relu, quand, selon quelle procédure.</p>
<p>Et là, l'accélération coupe dans les deux sens. Un PO qui rédigeait douze exigences les avait lues. Un PO qui approuve soixante exigences générées par sprint est un risque de tampon automatique. Le mode de défaillance n'est pas nouveau. Je me suis <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">déjà fait avoir</a> par une case à cocher que tout le monde validait et que personne ne lisait ; la même case attend désormais au milieu de la chaîne de traçabilité. L'IA rend cette chaîne moins chère à produire et plus dangereuse à tamponner. Le piège a même une forme reconnaissable : une story générée, intérieurement parfaite — testable, bien découpée, conforme à <abbr title="INVEST — Independent, Negotiable, Valuable, Estimable, Small, Testable : la check-list classique des user stories bien formées">INVEST</abbr> — et fausse, parce qu'elle suppose modifiable un champ verrouillé après signature pour des raisons légales. Tous les tests passent. Seule la personne qui connaît le domaine tique. Cette personne est le miroir exact de l'ingénieur que je décrivais dans le <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">post sur le code</a> : celle qui remarque que quelque chose cloche quand tout est vert.</p>

<h2>La frontière se dissout — et le piège accélère</h2>
<p>Rassemblez maintenant les deux côtés du mur. Mes ingénieurs, qui pilotent des agents toute la journée, prennent des micro-décisions produit toutes les heures : ce cas limite compte, celui-là non, ce message d'erreur va perdre une infirmière. Les gens du produit, qui briefent des agents rédigeant leurs spécifications, font de la conception. La recherche 2025 de <abbr title="DORA — DevOps Research and Assessment, le programme de recherche de Google Cloud sur le delivery logiciel">DORA</abbr> décrit le même flou depuis ses données d'enquête — les PM et analystes utilisent l'IA pour faire un travail technique qui leur était inaccessible, les ingénieurs absorbent du travail produit. Prenez les pourcentages avec la prudence des données déclaratives ; la direction, elle, est symétrique. Les offres d'emploi commencent à afficher « product engineer ». Les deux rôles n'échangent pas des tâches. Ils convergent vers la même chose rare.</p>
<blockquote><p>L'IA a accéléré la production. Elle n'a pas accéléré la compréhension du problème. Elle en a fait la seule chose chère.</p></blockquote>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme conceptuel : depuis 2023, le coût de production d'une fonctionnalité s'effondre tandis que le coût de savoir quoi construire reste stable ; l'écart grandissant entre les deux courbes est l'endroit où vit désormais le jugement produit." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">COÛT DE PRODUCTION vs COÛT DE COMPRÉHENSION · CONCEPTUEL</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">L'écart, c'est le nouveau métier.</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="96" x2="64" y2="292"></line>
<line x1="64" y1="292" x2="736" y2="292"></line>
</g>
<path d="M 80 130 C 300 127 500 126 716 124 L 716 280 C 650 278 550 274 440 248 C 320 214 220 148 80 130 Z" fill="currentColor" fill-opacity="0.10" stroke="none"></path>
<path d="M 80 130 C 220 148 320 214 440 248 C 550 274 650 278 716 280" fill="none" stroke="currentColor" stroke-width="2.5" stroke-opacity="0.8" stroke-linecap="round"></path>
<path d="M 80 130 C 300 127 500 126 716 124" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5,4" stroke-linecap="round"></path>
<text x="360" y="272" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" opacity="0.7">coût de production d'une fonctionnalité</text>
<text x="360" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" opacity="0.7">coût de savoir quoi construire</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 738 124 L 744 124 L 744 280 L 738 280"></path>
</g>
<text x="764" y="202" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle" transform="rotate(-90 764 202)">là où vit le jugement produit</text>
<text x="736" y="312" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="end" opacity="0.6">2023 → 2026</text>
<text x="48" y="194" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6" transform="rotate(-90 48 194)">coût</text>
<text x="64" y="332" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">diagramme conceptuel — des formes, pas des mesures</text>
</svg>
<p>C'est exactement pour ça que l'accélération est dangereuse. Dix hypothèses en trente secondes, ce n'est pas dix fois plus de compréhension ; c'est dix fois plus d'output face au même déficit de découverte. <abbr title="Melissa Perri — autrice et consultante en product management, a écrit Escaping the Build Trap">Melissa Perri</abbr> a nommé ce piège des années avant l'arrivée des agents : une équipe mesurée à l'output livre des fonctionnalités dont personne n'a besoin, consciencieusement et pour toujours. Une usine à features avec des agents est une usine à features plus rapide. J'ai fait le même constat pour mon propre métier dans le <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">post sur DORA</a> : l'IA amplifie le système que vous avez. Si votre organisation produit était une courroie de transmission, l'automatisation fait tourner la courroie plus vite. Elle ne vous dit pas que le tapis pointe vers le mauvais mur.</p>
<p>Une complication honnête pour finir, parce que ma propre équipe est le contre-exemple de toute histoire trop propre. On a grandi cette année — alternants et stagiaires compris. Le jugement produit distribué est un luxe d'équipe senior. Un ingénieur senior avec des années de domaine peut absorber de l'arbitrage ; un alternant à qui on confie le même rôle fusionné produit des décisions confiantes, bien formatées et fausses — plus vite qu'avant, parce que l'agent met magnifiquement en forme l'erreur. Et la courroie de transmission, quel que soit son gaspillage, était accidentellement une école : écrire des tickets, même mal, c'était apprendre le domaine. Tuez la courroie et vous tuez la rampe d'accès avec. Le remplacement doit se construire délibérément — des juniors dans les appels utilisateurs, des juniors qui relisent les exigences à côté d'un senior qui explique son non. C'est le même problème de vivier junior que j'ai signalé pour les ingénieurs, transposé au produit. Personne n'hérite du jugement. Quelqu'un l'enseigne.</p>

<h2>Ce qui reste aux humains</h2>
<p>La liste, dite simplement, parce que c'est la section que les posts-nécrologies sautent.</p>
<p><strong>La responsabilité nommée.</strong> Le jugement peut se répartir dans une équipe ; la responsabilité, non. Quelqu'un signe toujours l'arbitrage, l'exigence, le refus — quelqu'un reste le nom que l'auditeur note et la personne que le client appelle à 8 h. « Le produit appartient à tout le monde » est le chemin le plus court pour qu'il n'appartienne à personne.</p>
<p><strong>La découverte.</strong> Aucun agent ne parle à vos utilisateurs. Les entretiens, l'observation, le workflow regardé sur place — rien de ce qui précède n'y touche.</p>
<p><strong>L'arbitrage politique.</strong> Quand le directeur médical d'un client veut une fonctionnalité que l'analyse de risque déconseille, cette négociation est une relation de confiance construite sur des années. Aucune spec générée ne la tranche.</p>
<p><strong>La transmission.</strong> Le chemin d'apprentissage du jugement produit, maintenant que les tâches sur lesquelles les juniors apprenaient sont automatisées.</p>
<p>Et ce que ce texte ne dit pas : qu'il faut moins de gens produit. Les heures libérées ont une destination — la découverte, le terrain, le travail réglementaire qui a toujours été sous l'eau. Couper les personnes, ce serait couper le jugement dont tout cet article vient d'expliquer qu'il est la seule chose chère qui reste. Les équipes qui gagneront sont celles qui réinvestissent les heures, pas celles qui les moissonnent.</p>

<h2>Lundi matin</h2>
<ol>
<li><strong>Auditez une semaine.</strong> Prenez une vraie semaine de temps produit et classez chaque heure : transmission ou jugement. Pas pour couper — pour savoir quoi automatiser et quoi protéger.</li>
<li><strong>Confiez une boucle de relais à un agent.</strong> La rédaction de stories à partir d'un brief est la première évidente. Avec un relecteur humain nommé en sortie, et une règle : approuver sans lire est le mode de défaillance que vous surveillez.</li>
<li><strong>Faites du brief le livrable.</strong> Le contexte, les contraintes, ce qui est interdit et pourquoi. Jugez la semaine à la qualité des briefs, pas au volume de tickets.</li>
<li><strong>Mettez un ingénieur dans un appel utilisateur par sprint.</strong> Et un junior à côté de lui. Le mur tombe plus vite quand on le traverse dans les deux sens.</li>
<li><strong>Réécrivez un epic en énoncé de problème.</strong> Pas une liste de tickets — la description de qui a mal, quand, et comment vous saurez que ça a cessé.</li>
<li><strong>Nommez qui signe.</strong> Pour chaque chaîne de décision produit, un nom responsable. Si vous ne trouvez pas le nom, vous avez trouvé le problème.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — le versant ingénierie de cet exact argument. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — l'amplificateur, mesuré. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % du code écrit par des agents</a> — six mois d'agents, notés.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/product-manager-vs-product-owner/">SVPG — Product Manager vs. Product Owner</a> : la distinction, vieille de dix ans, entre le rôle Scrum et la profession. Cagan vend le modèle « empowered » — gardez la taxonomie, gardez votre scepticisme.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/ai-product-management-2-years-in/">SVPG — AI Product Management: 2 Years In</a> : le texte de janvier 2026 qui sépare PO d'équipe de livraison, PM d'usine à features et PM « empowered », et prédit l'heure des comptes pour les deux premiers.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://melissaperri.com/book">Melissa Perri — Escaping the Build Trap</a> : le cadre output contre outcome sur lequel ce post s'appuie. Écrit avant les agents ; plus pertinent depuis.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/dora-report-2025/">DORA — 2025 State of AI-assisted Software Development</a> : le flou des rôles, dans les deux sens. Données déclaratives d'enquête — des directions, pas des décimales.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.mindtheproduct.com/what-the-data-tells-us-about-tech-and-pm-lay-offs-in-2026/">Mind the Product — What the data tells us about tech and PM layoffs</a> : les chiffres de départs seniors. Personne ne sait proprement séparer l'IA de la correction post-2021, et les sources honnêtes le disent.</li>
<li>Quatre posts LinkedIn, paraphrasés anonymement, leurs arguments intacts. Leurs auteurs ne se connaissent pas, et ne me connaissent pas. C'est un peu tout le sujet.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'PoIsDeadJudgmentIsNot',
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
