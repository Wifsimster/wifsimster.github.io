export function injectLanguageSwitcher() {
  if (typeof window === 'undefined') return

  const createSwitcher = () => {
    const actions = document.querySelector('.VPNavBarActions')
    if (!actions) return false

    // Check if already exists
    if (actions.querySelector('.vp-locale-switch')) return true

    const isEnglish = window.location.pathname.startsWith('/en')
    const currentLocale = isEnglish ? 'EN' : 'FR'

    const switcher = document.createElement('div')
    switcher.className = 'vp-locale-switch'
    switcher.innerHTML = `
      <button class="vp-locale-switch-button" aria-label="${currentLocale}">
        <span class="vp-locale-switch-label">${currentLocale}</span>
        <svg class="vp-locale-switch-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </button>
      <div class="vp-locale-switch-dropdown" style="display: none;">
        <a href="/" class="vp-locale-switch-item ${!isEnglish ? 'active' : ''}">Français</a>
        <a href="/en/" class="vp-locale-switch-item ${isEnglish ? 'active' : ''}">English</a>
      </div>
    `

    const button = switcher.querySelector('.vp-locale-switch-button')
    const dropdown = switcher.querySelector('.vp-locale-switch-dropdown')

    button.addEventListener('click', (e) => {
      e.stopPropagation()
      const isVisible = dropdown.style.display !== 'none'
      dropdown.style.display = isVisible ? 'none' : 'block'
    })

    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        dropdown.style.display = 'none'
      }
    })

    // Insert before dark mode toggle
    const darkToggle = actions.querySelector('.VPNavBarAppearance')
    if (darkToggle) {
      actions.insertBefore(switcher, darkToggle)
    } else {
      actions.appendChild(switcher)
    }

    return true
  }

  // Try multiple times
  if (!createSwitcher()) {
    setTimeout(() => {
      if (!createSwitcher()) {
        setTimeout(() => createSwitcher(), 500)
      }
    }, 100)
  }
}
