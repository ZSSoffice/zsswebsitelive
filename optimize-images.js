import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, 'public/images');
const outputDir = path.join(__dirname, 'public/images/optimized');

// Create output directory if it doesn't exist
try {
  await fs.mkdir(outputDir, { recursive: true });
} catch (err) {
  console.error('Error creating directory:', err);
}

// Optimize images
async function optimizeImages() {
  try {
    const files = await fs.readdir(imageDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const inputPath = path.join(imageDir, file);
        const outputPath = path.join(outputDir, file);
        
        try {
          await sharp(inputPath)
            .resize(800, 800, { 
              fit: 'inside',
              withoutEnlargement: true 
            })
            .jpeg({ quality: 80 })
            .toFile(outputPath);
            
          console.log(`Optimized: ${file}`);
        } catch (err) {
          console.error(`Error optimizing ${file}:`, err);
        }
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

optimizeImages();
