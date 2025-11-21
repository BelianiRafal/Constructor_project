import { Shop } from "../entities/Shop.js";
import LANGUAGES from "./languages.js";
export default [
  new Shop({
    origin: "https://www.beliani.ch/",
    shopId: "1",
    seller: "Beliani.ch",
    slug: "CHDE",
    languages: [
      {
        language: LANGUAGES.CHDE,
        tableColumn: "N",
      },
      {
        language: LANGUAGES.CHIT,
        tableColumn: "AV",
      },
      {
        language: LANGUAGES.CHFR,
        tableColumn: "T",
      },
      {
        language: LANGUAGES.CHFR_Mattress,
        tableColumn: "H",
      },
      {
        language: LANGUAGES.CHDE_Mattress,
        tableColumn: "J",
      },
    ],
    price_format: {
      currency: "Fr.",
      delimiters: {
        hundred: "'",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.co.uk/",
    shopId: "2",
    seller: "Beliani.uk",
    slug: "UK",
    languages: [
      {
        language: LANGUAGES.UK,
        tableColumn: "D",
      },
      {
        language: LANGUAGES.PL,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "£",
      delimiters: {
        hundred: ",",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.de/",
    shopId: "3",
    seller: "Beliani.de",
    slug: "DE",
    languages: [
      {
        language: LANGUAGES.DE,
        tableColumn: "J",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "F",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: "",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.fr/",
    shopId: "7",
    seller: "Beliani.fr",
    slug: "FR",
    languages: [
      {
        language: LANGUAGES.FR,
        tableColumn: "R",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
      {
        language: LANGUAGES.NL,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.at/",
    shopId: "8",
    seller: "Beliani.at",
    slug: "AT",
    languages: [
      {
        language: LANGUAGES.AT,
        tableColumn: "L",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "F",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.es/",
    shopId: "10",
    seller: "Beliani.sp",
    slug: "ES",
    languages: [
      {
        language: LANGUAGES.ES,
        tableColumn: "V",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.pl/",
    shopId: "12",
    seller: "Beliani.pl",
    slug: "PL",
    languages: [
      {
        language: LANGUAGES.PL,
        tableColumn: "H",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: ",-",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.nl/",
    shopId: "17",
    seller: "Beliani.nl",
    slug: "NL",
    languages: [
      {
        language: LANGUAGES.NL,
        tableColumn: "P",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
      {
        language: LANGUAGES.FR,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.pt/",
    shopId: "22",
    seller: "Beliani.pt",
    slug: "PT",
    languages: [
      {
        language: LANGUAGES.PT,
        tableColumn: "X",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.it/",
    shopId: "21",
    seller: "Beliani.it",
    slug: "IT",
    languages: [
      {
        language: LANGUAGES.IT,
        tableColumn: "Z",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.se/",
    shopId: "23",
    seller: "Beliani.se",
    slug: "SE",
    languages: [
      {
        language: LANGUAGES.SE,
        tableColumn: "AH",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: ":-",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.hu/",
    shopId: "24",
    seller: "Beliani.hu",
    slug: "HU",
    languages: [
      {
        language: LANGUAGES.HU,
        tableColumn: "AN",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "Ft",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.dk/",
    shopId: "25",
    seller: "Beliani.dk",
    slug: "DK",
    languages: [
      {
        language: LANGUAGES.DK,
        tableColumn: "AB",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "kr.",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.cz/",
    shopId: "26",
    seller: "Beliani.cz",
    slug: "CZ",
    languages: [
      {
        language: LANGUAGES.CZ,
        tableColumn: "AJ",
      },
      {
        language: LANGUAGES.SK,
        tableColumn: "",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "Kč",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.fi/",
    shopId: "27",
    seller: "Beliani.fi",
    slug: "FI",
    languages: [
      {
        language: LANGUAGES.FI,
        tableColumn: "AF",
      },
      {
        language: LANGUAGES.SE,
        tableColumn: "",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.no/",
    shopId: "28",
    seller: "Beliani.no",
    slug: "NO",
    languages: [
      {
        language: LANGUAGES.NO,
        tableColumn: "AD",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: ",-",
      delimiters: {
        hundred: ".",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.sk/",
    shopId: "29",
    seller: "Beliani.sk",
    slug: "SK",
    languages: [
      {
        language: LANGUAGES.SK,
        tableColumn: "AL",
      },
      {
        language: LANGUAGES.CZ,
        tableColumn: "",
      },
      {
        language: LANGUAGES.HU,
        tableColumn: "",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: " ",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.be/",
    shopId: "19",
    seller: "Beliani.be",
    slug: "BE",
    languages: [
      {
        language: LANGUAGES.BENL,
        tableColumn: "AR",
      },
      {
        language: LANGUAGES.BEFR,
        tableColumn: "AP",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "F",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ",",
        thousand: "",
      },
    },
  }),
  new Shop({
    origin: "https://www.beliani.ro/",
    shopId: "30",
    seller: "Beliani.ro",
    slug: "RO",
    languages: [
      {
        language: LANGUAGES.RO,
        tableColumn: "AT",
      },
      {
        language: LANGUAGES.UK,
        tableColumn: "",
      },
    ],
    price_format: {
      currency: "€",
      delimiters: {
        hundred: ",",
        thousand: "",
      },
    },
  }),
];
