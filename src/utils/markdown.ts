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
  [key: string]: any
}

export interface ParsedMarkdown {
  frontMatter: FrontMatter
  content: string
  html: string
}

export function parseMarkdown(content: string): ParsedMarkdown {
  const parsed = fm<FrontMatter>(content)
  const html = md.render(parsed.body)

  return {
    frontMatter: parsed.attributes,
    content: parsed.body,
    html
  }
}

export function markdownToHtml(markdown: string): string {
  return md.render(markdown)
}
