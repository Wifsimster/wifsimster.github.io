<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'flash-esp8266',
  date: '2016-01-13',
  tags: ['ESP8266', 'NodeMCU']
}

const frenchContent: PostContent = {
  title: 'Flash d\'un ESP8266',
  description: 'Guide pour flasher un ESP8266 avec le firmware NodeMCU.',
  html: `<h2>Matériel nécessaire</h2>
<ul>
<li>1 ESP8266</li>
<li>Câble USB vers série (FTDI ou équivalent)</li>
<li>Logiciel de flash (esptool ou NodeMCU Flasher)</li>
</ul>
<h2>Procédure</h2>
<p>[Contenu à compléter selon les détails du post original]</p>`
}

const englishContent: PostContent = {
  title: 'Flashing an ESP8266',
  description: 'Guide to flash an ESP8266 with NodeMCU firmware.',
  html: `<h2>Required Materials</h2>
<ul>
<li>1 ESP8266</li>
<li>USB to serial cable (FTDI or equivalent)</li>
<li>Flash software (esptool or NodeMCU Flasher)</li>
</ul>
<h2>Procedure</h2>
<p>[Content to be completed according to original post details]</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'FlashEsp8266',
  props: {
    locale: {
      type: String as () => 'fr' | 'en',
      required: true
    }
  },
  setup(props) {
    const content = computed(() => {
      return getContent(props.locale)
    })
    return { content }
  },
  template: '<div v-html="content.html"></div>'
})
</script>

<template>
  <div v-html="content.html"></div>
</template>
