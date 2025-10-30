import { TemplateLinks } from "./TemplateLinks.js";

function Template() {
  return "Template not found.";
}

export class LandingTemplate {
  name;
  type;
  css;
  links;
  tableQueries;
  template;
  background = "#ffffff"
  constructor({ type, name, css, links, tableQueries, template, background }) {
    if (!(links instanceof TemplateLinks)) {
      throw new Error(
        "Please, use TemplateLinks to define links in Template."
      );
    }
    this.type = type;
    this.name = name;
    this.css = css;
    this.links = links.links
    this.tableQueries = tableQueries;
    this.template = template || Template;
    this.background = background || this.background
  }
}
