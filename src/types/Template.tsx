/**
 * Represents a template configuration for a campaign.
 * @property {string} name - Human-readable name of the template (e.g. "Newsletter", "Landing Page").
 * @property {any} use - The imported React component for the template.
 */
export type Template = {
  name: "Newsletter" | "Landing Page" | string
  use: any // Use React.ComponentType if you want stricter typing
}
