/**
 * Groups consecutive paragraphs containing images into arrays
 * This function processes a NodeList of paragraph elements and groups consecutive
 * paragraphs that contain images together. Non-image paragraphs break the grouping.
 * 
 * @param paragraphs - NodeList of paragraph elements to process
 * @returns Array of arrays, where each inner array contains consecutive paragraphs with images.
 *          Returns empty array if paragraphs is null, undefined, or empty.
 */
export function groupConsecutiveImageParagraphs(
  paragraphs: NodeListOf<HTMLParagraphElement>
): HTMLElement[][] {
  if (!paragraphs || paragraphs.length === 0) {
    return []
  }

  const imageGroups: HTMLElement[][] = []
  let currentGroup: HTMLElement[] = []

  paragraphs.forEach((p) => {
    const img = p.querySelector('img')
    if (img) {
      currentGroup.push(p as HTMLElement)
    } else {
      if (currentGroup.length > 0) {
        imageGroups.push([...currentGroup])
        currentGroup = []
      }
    }
  })

  // Add last group if exists
  if (currentGroup.length > 0) {
    imageGroups.push(currentGroup)
  }

  return imageGroups
}
