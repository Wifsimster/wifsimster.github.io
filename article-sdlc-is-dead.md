# The SDLC Is Dead. I Know Because I'm Burying It In a Hospital.

For months now, I've been reading articles about AI. On LinkedIn, on X, on tech blogs, on every corner of the internet. AI and disruption. AI and regression. AI and quality collapse. AI and slop. AI is killing software. AI is making us dumber. AI is producing garbage code. AI is the end of craftsmanship.

I've read hundreds of them. And I'm telling you: **I disagree with most of them, in all my being.**

Not because the concerns aren't real. Some are. But because the overwhelming narrative is fear disguised as wisdom. People clinging to the way things were, dressing up resistance as rigor, calling inertia "quality standards." The loudest voices are the ones with the most to lose - the process owners, the methodology consultants, the people whose careers are built on the very ceremony that AI is making obsolete.

So here it is. My point of view. Not a reaction to one article, but to all of them. This is how I see the software development job in 2026, and why this year is the welcome disruption I've been secretly hoping for.

Boris Tane recently wrote that [the software development lifecycle is dead](https://boristane.com/blog/the-software-development-lifecycle-is-dead/). AI agents didn't make it faster, they killed it. He's right. But I want to be clear: **I didn't need AI to tell me the SDLC was broken.** I've been saying it for years.

What AI agents are doing now isn't revealing a new truth. They're making an old truth impossible to ignore: **most of the process was always waste.** And nowhere is this more visible than in European industry - especially in France - where organizations are still operating like it's 2015.

## Who I am and why this matters

I'm a Tech Lead Manager in the healthcare software industry. I lead a team of 6 developers. I do core domain development on a full ERP-PAS system with 30 years of legacy code. Patient admissions, medical movements, billing, supply chain, organizational structures - the kind of software that runs entire hospitals. I also work on the interoperability layer - HL7, IHE PAM, HPRIM XML - the plumbing that connects healthcare systems together.

I've spent 9 years in this world. A world where a bug doesn't break a dashboard, it breaks a patient admission workflow. A world where people will tell you that you absolutely need the full SDLC ceremony because lives are at stake.

And I'm telling you: the SDLC was always the wrong answer to the right question.

## Europe's mammoths are sleepwalking into irrelevance

Here's what I see from the inside of French industry: **nothing has changed.**

The same organizations. The same processes. The same job postings. The same management structures. Robust? Sure. The way a mammoth is robust - massive, resilient, perfectly adapted to a world that no longer exists.

American startups are shipping products with 3-person teams and AI agents. Chinese companies are iterating at a pace that makes Silicon Valley nervous. And in France? We're still debating whether to adopt Agile or stay waterfall. We're still writing 200-page specifications. We're still hiring based on how many years of Java someone has on their CV.

The European software industry - and the French one in particular - has always been conservative. Heavy processes, heavy hierarchies, heavy certifications. There was a time when that solidity was an advantage. That time is over. **2026 is the disruption year.** Not next year. Not in five years. Now.

The organizations that don't react will be outpaced by teams a tenth their size, running circles around them with AI agents, shipping in days what used to take quarters. The mammoth doesn't need to run faster. It needs to evolve. And it's not evolving.

## You're still hiring for the wrong skills

Open any job board in France right now. Look at the tech postings. What do you see?

- "5 years of Java required"
- "Expert in Angular, minimum 3 years"
- "Strong knowledge of Spring Boot"
- "Must know React Native"

In 2026. With AI agents that write production-quality code in any language, any framework, in minutes.

**Recruiting on programming language expertise is like recruiting drivers based on their knowledge of horse breeds.** The vehicle changed. The skill that matters changed with it.

An AI agent doesn't care if you've spent 10 years writing Java or 2 months. It writes Java. It writes TypeScript. It writes Python. It writes whatever you need, often better than the "expert" you're trying to hire, because it's seen more codebases than any human ever will.

So what should you hire for? The things agents can't do:

- **Domain expertise.** Understanding the problem space. Knowing why a hospital's patient pathway has seven states instead of three. Knowing that HPRIM XML is a French standard nobody outside France has heard of. Knowing the business rules that no specification fully captures. This is what gives agents the right context to produce the right code.
- **Architectural thinking.** Clean Architecture, hexagonal boundaries, dependency rules, system design - the ability to structure systems so they remain maintainable, testable, and evolvable. Agents need to know where to put things. Someone has to define that.
- **Context engineering.** The new core skill. The ability to give agents the right constraints, the right decisions, the right domain knowledge so they produce what you actually need. This is what separates a developer who uses AI from a developer who is multiplied by AI.
- **Judgment.** Knowing when the agent is wrong. Knowing when the architecture doesn't fit. Knowing when the test covers the wrong edge case. Knowing when to ship and when to stop.

None of these are programming languages. None of these show up on a French job posting. And that's the problem.

## 2026: the year everything breaks

This isn't gradual. The disruption is happening now, and it's happening fast.

For **employees**: the developer who refuses to work with AI agents will be outproduced 10-to-1 by the developer who does. Not because they're a worse engineer. Because the tools changed and they didn't. Expertise in a programming language used to be a career. In 2026, it's a commodity. The agents commoditized it. What's left is everything above the code: domain knowledge, architectural vision, context engineering, judgment.

For **organizations**: the company that still runs two-week sprints, three-day PR reviews, manual QA cycles, and quarterly release trains will ship in a quarter what an AI-native team ships in a week. That's not a productivity gap. That's an extinction-level gap. Your competitors aren't optimizing their process. They're eliminating it.

For **the French tech ecosystem**: we have world-class engineers. We have deep domain expertise in healthcare, aerospace, finance, energy. We have talent. What we don't have is the organizational agility to unleash that talent. We're strangling our best people with processes designed for a world that doesn't exist anymore, and then wondering why we're falling behind.

**It's time to react.** Not next quarter. Not after the next reorganization. Now.

## Ship fast or ship never

Here's what drives me: **impact.**

I want to push to production as fast as possible. Not because I'm reckless. Because code sitting in a branch, waiting in a review queue, stuck behind a release train - that code has zero value. It's inventory. And inventory is waste.

The only code that matters is the code running in production, solving real problems for real users. Everything between your intent and production is friction. The job is to minimize that friction.

Before AI agents, "ship fast" was a cultural aspiration. You'd say it in team meetings, then spend three days waiting for a PR review. Now, with agents generating code, tests, and deployment configs in one loop, shipping fast is the default. The question isn't "how do we ship faster?" anymore. It's "what's still in the way?"

The answer, most of the time, is process. Process, and organizations too afraid to let go of it.

## Humans have no place in testing

I'll say something that makes QA managers uncomfortable: **humans should not be testing software.**

Manual QA is a relic. A human clicking through screens, following test scripts, filing bug reports - that entire workflow is slower, less reliable, and less thorough than automated tests. Every time. Without exception.

If your tests can't be automated, your architecture is wrong. That's not an AI opinion. That's a software engineering opinion I've held for years. Testability is a design property. If you need a human to verify your software works, you've built it wrong.

Here's what testing looks like in 2026:

- **Unit tests** are generated alongside the code. The agent writes them. They run in milliseconds.
- **Integration tests** verify real message flows - actual HL7 messages, actual healthcare transactions, actual database states.
- **End-to-end tests** simulate the full user journey. No human clicking. No test scripts. No QA team.
- **Type checking** catches entire categories of bugs at compile time.
- **Architectural fitness functions** verify that the code respects boundaries, dependencies, and domain rules.

All automated. All running in CI/CD. All faster and more reliable than any human.

The agent writes the code and the tests together. Not as an afterthought. Not in a separate "testing phase." The entire QA function as a separate stage, as a separate team, as a separate line item on the org chart - it's over.

I work on a healthcare ERP that handles patient admissions. If I can trust automated tests over human QA in **this** domain, you can trust them in yours.

## Healthcare isn't special (and that's the point)

People will tell you healthcare is different. That you can't move fast with patient data. That compliance requires the full SDLC ceremony.

They're confusing the **requirement** with the **implementation.**

Compliance demands **traceability**, not ceremony. It demands that you can prove what changed, why, and that it was verified. It never demanded story points. It never demanded three-day PR reviews. It never demanded manual QA sign-off.

An agent that generates code, writes tests, runs them, checks types, validates against architectural constraints, and logs every step provides **more traceability** than a human developer who reviewed a PR half-asleep on a Friday afternoon and a QA tester who clicked through 60% of the test script before lunch. We just can't accept that yet, because the ceremony felt safe.

I work on a system that manages the entire lifecycle of a patient in a hospital, from admission to discharge, from prescriptions to billing. If the SDLC can die here, in the most regulated, conservative, risk-averse corner of the software industry, it can die anywhere.

## What I actually do now

My role has fundamentally changed. I used to spend my days in the process machine:

- Writing and refining tickets nobody read twice
- Sitting in sprint planning, pretending estimation works
- Reviewing PRs line by line
- Unblocking developers stuck on context they didn't have
- Waiting for QA to manually validate what automated tests already covered

Now I spend my days on things that actually matter:

**Context engineering.** Giving the agent the right architecture decisions, the right constraints, the right domain knowledge. In healthcare, that means making sure the agent understands that an HL7 ADT^A01 is a patient admission, that HPRIM XML is a French standard nobody outside France has heard of, that the billing module has dependencies the type system won't catch. The quality of what agents build is directly proportional to the quality of context you give them.

**Verifying intent, not syntax.** I don't read diffs line by line anymore. I verify that the output matches what we needed. Does the interoperability flow work? Does the automated test cover the real edge case? Is the error handling appropriate for a system that runs inside a hospital?

**Building guardrails, not gates.** Instead of a PR review gate where code waits in a queue for days, I invest in automated checks. Type safety. Integration tests against real HL7 message formats. Architectural fitness functions. E2e suites. If the agent's output passes all of that, it ships. No human gate. No manual QA. No review queue.

**Pushing to production.** The fastest path from intent to impact. That's the goal. Always.

## The maker knows

I'm a maker. Weekends, I wire microcontrollers, solder LED strips, build home automation systems. I've built ambilight clones, custom furniture with integrated PCs, automated pet feeders connected to my smart home.

Makers don't follow an SDLC. You have an idea. You prototype. You test it - not by writing a test plan, but by plugging it in and seeing if it works. You iterate. The feedback loop is immediate. You don't write a ticket before soldering a sensor to a breadboard. You don't estimate how many story points it takes to wire a relay. You don't ask a QA team to verify your LED strip works. You plug it in. It lights up or it doesn't. You fix it or you try something else.

What AI agents are bringing to professional software development is **the maker's feedback loop**. Intent, build, test, iterate, ship. No ceremony. No handoffs. No waiting. No manual QA. Just building and shipping.

**I've always built things this way. The industry is finally catching up.**

## What survives

Not much.

**Domain knowledge** survives. The agent needs someone who understands the problem space. Healthcare is deep. A 30-year-old ERP is deep. The intersection of both is a maze that no model has fully mapped.

**Architectural intent** survives. Clean Architecture isn't dead. The hexagonal boundaries, the dependency rules, the separation of domain from infrastructure - these still matter. But they're expressed as context for the agent, not as diagrams on a whiteboard that get stale in a week.

**Automated verification** survives and becomes everything. Tests, type checks, security scans, behavioral diffs, architectural fitness functions - the entire safety net is code, not people. Code checking code.

**Observability** survives and becomes the foundation. When code ships continuously, your monitoring stack is your last line of defense. We're moving from "review before ship" to "ship and verify continuously."

**Everything else is ceremony.** And ceremony is what you do when you don't trust your tools, your architecture, or your automated checks. The tools got good enough. Time to let go.

## A wake-up call for European tech

I'm not writing this from San Francisco. I'm not at a startup with 5 people and no customers. I'm in France, inside a large healthcare software organization, modernizing a 30-year-old system that hospitals depend on every day.

And I'm telling you: **the gap is widening.**

While American and Asian teams are already operating in the post-SDLC world - shipping with agents, automating everything, hiring for judgment and domain expertise - most European organizations are still running the old playbook. Still hiring "5 years of Java." Still running two-week sprints. Still debating whether AI is a fad or a threat.

It's neither. It's the new reality. And the organizations that treat it as a tool to optimize the old way of working, rather than a reason to fundamentally rethink how they build software, will be left behind.

France has world-class engineers, deep domain expertise, and serious industries. What it lacks is the courage to throw away the processes that no longer serve it. We built our reputation on rigor and robustness. But rigor without speed is just slowness. And robustness without adaptability is just weight.

The mammoth was robust too. Look where that got it.

**2026 is the year to decide.** Are you evolving, or are you waiting for the ice age to pass?

It's not going to pass.

---

*I'm a Tech Lead Manager in healthcare software. I build software, products, and people. When I'm not modernizing legacy healthcare systems, I'm wiring microcontrollers and building home automation. I never believed in Agile. I never trusted manual QA. The future is proving me right.*
