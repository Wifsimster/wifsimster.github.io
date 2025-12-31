<template>
  <div class="flex min-h-screen bg-white dark:bg-gray-900">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <main class="flex-1 p-8 md:p-12 max-w-4xl mx-auto w-full">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'
</script>
