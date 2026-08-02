<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'doctrine-as-code',
  date: '2026-08-02',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'Doctrine Compounds. Models Don\'t.',
  description: 'Eight frontier models in six months, treated as what they have become: a versioned dependency that depreciates. What compounds is the doctrine — the ADRs agents read, the rules CI enforces, the versioned context. And a confession: our own inventory found the doctrine drifting. It only compounds where it executes.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> In six months my team swapped eight frontier models, and nobody noticed. Nobody noticed because nothing that holds the team together lives in the model. It lives in the repository: 59 <abbr title="Architecture Decision Record — a dated, versioned architecture decision kept in the repository">ADRs</abbr> agents read before structural changes, 134 enforceable rules wired to blocking <abbr title="Continuous Integration">CI</abbr>, 23 anti-drift scripts, 47 packaged skills, 42 agent-context files with an official reading order. The model became a versioned dependency; the doctrine became the asset. Then our own inventory found the doctrine drifting — files describing a framework we no longer use, a "blocking" script wired nowhere, a guardrail that never blocks. The honest version of the thesis survived the audit: doctrine compounds only where it executes.</p></div>
<hr>
<p>In six months, I replaced my team's brain eight times. Nobody noticed.</p>
<p>Eight frontier models between February and July — I <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">counted them</a> when I graded the half-year. Each swap took one line of configuration and zero meetings. No onboarding, no knowledge transfer, no goodbye card. And the reason nobody noticed is the whole subject of this post: nothing that makes my team work lives in the model anymore. The briefs, the rules, the guardrails, the context — all of it lives in the repository, versioned, reviewed, and enforced. The model stopped being a miracle. It became a dependency.</p>

<h2>The model is a dependency</h2>
<p>Treat that sentence literally, not rhetorically. A dependency is something you pin to a version, upgrade deliberately, and expect to be deprecated. Model vendors now guarantee as little as sixty days of deprecation notice; effective lifecycles have compressed to months. Whatever you build that lives <em>inside</em> a specific model's behavior — the prompt tricks, the workaround for last quarter's weakness — depreciates on the same schedule. You are not investing when you tune to a model. You are renting.</p>
<blockquote><p>A model is replaced with one line of configuration. A doctrine takes years to rebuild.</p></blockquote>
<svg viewBox="0 0 800 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Over six months, eight frontier models were adopted and replaced one after the other, while the doctrine — ADRs, rules, guardrails, skills, context files — accreted step by step and was all still there at the end: one model in service, everything of the doctrine kept." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">SIX MONTHS ON SOLSTICE · MODELS vs DOCTRINE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">Eight models swapped. One doctrine kept.</text>
<text x="64" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" font-weight="600" opacity="0.55" letter-spacing="0.1em">FRONTIER MODELS · ADOPTED, THEN REPLACED</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="144" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="224" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="304" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="384" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="464" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="544" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="624" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.22"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="9.5" text-anchor="middle" opacity="0.55">
<text x="100" y="150">FEB</text>
<text x="180" y="150">APR</text>
<text x="260" y="150">APR</text>
<text x="340" y="150">MAY</text>
<text x="420" y="150">JUN</text>
<text x="500" y="150">JUN</text>
<text x="580" y="150">JUL</text>
<text x="660" y="150">JUL</text>
</g>
<text x="708" y="127" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" opacity="0.75">in service: 1</text>
<text x="64" y="192" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" font-weight="600" opacity="0.55" letter-spacing="0.1em">DOCTRINE ACCRUED · ADRS, RULES, GUARDRAILS, SKILLS, CONTEXT</text>
<path d="M 64 330 L 64 318 L 160 318 L 160 306 L 256 306 L 256 292 L 352 292 L 352 278 L 448 278 L 448 262 L 544 262 L 544 248 L 640 248 L 640 238 L 696 238 L 696 330 Z" fill="currentColor" fill-opacity="0.26" stroke="currentColor" stroke-opacity="0.22" stroke-width="1" stroke-linejoin="round"></path>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" text-anchor="middle" opacity="0.65">
<text x="112" y="322">ADRs</text>
<text x="256" y="322">rules</text>
<text x="400" y="322">guardrails</text>
<text x="544" y="322">skills</text>
<text x="650" y="322">context</text>
</g>
<text x="708" y="245" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" opacity="0.75">kept: all</text>
<text x="64" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">real release cadence (Feb → Jul 2026) · illustrative heights</text>
</svg>
<p>There is a serious objection here, and it deserves to be stated at full strength. <abbr title="Richard Sutton — reinforcement-learning researcher, author of the 2019 essay The Bitter Lesson">Richard Sutton</abbr>'s Bitter Lesson, applied to agents, says every scaffold is a bet against the next model: the elaborate orchestration you hand-roll today is exactly what the next release absorbs, and the harness builders themselves have deleted large parts of their scaffolding at each generation. That critique is correct — about <em>procedural</em> scaffolding. Hand-written control flow, orchestration logic, prompt choreography: that layer depreciates with the models, and we have thrown ours away more than once.</p>
<p>But it does not touch the other layer. No model release will ever ship knowing that in our product, a specific field is locked after signature for legal reasons. That fact is not intelligence; it is <em>our</em> system. The declarative layer — decisions, constraints, domain rules, acceptance criteria — is knowledge no amount of model progress makes obsolete, because no vendor has it. The thesis of this post is deliberately narrow: procedural scaffolding depreciates like models do. What compounds is declarative, machine-checked doctrine.</p>

<h2>What agents read before touching code</h2>
<p>Concretely, on <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, an agent does not start from a blank prompt. There is an official reading order, written down: the root context file, then the ADRs, then the context file of the subsystem it is about to touch, then the domain rules, the design rules, the security rules. The corpus behind that order, as of late July: 59 ADRs that agents must read before any structural change. 134-plus enforceable rules, each linked to the acceptance criteria of the spec it serves, each imposed by blocking CI — no rule drifts silently. 23 anti-drift check scripts. 47 packaged skills. 42 context files: one at the root, one per subsystem, each documenting the service's role, its applicable ADRs, its local conventions.</p>
<p>Two details in that list say where this is going. The pre-PR gate renders a PASS/FAIL verdict whose JSON output is explicitly written to be parsed by an agent — the machine writes for the machine. And one guardrail watches the context layer itself: when a folder's code changes, it reminds you to update the folder's context file. The doctrine documents the system; a check checks the doctrine. Turtles, but useful turtles.</p>
<p>None of this is a new idea. My regulated industry has run <em>compliance as code</em> for years: policy written as text nobody reads becomes policy written as rules a pipeline enforces. And the ADR revival in the agent era has a one-sentence justification I have watched come true: an agent that cannot see <em>why</em> the code has a shape will refactor the reason away. The retry logic that looks redundant, the naming that looks legacy — an agent deletes in seconds what took an incident to learn. The ADR is how the incident stays learned.</p>

<h2>I buried the SDLC. Then I wrote 134 rules.</h2>
<p>Now the paragraph I owe you. My first post in this series declared the <abbr title="Software Development Life Cycle">SDLC</abbr> dead: the process was always waste, ceremony is what you do when you don't trust your tools. A hostile reader writes the tweet in ten seconds: <em>he killed the SDLC and rebuilt it in YAML.</em></p>
<blockquote><p>Yes, I rebuilt a process. The promise was never "no process". It was "no process that burns human hours without verifying anything".</p></blockquote>
<p>Here is the discriminator, and it is falsifiable. A ceremony consumes human time at every occurrence and verifies nothing: the estimation meeting, the sign-off, the status update — hours per week, forever, and none of them ever caught a regression. A compiled constraint consumes zero marginal human time and verifies every time: the rule runs in seconds, blocks deterministically, and never gets tired on a Friday afternoon. The old process taxed humans to produce a feeling of control. The doctrine taxes machines to produce actual control. And the day one of our rules requires a meeting to interpret, it has become a ceremony again — and it must die.</p>
<p>I will even concede the receipts: the March post already praised the agent that "validates against architectural constraints". The doctrine is that sentence, industrialized. What died was not process. What died was process aimed at people.</p>
<p>One flank stays open, and I would rather name it than have it named for me. A doctrine that only ever accretes is the new waste — 134 rules in four and a half months extrapolates to a number I refuse to type. Pruning has started where it was cheapest: four skills were deleted from the bundle when models made them native. Rules deleted so far: zero. That is the open flank. Quote it back at me.</p>

<h2>The inventory that stings</h2>
<p>Late July, we inventoried our own method — every file, every script, every claim the method makes about itself. The verdict earns its own section.</p>
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The doctrine audit found that the executed share of the doctrine held while the descriptive share drifted: agent files still describing the old framework, a script documented as blocking but wired nowhere, an advisory-only freshness guardrail, and a local gate that is a strict subset of CI." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE DOCTRINE AUDIT · LATE JULY</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">Doctrine drifts too.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 592 96 L 592 90 L 736 90 L 736 96"></path>
</g>
<text x="664" y="80" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle" opacity="0.75">found by hand, not by CI</text>
<rect x="64" y="104" width="520" height="44" rx="8" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="592" y="104" width="144" height="44" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="4,3"></rect>
<text x="324" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6">the executed share — held</text>
<text x="664" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6">the descriptive share — rotted</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" opacity="0.75">
<text x="64" y="200">— agent files still describing the old framework, months after the migration</text>
<text x="64" y="222">— a script documented as "blocking in PR", wired nowhere</text>
<text x="64" y="244">— the context-freshness guardrail: advisory, it never blocks</text>
<text x="64" y="266">— the local gate, a strict subset of CI: a local PASS guarantees nothing</text>
</g>
<text x="64" y="300" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">illustrative surface — the four findings are real</text>
</svg>
<p>The honest reading, and I will not spin it: the layer that executes held. The layer that describes rotted, silently, for months — and it was a manual audit, unscheduled and late, that caught it. A smoke detector tested once, after the smell. The files still described the frontend framework we migrated away from mid-flight; one instruction layer got updated, the others did not. Nothing failed, because nothing executes a description. Code that is wrong breaks a test. A context file that is wrong breaks an agent silently, three weeks later, inside a PR that looks plausible.</p>
<blockquote><p>Doctrine compounds only where it executes.</p></blockquote>
<p>The audit also put a number on who pays. 85.4% of the commits on Solstice carry my name — a bias the method deck itself declares. The doctrine exists partly to reduce the team's dependency on its tech lead. Today it is written, and maintained, mostly by the tech lead. That is not a paradox; it is a maintenance contract signed with the future team, and it costs real senior time every week. But it means the bus-factor mitigation is half built: if I left tomorrow, the team would inherit a corpus that is mostly right without knowing which parts lie — arguably worse than nothing, because agents execute the stale parts with full confidence. The fix is known and unglamorous: the freshness guardrail must become blocking — it is on the roadmap — and the inventory must become a ritual, not an accident.</p>
<p>Last caveat, against myself. All of this grew on a greenfield platform with one very senior engineer holding most of the pen. On the legacy code most of us maintain, my own measured gain <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">stays at or under 10%</a>, and doctrine there mostly records the archaeology — it compounds slower, because half the decisions were made by people who left. Read this post as a data point from near-ideal conditions, not a method that transfers as-is.</p>

<h2>What still belongs to humans</h2>
<p><strong>Deciding which rules exist.</strong> The machine enforces a decision. It does not make one.</p>
<p><strong>Deleting rules.</strong> Pruning is a judgment call, and it is the difference between doctrine and bureaucracy. Nobody automates the courage to remove a gate.</p>
<p><strong>Arbitrating when doctrine and judgment conflict.</strong> A rule says no; the person who knows the domain says this case is different. Someone signs that override — the <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">judgment post</a> is about exactly who.</p>
<p><strong>Knowing which document to distrust.</strong> Until freshness is enforced, that knowledge is tribal — and tribal knowledge is the thing this whole edifice was supposed to replace.</p>
<p>And the usual clarification, because this series has a rule about it: none of this argues for fewer people. The hours the doctrine saves have a destination — discovery, teaching, the audit that this post just proved we needed. An asset nobody maintains is a liability with good branding.</p>

<h2>Monday morning</h2>
<ol>
<li><strong>Inventory your doctrine before writing more of it.</strong> Every instruction file, every check, every claim your method makes about itself. What you find will reorder the rest of this list.</li>
<li><strong>One root context file agents actually read.</strong> Current stack, current architecture, one page. Wrong context is worse than no context.</li>
<li><strong>Five rules maximum, every one wired to a check that blocks.</strong> A rule in prose is a wish with a version number. Zero unwired rules, from day one.</li>
<li><strong>ADRs only for decisions someone already re-litigated once.</strong> That is the signal the reason needs writing down before an agent refactors it away.</li>
<li><strong>Make the freshness gate blocking before the corpus grows.</strong> "Context file touched when its folder's code changes" costs nothing at five files and everything at forty-two.</li>
<li><strong>The meeting-to-rules pipeline last.</strong> It is the compounding engine, but only once the five points above hold.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — the post this one partially answers. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the amplifier, measured. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — the six months the eight models span. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">The Backlog Was Never the Job</a> — who signs when doctrine and judgment disagree.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Anthropic — Effective context engineering for AI agents</a>: the lab's own framing of context as engineered asset. A vendor with an interest in you investing in its harness — read it as "the lab says so too", not as proof.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://agents.md/">AGENTS.md</a>: the cross-vendor agent-context convention, donated to the Linux Foundation's Agentic AI Foundation in late 2025. Adoption counts come from the spec's promoters.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.actual.ai/blog/agent-optimized-adrs">actual.ai — Agent-optimized ADRs</a>: the "agent refactors the reason away" failure mode. Practitioner writing, not peer review.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2606.09090">Context rot in AI-assisted development (preprint)</a>: stale references measured in repository config and context artifacts. A preprint — direction, not decimals.</li>
<li><a target="_blank" rel="noopener noreferrer" href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Richard Sutton — The Bitter Lesson</a> and <a target="_blank" rel="noopener noreferrer" href="https://browser-use.com/posts/bitter-lesson-agent-frameworks">its agent-framework application</a>: the strongest objection to this post, cited on purpose. It wins against procedural scaffolding; the declarative layer is the rebuttal.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2509.23994">Policy-as-Prompt (arXiv)</a>: policy-as-code extended to agent governance — the lineage this post claims.</li>
<li>Solstice* — the method deck and the late-July inventory: the counts (59 ADRs, 134+ rules, 23 scripts, 47 skills, 42 context files), the 85.4% commit concentration the deck itself declares as bias, and the four drift findings. Internal documents, no links: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'La doctrine se capitalise. Les modèles, non.',
  description: 'Huit modèles de pointe en six mois, traités comme ce qu\'ils sont devenus : une dépendance versionnée qui se déprécie. Ce qui se capitalise, c\'est la doctrine — les ADR que les agents lisent, les règles imposées par la CI, le contexte versionné. Et une confession : notre propre inventaire a trouvé la doctrine en dérive. Elle ne se capitalise que là où elle s\'exécute.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> En six mois, mon équipe a remplacé huit modèles de pointe, et personne ne s'en est aperçu. Personne, parce que rien de ce qui fait tenir l'équipe n'habite le modèle. Tout habite le dépôt : 59 <abbr title="Architecture Decision Record — une décision d'architecture datée, versionnée dans le dépôt">ADR</abbr> que les agents lisent avant tout changement structurel, 134 règles opposables câblées à une <abbr title="Intégration continue">CI</abbr> bloquante, 23 scripts anti-dérive, 47 skills packagés, 42 fichiers de contexte avec un ordre de lecture officiel. Le modèle est devenu une dépendance versionnée ; la doctrine est devenue le patrimoine. Puis notre propre inventaire a trouvé la doctrine en dérive — des fichiers décrivant un framework qu'on n'utilise plus, un script « bloquant » câblé nulle part, un garde-fou qui ne bloque jamais. La version honnête de la thèse a survécu à l'audit : la doctrine ne se capitalise que là où elle s'exécute.</p></div>
<hr>
<p>En six mois, j'ai remplacé huit fois le cerveau de mon équipe. Personne ne s'en est aperçu.</p>
<p>Huit modèles de pointe entre février et juillet — je les ai <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">comptés</a> en notant le semestre. Chaque remplacement a coûté une ligne de configuration et zéro réunion. Pas d'onboarding, pas de transfert de connaissances, pas de pot de départ. Et si personne ne s'en est aperçu, c'est tout le sujet de ce billet : plus rien de ce qui fait fonctionner mon équipe n'habite le modèle. Les briefs, les règles, les garde-fous, le contexte — tout habite le dépôt, versionné, relu, imposé. Le modèle a cessé d'être un miracle. Il est devenu une dépendance.</p>

<h2>Le modèle est une dépendance</h2>
<p>Prenez cette phrase au pied de la lettre, pas comme une figure de style. Une dépendance, c'est quelque chose qu'on épingle à une version, qu'on met à jour délibérément, et dont on attend la dépréciation. Les éditeurs de modèles ne garantissent parfois que soixante jours de préavis avant retrait ; les durées de vie effectives se comptent en mois. Tout ce que vous construisez <em>à l'intérieur</em> du comportement d'un modèle précis — les astuces de prompt, le contournement de la faiblesse du trimestre dernier — se déprécie au même rythme. S'accorder à un modèle, ce n'est pas investir. C'est louer.</p>
<blockquote><p>Un modèle se remplace en une ligne de configuration. Une doctrine se reconstruit en années.</p></blockquote>
<svg viewBox="0 0 800 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sur six mois, huit modèles de pointe ont été adoptés puis remplacés l'un après l'autre, tandis que la doctrine — ADR, règles, garde-fous, skills, fichiers de contexte — s'est accumulée marche par marche et est toujours là à la fin : un seul modèle en service, toute la doctrine conservée." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">SIX MOIS SUR SOLSTICE · MODÈLES vs DOCTRINE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">Huit modèles remplacés. Une doctrine conservée.</text>
<text x="64" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" font-weight="600" opacity="0.55" letter-spacing="0.1em">MODÈLES DE POINTE · ADOPTÉS PUIS REMPLACÉS</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="144" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="224" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="304" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="384" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="464" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="544" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="624" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.22"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="9.5" text-anchor="middle" opacity="0.55">
<text x="100" y="150">FÉV</text>
<text x="180" y="150">AVR</text>
<text x="260" y="150">AVR</text>
<text x="340" y="150">MAI</text>
<text x="420" y="150">JUIN</text>
<text x="500" y="150">JUIN</text>
<text x="580" y="150">JUIL</text>
<text x="660" y="150">JUIL</text>
</g>
<text x="708" y="127" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" opacity="0.75">en service : 1</text>
<text x="64" y="192" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" font-weight="600" opacity="0.55" letter-spacing="0.1em">DOCTRINE ACCUMULÉE · ADR, RÈGLES, GARDE-FOUS, SKILLS, CONTEXTE</text>
<path d="M 64 330 L 64 318 L 160 318 L 160 306 L 256 306 L 256 292 L 352 292 L 352 278 L 448 278 L 448 262 L 544 262 L 544 248 L 640 248 L 640 238 L 696 238 L 696 330 Z" fill="currentColor" fill-opacity="0.26" stroke="currentColor" stroke-opacity="0.22" stroke-width="1" stroke-linejoin="round"></path>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" text-anchor="middle" opacity="0.65">
<text x="112" y="322">ADR</text>
<text x="256" y="322">règles</text>
<text x="400" y="322">garde-fous</text>
<text x="544" y="322">skills</text>
<text x="650" y="322">contexte</text>
</g>
<text x="708" y="245" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" opacity="0.75">conservé : tout</text>
<text x="64" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">cadence de sorties réelle (fév → juil 2026) · hauteurs illustratives</text>
</svg>
<p>Il y a ici une objection sérieuse, et elle mérite d'être énoncée à pleine puissance. La Bitter Lesson de <abbr title="Richard Sutton — chercheur en apprentissage par renforcement, auteur de l'essai The Bitter Lesson (2019)">Richard Sutton</abbr>, appliquée aux agents, dit que tout échafaudage est un pari contre le prochain modèle : l'orchestration sophistiquée que vous écrivez à la main aujourd'hui est exactement ce que la prochaine version absorbe, et les constructeurs de harnais eux-mêmes ont supprimé des pans entiers de leur échafaudage à chaque génération. Cette critique est juste — pour l'échafaudage <em>procédural</em>. Le flux de contrôle écrit à la main, la logique d'orchestration, la chorégraphie de prompts : cette couche se déprécie avec les modèles, et nous avons jeté la nôtre plus d'une fois.</p>
<p>Mais elle ne touche pas l'autre couche. Aucune version de modèle ne saura jamais, en sortant de l'usine, que dans notre produit un champ précis est verrouillé après signature pour des raisons légales. Ce fait n'est pas de l'intelligence ; c'est <em>notre</em> système. La couche déclarative — les décisions, les contraintes, les règles métier, les critères d'acceptation — est un savoir qu'aucun progrès des modèles ne rend obsolète, parce qu'aucun éditeur ne le possède. La thèse de ce billet est volontairement étroite : l'échafaudage procédural se déprécie comme les modèles. Ce qui se capitalise, c'est la doctrine déclarative et vérifiée par la machine.</p>

<h2>Ce que les agents lisent avant de toucher au code</h2>
<p>Concrètement, sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, un agent ne part pas d'un prompt vide. Il existe un ordre de lecture officiel, écrit : le fichier de contexte racine, puis les ADR, puis le fichier de contexte du sous-système qu'il s'apprête à toucher, puis les règles métier, les règles de design, la sécurité. Le corpus derrière cet ordre, à fin juillet : 59 ADR que les agents doivent lire avant tout changement structurel. Plus de 134 règles opposables, chacune reliée aux critères d'acceptation de la spec qu'elle sert, chacune imposée par une CI bloquante — aucune règle ne dérive en silence. 23 scripts de contrôle anti-dérive. 47 skills packagés. 42 fichiers de contexte : un à la racine, un par sous-système, chacun documentant le rôle du service, ses ADR applicables, ses conventions locales.</p>
<p>Deux détails de cette liste disent où tout cela va. La porte pré-PR rend un verdict PASS/FAIL dont la sortie JSON est explicitement écrite pour être lue par un agent — la machine écrit pour la machine. Et un garde-fou surveille la couche de contexte elle-même : quand le code d'un dossier change, il rappelle de mettre à jour le fichier de contexte du dossier. La doctrine documente le système ; un contrôle contrôle la doctrine. Des poupées russes, mais des poupées utiles.</p>
<p>Rien de tout cela n'est une idée neuve. Mon secteur réglementé pratique la <em>conformité as code</em> depuis des années : la politique écrite en prose que personne ne lit devient une règle qu'un pipeline impose. Et le retour en grâce des ADR à l'ère des agents tient en une phrase que j'ai vue se vérifier : un agent qui ne voit pas <em>pourquoi</em> le code a cette forme refactore la raison. La logique de retry qui a l'air redondante, le nommage qui a l'air hérité — un agent supprime en secondes ce qu'un incident a mis des semaines à apprendre. L'ADR, c'est la mémoire de l'incident qui reste apprise.</p>

<h2>J'ai enterré le SDLC. Puis j'ai écrit 134 règles.</h2>
<p>Voici le paragraphe que je vous dois. Mon premier billet de cette série déclarait le <abbr title="Software Development Life Cycle — le cycle de vie du développement logiciel">SDLC</abbr> mort : le processus a toujours été du gaspillage, la cérémonie est ce qu'on fait quand on ne fait pas confiance à ses outils. Un lecteur hostile écrit le tweet en dix secondes : <em>il a tué le SDLC et l'a reconstruit en YAML.</em></p>
<blockquote><p>Oui, j'ai reconstruit un processus. La promesse n'a jamais été « zéro processus ». C'était « zéro processus qui brûle des heures humaines sans rien vérifier ».</p></blockquote>
<p>Voici le discriminant, et il est falsifiable. Une cérémonie consomme du temps humain à chaque occurrence et ne vérifie rien : la réunion d'estimation, la signature de validation, le point d'avancement — des heures par semaine, pour toujours, et aucune n'a jamais attrapé une régression. Une contrainte compilée consomme zéro temps humain marginal et vérifie à chaque fois : la règle tourne en secondes, bloque de façon déterministe, et ne fatigue pas le vendredi après-midi. L'ancien processus taxait les humains pour produire un sentiment de contrôle. La doctrine taxe les machines pour produire du contrôle réel. Et le jour où une de nos règles exige une réunion pour être interprétée, elle est redevenue une cérémonie — et elle doit mourir.</p>
<p>Je concède même les pièces à conviction : le billet de mars louait déjà l'agent qui « valide contre les contraintes architecturales ». La doctrine, c'est cette phrase, industrialisée. Ce qui est mort, ce n'est pas le processus. C'est le processus pointé sur les gens.</p>
<p>Un flanc reste ouvert, et je préfère le nommer moi-même. Une doctrine qui ne fait qu'accréter est le nouveau gaspillage — 134 règles en quatre mois et demi, extrapolez, je refuse d'écrire le chiffre. L'élagage a commencé là où il était le moins cher : quatre skills ont été supprimés du bundle quand les modèles les ont rendus natifs. Règles supprimées à ce jour : zéro. C'est le flanc ouvert. Ressortez-le-moi.</p>

<h2>L'inventaire qui pique</h2>
<p>Fin juillet, on a inventorié notre propre méthode — chaque fichier, chaque script, chaque affirmation que la méthode fait sur elle-même. Le verdict mérite sa section.</p>
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L'audit de la doctrine a trouvé que la part exécutée a tenu tandis que la part descriptive a dérivé : des fichiers agents décrivant encore l'ancien framework, un script documenté bloquant mais câblé nulle part, un garde-fou de fraîcheur seulement consultatif, et une porte locale sous-ensemble strict de la CI." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">L'AUDIT DE LA DOCTRINE · FIN JUILLET</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="23" font-weight="650">La doctrine aussi dérive.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 592 96 L 592 90 L 736 90 L 736 96"></path>
</g>
<text x="664" y="80" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle" opacity="0.75">trouvé à la main, pas par la CI</text>
<rect x="64" y="104" width="520" height="44" rx="8" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="592" y="104" width="144" height="44" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="4,3"></rect>
<text x="324" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6">la part qui s'exécute — a tenu</text>
<text x="664" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" text-anchor="middle" opacity="0.6">la part descriptive — a dérivé</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" opacity="0.75">
<text x="64" y="200">— des fichiers agents décrivant encore l'ancien framework, des mois après la migration</text>
<text x="64" y="222">— un script documenté « bloquant en PR », câblé nulle part</text>
<text x="64" y="244">— le garde-fou de fraîcheur du contexte : consultatif, il ne bloque jamais</text>
<text x="64" y="266">— la porte locale, sous-ensemble strict de la CI : un PASS local ne garantit rien</text>
</g>
<text x="64" y="300" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.6">surface illustrative — les quatre trouvailles sont réelles</text>
</svg>
<p>La lecture honnête, et je ne vais pas l'enjoliver : la couche qui s'exécute a tenu. La couche qui décrit a pourri, en silence, pendant des mois — et c'est un audit manuel, non planifié et tardif, qui l'a trouvée. Un détecteur de fumée testé une fois, après l'odeur. Les fichiers décrivaient encore le framework frontend qu'on a quitté en vol ; une couche d'instructions a été mise à jour, les autres non. Rien n'a cassé, parce que rien n'exécute une description. Un code faux casse un test. Un fichier de contexte faux casse un agent, en silence, trois semaines plus tard, dans une PR plausible.</p>
<blockquote><p>La doctrine ne se capitalise que là où elle s'exécute.</p></blockquote>
<p>L'audit a aussi mis un chiffre sur qui paie. 85,4 % des commits de Solstice portent mon nom — un biais que le deck de la méthode déclare lui-même. La doctrine existe en partie pour réduire la dépendance de l'équipe à son tech lead. Elle est aujourd'hui écrite, et entretenue, surtout par le tech lead. Ce n'est pas un paradoxe ; c'est un contrat de maintenance signé avec l'équipe future, et il coûte du vrai temps senior chaque semaine. Mais cela veut dire que la mitigation du facteur bus est à moitié construite : si je partais demain, l'équipe hériterait d'un corpus largement juste sans savoir quelles parties mentent — pire que rien, sans doute, parce que les agents exécutent les parties périmées avec une confiance totale. La suite est connue et sans gloire : le garde-fou de fraîcheur doit devenir bloquant — c'est sur la roadmap — et l'inventaire doit devenir un rituel, pas un accident.</p>
<p>Dernière réserve, contre moi-même. Tout cela a poussé sur une plateforme greenfield, avec un ingénieur très senior qui tient l'essentiel du stylo. Sur le code legacy que la plupart d'entre nous maintiennent, mon propre gain mesuré <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">reste à 10 % ou moins</a>, et la doctrine y enregistre surtout l'archéologie — elle capitalise plus lentement, parce que la moitié des décisions ont été prises par des gens partis depuis. Lisez ce billet comme un point de données en conditions quasi idéales, pas comme une méthode transposable telle quelle.</p>

<h2>Ce qui reste aux humains</h2>
<p><strong>Décider quelles règles existent.</strong> La machine impose une décision. Elle n'en prend pas.</p>
<p><strong>Supprimer des règles.</strong> L'élagage est un jugement, et c'est la différence entre une doctrine et une bureaucratie. Personne n'automatise le courage de retirer une porte.</p>
<p><strong>Arbitrer quand la doctrine et le jugement se contredisent.</strong> Une règle dit non ; la personne qui connaît le domaine dit que ce cas est différent. Quelqu'un signe cette dérogation — le <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">billet sur le jugement</a> parle exactement de qui.</p>
<p><strong>Savoir quel document mettre en doute.</strong> Tant que la fraîcheur n'est pas exécutée, ce savoir est tribal — et le savoir tribal est précisément ce que tout cet édifice devait remplacer.</p>
<p>Et la clarification habituelle, parce que cette série a une règle à ce sujet : rien de tout cela ne plaide pour moins de gens. Les heures que la doctrine libère ont une destination — la découverte, la transmission, l'audit dont ce billet vient de prouver qu'on en avait besoin. Un actif que personne n'entretient est un passif avec une belle image de marque.</p>

<h2>Lundi matin</h2>
<ol>
<li><strong>Inventoriez votre doctrine avant d'en écrire davantage.</strong> Chaque fichier d'instructions, chaque contrôle, chaque affirmation que votre méthode fait sur elle-même. Ce que vous trouverez réordonnera le reste de cette liste.</li>
<li><strong>Un fichier de contexte racine que les agents lisent vraiment.</strong> Stack actuelle, architecture actuelle, une page. Un contexte faux est pire qu'aucun contexte.</li>
<li><strong>Cinq règles maximum, chacune câblée à un contrôle qui bloque.</strong> Une règle en prose est un vœu avec un numéro de version. Zéro règle non câblée, dès le premier jour.</li>
<li><strong>Des ADR seulement pour les décisions déjà re-débattues une fois.</strong> C'est le signal que la raison doit être écrite avant qu'un agent ne la refactore.</li>
<li><strong>Rendez la porte de fraîcheur bloquante avant que le corpus ne grossisse.</strong> « Fichier de contexte touché quand le code du dossier change » ne coûte rien à cinq fichiers et coûte tout à quarante-deux.</li>
<li><strong>Le pipeline réunion→règles en dernier.</strong> C'est le moteur de capitalisation, mais seulement une fois les cinq points ci-dessus en place.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — le billet auquel celui-ci répond en partie. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — l'amplificateur, mesuré. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % du code écrit par des agents</a> — les six mois que couvrent les huit modèles. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">Le backlog n'a jamais été le métier</a> — qui signe quand la doctrine et le jugement ne sont pas d'accord.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Anthropic — Effective context engineering for AI agents</a> : le cadrage du contexte comme actif d'ingénierie, par le laboratoire lui-même. Un éditeur qui a intérêt à ce que vous investissiez dans son harnais — à lire comme « le labo le dit aussi », pas comme une preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://agents.md/">AGENTS.md</a> : la convention multi-éditeurs de contexte agent, versée à l'Agentic AI Foundation (Linux Foundation) fin 2025. Les chiffres d'adoption viennent des promoteurs de la spec.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.actual.ai/blog/agent-optimized-adrs">actual.ai — Agent-optimized ADRs</a> : le mode de défaillance « l'agent refactore la raison ». Littérature de praticiens, pas de la recherche évaluée par les pairs.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2606.09090">Context rot in AI-assisted development (preprint)</a> : des références périmées mesurées dans les artefacts de configuration et de contexte des dépôts. Un preprint — une direction, pas des décimales.</li>
<li><a target="_blank" rel="noopener noreferrer" href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Richard Sutton — The Bitter Lesson</a> et <a target="_blank" rel="noopener noreferrer" href="https://browser-use.com/posts/bitter-lesson-agent-frameworks">son application aux frameworks d'agents</a> : l'objection la plus forte contre ce billet, citée exprès. Elle gagne contre l'échafaudage procédural ; la couche déclarative est la réponse.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2509.23994">Policy-as-Prompt (arXiv)</a> : le policy-as-code étendu à la gouvernance des agents — la filiation que ce billet revendique.</li>
<li>Solstice* — le deck de la méthode et l'inventaire de fin juillet : les décomptes (59 ADR, 134+ règles, 23 scripts, 47 skills, 42 fichiers de contexte), les 85,4 % de concentration des commits que le deck déclare lui-même comme biais, et les quatre trouvailles de dérive. Documents internes, pas de lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'DoctrineAsCode',
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
