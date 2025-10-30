import { normalize } from "./normalizePrice.js";

const currencies = {
  euro: "€",
  swissFranc: "Fr.",
  poundSterling: "£",
  hungarianForint: "Ft",
  swedishKrona: ":-",
  danishKrona: "kr.",
  czechKrona: "Kč",
  norwegianKrone: ",-",
  polandZloty: ",-",
  romanianLeu: "lei"
};
const relativePriceFormat = {
  DE: {
    currency: currencies.euro,
  },
  CH: {
    currency: currencies.swissFranc,
  },
  AT: {
    currency: currencies.euro,
  },
  FR: {
    currency: currencies.euro,
  },
  BE: {
    currency: currencies.euro,
  },
  IT: {
    currency: currencies.euro,
  },
  UK: {
    currency: currencies.poundSterling,
  },
  ES: {
    currency: currencies.euro,
  },
  PT: {
    currency: currencies.euro,
  },
  PL: {
    currency: currencies.polandZloty,
  },
  HU: {
    currency: currencies.hungarianForint,
  },
  NL: {
    currency: currencies.euro,
  },
  SE: {
    currency: currencies.swedishKrona,
  },
  DK: {
    currency: currencies.danishKrona,
  },
  CZ: {
    currency: currencies.czechKrona,
  },
  FI: {
    currency: currencies.euro,
  },
  NO: {
    currency: currencies.norwegianKrone,
  },
  SK: {
    currency: currencies.euro,
  },
  RO: {
    currency: currencies.romanianLeu,
  },
};
const priceFormats = {
  DE: (price) => {
    return normalize(price, "DE") + " " + relativePriceFormat.DE.currency;
  },
  CHDE: (price) => {
    return normalize(price, "CHDE") + " " + relativePriceFormat.CH.currency;
  },
  AT: (price) => {
    return normalize(price, "AT") + " " + relativePriceFormat.AT.currency;
  },
  FR: (price) => {
    return normalize(price, "FR") + " " + relativePriceFormat.FR.currency;
  },
  BE: (price) => {
    return normalize(price, "BE") + " " + relativePriceFormat.BE.currency;
  },
  IT: (price) => {
    return normalize(price, "IT") + " " + relativePriceFormat.IT.currency;
  },
  UK: (price) => {
    return relativePriceFormat.UK.currency + normalize(price, "UK");
  },
  ES: (price) => {
    return normalize(price, "ES") + " " + relativePriceFormat.ES.currency;
  },
  PT: (price) => {
    return normalize(price, "PT") + " " + relativePriceFormat.PT.currency;
  },
  PL: (price) => {
    return normalize(price, "PL") + relativePriceFormat.PL.currency;
  },
  HU: (price) => {
    return normalize(price, "HU") + " " + relativePriceFormat.HU.currency;
  },
  NL: (price) => {
    return relativePriceFormat.NL.currency + " " + normalize(price, "NL");
  },
  SE: (price) => {
    return normalize(price, "SE") + relativePriceFormat.SE.currency;
  },
  DK: (price) => {
    return normalize(price, "DK") + " " + relativePriceFormat.DK.currency;
  },
  CZ: (price) => {
    return normalize(price, "CZ") + " " + relativePriceFormat.CZ.currency;
  },
  FI: (price) => {
    return normalize(price, "FI") + " " + relativePriceFormat.FI.currency;
  },
  NO: (price) => {
    return normalize(price, "NO") + relativePriceFormat.NO.currency;
  },
  SK: (price) => {
    return normalize(price, "SK") + " " + relativePriceFormat.SK.currency;
  },
  RO: (price) => {
    return normalize(price, "RO") + " " + relativePriceFormat.RO.currency;
  },
};


export {
    priceFormats,
}