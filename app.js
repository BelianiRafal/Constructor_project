import { templates } from "./templates/index.js";
import { entities } from "./entities/index.js";
import types from "./utils/types.js";
import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";

const config = {
  server_url: "https://pictureserver.net/static/2024/",
  campaign_url: "https://www.prologistics.info/news_email.php?id=",
  issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
  alarm_days: 7,
  confetti: true,
  replaceToBrs: true,
  emptyCell: (message) => `<span style='font-size: 20px; background: #ff0000;'>${message || "Cell is empty"}</span>`,
};

/**
 * Aktualizuje rok w konfiguracji na podstawie aktualnego roku systemowego
 * @param {Object} config - Obiekt konfiguracyjny
 * @returns {Object} - Zaktualizowany obiekt konfiguracyjny
 */
function updateConfigWithCurrentYear(config) {
  const currentYear = new Date().getFullYear();
  config.server_url = config.server_url.replace(/\d{4}/, currentYear);
  return config;
}

/**
 * Pobiera i inkrementuje numer wersji dla danego obrazu
 * @param {string} imageName - Nazwa obrazu
 * @returns {number} - Zaktualizowany numer wersji
 */
function getImageVersion(imageName) {
  // Klucz do przechowywania wersji w localStorage
  const storageKey = "image_versions";

  // Pobierz zapisane wersje z localStorage
  let versionsMap = {};
  try {
    const storedVersions = localStorage.getItem(storageKey);
    if (storedVersions) {
      versionsMap = JSON.parse(storedVersions);
    }
  } catch (error) {
    console.warn("Błąd podczas odczytu wersji obrazów:", error);
  }

  // Sprawdź aktualną wersję obrazu lub ustaw domyślną wartość 1
  const currentVersion = versionsMap[imageName] || 1;

  // Inkrementuj wersję
  const newVersion = currentVersion + 1;

  // Zapisz zaktualizowaną wersję
  versionsMap[imageName] = newVersion;
  try {
    localStorage.setItem(storageKey, JSON.stringify(versionsMap));
  } catch (error) {
    console.warn("Błąd podczas zapisu wersji obrazów:", error);
  }

  return newVersion;
}

/**
 * Generuje URL obrazu z automatyczną inkrementacją numeru wersji
 * @param {string} imageName - Nazwa obrazu
 * @param {boolean|string} version - Wersja obrazu:
 *   - true/undefined: automatyczna inkrementacja
 *   - false: używa wersji 1
 *   - string/number: używa konkretnej wersji
 * @returns {string} - Pełny URL obrazu z parametrem wersji
 */
export function getImageUrl(imageName, version) {
  // Aktualizacja roku w konfiguracji
  const updatedConfig = updateConfigWithCurrentYear(config);

  // Obsługa różnych przypadków wersji
  let versionParam;

  // Jeśli wersja jest stringiem lub liczbą, użyj jej bezpośrednio
  if (typeof version === "string" || typeof version === "number") {
    versionParam = version;
  }
  // Jeśli wersja jest false, użyj stałej wartości 1
  else if (version === false) {
    versionParam = 1;
  }
  // W przeciwnym razie (wersja jest undefined, true lub inną wartością) użyj automatycznego wersjonowania
  else {
    versionParam = getImageVersion(imageName);
  }

  // Zwróć pełny URL z parametrem wersji
  return updatedConfig.server_url + imageName + "?ver=" + versionParam;
}

try {
  initApp({
    campaigns: [
      //! Black Week Start
      new entities.Campaign({
        startId: "37764",
        name: "Voucher - 10.11.25 - Black Week start",
        date: "2025.11.10",
        issueCardId: "405559",
        figmaUrl: "https://www.figma.com/design/mvL14e5shtzKnh2dKBMaZo/Black-Week-start---Monday-2025.11.10--Copy-?node-id=2005-4231&p=f&t=7LfC86d0jciphr9a-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: true,
        white_line: true,
        alarm: {
          isActive: false,
        },
        isArchive: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#000000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS_BLACK_WEEK,
            offerPart: {
              type: "codes",
              color: "#FFFFFF",
              background: "#000000",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Sofas",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Beds",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Armchairs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Chairs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Tables",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Storage",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Textiles",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Lighting",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Bathtubs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Desks",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Rugs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Accessories",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-11-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251030b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251029b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "22:31",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "33",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "34:37",
                name: "codes",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "53:55",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#000000",
            css: types.CSS.LP_BLACK_WEEK,
            offerPart: {
              type: "codes",
              color: "#FFFFFF",
              background: "#000000",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Sofas",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Beds",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Armchairs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Chairs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Tables",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Storage",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Textiles",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Lighting",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Bathtubs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Desks",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Rugs",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#000000",
                color: "#FFFFFF",
                name: "Accessories",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110Category12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-11-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251110_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251030b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251029b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "22:31",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "33",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "34:37",
                name: "codes",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "53:55",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.11.25 - Black Week start!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
        ],
      }),
      //! Peak for chess category
      new entities.Campaign({
        startId: "37508",
        name: "Newsletter October peak 3rd - Monday",
        date: "2025.10.20",
        issueCardId: "385187",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
              color: "#750000",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251010b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
              color: "#750000",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251010b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
        ],
      }),
      //! 2025.09.29
      new entities.Campaign({
        date: "2025.09.29",
        issueCardId: "404426",
        name: "Our Christmas Shop is open: get a free gift",
        startId: "37348",
        figmaUrl:
          "https://www.figma.com/design/qWqyr8nKO3am5Vnnwso69Q/Christmas-freebies---Monday-2025.09.29--Copy-?node-id=0-1&p=f&t=R18m9AEvAkk4cGbd-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        white_line: true,
        under_intro_line: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#ffffff",
              background: "#750000",
            },
            intro: {
              background: "#750000",
              color: "#ffffff",
            },
            categories: [
              {
                name: "Christmas Trees",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-tree/",
                products: [
                  {
                    id: "504421",
                    src: getImageUrl("20250929Category1.png", true),
                  },
                  {
                    id: "607479",
                    src: getImageUrl("20250929Category2.png", true),
                  },
                ],
              },
              {
                name: "Wreaths",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-wreaths/",
                products: [
                  {
                    id: "637502",
                    src: getImageUrl("20250929Category3.png", true),
                  },
                  {
                    id: "614870",
                    src: getImageUrl("20250929Category4.png", true),
                  },
                ],
              },
              {
                name: "Garlands",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-garland/",
                products: [
                  {
                    id: "638167",
                    src: getImageUrl("20250929Category5.png", true),
                  },
                  {
                    id: "626998",
                    src: getImageUrl("20250929Category6.png", true),
                  },
                ],
              },
              {
                name: "LED Decor",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-outdoor-decor/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category7.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category8.png", true),
                  },
                ],
              },
              {
                name: "Christmas Decor",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/decorations/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category9.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category10.png", true),
                  },
                ],
              },
              {
                name: "Textiles",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-textiles/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category11.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category12.png", true),
                  },
                ],
              },
              {
                name: "Tableware",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-tableware/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category13.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category14.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250929_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-29",
                },
              },
              {
                value: getImageUrl("20250929_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250918b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250917b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "18:19",
                name: "tit",
              },
              // {
              //   tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              //   tableName: "Voucher - 29.09.25 - Christmas freebies!",
              //   tableRange: "35:38",
              //   name: "filters",
              // },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "21:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "30:31",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "27",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "25",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "32:38",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "44:45",
                name: "condition",
              },
              // {
              //   tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
              // {
              //   tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              //   tableName: "Footer",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "footer",
              //   tableColumns: false,
              // },
            ],
            freebies: {
              options: {
                color: "#ffffff",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "570480",
                      src: getImageUrl("20250929Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "570518",
                      src: getImageUrl("20250929Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "571143",
                      src: getImageUrl("20250929Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "571807",
                      src: getImageUrl("20250929Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "571845",
                      src: getImageUrl("20250929Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "571940",
                      src: getImageUrl("20250929Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#750000",
            css: types.CSS.LP,
            tit: {
              color: "#ffffff",
              type: "twoSameLines",
            },
            offerPart: {
              type: "code",
              color: "#ffffff",
              background: "#750000",
            },
            intro: {
              background: "#750000",
              color: "#ffffff",
            },
            categories: [
              {
                name: "Christmas Trees",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-tree/",
                products: [
                  {
                    id: "504421",
                    src: getImageUrl("20250929Category1.png", true),
                  },
                  {
                    id: "607479",
                    src: getImageUrl("20250929Category2.png", true),
                  },
                ],
              },
              {
                name: "Wreaths",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-wreaths/",
                products: [
                  {
                    id: "637502",
                    src: getImageUrl("20250929Category3.png", true),
                  },
                  {
                    id: "614870",
                    src: getImageUrl("20250929Category4.png", true),
                  },
                ],
              },
              {
                name: "Garlands",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-garland/",
                products: [
                  {
                    id: "638167",
                    src: getImageUrl("20250929Category5.png", true),
                  },
                  {
                    id: "626998",
                    src: getImageUrl("20250929Category6.png", true),
                  },
                ],
              },
              {
                name: "LED Decor",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-outdoor-decor/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category7.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category8.png", true),
                  },
                ],
              },
              {
                name: "Christmas Decor",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/decorations/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category9.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category10.png", true),
                  },
                ],
              },
              {
                name: "Textiles",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-textiles/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category11.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category12.png", true),
                  },
                ],
              },
              {
                name: "Tableware",
                background: "#750000",
                color: "#ffffff",
                href: "https://www.beliani.ch/christmas-accessories/christmas-tableware/",
                products: [
                  {
                    id: "553709",
                    src: getImageUrl("20250929Category13.png", true),
                  },
                  {
                    id: "630497",
                    src: getImageUrl("20250929Category14.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250929_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-29",
                },
              },
              {
                value: getImageUrl("20250929_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250918b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250917b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "18:19",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "21:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "30:31",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "27",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "25",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "32:38",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 29.09.25 - Christmas freebies!",
                tableRange: "44:45",
                name: "condition",
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
              // {
              //   tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              //   tableName: "Footer",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "footer",
              //   tableColumns: false,
              // },
            ],
            freebies: {
              options: {
                color: "#ffffff",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "570480",
                      src: getImageUrl("20250929Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "570518",
                      src: getImageUrl("20250929Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "571143",
                      src: getImageUrl("20250929Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "571807",
                      src: getImageUrl("20250929Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "571845",
                      src: getImageUrl("20250929Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "571940",
                      src: getImageUrl("20250929Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      //! Peak 13.10
      new entities.Campaign({
        startId: "37188",
        name: "Newsletter October peak 2nd - Monday",
        date: "2025.10.13",
        issueCardId: "385180",
        figmaUrl:
          "https://www.figma.com/design/UbY6xMGUdZHioPgXAPh8jG/2025.10---October-Peak--Copy-?node-id=8001-3604&p=f&t=XxNK4pkkP30R2rmu-0 ",
        optimizeImg: false,
        single_image: false,
        soon_banners: false,
        white_line: true,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#750000",
              color: "#ffffff",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Living room",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat1.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat2.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat4.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat5.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat6.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Kids",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat7.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251002b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "13",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "23",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "27:28",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "16:22",
                name: "categories",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#750000",
            css: types.CSS.LP,
            tit: {
              color: "#fff",
              type: "singleLine",
            },
            intro: {
              background: "#750000",
              color: "#ffffff",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Living room",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat1.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat2.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat4.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat5.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat6.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Kids",
                background: "#750000",
                color: "#ffffff",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013Cat7.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251002b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "13",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "23",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "27:28",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "13.10.25 - October Peak 2nd!",
                tableRange: "16:22",
                name: "categories",
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
            ],
          },
        ],
      }),
      //! 6 products copy from this campaign
      new entities.Campaign({
        date: "2025.09.22",
        issueCardId: "399376",
        name: "Free decor gift: choose from 6 options",
        startId: "37007",
        figmaUrl:
          "https://www.figma.com/design/uyxxwf83DODxkULNKDX86k/2025.09.22---Newsletter---Free-gift--Copy-?node-id=9001-3966&p=f&t=AMlh0v5A5LqmUUbF-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#fff",
              background: "#750000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250922Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "610966",
                    src: getImageUrl("20250922Category11.png", true),
                  },
                  {
                    id: "449670",
                    src: getImageUrl("20250922Category12.png", true),
                  },
                  {
                    id: "644071",
                    src: getImageUrl("20250922Category13.png", true),
                  },
                  {
                    id: "643052",
                    src: getImageUrl("20250922Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#fff",
                src: getImageUrl("20250922Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "616605",
                    src: getImageUrl("20250922Category21.png", true),
                  },
                  {
                    id: "594184",
                    src: getImageUrl("20250922Category22.png", true),
                  },
                  {
                    id: "628747",
                    src: getImageUrl("20250922Category23.png", true),
                  },
                  {
                    id: "	443115",
                    src: getImageUrl("20250922Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000",
                src: getImageUrl("20250922Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "644556",
                    src: getImageUrl("20250922Category31.png", true),
                  },
                  {
                    id: "619991",
                    src: getImageUrl("20250922Category32.png", true),
                  },
                  {
                    id: "494633",
                    src: getImageUrl("20250922Category33.png", true),
                  },
                  {
                    id: "570577",
                    src: getImageUrl("20250922Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#750000",
                color: "#fff",
                src: getImageUrl("20250922Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/",
                products: [
                  {
                    id: "495420",
                    src: getImageUrl("20250922Category41.png", true),
                  },
                  {
                    id: "553106",
                    src: getImageUrl("20250922Category42.png", true),
                  },
                  {
                    id: "351437",
                    src: getImageUrl("20250922Category43.png", true),
                  },
                  {
                    id: "525527",
                    src: getImageUrl("20250922Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250922_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-22",
                },
              },
              {
                value: getImageUrl("20250922_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250912b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250911b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "42:44",
                name: "condition",
              },
              // {
              //   tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
            freebies: {
              options: {
                color: "#ffffff",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "364500",
                      src: getImageUrl("20250922Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "364571",
                      src: getImageUrl("20250922Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358090",
                      src: getImageUrl("20250922Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "330436",
                      src: getImageUrl("20250922Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "346619",
                      src: getImageUrl("20250922Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "367111",
                      src: getImageUrl("20250922Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#750000",
            css: types.CSS.LP,
            tit: {
              color: "#fff",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#fff",
              background: "#750000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250922Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "610966",
                    src: getImageUrl("20250922Category11.png", true),
                  },
                  {
                    id: "449670",
                    src: getImageUrl("20250922Category12.png", true),
                  },
                  {
                    id: "644071",
                    src: getImageUrl("20250922Category13.png", true),
                  },
                  {
                    id: "643052",
                    src: getImageUrl("20250922Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#fff",
                src: getImageUrl("20250922Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "616605",
                    src: getImageUrl("20250922Category21.png", true),
                  },
                  {
                    id: "594184",
                    src: getImageUrl("20250922Category22.png", true),
                  },
                  {
                    id: "628747",
                    src: getImageUrl("20250922Category23.png", true),
                  },
                  {
                    id: "	443115",
                    src: getImageUrl("20250922Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000",
                src: getImageUrl("20250922Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "644556",
                    src: getImageUrl("20250922Category31.png", true),
                  },
                  {
                    id: "619991",
                    src: getImageUrl("20250922Category32.png", true),
                  },
                  {
                    id: "494633",
                    src: getImageUrl("20250922Category33.png", true),
                  },
                  {
                    id: "570577",
                    src: getImageUrl("20250922Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#750000",
                color: "#fff",
                src: getImageUrl("20250922Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/",
                products: [
                  {
                    id: "495420",
                    src: getImageUrl("20250922Category41.png", true),
                  },
                  {
                    id: "553106",
                    src: getImageUrl("20250922Category42.png", true),
                  },
                  {
                    id: "351437",
                    src: getImageUrl("20250922Category43.png", true),
                  },
                  {
                    id: "525527",
                    src: getImageUrl("20250922Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250922_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-22",
                },
              },
              {
                value: getImageUrl("20250922_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250912b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250911b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 22.09.25 - Free gift!",
                tableRange: "42:44",
                name: "condition",
              },
              // {
              //   tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
            freebies: {
              options: {
                color: "#ffffff",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "364500",
                      src: getImageUrl("20250922Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "364571",
                      src: getImageUrl("20250922Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358090",
                      src: getImageUrl("20250922Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "330436",
                      src: getImageUrl("20250922Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "346619",
                      src: getImageUrl("20250922Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "367111",
                      src: getImageUrl("20250922Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      //! 4 products copy from this campaign
      new entities.Campaign({
        date: "2025.09.15",
        issueCardId: "398007",
        name: "Gift for your outdoor: choose from 4 options",
        startId: "36910",
        figmaUrl:
          "https://www.figma.com/design/hEEerEFqDg19RHrJQpuHNl/Free-piece-of-furniture---Monday-2025.09.15--Copy-?node-id=0-1&p=f&t=DHCsfw1KK02XbT78-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250915Category1.gif", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "367977",
                    src: getImageUrl("20250915Category11.png", true),
                  },
                  {
                    id: "211351",
                    src: getImageUrl("20250915Category12.png", true),
                  },
                  {
                    id: "188385",
                    src: getImageUrl("20250915Category13.png", true),
                  },
                  {
                    id: "399232",
                    src: getImageUrl("20250915Category14.png", true),
                  },
                ],
              },
              {
                name: "Chairs",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250915Category2.gif", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
                products: [
                  {
                    id: "414231",
                    src: getImageUrl("20250915Category21.png", true),
                  },
                  {
                    id: "398621",
                    src: getImageUrl("20250915Category22.png", true),
                  },
                  {
                    id: "394185",
                    src: getImageUrl("20250915Category23.png", true),
                  },
                  {
                    id: "524007",
                    src: getImageUrl("20250915Category24.png", true),
                  },
                ],
              },
              {
                name: "Balcony sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250915Category3.gif", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "245297",
                    src: getImageUrl("20250915Category31.png", true),
                  },
                  {
                    id: "242847",
                    src: getImageUrl("20250915Category32.png", true),
                  },
                  {
                    id: "294478",
                    src: getImageUrl("20250915Category33.png", true),
                  },
                  {
                    id: "345950",
                    src: getImageUrl("20250915Category34.png", true),
                  },
                ],
              },
              {
                name: "Plant pots",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250915Category4.gif", true),
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
                products: [
                  {
                    id: "186293",
                    src: getImageUrl("20250915Category41.png", true),
                  },
                  {
                    id: "404374",
                    src: getImageUrl("20250915Category42.png", true),
                  },
                  {
                    id: "147172",
                    src: getImageUrl("20250915Category43.png", true),
                  },
                  {
                    id: "258354",
                    src: getImageUrl("20250915Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250915_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-15",
                },
              },
              {
                value: getImageUrl("20250915_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-05",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250905b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250904b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "39:41",
                name: "condition",
              },
              // {
              //   tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "192263",
                      src: getImageUrl("20250915Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                    },
                    {
                      id: "422508",
                      src: getImageUrl("20250915Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                    },
                  ],
                },
              ],
              items2: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "517685",
                      src: getImageUrl("20250915Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                    },
                    {
                      id: "517640",
                      src: getImageUrl("20250915Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250915Category1.gif", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "367977",
                    src: getImageUrl("20250915Category11.png", true),
                  },
                  {
                    id: "211351",
                    src: getImageUrl("20250915Category12.png", true),
                  },
                  {
                    id: "188385",
                    src: getImageUrl("20250915Category13.png", true),
                  },
                  {
                    id: "399232",
                    src: getImageUrl("20250915Category14.png", true),
                  },
                ],
              },
              {
                name: "Chairs",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250915Category2.gif", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
                products: [
                  {
                    id: "414231",
                    src: getImageUrl("20250915Category21.png", true),
                  },
                  {
                    id: "398621",
                    src: getImageUrl("20250915Category22.png", true),
                  },
                  {
                    id: "394185",
                    src: getImageUrl("20250915Category23.png", true),
                  },
                  {
                    id: "524007",
                    src: getImageUrl("20250915Category24.png", true),
                  },
                ],
              },
              {
                name: "Balcony sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250915Category3.gif", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "245297",
                    src: getImageUrl("20250915Category31.png", true),
                  },
                  {
                    id: "242847",
                    src: getImageUrl("20250915Category32.png", true),
                  },
                  {
                    id: "294478",
                    src: getImageUrl("20250915Category33.png", true),
                  },
                  {
                    id: "345950",
                    src: getImageUrl("20250915Category34.png", true),
                  },
                ],
              },
              {
                name: "Plant pots",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250915Category4.gif", true),
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
                products: [
                  {
                    id: "186293",
                    src: getImageUrl("20250915Category41.png", true),
                  },
                  {
                    id: "404374",
                    src: getImageUrl("20250915Category42.png", true),
                  },
                  {
                    id: "147172",
                    src: getImageUrl("20250915Category43.png", true),
                  },
                  {
                    id: "258354",
                    src: getImageUrl("20250915Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250915_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-15",
                },
              },
              {
                value: getImageUrl("20250915_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-05",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250905b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250904b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 15.09.25 - Free piece of furniture!",
                tableRange: "39:41",
                name: "condition",
              },
              // {
              //   tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "192263",
                      src: getImageUrl("20250915Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                    },
                    {
                      id: "422508",
                      src: getImageUrl("20250915Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                    },
                  ],
                },
              ],
              items2: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "517685",
                      src: getImageUrl("20250915Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                    },
                    {
                      id: "517640",
                      src: getImageUrl("20250915Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.09.08",
        issueCardId: "396190",
        name: "Free mirror: choose from 6 options",
        startId: "36696",
        figmaUrl:
          "https://www.figma.com/design/tClzZ6c8AQvnzoXKbO0ozg/2025.09.08-Free-mirrors--Copy-?node-id=0-1&p=f&t=qKRz0V58NQqRaeZJ-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFD3C2",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFD3C2",
            },
            intro: {
              background: "#FFEBE2",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFEBE2",
                color: "#000000",
                src: getImageUrl("20250908Category1.png", true),
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "133268",
                    src: getImageUrl("20250908Category11.png", true),
                  },
                  {
                    id: "258481",
                    src: getImageUrl("20250908Category12.png", true),
                  },
                  {
                    id: "514600",
                    src: getImageUrl("20250908Category13.png", true),
                  },
                  {
                    id: "395176",
                    src: getImageUrl("20250908Category14.png", true),
                  },
                ],
              },
              {
                name: "Sofas",
                background: "#FFD3C2",
                color: "#000000",
                src: getImageUrl("20250908Category2.png", true),
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "515832",
                    src: getImageUrl("20250908Category21.png", true),
                  },
                  {
                    id: "625361",
                    src: getImageUrl("20250908Category22.png", true),
                  },
                  {
                    id: "566117",
                    src: getImageUrl("20250908Category23.png", true),
                  },
                  {
                    id: "430523",
                    src: getImageUrl("20250908Category24.png", true),
                  },
                ],
              },
              {
                name: "Baths",
                background: "#FFEBE2",
                color: "#000000",
                src: getImageUrl("20250908Category3.png", true),
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "187579",
                    src: getImageUrl("20250908Category31.png", true),
                  },
                  {
                    id: "415142",
                    src: getImageUrl("20250908Category32.png", true),
                  },
                  {
                    id: "432492",
                    src: getImageUrl("20250908Category33.png", true),
                  },
                  {
                    id: "82000",
                    src: getImageUrl("20250908Category34.png", true),
                  },
                ],
              },
              {
                name: "Dressing tables",
                background: "#FFD3C2",
                color: "#000000",
                src: getImageUrl("20250908Category4.png", true),
                href: "https://www.beliani.ch/storage/dressing-tables/",
                products: [
                  {
                    id: "214136",
                    src: getImageUrl("20250908Category41.png", true),
                  },
                  {
                    id: "324548",
                    src: getImageUrl("20250908Category42.png", true),
                  },
                  {
                    id: "361398",
                    src: getImageUrl("20250908Category43.png", true),
                  },
                  {
                    id: "360934",
                    src: getImageUrl("20250908Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250908_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-08",
                },
              },
              {
                value: getImageUrl("20250908_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250829b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250828b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "40:42",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFD3C2",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "354924",
                      src: getImageUrl("20250908Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "572836",
                      src: getImageUrl("20250908Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "369238",
                      src: getImageUrl("20250908Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "572911",
                      src: getImageUrl("20250908Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "314253",
                      src: getImageUrl("20250908Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "355118",
                      src: getImageUrl("20250908Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFD3C2",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFD3C2",
            },
            intro: {
              background: "#FFEBE2",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFEBE2",
                color: "#000000",
                src: getImageUrl("20250908Category1.png", true),
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "133268",
                    src: getImageUrl("20250908Category11.png", true),
                  },
                  {
                    id: "258481",
                    src: getImageUrl("20250908Category12.png", true),
                  },
                  {
                    id: "514600",
                    src: getImageUrl("20250908Category13.png", true),
                  },
                  {
                    id: "395176",
                    src: getImageUrl("20250908Category14.png", true),
                  },
                ],
              },
              {
                name: "Sofas",
                background: "#FFD3C2",
                color: "#000000",
                src: getImageUrl("20250908Category2.png", true),
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "515832",
                    src: getImageUrl("20250908Category21.png", true),
                  },
                  {
                    id: "625361",
                    src: getImageUrl("20250908Category22.png", true),
                  },
                  {
                    id: "566117",
                    src: getImageUrl("20250908Category23.png", true),
                  },
                  {
                    id: "430523",
                    src: getImageUrl("20250908Category24.png", true),
                  },
                ],
              },
              {
                name: "Baths",
                background: "#FFEBE2",
                color: "#000000",
                src: getImageUrl("20250908Category3.png", true),
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "187579",
                    src: getImageUrl("20250908Category31.png", true),
                  },
                  {
                    id: "415142",
                    src: getImageUrl("20250908Category32.png", true),
                  },
                  {
                    id: "432492",
                    src: getImageUrl("20250908Category33.png", true),
                  },
                  {
                    id: "82000",
                    src: getImageUrl("20250908Category34.png", true),
                  },
                ],
              },
              {
                name: "Dressing tables",
                background: "#FFD3C2",
                color: "#000000",
                src: getImageUrl("20250908Category4.png", true),
                href: "https://www.beliani.ch/storage/dressing-tables/",
                products: [
                  {
                    id: "214136",
                    src: getImageUrl("20250908Category41.png", true),
                  },
                  {
                    id: "324548",
                    src: getImageUrl("20250908Category42.png", true),
                  },
                  {
                    id: "361398",
                    src: getImageUrl("20250908Category43.png", true),
                  },
                  {
                    id: "360934",
                    src: getImageUrl("20250908Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250908_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-08",
                },
              },
              {
                value: getImageUrl("20250908_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250829b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250828b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 08.09.25 - Free mirrors!",
                tableRange: "40:42",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFD3C2",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "354924",
                      src: getImageUrl("20250908Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "572836",
                      src: getImageUrl("20250908Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "369238",
                      src: getImageUrl("20250908Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "572911",
                      src: getImageUrl("20250908Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "314253",
                      src: getImageUrl("20250908Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "355118",
                      src: getImageUrl("20250908Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.09.01",
        issueCardId: "394869",
        name: "Free rain cover: choose from 4 sizes",
        startId: "36600",
        figmaUrl:
          "https://www.figma.com/design/BOXMwJrESA1AzHrAw6JwnU/2025.09.01---Newsletter---Free-rain-cover--Copy-?node-id=9001-3966&p=f&t=I9cQ8lSAG1WSRT2a-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFD6C5",
              color: "#000000",
            },
            categories: [
              {
                name: "Storage",
                background: "#FFD6C5",
                color: "#000000",
                src: getImageUrl("20250901Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
                products: [
                  {
                    id: "590504",
                    src: getImageUrl("20250901Category11.png", true),
                  },
                  {
                    id: "293954",
                    src: getImageUrl("20250901Category12.png", true),
                  },
                  {
                    id: "316496",
                    src: getImageUrl("20250901Category13.png", true),
                  },
                  {
                    id: "198292",
                    src: getImageUrl("20250901Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor lighting",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250901Category2.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-lights/",
                products: [
                  {
                    id: "619988",
                    src: getImageUrl("20250901Category21.png", true),
                  },
                  {
                    id: "588722",
                    src: getImageUrl("20250901Category22.png", true),
                  },
                  {
                    id: "567679",
                    src: getImageUrl("20250901Category23.png", true),
                  },
                  {
                    id: "561017",
                    src: getImageUrl("20250901Category24.png", true),
                  },
                ],
              },
              {
                name: "Textiles",
                background: "#FFD6C5",
                color: "#000000",
                src: getImageUrl("20250901Category3.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
                products: [
                  {
                    id: "613488",
                    src: getImageUrl("20250901Category31.png", true),
                  },
                  {
                    id: "613395",
                    src: getImageUrl("20250901Category32.png", true),
                  },
                  {
                    id: "565126",
                    src: getImageUrl("20250901Category33.png", true),
                  },
                  {
                    id: "565031",
                    src: getImageUrl("20250901Category34.png", true),
                  },
                ],
              },
              {
                name: "Heaters",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250901Category4.png", true),
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
                products: [
                  {
                    id: "599912",
                    src: getImageUrl("20250901Category41.png", true),
                  },
                  {
                    id: "300798",
                    src: getImageUrl("20250901Category42.png", true),
                  },
                  {
                    id: "600561",
                    src: getImageUrl("20250901Category43.png", true),
                  },
                  {
                    id: "300800",
                    src: getImageUrl("20250901Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-01",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250901_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-01",
                },
              },
              {
                value: getImageUrl("20250310_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250820b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250807b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "43:45",
                name: "condition",
              },
              // {
              //   tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258739",
                      src: getImageUrl("20250901Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "120 x 90 x 65 cm",
                    },
                    {
                      id: "258744",
                      src: getImageUrl("20250901Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "145 x 110 x 80 cm",
                    },
                  ],
                },
              ],
              items2: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258743",
                      src: getImageUrl("20250901Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "110 x 100 x 70 cm",
                    },
                    {
                      id: "258740",
                      src: getImageUrl("20250901Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "160 x 160 x 90 cm",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFD6C5",
              color: "#000000",
            },
            categories: [
              {
                name: "Storage",
                background: "#FFD6C5",
                color: "#000000",
                src: getImageUrl("20250901Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
                products: [
                  {
                    id: "590504",
                    src: getImageUrl("20250901Category11.png", true),
                  },
                  {
                    id: "293954",
                    src: getImageUrl("20250901Category12.png", true),
                  },
                  {
                    id: "316496",
                    src: getImageUrl("20250901Category13.png", true),
                  },
                  {
                    id: "198292",
                    src: getImageUrl("20250901Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor lighting",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250901Category2.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-lights/",
                products: [
                  {
                    id: "619988",
                    src: getImageUrl("20250901Category21.png", true),
                  },
                  {
                    id: "588722",
                    src: getImageUrl("20250901Category22.png", true),
                  },
                  {
                    id: "567679",
                    src: getImageUrl("20250901Category23.png", true),
                  },
                  {
                    id: "561017",
                    src: getImageUrl("20250901Category24.png", true),
                  },
                ],
              },
              {
                name: "Textiles",
                background: "#FFD6C5",
                color: "#000000",
                src: getImageUrl("20250901Category3.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
                products: [
                  {
                    id: "613488",
                    src: getImageUrl("20250901Category31.png", true),
                  },
                  {
                    id: "613395",
                    src: getImageUrl("20250901Category32.png", true),
                  },
                  {
                    id: "565126",
                    src: getImageUrl("20250901Category33.png", true),
                  },
                  {
                    id: "565031",
                    src: getImageUrl("20250901Category34.png", true),
                  },
                ],
              },
              {
                name: "Heaters",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250901Category4.png", true),
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
                products: [
                  {
                    id: "599912",
                    src: getImageUrl("20250901Category41.png", true),
                  },
                  {
                    id: "300798",
                    src: getImageUrl("20250901Category42.png", true),
                  },
                  {
                    id: "600561",
                    src: getImageUrl("20250901Category43.png", true),
                  },
                  {
                    id: "300800",
                    src: getImageUrl("20250901Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-01",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250901_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-01",
                },
              },
              {
                value: getImageUrl("20250310_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250820b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250807b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 01.09.25 - Free rain cover!",
                tableRange: "43:45",
                name: "condition",
              },
              // {
              //   tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258739",
                      src: getImageUrl("20250901Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "120 x 90 x 65 cm",
                    },
                    {
                      id: "258744",
                      src: getImageUrl("20250901Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "145 x 110 x 80 cm",
                    },
                  ],
                },
              ],
              items2: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258743",
                      src: getImageUrl("20250901Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "110 x 100 x 70 cm",
                    },
                    {
                      id: "258740",
                      src: getImageUrl("20250901Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "160 x 160 x 90 cm",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      //! 10.06 - peak start
      new entities.Campaign({
        startId: "36055",
        name: "Newsletter October peak start",
        date: "2025.10.06",
        issueCardId: "385176",
        figmaUrl:
          "https://www.figma.com/design/UbY6xMGUdZHioPgXAPh8jG/2025.10---October-Peak--Copy-?node-id=8001-3604&p=f&t=XxNK4pkkP30R2rmu-0 ",
        optimizeImg: false,
        single_image: false,
        soon_banners: true,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FD9000",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Lightning",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accesories",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-25",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250925b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250918b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "19",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "32",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "36:37",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "20:31",
                name: "categories",
              },
              // {
              //   tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              //   tableName: "Templates",
              //   tableRange: "?majorDimension=COLUMNS",
              //   name: "templates",
              //   tableColumns: false,
              // },
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            tit: {
              color: "#fff",
              type: "singleLine",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Lightning",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accesories",
                background: "#FD9000",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251006_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-25",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250925b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-09-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250918b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "17",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "19",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "32",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "36:37",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "06.10.25 - October Peak Start!",
                tableRange: "20:31",
                name: "categories",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "35798",
        name: "Newsletter August peak 3rd",
        date: "2025.08.18",
        issueCardId: "371996",
        figmaUrl:
          "https://www.figma.com/design/kIc7sPOX4zT7l65pYOp17b/2025.08---Newsletter---August-Peak--Copy---Copy---Copy-?node-id=10002-646&p=f&t=z6f9YFfz85btltfx-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.categoryPeakRegular,
            background: "#FFCEB5",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCEB5",
              color: "#000000",
              align: "center",
            },
            categories: [
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_1_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_2_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/sofas/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_3_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/beds/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_4_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/armchairs/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_5_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/chairs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_6_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/tables/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_7_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/storage/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_8_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/children-room/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_9_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/textiles/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_10_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/lighting/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_11_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_12_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/office-furniture/desks-eng/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_13_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/rugs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_14_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                },
              ],
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-18",
                },
              },
              {
                value: getImageUrl("20250818_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250808b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.categoryPeakRegular,
            background: "#FFCEB5",
            css: types.CSS.LP,
            intro: {
              background: "#FFCEB5",
              color: "#000000",
              align: "center",
            },
            categories: [
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_1_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_2_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/sofas/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_3_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/beds/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_4_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/armchairs/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_5_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/chairs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_6_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/tables/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_7_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/storage/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_8_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/children-room/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_9_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/textiles/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_10_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/lighting/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_11_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_12_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/office-furniture/desks-eng/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_13_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/rugs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value: getImageUrl("_cat_14_20250818.png", true),
                  },
                  href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                },
              ],
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-18",
                },
              },
              {
                value: getImageUrl("20250818_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250808b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.08.12",
        issueCardId: "387775",
        name: "Newsletter Free outdoor rug",
        startId: "35927",
        figmaUrl:
          "https://www.figma.com/design/KDugPGCUfYqaSEWc99KPdz/2025.08.12---Free-outdoor-rug--Copy-?node-id=0-1&p=f&t=SDxlHcoR4u1rjjHH-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFE0D4",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFE0D4",
            },
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250812_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-12",
                },
              },
              {
                value: getImageUrl("20250812_gif.png", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250731b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "29",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "34:36",
                name: "condition",
              },
              {
                tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFE0D4",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "185873",
                      src: getImageUrl("20250812Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "228644",
                      src: getImageUrl("20250812Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "185932",
                      src: getImageUrl("20250812Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "185861",
                      src: getImageUrl("20250812Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "186199",
                      src: getImageUrl("20250812Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "97570",
                      src: getImageUrl("20250812Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFE0D4",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFE0D4",
            },
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250812_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-12",
                },
              },
              {
                value: getImageUrl("20250812_gif.png", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250731b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "29",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.08.25 - Free outdoor rug!",
                tableRange: "34:36",
                name: "condition",
              },
              {
                tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFE0D4",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "185873",
                      src: getImageUrl("20250812Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "228644",
                      src: getImageUrl("20250812Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "185932",
                      src: getImageUrl("20250812Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "185861",
                      src: getImageUrl("20250812Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "186199",
                      src: getImageUrl("20250812Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "97570",
                      src: getImageUrl("20250812Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "35766",
        name: "Newsleter August peak 2nd",
        date: "2025.08.11",
        issueCardId: "371996",
        figmaUrl:
          "https://www.figma.com/design/kIc7sPOX4zT7l65pYOp17b/2025.08---Newsletter---August-Peak--Copy---Copy---Copy-?node-id=10002-646&p=f&t=z6f9YFfz85btltfx-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FEE3BF",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FEE3BF",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Lightning",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                name: "Bath",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desk",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accesories",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-11",
                },
              },
              {
                value: getImageUrl("20250811_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250731b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "30:31",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "13:25",
                name: "categories",
              },
              {
                tableId: "1ngzefT6Zaeiv4cJBsENkBu-Y1K1ROGP6XcccqcOqZ70",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FEE3BF",
            css: types.CSS.LP,
            intro: {
              background: "#FEE3BF",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Lightning",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                name: "Bath",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desk",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accesories",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-11",
                },
              },
              {
                value: getImageUrl("20250811_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250731b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "30:31",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "13:25",
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
            ],
          },
        ],
      }),
      //! 28.07.25 link in intro
      new entities.Campaign({
        date: "2025.07.28",
        issueCardId: "384178",
        name: "Free picnic blanket",
        startId: "35606",
        figmaUrl:
          "https://www.figma.com/design/r6jH4RVhSlcO5zRaon2xi5/2025.07.28---Newsletter---Free-picnic-blankets--Copy-?node-id=10002-9061&t=F8gimslEysau97n0-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "521156",
                    src: getImageUrl("20250728Category11.png", true),
                  },
                  {
                    id: "197502",
                    src: getImageUrl("20250728Category12.png", true),
                  },
                  {
                    id: "580449",
                    src: getImageUrl("20250728Category13.png", true),
                  },
                  {
                    id: "108682",
                    src: getImageUrl("20250728Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                products: [
                  {
                    id: "311209",
                    src: getImageUrl("20250728Category21.png", true),
                  },
                  {
                    id: "82212",
                    src: getImageUrl("20250728Category22.png", true),
                  },
                  {
                    id: "555774",
                    src: getImageUrl("20250728Category23.png", true),
                  },
                  {
                    id: "517382",
                    src: getImageUrl("20250728Category24.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category3.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                products: [
                  {
                    id: "585509",
                    src: getImageUrl("20250728Category31.png", true),
                  },
                  {
                    id: "365818",
                    src: getImageUrl("20250728Category32.png", true),
                  },
                  {
                    id: "441941",
                    src: getImageUrl("20250728Category33.png", true),
                  },
                  {
                    id: "385897",
                    src: getImageUrl("20250728Category34.png", true),
                  },
                ],
              },
              {
                name: "Outdoor cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category4.png", true),
                href: "https://www.beliani.ch/outdoor-textiles/cushions-for-garden/",
                products: [
                  {
                    id: "613583",
                    src: getImageUrl("20250728Category41.png", true),
                  },
                  {
                    id: "613091",
                    src: getImageUrl("20250728Category42.png", true),
                  },
                  {
                    id: "613451",
                    src: getImageUrl("20250728Category43.png", true),
                  },
                  {
                    id: "613111 ",
                    src: getImageUrl("20250728Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250728_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                value: getImageUrl("20250728_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250718b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "31:35",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "40",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "36:39",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "45:47",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564690",
                      src: getImageUrl("20250728Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "150 x 200 cm",
                    },
                    {
                      id: "564651",
                      src: getImageUrl("20250728Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "150 x 200 cm",
                    },
                  ],
                },
              ],
              items2: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564480",
                      src: getImageUrl("20250728Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "150 x 200 cm",
                    },
                    {
                      id: "564461",
                      src: getImageUrl("20250728Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "150 x 200 cm",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "521156",
                    src: getImageUrl("20250728Category11.png", true),
                  },
                  {
                    id: "197502",
                    src: getImageUrl("20250728Category12.png", true),
                  },
                  {
                    id: "580449",
                    src: getImageUrl("20250728Category13.png", true),
                  },
                  {
                    id: "108682",
                    src: getImageUrl("20250728Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                products: [
                  {
                    id: "311209",
                    src: getImageUrl("20250728Category21.png", true),
                  },
                  {
                    id: "82212",
                    src: getImageUrl("20250728Category22.png", true),
                  },
                  {
                    id: "555774",
                    src: getImageUrl("20250728Category23.png", true),
                  },
                  {
                    id: "517382",
                    src: getImageUrl("20250728Category24.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category3.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                products: [
                  {
                    id: "585509",
                    src: getImageUrl("20250728Category31.png", true),
                  },
                  {
                    id: "365818",
                    src: getImageUrl("20250728Category32.png", true),
                  },
                  {
                    id: "441941",
                    src: getImageUrl("20250728Category33.png", true),
                  },
                  {
                    id: "385897",
                    src: getImageUrl("20250728Category34.png", true),
                  },
                ],
              },
              {
                name: "Outdoor cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category4.png", true),
                href: "https://www.beliani.ch/outdoor-textiles/cushions-for-garden/",
                products: [
                  {
                    id: "613583",
                    src: getImageUrl("20250728Category41.png", true),
                  },
                  {
                    id: "613091",
                    src: getImageUrl("20250728Category42.png", true),
                  },
                  {
                    id: "613451",
                    src: getImageUrl("20250728Category43.png", true),
                  },
                  {
                    id: "613111 ",
                    src: getImageUrl("20250728Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250728_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                value: getImageUrl("20250728_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250718b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "31:35",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "40",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "36:39",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "45:47",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564690",
                      src: getImageUrl("20250728Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "150 x 200 cm",
                    },
                    {
                      id: "564651",
                      src: getImageUrl("20250728Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "150 x 200 cm",
                    },
                  ],
                },
              ],
              items2: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564480",
                      src: getImageUrl("20250728Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: "150 x 200 cm",
                    },
                    {
                      id: "564461",
                      src: getImageUrl("20250728Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: "150 x 200 cm",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.07.21",
        issueCardId: "381552",
        name: "Free wall art",
        startId: "35380",
        figmaUrl:
          "https://www.figma.com/design/dglbBtHL4nvc5RDvR1iN7M/2025.07.21---Free-wall-art--Copy-?node-id=0-1&p=f&t=FdYEj8itumbJ3k7S-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category1.png", true),
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "619891",
                    src: getImageUrl("20250721Category11.png", true),
                  },
                  {
                    id: "616415",
                    src: getImageUrl("20250721Category12.png", true),
                  },
                  {
                    id: "610567",
                    src: getImageUrl("20250721Category13.png", true),
                  },
                  {
                    id: "518913",
                    src: getImageUrl("20250721Category14.png", true),
                  },
                ],
              },
              {
                name: "Mattresses",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/mattresses/",
                products: [
                  {
                    id: "414109",
                    src: getImageUrl("20250721Category21.png", true),
                  },
                  {
                    id: "610414",
                    src: getImageUrl("20250721Category22.png", true),
                  },
                  {
                    id: "570747",
                    src: getImageUrl("20250721Category23.png", true),
                  },
                  {
                    id: "495205",
                    src: getImageUrl("20250721Category24.png", true),
                  },
                ],
              },
              {
                name: "Bedside tables",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category3.png", true),
                href: "https://www.beliani.ch/storage/bedside-tables/",
                products: [
                  {
                    id: "624200",
                    src: getImageUrl("20250721Category31.png", true),
                  },
                  {
                    id: "609457",
                    src: getImageUrl("20250721Category32.png", true),
                  },
                  {
                    id: "607518",
                    src: getImageUrl("20250721Category33.png", true),
                  },
                  {
                    id: "391691",
                    src: getImageUrl("20250721Category34.png", true),
                  },
                ],
              },
              {
                name: "Dressing tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category4.png", true),
                href: "https://www.beliani.ch/storage/dressing-tables/",
                products: [
                  {
                    id: "214136",
                    src: getImageUrl("20250721Category41.png", true),
                  },
                  {
                    id: "361452",
                    src: getImageUrl("20250721Category42.png", true),
                  },
                  {
                    id: "361361",
                    src: getImageUrl("20250721Category43.png", true),
                  },
                  {
                    id: "360774",
                    src: getImageUrl("20250721Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250721_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                value: getImageUrl("20250721_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250711b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250710b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "33",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "38:40",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226413",
                      src: getImageUrl("20250721Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 0px;",
                    },
                    {
                      id: "226327",
                      src: getImageUrl("20250721Freebie2.png", true),
                      style: "padding-right: 5px; padding-left: 5px;",
                    },
                    {
                      id: "226448",
                      src: getImageUrl("20250721Freebie3.png", true),
                      style: "padding-right: 0px; padding-left: 5px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226449",
                      src: getImageUrl("20250721Freebie4.png", true),
                      style: "padding-right: 5px; padding-left: 0px;",
                    },
                    {
                      id: "231007",
                      src: getImageUrl("20250721Freebie5.png", true),
                      style: "padding-right: 5px; padding-left: 5px;",
                    },
                    {
                      id: "226459",
                      src: getImageUrl("20250721Freebie6.png", true),
                      style: "padding-right: 0px; padding-left: 5px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category1.png", true),
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "619891",
                    src: getImageUrl("20250721Category11.png", true),
                  },
                  {
                    id: "616415",
                    src: getImageUrl("20250721Category12.png", true),
                  },
                  {
                    id: "610567",
                    src: getImageUrl("20250721Category13.png", true),
                  },
                  {
                    id: "518913",
                    src: getImageUrl("20250721Category14.png", true),
                  },
                ],
              },
              {
                name: "Mattresses",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/mattresses/",
                products: [
                  {
                    id: "414109",
                    src: getImageUrl("20250721Category21.png", true),
                  },
                  {
                    id: "610414",
                    src: getImageUrl("20250721Category22.png", true),
                  },
                  {
                    id: "570747",
                    src: getImageUrl("20250721Category23.png", true),
                  },
                  {
                    id: "495205",
                    src: getImageUrl("20250721Category24.png", true),
                  },
                ],
              },
              {
                name: "Bedside tables",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category3.png", true),
                href: "https://www.beliani.ch/storage/bedside-tables/looks/",
                products: [
                  {
                    id: "624200",
                    src: getImageUrl("20250721Category31.png", true),
                  },
                  {
                    id: "609457",
                    src: getImageUrl("20250721Category32.png", true),
                  },
                  {
                    id: "607518",
                    src: getImageUrl("20250721Category33.png", true),
                  },
                  {
                    id: "391691",
                    src: getImageUrl("20250721Category34.png", true),
                  },
                ],
              },
              {
                name: "Dressing tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category4.png", true),
                href: "https://www.beliani.ch/storage/dressing-tables/",
                products: [
                  {
                    id: "214136",
                    src: getImageUrl("20250721Category41.png", true),
                  },
                  {
                    id: "361452",
                    src: getImageUrl("20250721Category42.png", true),
                  },
                  {
                    id: "361361",
                    src: getImageUrl("20250721Category43.png", true),
                  },
                  {
                    id: "360774",
                    src: getImageUrl("20250721Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250721_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                value: getImageUrl("20250721_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250711b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250710b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "33",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "38:40",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226413",
                      src: getImageUrl("20250721Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "226327",
                      src: getImageUrl("20250721Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "226448",
                      src: getImageUrl("20250721Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226449",
                      src: getImageUrl("20250721Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "231007",
                      src: getImageUrl("20250721Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "226459",
                      src: getImageUrl("20250721Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      //! If you need img under Category
      new entities.Campaign({
        date: "2025.07.14",
        issueCardId: "378714",
        name: "Free tables",
        startId: "35220",
        figmaUrl:
          "https://www.figma.com/design/eETTfGpbqQsGbbq5gC77oC/Newsletter-Free-parasol---Monday-2025.07.14--Copy-?node-id=0-1&p=f&t=fCzmXljP1WKLFpXB-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Outdoor furniture",
                background: "#FFCCB7",
                color: "#000000",
                align: "center",
                src: getImageUrl("20250714Category1.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat1.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat2.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat3.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat4.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                  },
                ],
              },
              {
                name: "Outdoor accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category2.png", true),
                href: "https://www.beliani.ch/garden-furniture/garden-accessories/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat5.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat6.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat7.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat8.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-fountains/",
                  },
                ],
              },
              {
                name: "Outdoor seating",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category3.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat9.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat10.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat11.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat12.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-pouffes/",
                  },
                ],
              },
              {
                name: "Outdoor dining",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat13.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat14.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/picnic-basket/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat15.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-textiles/picnic-blankets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat16.png", true),
                    },
                    href: "https://www.beliani.ch/home-accessories/kitchenware-tableware/",
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250714_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                value: getImageUrl("20250714_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250704b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250703b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "49",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "54:56",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56278",
                      src: getImageUrl("20250714Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "116296",
                      src: getImageUrl("20250714Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56284",
                      src: getImageUrl("20250714Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "56281",
                      src: getImageUrl("20250714Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Outdoor furniture",
                background: "#FFCCB7",
                color: "#000000",
                align: "center",
                src: getImageUrl("20250714Category1.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat1.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat2.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat3.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat4.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                  },
                ],
              },
              {
                name: "Outdoor accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category2.png", true),
                href: "https://www.beliani.ch/garden-furniture/garden-accessories/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat5.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat6.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat7.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat8.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-fountains/",
                  },
                ],
              },
              {
                name: "Outdoor seating",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category3.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat9.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat10.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat11.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat12.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-pouffes/",
                  },
                ],
              },
              {
                name: "Outdoor dining",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat13.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat14.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/picnic-basket/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat15.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-textiles/picnic-blankets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat16.png", true),
                    },
                    href: "https://www.beliani.ch/home-accessories/kitchenware-tableware/",
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250714_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                value: getImageUrl("20250714_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250704b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250703b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "49",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "54:56",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56278",
                      src: getImageUrl("20250714Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "116296",
                      src: getImageUrl("20250714Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56284",
                      src: getImageUrl("20250714Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "56281",
                      src: getImageUrl("20250714Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "35910",
        name: "Newsletter August peak start",
        date: "2025.08.04",
        issueCardId: "371993",
        figmaUrl:
          "https://www.figma.com/design/kIc7sPOX4zT7l65pYOp17     b/2025.08---Newsletter---August-Peak--Copy---Copy---Copy-?node-id=10002-646&p=f&t=z6f9YFfz85btltfx-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: true,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              color: "#000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat2.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat4.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat5.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat6.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat7.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Kids",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat8.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                value: getImageUrl("20250804_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250716b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "16",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "25",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "29:30",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "17:24",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat2.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat4.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat5.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat6.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat7.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Kids",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat8.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                value: getImageUrl("20250804_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250716b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "16",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "25",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "29:30",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "17:24",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.07.07",
        issueCardId: "376859",
        name: "Free animal rug",
        startId: "34609",
        figmaUrl:
          "https://www.figma.com/design/SOQnnTb5HPKdvatVTepxGL/2025.07.07---Newsletter---Free-animal-rug--Copy-?node-id=0-1&p=f&t=sfsBH8sQ8CfWEr1A-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/?sort=newest",
                products: [
                  {
                    id: "618593",
                    src: getImageUrl("20250707Category11.png", true),
                  },
                  {
                    id: "618592",
                    src: getImageUrl("20250707Category12.png", true),
                  },
                  {
                    id: "610012",
                    src: getImageUrl("20250707Category13.png", true),
                  },
                  {
                    id: "595122",
                    src: getImageUrl("20250707Category14.png", true),
                  },
                ],
              },
              {
                name: "Textiles and playmats",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/?sort=newest",
                products: [
                  {
                    id: "613828",
                    src: getImageUrl("20250707Category21.png", true),
                  },
                  {
                    id: "613886",
                    src: getImageUrl("20250707Category22.png", true),
                  },
                  {
                    id: "612996",
                    src: getImageUrl("20250707Category23.png", true),
                  },
                  {
                    id: "457133",
                    src: getImageUrl("20250707Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/?sort=newest",
                products: [
                  {
                    id: "609650",
                    src: getImageUrl("20250707Category31.png", true),
                  },
                  {
                    id: "610683",
                    src: getImageUrl("20250707Category32.png", true),
                  },
                  {
                    id: "609498",
                    src: getImageUrl("20250707Category33.png", true),
                  },
                  {
                    id: "593319",
                    src: getImageUrl("20250707Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/?sort=newest",
                products: [
                  {
                    id: "575422",
                    src: getImageUrl("20250707Category41.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250707Category42.png", true),
                  },
                  {
                    id: "525379",
                    src: getImageUrl("20250707Category43.png", true),
                  },
                  {
                    id: "575345",
                    src: getImageUrl("20250707Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250707_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                value: getImageUrl("20250707_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250627b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-26",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250626b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "41:43",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "407826",
                      src: getImageUrl("20250707Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407724",
                      src: getImageUrl("20250707Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407690",
                      src: getImageUrl("20250707Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    //if you have 5 freebies 4 and 5 added 60px
                    {
                      id: "407670",
                      src: getImageUrl("20250707Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 60px;",
                    },
                    {
                      id: "409966",
                      src: getImageUrl("20250707Freebie5.png", true),
                      style: "padding-right: 60px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/?sort=newest",
                products: [
                  {
                    id: "618593",
                    src: getImageUrl("20250707Category11.png", true),
                  },
                  {
                    id: "618592",
                    src: getImageUrl("20250707Category12.png", true),
                  },
                  {
                    id: "610012",
                    src: getImageUrl("20250707Category13.png", true),
                  },
                  {
                    id: "595122",
                    src: getImageUrl("20250707Category14.png", true),
                  },
                ],
              },
              {
                name: "Textiles and playmats",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/?sort=newest",
                products: [
                  {
                    id: "613828",
                    src: getImageUrl("20250707Category21.png", true),
                  },
                  {
                    id: "613886",
                    src: getImageUrl("20250707Category22.png", true),
                  },
                  {
                    id: "612996",
                    src: getImageUrl("20250707Category23.png", true),
                  },
                  {
                    id: "457133",
                    src: getImageUrl("20250707Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/?sort=newest",
                products: [
                  {
                    id: "609650",
                    src: getImageUrl("20250707Category31.png", true),
                  },
                  {
                    id: "610683",
                    src: getImageUrl("20250707Category32.png", true),
                  },
                  {
                    id: "609498",
                    src: getImageUrl("20250707Category33.png", true),
                  },
                  {
                    id: "593319",
                    src: getImageUrl("20250707Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/?sort=newest",
                products: [
                  {
                    id: "575422",
                    src: getImageUrl("20250707Category41.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250707Category42.png", true),
                  },
                  {
                    id: "525379",
                    src: getImageUrl("20250707Category43.png", true),
                  },
                  {
                    id: "575345",
                    src: getImageUrl("20250707Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("202507-07_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                value: getImageUrl("20250707_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250627b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-26",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250626b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "41:43",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "407826",
                      src: getImageUrl("20250707Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407724",
                      src: getImageUrl("20250707Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407690",
                      src: getImageUrl("20250707Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "407670",
                      src: getImageUrl("20250707Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "409966",
                      src: getImageUrl("20250707Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "33840",
        name: "Beliani Birthday 3",
        date: "2025.06.16",
        issueCardId: "359497",
        figmaUrl:
          "https://www.figma.com/design/rxc8ngekcsg4hd8sqKe9XN/Beliani-Birthday-3---Monday-2025.06.16--Copy---Copy-?node-id=1-99&t=DQEboyFp7OBlhRoX-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FD9000",
              color: "#000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat8.png", true),
                },
                href: "https://www.beliani.co.uk/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat10.png", true),
                },
                href: "https://www.beliani.ch/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250606b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "27",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "31:32",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "15:26",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            intro: {
              background: "#FD9000",
              color: "#000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat8.png", true),
                },
                href: "https://www.beliani.co.uk/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat10.png", true),
                },
                href: "https://www.beliani.ch/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250606b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "27",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "31:32",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "15:26",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "33776",
        name: "Beliani Birthday 2",
        date: "2025.06.09",
        issueCardId: "359294",
        figmaUrl:
          "https://www.figma.com/design/54wLNano2eXcQDhl2772p8/Beliani-Birthday-2---Monday-2025.06.09--Copy-?node-id=0-1&p=f&t=jGGZ8LD9WBtbeTy3-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: true,
        full_img_width: true,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#750000",
              color: "#fff",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Garden",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat2.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat3.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Home Office",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat4.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat5.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat6.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Dining room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat7.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat8.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
              {
                isCategoriesDB: true,
                name: "Kids room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat9.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250528b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250522b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "24",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "28:29",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "15:23",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#750000",
            css: types.CSS.LP,
            intro: {
              background: "#750000",
              color: "#FFFFFF",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Garden",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat2.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat3.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Home Office",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat4.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat5.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat6.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Dining room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat7.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat8.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
              {
                isCategoriesDB: true,
                name: "Kids room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat9.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250528b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250522b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "24",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "28:29",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "15:23",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "32965",
        name: "Beliani Birthday Start",
        date: "2025.06.02",
        issueCardId: "359284",
        figmaUrl:
          "https://www.figma.com/design/fu1KpVQ9E8u07abWbbUa4w/Beliani-Birthday-start---Monday-2025.06.02--Copy-?t=Wl9NAacsA1p65rAf-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: true,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
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
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
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
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250515b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250514b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
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
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250515b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250514b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "Only LP CHDE",
        issueCardId: "356826",
        name: "landing page for Switzerland",
        startId: "00001",
        figmaUrl:
          "https://www.figma.com/design/lQjEZ6ixjvFG5Iz7ArNY4y/2025.04---10--Landing-Page?node-id=8020-1035&p=f&t=Yso7cxdxwX9X8KGz-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Cosy for Two",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "522681", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250428Category11.png", true), //origin.includes("HU") ? getImageUrl("20250428Category11.png", true) : getImageUrl("20250428huCategory11.png", true),
                  },
                  {
                    id: "596587",
                    src: getImageUrl("20250428Category12.png", true),
                  },
                  {
                    id: "557385",
                    src: getImageUrl("20250428Category13.png", true),
                  },
                  {
                    id: "294544",
                    src: getImageUrl("20250428Category14.png", true),
                  },
                ],
              },
              {
                name: "Ideal for four",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category2.png", true),
                href: "",
                products: [
                  {
                    id: "588436",
                    src: getImageUrl("20250428Category21.png", true),
                  },
                  {
                    id: "525622",
                    src: getImageUrl("20250428Category22.png", true),
                  },
                  {
                    id: "257696",
                    src: getImageUrl("20250428Category23.png", true),
                  },
                  {
                    id: "569903",
                    src: getImageUrl("20250428Category24.png", true),
                  },
                ],
              },
              {
                name: "Spacious for six",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category3.png", true),
                href: "",
                products: [
                  {
                    id: "585606",
                    src: getImageUrl("20250428Category31.png", true),
                  },
                  {
                    id: "523743",
                    src: getImageUrl("20250428Category32.png", true),
                  },
                  {
                    id: "419180",
                    src: getImageUrl("20250428Category33.png", true),
                  },
                  {
                    id: "294731",
                    src: getImageUrl("20250428Category34.png", true),
                  },
                ],
              },
              {
                name: "Ultimate 8-seater sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category4.png", true),
                href: "",
                products: [
                  {
                    id: "192221",
                    src: getImageUrl("20250428Category41.png", true),
                  },
                  {
                    id: "140721",
                    src: getImageUrl("20250428Category42.png", true),
                  },
                  {
                    id: "146646",
                    src: getImageUrl("20250428Category43.png", true),
                  },
                  {
                    id: "71531",
                    src: getImageUrl("20250428Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250428_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "42:44",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.CategoriesGrid,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
              conditions:
                "Ausschliesslich ein Gutschein pro Person und Bestellung einlösbar. Der Gutschein ist nicht mit anderen Gutscheinaktionen kombinierbar. Dieses Angebot ist gültig bis zum 31.05.2025. Dieser Voucher gilt nicht für offene Bestellungen. Dieses Angebot richtet sich nicht an Wiederverkäufer. Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",
            },
            categories: [
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat1.png",
                  },
                  href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat2.png",
                  },
                  href: "https://www.beliani.ch/sofas/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat3.png",
                  },
                  href: "https://www.beliani.ch/beds/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat4.png",
                  },
                  href: "https://www.beliani.ch/armchairs/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat5.png",
                  },
                  href: "https://www.beliani.ch/chairs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat6.png",
                  },
                  href: "https://www.beliani.ch/tables/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat7.png",
                  },
                  href: "https://www.beliani.ch/storage/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat8.png",
                  },
                  href: "https://www.beliani.ch/children-room/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat9.png",
                  },
                  href: "https://www.beliani.ch/textiles/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat10.png",
                  },
                  href: "https://www.beliani.ch/lighting/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat11.png",
                  },
                  href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat12.png",
                  },
                  href: "https://www.beliani.ch/office-furniture/desks-eng/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat13.png",
                  },
                  href: "https://www.beliani.ch/rugs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat14.png",
                  },
                  href: "https://www.beliani.ch/home-accessories/",
                },
              ],
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/rabatt10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("rabatt10.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/rabatt10",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 22.01.24 - Winter sale 2nd reminder!",
                tableRange: "81",
                name: "condition",
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
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "00004",
        name: "Newsletter October peak 3rd - Monday",
        date: "2025.10.20",
        issueCardId: "333992",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
              color: "#750000",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category1.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category2.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category3.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category4.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category5.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category6.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category7.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category8.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020Category12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251020_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251018b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-10-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20251013b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "20.10.25 - October Peak 3rd!",
                tableRange: "16:27",
                name: "category",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("test111.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat3.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat11.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/ ",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
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
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("202503024_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250320b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250313b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.04.21",
        issueCardId: "334022",
        name: "March Peak - Earth Day",
        startId: "32388",
        figmaUrl:
          "https://www.figma.com/design/IjK9bpuYSsDvyYGnJwhnQG/2025.04.07-Free-scatter-cushion-(Copy)?m=auto&fuid=1328681953229888224",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.MondayEarthDayNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            earth: {
              background: "#FFCCB7",
              color: "#000000",
            },
            EarthDaySrc: [
              {
                src: getImageUrl("20250421Earth1.png", true),
              },
              {
                src: getImageUrl("20250421Earth2.png", true),
              },
              {
                src: getImageUrl("20250421Earth3.png", true),
              },
            ],
            categories: [
              {
                name: "Natural materials",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category1.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "514447",
                    src: getImageUrl("20250421Category11.png", true),
                  },
                  {
                    id: "371401",
                    src: getImageUrl("20250421Category12.png", true),
                  },
                  {
                    id: "408516",
                    src: getImageUrl("20250421Category13.png", true),
                  },
                  {
                    id: "433272",
                    src: getImageUrl("20250421Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor spaces",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250421Category2.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "76376",
                    src: getImageUrl("20250421Category21.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250421Category22.png", true),
                  },
                  {
                    id: "598184",
                    src: getImageUrl("20250421Category23.png", true),
                  },
                  {
                    id: "587558",
                    src: getImageUrl("20250421Category24.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category3.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "315442",
                    src: getImageUrl("20250421Category31.png", true),
                  },
                  {
                    id: "426151",
                    src: getImageUrl("20250421Category32.png", true),
                  },
                  {
                    id: "437955",
                    src: getImageUrl("20250421Category33.png", true),
                  },
                  {
                    id: "558373",
                    src: getImageUrl("20250421Category34.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
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
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250421_gif.gif", true),
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
                  value: getImageUrl("20250414b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250411b.png", true),
                },
              },
              // {
              //   query: true,
              //   href: {
              //     type: "relation",
              //     relyOn: "origin",
              //     placeholderPosition: "0",
              //     value: "content/lp25-03-03",
              //   },
              // },
              // {
              //   src: {
              //     type: "relation",
              //     relyOn: "slug",
              //     placeholderPosition: "38",
              //     value:
              //       getImageUrl("_20250307.png", true),
              //   },
              // },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "17:18",
                name: "introEarth",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "19:22",
                name: "EarthDayPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "24",
                name: "earthHref",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "23",
                name: "earthCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "31",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "25:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "14:16",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "36:37",
                name: "condition",
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
            ],
            footer_cat: [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_01.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_02.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_03.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_04.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_05.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_06.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_07.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_08.png", true),
                },
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.MondayEarthDayNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            earth: {
              background: "#FFCCB7",
              color: "#000000",
            },
            EarthDaySrc: [
              {
                src: getImageUrl("20250421Earth1.png", true),
              },
              {
                src: getImageUrl("20250421Earth2.png", true),
              },
              {
                src: getImageUrl("20250421Earth3.png", true),
              },
            ],
            categories: [
              {
                name: "Natural materials",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category1.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "514447",
                    src: getImageUrl("20250421Category11.png", true),
                  },
                  {
                    id: "371401",
                    src: getImageUrl("20250421Category12.png", true),
                  },
                  {
                    id: "408516",
                    src: getImageUrl("20250421Category13.png", true),
                  },
                  {
                    id: "433272",
                    src: getImageUrl("20250421Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor spaces",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250421Category2.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "76376",
                    src: getImageUrl("20250421Category21.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250421Category22.png", true),
                  },
                  {
                    id: "598184",
                    src: getImageUrl("20250421Category23.png", true),
                  },
                  {
                    id: "587558",
                    src: getImageUrl("20250421Category24.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category3.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "315442",
                    src: getImageUrl("20250421Category31.png", true),
                  },
                  {
                    id: "426151",
                    src: getImageUrl("20250421Category32.png", true),
                  },
                  {
                    id: "437955",
                    src: getImageUrl("20250421Category33.png", true),
                  },
                  {
                    id: "558373",
                    src: getImageUrl("20250421Category34.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
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
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250421_gif.gif", true),
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
                  value: getImageUrl("20250414b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250411b.png", true),
                },
              },
              // {
              //   query: true,
              //   href: {
              //     type: "relation",
              //     relyOn: "origin",
              //     placeholderPosition: "0",
              //     value: "content/lp25-03-03",
              //   },
              // },
              // {
              //   src: {
              //     type: "relation",
              //     relyOn: "slug",
              //     placeholderPosition: "38",
              //     value:
              //       getImageUrl("_20250307.png", true),
              //   },
              // },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "11",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "17:18",
                name: "introEarth",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "19:22",
                name: "EarthDayPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "24",
                name: "earthHref",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "23",
                name: "earthCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "31",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "25:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "14:16",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "36:37",
                name: "condition",
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
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "30425",
        name: "March Peak reminder",
        date: "2025.04.14",
        issueCardId: "334000",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.CategoriesRows,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
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
            ],
            links: [
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
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "21",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "25:26",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "13:20",
                name: "category",
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
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.CategoriesRows,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
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
            ],
            links: [
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
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "10",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "21",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "25:26",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "13:20",
                name: "category",
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
            ],
          },
        ],
      }),
    ],
    shops: SHOPS,

    config: {
      server_url: "https://pictureserver.net/static/2024/",
      campaign_url: "https://www.prologistics.info/news_email.php?id=",
      issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
      alarm_days: 7,
      confetti: true,
      replaceToBrs: true,
      emptyCell: (message) =>
        `<span style='font-size: 20px; background: #ff0000;'>${message || "Cell is empty"}</span>`,
    },
  });
} catch (error) {
  console.log(error);
  Toastify({
    text: error.message || "Something went wrong. More details in console.",
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
