<template>
  <div class="max-w-3xl mx-auto">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-2">
        {{ i18n.t('privacy.title') }}
      </h1>
      <p class="text-sm text-gray-500 dark:text-zinc-400">
        {{ i18n.t('privacy.lastUpdated') }}
      </p>
    </header>

    <article class="prose dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-zinc-300 mb-8">
        {{ i18n.t('privacy.intro') }}
      </p>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('privacy.analyticsTitle') }}
        </h2>
        <p class="text-gray-700 dark:text-zinc-300 leading-relaxed">
          {{ i18n.t('privacy.analyticsBody') }}
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('privacy.legalBasisTitle') }}
        </h2>
        <p class="text-gray-700 dark:text-zinc-300 leading-relaxed">
          {{ i18n.t('privacy.legalBasisBody') }}
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('privacy.rightsTitle') }}
        </h2>
        <p class="text-gray-700 dark:text-zinc-300 leading-relaxed">
          {{ i18n.t('privacy.rightsBody') }}
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('privacy.thirdPartyTitle') }}
        </h2>
        <p class="text-gray-700 dark:text-zinc-300 leading-relaxed">
          {{ i18n.t('privacy.thirdPartyBody') }}
        </p>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()

watchEffect(() => {
  document.title = `${i18n.t('privacy.title')} | Wifsimster Blog`
})
</script>
