import { ImageWithLink } from "./ImageWithLink.js";

export function Product(product, align = "left", style, showPrices) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ${style ?? ""}">
    <tbody>
      <tr>
        <td>
          ${
            "src" in product && product.src !== null ?
            `<table class="newsletterProductImage" cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}" class="newsletterBottom20px">
                  ${ImageWithLink({
                    href: product.href,
                    src: product.src,
                    alt: product.name,
                  })}
                </td>
              </tr>
            </tbody>
          </table>`
            :
            ""
          }
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}">
                  <span class="newsletterProductTitle" style="${style ?? ""}">${product.name}</span>
                </td>
              </tr>
                <tr>
                  <td class="newsletterProductPrices" align="${align}" style="padding-bottom: 8px;">
                    <span class="newsletterProductLowPrice" style="${style ?? ""} ${showPrices ? '' : ';text-decoration: none !important;'} ${showPrices ? '' : 'display: none;'}">
                      ${showPrices ? product.lowPrice : ''}
                    </span>
                    ${showPrices && product.highPrice ? '&nbsp;' : ''}
                    <span class="newsletterProductHightPrice" style="${style ?? ""} ${showPrices ? '' : ';text-decoration: none !important;'} ${showPrices ? '' : 'display: none;'}">
                      ${showPrices ? product.highPrice : ''}
                    </span>
                  </td>
                </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
