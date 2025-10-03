import { addParamsProduct } from "../../helpers/getQueryLink.js";
import { parsePrice } from "../../helpers/parsePrice.js";

export function handleProduct(product, options) {
  return addParamsProduct(parsePrice(product, options));
}
