<template>
  <section class="prose prose-lg dark:prose-invert max-w-none">
    <div ref="contentRef" v-html="sanitizedHtml" class="post-content"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import DOMPurify from 'dompurify'
import { usePostImages } from '@/composables/usePostImages'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

const props = defineProps<{
  html: string
  onImageClick?: (images: GalleryImage[], index: number) => void
}>()

const contentRef = ref<HTMLDivElement>()

// Sanitize HTML to prevent XSS attacks
const sanitizedHtml = computed(() => {
  if (!props.html) return ''
  return DOMPurify.sanitize(props.html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel']
  })
})

usePostImages(contentRef, (images, index) => {
  if (props.onImageClick) {
    props.onImageClick(images, index)
  }
})
</script>

<style scoped>
.post-content :deep(pre) {
  @apply overflow-x-auto;
}

.post-content :deep(code) {
  @apply font-mono text-sm;
}
</style>
