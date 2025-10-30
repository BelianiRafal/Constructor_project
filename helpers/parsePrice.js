import { getState } from "../main/initApp.js";
import { priceFormats } from "./priceFormats.js";

export function parsePrice(product, options) {
  const shop = getState("shop");

  return {
    ...product,
    lowPrice: priceFormats[shop.slug](product.lowPrice, options),
    highPrice:
      product.highPrice !== null
        ? priceFormats[shop.slug](
            product.country === "pl"
              ? Math.ceil(product.highPrice).toString()
              : product.highPrice, options
          )
        : "",
  };
}
