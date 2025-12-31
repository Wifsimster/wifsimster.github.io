<template>
  <article class="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 dark:border-zinc-700">
    <RouterLink :to="postLink" class="block">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        {{ post.title }}
      </h2>
      <div class="flex items-center text-sm text-gray-500 dark:text-zinc-400 mb-3">
        <time :datetime="post.date">{{ formattedDate }}</time>
      </div>
      <p v-if="post.description" class="text-gray-700 dark:text-zinc-300 mb-4 line-clamp-3">
        {{ post.description }}
      </p>
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-zinc-400 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import type { Post } from '@/utils/posts'
import { formatDate } from '@/utils/posts'

const props = defineProps<{
  post: Post
}>()

const route = useRoute()
const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')

const postLink = computed(() => `${langPrefix.value}/posts/${props.post.slug}`)
const formattedDate = computed(() => formatDate(props.post.date, lang.value))
</script>
