import { readdir, readFile, writeFile, mkdir, copyFile } from 'fs/promises'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import MarkdownIt from 'markdown-it'
import fm from 'front-matter'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

function parseMarkdown(content) {
  const parsed = fm(content)
  const html = md.render(parsed.body)

  return {
    frontMatter: parsed.attributes,
    content: parsed.body,
    html
  }
}

function getSlugFromFilename(filename) {
  return filename.replace(/\.md$/, '')
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')
const docsDir = join(rootDir, 'docs')
const publicDir = join(rootDir, 'public')
const dataDir = join(publicDir, 'data')

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true })
  } catch (error) {
    // Directory might already exist
  }
}

async function processMarkdownFiles(postsDir, lang) {
  const files = await readdir(postsDir)
  const posts = []

  for (const file of files) {
    if (!file.endsWith('.md')) continue

    const filePath = join(postsDir, file)
    const content = await readFile(filePath, 'utf-8')
    const parsed = parseMarkdown(content)

    const slug = getSlugFromFilename(file)
    const post = {
      slug,
      title: parsed.frontMatter.title || '',
      date: parsed.frontMatter.date || '',
      description: parsed.frontMatter.description || '',
      tags: parsed.frontMatter.tags || [],
      content: parsed.content,
      html: parsed.html,
      lang
    }

    posts.push(post)
  }

  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

async function copyImages() {
  const sourceImagesDir = join(docsDir, 'public', 'images')
  const targetImagesDir = join(publicDir, 'images')
  
  await ensureDir(targetImagesDir)

  try {
    const files = await readdir(sourceImagesDir)
    for (const file of files) {
      const sourcePath = join(sourceImagesDir, file)
      const targetPath = join(targetImagesDir, file)
      await copyFile(sourcePath, targetPath)
    }
    console.log(`✓ Copied ${files.length} images`)
  } catch (error) {
    console.warn('Warning: Could not copy images:', error.message)
  }
}

async function copyFavicon() {
  const sourceFavicon = join(docsDir, 'public', 'favicon.svg')
  const targetFavicon = join(publicDir, 'favicon.svg')
  
  try {
    await copyFile(sourceFavicon, targetFavicon)
    console.log('✓ Copied favicon')
  } catch (error) {
    console.warn('Warning: Could not copy favicon:', error.message)
  }
}

async function build() {
  console.log('Building content...')

  await ensureDir(dataDir)
  await ensureDir(publicDir)

  // Process French posts
  const frPostsDir = join(docsDir, 'posts')
  const frPosts = await processMarkdownFiles(frPostsDir, 'fr')
  console.log(`✓ Processed ${frPosts.length} French posts`)

  // Process English posts
  const enPostsDir = join(docsDir, 'en', 'posts')
  const enPosts = await processMarkdownFiles(enPostsDir, 'en')
  console.log(`✓ Processed ${enPosts.length} English posts`)

  // Generate tags index
  const allTags = {}
  ;[...frPosts, ...enPosts].forEach(post => {
    post.tags?.forEach(tag => {
      allTags[tag] = (allTags[tag] || 0) + 1
    })
  })

  // Write JSON files
  await writeFile(
    join(dataDir, 'posts-fr.json'),
    JSON.stringify({ posts: frPosts, tags: allTags }, null, 2)
  )

  await writeFile(
    join(dataDir, 'posts-en.json'),
    JSON.stringify({ posts: enPosts, tags: allTags }, null, 2)
  )

  console.log('✓ Generated JSON data files')

  // Copy images and favicon
  await copyImages()
  await copyFavicon()

  console.log('✓ Build complete!')
}

build().catch(error => {
  console.error('Build failed:', error)
  process.exit(1)
})
