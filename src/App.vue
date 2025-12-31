<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-200">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
</script>
