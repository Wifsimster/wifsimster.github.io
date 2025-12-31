<template>
  <Layout>
    <template #layout-top>
      <LanguageSwitchClient />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LanguageSwitchClient from './components/LanguageSwitchClient.vue'

// #region agent log
console.log('[DEBUG] Layout.vue script setup', { hasLanguageSwitchClient: !!LanguageSwitchClient, hasDefaultTheme: !!DefaultTheme })
fetch('http://127.0.0.1:7244/ingest/25df5bb8-6b26-448f-93cb-c2dbf83f83f2',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'theme/Layout.vue:12',message:'Layout component script setup',data:{hasLanguageSwitchClient:!!LanguageSwitchClient,hasLayout:!!DefaultTheme.Layout},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
// #endregion

const { Layout } = DefaultTheme
</script>
