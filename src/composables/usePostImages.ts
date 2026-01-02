import { onMounted, nextTick, type Ref } from 'vue'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

export function usePostImages(
  containerRef: Ref<HTMLElement | undefined>,
  onImageClick: (images: GalleryImage[], index: number) => void
) {
  onMounted(async () => {
    await nextTick()
    if (!containerRef.value) return

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
    const imageGroups: HTMLElement[][] = []
    let currentGroup: HTMLElement[] = []

    paragraphs.forEach((p) => {
      const img = p.querySelector('img')
      if (img) {
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

      // Move images from paragraphs to container
      group.forEach((p) => {
        const img = p.querySelector('img')
        if (img) {
          // Remove the paragraph wrapper
          const imgClone = img.cloneNode(true) as HTMLImageElement
          
          // Add styling and click handler
          imgClone.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 max-w-xs md:max-w-sm mx-auto'
          
          // Find index in allImages
          const src = imgClone.getAttribute('src') || ''
          const index = allImages.findIndex(img => img.itemImageSrc === src)
          
          imgClone.addEventListener('click', () => {
            onImageClick(allImages, index >= 0 ? index : 0)
          })

          const wrapper = document.createElement('div')
          wrapper.className = 'flex items-center justify-center'
          wrapper.appendChild(imgClone)
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
      const src = img.getAttribute('src') || ''
      const index = allImages.findIndex(i => i.itemImageSrc === src)
      
      // Update styling
      const imgElement = img as HTMLImageElement
      imgElement.className = 'w-full h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:scale-105 max-w-xs md:max-w-sm mx-auto block'
      
      // Wrap in container
      const wrapper = document.createElement('div')
      wrapper.className = 'flex items-center justify-center my-4'
      const parent = imgElement.parentElement
      if (parent) {
        parent.replaceChild(wrapper, imgElement)
        wrapper.appendChild(imgElement)
      }

      imgElement.addEventListener('click', () => {
        onImageClick(allImages, index >= 0 ? index : 0)
      })
    })
  })
}