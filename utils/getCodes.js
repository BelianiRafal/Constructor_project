export function getCodes(queries) {
  if ("codes" in queries) {
    const codes = queries.codes
      .join("<br />")
      .split("<br />")
      .reduce((acc, item, idx) => {
        acc["code" + (idx + 1)] = item;
        return acc;
      }, {});
    return codes;
  }
  return null;
}
