#!/usr/bin/env node
/**
 * Post validator — enforces the mechanical rules from CLAUDE.md §2 that no
 * build step catches. Posts are Vue SFCs whose body is an HTML template
 * literal rendered through DOMPurify; anything outside the sanitizer's
 * allowlist disappears at render time with no error anywhere.
 *
 * Run standalone:  node .claude/hooks/check-post.mjs src/posts/Foo.vue
 * Run corpus-wide: node .claude/hooks/check-post.mjs --all
 * Wired as a PostToolUse hook on Edit|Write in .claude/settings.json.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { resolve, basename } from 'node:path'

const ROOT = resolve(import.meta.dirname, '../..')
const SANITIZER = resolve(ROOT, 'src/components/blog/PostContent.vue')
const REGISTRY = resolve(ROOT, 'src/posts/index.ts')

/** Read the live allowlist out of PostContent.vue so it can never drift. */
function allowlist() {
  const src = readFileSync(SANITIZER, 'utf8')
  const grab = (key) => {
    const m = src.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`))
    if (!m) throw new Error(`could not parse ${key} from ${SANITIZER}`)
    return new Set(m[1].match(/'([^']+)'/g).map((s) => s.slice(1, -1)))
  }
  return { tags: grab('ALLOWED_TAGS'), attrs: grab('ALLOWED_ATTR') }
}

/** Extract each `html:` template literal, with its line offset in the file. */
function htmlBlocks(src) {
  const blocks = []
  const re = /html:\s*`/g
  let m
  while ((m = re.exec(src)) !== null) {
    let i = re.lastIndex
    for (; i < src.length; i++) {
      if (src[i] === '\\') { i++; continue }
      if (src[i] === '`') break
    }
    blocks.push({
      html: src.slice(re.lastIndex, i),
      line: src.slice(0, re.lastIndex).split('\n').length
    })
    re.lastIndex = i + 1
  }
  return blocks
}

const VOID_OK = new Set(['br', 'img', 'source'])
// Self-closing is legal inside <svg> (foreign content), illegal in HTML.
const SVG_TAGS = new Set(['svg', 'g', 'rect', 'line', 'polygon', 'polyline', 'path',
  'circle', 'ellipse', 'text', 'tspan'])

function checkFile(file, { tags, attrs }, registry) {
  const src = readFileSync(file, 'utf8')
  const out = []
  const add = (line, code, msg) => out.push({ file, line, code, msg })

  const blocks = htmlBlocks(src)
  if (blocks.length === 0) return out // not a post component

  // --- registration -------------------------------------------------------
  const slug = src.match(/slug:\s*'([^']+)'/)?.[1]
  if (!slug) add(1, 'no-slug', 'metadata.slug is missing')
  else if (!registry.includes(`'${slug}'`))
    add(1, 'unregistered', `slug '${slug}' is not in src/posts/index.ts — the post will 404`)
  if (!registry.includes(`from './${basename(file)}'`))
    add(1, 'unimported', `${basename(file)} is not imported in src/posts/index.ts`)

  // --- bilingual ----------------------------------------------------------
  for (const k of ['frenchContent', 'englishContent'])
    if (!src.includes(`const ${k}`)) add(1, 'missing-locale', `${k} is missing — posts are FR + EN, always`)

  for (const { html, line: base } of blocks) {
    const lineOf = (idx) => base + html.slice(0, idx).split('\n').length - 1

    // --- sanitizer allowlist ---------------------------------------------
    for (const t of html.matchAll(/<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g)) {
      const [full, tag, rawAttrs] = t
      const name = tag.toLowerCase()
      const canonical = [...tags].find((a) => a.toLowerCase() === name)
      if (!canonical)
        add(lineOf(t.index), 'stripped-tag',
          `<${tag}> is not in ALLOWED_TAGS — DOMPurify deletes it at render, silently`)
      const attrNames = rawAttrs.replace(/"[^"]*"|'[^']*'/g, '""')
      for (const a of attrNames.matchAll(/([a-zA-Z][a-zA-Z0-9:_.-]*)\s*=/g)) {
        const attr = a[1]
        if (![...attrs].some((x) => x.toLowerCase() === attr.toLowerCase()))
          add(lineOf(t.index), 'stripped-attr',
            `${attr}="…" on <${tag}> is not in ALLOWED_ATTR — DOMPurify deletes it at render, silently`)
      }
      if (full.endsWith('/>') && !VOID_OK.has(name) && !SVG_TAGS.has(name))
        add(lineOf(t.index), 'self-closed', `<${tag}/> self-closes; HTML parsers ignore that — use <${tag}>…</${tag}>`)
    }

    // --- diagram rules (CLAUDE.md §2) ------------------------------------
    for (const svg of html.matchAll(/<svg\b[^>]*class="[^"]*\bdiagram-svg\b[^"]*"[\s\S]*?<\/svg>/g)) {
      const body = svg[0]
      const at = (i) => lineOf(svg.index + i)
      const open = body.slice(0, body.indexOf('>'))
      if (!/role="img"/.test(open)) add(at(0), 'diagram-a11y', 'diagram <svg> is missing role="img"')
      if (!/aria-label="/.test(open))
        add(at(0), 'diagram-a11y', 'diagram <svg> is missing aria-label stating the chart\'s conclusion')

      const grad = body.indexOf('linearGradient')
      if (grad !== -1 && /stop-color="currentColor"/.test(body))
        add(at(grad), 'dead-gradient',
          'linearGradient with stop-color="currentColor" collapses to transparent in Chromium — use fill-opacity')

      for (const c of body.matchAll(/(?:fill|stroke)="(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))"/g))
        add(at(c.index), 'hardcoded-color',
          `${c[1]} will not invert under dark mode — use fill="currentColor" with fill-opacity`)

      const vb = open.match(/viewBox="0 0 (\d+)/)
      const w = vb ? Number(vb[1]) : 800
      for (const f of body.matchAll(/font-size="([\d.]+)"/g)) {
        const px = Number(f[1]) * (800 / w)
        if (px < 13)
          add(at(f.index), 'tiny-font',
            `font-size ${f[1]} renders ~${(px * 0.875).toFixed(1)}px in the prose column — floor is 13 in an 800-wide viewBox`)
      }
    }

    // --- house style ------------------------------------------------------
    const emoji = /[\u{1F300}-\u{1FAFF}]|\u{FE0F}/u.exec(html)
    if (emoji) add(lineOf(emoji.index), 'emoji', 'no emojis (CLAUDE.md §2)')
  }
  return out
}

// ---------------------------------------------------------------------------
const args = process.argv.slice(2)
const registry = readFileSync(REGISTRY, 'utf8')
const lists = allowlist()

const files = args.includes('--all')
  ? readdirSync(resolve(ROOT, 'src/posts')).filter((f) => f.endsWith('.vue')).map((f) => resolve(ROOT, 'src/posts', f))
  : args.filter((f) => /src\/posts\/.*\.vue$/.test(f))

if (files.length === 0) process.exit(0)

const findings = files.flatMap((f) => {
  try { return checkFile(f, lists, registry) } catch (e) {
    return [{ file: f, line: 1, code: 'validator-error', msg: e.message }]
  }
})

if (findings.length === 0) process.exit(0)

const rel = (f) => f.replace(ROOT + '/', '')
for (const f of findings) console.error(`${rel(f.file)}:${f.line}  [${f.code}] ${f.msg}`)
console.error(`\n${findings.length} post rule violation(s). These do not fail the build — they fail silently in the browser.`)
process.exit(2)
