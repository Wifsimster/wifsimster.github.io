<template>
  <aside class="hidden lg:flex lg:flex-col w-80 border-r border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 sticky top-0 h-screen">
    <div class="flex-1 overflow-y-auto p-6">
      <!-- Top Section: Name and Theme Toggles -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          <span class="text-lg font-semibold text-gray-900 dark:text-zinc-100">Damien BATTISTELLA</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="i18n.switchLanguage(lang === 'fr' ? 'en' : 'fr')"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center text-xs font-medium text-gray-700 dark:text-zinc-300"
            :aria-label="lang === 'fr' ? 'Switch to English' : 'Passer en français'"
          >
            {{ lang === 'fr' ? 'EN' : 'FR' }}
          </button>
          <button
            @click="darkMode.toggleDark()"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center"
            :aria-label="darkMode.isDark.value ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i :class="darkMode.isDark.value ? 'pi pi-moon' : 'pi pi-sun'" class="text-sm text-gray-700 dark:text-zinc-300"></i>
          </button>
        </div>
      </div>

      <hr class="border-gray-200 dark:border-zinc-800 mb-6" />

      <!-- About Me Section -->
      <div class="mb-6">
        <h2 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('sidebar.aboutMe') }}
        </h2>
        <p class="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
          <span v-html="aboutMeTextWithHighlight"></span>
        </p>
      </div>

      <hr class="border-gray-200 dark:border-zinc-800 mb-6" />

      <!-- Navigation Links -->
      <nav class="space-y-1 mb-6">
        <RouterLink
          :to="i18n.langPrefix.value || '/'"
          class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          active-class="bg-gray-100 dark:bg-zinc-800 text-primary-600 dark:text-primary-400"
        >
          <i class="pi pi-file text-base"></i>
          <span>{{ i18n.t('nav.blog') }}</span>
        </RouterLink>
        <a
          href="https://cv.battistella.ovh/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
        >
          <i class="pi pi-user text-base"></i>
          <span>{{ i18n.t('sidebar.aboutMe') }}</span>
        </a>
      </nav>

      <hr class="border-gray-200 dark:border-zinc-800 mb-6" />

      <!-- Stay Connected Section -->
      <div>
        <h2 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('sidebar.stayConnected') }}
        </h2>
        <div class="space-y-1">
          <a
            href="https://github.com/Wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-github text-base"></i>
            <span>{{ i18n.t('sidebar.github') }}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/damien-battistella-💻-67964115"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-linkedin text-base"></i>
            <span>{{ i18n.t('sidebar.linkedin') }}</span>
          </a>
          <a
            href="https://x.com/Wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-twitter text-base"></i>
            <span>{{ i18n.t('sidebar.x') }}</span>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { useDarkMode } from '@/composables/useDarkMode'

const i18n = useI18n()
const darkMode = useDarkMode()

const lang = computed(() => i18n.language.value)

const aboutMeTextWithHighlight = computed(() => {
  const text = i18n.t('sidebar.aboutMeText')
  return text.replace('Damien BATTISTELLA', '<span class="text-primary-600 dark:text-primary-400">Damien BATTISTELLA</span>')
})
</script>
