<template>
  <div>
    <!-- Introduction Section -->
    <section class="mb-4">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
        {{ i18n.t('home.introTitle') }}
      </h1>
      <p class="text-lg text-gray-700 dark:text-zinc-300 mb-4 leading-relaxed">
        {{ i18n.t('home.introText') }}
      </p>
    </section>

    <!-- Blog Section -->
    <section class="mb-16">
      <!-- Search Input -->
      <div class="mb-6">
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="i18n.t('home.searchPlaceholder')"
          class="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
        />
      </div>

      <!-- Tag Filters -->
      <div class="mb-6">
        <p class="text-sm text-gray-600 dark:text-zinc-400 mb-3">
          {{ i18n.t('home.filterByTag') }}
        </p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tag in availableTags"
            :key="tag"
            @click="toggleTag(tag)"
            :class="[
              'px-3 py-1 text-sm rounded-full transition-colors',
              selectedTag === tag
                ? 'bg-primary-600 dark:bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300'
            ]"
          >
            {{ tag }} ({{ tagCounts[tag] }})
          </button>
        </div>
      </div>

      <!-- Clear Filters Button -->
      <div v-if="hasActiveFilters" class="mb-6">
        <button
          @click="clearFilters"
          class="px-4 py-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          {{ i18n.t('home.clearFilters') }}
        </button>
      </div>

      <div v-if="filteredPosts.length > 0" class="space-y-4">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="group"
        >
          <RouterLink
            :to="`${langPrefix}/posts/${post.slug}`"
            class="flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 p-3 rounded-lg transition-colors"
          >
            <time :datetime="post.date" class="text-sm text-gray-500 dark:text-zinc-400 whitespace-nowrap min-w-[100px]">
              {{ formatDate(post.date, lang) }}
            </time>
            <h3 class="text-lg font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
              {{ post.title }}
            </h3>
          </RouterLink>
        </article>
      </div>
      <div v-else class="text-center py-12 text-gray-500 dark:text-zinc-400">
        {{ i18n.t('home.noResults') }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { formatDate } from '@/utils/posts'
import { getAllTags } from '@/posts'

const i18n = useI18n()
const { posts } = usePosts()

const lang = computed(() => i18n.language.value)
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')

const searchQuery = ref('')
const selectedTag = ref<string | null>(null)

const tagCounts = getAllTags()
const availableTags = computed(() => Object.keys(tagCounts).sort())

const hasActiveFilters = computed(() => {
  return searchQuery.value.trim() !== '' || selectedTag.value !== null
})

const toggleTag = (tag: string) => {
  if (selectedTag.value === tag) {
    selectedTag.value = null
  } else {
    selectedTag.value = tag
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedTag.value = null
}

const stripHtml = (html: string): string => {
  if (typeof document === 'undefined') {
    // Fallback for SSR: use regex to remove HTML tags
    return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
  }
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

const matchesSearch = (post: typeof posts.value[0]): boolean => {
  if (!searchQuery.value.trim()) return true
  
  const query = searchQuery.value.toLowerCase().trim()
  const title = post.title.toLowerCase()
  const description = post.description?.toLowerCase() || ''
  const content = stripHtml(post.html).toLowerCase()
  
  return title.includes(query) || description.includes(query) || content.includes(query)
}

const matchesTag = (post: typeof posts.value[0]): boolean => {
  if (!selectedTag.value) return true
  return post.tags?.includes(selectedTag.value) || false
}

const filteredPosts = computed(() => {
  return posts.value
    .filter(post => matchesSearch(post) && matchesTag(post))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
})
</script>
