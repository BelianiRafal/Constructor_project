import { getState } from "../main/initApp.js";

const types = {
  relation: handleRelation,
  link_relation: handleLinkRelation,
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
  const shop = getState("shop");
  const country = getState("country");
  const { value, placeholderPosition, relyOn } = relation;

  if (!value) {
    return "";
  }
  
  let relyOnValue = "";
  if (relyOn === "slug") {
    relyOnValue = country || "";
  }

  if (relyOn === "origin") {
    relyOnValue = shop?.origin || "";
  }

  // Convert placeholderPosition to number if it's a string
  const position = typeof placeholderPosition === "string" 
    ? parseInt(placeholderPosition, 10) 
    : placeholderPosition;

  if (typeof position !== "number" || isNaN(position)) {
    return value;
  }

  const arrayValue = value.split("");
  const splitted = arrayValue.toSpliced(
    position,
    0,
    relyOnValue.toLowerCase()
  );
  const newValue = splitted.join("");

  return newValue;
}

function handleLinkRelation(relation) {
  const shop = getState("shop");
  const country = getState("country");
  const { baseUrl, categoryPath, relyOn } = relation;

  let relyOnValue = "";
  if (relyOn === "slug") {
    relyOnValue = country;
  }

  if (relyOn === "origin") {
    relyOnValue = shop.origin;
  }

  // If baseUrl is provided, use it as the base, otherwise use shop origin
  const base = baseUrl || shop?.origin || "";
  
  // If categoryPath is provided, append the translated country code
  if (categoryPath) {
    const translatedPath = categoryPath.replace("{country}", relyOnValue ? relyOnValue.toLowerCase() : "");
    return base + translatedPath;
  }

  // Always return a string, never undefined
  return base || "";
}
