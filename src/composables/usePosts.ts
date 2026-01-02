import { computed } from 'vue'
import type { Post } from '@/utils/posts'
import type { Language } from '@/types/i18n'
import { getAllPosts, getPostBySlug as getPostInfoBySlug, getPostsByTag as getPostsByTagFromRegistry } from '@/posts'
import { sortPostsByDate } from '@/utils/posts'
import { useI18n } from './useI18n'

export function usePosts() {
  const i18n = useI18n()
  
  const posts = computed(() => {
    return getAllPosts(i18n.language.value)
  })

  const getPostBySlug = (slug: string, lang?: Language): Post | undefined => {
    if (!slug) {
      if (import.meta.env.DEV) {
        console.warn('usePosts: getPostBySlug called with empty slug')
      }
      return undefined
    }
    
    const targetLang = lang || i18n.language.value
    const postInfo = getPostInfoBySlug(slug)
    
    if (!postInfo) {
      if (import.meta.env.DEV) {
        console.warn(`usePosts: Post with slug "${slug}" not found`)
      }
      return undefined
    }
    
    const content = postInfo.getContent(targetLang)
    return {
      slug: postInfo.metadata.slug,
      title: content.title,
      date: postInfo.metadata.date,
      description: content.description,
      tags: postInfo.metadata.tags,
      html: content.html,
      lang: targetLang
    }
  }

  const getPostsByTag = (tag: string, lang?: Language): Post[] => {
    const targetLang = lang || i18n.language.value
    return getPostsByTagFromRegistry(tag, targetLang)
  }

  const getArchivedPosts = (lang?: Language): Post[] => {
    const targetLang = lang || i18n.language.value
    return sortPostsByDate(getAllPosts(targetLang))
  }

  const latestPosts = computed(() => {
    return sortPostsByDate(getAllPosts(i18n.language.value)).slice(0, 10)
  })

  return {
    posts,
    getPostBySlug,
    getPostsByTag,
    getArchivedPosts,
    latestPosts
  }
}
