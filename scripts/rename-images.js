import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Mapping of images to their posts and new names
const imageMappings = {
  // affichage-i2c-esp8266
  'i2c_display_scheme.png': 'affichage-i2c-esp8266-schema.png',
  'i2c_display.jpg': 'affichage-i2c-esp8266-resultat.jpg',
  
  // ambilight-ws2801-raspberry-pi-hyperion
  'IMG_20140706_1353301.jpg': 'ambilight-ws2801-prototype-1.jpg',
  'IMG_20140706_1353481.jpg': 'ambilight-ws2801-prototype-2.jpg',
  'IMG_20140706_1532031.jpg': 'ambilight-ws2801-prototype-3.jpg',
  'IMG_20140706_1648501.jpg': 'ambilight-ws2801-prototype-4.jpg',
  'IMG_20140707_0843401.jpg': 'ambilight-ws2801-prototype-5.jpg',
  'diagram1.png': 'ambilight-ws2801-schema-connexion.png',
  'hypercon_mainscreen_011-1050x565.jpg': 'ambilight-ws2801-hypercon.jpg',
  'IMG_20140707_2149471.jpg': 'ambilight-ws2801-cadre-acier-1.jpg',
  'IMG_20140707_2347261.jpg': 'ambilight-ws2801-cadre-acier-2.jpg',
  'IMG_20140708_0757471.jpg': 'ambilight-ws2801-cadre-acier-3.jpg',
  'IMG_20140707_2301481.jpg': 'ambilight-ws2801-cadre-acier-4.jpg',
  'IMG_20140708_0758191.jpg': 'ambilight-ws2801-cadre-acier-5.jpg',
  
  // ambilight-ws2812b-teensy
  'strip_rgb_ws28121.jpg': 'ambilight-ws2812b-ruban.jpg',
  'teensy_2.jpg': 'ambilight-ws2812b-teensy.jpg',
  'IMG_20140921_1522391-1050x590.jpg': 'ambilight-ws2812b-montage-1.jpg',
  'IMG_20140921_1523001.jpg': 'ambilight-ws2812b-montage-2.jpg',
  'IMG_20140921_1531451-1050x590.jpg': 'ambilight-ws2812b-communication.jpg',
  'periph.png': 'ambilight-ws2812b-peripheriques.png',
  
  // bureau-sur-mesure-pc-integre
  'hg2.png': 'bureau-sur-mesure-plan.png',
  'IMG_20140618_2015281.jpg': 'bureau-sur-mesure-outils.jpg',
  'IMG_20140618_2150151.jpg': 'bureau-sur-mesure-bois.jpg',
  'IMG_20140618_2236031.jpg': 'bureau-sur-mesure-construction-1.jpg',
  'IMG_20140619_2011441.jpg': 'bureau-sur-mesure-construction-2.jpg',
  'IMG_20140620_1507091.jpg': 'bureau-sur-mesure-construction-3.jpg',
  'IMG_20140620_1806211.jpg': 'bureau-sur-mesure-plan-bureau.jpg',
  'IMG_20140625_2050191.jpg': 'bureau-sur-mesure-etagere-1.jpg',
  'IMG_20140702_0805291.jpg': 'bureau-sur-mesure-etagere-2.jpg',
  'IMG_20140702_2242061.jpg': 'bureau-sur-mesure-etagere-3.jpg',
  'IMG_20140702_2239491.jpg': 'bureau-sur-mesure-etagere-4.jpg',
  'IMG_20140713_1220231.jpg': 'bureau-sur-mesure-etagere-5.jpg',
  'IMG_20140621_1604011.jpg': 'bureau-sur-mesure-ventilation-1.jpg',
  'IMG_20140621_1637371.jpg': 'bureau-sur-mesure-ventilation-2.jpg',
  'IMG_20140621_1727461.jpg': 'bureau-sur-mesure-ventilation-3.jpg',
  'IMG_20140621_1741411.jpg': 'bureau-sur-mesure-ventilation-4.jpg',
  'IMG_20140714_1214291.jpg': 'bureau-sur-mesure-carte-mere-1.jpg',
  'IMG_20140714_1408511.jpg': 'bureau-sur-mesure-carte-mere-2.jpg',
  'IMG_20140714_1414331.jpg': 'bureau-sur-mesure-carte-mere-3.jpg',
  'IMG_20140714_1936011.jpg': 'bureau-sur-mesure-carte-mere-4.jpg',
  'IMG_20140714_1934291.jpg': 'bureau-sur-mesure-alimentation-1.jpg',
  'IMG_20140717_2227571.jpg': 'bureau-sur-mesure-alimentation-2.jpg',
  'IMG_20140717_1948521.jpg': 'bureau-sur-mesure-cables-1.jpg',
  'IMG_20140717_2227431.jpg': 'bureau-sur-mesure-cables-2.jpg',
  'IMG_20140720_1248311.jpg': 'bureau-sur-mesure-peinture-1.jpg',
  'IMG_20140720_2250311.jpg': 'bureau-sur-mesure-peinture-2.jpg',
  'IMG_20140717_1950101.jpg': 'bureau-sur-mesure-peinture-3.jpg',
  'IMG_20140720_2251211.jpg': 'bureau-sur-mesure-peinture-4.jpg',
  'IMG_20140722_2146021.jpg': 'bureau-sur-mesure-peinture-5.jpg',
  'IMG_20140722_2146131.jpg': 'bureau-sur-mesure-peinture-6.jpg',
  'IMG_20140724_1440221.jpg': 'bureau-sur-mesure-assemblage-1.jpg',
  'IMG_20140724_1726241.jpg': 'bureau-sur-mesure-assemblage-2.jpg',
  'IMG_20140724_1844201.jpg': 'bureau-sur-mesure-assemblage-3.jpg',
  'IMG_20140730_0801161.jpg': 'bureau-sur-mesure-assemblage-4.jpg',
  'IMG_20140802_1523411-1050x776.jpg': 'bureau-sur-mesure-rendu-final.jpg',
  'IMG_20140816_1304191.jpg': 'bureau-sur-mesure-pieds-1.jpg',
  'IMG_20140820_203706.jpg': 'bureau-sur-mesure-pieds-2.jpg',
  'IMG_20140820_2037391-1050x590.jpg': 'bureau-sur-mesure-ventilation-nas.jpg',
  'IMG_20140822_1920261-1050x590.jpg': 'bureau-sur-mesure-peinture-pieds.jpg',
  'IMG_20140823_2018211-1050x598.jpg': 'bureau-sur-mesure-ventilations.jpg',
  'IMG_20140823_1947551-1050x598.jpg': 'bureau-sur-mesure-support-ecrans.jpg',
  'IMG_20140823_2116131-1050x590.jpg': 'bureau-sur-mesure-ecrans.jpg',
  '2014-09-031.jpg': 'bureau-sur-mesure-siege.jpg',
  'IMG_20140903_0005141.jpg': 'bureau-sur-mesure-ambilight.jpg',
  
  // communication-sans-fil-esp8266
  'scheme-client.png': 'communication-sans-fil-esp8266-schema-client.png',
  'scheme-server.png': 'communication-sans-fil-esp8266-schema-serveur.png',
  'image_client.jpg': 'communication-sans-fil-esp8266-client.jpg',
  'image_server.jpg': 'communication-sans-fil-esp8266-serveur.jpg',
  
  // controle-prise-chacon-raspberry-pi
  'RPi-copie-1024x742.jpg': 'controle-prise-chacon-schema-raspberry-pi.jpg',
  'rf433k-300x225.jpg': 'controle-prise-chacon-emetteur-433mhz.jpg',
  
  // distributeur-croquettes-jeedom-esp8266
  'cat_feeder.jpg': 'distributeur-croquettes-1.jpg',
  'cat_feeder_02.jpg': 'distributeur-croquettes-2.jpg',
  'cat_feeder_03.jpg': 'distributeur-croquettes-3.jpg',
  'relay_command.png': 'distributeur-croquettes-schema-relais.png',
  'cat_feeder_jeedom.png': 'distributeur-croquettes-jeedom-script.png',
  'cat_feeder_virtual.png': 'distributeur-croquettes-jeedom-virtuel.png',
  'cat_feeder_scenari.png': 'distributeur-croquettes-jeedom-scenario.png',
  'cat_feeder_dash.png': 'distributeur-croquettes-dashboard.png',
  
  // luminosite-jeedom-esp8266
  'tsl2561_mqtt.png': 'luminosite-jeedom-esp8266-mqtt.png',
  'tsl2561_device.png': 'luminosite-jeedom-esp8266-device.png',
  'tsl2561_jeedom.png': 'luminosite-jeedom-esp8266-jeedom.png',
  
  // luminaire-plafond-suspendu
  'luminaire-plan-technique.jpg': 'luminaire-plafond-suspendu-plan-technique.jpg',
  'luminaire-plancher-montage.jpg': 'luminaire-plafond-suspendu-montage.jpg',
  'luminaire-resultat-1.jpg': 'luminaire-plafond-suspendu-resultat-1.jpg',
  'luminaire-resultat-2.jpg': 'luminaire-plafond-suspendu-resultat-2.jpg',
  'luminaire-resultat-salon.jpg': 'luminaire-plafond-suspendu-resultat-salon.jpg',
  
  // temperature-pression-bmp180-jeedom-esp8266
  'bmp180.png': 'temperature-pression-bmp180-jeedom-esp8266-cablage.png',
  'bmp180_jeedom.png': 'temperature-pression-bmp180-jeedom-esp8266-jeedom.png',
  'bmp180_res.png': 'temperature-pression-bmp180-jeedom-esp8266-resultat.png',
  
  // Other images that might not be referenced (keeping original names for now)
  'all_esp_modules1.png': 'all_esp_modules1.png',
  'config_02.png': 'config_02.png',
  'config.png': 'config.png',
  'firmware-1050x558.png': 'firmware-1050x558.png',
  'pins-1.jpg': 'pins-1.jpg',
  'Sans+titre1-1050x393.png': 'Sans+titre1-1050x393.png',
  'Sans+titre11-1050x675.png': 'Sans+titre11-1050x675.png',
  'wifsimster.png': 'wifsimster.png',
  'chacon.jpeg': 'chacon.jpeg'
}

const publicImagesDir = path.join(__dirname, '..', 'public', 'images')
const docsImagesDir = path.join(__dirname, '..', 'docs', 'public', 'images')
const postsDir = path.join(__dirname, '..', 'src', 'posts')

// Function to rename files in a directory
function renameFilesInDirectory(imagesDir, dirName) {
  let renamedCount = 0
  let notFoundCount = 0
  
  for (const [oldName, newName] of Object.entries(imageMappings)) {
    const oldPath = path.join(imagesDir, oldName)
    const newPath = path.join(imagesDir, newName)
    
    if (fs.existsSync(oldPath)) {
      if (oldName !== newName) {
        // Check if new file already exists
        if (fs.existsSync(newPath)) {
          console.log(`⚠ Skipping ${oldName} in ${dirName}: ${newName} already exists`)
          continue
        }
        fs.renameSync(oldPath, newPath)
        console.log(`✓ [${dirName}] Renamed: ${oldName} → ${newName}`)
        renamedCount++
      }
    } else {
      notFoundCount++
    }
  }
  
  return { renamedCount, notFoundCount }
}

// Function to rename files
function renameImageFiles() {
  console.log('Starting image renaming...')
  console.log(`Checking: ${publicImagesDir}`)
  
  const publicResult = renameFilesInDirectory(publicImagesDir, 'public/images')
  
  // Also check docs/public/images for luminaire images
  if (fs.existsSync(docsImagesDir)) {
    console.log(`\nChecking: ${docsImagesDir}`)
    const docsResult = renameFilesInDirectory(docsImagesDir, 'docs/public/images')
    publicResult.renamedCount += docsResult.renamedCount
    publicResult.notFoundCount += docsResult.notFoundCount
  }
  
  console.log(`\nRenaming complete: ${publicResult.renamedCount} files renamed, ${publicResult.notFoundCount} not found`)
  return publicResult.renamedCount > 0
}

// Function to update references in post files
function updatePostReferences() {
  console.log('\nUpdating references in post files...')
  
  const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.vue'))
  let updatedFiles = 0
  
  for (const postFile of postFiles) {
    const filePath = path.join(postsDir, postFile)
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    
    for (const [oldName, newName] of Object.entries(imageMappings)) {
      if (oldName !== newName && content.includes(oldName)) {
        // Replace in img src attributes
        const regex = new RegExp(`(/images/${oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g')
        content = content.replace(regex, `/images/${newName}`)
        modified = true
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✓ Updated: ${postFile}`)
      updatedFiles++
    }
  }
  
  console.log(`\nUpdated ${updatedFiles} post files`)
}

// Main execution
try {
  const hasRenamed = renameImageFiles()
  if (hasRenamed) {
    updatePostReferences()
    console.log('\n✅ All done!')
  } else {
    console.log('\n⚠ No files were renamed')
  }
} catch (error) {
  console.error('Error:', error)
  process.exit(1)
}

export { renameImageFiles, updatePostReferences, imageMappings }
