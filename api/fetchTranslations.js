import { getState } from '../../utils/stateManager.js';
import { adjustTableRangeToCountry } from '../utils/fixRange.js';
import { normalizeTranslations } from '../utils/normalizeTranslations.js';
import { GoogleAuth } from '../services/GoogleAuth.js';
import Toast from '../utils/toasts.js';
const TRANSLATIONS_SHEET_2025 = '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc';

export const fetchTranslations = async ({ tableName, tableQueries }) => {
  if (!tableName) {
    throw new Error('No tableName (spreadsheet tab name) provided for translations.');
  }
  const name = getState('name');
  const shop = getState('shop');
  const tableColumn = shop.languages.find((item) => item.language.name === name);

  if (!tableColumn.tableColumn) {
    Toast.error(`Table column is empty`);
    return;
  }
  const promises = [];
  for (const query of tableQueries) {
    const queryWithAdjustedRange = adjustTableRangeToCountry(query, tableColumn.tableColumn);
    // Ensure tableName is set for each query
    const finalQuery = {
      ...queryWithAdjustedRange,
      tableName: queryWithAdjustedRange.tableName || tableName,
    };
    promises.push(finalQuery);
  }

  const promisesResult = await Promise.allSettled(
    promises.map((finalQuery) => getTranslations(finalQuery))
  );

  const computedPromise = [];
  for (const { value } of promisesResult) {
    if (value.error) {
      switch (value.error.code) {
        case 400:
          throw new Error(value.error.message);
        case 401:
          setTimeout(() => {
            GoogleAuth.login();
          }, 3000);
          throw new Error('Token will be updated in 3 seconds.');
        case 429:
          throw new Error('Too many requests. Please, try again later.');
        case 503:
          throw new Error('Service currently unavailable');
      }
    }

    if ('values' in value && value.values.length > 0) {
      computedPromise.push({
        data:
          value.majorDimension === 'COLUMNS'
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
  tableId = TRANSLATIONS_SHEET_2025,
  tableName,
  tableRange,
  fallback = ['Translations not found'],
  name,
}) {
  if (!tableName) {
    throw new Error('No tableName provided to getTranslations.');
  }
  const token = localStorage.getItem('token');
  // includeGridData
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}!${tableRange}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const data = await response.json();
    return { ...data, name, fallback };
  } catch (error) {
    console.log(error);
  }
}
