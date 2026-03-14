<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'sdlc-is-dead',
  date: '2026-03-14',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'The SDLC Is Dead. I Know Because I\'m Burying It In a Hospital.',
  description: 'A point of view on the state of software development in 2026. Why the SDLC was always broken, why AI agents are making it impossible to ignore, and why European tech needs to wake up.',
  html: `<p>For months now, I've been reading articles about AI. On LinkedIn, on X, on tech blogs, on every corner of the internet. AI and disruption. AI and regression. AI and quality collapse. AI and slop. AI is killing software. AI is making us dumber. AI is producing garbage code. AI is the end of craftsmanship.</p>
<p>I've read hundreds of them. And I'm telling you: <strong>I disagree with most of them, in all my being.</strong></p>
<p>Not because the concerns aren't real. Some are. But because the overwhelming narrative is fear disguised as wisdom. People clinging to the way things were, dressing up resistance as rigor, calling inertia "quality standards." The loudest voices are the ones with the most to lose - the process owners, the methodology consultants, the people whose careers are built on the very ceremony that AI is making obsolete.</p>
<p>So here it is. My point of view. Not a reaction to one article, but to all of them. This is how I see the software development job in 2026, and why this year is the welcome disruption I've been secretly hoping for.</p>
<p>Boris Tane recently wrote that <a href="https://boristane.com/blog/the-software-development-lifecycle-is-dead/">the software development lifecycle is dead</a>. AI agents didn't make it faster, they killed it. He's right. But I want to be clear: <strong>I didn't need AI to tell me the SDLC was broken.</strong> I've been saying it for years.</p>
<p>What AI agents are doing now isn't revealing a new truth. They're making an old truth impossible to ignore: <strong>most of the process was always waste.</strong> And nowhere is this more visible than in European industry - especially in France - where organizations are still operating like it's 2015.</p>

<h2>Who I am and why this matters</h2>
<p>I'm a Tech Lead Manager. I've been working in large enterprises since 2012, from banking to healthcare. I lead a team of developers, working on a 30-year-old legacy system and its migration to a modern ecosystem.</p>
<p>I've spent over a decade in this world. A world where a bug doesn't break a dashboard, it breaks a patient admission workflow. A world where people will tell you that you absolutely need the full SDLC ceremony because lives are at stake.</p>
<p>And I'm telling you: the SDLC was always the wrong answer to the right question.</p>

<h2>Europe's mammoths are sleepwalking into irrelevance</h2>
<p>Here's what I see from the inside of French industry: <strong>nothing has changed.</strong></p>
<p>The same organizations. The same processes. The same job postings. The same management structures. Robust? Sure. The way a mammoth is robust - massive, resilient, perfectly adapted to a world that no longer exists.</p>
<p>American startups are shipping products with 3-person teams and AI agents. Chinese companies are iterating at a pace that makes Silicon Valley nervous. And in France? We're still debating whether to adopt Agile or stay waterfall. We're still writing 200-page specifications. We're still hiring based on how many years of Java someone has on their CV.</p>
<p>The European software industry - and the French one in particular - has always been conservative. Heavy processes, heavy hierarchies, heavy certifications. There was a time when that solidity was an advantage. That time is over. <strong>2026 is the disruption year.</strong> Not next year. Not in five years. Now.</p>
<p>The organizations that don't react will be outpaced by teams a tenth their size, running circles around them with AI agents, shipping in days what used to take quarters. The mammoth doesn't need to run faster. It needs to evolve. And it's not evolving.</p>

<h2>You're still hiring for the wrong skills</h2>
<p>Open any job board in France right now. Look at the tech postings. What do you see?</p>
<ul>
<li>"5 years of Java required"</li>
<li>"Expert in Angular, minimum 3 years"</li>
<li>"Strong knowledge of Spring Boot"</li>
<li>"Must know React Native"</li>
</ul>
<p>In 2026. With AI agents that write production-quality code in any language, any framework, in minutes.</p>
<p><strong>Recruiting on programming language expertise is like recruiting drivers based on their knowledge of horse breeds.</strong> The vehicle changed. The skill that matters changed with it.</p>
<p>An AI agent doesn't care if you've spent 10 years writing Java or 2 months. It writes Java. It writes TypeScript. It writes Python. It writes whatever you need, often better than the "expert" you're trying to hire, because it's seen more codebases than any human ever will.</p>
<p>So what should you hire for? The things agents can't do:</p>
<ul>
<li><strong>Domain expertise.</strong> Understanding the problem space. Knowing why a hospital's patient pathway has seven states instead of three. Knowing that HPRIM XML is a French standard nobody outside France has heard of. Knowing the business rules that no specification fully captures. This is what gives agents the right context to produce the right code.</li>
<li><strong>Architectural thinking.</strong> Clean Architecture, hexagonal boundaries, dependency rules, system design - the ability to structure systems so they remain maintainable, testable, and evolvable. Agents need to know where to put things. Someone has to define that.</li>
<li><strong>Context engineering.</strong> The new core skill. The ability to give agents the right constraints, the right decisions, the right domain knowledge so they produce what you actually need. This is what separates a developer who uses AI from a developer who is multiplied by AI.</li>
<li><strong>Judgment.</strong> Knowing when the agent is wrong. Knowing when the architecture doesn't fit. Knowing when the test covers the wrong edge case. Knowing when to ship and when to stop.</li>
</ul>
<p>None of these are programming languages. None of these show up on a French job posting. And that's the problem.</p>

<h2>2026: the year everything breaks</h2>
<p>This isn't gradual. The disruption is happening now, and it's happening fast.</p>
<p>For <strong>employees</strong>: the developer who refuses to work with AI agents will be outproduced 10-to-1 by the developer who does. Not because they're a worse engineer. Because the tools changed and they didn't. Expertise in a programming language used to be a career. In 2026, it's a commodity. The agents commoditized it. What's left is everything above the code: domain knowledge, architectural vision, context engineering, judgment.</p>
<p>For <strong>organizations</strong>: the company that still runs two-week sprints, three-day PR reviews, manual QA cycles, and quarterly release trains will ship in a quarter what an AI-native team ships in a week. That's not a productivity gap. That's an extinction-level gap. Your competitors aren't optimizing their process. They're eliminating it.</p>
<p>For <strong>the French tech ecosystem</strong>: we have world-class engineers. We have deep domain expertise in healthcare, aerospace, finance, energy. We have talent. What we don't have is the organizational agility to unleash that talent. We're strangling our best people with processes designed for a world that doesn't exist anymore, and then wondering why we're falling behind.</p>
<p><strong>It's time to react.</strong> Not next quarter. Not after the next reorganization. Now.</p>

<h2>Ship fast or ship never</h2>
<p>Here's what drives me: <strong>impact.</strong></p>
<p>I want to push to production as fast as possible. Not because I'm reckless. Because code sitting in a branch, waiting in a review queue, stuck behind a release train - that code has zero value. It's inventory. And inventory is waste.</p>
<p>The only code that matters is the code running in production, solving real problems for real users. Everything between your intent and production is friction. The job is to minimize that friction.</p>
<p>Before AI agents, "ship fast" was a cultural aspiration. You'd say it in team meetings, then spend three days waiting for a PR review. Now, with agents generating code, tests, and deployment configs in one loop, shipping fast is the default. The question isn't "how do we ship faster?" anymore. It's "what's still in the way?"</p>
<p>The answer, most of the time, is process. Process, and organizations too afraid to let go of it.</p>

<h2>Humans have no place in testing</h2>
<p>I'll say something that makes QA managers uncomfortable: <strong>humans should not be testing software.</strong></p>
<p>Manual QA is a relic. A human clicking through screens, following test scripts, filing bug reports - that entire workflow is slower, less reliable, and less thorough than automated tests. Every time. Without exception.</p>
<p>If your tests can't be automated, your architecture is wrong. That's not an AI opinion. That's a software engineering opinion I've held for years. Testability is a design property. If you need a human to verify your software works, you've built it wrong.</p>
<p>Here's what testing looks like in 2026:</p>
<ul>
<li><strong>Unit tests</strong> are generated alongside the code. The agent writes them. They run in milliseconds.</li>
<li><strong>Integration tests</strong> verify real message flows - actual HL7 messages, actual healthcare transactions, actual database states.</li>
<li><strong>End-to-end tests</strong> simulate the full user journey. No human clicking. No test scripts. No QA team.</li>
<li><strong>Type checking</strong> catches entire categories of bugs at compile time.</li>
<li><strong>Architectural fitness functions</strong> verify that the code respects boundaries, dependencies, and domain rules.</li>
</ul>
<p>All automated. All running in CI/CD. All faster and more reliable than any human.</p>
<p>The agent writes the code and the tests together. Not as an afterthought. Not in a separate "testing phase." The entire QA function as a separate stage, as a separate team, as a separate line item on the org chart - it's over.</p>
<p>I work on a healthcare ERP that handles patient admissions. If I can trust automated tests over human QA in <strong>this</strong> domain, you can trust them in yours.</p>

<h2>Healthcare isn't special (and that's the point)</h2>
<p>People will tell you healthcare is different. That you can't move fast with patient data. That compliance requires the full SDLC ceremony.</p>
<p>They're confusing the <strong>requirement</strong> with the <strong>implementation.</strong></p>
<p>Compliance demands <strong>traceability</strong>, not ceremony. It demands that you can prove what changed, why, and that it was verified. It never demanded story points. It never demanded three-day PR reviews. It never demanded manual QA sign-off.</p>
<p>An agent that generates code, writes tests, runs them, checks types, validates against architectural constraints, and logs every step provides <strong>more traceability</strong> than a human developer who reviewed a PR half-asleep on a Friday afternoon and a QA tester who clicked through 60% of the test script before lunch. We just can't accept that yet, because the ceremony felt safe.</p>
<p>I work on a system that manages the entire lifecycle of a patient in a hospital, from admission to discharge, from prescriptions to billing. If the SDLC can die here, in the most regulated, conservative, risk-averse corner of the software industry, it can die anywhere.</p>

<h2>What I actually do now</h2>
<p>My role has fundamentally changed. I used to spend my days in the process machine:</p>
<ul>
<li>Writing and refining tickets nobody read twice</li>
<li>Sitting in sprint planning, pretending estimation works</li>
<li>Reviewing PRs line by line</li>
<li>Unblocking developers stuck on context they didn't have</li>
<li>Waiting for QA to manually validate what automated tests already covered</li>
</ul>
<p>Now I spend my days on things that actually matter:</p>
<p><strong>Context engineering.</strong> Giving the agent the right architecture decisions, the right constraints, the right domain knowledge. In healthcare, that means making sure the agent understands that an HL7 ADT^A01 is a patient admission, that HPRIM XML is a French standard nobody outside France has heard of, that the billing module has dependencies the type system won't catch. The quality of what agents build is directly proportional to the quality of context you give them.</p>
<p><strong>Verifying intent, not syntax.</strong> I don't read diffs line by line anymore. I verify that the output matches what we needed. Does the interoperability flow work? Does the automated test cover the real edge case? Is the error handling appropriate for a system that runs inside a hospital?</p>
<p><strong>Building guardrails, not gates.</strong> Instead of a PR review gate where code waits in a queue for days, I invest in automated checks. Type safety. Integration tests against real HL7 message formats. Architectural fitness functions. E2e suites. If the agent's output passes all of that, it ships. No human gate. No manual QA. No review queue.</p>
<p><strong>Pushing to production.</strong> The fastest path from intent to impact. That's the goal. Always.</p>

<h2>The maker knows</h2>
<p>I'm a maker. Weekends, I wire microcontrollers, solder LED strips, build home automation systems. I've built ambilight clones, custom furniture with integrated PCs, automated pet feeders connected to my smart home.</p>
<p>Makers don't follow an SDLC. You have an idea. You prototype. You test it - not by writing a test plan, but by plugging it in and seeing if it works. You iterate. The feedback loop is immediate. You don't write a ticket before soldering a sensor to a breadboard. You don't estimate how many story points it takes to wire a relay. You don't ask a QA team to verify your LED strip works. You plug it in. It lights up or it doesn't. You fix it or you try something else.</p>
<p>What AI agents are bringing to professional software development is <strong>the maker's feedback loop</strong>. Intent, build, test, iterate, ship. No ceremony. No handoffs. No waiting. No manual QA. Just building and shipping.</p>
<p><strong>I've always built things this way. The industry is finally catching up.</strong></p>

<h2>What survives</h2>
<p>Not much.</p>
<p><strong>Domain knowledge</strong> survives. The agent needs someone who understands the problem space. Healthcare is deep. A 30-year-old ERP is deep. The intersection of both is a maze that no model has fully mapped.</p>
<p><strong>Architectural intent</strong> survives. Clean Architecture isn't dead. The hexagonal boundaries, the dependency rules, the separation of domain from infrastructure - these still matter. But they're expressed as context for the agent, not as diagrams on a whiteboard that get stale in a week.</p>
<p><strong>Automated verification</strong> survives and becomes everything. Tests, type checks, security scans, behavioral diffs, architectural fitness functions - the entire safety net is code, not people. Code checking code.</p>
<p><strong>Observability</strong> survives and becomes the foundation. When code ships continuously, your monitoring stack is your last line of defense. We're moving from "review before ship" to "ship and verify continuously."</p>
<p><strong>Everything else is ceremony.</strong> And ceremony is what you do when you don't trust your tools, your architecture, or your automated checks. The tools got good enough. Time to let go.</p>

<h2>A wake-up call for European tech</h2>
<p>I'm not writing this from San Francisco. I'm not at a startup with 5 people and no customers. I'm in France, inside a large healthcare software organization, modernizing a 30-year-old system that hospitals depend on every day.</p>
<p>And I'm telling you: <strong>the gap is widening.</strong></p>
<p>While American and Asian teams are already operating in the post-SDLC world - shipping with agents, automating everything, hiring for judgment and domain expertise - most European organizations are still running the old playbook. Still hiring "5 years of Java." Still running two-week sprints. Still debating whether AI is a fad or a threat.</p>
<p>It's neither. It's the new reality. And the organizations that treat it as a tool to optimize the old way of working, rather than a reason to fundamentally rethink how they build software, will be left behind.</p>
<p>France has world-class engineers, deep domain expertise, and serious industries. What it lacks is the courage to throw away the processes that no longer serve it. We built our reputation on rigor and robustness. But rigor without speed is just slowness. And robustness without adaptability is just weight.</p>
<p>The mammoth was robust too. Look where that got it.</p>
<p><strong>2026 is the year to decide.</strong> Are you evolving, or are you waiting for the ice age to pass?</p>
<p>It's not going to pass.</p>

<hr>
<p><em>I'm a Tech Lead Manager in healthcare software. I build software, products, and people. When I'm not modernizing legacy healthcare systems, I'm wiring microcontrollers and building home automation. I never believed in Agile. I never trusted manual QA. The future is proving me right.</em></p>`
}

const frenchContent: PostContent = {
  title: 'Le SDLC est mort. Je le sais parce que je l\'enterre dans un hôpital.',
  description: 'Un point de vue sur l\'état du développement logiciel en 2026. Pourquoi le SDLC a toujours été défaillant, pourquoi les agents IA rendent cela impossible à ignorer, et pourquoi la tech européenne doit se réveiller.',
  html: `<p>Depuis des mois, je lis des articles sur l'IA. Sur LinkedIn, sur X, sur les blogs tech, dans tous les recoins d'Internet. L'IA et la disruption. L'IA et la régression. L'IA et l'effondrement de la qualité. L'IA et le slop. L'IA tue le logiciel. L'IA nous rend plus bêtes. L'IA produit du code poubelle. L'IA, c'est la fin de l'artisanat.</p>
<p>J'en ai lu des centaines. Et je vous le dis : <strong>je suis en désaccord avec la plupart d'entre eux, de tout mon être.</strong></p>
<p>Non pas parce que les préoccupations ne sont pas réelles. Certaines le sont. Mais parce que le récit dominant est de la peur déguisée en sagesse. Des gens qui s'accrochent à la façon dont les choses étaient, qui habillent la résistance en rigueur, qui appellent l'inertie "standards de qualité". Les voix les plus fortes sont celles qui ont le plus à perdre - les propriétaires de processus, les consultants en méthodologie, les personnes dont les carrières sont bâties sur la cérémonie même que l'IA rend obsolète.</p>
<p>Alors voici. Mon point de vue. Pas une réaction à un article, mais à tous. Voici comment je vois le métier du développement logiciel en 2026, et pourquoi cette année est la disruption bienvenue que j'espérais secrètement.</p>
<p>Boris Tane a récemment écrit que <a href="https://boristane.com/blog/the-software-development-lifecycle-is-dead/">le cycle de vie du développement logiciel est mort</a>. Les agents IA ne l'ont pas accéléré, ils l'ont tué. Il a raison. Mais je veux être clair : <strong>je n'avais pas besoin de l'IA pour me dire que le SDLC était cassé.</strong> Je le dis depuis des années.</p>
<p>Ce que les agents IA font maintenant ne révèle pas une nouvelle vérité. Ils rendent une vieille vérité impossible à ignorer : <strong>la majeure partie du processus a toujours été du gaspillage.</strong> Et nulle part cela n'est plus visible que dans l'industrie européenne - surtout en France - où les organisations fonctionnent encore comme en 2015.</p>

<h2>Qui je suis et pourquoi c'est important</h2>
<p>Je suis Tech Lead Manager. Je travaille dans de grandes entreprises depuis 2012, du secteur bancaire à la santé. Je dirige une équipe de développeurs, travaillant sur un système legacy de 30 ans et sa migration vers un écosystème moderne.</p>
<p>J'ai passé plus d'une décennie dans ce monde. Un monde où un bug ne casse pas un tableau de bord, il casse un workflow d'admission patient. Un monde où les gens vous diront que vous avez absolument besoin de la cérémonie SDLC complète parce que des vies sont en jeu.</p>
<p>Et je vous le dis : le SDLC a toujours été la mauvaise réponse à la bonne question.</p>

<h2>Les mammouths européens marchent vers l'irrélevance en somnambules</h2>
<p>Voici ce que je vois de l'intérieur de l'industrie française : <strong>rien n'a changé.</strong></p>
<p>Les mêmes organisations. Les mêmes processus. Les mêmes offres d'emploi. Les mêmes structures managériales. Robuste ? Bien sûr. De la même façon qu'un mammouth est robuste - massif, résilient, parfaitement adapté à un monde qui n'existe plus.</p>
<p>Les startups américaines livrent des produits avec des équipes de 3 personnes et des agents IA. Les entreprises chinoises itèrent à un rythme qui rend la Silicon Valley nerveuse. Et en France ? On débat encore de l'adoption d'Agile ou du maintien du waterfall. On écrit encore des spécifications de 200 pages. On recrute encore en fonction du nombre d'années de Java sur un CV.</p>
<p>L'industrie logicielle européenne - et française en particulier - a toujours été conservatrice. Des processus lourds, des hiérarchies lourdes, des certifications lourdes. Il fut un temps où cette solidité était un avantage. Ce temps est révolu. <strong>2026 est l'année de la disruption.</strong> Pas l'année prochaine. Pas dans cinq ans. Maintenant.</p>
<p>Les organisations qui ne réagissent pas seront dépassées par des équipes dix fois plus petites, qui tournent autour d'elles avec des agents IA, livrant en jours ce qui prenait des trimestres. Le mammouth n'a pas besoin de courir plus vite. Il doit évoluer. Et il n'évolue pas.</p>

<h2>Vous recrutez encore pour les mauvaises compétences</h2>
<p>Ouvrez n'importe quel site d'emploi en France en ce moment. Regardez les offres tech. Que voyez-vous ?</p>
<ul>
<li>"5 ans de Java requis"</li>
<li>"Expert Angular, minimum 3 ans"</li>
<li>"Bonne connaissance de Spring Boot"</li>
<li>"Doit connaître React Native"</li>
</ul>
<p>En 2026. Avec des agents IA qui écrivent du code de qualité production dans n'importe quel langage, n'importe quel framework, en minutes.</p>
<p><strong>Recruter sur l'expertise d'un langage de programmation, c'est comme recruter des chauffeurs en fonction de leur connaissance des races de chevaux.</strong> Le véhicule a changé. La compétence qui compte a changé avec lui.</p>
<p>Un agent IA se fiche que vous ayez passé 10 ans à écrire du Java ou 2 mois. Il écrit du Java. Il écrit du TypeScript. Il écrit du Python. Il écrit ce dont vous avez besoin, souvent mieux que l'"expert" que vous essayez de recruter, parce qu'il a vu plus de codebases que n'importe quel humain.</p>
<p>Alors pour quoi devriez-vous recruter ? Les choses que les agents ne peuvent pas faire :</p>
<ul>
<li><strong>L'expertise métier.</strong> Comprendre l'espace problème. Savoir pourquoi le parcours patient d'un hôpital a sept états au lieu de trois. Savoir que HPRIM XML est un standard français dont personne hors de France n'a entendu parler. Connaître les règles métier qu'aucune spécification ne capture pleinement. C'est ce qui donne aux agents le bon contexte pour produire le bon code.</li>
<li><strong>La pensée architecturale.</strong> Clean Architecture, frontières hexagonales, règles de dépendance, conception système - la capacité à structurer des systèmes pour qu'ils restent maintenables, testables et évoluables. Les agents ont besoin de savoir où mettre les choses. Quelqu'un doit définir cela.</li>
<li><strong>L'ingénierie de contexte.</strong> La nouvelle compétence fondamentale. La capacité à donner aux agents les bonnes contraintes, les bonnes décisions, les bonnes connaissances métier pour qu'ils produisent ce dont vous avez réellement besoin. C'est ce qui sépare un développeur qui utilise l'IA d'un développeur qui est multiplié par l'IA.</li>
<li><strong>Le jugement.</strong> Savoir quand l'agent a tort. Savoir quand l'architecture ne convient pas. Savoir quand le test couvre le mauvais cas limite. Savoir quand livrer et quand s'arrêter.</li>
</ul>
<p>Rien de tout cela n'est un langage de programmation. Rien de tout cela n'apparaît sur une offre d'emploi française. Et c'est le problème.</p>

<h2>2026 : l'année où tout casse</h2>
<p>Ce n'est pas graduel. La disruption se produit maintenant, et elle se produit vite.</p>
<p>Pour les <strong>employés</strong> : le développeur qui refuse de travailler avec des agents IA sera surpassé 10 contre 1 par celui qui le fait. Pas parce qu'il est un moins bon ingénieur. Parce que les outils ont changé et pas lui. L'expertise dans un langage de programmation était une carrière. En 2026, c'est une commodité. Les agents l'ont commoditisée. Ce qui reste, c'est tout ce qui est au-dessus du code : connaissance métier, vision architecturale, ingénierie de contexte, jugement.</p>
<p>Pour les <strong>organisations</strong> : l'entreprise qui fait encore des sprints de deux semaines, des revues de PR de trois jours, des cycles de QA manuels et des trains de release trimestriels livrera en un trimestre ce qu'une équipe IA-native livre en une semaine. Ce n'est pas un écart de productivité. C'est un écart de niveau extinction. Vos concurrents n'optimisent pas leur processus. Ils l'éliminent.</p>
<p>Pour <strong>l'écosystème tech français</strong> : nous avons des ingénieurs de classe mondiale. Nous avons une expertise métier profonde dans la santé, l'aérospatiale, la finance, l'énergie. Nous avons du talent. Ce que nous n'avons pas, c'est l'agilité organisationnelle pour libérer ce talent. Nous étranglons nos meilleurs avec des processus conçus pour un monde qui n'existe plus, puis nous nous demandons pourquoi nous prenons du retard.</p>
<p><strong>Il est temps de réagir.</strong> Pas le trimestre prochain. Pas après la prochaine réorganisation. Maintenant.</p>

<h2>Livrer vite ou ne jamais livrer</h2>
<p>Voici ce qui me motive : <strong>l'impact.</strong></p>
<p>Je veux pousser en production le plus vite possible. Pas parce que je suis imprudent. Parce que du code qui reste dans une branche, qui attend dans une file de revue, coincé derrière un train de release - ce code a zéro valeur. C'est du stock. Et le stock est du gaspillage.</p>
<p>Le seul code qui compte est celui qui tourne en production, qui résout de vrais problèmes pour de vrais utilisateurs. Tout ce qui se trouve entre votre intention et la production est de la friction. Le travail consiste à minimiser cette friction.</p>
<p>Avant les agents IA, "livrer vite" était une aspiration culturelle. Vous le disiez en réunion d'équipe, puis vous passiez trois jours à attendre une revue de PR. Maintenant, avec des agents qui génèrent du code, des tests et des configs de déploiement dans une seule boucle, livrer vite est la valeur par défaut. La question n'est plus "comment livrer plus vite ?" C'est "qu'est-ce qui est encore en travers du chemin ?"</p>
<p>La réponse, la plupart du temps, c'est le processus. Le processus, et des organisations trop effrayées pour le lâcher.</p>

<h2>Les humains n'ont pas leur place dans les tests</h2>
<p>Je vais dire quelque chose qui met les managers QA mal à l'aise : <strong>les humains ne devraient pas tester le logiciel.</strong></p>
<p>La QA manuelle est une relique. Un humain qui clique sur des écrans, qui suit des scripts de test, qui remplit des rapports de bugs - tout ce workflow est plus lent, moins fiable et moins exhaustif que les tests automatisés. À chaque fois. Sans exception.</p>
<p>Si vos tests ne peuvent pas être automatisés, c'est votre architecture qui est mauvaise. Ce n'est pas une opinion IA. C'est une opinion d'ingénierie logicielle que je porte depuis des années. La testabilité est une propriété de conception. Si vous avez besoin d'un humain pour vérifier que votre logiciel fonctionne, vous l'avez mal construit.</p>
<p>Voici à quoi ressemblent les tests en 2026 :</p>
<ul>
<li><strong>Les tests unitaires</strong> sont générés avec le code. L'agent les écrit. Ils s'exécutent en millisecondes.</li>
<li><strong>Les tests d'intégration</strong> vérifient de vrais flux de messages - de vrais messages HL7, de vraies transactions de santé, de vrais états de base de données.</li>
<li><strong>Les tests end-to-end</strong> simulent le parcours utilisateur complet. Pas de clics humains. Pas de scripts de test. Pas d'équipe QA.</li>
<li><strong>Le typage</strong> attrape des catégories entières de bugs à la compilation.</li>
<li><strong>Les fonctions de fitness architecturale</strong> vérifient que le code respecte les frontières, les dépendances et les règles métier.</li>
</ul>
<p>Tout automatisé. Tout en CI/CD. Tout plus rapide et plus fiable que n'importe quel humain.</p>
<p>L'agent écrit le code et les tests ensemble. Pas comme une réflexion après coup. Pas dans une "phase de test" séparée. La fonction QA entière en tant qu'étape séparée, en tant qu'équipe séparée, en tant que ligne séparée sur l'organigramme - c'est terminé.</p>
<p>Je travaille sur un ERP de santé qui gère les admissions de patients. Si je peux faire confiance aux tests automatisés plutôt qu'à la QA humaine dans <strong>ce</strong> domaine, vous pouvez leur faire confiance dans le vôtre.</p>

<h2>La santé n'est pas spéciale (et c'est tout l'intérêt)</h2>
<p>Les gens vous diront que la santé est différente. Que vous ne pouvez pas aller vite avec les données patients. Que la conformité exige la cérémonie SDLC complète.</p>
<p>Ils confondent l'<strong>exigence</strong> avec l'<strong>implémentation.</strong></p>
<p>La conformité exige la <strong>traçabilité</strong>, pas la cérémonie. Elle exige que vous puissiez prouver ce qui a changé, pourquoi, et que cela a été vérifié. Elle n'a jamais exigé de story points. Elle n'a jamais exigé de revues de PR de trois jours. Elle n'a jamais exigé de validation QA manuelle.</p>
<p>Un agent qui génère du code, écrit des tests, les exécute, vérifie les types, valide contre les contraintes architecturales et enregistre chaque étape fournit <strong>plus de traçabilité</strong> qu'un développeur humain qui a revu une PR à moitié endormi un vendredi après-midi et un testeur QA qui a cliqué sur 60% du script de test avant le déjeuner. On ne peut juste pas encore l'accepter, parce que la cérémonie semblait sûre.</p>
<p>Je travaille sur un système qui gère le cycle de vie complet d'un patient à l'hôpital, de l'admission à la sortie, des prescriptions à la facturation. Si le SDLC peut mourir ici, dans le coin le plus réglementé, conservateur et averse au risque de l'industrie logicielle, il peut mourir n'importe où.</p>

<h2>Ce que je fais vraiment maintenant</h2>
<p>Mon rôle a fondamentalement changé. Avant, je passais mes journées dans la machine à processus :</p>
<ul>
<li>Écrire et affiner des tickets que personne ne lisait deux fois</li>
<li>M'asseoir en sprint planning, prétendant que l'estimation fonctionne</li>
<li>Revoir des PR ligne par ligne</li>
<li>Débloquer des développeurs coincés sur du contexte qu'ils n'avaient pas</li>
<li>Attendre que la QA valide manuellement ce que les tests automatisés couvraient déjà</li>
</ul>
<p>Maintenant je passe mes journées sur des choses qui comptent vraiment :</p>
<p><strong>L'ingénierie de contexte.</strong> Donner à l'agent les bonnes décisions architecturales, les bonnes contraintes, les bonnes connaissances métier. En santé, cela signifie s'assurer que l'agent comprend qu'un HL7 ADT^A01 est une admission patient, que HPRIM XML est un standard français dont personne hors de France n'a entendu parler, que le module de facturation a des dépendances que le système de types n'attrapera pas. La qualité de ce que les agents construisent est directement proportionnelle à la qualité du contexte que vous leur donnez.</p>
<p><strong>Vérifier l'intention, pas la syntaxe.</strong> Je ne lis plus les diffs ligne par ligne. Je vérifie que la sortie correspond à ce dont nous avions besoin. Est-ce que le flux d'interopérabilité fonctionne ? Est-ce que le test automatisé couvre le vrai cas limite ? Est-ce que la gestion d'erreur est appropriée pour un système qui tourne dans un hôpital ?</p>
<p><strong>Construire des garde-fous, pas des portes.</strong> Au lieu d'une porte de revue PR où le code attend dans une file pendant des jours, j'investis dans des vérifications automatisées. Sécurité de type. Tests d'intégration contre de vrais formats de messages HL7. Fonctions de fitness architecturale. Suites e2e. Si la sortie de l'agent passe tout cela, ça part en production. Pas de porte humaine. Pas de QA manuelle. Pas de file de revue.</p>
<p><strong>Pousser en production.</strong> Le chemin le plus rapide de l'intention à l'impact. C'est l'objectif. Toujours.</p>

<h2>Le maker sait</h2>
<p>Je suis un maker. Les week-ends, je câble des microcontrôleurs, je soude des bandeaux LED, je construis des systèmes de domotique. J'ai construit des clones ambilight, des meubles sur mesure avec des PC intégrés, des distributeurs de croquettes automatisés connectés à ma maison intelligente.</p>
<p>Les makers ne suivent pas de SDLC. Vous avez une idée. Vous prototypez. Vous testez - pas en écrivant un plan de test, mais en branchant et en voyant si ça marche. Vous itérez. La boucle de feedback est immédiate. Vous n'écrivez pas un ticket avant de souder un capteur sur une breadboard. Vous n'estimez pas combien de story points il faut pour câbler un relais. Vous ne demandez pas à une équipe QA de vérifier que votre bandeau LED fonctionne. Vous le branchez. Ça s'allume ou pas. Vous corrigez ou vous essayez autre chose.</p>
<p>Ce que les agents IA apportent au développement logiciel professionnel, c'est <strong>la boucle de feedback du maker</strong>. Intention, construction, test, itération, livraison. Pas de cérémonie. Pas de passages de relais. Pas d'attente. Pas de QA manuelle. Juste construire et livrer.</p>
<p><strong>J'ai toujours construit les choses de cette façon. L'industrie rattrape enfin son retard.</strong></p>

<h2>Ce qui survit</h2>
<p>Pas grand-chose.</p>
<p><strong>La connaissance métier</strong> survit. L'agent a besoin de quelqu'un qui comprend l'espace problème. La santé est profonde. Un ERP de 30 ans est profond. L'intersection des deux est un labyrinthe qu'aucun modèle n'a entièrement cartographié.</p>
<p><strong>L'intention architecturale</strong> survit. La Clean Architecture n'est pas morte. Les frontières hexagonales, les règles de dépendance, la séparation du domaine et de l'infrastructure - tout cela compte encore. Mais c'est exprimé comme contexte pour l'agent, pas comme des diagrammes sur un tableau blanc qui deviennent obsolètes en une semaine.</p>
<p><strong>La vérification automatisée</strong> survit et devient tout. Tests, vérifications de types, scans de sécurité, diffs comportementaux, fonctions de fitness architecturale - le filet de sécurité entier est du code, pas des personnes. Du code qui vérifie du code.</p>
<p><strong>L'observabilité</strong> survit et devient la fondation. Quand le code est livré en continu, votre stack de monitoring est votre dernière ligne de défense. Nous passons de "revue avant livraison" à "livrer et vérifier en continu."</p>
<p><strong>Tout le reste est de la cérémonie.</strong> Et la cérémonie, c'est ce que vous faites quand vous ne faites pas confiance à vos outils, votre architecture ou vos vérifications automatisées. Les outils sont devenus assez bons. Il est temps de lâcher prise.</p>

<h2>Un signal d'alarme pour la tech européenne</h2>
<p>Je n'écris pas cela depuis San Francisco. Je ne suis pas dans une startup de 5 personnes sans clients. Je suis en France, au sein d'une grande organisation de logiciels de santé, en train de moderniser un système de 30 ans dont les hôpitaux dépendent chaque jour.</p>
<p>Et je vous le dis : <strong>l'écart se creuse.</strong></p>
<p>Alors que les équipes américaines et asiatiques opèrent déjà dans le monde post-SDLC - livrant avec des agents, automatisant tout, recrutant pour le jugement et l'expertise métier - la plupart des organisations européennes jouent encore l'ancien scénario. Recrutent encore "5 ans de Java." Font encore des sprints de deux semaines. Débattent encore de savoir si l'IA est une mode ou une menace.</p>
<p>Ce n'est ni l'un ni l'autre. C'est la nouvelle réalité. Et les organisations qui la traitent comme un outil pour optimiser l'ancienne façon de travailler, plutôt que comme une raison de repenser fondamentalement comment elles construisent du logiciel, seront laissées pour compte.</p>
<p>La France a des ingénieurs de classe mondiale, une expertise métier profonde et des industries sérieuses. Ce qui lui manque, c'est le courage de jeter les processus qui ne la servent plus. Nous avons bâti notre réputation sur la rigueur et la robustesse. Mais la rigueur sans la vitesse n'est que de la lenteur. Et la robustesse sans l'adaptabilité n'est que du poids.</p>
<p>Le mammouth était robuste aussi. Regardez où ça l'a mené.</p>
<p><strong>2026 est l'année de la décision.</strong> Est-ce que vous évoluez, ou est-ce que vous attendez que l'ère glaciaire passe ?</p>
<p>Elle ne passera pas.</p>

<hr>
<p><em>Je suis Tech Lead Manager dans le logiciel de santé. Je construis du logiciel, des produits et des équipes. Quand je ne modernise pas des systèmes de santé legacy, je câble des microcontrôleurs et je construis de la domotique. Je n'ai jamais cru en Agile. Je n'ai jamais fait confiance à la QA manuelle. L'avenir me donne raison.</em></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'SdlcIsDead',
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
