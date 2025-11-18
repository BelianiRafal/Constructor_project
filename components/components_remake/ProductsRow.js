import { ImageWithLink } from './ImageWithLink_new.js';
import { Space } from './Space.js';
import { Product } from './Product.js';

function generateProduct({ product, align, style, width = '100', showName, showPrices = 'true' }) {
  return `
	<td style="vertical-align: top; width: ${width}%">
        <table
          cellspacing="0"
          cellpadding="0"
          style="width: 100%; border-collapse: separate;"
          align="center"
        >
          <tbody>
            <tr>
              <td align="center">
                ${Product(product, align, style, showPrices)}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
			`;
}

export function ProductsRow({
  products,
  align = 'center',
  style,
  showName,
  showPrices
}) {

  console.log('ProductsRow - showPrices:', showPrices);
  const productArray = Array.isArray(products)
    ? products
    : products.products
    ? products.products
    : [products];

  return `
	<tr>
	<td class="newsletterContainer">
		<table cellpadding="0" border="0" align="center" style="border-collapse: collapse;">
  <tbody>
    <tr>
      ${productArray
        .map(
          (product, index) =>
            generateProduct({
              product,
              align,
              style,
              width: 100 / productArray.length,
              // width: "33",
              showName,
              showPrices: showPrices,
            }) +
            (index !== productArray.length - 1
              ? "<td class='newsletterProductSeparator'></td>"
              : '')
        )
        .join('')}
        
    </tr>
  </tbody>
</table>
</td>
</tr>
	`;
}
