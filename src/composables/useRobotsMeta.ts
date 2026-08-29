import { watchEffect, onScopeDispose } from 'vue'

const META_NAME = 'robots'

function setRobotsMeta(value: string | null) {
  if (typeof document === 'undefined') return

  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${META_NAME}"]`)

  if (value === null) {
    tag?.remove()
    return
  }

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', META_NAME)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

/**
 * Adds `<meta name="robots" content="noindex, nofollow">` while the getter is
 * true, and removes it again otherwise. Used for draft posts and the /drafts
 * page: they are reachable live, but never for search engines.
 *
 * The build-time pre-render already skips drafts entirely, so this only guards
 * the client-rendered SPA shell a JS-executing crawler would see.
 */
export function useNoindex(active: () => boolean) {
  watchEffect(() => {
    setRobotsMeta(active() ? 'noindex, nofollow' : null)
  })

  onScopeDispose(() => setRobotsMeta(null))
}
