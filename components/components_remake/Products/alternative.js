import { ImageWithLink } from '../ImageWithLink.js';

export function AlternativeProduct(product, align = 'left', style, showPrices, showName) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ${style ?? ''}">
    <tbody>
      <tr>
        <td>
          ${
            'src' in product && product.src !== null
              ? `<table class="newsletterProductImage" cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}" class="newsletterBottom10px">
                    <table border="0" cellspacing="0" cellpadding="0" width="100%" >
                        <tbody>
                            <tr>
                                <td class="newsletterProductDesktopImage" align="${align}" >
                                    <a href="${product.href}">
                                        <img alt="${product.name}" src="${product.src[0]}" style="vertical-align: top; max-width: 100%;" loading="lazy">
                                    </a>
                                </td>
                                
                                <td class="newsletterProductMobileImage" align="${align}" >
                                    <a href="${product.href}">
                                        <img alt="${product.name}" src="${product.src[1]}" style="vertical-align: top; max-width: 100%;" loading="lazy">
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
              </tr>
            </tbody>
          </table>`
              : ''
          }
          ${
            showName
              ? `
            <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}">
                  <span class="newsletterProductTitle" style="${style ?? ''}">${product.name}</span>
                </td>
              </tr>
                <tr>
                  <td class="newsletterProductPrices" align="${align}" style="padding-bottom: 8px;">
                    <span class="newsletterProductLowPrice" style="${style ?? ''} ${
                  showPrices ? '' : ';text-decoration: none !important;'
                } ${showPrices ? '' : 'display: none;'}">
                      ${showPrices ? product.lowPrice : ''}
                    </span>
                    ${showPrices && product.highPrice ? '&nbsp;' : ''}
                    <span class="newsletterProductHightPrice" style="${style ?? ''} ${
                  showPrices ? '' : ';text-decoration: none !important;'
                } ${showPrices ? '' : 'display: none;'}">
                      ${showPrices ? product.highPrice : ''}
                    </span>
                  </td>
                </tr>
            </tbody>
          </table>
            `
              : `<table cellspacing="0" cellpadding="0" style="width: 100%; "><tr><td></td></tr></table>`
          }
          
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
