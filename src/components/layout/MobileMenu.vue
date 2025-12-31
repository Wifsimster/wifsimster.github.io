<template>
  <div class="md:hidden border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
    <nav class="px-4 py-3 space-y-2">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="block px-3 py-2 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
        active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()

const navItems = computed(() => {
  const lang = i18n.language.value
  const prefix = lang === 'en' ? '/en' : ''
  
  return [
    { path: prefix || '/', label: i18n.t('nav.home') },
    { path: `${prefix}/archives`, label: i18n.t('nav.archives') }
  ]
})
</script>
