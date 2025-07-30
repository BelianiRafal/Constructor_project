import { ImageWithLink } from "./ImageWithLink.js";

export function FreebieProduct(
  product,
  align = "center",
  style,
  containerAlign = "center"
) {
  return `
  <table cellspacing="0" cellpadding="0" align=${containerAlign}>
    <tbody>
      <tr>
        <td style="${style ?? ""}">
          <table cellspacing="0" cellpadding="0" align=${containerAlign}>
            <tr>
              <td align="${align}">
                ${ImageWithLink({
                  href: product.href,
                  src: product.src,
                  alt: product.name,
                })}
              </td>
            </tr>
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" align="${align}" >
                  <tbody>
                  <tr>
                    <td class="newsletterBottom20px">
                    </td>
                  </tr>
                    <tr>
                      <td align="${align}">
                        <span class="newsletterProductTitleFreebie">${
                          product.name
                        }</span>
                      </td>
                    </tr>
                    ${
                      "size" in product
                        ? `<tr>
                        <td align="${align}">
                          <span class="newsletterProductTitleFreebie">${product.size}</span>
                        </td>
                      </tr>`
                        : ""
                    }
                    <tr>
                      <td align="${align}">
                        <span class="newsletterProductLowPrice" >${
                          product.lowPrice
                        } </span>
                        <span class="newsletterProductHightPrice" >${
                          product.highPrice
                        }</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
			<tr>
			<td class="newsletterBottom20px">
			</td>
			</tr>
    </tbody>
  </table>
    `;
}
