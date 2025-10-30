import { Image } from "./Image.js";
import { OriginHref } from "./OriginHref.js";
import { SlugImage } from "./SlugImage.js";

export class TemplateLinks {
  links = [];
  constructor(links = []) {
    if (!Array.isArray(links)) {
      throw new Error("Links should be array property type.");
    }
    for (const linkObject of links) {
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
    this.links = links;
  }
}
