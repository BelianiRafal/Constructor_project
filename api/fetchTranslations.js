import { getState } from "../../main/initApp.js";
import { adjustTableRangeToCountry } from "../utils/fixRange.js";
import { normalizeTranslations } from "../utils/normalizeTranslations.js";
import { GoogleAuth } from "../services/GoogleAuth.js";

export const fetchTranslations = async ({ tableQueries }) => {
  const name = getState("name");
  const shop = getState("shop");
  const tableColumn = shop.languages.find(
    (item) => item.language.name === name
  );

  if (!tableColumn.tableColumn) {
    Toastify({
      text: `Table column is empty`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
    return;
  }
  const promises = [];
  for (const query of tableQueries) {
    const queryWithAdjustedRange = adjustTableRangeToCountry(
      query,
      tableColumn.tableColumn
    );
    promises.push(queryWithAdjustedRange);
  }

  const promisesResult = await Promise.allSettled(
    promises.map((queryWithAdjustedRange) =>
      getTranslations(queryWithAdjustedRange)
    )
  );

  const computedPromise = [];
  for (const { value } of promisesResult) {
    if (value.error && value.error.code === 400) {
      throw new Error(value.error.message);
    }
    if (value.error && value.error.code === 401) {
      setTimeout(() => {
        GoogleAuth.login();
      }, 3000);
      throw new Error("Token will be updated in 3 seconds.");
    }
    if (value.error && value.error.code === 429) {
      throw new Error("Too many request. Please, try again later.");
    }
    if (value.error && value.error.code === 503) {
      throw new Error("Service currently unavailable");
    }
    
    if ("values" in value && value.values.length > 0) {
      computedPromise.push({
        data:
          value.majorDimension === "COLUMNS"
            ? value.values
            : normalizeTranslations(value.values, value.fallback, value.range),
        name: value.name,
      });
    } else {
      computedPromise.push({
        data: value.fallback || undefined,
        name: value.name,
      });
    }
  }

  return computedPromise;
};

export async function getTranslations({
  tableId,
  tableName,
  tableRange,
  fallback,
  name,
}) {
  const token = localStorage.getItem("token");
  // includeGridData
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}${tableRange}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    return { ...data, name, fallback };
  } catch (error) {
    console.log(error);
  }
}
