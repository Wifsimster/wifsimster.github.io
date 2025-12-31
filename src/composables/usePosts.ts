import { ref, computed } from 'vue'
import type { Post } from '@/utils/posts'

const posts = ref<Post[]>([])
const loading = ref(false)

export function usePosts() {
  const loadPosts = async (lang: 'fr' | 'en' = 'fr') => {
    loading.value = true
    try {
      const response = await fetch(`/data/posts-${lang}.json`)
      const data = await response.json()
      posts.value = data.posts || []
    } catch (error) {
      console.error('Error loading posts:', error)
      posts.value = []
    } finally {
      loading.value = false
    }
  }

  const getPostBySlug = (slug: string, lang: 'fr' | 'en' = 'fr') => {
    return posts.value.find(post => post.slug === slug && post.lang === lang)
  }

  const getPostsByTag = (tag: string, lang: 'fr' | 'en' = 'fr') => {
    return posts.value.filter(
      post => post.lang === lang && post.tags?.includes(tag)
    )
  }

  const getArchivedPosts = (lang: 'fr' | 'en' = 'fr') => {
    const filtered = posts.value.filter(post => post.lang === lang)
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  }

  const latestPosts = computed(() => {
    return posts.value
      .filter(post => post.lang === 'fr')
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
