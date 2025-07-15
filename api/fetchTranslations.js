import { getState } from '../utils/stateManager.js';
import { adjustTableRangeToCountry } from '../utils/fixRange.js';
import { normalizeTranslations } from '../utils/normalizeTranslations.js';
import { GoogleAuth } from '../services/GoogleAuth.js';
import { TRANSLATIONS_SHEET_2025 } from '../config/config.js';
import Toast from '../utils/toasts.js';

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
    try {
      const queryWithAdjustedRange = adjustTableRangeToCountry(query, tableColumn.tableColumn);
      // Ensure tableName is set for each query, and preserve tableId if provided
      const finalQuery = {
        ...queryWithAdjustedRange,
        tableName: queryWithAdjustedRange.tableName || tableName,
        // Use tableId from query if provided, otherwise use default campaign translations sheet
        tableId: queryWithAdjustedRange.tableId || TRANSLATIONS_SHEET_2025,
      };
      
      // Validate that we have required fields
      if (!finalQuery.tableId) {
        throw new Error(`Missing tableId for query: ${JSON.stringify(query)}`);
      }
      if (!finalQuery.tableName) {
        throw new Error(`Missing tableName for query: ${JSON.stringify(query)}`);
      }
      
      promises.push(finalQuery);
    } catch (error) {
      Toast.error(`Error processing query ${JSON.stringify(query)}: ${error.message}`);
      throw error;
    }
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
  tableId,
  tableName,
  tableRange,
  fallback = ['Translations not found'],
  name,
}) {
  if (!tableId) {
    throw new Error('No tableId provided to getTranslations.');
  }
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
