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
          <div ref="postContentRef" class="prose prose-lg dark:prose-invert max-w-none">
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
    <ImageGallery
      v-model="galleryIsOpen"
      :images="galleryImages"
      :initial-index="galleryCurrentIndex"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { useImageGallery } from '@/composables/useImageGallery'
import { formatDate } from '@/utils/posts'
import type { Post } from '@/utils/posts'
import TagList from '@/components/blog/TagList.vue'
import ImageGallery from '@/components/blog/ImageGallery.vue'
import { getPostBySlug as getPostInfoBySlug } from '@/posts'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

const route = useRoute()
const i18n = useI18n()
const { getPostBySlug } = usePosts()
const gallery = useImageGallery()
const postContentRef = ref<HTMLElement>()

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

const processImages = async () => {
  await nextTick()
  // Wait for the component to fully render
  await new Promise(resolve => setTimeout(resolve, 300))
  if (!postContentRef.value) return

  // Check if already processed
  if (postContentRef.value.hasAttribute('data-images-processed')) return
  postContentRef.value.setAttribute('data-images-processed', 'true')

  const allImages: GalleryImage[] = []
  const imageElements = Array.from(postContentRef.value.querySelectorAll('img'))
  
  // Collect all images and create gallery items
  imageElements.forEach((img) => {
    const src = img.getAttribute('src') || ''
    const alt = img.getAttribute('alt') || ''
    
    if (src && !(img as any).__galleryProcessed) {
      allImages.push({
        itemImageSrc: src,
        thumbnailImageSrc: src,
        alt: alt
      })
    }
  })

  if (allImages.length === 0) return

  // Process images to group successive ones
  const paragraphs = Array.from(postContentRef.value.querySelectorAll('p'))
  const imageGroups: HTMLElement[][] = []
  let currentGroup: HTMLElement[] = []

  paragraphs.forEach((p) => {
    const img = p.querySelector('img')
    if (img && !(img as any).__galleryProcessed) {
      currentGroup.push(p as HTMLElement)
    } else {
      if (currentGroup.length > 0) {
        imageGroups.push([...currentGroup])
        currentGroup = []
      }
    }
  })

  // Add last group if exists
  if (currentGroup.length > 0) {
    imageGroups.push(currentGroup)
  }

  // Process each group
  imageGroups.forEach((group) => {
    if (group.length === 0) return

    // Create container for the group
    const container = document.createElement('div')
    container.className = 'grid grid-cols-2 md:grid-cols-3 gap-4 my-4'

    // Store reference to first paragraph for insertion
    const firstParagraph = group[0]
    const parent = firstParagraph.parentElement
    if (!parent) return

    const imagesToMove: { img: HTMLImageElement, index: number }[] = []

    // Collect images from paragraphs
    group.forEach((p) => {
      const img = p.querySelector('img')
      if (img && !(img as any).__galleryProcessed) {
        const src = img.getAttribute('src') || ''
        const index = allImages.findIndex(i => i.itemImageSrc === src)
        imagesToMove.push({ img, index })
        ;(img as any).__galleryProcessed = true
      }
    })

    // Create image elements in the container
    imagesToMove.forEach(({ img, index }) => {
      const imgClone = img.cloneNode(true) as HTMLImageElement
      imgClone.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 max-w-xs md:max-w-sm mx-auto'
      
      imgClone.addEventListener('click', () => {
        gallery.openGallery(allImages, index >= 0 ? index : 0)
      })

      const wrapper = document.createElement('div')
      wrapper.className = 'flex items-center justify-center'
      wrapper.appendChild(imgClone)
      container.appendChild(wrapper)
    })

    // Insert container before the first paragraph
    parent.insertBefore(container, firstParagraph)

    // Remove the original paragraphs (they only contained images)
    group.forEach((p) => {
      if (p.parentElement && p.querySelector('img')) {
        p.remove()
      }
    })
  })

  // Handle single images (not in groups)
  const remainingImages = Array.from(postContentRef.value.querySelectorAll('p > img'))
  remainingImages.forEach((img) => {
    if ((img as any).__galleryProcessed) return
    ;(img as any).__galleryProcessed = true

    const src = img.getAttribute('src') || ''
    if (!src) return
    
    const index = allImages.findIndex(i => i.itemImageSrc === src)
    
    // Update styling
    const imgElement = img as HTMLImageElement
    imgElement.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 max-w-xs md:max-w-sm mx-auto block'
    
    // Wrap in container
    const wrapper = document.createElement('div')
    wrapper.className = 'flex items-center justify-center my-4'
    const parent = imgElement.parentElement
    if (parent && parent.tagName === 'P') {
      parent.insertBefore(wrapper, imgElement)
      wrapper.appendChild(imgElement)
      
      // If paragraph is now empty, remove it
      if (parent.textContent?.trim() === '' && parent.children.length === 0) {
        parent.remove()
      }
    }

    imgElement.addEventListener('click', () => {
      gallery.openGallery(allImages, index >= 0 ? index : 0)
    })
  })
}

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

watch([postInfo, post], () => {
  if (postInfo.value && post.value) {
    // Remove processed attribute to allow reprocessing
    if (postContentRef.value) {
      postContentRef.value.removeAttribute('data-images-processed')
    }
    processImages()
  }
}, { immediate: true })

onMounted(() => {
  processImages()
})
</script>
