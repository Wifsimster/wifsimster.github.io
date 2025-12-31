<script setup>
import { onMounted } from 'vue'
import { injectLanguageSwitcher } from './language-switcher.js'

onMounted(() => {
  injectLanguageSwitcher()
  // Retry a few times to ensure DOM is ready
  setTimeout(() => injectLanguageSwitcher(), 100)
  setTimeout(() => injectLanguageSwitcher(), 500)
})
</script>

<template>
  <div></div>
</template>
