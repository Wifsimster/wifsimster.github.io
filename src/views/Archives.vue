<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      {{ i18n.t('archives.title') }}
    </h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      {{ i18n.t('archives.description') }}
    </p>

    <div v-if="loading" class="text-center py-12">
      <i class="pi pi-spin pi-spinner text-4xl text-gray-400"></i>
    </div>
    <div v-else>
      <div v-for="(postsByYear, year) in groupedPosts" :key="year" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{{ year }}</h2>
        <div v-for="(postsByMonth, month) in postsByYear" :key="month" class="mb-8">
          <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">{{ month }}</h3>
          <PostList :posts="postsByMonth" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import PostList from '@/components/blog/PostList.vue'
import type { Post } from '@/utils/posts'

const route = useRoute()
const i18n = useI18n()
const { loadPosts, getArchivedPosts, loading } = usePosts()

const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')

const groupedPosts = computed(() => {
  const posts = getArchivedPosts(lang.value)
  const grouped: Record<string, Record<string, Post[]>> = {}

  posts.forEach(post => {
    const date = new Date(post.date)
    const year = date.getFullYear().toString()
    const monthNames = lang.value === 'fr' 
      ? ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = monthNames[date.getMonth()]

    if (!grouped[year]) {
      grouped[year] = {}
    }
    if (!grouped[year][month]) {
      grouped[year][month] = []
    }
    grouped[year][month].push(post)
  })

  return grouped
})

onMounted(() => {
  loadPosts(lang.value)
})
</script>
