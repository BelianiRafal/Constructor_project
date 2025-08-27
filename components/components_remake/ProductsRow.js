import { ImageWithLink } from './ImageWithLink_new.js';
import { Space } from './Space.js';

function generateProduct({ product, align, style, width = '100', showName, showPrices }) {
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
                <table cellspacing="0" cellpadding="0" align="center">
                  <tbody>
                    <!-- GÓRA -->
                    <tr>
                      <td align="center">
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          width="100%"
                        >
                          <tbody>
                            ${ImageWithLink({
                              href: product.href,
                              src: product.src,
                              alt: product.name,
                              insideRow: true,
                            })}
                          </tbody>
                        </table>
                      </td>
                      <td></td>
                    </tr>

                    
                    ${(showName === "false" && showPrices === "false") ? `
                      <!-- DÓŁ -->
                      <tr>
                        <td align="center">
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            style="width: 100%"
                          >
                            <tbody>
                              ${Space({
                                className: 'newsletterBottom20px',
                              })}

                              ${showName === "true" ? `
                                <tr>
                                  <td
                                    align="${align}"
                                    style="
                                      padding-top: 0px;
                                      padding-left: 0px;
                                      padding-right: 0px;
                                      padding-bottom: 0px;
                                    "
                                  >
                                    <span class="newsletterProductTitle">
                                      ${product.name}
                                    </span>
                                  </td>
                                </tr>
                                ` : ``}

                              ${showPrices === "true" ? `
                                <tr>
                                  <td align="${align}">
                                    <span class="newsletterProductLowPrice">
                                      ${product.lowPrice}
                                    </span>
                                    <span class="newsletterProductHightPrice">
                                      ${product.highPrice}
                                    </span>
                                  </td>
                                </tr>
                                ` : ``}
                              
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      ` : ``}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
			`;
}

export function ProductsRow(products, align = 'left', style, showName = "true", showPrices = "true") {
  const productArray = Array.isArray(products)
    ? products
    : products.products
    ? products.products
    : [products];

  return `
	<tr>
	<td>
		<table cellspacing="10px" width="100%" cellpadding="0" border="0" align="center" style="border-collapse: separate !important; border-spacing: 10px !important;">
  <tbody>
    <tr>
      ${productArray
        .map((product) =>
          generateProduct({ product, align, style, width: 100 / productArray.length, showName, showPrices })
        )
        .join('')}
    </tr>
  </tbody>
</table>
</td>
</tr>
	`;
}
