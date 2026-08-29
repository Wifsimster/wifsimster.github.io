# AI Quality Article — Persona Meeting, 2026-08-29

Subject: answer the question "AI code quality — can we trust it *les yeux fermés*?"
Output: `src/posts/TestsPassNothingHappens.vue` — slug `tests-pass-nothing-happens`.

## Round 1 — four personas in parallel

| Persona | Lens |
|---|---|
| Adrien | DevOps & software-quality research — primary evidence on AI code quality |
| Camille | Engineering leader embedded on the Solstice* monorepo — what the repo itself proves |
| Théo | Skeptical senior engineer — attack the thesis before a reader does |
| Marc | Editorial strategist — voice, positioning, anti-repetition |

### Findings that changed the article

**Théo (most consequential).** The drafted thesis overlapped `doctrine-as-code` by ~70% —
same corpus, same conclusion, same spine. His reframe was accepted: the subject is not the
guard count, it is the **missing-thing defect** — the case where every artifact is correct
and *no artifact anywhere contains the bug*. `doctrine-as-code` was about a rule that existed
and was not run; this is about everything running and everything passing.

He also killed three overclaims:
- "AI produces a new species of bug" — false. A tired engineer forgets the same call.
  What changed is the **rate** and the **review economics**. Article now says this explicitly.
- "We now trust the pipeline" — survivorship bias. The guards encode only defects that were
  *found*. Reframed as **ratchet, not net**: "we cannot repeat thirty-nine specific mistakes."
- The escape hatches are a real hole. Article concedes it as an open flaw with no shipped fix.

He also supplied the strongest pro-AI counterweight, which the draft was ignoring: writing a
guard right after an incident used to be the backlog item that died; and an agent reads all 67
ADRs before a structural change, which no human does. Both are now in the text.

**Camille.** Evidence sheet from the repo. Anchor incident: the dead audit drainer — four
services enqueued fail-closed opposable events and never started the relay loop; 468 events
waiting since 21/07, `drain_attempts = 0`, found 28/08. The guard's own header says the defect
is *structurally invisible*: no test breaks, the reachability probe passes (it proves the base
is reachable, not that anything reaches it), and a neighbouring drainer logs a near-identical
boot line. Three supporting incidents retained: the copy-pasted auth stub across fifteen
services, the flag that replaced an env var nothing stopped reading, the FHIR contract that
advertised three classes missing from the deployment.

**Adrien.** Kept: MSR 2026 *More Code, Less Reuse* (reviewers rated agent PRs **more**
favourably — the plausibility mechanism), Perry et al. CCS 2023 (false confidence),
*Debt Behind the AI Boom* (89.1 / 5.8 / 5.1 split, with the authors' own admission that they
ran no human baseline). Demoted to "signal only": GitClear (vendor, no authorship attribution),
Veracode 45% (vendor, synthetic prompts, no pipeline in the loop).

**Marc.** Anti-repetition audit produced the binding no-reuse list. Two catches mattered:
the METR reversal is **already spent** in `agentic-ai-addiction` (both languages) — referenced
in one clause here, not re-argued; and `doctrine-as-code` published "23 check scripts" in late
July, so the jump to 41 needed reconciling in-text or an attentive reader catches a
self-contradiction. Diagram 2 now *is* that reconciliation.

## Mid-meeting escalations → author's standing rules applied

1. **Reframe or kill** (Théo) → reframed to the missing-thing defect.
2. **Publish the exemption gap as an admitted flaw** → yes. Section "What a check cannot see".
3. **Own "I stopped reading line by line" in first person** (Marc) → done; `po-is-dead` had only
   quoted someone else saying it.

## Round 2 — convergence

Personas agreed independently on: the defect class has no symptom; reading is the wrong
instrument, independent of volume; the transferable rule is *derive the perimeter from the code,
never recopy it*. They disagreed on how much credit the guards deserve — Camille's sheet reads
as a success story, Théo's as a list of things already paid for. Resolved in Théo's favour:
the honest half of the post is longer than the triumphant half.

## Verified counts (checked in-repo 2026-08-29, not taken from any persona)

- **41** `check-*.mjs` scripts. **39** fail the build; **1** advisory by design
  (docs co-ownership); **1** not wired to CI.
- **67** numbered ADRs (68 files, one number duplicated).
- **~12** derogations in application source, each with a written reason; **1** guard ratcheted
  against a baseline (`scripts/baselines/`).
- Git history squashed at import **2026-08-21** → older guard creation dates are unusable.
  Only the last five (25, 27, 29 Aug) are genuinely datable. Stated in the article.

## Author rulings after the first publication

The piece shipped as incident forensics and was corrected twice by the author the same day.

**1. "Nous ne sommes pas encore en production."** The article asserted that a regulatory
obligation had gone unmet in production. False, and on regulated healthcare software a serious
claim to get wrong. Removed in both languages, and the pre-production status is now stated
outright early in the piece. This is a fact-checking failure on my side: the incident material
came from guard headers describing environments, and I read deployment as production. **Rule for
the next session: never infer production from a repository. Ask.**

**2. "Un exemple d'audit corrigé hier ? je ne trouve pas ça judicieux."** Correct. Anchoring a
public post on a compliance gap closed the previous day, on a product with no users yet, exposes
the employer for no editorial gain. The incident was removed entirely — prose, both diagrams, and
the fact-versus-judgement example, which now uses keyboard accessibility. **Rule: an incident is
publishable when it is old, closed, and non-compliance-shaped. Freshness is a cost, not a hook.**

**3. The real subject was never the incident.** The author's framing: *"je veux surtout une vision
de ce que j'ai construit sur le projet alliage, les CI guardrails, et comment de manière générale
je vois la qualité et comment on l'a prouvé."* The article was rebuilt around that — the system,
the definition, and the proof. Incidents became brief illustrations.

This third ruling also answers Théo's objection better than my own reframe did. He was right that
a guard-count spine reruns `doctrine-as-code`; the genuinely new material turned out to be the
**measurement layer**, which `doctrine-as-code` never touched: defects classified by the stage
that caught them (build, review, manual test, QA, pilot, production), with the last two counted as
escaped. That reframes a guardrail as something that moves a class one rung left permanently —
bugs are a flow, rules are a ratchet.

## Final shape

TL;DR → what quality means here (five properties, none verified by "does the feature work") →
why reading stopped being the instrument → the four layers (67 decisions, 39 blocking checks in 44
CI jobs, one PASS/FAIL verdict, one deliberately human perimeter) → how we prove it (the detection
ladder) → what none of it proves → what still belongs to humans → Monday morning.

Titles: *Quality Isn't Read. It's Executed.* / *La qualité ne se relit pas. Elle s'exécute.*
Slug unchanged (`tests-pass-nothing-happens`), per the agentic-addiction retitle precedent — open
question for the author, since the slug no longer matches the title.

## Decisions

- Title EN *Quality Isn't Read. It's Executed.* / FR *La qualité ne se relit pas. Elle s'exécute.*
  (the original *The Tests Passed. Nothing Happened.* belonged to the incident framing)
- Tags `['Software', 'AI', 'Opinion']`. `Security` rejected (homelab lane), `Analysis` rejected
  (no measured defect count published).
- Two diagrams, two blockquotes per language. Diagram 1 = the four layers as a narrowing funnel;
  diagram 2 = the six-rung detection ladder with the escaped-defect bracket. Both initially
  overflowed in FR (longer strings) and were restructured after a headless-Chromium check.
- Anonymization: Solstice*, no org/product names, no issue numbers, no links to internal trackers.

## Follow-ups for Wifsimster (the human)

- Slug still reads `tests-pass-nothing-happens` while the title is now about executed quality.
  Say the word and it changes; the cost is one broken URL, hours old.

- The exemption ratchet is a real gap on Solstice*, not just an article concession: one guard
  counts its derogations, forty do not. Worth an issue.
- `doctrine-as-code`'s "23 scripts" is now historical. Left as published (dated snapshot);
  reconciled in the new post rather than edited retroactively — confirm that's the call you want.
- Diagrams render at ~608 px for an 800-unit viewBox in a 1280 px viewport, i.e. a ~24% shrink,
  not the ~15% recorded in CLAUDE.md. The minimums may need raising again.
