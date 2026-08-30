/**
 * Privacy-friendly, cookieless "engaged read" beacon for article pages.
 *
 * Fires a single `engaged_read` event to Umami when either:
 *   - the reader has stayed ≥ ENGAGEMENT_DWELL_MS on the page, OR
 *   - the reader has scrolled past ENGAGEMENT_SCROLL_PCT of the article,
 * whichever happens first.
 *
 * Deduped per mount: at most one beacon per navigation. If the reader leaves
 * before the threshold, nothing is sent — that's the "engaged read" metric.
 *
 * Umami is loaded from index.html, so there is no endpoint to configure here.
 * The tracker only exists once its script has run: in dev, or if the script is
 * blocked, `window.umami` is undefined and the composable is a no-op.
 *
 * The plain pageview is already sent by the Umami tracker on every navigation.
 * This composable adds the *editorial* metric on top: a read only counts once
 * the reader actually engaged, which a pageview cannot tell you.
 *
 * No cookies, no client IDs, no PII.
 */

import { onMounted, onBeforeUnmount } from 'vue'

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void
    }
  }
}

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

function sendEngagedRead(path: string, title: string): void {
  // The tracker defines window.umami once stats.js has executed. Absent in dev
  // and if the script fails to load — analytics must never break the page.
  const umami = typeof window !== 'undefined' ? window.umami : undefined
  if (!umami || typeof umami.track !== 'function') return

  try {
    umami.track('engaged_read', {
      path,
      title,
      // Only same-origin referrers: we never forward where a reader came from
      // on another site.
      referrer: isSameOriginReferrer(document.referrer) ? document.referrer : ''
    })
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

    const payload = options()
    if (!payload) return // suppress (e.g. 404) — keep waiting in case post loads

    fired = true
    sendEngagedRead(payload.path, payload.title)
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
