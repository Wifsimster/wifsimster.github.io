/// <reference types="vite/client" />

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

/**
 * Formats a date string according to the specified language
 * @param dateString - The date string to format (ISO format or any valid date string)
 * @param lang - Language for formatting: 'fr' for French (dd/MM/yyyy), 'en' for English (MM/dd/yyyy)
 * @returns Formatted date string, or the original string if the date is invalid
 */
export function formatDate(dateString: string, lang: 'fr' | 'en' = 'fr'): string {
  if (!dateString || typeof dateString !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`formatDate: Invalid dateString provided: ${dateString}`)
    }
    return dateString || ''
  }

  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    if (import.meta.env.DEV) {
      console.warn(`formatDate: Invalid date string: ${dateString}`)
    }
    return dateString
  }

  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

/**
 * Extracts a slug from a filename by removing the .md extension
 * @param filename - The filename to extract the slug from
 * @returns The slug without the .md extension
 */
export function getSlugFromFilename(filename: string): string {
  if (!filename || typeof filename !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`getSlugFromFilename: Invalid filename provided: ${filename}`)
    }
    return filename || ''
  }
  return filename.replace(/\.md$/, '')
}

/**
 * Sorts posts by date in ascending or descending order
 * @param posts - Array of posts to sort
 * @param order - Sort order: 'desc' for newest first (default), 'asc' for oldest first
 * @returns Sorted array of posts (original array is not modified)
 */
export function sortPostsByDate(posts: Post[], order: 'asc' | 'desc' = 'desc'): Post[] {
  if (!Array.isArray(posts)) {
    if (import.meta.env.DEV) {
      console.warn('sortPostsByDate: Invalid posts array provided')
    }
    return []
  }

  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    // Handle invalid dates by placing them at the end
    if (isNaN(dateA) && isNaN(dateB)) return 0
    if (isNaN(dateA)) return 1
    if (isNaN(dateB)) return -1

    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}