import { getState } from '../main/initApp.js';
import getImageUrl from './getImageUrl.js';

const types = {
  relation: handleRelation,
};

export function computeValue(value) {
  for (const iterator in value) {
    let item = value[iterator];

    if (typeof item === 'object' && item.type === 'relation') {
      value[iterator] = types[item.type](item);
    }
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
  const splitted = arrayValue.toSpliced(placeholderPosition, 0, relyOnValue.toLowerCase());
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
