import { ProductInstance } from "./ProductInstance.js";

export class MondayCategoryProducts {
  name;
  background;
  color;
  type;
  src;
  href;
  products;
  constructor({ src, products, href, name, background, color }) {
    if (!Array.isArray(products)) {
      throw new Error("Products should be array property type.");
    }
    for (const productObject of products) {
      if (productObject instanceof ProductInstance) {
        continue;
      } else {
        console.log(
            productObject,
          " Is not instance of ProductInstance"
        );
        throw new Error(
          "Please, use ProductInstance to define product in app.js. More details in console."
        );
      }
    }
    this.background = background || "#ffffff";
    this.color = color || "#000000";
    this.href = href;
    this.name = name;
    this.products = products;
    this.src = src;
    this.type = "monday";
  }
}
