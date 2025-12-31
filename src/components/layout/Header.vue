<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-xl font-bold text-gray-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Wifsimster Blog
          </RouterLink>
        </div>
        <nav class="hidden md:flex items-center space-x-6">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            active-class="text-primary-600 dark:text-primary-400 font-semibold"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
        <div class="flex items-center space-x-4">
          <button
            @click="i18n.switchLanguage(i18n.language.value === 'fr' ? 'en' : 'fr')"
            class="px-3 py-1 text-sm text-gray-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {{ i18n.language.value === 'fr' ? 'EN' : 'FR' }}
          </button>
          <button
            @click="darkMode.toggleDark()"
            class="p-2 text-gray-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            :aria-label="darkMode.isDark.value ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i :class="darkMode.isDark.value ? 'pi pi-sun' : 'pi pi-moon'" class="text-lg"></i>
          </button>
        </div>
      </div>
    </div>
    <MobileMenu />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { useDarkMode } from '@/composables/useDarkMode'
import MobileMenu from './MobileMenu.vue'

const route = useRoute()
const i18n = useI18n()
const darkMode = useDarkMode()

const navItems = computed(() => {
  const lang = i18n.language.value
  const prefix = lang === 'en' ? '/en' : ''
  
  return [
    { path: prefix || '/', label: i18n.t('nav.home') },
    { path: `${prefix}/archives`, label: i18n.t('nav.archives') }
  ]
})
</script>
