import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagesDir = path.join(__dirname, '..', 'public', 'images')
const srcDir = path.join(__dirname, '..', 'src')

// Get all image files in public/images
function getAllImageFiles() {
  const files = fs.readdirSync(imagesDir)
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext)
  })
}

// Find all image references in source files
function findImageReferences() {
  const referencedImages = new Set()
  
  function searchInDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(entry.name)) {
          searchInDirectory(fullPath)
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (['.vue', '.ts', '.js', '.tsx', '.jsx', '.html', '.md'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8')
            // Match /images/filename or images/filename patterns
            const matches = content.matchAll(/(?:["'`]|\/)(?:images\/)?([^\s"')`]+\.(jpg|jpeg|png|gif|svg|webp))/gi)
            for (const match of matches) {
              const imageName = match[1]
              // Remove any path prefixes
              const basename = path.basename(imageName)
              referencedImages.add(basename)
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  searchInDirectory(srcDir)
  
  // Also check docs directory
  const docsDir = path.join(__dirname, '..', 'docs')
  if (fs.existsSync(docsDir)) {
    searchInDirectory(docsDir)
  }
  
  return referencedImages
}

// Main execution
try {
  console.log('Scanning for unused images...\n')
  
  const allImages = getAllImageFiles()
  const referencedImages = findImageReferences()
  
  console.log(`Total images found: ${allImages.length}`)
  console.log(`Referenced images: ${referencedImages.size}\n`)
  
  const unusedImages = allImages.filter(img => !referencedImages.has(img))
  
  if (unusedImages.length === 0) {
    console.log('✅ No unused images found!')
    process.exit(0)
  }
  
  console.log(`Found ${unusedImages.length} unused images:\n`)
  unusedImages.forEach(img => console.log(`  - ${img}`))
  
  console.log(`\n⚠️  These images will be deleted.`)
  console.log(`Press Ctrl+C to cancel, or wait 3 seconds to proceed...\n`)
  
  // Wait 3 seconds before deletion
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  let deletedCount = 0
  for (const image of unusedImages) {
    const imagePath = path.join(imagesDir, image)
    try {
      fs.unlinkSync(imagePath)
      console.log(`✓ Deleted: ${image}`)
      deletedCount++
    } catch (error) {
      console.error(`✗ Failed to delete ${image}: ${error.message}`)
    }
  }
  
  console.log(`\n✅ Deleted ${deletedCount} unused images`)
  
} catch (error) {
  console.error('Error:', error)
  process.exit(1)
}
