<template>
  <section class="prose prose-lg dark:prose-invert max-w-none">
    <div v-html="html" class="post-content"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>

<style scoped>
@reference "../../styles/main.css";

.post-content :deep(img) {
  @apply max-w-full h-auto;
}

.post-content :deep(pre) {
  @apply overflow-x-auto;
}

.post-content :deep(code) {
  @apply font-mono text-sm;
}
</style>
