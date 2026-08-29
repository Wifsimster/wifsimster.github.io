<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
      {{ i18n.t('drafts.title') }}
    </h1>
    <p class="text-gray-600 dark:text-zinc-400 mb-8">
      {{ i18n.t('drafts.description') }}
    </p>

    <PostList v-if="drafts.length > 0" :posts="drafts" />
    <p v-else class="text-gray-500 dark:text-zinc-500">
      {{ i18n.t('drafts.empty') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { useNoindex } from '@/composables/useRobotsMeta'
import PostList from '@/components/blog/PostList.vue'

const i18n = useI18n()
const { drafts } = usePosts()

// Unlinked from the navigation and never indexed: this page exists so the
// author can open a work in progress in the real site.
useNoindex(() => true)

watchEffect(() => {
  document.title = `${i18n.t('drafts.title')} | Wifsimster Blog`
})
</script>
