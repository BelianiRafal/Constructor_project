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

/**
 * Swap product IDs based on the current country slug.
 *
 * @param {string|number} from - product ID for all countries except the specified ones.
 * @param {string|number} to - alternative product ID
 * @param {string|string[]} countrySlug - The country slug(s) for which the swap should occur. Can be a single string (e.g. "FR") or an array of strings (e.g. ["UK", "PL", "DE"]).
 * @returns {{swap: [string|number, string|number], countrySlug: string|string[]}} The swap configuration object.
 */
export function swapProductsBySlug(from, to, countrySlug) {
  let object = {
    swap: [from, to],
    countrySlug,
  };

  return object;
}

/**
 * Swap image src based on the current country slug.
 *
 * @param {string|number} from - image src for all countries except the specified ones.
 * @param {string|number} to - alternative image src
 * @param {string|string[]} countrySlug - The country slug(s) for which the swap should occur. Can be a single string (e.g. "FR") or an array of strings (e.g. ["UK", "PL", "DE"]).
 * @returns {{swap: [string|number, string|number], countrySlug: string|string[]}} The swap configuration object.
 */
export function swapImagesBySlug(from, to, countrySlug) {
  let object = {
    swap: [getImageUrl(from), getImageUrl(to)],
    countrySlug,
  };

  return object;
}
