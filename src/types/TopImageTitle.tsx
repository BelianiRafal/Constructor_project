/**
 * Represents the configuration for the top image title section.
 *
 * @property {any} image - Localized image object for the top image.
 * @property {any} link - Localized link object for the top image.
 * @property {object} text - Text content for the top image title.
 * @property {string} text.line1 - First line of the title.
 * @property {string} text.line2 - Second line of the title.
 * @property {string} text.type - Type or style of the title (e.g., "line1_bigger").
 */
export type TopImageTitle = {
  image: any
  link: any
  text: {
    line1: string
    line2: string
    type: string
  }
}
