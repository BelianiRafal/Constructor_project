export class ProductInstance {
  id;
  src;
  constructor({ id, src }) {
    if (!id) {
      throw new Error("Id for product not found");
    }
    if (!src) {
      throw new Error("Src for product not found");
    }
    this.id = id;
    this.src = src;
  }
}
