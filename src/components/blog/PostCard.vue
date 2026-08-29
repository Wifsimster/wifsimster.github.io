<template>
  <article class="bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md border border-gray-200/80 dark:border-zinc-700/80 hover:border-primary-300/70 dark:hover:border-primary-600/50 transition-[box-shadow,border-color]">
    <RouterLink :to="postLink" class="block p-5 sm:p-6 rounded-lg focus-ring">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        {{ post.title }}
      </h2>
      <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-zinc-400 mb-3">
        <span
          v-if="post.draft"
          class="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300"
        >
          {{ i18n.t('post.draft.badge') }}
        </span>
        <time :datetime="post.date">{{ formattedDate }}</time>
        <span class="text-gray-300 dark:text-zinc-600">|</span>
        <span>{{ i18n.t('post.readingTime', { min: String(readingTime) }) }}</span>
      </div>
      <p v-if="excerpt" class="text-gray-700 dark:text-zinc-300 mb-4 line-clamp-2">
        {{ excerpt }}
      </p>
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Post } from '@/utils/posts'
import { formatDate, estimateReadingTime } from '@/utils/posts'
import { useI18n } from '@/composables/useI18n'

const props = defineProps<{
  post: Post
}>()

const i18n = useI18n()

const postLink = computed(() => `${i18n.langPrefix.value}/posts/${props.post.slug}`)
const formattedDate = computed(() => formatDate(props.post.date, i18n.language.value))
const readingTime = computed(() => estimateReadingTime(props.post.html, i18n.language.value))

// Older posts have no description — derive a short excerpt from the body instead.
const excerpt = computed(() => {
  if (props.post.description) return props.post.description
  const text = props.post.html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!text) return ''
  return text.length > 180 ? text.slice(0, 180).replace(/\S+$/, '').trim() + '…' : text
})
</script>
