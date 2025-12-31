<template>
  <div>
    <div v-if="postInfo && post">
      <article>
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {{ post.title }}
          </h1>
          <p v-if="post.description" class="text-xl text-gray-600 dark:text-zinc-400 mb-4 subtitle">
            {{ post.description }}
          </p>
          <div class="flex items-center text-sm text-gray-500 dark:text-zinc-400 mb-4">
            <time :datetime="post.date">{{ formattedDate }}</time>
          </div>
          <div v-if="post.tags && post.tags.length > 0" class="mb-6">
            <TagList :tags="post.tags" />
          </div>
        </header>
        <main>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <component :is="postInfo.component" :locale="lang" />
          </div>
        </main>
      </article>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-500 dark:text-zinc-400">Post not found</p>
      <RouterLink :to="`${langPrefix}/`" class="text-primary-600 dark:text-primary-400 hover:underline mt-4 inline-block">
        {{ i18n.t('nav.home') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { formatDate } from '@/utils/posts'
import type { Post } from '@/utils/posts'
import TagList from '@/components/blog/TagList.vue'
import { getPostBySlug as getPostInfoBySlug } from '@/posts'

const route = useRoute()
const i18n = useI18n()
const { getPostBySlug } = usePosts()

const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')
const slug = computed(() => route.params.slug as string)

const postInfo = computed(() => getPostInfoBySlug(slug.value))
const post = computed<Post | undefined>(() => {
  return getPostBySlug(slug.value, lang.value)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  return formatDate(post.value.date, lang.value)
})
</script>
