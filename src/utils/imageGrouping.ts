/**
 * Groups consecutive paragraphs containing images into arrays
 * @param paragraphs - NodeList of paragraph elements
 * @returns Array of arrays, where each inner array contains consecutive paragraphs with images
 */
export function groupConsecutiveImageParagraphs(
    paragraphs: NodeListOf<HTMLParagraphElement>
): HTMLElement[][] {
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
