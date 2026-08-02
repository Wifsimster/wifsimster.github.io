# DOCTRINE-ARTICLE-MEETING — 2026-08-02

Editorial meeting for the doctrine-as-code article, built from the author's full
method inventory (supplied in-session). Method: four personas in parallel,
convergence written by the coordinating session. Second article prepared this
session, after `po-is-dead-judgment-is-not`.

## Round 1 — personas

### Rémi (AI-platform & harness researcher)
- Anthropic canonized context engineering; AGENTS.md became a Linux Foundation
  standard (promoter-reported adoption); "harness > model" has benchmark deltas
  (refuse the precise numbers, keep the direction).
- ADR revival for agents is real: an agent that can't see why code is shaped a
  certain way refactors the reason away.
- Docs-drift research (context-rot preprint) confirms agent context rots like any
  doc; a guardrail on the context itself targets a measured problem.
- Policy-as-code is the honest lineage of R-* rules + blocking CI.
- Model deprecation cadence (60-day notices, 6-12 month lifecycles) makes "model
  = versioned depreciating dependency" factual.
- The serious counter: the Bitter Lesson — scaffolds are bets against model
  improvement. Rebuttal the article must make: procedural scaffolding
  depreciates; declarative, machine-checked domain doctrine does not ship with
  any model release. Narrow the thesis accordingly.

### Claire (engineering leader)
- Doctrine is a maintenance contract: 0.5-1 senior day/week, paid today by the
  tech lead — the doctrine meant to reduce tech-lead dependency is currently
  maintained by the tech lead (85.4% commit concentration).
- The drift findings are the article, not the appendix. A wrong context file
  breaks an agent silently, three weeks later, in a plausible-looking PR.
- Bus factor: doctrine is the only answer that scales, and it is currently half
  an answer — the corpus exists, the freshness enforcement doesn't.
- Minimum viable doctrine for the Monday list: root context file; five rules max,
  all blocking (zero unwired rules); ADRs only for re-litigated decisions;
  freshness gate blocking from day one; the workshop pipeline last.
- Proportionality: subsystem files/skills/verify-JSON are greenfield luxury; the
  root file + blocking-or-delete discipline + ADRs-on-demand transfer to legacy.

### Marc (skeptical senior engineer)
- The contradiction is real: "the SDLC is dead" author now maintains 134 rules.
  Resolution only survives with a falsifiable discriminator: ceremony consumed
  human hours per occurrence and verified nothing; a compiled constraint consumes
  zero marginal human time and verifies every time. The article must concede
  "yes, I rebuilt a process" verbatim — and note `sdlc-is-dead` already praised
  agents validating architectural constraints.
- No deletion story = SDLC 2.0 confirmed. Use the real pruning datum (4 skills
  deleted when they became native) and admit zero rules deleted so far — the open
  flank.
- The drift findings must not be spun: the enforced layer held; the descriptive
  layer rotted silently for months and a manual, unscheduled audit caught it
  late. "A smoke detector tested once, after the smell."
- Greenfield asterisk is near-fatal to generalization: one senior author, 85% of
  commits, from-scratch platform. A data point, not a method. Restate the ≤10%
  legacy number against ourselves.
- Banned claims: "N× faster thanks to doctrine"; "any team can do this";
  "doctrine is why the model performs"; "models are commodities".

### Élise (editorial strategist)
- Slug `doctrine-as-code` (a fourth `-is-dead` becomes shtick). Titles: FR from
  the author's own deck slogan; EN "Doctrine Compounds. Models Don't."
- Structure: cold open on model churn → dependency frame → doctrine inventory →
  contradiction beat BEFORE the confession (~55-60%) → drift confession as the
  longest honest section in the canon → humans section → Monday list.
- Diagrams: (1) hero — six-month timeline, 8 model-tenure bars on top, stepped
  doctrine accretion below, "retained: models 1 · doctrine everything";
  (2) drift audit — doctrine surface bar with the drifted descriptive fraction
  offset, the four findings listed. Rejected: reading-order stack (a menu, not a
  delta story).
- Priority edit: forward pointer in `SdlcIsDead.vue` (this post partially
  supersedes it, per CLAUDE.md series rule).
- Antidotes to "prompts are the moat" LinkedIn genre: the real counts, the
  self-audit confession, owning the contradiction; ban "moat", "secret sauce",
  "game-changer".

## Escalations and resolutions

The author's mandate was "prepare the next article with this content"; decisions
delegated. Resolutions taken:
1. **85.4% published** — it is the deck's own "assumed bias"; it is the
  credibility engine of the bus-factor section.
2. **Pruning honesty** — cite the 4 skills deleted when they became native;
  state plainly that no R-* rule has been deleted yet.
3. **Audit honesty** — described as manual, unscheduled, late; the next step
  (make the freshness guardrail blocking) framed as roadmap, not promise.
4. **Bitter Lesson** — addressed head-on with the declarative/procedural
  distinction.
5. **Counts kept** (59 ADRs, 134+ rules, 23 scripts, 47 skills, 42 context
  files) — same anonymization envelope as the published Solstice* counters; no
  partner, product, person or legacy-technology names from the inventory.
6. **Titles/slug** — FR « La doctrine se capitalise. Les modèles, non. » (the
  deck slogan verbatim), EN "Doctrine Compounds. Models Don't.", slug
  `doctrine-as-code`. Tags Software/AI/Opinion.
7. **AgenticAddiction series block left untouched** (personal lane);
  retro-adding a block to CoderIsDead deferred.

## Action plan (files)

- `src/posts/DoctrineAsCode.vue` — new post FR+EN, 2 SVG diagrams.
- `src/posts/index.ts` — register `doctrine-as-code`.
- Series blocks updated: `AiTeamReflex.vue`, `DoraAiRoiReport.vue`,
  `AiAgentsH1Verdict.vue`, `PoIsDeadJudgmentIsNot.vue`.
- `SdlcIsDead.vue` — forward pointer added at the end of both language bodies.
- This meeting doc.

## Follow-ups for Wifsimster (the human)

- Confirm the 85.4% figure may stay public (it is in your own deck as assumed
  bias; pull it if the deck is internal-only in ways the commit counters weren't).
- The article says the freshness guardrail "should become blocking, and it's on
  the roadmap" — confirm that matches your intent before anyone quotes it back.
- If a rule or ADR gets deleted for the first time, that's a one-line follow-up
  edit that would close the article's admitted open flank.
- The drift audit is described as one-off; if you schedule it (cron, CI, or a
  quarterly ritual), the ending gets stronger — say the word and we update.
