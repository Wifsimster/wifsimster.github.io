import { ref, type Ref } from 'vue'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

export function useImageGallery() {
  const isOpen = ref(false)
  const currentIndex = ref(0)
  const images: Ref<GalleryImage[]> = ref([])

  const openGallery = (imageList: GalleryImage[], index: number = 0) => {
    images.value = imageList
    currentIndex.value = index
    isOpen.value = true
  }

  const closeGallery = () => {
    isOpen.value = false
  }

  const setCurrentIndex = (index: number) => {
    if (index >= 0 && index < images.value.length) {
      currentIndex.value = index
    }
  }

  return {
    isOpen,
    currentIndex,
    images,
    openGallery,
    closeGallery,
    setCurrentIndex
  }
}