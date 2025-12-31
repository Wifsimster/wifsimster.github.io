<template>
  <div>
    <div v-if="loading" class="text-center py-12">
      <i class="pi pi-spin pi-spinner text-4xl text-gray-400"></i>
    </div>
    <div v-else-if="post">
      <article>
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {{ post.title }}
          </h1>
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time :datetime="post.date">{{ formattedDate }}</time>
          </div>
          <div v-if="post.tags && post.tags.length > 0" class="mb-6">
            <TagList :tags="post.tags" />
          </div>
        </header>
        <PostContent :html="post.html" />
      </article>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-500 dark:text-gray-400">Post not found</p>
      <RouterLink :to="`${langPrefix}/`" class="text-primary-600 dark:text-primary-400 hover:underline mt-4 inline-block">
        {{ i18n.t('nav.home') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { formatDate } from '@/utils/posts'
import type { Post } from '@/utils/posts'
import PostContent from '@/components/blog/PostContent.vue'
import TagList from '@/components/blog/TagList.vue'

const route = useRoute()
const i18n = useI18n()
const { loadPosts, getPostBySlug, loading } = usePosts()

const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')
const slug = computed(() => route.params.slug as string)

const post = ref<Post | undefined>(undefined)

onMounted(async () => {
  await loadPosts(lang.value)
  post.value = getPostBySlug(slug.value, lang.value)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  return formatDate(post.value.date, lang.value)
})
</script>
