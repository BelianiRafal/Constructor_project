import { getState } from "../main/initApp.js";

export const normalizeTranslations = (translations, fallbacks, range) => {
  const config = getState("config");
  if (config && typeof config === "object") {
    return translations
      .map((item, idx) =>
        item.length === 0
          ? fallbacks
            ? fallbacks[idx] || config.emptyCell("Cell is empty for " + range) || "undefined"
            : config.emptyCell("Cell is empty for " + range) || "undefined"
          : item
      )
      .flat()
      .map((t) => config.replaceToBrs ? t.replaceAll("\n", "<br />") : t);
  } else {
    return translations
      .map((item, idx) =>
        item.length === 0
          ? fallbacks
            ? fallbacks[idx] || "undefined"
            : "undefined"
          : item
      )
      .flat()
      .map((t) => t.replaceAll("\n", "<br />"));
  }
};
