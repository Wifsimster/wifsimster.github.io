import { useDark, useToggle } from '@vueuse/core'

export function useDarkMode() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'vueuse-color-scheme',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined
  })

  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark
  }
}
