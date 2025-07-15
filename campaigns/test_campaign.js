import { templates } from "../templates/index.js";
import { entities } from "../entities/index.js";
import { getImageUrl } from "../utils/getImageUrl.js";
import types from "../utils/types.js";
import translateLink from "../helpers/translateLink.js";
import translateImage from "../helpers/translateImage.js";

const categories = [
  {
    isCategoriesDB: false,
    name: "Outdoor",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat1.png", true),
    },
    href: "https://www.beliani.ch/search/cardigan/",
  },
  {
    isCategoriesDB: true,
    name: "Sofas",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat2.png", true),
    },
    href: "https://www.beliani.ch/sofas/",
  },
  {
    isCategoriesDB: true,
    name: "Beds",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat3.png", true),
    },
    href: "https://www.beliani.ch/beds/",
  },
  {
    isCategoriesDB: true,
    name: "Armchairs",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat4.png", true),
    },
    href: "https://www.beliani.ch/armchairs/",
  },
  {
    isCategoriesDB: true,
    name: "Chairs",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat5.png", true),
    },
    href: "https://www.beliani.ch/chairs/",
  },
  {
    isCategoriesDB: true,
    name: "Tables",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat6.png", true),
    },
    href: "https://www.beliani.ch/tables/",
  },
  {
    isCategoriesDB: true,
    name: "Storage",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat7.png", true),
    },
    href: "https://www.beliani.ch/storage/",
  },
  {
    isCategoriesDB: true,
    name: "Textiles",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat8.png", true),
    },
    href: "https://www.beliani.ch/textiles/",
  },
  {
    isCategoriesDB: true,
    name: "Bathtubs",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat9.png", true),
    },
    href: "https://www.beliani.ch/bathtubs-hot-tubs/",
  },
  {
    isCategoriesDB: true,
    name: "Desks",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat10.png", true),
    },
    href: "https://www.beliani.ch/office-furniture/desks-eng/",
  },
  {
    isCategoriesDB: true,
    name: "Rugs",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat11.png", true),
    },
    href: "https://www.beliani.ch/rugs/",
  },
  {
    isCategoriesDB: true,
    name: "Accessories",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250602Cat12.png", true),
    },
    href: "https://www.beliani.ch/home-accessories/accessories-decor/",
  },
];

const links = {
  0: translateLink({ value: "content/lp25-06-02" }),
  // 1: getImageUrl("20250602_gif.gif", true),
  // ^ this way image doesn't change based on country
  1: translateImage({ value: "20250602_gif.gif" }),
  2: translateLink({ value: "content/lp25-05-15" }),
  3: translateImage({ value: "20250515b.png" }),
  4: translateLink({ value: "content/lp25-05-14" }),
  5: translateImage({ value: "20250514b.png" }),
};

const tableQueries = [
  {
    tableRange: "15",
    name: "intro",
  },
  {
    tableRange: "15",
    name: "paragraph",
  },
  {
    tableRange: "28",
    name: "cta",
  },
  {
    tableRange: "32:33",
    name: "condition",
  },
  {
    tableRange: "16:27",
    name: "categories",
  },
  {
    tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
    tableName: "Templates",
    tableRange: "?majorDimension=COLUMNS",
    name: "templates",
    tableColumns: false,
  },
  {
    tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
    tableName: "Categories",
    tableRange: "?majorDimension=COLUMNS",
    name: "categoriesTitles",
    tableColumns: false,
  },
  {
    tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
    tableName: "Categories",
    tableRange: "?majorDimension=COLUMNS",
    name: "categoriesLinks",
    tableColumns: false,
  },
  {
    tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
    tableName: "Header",
    tableRange: "?majorDimension=COLUMNS",
    name: "header",
    tableColumns: false,
  },
  {
    tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
    tableName: "Footer",
    tableRange: "?majorDimension=COLUMNS",
    name: "footer",
    tableColumns: false,
  },
];

const newsletterTemplate = {
  name: "Newsletter",
  type: types.NEWSLETTER,
  template: templates.mondayRegularNslt,
  background: "#FFCCB7",
  wrapper: types.WRAPPER,
  css: types.CSS.NS,
  intro: {
    background: "#FFCCB7",
    align: "center",
  },
  categories: categories,
  links: links,
  tableQueries: tableQueries,
};

const landingTemplate = {
  name: "Landing",
  type: types.LANDINGPAGE,
  template: templates.mondayRegularNslt,
  background: "#FFCCB7",
  css: types.CSS.LP,
  intro: {
    background: "#FFCCB7",
    align: "center",
  },
  categories: categories,
  links: links,
  tableQueries: tableQueries,
};

const campaignTranslationsSheet = "02.06.25 - Beliani Birthday Start";

export const test_campaign = new entities.Campaign({
  startId: "29760",
  name: "Beliani Birthday Start",
  date: "2025.06.02",
  issueCardId: "359284",
  figmaUrl:
    "https://www.figma.com/design/fu1KpVQ9E8u07abWbbUa4w/Beliani-Birthday-start---Monday-2025.06.02--Copy-?t=Wl9NAacsA1p65rAf-0",
  optimizeImg: false,
  single_image: true,
  soon_banners: true,
  white_line: false,
  full_img_width: false,
  translationsSpreadsheet: campaignTranslationsSheet,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  templates: [newsletterTemplate, landingTemplate],
});
