export function Iterate({ items, lastItemFn, itemFn }) {
  if (!Array.isArray(items)) {
    throw new Error("items properrty should be array -> []");
  }

  if (!itemFn) {
    throw new Error(
      "itemFn properrty should be defined in template -> (element, index) => { return '' }"
    );
  }

  const rows = [];
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if (index === items.length - 1) {
      if (lastItemFn) {
        rows.push(lastItemFn(element, index));
      } else {
        rows.push(itemFn(element, index));
      }
    } else {
      rows.push(itemFn(element, index));
    }
  }

  return rows.join("");
}
