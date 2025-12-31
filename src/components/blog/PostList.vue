<template>
  <div class="space-y-6">
    <PostCard
      v-for="post in posts"
      :key="post.slug"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import PostCard from './PostCard.vue'
import type { Post } from '@/utils/posts'

defineProps<{
  posts: Post[]
}>()
</script>
