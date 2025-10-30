const languageToSlug = {
  polish: "pl",
  portugal: "pt",
  spanish: "es",
  german: "chde",
  germanDE: "de",
  Hungarian: "hu",
  finnish: "fi",
  french: "fr",
  czech: "cz",
  slovak: "sk",
  danish: "dk",
  italian: "it",
  swedish: "se",
  english: "uk",
  norsk: "no",
  dutch: "nl",
};

const slugToLanguage = {
  pl: "polish",
  pt: "portugal",
  es: "spanish",
  ch: "german",
  de: "germanDE",
  hu: "Hungarian",
  fi: "finnish",
  fr: "french",
  cz: "czech",
  sk: "slovak",
  dk: "danish",
  it: "italian",
  se: "swedish",
  uk: "english",
  no: "norsk",
  nl: "dutch",
};

const sellerToslug = {
  Beliani: "chde",
  "Beliani UK": "uk",
  "Beliani DE": "de",
  "Beliani FR": "fr",
  "Beliani AT": "at",
  "Beliani SP": "es",
  "Beliani PL": "pl",
  "Beliani NL": "nl",
  "Beliani PT": "pt",
  "Beliani IT": "it",
  "Beliani SE": "se",
  "Beliani HU": "hu",
  "Beliani DK": "dk",
  "Beliani CZ": "cz",
  "Beliani FI": "fi",
  "Beliani NO": "no",
  "Beliani SK": "sk",
  "Beliani BE": "be",
  "Beliani RO": "ro",
};

const sellerToOrigin = {
  Beliani: "https://www.beliani.ch/",
  "Beliani UK": "https://www.beliani.co.uk/",
  "Beliani DE": "https://www.beliani.de/",
  "Beliani FR": "https://www.beliani.fr/",
  "Beliani AT": "https://www.beliani.at/",
  "Beliani SP": "https://www.beliani.es/",
  "Beliani PL": "https://www.beliani.pl/",
  "Beliani NL": "https://www.beliani.nl/",
  "Beliani PT": "https://www.beliani.pt/",
  "Beliani IT": "https://www.beliani.it/",
  "Beliani SE": "https://www.beliani.se/",
  "Beliani HU": "https://www.beliani.hu/",
  "Beliani DK": "https://www.beliani.dk/",
  "Beliani CZ": "https://www.beliani.cz/",
  "Beliani FI": "https://www.beliani.fi/",
  "Beliani NO": "https://www.beliani.no/",
  "Beliani SK": "https://www.beliani.sk/",
  "Beliani BE": "https://www.beliani.be/",
  "Beliani RO": "https://www.beliani.ro/",
};

export class Product {
  constructor(product) {
    this.src = null;
    this.name = product.article_name;
    this.main_id = product.saved_params.master_sa || product.id;
    this.country = sellerToslug[product.saved_params.username];
    this.href = {
      origin: sellerToOrigin[product.saved_params.username],
      hrefs: product.hrefs,
    };
    this.lowPrice = product.saved_params.ShopPrice;
    this.highPrice = product.saved_params.ShopHPrice;
  }
}
