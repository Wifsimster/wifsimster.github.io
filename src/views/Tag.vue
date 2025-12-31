<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
      {{ i18n.t('tags.title') }}: {{ tag }}
    </h1>

    <div v-if="taggedPosts.length > 0">
      <PostList :posts="taggedPosts" />
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-500 dark:text-zinc-400">No posts found for this tag</p>
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
import PostList from '@/components/blog/PostList.vue'

const route = useRoute()
const i18n = useI18n()
const { getPostsByTag } = usePosts()

const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')
const tag = computed(() => route.params.tag as string)

const taggedPosts = computed(() => {
  return getPostsByTag(tag.value, lang.value)
})
</script>
