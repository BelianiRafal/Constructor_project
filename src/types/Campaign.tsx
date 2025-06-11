import type { TopImageTitle } from "./TopImageTitle"
import type { Links } from "./Links"
import type { Category } from "./Category"
import { Template } from "./Template"
import { TopImage } from "./TopImage"

/**
 * Represents a campaign configuration object.
 *
 * @property {boolean} disabled - Indicates if the campaign is disabled (e.g. for testing or debugging).
 * @property {string} date - Date of the campaign in "YYYY-MM-DD" format, used only for debugging purposes and selectors.
 * @property {string} name - Name of the campaign, displayed in selectors.
 * @property {number} issueCardId - ID of the issue card (for tracking or reference), e.g. https://www.prologistics.info/react/logs/issue_logs/[issueId]
 * @property {number} newsletterMasterId - Master ID for the newsletter (used for generating per-shop IDs), e.g. https://www.prologistics.info/news_email.php?id=[newsletterId]
 * @property {number} landingPageMasterId - Master ID for the landing page (used for generating per-shop IDs), e.g. https://www.prologistics.info/shop_content.php?id=[landingPageId]&shop_id=<shopId>
 * @property {string} figmaId - Figma design file ID or URL, e.g. https://www.figma.com/design/[figmaId]
 * @property {any[]} templates - Array of template configurations used in the campaign.
 * @property {TopImageTitle} [TopImageTitle] - Optional top image title configuration.
 * @property {Links} [links] - Optional links configuration.
 * @property {Category[]} [categories] - Optional array of campaign categories.
 */
export type Campaign = {
  /** Whether the campaign is disabled. */
  disabled: boolean
  /** Date of the campaign in "YYYY-MM-DD" format, used only for debugging purposes and selectors. */
  date: string
  /** Name of the campaign, displayed in selectors. */
  name: string
  /** ID of the issue card (for tracking or reference). */
  issueCardId: number
  /** Master ID for the newsletter (used for generating per-shop IDs). */
  newsletterMasterId: number
  /** Master ID for the landing page (used for generating per-shop IDs). */
  landingPageMasterId: number
  /** Figma design file ID or URL. */
  figmaId: string
  /** Array of template configurations used in the campaign. */
  templates: Template[]
  /** Optional top image title configuration for the campaign. */
  TopImageTitle?: TopImageTitle
  /** Optional top gif configuration for the campaign. */
  TopImage?: TopImage
  /** Optional links configuration for the campaign. */
  links?: Links
  /** Optional array of campaign categories, each with its own settings and products. */
  categories?: Category[]
}
