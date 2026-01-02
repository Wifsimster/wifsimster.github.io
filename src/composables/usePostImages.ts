import { onMounted, onUnmounted, nextTick, type Ref } from 'vue'
import type { GalleryImage } from '@/types/gallery'
import { groupConsecutiveImageParagraphs } from '@/utils/imageGrouping'

const IMAGE_CLASSES = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 max-w-xs md:max-w-sm mx-auto'
const GROUP_CONTAINER_CLASSES = 'grid grid-cols-2 md:grid-cols-3 gap-4 my-4'
const SINGLE_IMAGE_WRAPPER_CLASSES = 'flex items-center justify-center my-4'
const GROUP_IMAGE_WRAPPER_CLASSES = 'flex items-center justify-center'

/**
 * Creates an image wrapper element with click handler
 */
function createImageWrapper(
  img: HTMLImageElement,
  allImages: GalleryImage[],
  onImageClick: (images: GalleryImage[], index: number) => void,
  isGrouped: boolean = false
): { wrapper: HTMLElement, cleanup: () => void } {
  const imgClone = img.cloneNode(true) as HTMLImageElement
  imgClone.className = isGrouped 
    ? IMAGE_CLASSES 
    : `${IMAGE_CLASSES} block`
  
  const src = imgClone.getAttribute('src') || ''
  const index = allImages.findIndex(img => img.itemImageSrc === src)
  
  const clickHandler = () => {
    onImageClick(allImages, index >= 0 ? index : 0)
  }
  
  imgClone.addEventListener('click', clickHandler)

  const wrapper = document.createElement('div')
  wrapper.className = isGrouped ? GROUP_IMAGE_WRAPPER_CLASSES : SINGLE_IMAGE_WRAPPER_CLASSES
  wrapper.appendChild(imgClone)
  
  return {
    wrapper,
    cleanup: () => {
      imgClone.removeEventListener('click', clickHandler)
    }
  }
}

export function usePostImages(
  containerRef: Ref<HTMLElement | undefined>,
  onImageClick: (images: GalleryImage[], index: number) => void
) {
  const cleanupFunctions: (() => void)[] = []

  onMounted(async () => {
    await nextTick()
    
    if (!containerRef.value) {
      if (import.meta.env.DEV) {
        console.warn('usePostImages: containerRef is not available')
      }
      return
    }

    try {
      const allImages: GalleryImage[] = []
      const imageElements = containerRef.value.querySelectorAll('img')
      
      // Collect all images and create gallery items
      imageElements.forEach((img) => {
        const src = img.getAttribute('src') || ''
        const alt = img.getAttribute('alt') || ''
        
        allImages.push({
          itemImageSrc: src,
          thumbnailImageSrc: src,
          alt: alt
        })
      })

      // Process images to group successive ones
      const paragraphs = containerRef.value.querySelectorAll('p')
      const imageGroups = groupConsecutiveImageParagraphs(paragraphs)

      // Process each group
      imageGroups.forEach((group) => {
        if (group.length === 0) return

        // Create container for the group
        const container = document.createElement('div')
        container.className = GROUP_CONTAINER_CLASSES

        // Move images from paragraphs to container
        group.forEach((p) => {
          const img = p.querySelector('img')
          if (img) {
            const { wrapper, cleanup } = createImageWrapper(img, allImages, onImageClick, true)
            cleanupFunctions.push(cleanup)
            container.appendChild(wrapper)
          }
          
          // Remove the original paragraph if it only contained the image
          if (p.textContent?.trim() === '' || (p.children.length === 1 && p.querySelector('img'))) {
            p.remove()
          } else {
            // Remove just the image from the paragraph
            const img = p.querySelector('img')
            if (img) {
              img.remove()
            }
          }
        })

        // Insert container before the first paragraph of the group (or after if paragraphs were removed)
        if (group[0].parentNode) {
          group[0].parentNode.insertBefore(container, group[0])
        }
      })

      // Handle single images (not in groups)
      const remainingImages = containerRef.value.querySelectorAll('p > img')
      remainingImages.forEach((img) => {
        const imgElement = img as HTMLImageElement
        const { wrapper, cleanup } = createImageWrapper(imgElement, allImages, onImageClick, false)
        cleanupFunctions.push(cleanup)
        
        const parent = imgElement.parentElement
        if (parent) {
          parent.replaceChild(wrapper, imgElement)
          wrapper.appendChild(imgElement)
        }
      })
    } catch (error) {
      console.error('usePostImages: Error processing images', error)
    }
  })

  onUnmounted(() => {
    cleanupFunctions.forEach(cleanup => cleanup())
  })
}