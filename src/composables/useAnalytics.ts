/**
 * Privacy-friendly, cookieless "engaged read" beacon for article pages.
 *
 * Fires a single hit to the GoatCounter `/count` endpoint when either:
 *   - the reader has stayed ≥ ENGAGEMENT_DWELL_MS on the page, OR
 *   - the reader has scrolled past ENGAGEMENT_SCROLL_PCT of the article,
 * whichever happens first.
 *
 * Deduped per mount: at most one beacon per navigation. If the reader leaves
 * before the threshold, nothing is sent — that's the "engaged read" metric.
 *
 * Endpoint is configured via the VITE_STATS_URL env var (e.g.
 * https://stats.battistella.ovh/count). If unset (dev), the composable is a
 * no-op. No cookies, no client IDs, no PII.
 */

import { onMounted, onBeforeUnmount } from 'vue'

const ENGAGEMENT_DWELL_MS = 10_000
const ENGAGEMENT_SCROLL_PCT = 50

interface EngagedReadOptions {
  /** Path to report (e.g. `/posts/my-slug` or `/en/posts/my-slug`). */
  path: string
  /** Page title to report. */
  title: string
}

/**
 * Return value from the options getter. Return `null` to suppress the beacon
 * entirely (e.g. when the post failed to load / 404).
 */
type EngagedReadOptionsGetter = () => EngagedReadOptions | null

function getStatsUrl(): string | undefined {
  const url = import.meta.env.VITE_STATS_URL
  if (typeof url !== 'string' || url.length === 0) return undefined
  return url
}

function sendBeacon(statsUrl: string, path: string, title: string): void {
  // GoatCounter accepts GET /count?p=<path>&t=<title>&r=<referrer>.
  // We use navigator.sendBeacon when available (survives tab close),
  // falling back to fetch with keepalive.
  const params = new URLSearchParams({
    p: path,
    t: title,
    // GoatCounter tolerates an empty referrer; we only pass document.referrer
    // when it's same-origin to avoid leaking cross-site referrers.
    r: isSameOriginReferrer(document.referrer) ? document.referrer : '',
    // Cache-buster so intermediaries don't dedupe identical GETs.
    rnd: Math.random().toString(36).slice(2, 10)
  })
  const url = `${statsUrl}?${params.toString()}`

  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      // sendBeacon uses POST; GoatCounter's /count endpoint accepts POST too.
      navigator.sendBeacon(url)
      return
    }
  } catch {
    // fall through to fetch
  }

  try {
    void fetch(url, { method: 'GET', keepalive: true, mode: 'no-cors', credentials: 'omit' })
  } catch {
    // Analytics must never break the page.
  }
}

function isSameOriginReferrer(referrer: string): boolean {
  if (!referrer) return false
  try {
    return new URL(referrer).origin === window.location.origin
  } catch {
    return false
  }
}

function getScrollPercentage(): number {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight <= 0) return 100
  return (window.scrollY / docHeight) * 100
}

/**
 * Registers an "engaged read" beacon for the current article page.
 * Automatically cleaned up on unmount (route change).
 */
export function useEngagedReadBeacon(options: EngagedReadOptionsGetter): void {
  let fired = false
  let dwellTimer: ReturnType<typeof setTimeout> | undefined
  let scrollHandler: (() => void) | undefined

  const fire = () => {
    if (fired) return

    const statsUrl = getStatsUrl()
    if (!statsUrl) {
      fired = true
      return // no-op in dev / when unconfigured
    }

    const payload = options()
    if (!payload) return // suppress (e.g. 404) — keep waiting in case post loads

    fired = true
    sendBeacon(statsUrl, payload.path, payload.title)
  }

  onMounted(() => {
    if (typeof window === 'undefined') return

    dwellTimer = setTimeout(fire, ENGAGEMENT_DWELL_MS)

    scrollHandler = () => {
      if (fired) return
      if (getScrollPercentage() >= ENGAGEMENT_SCROLL_PCT) {
        fire()
      }
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
    // Check once immediately in case the post is shorter than the viewport.
    scrollHandler()
  })

  onBeforeUnmount(() => {
    if (dwellTimer) clearTimeout(dwellTimer)
    if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
  })
}
