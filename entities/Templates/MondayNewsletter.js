import types from "../../utils/types.js";
import { NewsletterTemplate } from "../NewsletterTemplate.js";

function MondayTemplate({getCampaignData, links}) {
  console.log(links);
  
  return `
    <p>Monday ${getCampaignData("Regular Conditions")} template</p>
  `;
}

export class MondayNewsletter extends NewsletterTemplate {
  categories
  constructor({ name, links, tableQueries, categories, background }) {
    if (!Array.isArray(tableQueries)) {
      throw new Error("tableQueries should be array property type.");
    }
    if (!categories) {
      throw new Error("categories should defined in MondayNewsletter template");
    }
    if (!Array.isArray(categories)) {
      throw new Error("categories should be array property type.");
    }
    super({
      type: types.NEWSLETTER,
      wrapper: types.WRAPPER,
      name,
      css: types.CSS.NS,
      links,
      tableQueries,
      template: MondayTemplate,
      background: background
    });
    this.categories = categories
  }
}
