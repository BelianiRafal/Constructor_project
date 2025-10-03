const formatPrice = {
  DE: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  CHDE: (price, options) => {
    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, "'").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, "'").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  AT: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  FR: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  BE: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  IT: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  UK: (price, options) => {
    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ",").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ",").join("");
    }

    return price;
  },
  ES: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  PT: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  PL: (price, options) => {
    price = price.replace(".00", "");
    price = price.replace(".99", "");

    if (price.length === 5) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 4) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    return price;
  },
  HU: (price, options) => {
    price = price.replace(".00", "");
    price = price.replace(".99", "");

    if (price.length === 7) {
      price = price
        .split("")
        .toSpliced(1, 0, " ")
        .toSpliced(5, 0, " ")
        .join("");
    }

    if (price.length === 6) {
      price = price.split("").toSpliced(3, 0, " ").join("");
    }

    if (price.length === 5) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 4) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  NL: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  SE: (price, options) => {
    price = price.replace(".00", "");

    if (price.length === 5) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 4) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  DK: (price, options) => {
    price = price.replace(".00", "");

    if (price.length === 5) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 4) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  CZ: (price, options) => {
    price = price.replace(".00", "");

    if (price.length === 6) {
      price = price.split("").toSpliced(3, 0, " ").join("");
    }

    if (price.length === 5) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 4) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  FI: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  NO: (price, options) => {
    price = price.replace(".00", "");

    if (price.length === 5) {
      price = price.split("").toSpliced(2, 0, ".").join("");
    }

    if (price.length === 4) {
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  SK: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  SK: (price, options) => {
    price = price.replace(".00", ",00");
    price = price.replace(".99", ",99");

    if (price.length === 8) {
      price = price.split("").toSpliced(2, 0, " ").join("");
    }

    if (price.length === 7) {
      price = price.split("").toSpliced(1, 0, " ").join("");
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
  RO: (price, options) => {
    if (price.length === 7) {
      price = price.replace(".00", "");
      price = price.split("").toSpliced(1, 0, ".").join("");
    }

    if (price.length === 6) {
      price = price.replace(".99", ",99");
      price = price;
    }

    if (price.length === 5) {
      price = price.replace(".99", ",99");
      price = price;
    }

    if (options && "decimals" in options && options.decimals) {
      if (price.includes(".")) {
        const splitted = price.split(".");
      }

      if (price.includes(",")) {
        const splitted = price.split(",");
      }
    }

    return price;
  },
};

export function normalize(price, country, options) {
  return formatPrice[country](price, options);
}
