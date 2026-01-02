<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :closable="false"
    :dismissableMask="true"
    :closeOnEscape="true"
    :showHeader="false"
    :style="{ width: '90vw', maxWidth: '1200px' }"
    :breakpoints="{ '960px': '95vw', '640px': '98vw' }"
    :pt="{
      root: 'bg-black/80 backdrop-blur-sm border-none',
      content: 'p-0 bg-transparent relative border-none',
      mask: 'bg-black/80'
    }"
    @hide="onHide"
  >
    <button
      @click="visible = false"
      class="absolute top-4 right-4 z-50 text-white hover:text-gray-200 transition-all p-2.5 rounded-full hover:bg-white/20 bg-black/50 backdrop-blur-md shadow-lg hover:scale-110"
      aria-label="Close gallery"
    >
      <i class="pi pi-times text-xl font-semibold"></i>
    </button>
    <Galleria
      v-model:activeIndex="activeIndex"
      :value="images"
      :numVisible="7"
      :circular="true"
      :showItemNavigators="true"
      :showThumbnails="true"
      :responsiveOptions="responsiveOptions"
      containerStyle="max-width: 100%"
      :pt="{
        root: 'w-full border-none',
        content: 'bg-transparent p-4 border-none',
        item: 'flex items-center justify-center p-2',
        itemWrapper: 'border-none',
        thumbnails: { 
          class: '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
          style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }
        },
        thumbnailContainer: { 
          class: 'bg-black/40 backdrop-blur-md rounded-t-lg p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto',
          style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }
        },
        thumbnailWrapper: { 
          class: '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
          style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }
        },
        itemNavigator: 'bg-black/50 hover:bg-black/70 backdrop-blur-sm',
        thumbnailItem: 'border-none',
        thumbnailItemContent: 'border-none'
      }"
    >
      <template #item="slotProps">
        <div class="relative w-full h-full flex items-center justify-center">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </template>
      <template #thumbnail="slotProps">
        <div class="relative group">
          <img
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
            class="w-20 h-20 object-cover rounded-lg cursor-pointer transition-all hover:opacity-90 hover:scale-105 shadow-md"
          />
        </div>
      </template>
    </Galleria>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import Galleria from 'primevue/galleria'
import { onKeyStroke } from '@vueuse/core'
import type { GalleryImage } from '@/types/gallery'

export type { GalleryImage }

const props = defineProps<{
  modelValue: boolean
  images: GalleryImage[]
  initialIndex?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const visible = ref(props.modelValue)
const activeIndex = ref(props.initialIndex ?? 0)

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]

watch(() => props.modelValue, (newVal) => {
  visible.value = newVal
  if (newVal && props.initialIndex !== undefined) {
    activeIndex.value = props.initialIndex
  }
})

watch(visible, (newVal) => {
  emit('update:modelValue', newVal)
})

watch(() => props.initialIndex, (newIndex) => {
  if (newIndex !== undefined && visible.value) {
    activeIndex.value = newIndex
  }
})

const onHide = () => {
  visible.value = false
}

// Keyboard navigation
onKeyStroke('Escape', () => {
  if (visible.value) {
    visible.value = false
  }
})

onKeyStroke('ArrowLeft', () => {
  if (visible.value && props.images.length > 0) {
    activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
  }
})

onKeyStroke('ArrowRight', () => {
  if (visible.value && props.images.length > 0) {
    activeIndex.value = (activeIndex.value + 1) % props.images.length
  }
  })
</script>

<style scoped>
/* Hide scrollbars on ALL elements within Galleria - comprehensive approach */
:deep(.p-galleria),
:deep(.p-galleria *),
:deep(.p-galleria-thumbnails-wrapper),
:deep(.p-galleria-thumbnail-container),
:deep(.p-galleria-thumbnails),
:deep(.p-galleria-thumbnail-wrapper),
:deep(.p-galleria-thumbnail-items-container),
:deep(.p-galleria-thumbnail-items),
:deep(.p-galleria-thumbnail-list),
:deep(.p-galleria-thumbnail-list-container),
:deep([class*="thumbnail"]),
:deep([class*="p-galleria"]) {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

:deep(.p-galleria::-webkit-scrollbar),
:deep(.p-galleria *::-webkit-scrollbar),
:deep(.p-galleria-thumbnails-wrapper::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-container::-webkit-scrollbar),
:deep(.p-galleria-thumbnails::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-wrapper::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-items-container::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-items::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-list::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-list-container::-webkit-scrollbar),
:deep([class*="thumbnail"]::-webkit-scrollbar),
:deep([class*="p-galleria"]::-webkit-scrollbar) {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
  background: transparent !important;
}

/* Also target Dialog content in case scrollbar is there */
:deep(.p-dialog-content),
:deep(.p-dialog-content .p-galleria),
:deep(.p-dialog-content .p-galleria *),
:deep(.p-dialog-content .p-galleria *::-webkit-scrollbar) {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

:deep(.p-dialog-content::-webkit-scrollbar),
:deep(.p-dialog-content .p-galleria::-webkit-scrollbar),
:deep(.p-dialog-content .p-galleria *::-webkit-scrollbar) {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* Prevent scrollbar on hover - target all possible hover states */
:deep(.p-galleria:hover *),
:deep(.p-galleria-thumbnail-container:hover),
:deep(.p-galleria-thumbnails-wrapper:hover) {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

:deep(.p-galleria:hover *::-webkit-scrollbar),
:deep(.p-galleria-thumbnail-container:hover::-webkit-scrollbar),
:deep(.p-galleria-thumbnails-wrapper:hover::-webkit-scrollbar) {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
</style>
