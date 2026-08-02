# PO-ARTICLE-MEETING — 2026-08-02

Editorial meeting for the product-side companion to `coder-is-dead-engineer-is-born`.
Method: four personas in parallel (round 1), mid-meeting escalation, convergence
written by the coordinating session. Trigger: four LinkedIn posts in one week —
one burying the PO, one saving the PM, one giving up line-by-line review of AI
code, one arguing a single person can now carry a product end to end.

## Round 1 — personas

### Adrien (DevOps & product-org researcher)
- Cagan/SVPG has said "product owner is a role, not a job" for a decade; his Jan 2026
  AI piece splits PO / feature PM / empowered PM and says the first two face the
  reckoning. Endorse the taxonomy, note he sells the empowered model (conflict of
  interest). Post A ("PO indefensible") is warmed-over Cagan minus the taxonomy.
- Perri's build trap maps onto Post B: a PM whose job was producing stories was
  already trapped; AI runs the trap at machine speed.
- DORA 2025: role blur in both directions (PMs doing technical work, engineers doing
  product work), not role death. Survey numbers, not telemetry.
- Job market: ~174k senior product/marketing exits 2022-2025, but PM postings up
  ~12% early 2026, concentrated senior. Nobody can attribute cuts to AI vs the
  post-ZIRP correction. Shape: hollowing middle, hiring top.
- "Product engineer" postings are real (LinkedIn's Product Builder rotation, startup
  postings); discard the $1.48T analyst number.
- Spec/story tooling: quote adoption (Rovo 5M MAU), refuse vendor productivity
  numbers (19% more PRs, 2-3h/dev/week — all vendor-published).

### Claire (engineering leader, regulated healthcare lens)
- The bottleneck moves to the brief, not the draft. Someone still has to know the
  prescription workflow is class B; that knowledge lives in the risk file and in
  people, not the backlog.
- The regulated twist is the differentiator: a requirement is a compliance artifact
  with a signature. AI can draft every link of the traceability chain; it cannot own
  any link. AI makes the chain cheaper to produce and more dangerous to rubber-stamp
  — approval fatigue is the "trust the LAN" checkbox transposed to compliance.
- Fusion works at seniority, breaks on juniors and on stakeholder politics. The
  author added interns/apprentices: fusion is not his hiring plan, a training
  pipeline is.
- What engineering needs from product now: arbitration with a signature, refusal
  in audit language, exposure to the field.
- Warning: invent no audit anecdotes; validate any first-person claim against the
  published canon.

### Marc (skeptical senior engineer)
- "Everyone owns the product" is how nobody owns it: keep a named accountable
  product role in the end-state. Diffuse ownership doesn't survive an audit.
- Distributed judgment is a senior-team luxury; the transmission belt was
  incidentally a training ground. The article must answer the junior path
  (mirrors the coder-is-dead junior-pipeline beat).
- Ten hypotheses in 30 seconds worsens the build trap: production speed is not
  problem understanding. Must be an explicit beat or the piece contradicts
  dora-ai-roi-report ("AI amplifies the system you have").
- Wrong-target risk: the clerk PO was made by feature-factory org design. Punch the
  org design, not the role. Reconcile with `ai-team-reflex`'s "Sit with the PO and
  stress-test a clinical workflow" — the canon treats the PO as the valuable
  counterpart.
- Banned sentence shapes (headcount landmines): "the role disappears" without the
  role/job-description distinction; "you no longer need a PO to…"; any PM:teams
  ratio; "what's left of the role"; any passive "absorbed" without naming where the
  person goes in the same paragraph.

### Élise (editorial strategist)
- Title EN "The Backlog Was Never the Job", FR « Le backlog n'a jamais été le
  métier » — mirror of "Coding Was Never the Job". Slug `po-is-dead-judgment-is-not`
  (diptych shape: a function dies, a capacity survives).
- Anonymized paraphrase of the LinkedIn posts, no names, no links; blockquote the
  author's own restatement, not their words.
- Structure: TL;DR → open on the strongest sentence → the feed scene → what the PO
  week was made of → what survives and who holds it → the boundary dissolves →
  honest section → Monday morning → series block → sources.
- Two diagrams: D1 the product week as a single stacked bar (transmission share vs
  judgment share, bracket "what agents absorb"), explicitly labeled illustrative;
  D2 production cost collapsing vs understanding cost flat, the gap labeled "where
  product judgment lives", explicitly conceptual.
- Generic-fodder antidotes: steelman before disagreeing, zero vendor numbers as
  fact, scenes only this author could write, honest section refuses the headcount
  subtext explicitly.

## Mid-meeting escalation (answered)

Two questions were escalated to the author (field-report source; title/slug).
Author answered "no preference" on both — decisions delegated to the session:

1. **Field-report source:** build only on what the published canon already asserts
   (the PO the author stress-tests clinical workflows with in `ai-team-reflex`, the
   ticket-triage flow, the persona meetings). No invented anecdotes, no
   identifiable details, no claims about the real team beyond the canon.
2. **Title/slug:** « Le backlog n'a jamais été le métier » / "The Backlog Was Never
   the Job", slug `po-is-dead-judgment-is-not`.

## Round 2 — convergence

Where the personas independently agreed:
- The thesis holds: the transmission-belt function dies; product judgment survives
  and stops being the property of one role. People stay, the job description doesn't.
- The regulated-healthcare angle (requirement = signed compliance artifact;
  rubber-stamp risk) is the differentiator no LinkedIn post has.
- Steelman both viral positions; punch the org design, not the role.
- No vendor numbers as fact; no headcount subtext anywhere.

Where they disagreed, and resolution:
- Marc wanted a named accountable product role in the end-state; Élise's draft
  thesis leaned "judgment de-territorializes". Resolution: both — judgment spreads,
  accountability stays named. "Someone must still sign" is in the honest section
  and in the body.
- Adrien proposed structuring on Cagan's taxonomy; Élise wanted the feed scene as
  spine. Resolution: feed scene as spine, taxonomy cited once in §what-survives.

## Action plan (files)

- `src/posts/PoIsDeadJudgmentIsNot.vue` — new post, FR + EN, 2 SVG diagrams,
  honest section, Monday-morning list, series block, sources with caveats.
- `src/posts/index.ts` — register `po-is-dead-judgment-is-not`.
- Series blocks updated (FR + EN) in: `AiTeamReflex.vue`, `DoraAiRoiReport.vue`,
  `AiAgentsH1Verdict.vue`, `AgenticAddiction.vue`.
- Meeting doc: this file.

## Decisions

- Tags: `Software`, `AI`, `Opinion`, `Work`.
- Date: 2026-08-02.
- Four feed posts paraphrased anonymously ("a lead product manager", "a
  transformation consultant", "a staff platform engineer", "an indie developer").
- Diagrams labeled illustrative/conceptual — diagnosis vs arithmetic rule.

## Follow-ups for Wifsimster (the human)

- Read the FR and EN drafts for anything that overclaims about the real team; the
  scenes are built strictly from the published canon, but only you can confirm they
  still match reality.
- If you ever want D1 to become a measured diagram, sample one real week of product
  time (transmission vs judgment) and we regenerate it from data.
- Optional: a short LinkedIn comment linking the new post is the natural reply to
  all four posts that triggered it.
