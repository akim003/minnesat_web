import fs from "fs/promises"
import path from "path"
import sharp from "sharp"

// Directories to process
const directories = [
  "public",
  "public/legacy",
  "public/legacy/2022",
  "public/legacy/2023",
  "public/legacy/2024",
  "public/legacy/2025",
  "public/sponsors",
  "public/alumni/logos",
  "public/home",
]

// File extensions to convert
const extensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]

// Function to convert a file to WebP
async function convertToWebP(filePath) {
  try {
    const fileExt = path.extname(filePath)
    if (!extensions.includes(fileExt)) return

    const outputPath = filePath.replace(fileExt, ".webp")

    // Skip if WebP version already exists
    try {
      await fs.access(outputPath)
      console.log(`WebP already exists for ${filePath}, skipping...`)
      return
    } catch (e) {
      // File doesn't exist, continue with conversion
    }

    console.log(`Converting ${filePath} to WebP...`)

    await sharp(filePath)
      .webp({ quality: 80 }) // Adjust quality as needed (80 is a good balance)
      .toFile(outputPath)

    // Get file sizes for comparison
    const originalSize = (await fs.stat(filePath)).size
    const webpSize = (await fs.stat(outputPath)).size
    const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(2)

    console.log(`✅ Converted ${path.basename(filePath)} to WebP (${savings}% smaller)`)
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message)
  }
}

// Function to process a directory
async function processDirectory(directory) {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory() && !directories.includes(fullPath)) {
        // Process subdirectories not explicitly listed
        await processDirectory(fullPath)
      } else if (entry.isFile()) {
        await convertToWebP(fullPath)
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error.message)
  }
}

// Main function
async function main() {
  console.log("🚀 Starting image conversion to WebP...")

  // Process all directories
  for (const directory of directories) {
    console.log(`\nProcessing directory: ${directory}`)
    await processDirectory(directory)
  }

  console.log("\n✨ Conversion complete!")
}

main().catch(console.error)
