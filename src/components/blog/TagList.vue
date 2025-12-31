<template>
  <div class="flex flex-wrap gap-2">
    <RouterLink
      v-for="tag in tags"
      :key="tag"
      :to="`${langPrefix}/tags/${tag}`"
      class="text-sm px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
    >
      {{ tag }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  tags: string[]
}>()

const route = useRoute()
const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')
</script>
