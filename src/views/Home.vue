<template>
  <div>
    <!-- Introduction Section -->
    <section class="mb-16">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {{ i18n.t('home.introTitle') }}
      </h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {{ i18n.t('home.introText') }}
      </p>
    </section>

    <!-- Blog Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {{ i18n.t('home.blogTitle') }}
      </h2>
      <p class="text-base text-gray-600 dark:text-gray-400 mb-6">
        {{ i18n.t('home.blogSubtitle') }}
      </p>
      <div v-if="loading" class="text-center py-12">
        <i class="pi pi-spin pi-spinner text-4xl text-gray-400"></i>
      </div>
      <div v-else-if="blogPosts.length > 0" class="space-y-4">
        <article
          v-for="post in blogPosts"
          :key="post.slug"
          class="group"
        >
          <RouterLink
            :to="`${langPrefix}/posts/${post.slug}`"
            class="flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 rounded-lg transition-colors"
          >
            <time :datetime="post.date" class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap min-w-[100px]">
              {{ formatDate(post.date, lang) }}
            </time>
            <h3 class="text-lg font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
              {{ post.title }}
            </h3>
          </RouterLink>
        </article>
      </div>
      <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
        {{ i18n.t('home.noPosts') || 'No posts available' }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { formatDate } from '@/utils/posts'

const i18n = useI18n()
const { posts, loading, loadPosts } = usePosts()

const lang = computed(() => i18n.language.value)
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')

const blogPosts = computed(() => {
  return posts.value
    .filter(post => post.lang === lang.value)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
    .slice(0, 5)
})

onMounted(() => {
  loadPosts(lang.value)
})
</script>
