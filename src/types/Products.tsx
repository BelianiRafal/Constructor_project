/**
 * Represents a product within a campaign category.
 *
 * @property {string|number} id - Unique identifier for the product.
 * @property {any} [image] - Optional localized image object for the product.
 * @property {string} [extraCSSStyles] - Optional extra CSS styles for the product.
 */
export type Product = {
  id: string | number
  image?: any // Replace 'any' with the actual type for localizedImage if available
  extraCSSStyles?: string
}
