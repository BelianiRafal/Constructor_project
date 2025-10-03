import { templates } from "../../templates/index.js";
import types from "../../utils/types.js";
import { FreebieItem } from "../FreebiewItem.js";
import { NewsletterTemplate } from "../NewsletterTemplate.js";

export class MondayFreebieNewsletter extends NewsletterTemplate {
  offerPart = {
    type: "code",
    color: "#000000",
  };
  intro = {
    background: "#ffffff",
    color: "#000000",
  };
  freebies = {
    options: {
      color: "#000000",
    },
    items: [],
  };
  categories = [];
  insideBanner = {
    src: "",
    href: "",
    src_config: {},
  };
  constructor(
    {
      links,
      tableQueries,
      offerPart,
      intro,
      freebies,
      categories,
      background,
      insideBanner,
    } = {
      offerPart: { color, type },
      intro: { background, color },
      freebies: {
        options: {
          color: "",
        },
        items: [],
      },
      insideBanner: {
        src: "",
        href: "",
        src_config: {},
      },
    }
  ) {
    if (!Array.isArray(tableQueries)) {
      throw new Error("tableQueries should be array property type.");
    }
    if (insideBanner) {
      if (typeof insideBanner !== "object") {
        throw new Error("insideBanner should be object property type.");
      }
      if (!("href" in insideBanner)) {
        throw new Error("insideBanner should be object with href property.");
      }
      if (!("src" in insideBanner)) {
        throw new Error("insideBanner should be object with src property.");
      }
    }
    if (!freebies) {
      throw new Error(
        "freebies property should be defined in MondayFreebieNewsletter template"
      );
    }
    if (!("items" in freebies)) {
      throw new Error("items is not defined in freebiew object.");
    }
    if (!categories) {
      throw new Error(
        "categories should defined in MondayFreebieNewsletter template"
      );
    }
    if (!Array.isArray(categories)) {
      throw new Error("categories should be array property type.");
    }

    for (const freebie of freebies.items) {
      if (freebie instanceof FreebieItem) {
        continue;
      } else {
        console.log(freebie, " Is not instance of FreebieItem");
        throw new Error(
          "Please, use FreebieItem to define freebie item in app.js. More details in console."
        );
      }
    }
    // Initialize NewsletterTemplate properties.
    super({
      type: types.NEWSLETTER,
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      name: "Newsletter",
      links,
      tableQueries,
      template: insideBanner
        ? templates.mondayOfferFreebiesInsideBanner
        : templates.mondayOfferFreeebies,
      background: background,
    });
    this.offerPart = {
      color: offerPart.color || this.offerPart.color,
      type: offerPart.type || this.offerPart.type,
    };
    this.intro = {
      color: intro.color || this.intro.color,
      background: intro.background || this.intro.background,
    };
    this.freebies = {
      items: freebies.items,
      options: {
        color: freebies?.options?.color || this.freebies.options.color,
      },
    };
    this.categories = categories;
    this.insideBanner = insideBanner || null;
  }
}
