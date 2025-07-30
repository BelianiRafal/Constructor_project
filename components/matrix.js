function rowFn(item) {
  return `<tr style="padding-bottom: 10px;">${item}</tr>`;
}

function colFn(item, width) {
  return `<td style="vertical-align: top; padding-left: 5px; padding-right: 5px; width: ${width + "%"};">${item}</td>`;
}

export function Matrix({ row, col, html }) {
  const matrix = Array(Number(row)).fill(Array(Number(col)).fill(""));
  const itemsAmount = html.length;
  let index = 0;
  let width = 100 / (itemsAmount / row)
  return matrix
    .map((col) => {
      return rowFn(
        col
          .map((_, i) => {
            if (index >= itemsAmount) {
              return colFn("<span>Not enough items to render</span>");
            }
            return colFn(html[index++], width);
          })
          .join("")
      );
    })
    .join("");
}
