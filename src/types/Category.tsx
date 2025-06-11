import type { Product } from "./Products"

/**
 * Represents a single campaign category.
 *
 * @property {string} name - Name of the category.
 * @property {string} background - Background color for the category.
 * @property {string} color - Text color for the category.
 * @property {any} src - Localized image object for the category.
 * @property {any} href - Localized link object for the category.
 * @property {string} type - Type of the category (e.g., "inspirational").
 * @property {Product[]} [products] - Optional array of products in the category.
 */
export type Category = {
  name: string
  background: string
  color: string
  image: any
  link: any
  type: string
  products?: Product[]
}
