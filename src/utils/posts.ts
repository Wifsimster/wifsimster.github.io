export interface PostMetadata {
  slug: string
  date: string
  tags?: string[]
}

export interface PostContent {
  title: string
  description?: string
  html: string
}

export interface Post {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
  html: string
  lang: 'fr' | 'en'
}

export interface PostsData {
  posts: Post[]
  tags: Record<string, number>
}

export interface PostComponent {
  metadata: PostMetadata
  getContent: (locale: 'fr' | 'en') => PostContent
}

export function formatDate(dateString: string, lang: 'fr' | 'en' = 'fr'): string {
  const date = new Date(dateString)
  if (lang === 'fr') {
    // Format dd/MM/yyyy for French
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  } else {
    // Format MM/dd/yyyy for English
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }
}

export function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '')
}

/**
 * Sorts posts by date
 * @param posts - Array of posts to sort
 * @param order - Sort order: 'desc' for newest first (default), 'asc' for oldest first
 * @returns Sorted array of posts
 */
export function sortPostsByDate(posts: Post[], order: 'asc' | 'desc' = 'desc'): Post[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}