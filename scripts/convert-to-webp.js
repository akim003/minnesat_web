import fs from "fs/promises"
import path from "path"
import sharp from "sharp"

// Base output directory
const OUTPUT_DIR = "updated_photos"

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

// Ensure output directory exists
async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory)
  } catch (e) {
    // Directory doesn't exist, create it
    await fs.mkdir(directory, { recursive: true })
  }
}

// Function to convert a file to WebP
async function convertToWebP(filePath) {
  try {
    const fileExt = path.extname(filePath)
    if (!extensions.includes(fileExt)) return

    // Create output path that preserves the directory structure
    const relativePath = filePath // e.g., "public/legacy/2022/image.jpg"
    const relativeDir = path.dirname(relativePath) // e.g., "public/legacy/2022"
    const fileName = path.basename(filePath, fileExt) // e.g., "image"

    // Create output directory path
    const outputDirPath = path.join(OUTPUT_DIR, relativeDir) // e.g., "updated_photos/public/legacy/2022"
    await ensureDirectoryExists(outputDirPath)

    // Create output file path
    const outputPath = path.join(outputDirPath, `${fileName}.webp`) // e.g., "updated_photos/public/legacy/2022/image.webp"

    console.log(`Converting ${filePath} to WebP...`)

    await sharp(filePath)
      .webp({ quality: 80 }) // Adjust quality as needed (80 is a good balance)
      .toFile(outputPath)

    // Get file sizes for comparison
    const originalSize = (await fs.stat(filePath)).size
    const webpSize = (await fs.stat(outputPath)).size
    const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(2)

    console.log(`✅ Converted ${path.basename(filePath)} to WebP (${savings}% smaller)`)
    console.log(`   Saved to: ${outputPath}`)
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

  // Create the base output directory
  await ensureDirectoryExists(OUTPUT_DIR)

  // Process all directories
  for (const directory of directories) {
    console.log(`\nProcessing directory: ${directory}`)
    await processDirectory(directory)
  }

  console.log("\n✨ Conversion complete!")
  console.log(`All WebP images have been saved to the '${OUTPUT_DIR}' directory.`)
}

main().catch(console.error)
