import { getState } from '../utils/stateManager.js';
import getImageUrl from './getImageUrl.js';

const types = {
  relation: handleRelation,
};

export function computeValue(value) {
  if (Array.isArray(value)) {
    return value.map(computeValue);
  }

  if (typeof value === 'object' && value !== null) {
    // If this object has query property and href, it's a translateLink object
    if (value.query && value.href && value.href.type) {
      // Return object with query flag and translated href for getQueryLink.js
      return {
        query: value.query,
        href: computeValue(value.href)
      };
    }
    
    // If this object is a relation, resolve it
    if (value.type && types[value.type]) {
      return types[value.type](value);
    }
   
    // Otherwise, recursively resolve all properties
    const result = {};
   
    for (const key in value) {
      result[key] = computeValue(value[key]);
   
    }
  
    return result;
  }

  return value;
}

function handleRelation(relation) {
  const shop = getState('shop');
  const country = getState('country');
  const { value, placeholderPosition, relyOn } = relation;

  let relyOnValue = '';
  if (relyOn === 'slug') {
    relyOnValue = country;
  }
  if (relyOn === 'origin') {
    relyOnValue = shop.origin;
  }

  const arrayValue = value.split('');
  const splitted = arrayValue.toSpliced(placeholderPosition, 0, relyOnValue?.toLowerCase());
  const newValue = splitted.join('');
  return newValue;
}


// @EXAMPLE:
// id: swapProductsBySlug(
// 	{
// 		'["DE", "CHFR", "PL", "UK"]': 585758,
// 		SE: 585357
// 	}, 585243),
// src: swapImagesBySlug(
// 	{ '["DE", "CHFR", "PL", "UK"]': "20250724_Category_1_Prod_2.png",
// 		SE: "20250724_Category_1_Prod_3.png"
// 	}, "20250724_Category_1_Prod_1.png"),

/**
 * Swap product IDs based on the current country slug.
 *
 *    // lub bez dodatkowych nawiasów: swapProductsBySlug({ '["DE","CHFR","PL","UK"]': 585758, "SE": 2137420 }, 585243)
 *
 * @param {object|string|number} mapping - Obiekt mapujący slug kraju na ID produktu (może mieć klucz będący stringiem tablicowym), lub domyślne ID (legacy)
 * @param {string|number} defaultId - Domyślne ID produktu (fallback lub alternatywa w trybie legacy)
 * @param {string|string[]} [countrySlug] - Legacy: slug kraju/krajów dla zamiany
 * @returns {{mapping?: object, swap?: [string|number, string|number], countrySlug?: string|string[], defaultId: string|number}} Obiekt konfiguracji zamiany.
 */
export function swapProductsBySlug(mapping, defaultId) {
  // Only new mapping format supported
  if (typeof mapping === 'object' && mapping !== null && !Array.isArray(mapping)) {
    const processedMapping = {};
    for (const [key, value] of Object.entries(mapping)) {
      try {
        const parsedKey = JSON.parse(key);
        if (Array.isArray(parsedKey)) {
          parsedKey.forEach((country) => {
            processedMapping[country] = value;
          });
        } else {
          processedMapping[key] = value;
        }
      } catch {
        processedMapping[key] = value;
      }
    }
    return {
      mapping: processedMapping,
      defaultId,
    };
  }
  throw new Error('swapProductsBySlug: Only mapping object format is supported.');
}

/**
 * Swap image src based on the current country slug.
 *
 * Przykłady użycia:
 * 1. Legacy: swapImagesBySlug("default.jpg", "alternative.jpg", ["PL", "SE"])
 * 2. Nowa składnia (string jako klucz tablicowy):
 *    swapImagesBySlug({ '["DE","CHFR","PL"]': "euro.jpg", "UK": "british.jpg" }, "default.jpg")
 * 3. Standardowy mapping: swapImagesBySlug({ "DE": "image1.jpg", "CHFR": "image2.jpg", "PL": "image3.jpg" }, "default.jpg")
 *
 * @param {object|string|number} mapping - Obiekt mapujący slug kraju na źródło obrazka (może mieć klucz będący stringiem tablicowym), lub domyślne źródło (legacy)
 * @param {string|number} defaultSrc - Domyślne źródło obrazka (fallback lub alternatywa w trybie legacy)
 * @param {string|string[]} [countrySlug] - Legacy: slug kraju/krajów dla zamiany
 * @returns {{mapping?: object, swap?: [string|number, string|number], countrySlug?: string|string[], defaultId: string|number}} Obiekt konfiguracji zamiany.
 */
export function swapImagesBySlug(mapping, defaultSrc) {
  // Only new mapping format supported
  if (typeof mapping === 'object' && mapping !== null && !Array.isArray(mapping)) {
    const processedMapping = {};
    for (const [key, value] of Object.entries(mapping)) {
      try {
        const parsedKey = JSON.parse(key);
        if (Array.isArray(parsedKey)) {
          parsedKey.forEach((country) => {
            processedMapping[country] = getImageUrl(value);
          });
        } else {
          processedMapping[key] = getImageUrl(value);
        }
      } catch {
        processedMapping[key] = getImageUrl(value);
      }
    }
    return {
      mapping: processedMapping,
      defaultId: getImageUrl(defaultSrc),
    };
  }
  throw new Error('swapImagesBySlug: Only mapping object format is supported.');
}
