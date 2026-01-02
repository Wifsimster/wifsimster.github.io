import { ref, type Ref } from 'vue'
import type { GalleryImage } from '@/types/gallery'

export function useImageGallery() {
  const isOpen = ref(false)
  const currentIndex = ref(0)
  const images: Ref<GalleryImage[]> = ref([])

  const openGallery = (imageList: GalleryImage[], index: number = 0) => {
    if (!imageList || imageList.length === 0) {
      if (import.meta.env.DEV) {
        console.warn('useImageGallery: Cannot open gallery with empty image list')
      }
      return
    }
    
    const validIndex = Math.max(0, Math.min(index, imageList.length - 1))
    images.value = imageList
    currentIndex.value = validIndex
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