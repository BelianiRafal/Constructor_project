import { Product } from "../entities/Product.js";

const allowedSellers = [
  "Beliani UK",
  "Beliani DE",
  "Beliani FR",
  "Beliani AT",
  "Beliani SP",
  "Beliani PL",
  "Beliani NL",
  "Beliani PT",
  "Beliani IT",
  "Beliani SE",
  "Beliani HU",
  "Beliani DK",
  "Beliani CZ",
  "Beliani FI",
  "Beliani NO",
  "Beliani SK",
  "Beliani BE",
  "Beliani RO",
];

export function normalizeProducts(products) {
  const normalized = [];
  const master_products = {};

  for (const element of products) {
    if (!("saved_params" in element)) continue
    if (element.saved_params.username === "Beliani") {
      master_products[element.id] = element;
    }
  }

  for (const element of products) {
    if (!("saved_params" in element)) continue
    
    if (element.saved_params.username === "Beliani") {
      normalized.push(new Product({ ...element, hrefs: element.ShopSAAlias }));
    }

    if (allowedSellers.includes(element.saved_params.username)) {
      if (!(element.saved_params.master_sa in master_products)) continue;

      normalized.push(
        new Product({
          ...element,
          hrefs: master_products[element.saved_params.master_sa]["ShopSAAlias"],
        })
      );
    }
  }

  return normalized;
}
