import { templates } from "../templates/index.js";
import { entities } from "../entities/index.js";
import { getImageUrl } from "../utils/getImageUrl.js";
import types from "../utils/types.js";

const categories = [
  {
    products: [
      {
        id: "345800",
        src: "https://www.pictureserver.net/pic_storage/pic/2a/84/undef_src_sa_picid_706228_x_185_type_color_image.jpg?ver=41",
      },
      {
        id: "345800",
        src: "https://www.pictureserver.net/pic_storage/pic/ee/1a/undef_src_sa_picid_759944_x_185_type_color_image.jpg?ver=57",
      },
      {
        id: "345800",
        src: "https://www.pictureserver.net/pic_storage/pic/93/b2/undef_src_sa_picid_785038_x_185_type_color_image.jpg?ver=23",
      },
      {
        id: "345800",
        src: "https://www.pictureserver.net/pic_storage/pic/39/e7/undef_src_sa_picid_843614_x_185_type_color_image.jpg?ver=9",
      },
    ],
    isCategoriesDB: true,
    name: "Outdoor ",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat1.png", true),
    },
    href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Living Room",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat2.png", true),
    },
    href: "https://www.beliani.ch/living-room-furniture/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Dining Room ",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat3.png", true),
    },
    href: "https://www.beliani.ch/dining-room-furniture/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Bedroom",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat4.png", true),
    },
    href: "https://www.beliani.ch/bedroom-furniture/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Hallway ",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat5.png", true),
    },
    href: "https://www.beliani.ch/hallway/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Bathroom",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat6.png", true),
    },
    href: "https://www.beliani.ch/bathroom-furniture/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Kids ",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat7.png", true),
    },
    href: "https://www.beliani.ch/children-room/",
  },
  {
    type: "no_products",
    isCategoriesDB: true,
    name: "Office",
    background: "#FFCCB7",
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414Cat8.png", true),
    },
    href: "https://www.beliani.ch/office-furniture/",
  },
];

const links = [
  {
    query: true,
    href: {
      type: "relation",
      relyOn: "origin",
      placeholderPosition: "0",
      value: "content/lp25-04-14",
    },
  },
  {
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250303_01.png", true),
    },
  },
  {
    query: true,
    href: {
      type: "relation",
      relyOn: "origin",
      placeholderPosition: "0",
      value: "content/lp25-04-14",
    },
  },
  {
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250414_gif.gif", true),
    },
  },
  {
    query: true,
    href: {
      type: "relation",
      relyOn: "origin",
      placeholderPosition: "0",
      value: "content/lp25-04-04",
    },
  },
  {
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250404b.png", true),
    },
  },
  {
    query: true,
    href: {
      type: "relation",
      relyOn: "origin",
      placeholderPosition: "0",
      value: "content/lp25-04-03",
    },
  },
  {
    src: {
      type: "relation",
      relyOn: "slug",
      placeholderPosition: "38",
      value: getImageUrl("20250403b.png", true),
    },
  },
];

const tableQueries = [
  {
    tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
    tableName: "14.04.25 - March Peak reminder",
    tableRange: "12",
    name: "intro",
  },
  {
    tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
    tableName: "14.04.25 - March Peak reminder",
    tableRange: "21",
    name: "cta",
  },
  {
    tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
    tableName: "14.04.25 - March Peak reminder",
    tableRange: "25:26",
    name: "condition",
  },
  {
    tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
    tableName: "14.04.25 - March Peak reminder",
    tableRange: "13:20",
    name: "category",
  },
];

const newsletterTemplate = {
  name: "Newsletter",
  type: types.NEWSLETTER,
  template: templates.CategoriesTester,
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
  template: templates.CategoriesTester,
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

const campaignTranslationsSheet = "30.05.25 - Kid's day";

export const test_campaign = new entities.Campaign({
  translationsSpreadsheet: campaignTranslationsSheet,
  startId: "00000",
  name: "Test Campaign",
  date: "2025.05.30",
  issueCardId: "373633",
  figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23",
  optimizeImg: false,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  templates: [newsletterTemplate, landingTemplate],
});
