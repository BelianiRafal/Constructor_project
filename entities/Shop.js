import { PriceFormat } from "./PriceFormat.js";
import { Language } from "./Language.js";

export class Shop {
  constructor({ origin, shopId, seller, slug, languages, price_format }) {
    this.origin = origin;
    this.shopId = shopId;
    this.seller = seller;
    this.slug = slug;
    this.languages = languages.map((item) => {
      return {
        language: new Language(item.language),
        tableColumn: item.tableColumn,
      };
    });
    this.price_format = new PriceFormat(price_format);
  }
}
