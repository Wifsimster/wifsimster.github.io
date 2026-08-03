# EDITORIAL-REVIEW-MEETING — 2026-08-02

Full review of the two posts published today (`po-is-dead-judgment-is-not`,
`doctrine-as-code`), on the author's request: fix anglicisms and mistranslated
technical terms, improve sentences, judge diagram coherence and structure.
Four personas in parallel; convergence and application by the coordinating
session. All fixes applied in this same session.

## Round 1 — personas

### Hélène (French copy editor) — 25 findings, 13 MUST-FIX
Concentrated calques rather than systemic ones: « audiences » → « publics »,
« table d'impact » → « tableau d'impact », « coupe dans les deux sens » →
« à double tranchant », « en secondes » → « en quelques secondes » (×2),
« opposables » → « contraignantes » (legal contresens, ×2), « la fraîcheur
n'est pas exécutée » → « imposée par un contrôle », « pire qu'aucun contexte »
→ « pire que pas de contexte du tout », « tient l'essentiel du stylo » →
« tient la plume », « Sur mon équipe » → « Dans mon équipe », « depuis ses
données » → « à partir de », « cet exact argument » → « ce même argument »,
« couper les personnes » → « couper dans les effectifs ». SUGGEST applied:
transcription, prêtes à développer, fait remonter, candidate évidente,
entretien utilisateur (×2), braqué vers, une epic, dans toute sa force,
compliance as code, intercepté, la leçon de l'incident. Verdict: the French
is rewriting, not translation; defects were point calques, all string-replaceable.

### James (English copy editor) — 25 findings, 12 MUST-FIX
French guillemets in the EN convergence SVG (×4), "re-read" → "review" (×2),
"in a language" → "in language", missing colon + "under what procedure" (prose
and SVG), "steers on" → "steers by", "at the exit" → "at the end of the loop",
"everything of the doctrine" → "the whole doctrine", "imposed by CI" →
"enforced by", "say where" → "tell you where", "has a shape" → "has the shape
it does", "changes payer" → "changes hands", missing article. SUGGEST applied:
status updates, minutes, relay station, locked-field relative untangled,
training ground, "runs on a trust relationship", "none eliminated",
share → layer (SVG + TL;DR "part"), discriminator → test (EN only; FR
« discriminant » is correct French), "hand over the receipts",
declares → acknowledges/flags. Kept: "arbitration" as a self-defining concept
term; "open fronts" as a deliberate motif. Verdict: native-passing after the
12 MUST-FIX; a thin consistent French film, now removed.

### Nadia (data-visualization critic) — all 16 SVGs at coordinate level
KEEP with fixes. Real visual language confirmed and preserved: higher
fill-opacity = what persists; dashed = ephemeral/unreliable; same bracket and
footnote grammar throughout; zero hex, zero gradients, all aria-labels
conclusion-stating. Fixed per her findings: P1 blockquote echoed verbatim
inside the SVG (relabeled « la rareté a changé de camp » / "the scarce thing
changed sides") and EN guillemets; P1 meaningless opacity micro-ramp flattened
to 0.13; P4 in-chart annotation echoing headline+blockquote replaced with
additive content (« ce qui remplit l'écart : arbitrage, terrain, refus » —
tying back to P2's judgment segments); D1 sub-13 fonts raised and right-side
annotations re-anchored (then raised above their elements after render check);
D3 footnote near-verbatim of the adjacent paragraph paraphrased; D4's
list-in-SVG moved to an HTML <ul> and the SVG shrunk to bar + bracket
(viewBox 320 → 216). Global font floor now 13.

### Élise (structure) — 14 findings
Applied: doctrine TL;DR de-spoiled (audit findings enumeration removed, counts
trimmed 5 → 2) so « L'inventaire qui pique » is the reveal; PO intro
de-tripled (the "each is right" paragraph collapsed to two sentences — the
diagram carries the enumeration); signature sentence removed from description
and SVG (blockquote keeps the only verbatim occurrence); consultant's intro
paraphrase reworded so blockquote #3 lands first; belt motif brought under the
two-occurrence cap (description → « fonction de relais », « Tuez la courroie »
→ « Supprimez le relais »); locked-field example marked as deliberate coupling
in Doctrine; PO now links Doctrine in-body at the "C'était les specs" hook;
« aucune règle ne dérive en silence » gets its planted wink (« gardez cette
phrase en tête ») paying off in the audit section; Bitter Lesson promoted to
its own H2 (« La Bitter Lesson, prise au sérieux »); Monday item 6 glossed
with the workshop pipeline link; twin closing paragraphs de-templated
(Doctrine's compressed to a pointer at PO); junior paragraph given its runway
(« Le piège a un deuxième étage ») ; unsourced "product engineer" job-board
claim cut. Not applied: moving D2 out of the Bitter Lesson section (Nadia's
KEEP outweighed the shrink suggestion — the new H2 resolves the overload).

## Convergence notes

- Where Nadia and Élise disagreed (D2 keep vs shrink), the H2 split satisfied
  both: the section is no longer overloaded and the diagram stays.
- James's "discriminator" fix applies to EN only; French keeps « discriminant ».
- Renders verified via headless Chromium after the changes (P1 EN, P4 FR,
  D1 FR, D4 FR) — one post-fix adjustment (D1 annotations raised).

## Follow-ups for Wifsimster (the human)

- « une epic » (feminine) was chosen per dominant French agile usage — flip it
  back if your team says « un epic ».
- The four-findings list now lives in HTML below the audit diagram; if you'd
  rather it stay purely visual, say so and we redesign the diagram around it.
