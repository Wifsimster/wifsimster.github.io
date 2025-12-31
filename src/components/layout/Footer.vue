<template>
  <footer class="border-t border-gray-200 dark:border-zinc-800 mt-12 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-sm text-gray-600 dark:text-zinc-400">
          {{ i18n.t('footer.copyright') }} - {{ i18n.t('footer.blog') }}
        </div>
        <div class="flex items-center space-x-6">
          <a
            href="https://github.com/Wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="GitHub"
          >
            <i class="pi pi-github text-xl"></i>
          </a>
          <a
            href="https://twitter.com/wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Twitter"
          >
            <i class="pi pi-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()
</script>
