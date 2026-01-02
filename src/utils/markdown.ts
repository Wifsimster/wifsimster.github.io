/// <reference types="vite/client" />

import MarkdownIt from 'markdown-it'
import fm from 'front-matter'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export interface FrontMatter {
  title: string
  date: string
  description?: string
  tags?: string[]
  [key: string]: unknown
}

export interface ParsedMarkdown {
  frontMatter: FrontMatter
  content: string
  html: string
}

/**
 * Parses markdown content with front matter
 * @param content - The markdown content string to parse
 * @returns Parsed markdown with front matter, content, and HTML
 * @throws Error if parsing fails
 */
export function parseMarkdown(content: string): ParsedMarkdown {
  if (!content || typeof content !== 'string') {
    const error = new Error('parseMarkdown: Content must be a non-empty string')
    if (import.meta.env.DEV) {
      console.error(error.message, { content })
    }
    throw error
  }

  try {
    const parsed = fm<FrontMatter>(content)
    const html = md.render(parsed.body)

    return {
      frontMatter: parsed.attributes,
      content: parsed.body,
      html
    }
  } catch (error) {
    const errorMessage = error instanceof Error 
      ? `Failed to parse markdown: ${error.message}`
      : 'Failed to parse markdown content'
    
    if (import.meta.env.DEV) {
      console.error('parseMarkdown error:', error)
    }
    throw new Error(errorMessage)
  }
}

/**
 * Converts markdown content to HTML
 * @param markdown - The markdown string to convert
 * @returns HTML string representation of the markdown
 * @throws Error if conversion fails
 */
export function markdownToHtml(markdown: string): string {
  if (!markdown || typeof markdown !== 'string') {
    if (import.meta.env.DEV) {
      console.warn('markdownToHtml: Invalid markdown provided, returning empty string')
    }
    return ''
  }

  try {
    return md.render(markdown)
  } catch (error) {
    const errorMessage = error instanceof Error
      ? `Failed to convert markdown to HTML: ${error.message}`
      : 'Failed to convert markdown to HTML'
    
    if (import.meta.env.DEV) {
      console.error('markdownToHtml error:', error)
    }
    throw new Error(errorMessage)
  }
}
