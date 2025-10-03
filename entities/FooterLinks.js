import { Image } from "./Image.js";
import { OriginHref } from "./OriginHref.js";
import { SlugImage } from "./SlugImage.js";

export class FooterLinks {
  footer_cat = [];
  constructor(footer_cat = []) {
    if (!Array.isArray(footer_cat)) {
      throw new Error("Links should be array property type.");
    }
    for (const linkObject of footer_cat) {
      if (linkObject instanceof Image || linkObject instanceof OriginHref || linkObject instanceof SlugImage) {
        continue;
      } else {
        console.log(
          linkObject,
          " Is not instance of OriginHref SlugImage Image"
        );
        throw new Error(
          "Please, use OriginHref, SlugImage, Image to define link in app.js. More details in console."
        );
      }
    }
    this.footer_cat = footer_cat;
  }
}
