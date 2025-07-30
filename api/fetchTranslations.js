import { getState } from '../utils/stateManager.js';
import { adjustTableRangeToCountry } from '../utils/fixRange.js';
import { normalizeTranslations } from '../utils/normalizeTranslations.js';
import { GoogleAuth } from '../services/GoogleAuth.js';
import { TRANSLATIONS_SHEET_2025 } from '../config/config.js';
import Toast from '../utils/toasts.js';

// @TODO:
// Group by tableId, don't repe



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

  // Add header query to tableQueries array
  const headerQuery = {
    tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
    tableName: "Header",
    tableRange: "?majorDimension=COLUMNS",
    name: "header",
    tableColumns: false
  };
	
	const categoryLinksQuery = {
		name: "categoriesLinks",
		tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
    tableRange: "A:NZ?majorDimension=COLUMNS",
		tableName: "Categories",
    tableColumns: false
  };
  
  tableQueries = [...tableQueries, headerQuery, categoryLinksQuery];

  // Group queries by tableId and tableName
  const groupedQueries = {};
  
  for (const query of tableQueries) {
    try {
      const queryWithAdjustedRange = adjustTableRangeToCountry(query, tableColumn.tableColumn);
      
      // Determine final tableId and tableName for this query
      const finalTableId = queryWithAdjustedRange.tableId || TRANSLATIONS_SHEET_2025;
      const finalTableName = queryWithAdjustedRange.tableName || tableName;
      
      // Validate that we have required fields
      if (!finalTableId) {
        throw new Error(`Missing tableId for query: ${JSON.stringify(query)}`);
      }
      if (!finalTableName) {
        throw new Error(`Missing tableName for query: ${JSON.stringify(query)}`);
      }
      
      // Create a unique key for grouping
      const groupKey = `${finalTableId}:${finalTableName}`;
      
      // Initialize group if it doesn't exist
      if (!groupedQueries[groupKey]) {
        groupedQueries[groupKey] = {
          tableId: finalTableId,
          tableName: finalTableName,
          queries: []
        };
      }
      
      // Add query to the group
      groupedQueries[groupKey].queries.push({
        ...queryWithAdjustedRange,
        tableId: finalTableId,
        tableName: finalTableName
      });
      
    } catch (error) {
      Toast.error(`Error processing query ${JSON.stringify(query)}: ${error.message}`);
      throw error;
    }
  }

  // Process each group separately
  const allResults = [];
  
  for (const group of Object.values(groupedQueries)) {
    const promisesResult = await Promise.allSettled(
      group.queries.map((finalQuery) => getTranslations(finalQuery))
    );

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
        allResults.push({
          data:
            value.majorDimension === 'COLUMNS'
              ? value.values
              : normalizeTranslations(value.values, value.fallback, value.range),
          name: value.name,
        });
      } else {
        allResults.push({
          data: value.fallback || undefined,
          name: value.name,
        });
      }
    }
  }

  return allResults;
};

export async function getTranslations({
  tableId,
  tableName,
  tableRange,
  fallback,
  name,
}) {
  if (!tableId) {
    throw new Error('No tableId provided to getTranslations.');
  }
  if (!tableName) {
    throw new Error('No tableName provided to getTranslations.');
  }
  
  const token = localStorage.getItem('token');
  
  try {
    // Handle special case where tableRange contains URL parameters
    let url;
    let range = tableRange;
    
    if (tableRange && tableRange.includes('?')) {
      // Extract parameters from tableRange
      const [rangesPart, paramsPart] = tableRange.split('?');
      range = rangesPart || 'A:Z'; // Default range if empty
      
      // Build URL with parameters
      url = `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}!${range}?${paramsPart}`;
    } else {
      // Regular range without parameters
      url = `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}!${range}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    return { ...data, name, fallback };
  } catch (error) {
    console.log('Error in getTranslations:', error);
    throw error;
  }
}
