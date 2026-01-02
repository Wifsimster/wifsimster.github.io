<template>
  <div class="flex min-h-screen bg-white dark:bg-zinc-900">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <main class="flex-1 p-8 md:p-12 max-w-4xl mx-auto w-full">
        <slot />
      </main>
    </div>
    <TableOfContents v-if="isPostRoute" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './Sidebar.vue'
import TableOfContents from '@/components/blog/TableOfContents.vue'

const route = useRoute()

const isPostRoute = computed(() => {
  return route.name === 'Post' || route.name === 'PostEn'
})
</script>
