<template>
  <div>
    <div v-if="postInfo && post">
      <div class="mb-6">
        <RouterLink
          :to="`${langPrefix}/`"
          class="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          {{ i18n.t('post.goBack') }}
        </RouterLink>
      </div>
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
          <PostContent 
            v-if="post" 
            :html="post.html" 
            :on-image-click="handleImageClick"
          />
        </main>
      </article>
    </div>
    <div v-else class="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div class="text-center max-w-2xl mx-auto">
        <div class="text-8xl mb-6 inline-block">🔍</div>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
          {{ i18n.t('post.notFound.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 mb-3">
          {{ i18n.t('post.notFound.message') }}
        </p>
        <p class="text-lg text-gray-500 dark:text-zinc-500 mb-8">
          {{ i18n.t('post.notFound.suggestion') }}
        </p>
        <div class="mb-12">
          <RouterLink 
            :to="`${langPrefix}/`" 
            class="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-primary-700 dark:hover:bg-primary-600 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            {{ i18n.t('post.notFound.backHome') }}
          </RouterLink>
        </div>
        <div class="flex justify-center items-center gap-4 flex-wrap">
          <span class="text-3xl inline-block">📝</span>
          <span class="text-3xl inline-block">💻</span>
          <span class="text-3xl inline-block">🚀</span>
          <span class="text-3xl inline-block">✨</span>
        </div>
      </div>
    </div>
    <ImageGallery
      v-model="galleryIsOpen"
      :images="galleryImages"
      :initial-index="galleryCurrentIndex"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { useImageGallery } from '@/composables/useImageGallery'
import { formatDate } from '@/utils/posts'
import type { Post } from '@/utils/posts'
import TagList from '@/components/blog/TagList.vue'
import ImageGallery from '@/components/blog/ImageGallery.vue'
import PostContent from '@/components/blog/PostContent.vue'
import { getPostBySlug as getPostInfoBySlug } from '@/posts'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

const route = useRoute()
const i18n = useI18n()
const { getPostBySlug } = usePosts()
const gallery = useImageGallery()

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

const handleImageClick = (images: GalleryImage[], index: number) => {
  gallery.openGallery(images, index)
}

const galleryImages = computed(() => gallery.images.value)
const galleryCurrentIndex = computed(() => gallery.currentIndex.value)
const galleryIsOpen = computed({
  get: () => gallery.isOpen.value,
  set: (value: boolean) => {
    gallery.isOpen.value = value
  }
})
</script>
