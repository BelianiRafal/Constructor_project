export class FreebieItem {
  products = [];
  size = {
    row: 1,
    col: 2,
  };
  constructor({ row, col, products }) {
    if (!Array.isArray(products)) {
      throw new Error("Links should be array property type.");
    }

    for (const freeebieProduct of products) {
      if (!("src" in freeebieProduct) || !("id" in freeebieProduct)) {
        console.log(freeebieProduct, " src is not defined in freeebieProduct");
        throw new Error(
          "Please, add src and id to FreebieItem in app.js. More details in console."
        );
      }
    }

    this.size = {
      row: row,
      col: col,
    };
    this.products = products;
  }
}
