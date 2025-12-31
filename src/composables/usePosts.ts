import { computed } from 'vue'
import type { Post } from '@/utils/posts'
import { getAllPosts, getPostBySlug as getPostInfoBySlug, getPostsByTag as getPostsByTagFromRegistry, getAllTags } from '@/posts'
import { useI18n } from './useI18n'

export function usePosts() {
  const i18n = useI18n()
  
  const posts = computed(() => {
    return getAllPosts(i18n.language.value)
  })

  const loading = computed(() => false)

  const loadPosts = (lang: 'fr' | 'en' = 'fr') => {
    // No-op: posts are loaded synchronously from registry
  }

  const getPostBySlug = (slug: string, lang: 'fr' | 'en' = 'fr'): Post | undefined => {
    const postInfo = getPostInfoBySlug(slug)
    if (!postInfo) return undefined
    
    const content = postInfo.getContent(lang)
    return {
      slug: postInfo.metadata.slug,
      title: content.title,
      date: postInfo.metadata.date,
      description: content.description,
      tags: postInfo.metadata.tags,
      html: content.html,
      lang
    }
  }

  const getPostsByTag = (tag: string, lang: 'fr' | 'en' = 'fr'): Post[] => {
    return getPostsByTagFromRegistry(tag, lang)
  }

  const getArchivedPosts = (lang: 'fr' | 'en' = 'fr'): Post[] => {
    return getAllPosts(lang).sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  }

  const latestPosts = computed(() => {
    return getAllPosts(i18n.language.value)
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return dateB - dateA
      })
      .slice(0, 10)
  })

  return {
    posts,
    loading,
    loadPosts,
    getPostBySlug,
    getPostsByTag,
    getArchivedPosts,
    latestPosts
  }
}
