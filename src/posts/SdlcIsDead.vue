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
<p>I'm a Tech Lead Manager in the healthcare software industry. I lead a team of 6 developers. I do core domain development on a full ERP-PAS system with 30 years of legacy code. Patient admissions, medical movements, billing, supply chain, organizational structures - the kind of software that runs entire hospitals. I also work on the interoperability layer - HL7, IHE PAM, HPRIM XML - the plumbing that connects healthcare systems together.</p>
<p>I've spent 9 years in this world. A world where a bug doesn't break a dashboard, it breaks a patient admission workflow. A world where people will tell you that you absolutely need the full SDLC ceremony because lives are at stake.</p>
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
  title: 'Le SDLC est mort. Je le sais parce que je l\'enterre dans un hopital.',
  description: 'Un point de vue sur l\'etat du developpement logiciel en 2026. Pourquoi le SDLC a toujours ete defaillant, pourquoi les agents IA rendent cela impossible a ignorer, et pourquoi la tech europeenne doit se reveiller.',
  html: `<p>Depuis des mois, je lis des articles sur l'IA. Sur LinkedIn, sur X, sur les blogs tech, dans tous les recoins d'Internet. L'IA et la disruption. L'IA et la regression. L'IA et l'effondrement de la qualite. L'IA et le slop. L'IA tue le logiciel. L'IA nous rend plus betes. L'IA produit du code poubelle. L'IA, c'est la fin de l'artisanat.</p>
<p>J'en ai lu des centaines. Et je vous le dis : <strong>je suis en desaccord avec la plupart d'entre eux, de tout mon etre.</strong></p>
<p>Non pas parce que les preoccupations ne sont pas reelles. Certaines le sont. Mais parce que le recit dominant est de la peur deguisee en sagesse. Des gens qui s'accrochent a la facon dont les choses etaient, qui habillent la resistance en rigueur, qui appellent l'inertie "standards de qualite". Les voix les plus fortes sont celles qui ont le plus a perdre - les proprietaires de processus, les consultants en methodologie, les personnes dont les carrieres sont baties sur la ceremonie meme que l'IA rend obsolete.</p>
<p>Alors voici. Mon point de vue. Pas une reaction a un article, mais a tous. Voici comment je vois le metier du developpement logiciel en 2026, et pourquoi cette annee est la disruption bienvenue que j'esperais secretement.</p>
<p>Boris Tane a recemment ecrit que <a href="https://boristane.com/blog/the-software-development-lifecycle-is-dead/">le cycle de vie du developpement logiciel est mort</a>. Les agents IA ne l'ont pas accelere, ils l'ont tue. Il a raison. Mais je veux etre clair : <strong>je n'avais pas besoin de l'IA pour me dire que le SDLC etait casse.</strong> Je le dis depuis des annees.</p>
<p>Ce que les agents IA font maintenant ne revele pas une nouvelle verite. Ils rendent une vieille verite impossible a ignorer : <strong>la majeure partie du processus a toujours ete du gaspillage.</strong> Et nulle part cela n'est plus visible que dans l'industrie europeenne - surtout en France - ou les organisations fonctionnent encore comme en 2015.</p>

<h2>Qui je suis et pourquoi c'est important</h2>
<p>Je suis Tech Lead Manager dans l'industrie du logiciel de sante. Je dirige une equipe de 6 developpeurs. Je fais du developpement metier sur un systeme ERP-PAS complet avec 30 ans de code legacy. Admissions des patients, mouvements medicaux, facturation, chaine d'approvisionnement, structures organisationnelles - le genre de logiciel qui fait tourner des hopitaux entiers. Je travaille aussi sur la couche d'interoperabilite - HL7, IHE PAM, HPRIM XML - la plomberie qui connecte les systemes de sante entre eux.</p>
<p>J'ai passe 9 ans dans ce monde. Un monde ou un bug ne casse pas un tableau de bord, il casse un workflow d'admission patient. Un monde ou les gens vous diront que vous avez absolument besoin de la ceremonie SDLC complete parce que des vies sont en jeu.</p>
<p>Et je vous le dis : le SDLC a toujours ete la mauvaise reponse a la bonne question.</p>

<h2>Les mammouths europeens marchent vers l'irrelevance en somnambules</h2>
<p>Voici ce que je vois de l'interieur de l'industrie francaise : <strong>rien n'a change.</strong></p>
<p>Les memes organisations. Les memes processus. Les memes offres d'emploi. Les memes structures manageriales. Robuste ? Bien sur. De la meme facon qu'un mammouth est robuste - massif, resilient, parfaitement adapte a un monde qui n'existe plus.</p>
<p>Les startups americaines livrent des produits avec des equipes de 3 personnes et des agents IA. Les entreprises chinoises iterent a un rythme qui rend la Silicon Valley nerveuse. Et en France ? On debat encore de l'adoption d'Agile ou du maintien du waterfall. On ecrit encore des specifications de 200 pages. On recrute encore en fonction du nombre d'annees de Java sur un CV.</p>
<p>L'industrie logicielle europeenne - et francaise en particulier - a toujours ete conservatrice. Des processus lourds, des hierarchies lourdes, des certifications lourdes. Il fut un temps ou cette solidite etait un avantage. Ce temps est revolu. <strong>2026 est l'annee de la disruption.</strong> Pas l'annee prochaine. Pas dans cinq ans. Maintenant.</p>
<p>Les organisations qui ne reagissent pas seront depassees par des equipes dix fois plus petites, qui tournent autour d'elles avec des agents IA, livrant en jours ce qui prenait des trimestres. Le mammouth n'a pas besoin de courir plus vite. Il doit evoluer. Et il n'evolue pas.</p>

<h2>Vous recrutez encore pour les mauvaises competences</h2>
<p>Ouvrez n'importe quel site d'emploi en France en ce moment. Regardez les offres tech. Que voyez-vous ?</p>
<ul>
<li>"5 ans de Java requis"</li>
<li>"Expert Angular, minimum 3 ans"</li>
<li>"Bonne connaissance de Spring Boot"</li>
<li>"Doit connaitre React Native"</li>
</ul>
<p>En 2026. Avec des agents IA qui ecrivent du code de qualite production dans n'importe quel langage, n'importe quel framework, en minutes.</p>
<p><strong>Recruter sur l'expertise d'un langage de programmation, c'est comme recruter des chauffeurs en fonction de leur connaissance des races de chevaux.</strong> Le vehicule a change. La competence qui compte a change avec lui.</p>
<p>Un agent IA se fiche que vous ayez passe 10 ans a ecrire du Java ou 2 mois. Il ecrit du Java. Il ecrit du TypeScript. Il ecrit du Python. Il ecrit ce dont vous avez besoin, souvent mieux que l'"expert" que vous essayez de recruter, parce qu'il a vu plus de codebases que n'importe quel humain.</p>
<p>Alors pour quoi devriez-vous recruter ? Les choses que les agents ne peuvent pas faire :</p>
<ul>
<li><strong>L'expertise metier.</strong> Comprendre l'espace probleme. Savoir pourquoi le parcours patient d'un hopital a sept etats au lieu de trois. Savoir que HPRIM XML est un standard francais dont personne hors de France n'a entendu parler. Connaitre les regles metier qu'aucune specification ne capture pleinement. C'est ce qui donne aux agents le bon contexte pour produire le bon code.</li>
<li><strong>La pensee architecturale.</strong> Clean Architecture, frontieres hexagonales, regles de dependance, conception systeme - la capacite a structurer des systemes pour qu'ils restent maintenables, testables et evoluables. Les agents ont besoin de savoir ou mettre les choses. Quelqu'un doit definir cela.</li>
<li><strong>L'ingenierie de contexte.</strong> La nouvelle competence fondamentale. La capacite a donner aux agents les bonnes contraintes, les bonnes decisions, les bonnes connaissances metier pour qu'ils produisent ce dont vous avez reellement besoin. C'est ce qui separe un developpeur qui utilise l'IA d'un developpeur qui est multiplie par l'IA.</li>
<li><strong>Le jugement.</strong> Savoir quand l'agent a tort. Savoir quand l'architecture ne convient pas. Savoir quand le test couvre le mauvais cas limite. Savoir quand livrer et quand s'arreter.</li>
</ul>
<p>Rien de tout cela n'est un langage de programmation. Rien de tout cela n'apparait sur une offre d'emploi francaise. Et c'est le probleme.</p>

<h2>2026 : l'annee ou tout casse</h2>
<p>Ce n'est pas graduel. La disruption se produit maintenant, et elle se produit vite.</p>
<p>Pour les <strong>employes</strong> : le developpeur qui refuse de travailler avec des agents IA sera surpasse 10 contre 1 par celui qui le fait. Pas parce qu'il est un moins bon ingenieur. Parce que les outils ont change et pas lui. L'expertise dans un langage de programmation etait une carriere. En 2026, c'est une commodite. Les agents l'ont commoditisee. Ce qui reste, c'est tout ce qui est au-dessus du code : connaissance metier, vision architecturale, ingenierie de contexte, jugement.</p>
<p>Pour les <strong>organisations</strong> : l'entreprise qui fait encore des sprints de deux semaines, des revues de PR de trois jours, des cycles de QA manuels et des trains de release trimestriels livrera en un trimestre ce qu'une equipe IA-native livre en une semaine. Ce n'est pas un ecart de productivite. C'est un ecart de niveau extinction. Vos concurrents n'optimisent pas leur processus. Ils l'eliminent.</p>
<p>Pour <strong>l'ecosysteme tech francais</strong> : nous avons des ingenieurs de classe mondiale. Nous avons une expertise metier profonde dans la sante, l'aerospatiale, la finance, l'energie. Nous avons du talent. Ce que nous n'avons pas, c'est l'agilite organisationnelle pour liberer ce talent. Nous etranglons nos meilleurs avec des processus concus pour un monde qui n'existe plus, puis nous nous demandons pourquoi nous prenons du retard.</p>
<p><strong>Il est temps de reagir.</strong> Pas le trimestre prochain. Pas apres la prochaine reorganisation. Maintenant.</p>

<h2>Livrer vite ou ne jamais livrer</h2>
<p>Voici ce qui me motive : <strong>l'impact.</strong></p>
<p>Je veux pousser en production le plus vite possible. Pas parce que je suis imprudent. Parce que du code qui reste dans une branche, qui attend dans une file de revue, coince derriere un train de release - ce code a zero valeur. C'est du stock. Et le stock est du gaspillage.</p>
<p>Le seul code qui compte est celui qui tourne en production, qui resout de vrais problemes pour de vrais utilisateurs. Tout ce qui se trouve entre votre intention et la production est de la friction. Le travail consiste a minimiser cette friction.</p>
<p>Avant les agents IA, "livrer vite" etait une aspiration culturelle. Vous le disiez en reunion d'equipe, puis vous passiez trois jours a attendre une revue de PR. Maintenant, avec des agents qui generent du code, des tests et des configs de deploiement dans une seule boucle, livrer vite est la valeur par defaut. La question n'est plus "comment livrer plus vite ?" C'est "qu'est-ce qui est encore en travers du chemin ?"</p>
<p>La reponse, la plupart du temps, c'est le processus. Le processus, et des organisations trop effrayees pour le lacher.</p>

<h2>Les humains n'ont pas leur place dans les tests</h2>
<p>Je vais dire quelque chose qui met les managers QA mal a l'aise : <strong>les humains ne devraient pas tester le logiciel.</strong></p>
<p>La QA manuelle est une relique. Un humain qui clique sur des ecrans, qui suit des scripts de test, qui remplit des rapports de bugs - tout ce workflow est plus lent, moins fiable et moins exhaustif que les tests automatises. A chaque fois. Sans exception.</p>
<p>Si vos tests ne peuvent pas etre automatises, c'est votre architecture qui est mauvaise. Ce n'est pas une opinion IA. C'est une opinion d'ingenierie logicielle que je porte depuis des annees. La testabilite est une propriete de conception. Si vous avez besoin d'un humain pour verifier que votre logiciel fonctionne, vous l'avez mal construit.</p>
<p>Voici a quoi ressemblent les tests en 2026 :</p>
<ul>
<li><strong>Les tests unitaires</strong> sont generes avec le code. L'agent les ecrit. Ils s'executent en millisecondes.</li>
<li><strong>Les tests d'integration</strong> verifient de vrais flux de messages - de vrais messages HL7, de vraies transactions de sante, de vrais etats de base de donnees.</li>
<li><strong>Les tests end-to-end</strong> simulent le parcours utilisateur complet. Pas de clics humains. Pas de scripts de test. Pas d'equipe QA.</li>
<li><strong>Le typage</strong> attrape des categories entieres de bugs a la compilation.</li>
<li><strong>Les fonctions de fitness architecturale</strong> verifient que le code respecte les frontieres, les dependances et les regles metier.</li>
</ul>
<p>Tout automatise. Tout en CI/CD. Tout plus rapide et plus fiable que n'importe quel humain.</p>
<p>L'agent ecrit le code et les tests ensemble. Pas comme une reflexion apres coup. Pas dans une "phase de test" separee. La fonction QA entiere en tant qu'etape separee, en tant qu'equipe separee, en tant que ligne separee sur l'organigramme - c'est termine.</p>
<p>Je travaille sur un ERP de sante qui gere les admissions de patients. Si je peux faire confiance aux tests automatises plutot qu'a la QA humaine dans <strong>ce</strong> domaine, vous pouvez leur faire confiance dans le votre.</p>

<h2>La sante n'est pas speciale (et c'est tout l'interet)</h2>
<p>Les gens vous diront que la sante est differente. Que vous ne pouvez pas aller vite avec les donnees patients. Que la conformite exige la ceremonie SDLC complete.</p>
<p>Ils confondent l'<strong>exigence</strong> avec l'<strong>implementation.</strong></p>
<p>La conformite exige la <strong>tracabilite</strong>, pas la ceremonie. Elle exige que vous puissiez prouver ce qui a change, pourquoi, et que cela a ete verifie. Elle n'a jamais exige de story points. Elle n'a jamais exige de revues de PR de trois jours. Elle n'a jamais exige de validation QA manuelle.</p>
<p>Un agent qui genere du code, ecrit des tests, les execute, verifie les types, valide contre les contraintes architecturales et enregistre chaque etape fournit <strong>plus de tracabilite</strong> qu'un developpeur humain qui a revu une PR a moitie endormi un vendredi apres-midi et un testeur QA qui a clique sur 60% du script de test avant le dejeuner. On ne peut juste pas encore l'accepter, parce que la ceremonie semblait sure.</p>
<p>Je travaille sur un systeme qui gere le cycle de vie complet d'un patient a l'hopital, de l'admission a la sortie, des prescriptions a la facturation. Si le SDLC peut mourir ici, dans le coin le plus reglemente, conservateur et averse au risque de l'industrie logicielle, il peut mourir n'importe ou.</p>

<h2>Ce que je fais vraiment maintenant</h2>
<p>Mon role a fondamentalement change. Avant, je passais mes journees dans la machine a processus :</p>
<ul>
<li>Ecrire et affiner des tickets que personne ne lisait deux fois</li>
<li>M'asseoir en sprint planning, pretendant que l'estimation fonctionne</li>
<li>Revoir des PR ligne par ligne</li>
<li>Debloquer des developpeurs coinces sur du contexte qu'ils n'avaient pas</li>
<li>Attendre que la QA valide manuellement ce que les tests automatises couvraient deja</li>
</ul>
<p>Maintenant je passe mes journees sur des choses qui comptent vraiment :</p>
<p><strong>L'ingenierie de contexte.</strong> Donner a l'agent les bonnes decisions architecturales, les bonnes contraintes, les bonnes connaissances metier. En sante, cela signifie s'assurer que l'agent comprend qu'un HL7 ADT^A01 est une admission patient, que HPRIM XML est un standard francais dont personne hors de France n'a entendu parler, que le module de facturation a des dependances que le systeme de types n'attrapera pas. La qualite de ce que les agents construisent est directement proportionnelle a la qualite du contexte que vous leur donnez.</p>
<p><strong>Verifier l'intention, pas la syntaxe.</strong> Je ne lis plus les diffs ligne par ligne. Je verifie que la sortie correspond a ce dont nous avions besoin. Est-ce que le flux d'interoperabilite fonctionne ? Est-ce que le test automatise couvre le vrai cas limite ? Est-ce que la gestion d'erreur est appropriee pour un systeme qui tourne dans un hopital ?</p>
<p><strong>Construire des garde-fous, pas des portes.</strong> Au lieu d'une porte de revue PR ou le code attend dans une file pendant des jours, j'investis dans des verifications automatisees. Securite de type. Tests d'integration contre de vrais formats de messages HL7. Fonctions de fitness architecturale. Suites e2e. Si la sortie de l'agent passe tout cela, ca part en production. Pas de porte humaine. Pas de QA manuelle. Pas de file de revue.</p>
<p><strong>Pousser en production.</strong> Le chemin le plus rapide de l'intention a l'impact. C'est l'objectif. Toujours.</p>

<h2>Le maker sait</h2>
<p>Je suis un maker. Les week-ends, je cable des microcontroleurs, je soude des bandeaux LED, je construis des systemes de domotique. J'ai construit des clones ambilight, des meubles sur mesure avec des PC integres, des distributeurs de croquettes automatises connectes a ma maison intelligente.</p>
<p>Les makers ne suivent pas de SDLC. Vous avez une idee. Vous prototypez. Vous testez - pas en ecrivant un plan de test, mais en branchant et en voyant si ca marche. Vous iterez. La boucle de feedback est immediate. Vous n'ecrivez pas un ticket avant de souder un capteur sur une breadboard. Vous n'estimez pas combien de story points il faut pour cabler un relais. Vous ne demandez pas a une equipe QA de verifier que votre bandeau LED fonctionne. Vous le branchez. Ca s'allume ou pas. Vous corrigez ou vous essayez autre chose.</p>
<p>Ce que les agents IA apportent au developpement logiciel professionnel, c'est <strong>la boucle de feedback du maker</strong>. Intention, construction, test, iteration, livraison. Pas de ceremonie. Pas de passages de relais. Pas d'attente. Pas de QA manuelle. Juste construire et livrer.</p>
<p><strong>J'ai toujours construit les choses de cette facon. L'industrie rattrape enfin son retard.</strong></p>

<h2>Ce qui survit</h2>
<p>Pas grand-chose.</p>
<p><strong>La connaissance metier</strong> survit. L'agent a besoin de quelqu'un qui comprend l'espace probleme. La sante est profonde. Un ERP de 30 ans est profond. L'intersection des deux est un labyrinthe qu'aucun modele n'a entierement cartographie.</p>
<p><strong>L'intention architecturale</strong> survit. La Clean Architecture n'est pas morte. Les frontieres hexagonales, les regles de dependance, la separation du domaine et de l'infrastructure - tout cela compte encore. Mais c'est exprime comme contexte pour l'agent, pas comme des diagrammes sur un tableau blanc qui deviennent obsoletes en une semaine.</p>
<p><strong>La verification automatisee</strong> survit et devient tout. Tests, verifications de types, scans de securite, diffs comportementaux, fonctions de fitness architecturale - le filet de securite entier est du code, pas des personnes. Du code qui verifie du code.</p>
<p><strong>L'observabilite</strong> survit et devient la fondation. Quand le code est livre en continu, votre stack de monitoring est votre derniere ligne de defense. Nous passons de "revue avant livraison" a "livrer et verifier en continu."</p>
<p><strong>Tout le reste est de la ceremonie.</strong> Et la ceremonie, c'est ce que vous faites quand vous ne faites pas confiance a vos outils, votre architecture ou vos verifications automatisees. Les outils sont devenus assez bons. Il est temps de lacher prise.</p>

<h2>Un signal d'alarme pour la tech europeenne</h2>
<p>Je n'ecris pas cela depuis San Francisco. Je ne suis pas dans une startup de 5 personnes sans clients. Je suis en France, au sein d'une grande organisation de logiciels de sante, en train de moderniser un systeme de 30 ans dont les hopitaux dependent chaque jour.</p>
<p>Et je vous le dis : <strong>l'ecart se creuse.</strong></p>
<p>Alors que les equipes americaines et asiatiques operent deja dans le monde post-SDLC - livrant avec des agents, automatisant tout, recrutant pour le jugement et l'expertise metier - la plupart des organisations europeennes jouent encore l'ancien scenario. Recrutent encore "5 ans de Java." Font encore des sprints de deux semaines. Debattent encore de savoir si l'IA est une mode ou une menace.</p>
<p>Ce n'est ni l'un ni l'autre. C'est la nouvelle realite. Et les organisations qui la traitent comme un outil pour optimiser l'ancienne facon de travailler, plutot que comme une raison de repenser fondamentalement comment elles construisent du logiciel, seront laissees pour compte.</p>
<p>La France a des ingenieurs de classe mondiale, une expertise metier profonde et des industries serieuses. Ce qui lui manque, c'est le courage de jeter les processus qui ne la servent plus. Nous avons bati notre reputation sur la rigueur et la robustesse. Mais la rigueur sans la vitesse n'est que de la lenteur. Et la robustesse sans l'adaptabilite n'est que du poids.</p>
<p>Le mammouth etait robuste aussi. Regardez ou ca l'a mene.</p>
<p><strong>2026 est l'annee de la decision.</strong> Est-ce que vous evoluez, ou est-ce que vous attendez que l'ere glaciaire passe ?</p>
<p>Elle ne passera pas.</p>

<hr>
<p><em>Je suis Tech Lead Manager dans le logiciel de sante. Je construis du logiciel, des produits et des equipes. Quand je ne modernise pas des systemes de sante legacy, je cable des microcontroleurs et je construis de la domotique. Je n'ai jamais cru en Agile. Je n'ai jamais fait confiance a la QA manuelle. L'avenir me donne raison.</em></p>`
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
