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
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', options)
}

export function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '')
}
