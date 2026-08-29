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
        <div class="relative">
          <input
            :value="searchQuery"
            @input="(e) => setSearchQuery((e.target as HTMLInputElement).value)"
            type="text"
            :placeholder="searchPlaceholder"
            :class="[
              'w-full px-4 py-2 text-sm border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900',
              !searchQuery && selectedTag ? 'pr-24' : 'pr-10'
            ]"
          />
          <div
            v-if="!searchQuery && selectedTag"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 dark:text-zinc-500 pointer-events-none"
          >
            {{ postsCountText }}
          </div>
          <button
            v-if="searchQuery"
            @click="clearSearch"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 rounded text-gray-500 dark:text-zinc-500 hover:text-gray-700 dark:hover:text-zinc-300 transition-colors focus-ring"
            aria-label="Clear search"
          >
            <i class="pi pi-times text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Tag Filters — single scrollable row on mobile, wrapping cloud on larger screens -->
      <div class="mb-6">
        <div class="flex gap-2 flex-nowrap overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
          <button
            v-for="tag in availableTags"
            :key="tag"
            @click="toggleTag(tag)"
            :class="[
              'shrink-0 whitespace-nowrap px-3 py-1.5 text-sm rounded-full transition-colors focus-ring',
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
          class="px-4 py-2 text-sm rounded text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors focus-ring"
        >
          {{ i18n.t('home.clearFilters') }}
        </button>
      </div>

      <div v-if="filteredPosts.length > 0" class="space-y-10">
        <div v-for="yearGroup in postsByYear" :key="yearGroup.year" class="space-y-5">
          <h2 class="flex justify-between items-center text-2xl font-bold text-gray-900 dark:text-zinc-100 border-b border-gray-200 dark:border-zinc-800 pb-2">
            <span>{{ yearGroup.year }}</span>
            <span class="text-sm text-gray-500 dark:text-zinc-400 font-normal">({{ yearGroup.posts.length }})</span>
          </h2>
          <PostList :posts="yearGroup.posts" />
        </div>
      </div>
      <div v-else class="text-center py-12 text-gray-500 dark:text-zinc-400">
        {{ i18n.t('home.noResults') }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { useSearch } from '@/composables/useSearch'
import { getAllTags } from '@/posts'
import PostList from '@/components/blog/PostList.vue'

const i18n = useI18n()
const { posts } = usePosts()
const { searchQuery, setSearchQuery, clearSearch } = useSearch()

const selectedTag = ref<string | null>(null)

const tagCounts = getAllTags()
const availableTags = computed(() => {
  return Object.entries(tagCounts)
    .filter(([, count]) => count > 1)
    .sort(([, countA], [, countB]) => countB - countA)
    .map(([tag]) => tag)
})

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
  clearSearch()
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
  if (!searchQuery.value || !searchQuery.value.trim()) return true
  
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

const postsByYear = computed(() => {
  const grouped = new Map<number, (typeof filteredPosts.value[0])[]>()
  
  filteredPosts.value.forEach(post => {
    const year = new Date(post.date).getFullYear()
    if (!grouped.has(year)) {
      grouped.set(year, [])
    }
    grouped.get(year)!.push(post)
  })
  
  // Convert to array and sort by year (newest first)
  return Array.from(grouped.entries())
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => b.year - a.year)
})

const searchPlaceholder = computed(() => {
  return i18n.t('home.searchPlaceholderCount', { count: String(posts.value.length) })
})

const postsCountText = computed(() => {
  const count = filteredPosts.value.length
  const key = count === 1 ? 'home.postsCount' : 'home.postsCountPlural'
  return i18n.t(key, { count: String(count) })
})
</script>
