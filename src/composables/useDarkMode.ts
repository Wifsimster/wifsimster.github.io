import { useDark, useToggle } from '@vueuse/core'
import type { Ref } from 'vue'

export function useDarkMode(): {
  isDark: Ref<boolean>
  toggleDark: () => boolean
} {
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
