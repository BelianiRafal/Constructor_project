import { handleProduct } from "./index.js";
import { getQueryLink } from "../../helpers/getQueryLink.js";
import { getState } from "../../utils/stateManager.js";
import _templates from "../data/templates.js";
import _categoriesLinks from "../data/categoriesLinks.js";
import _categoriesTitles from "../data/categoriesTitles.js";
import _header from "../data/header.js";
import _footer from "../data/footer.js";
import Toast from "../../utils/toasts.js";

export class TemplateHandlers {
  isCalled = false;
  constructor({
    products,
    categoriesLinks,
    categoriesTitles,
    footer,
    header,
    templates,
  }) {
    this.products = products;
    this.categoriesLinks = categoriesLinks;
    this.categoriesTitles = categoriesTitles;
    this.footer = footer;
    this.header = header;
    this.templates = templates;
  }

  getProductById = (productId, src, extraStyles, options) => {
    if (!this.isCalled && !this.products) {
      this.isCalled = true;
      Toast.warn("Set products for campaign.");
    }
    const country = getState("country");
    const shop = getState("shop");
    const languageHREF = shop.languages.find(
      (item) => item.language.slug === country
    );

    const countrySlug = shop?.slug?.toLowerCase();

    // check if we do product swapping for specific country, if so return swapped id
    let resolvedProductId = productId;
    if (
      productId &&
      typeof productId === "object" &&
      Array.isArray(productId.swap) &&
      productId.countrySlug
    ) {
      const shopSlug = shop && shop.slug;
      const shouldSwap = Array.isArray(productId.countrySlug)
        ? productId.countrySlug.includes(shopSlug)
        : shopSlug === productId.countrySlug;
      resolvedProductId = shouldSwap ? productId.swap[1] : productId.swap[0];
    }

    // check if we do image swapping for specific country, if so return swapped image src
    let resolvedSrc = src;
    if (
      src &&
      typeof src === "object" &&
      Array.isArray(src.swap) &&
      src.countrySlug
    ) {
      const shopSlug = shop && shop.slug;
      const shouldSwap = Array.isArray(src.countrySlug)
        ? src.countrySlug.includes(shopSlug)
        : shopSlug === src.countrySlug;
      resolvedSrc = shouldSwap ? src.swap[1] : src.swap[0];
    }

    const country_products = this.products?.filter(
      (product) => product.country === countrySlug
    );

    const product = country_products?.find(
      (product) => Number(product.main_id) === Number(resolvedProductId)
    );

    if (!product) {
      return {
        extraStyles: extraStyles || "",
        name: `Product ${resolvedProductId} not found`,
        lowPrice: "00.00",
        highPrice: "00.00",
        src: resolvedSrc,
      };
    }

    const href =
      shop.origin +
      product.href.hrefs[languageHREF.language.title].value +
      ".html";
    return handleProduct(
      resolvedSrc
        ? { ...product, href, extraStyles, src: resolvedSrc }
        : { ...product, href },
      options
    );
  };

  getCategoryTitle = (column) => {
    const country = getState("country");

    const CSV_CATEGORIES = this.categoriesTitles
      ? this.#toCSV(this.categoriesTitles)
      : _categoriesTitles;
    let country_categories = CSV_CATEGORIES.find(
      (category) => category.slug === country.toLowerCase()
    );

    if (country_categories) {
      return country_categories[column];
    }
    return undefined;
  };

  getCategoryLink = (category, options) => {
    const shop = getState("shop");
    const country = getState("country");

    let new_link = new URL(shop.origin);

    const category_url = new URL(category);
    for (const [key, value] of category_url.searchParams.entries()) {
      new_link.searchParams.append(key, value);
    }

    const CSV_CATEGORIES = this.categoriesLinks
      ? this.#toCSV(this.categoriesLinks)
      : _categoriesLinks;
    let country_categories = CSV_CATEGORIES.find(
      (category) => category.slug === country.toLowerCase()
    );

    const pathnames = category_url.pathname
      .split("/")
      .filter((pathname) => pathname.length > 0);
    const parsed_country_categories = [];
    for (const category of pathnames) {
      const categoryCandidate = country_categories[category];
      if (categoryCandidate) {
        parsed_country_categories.push(categoryCandidate);
      } else {
        Toast.warn(`Category ${category} not found in main/data/categoriesLinks.js. Check console for more info.`);
        console.warn(`Category ${category} not found in main/data/categoriesLinks.js`);
        console.log(`Prolo cats: https://www.prologistics.info/shop_cats.php?shop_id=1`);
        console.log(`Cats xlsx: https://docs.google.com/spreadsheets/d/1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8/`);
      }
    }
    new_link.pathname += parsed_country_categories.join("/");
    if (options && options.origin === false) {
      const cutUrl = new URL(getQueryLink(new_link)).pathname;
      return cutUrl;
    }

    return getQueryLink(new_link);
  };

  getFooter = (column) => {
    const country = getState("country");
    const CSV_FOOTER = this.footer ? this.#toCSV(this.footer) : _footer;
    let country_footer = CSV_FOOTER.find(
      (category) => category.slug === country.toLowerCase()
    );
    if (country_footer) {
      return country_footer[column];
    }
    return undefined;
  };

  getPhrase = (column) => {
    const country = getState("country");
    const CSV_FOOTER = this.templates
      ? this.#toCSV(this.templates)
      : _templates;
    let country_phrase = CSV_FOOTER.find(
      (category) => category.slug === country.toLowerCase()
    );
    if (country_phrase) {
      return country_phrase[column];
    }
    return undefined;
  };

  getHeader = (column) => {
    const country = getState("country");

    const CSV_FOOTER = this.header ? this.#toCSV(this.header) : _header;
    let country_header = CSV_FOOTER.find(
      (category) => category.slug === country.toLowerCase()
    );
    if (country_header) {
      return country_header[column];
    }
    return undefined;
  };

  #toCSV = (data) => {
    const [slugs, ...categoriesDB] = data;
    const csv = [];
    for (let index = 0; index < slugs.length; index++) {
      const slug = slugs[index];
      let parsed_category = {};
      for (const categoryArray of categoriesDB) {
        const key = categoryArray[0];
        parsed_category = {
          slug: slug,
          [key]: categoryArray[index],
          ...parsed_category,
        };
      }
      csv.push(parsed_category);
    }

    return csv;
  };
}
