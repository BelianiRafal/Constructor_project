import { handleProduct } from "./index.js";
import { getQueryLink } from "../../helpers/getQueryLink.js";
import { getState } from "../initApp.js";
import _templates from "../data/templates.js";
import _categoriesLinks from "../data/categoriesLinks.js";
import _categoriesTitles from "../data/categoriesTitles.js";
import _header from "../data/header.js";
import _footer from "../data/footer.js";

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

  getProductById = (productId, src, options) => {
    if (!this.isCalled && !this.products) {
      this.isCalled = true;
      Toastify({
        text: "Set products for campaign.",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
    const country = getState("country");
    const shop = getState("shop");
    const languageHREF = shop.languages.find(
      (item) => item.language.slug === country
    );

    let country_products = this.products?.filter(
      (product) => product.country === shop.slug.toLowerCase()
    );

    const product = country_products?.find(
      (product) => Number(product.main_id) === Number(productId)
    );

    if (!product) {
      return {
        name: `Product ${productId} not found`,
        lowPrice: "00.00",
        highPrice: "00.00",
        src: src,
      };
    }

    const href =
      shop.origin +
      product.href.hrefs[languageHREF.language.title].value +
      ".html";
    return handleProduct(
      src ? { ...product, href, src } : { ...product, href },
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
        Toastify({
          text: `Category <a target="_blank" style="weight: semibold; color: white;" href="https://www.prologistics.info/shop_cats.php?shop_id=1">${category}</a> not found in <a href="https://docs.google.com/spreadsheets/d/1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8/edit#gid=0" target="_blank" style="weight: semibold; color: white;">data/categories/data.js</a>`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
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
