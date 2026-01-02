import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Language } from '@/types/i18n'
import { translations } from '@/i18n/translations'

export function useI18n() {
  const route = useRoute()
  const router = useRouter()

  const language = computed(() => {
    const path = route.path
    if (path.startsWith('/en')) {
      return 'en'
    }
    return 'fr'
  })

  const langPrefix = computed(() => language.value === 'en' ? '/en' : '')

  const switchLanguage = (lang: Language) => {
    const currentPath = route.path
    let newPath = currentPath

    if (lang === 'en') {
      if (!currentPath.startsWith('/en')) {
        newPath = '/en' + (currentPath === '/' ? '' : currentPath)
      }
    } else {
      if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace('/en', '') || '/'
      }
    }

    router.push(newPath)
  }

  const t = (key: string, params?: Record<string, string>) => {
    const langTranslations = translations[language.value]
    if (!langTranslations) {
      if (import.meta.env.DEV) {
        console.warn(`Language "${language.value}" not found in translations`)
      }
      return key
    }

    let text = langTranslations[key] || key
    
    if (params) {
      Object.keys(params).forEach(param => {
        if (!text.includes(`{${param}}`)) {
          if (import.meta.env.DEV) {
            console.warn(`Parameter "${param}" not found in translation key "${key}"`)
          }
        }
        text = text.replace(`{${param}}`, params[param])
      })
    }
    
    return text
  }

  return {
    language,
    langPrefix,
    switchLanguage,
    t
  }
}
