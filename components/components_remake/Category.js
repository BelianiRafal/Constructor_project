import { isAllowToRender } from '../../helpers/optimizeImage.js';
import {
  ImageWithLink_new as ImageWithLink,
  ImageWithVProducts,
  Line,
  Paragraph,
  Product,
  ProductsRow,
  Space,
  Title,
  CTA,
  ImageWithLink_new,
  AlternativeProduct,
} from './_index.js';
import translateImage from '../../helpers/translateImage.js';
import { Freebies } from '../freebies.js';

export const Category = isAllowToRender(
  ({
    ctaElement = { show: true, spaceAfterClass: 'newsletterBottom80px' },
    showPrices = true,
    showParagraph = true,
    showRedLine = false,
    showWhiteLine = false,
    links,
    queries,
    name,
    href,
    src,
    products,
    ctaComponent,
    productsAlignment = 'left',
    color,
    getPhrase,
    line,
    len,
    title,
    idx,
    cta = 'CTA',
    type = 'monday',
    utm,
  }) => {

    console.log(showPrices)
    src = typeof src == 'object' ? src.src ?? src.value : src;

    // console.log(idx, queries.paragraphs[idx])
    // console.log(title);

    if (!type) {
      return 'Please specify type category.';
    }

    
    // <!-- ${ImageWithLink({ align: 'left', href: href, src: prods[0].src })} -->
    // <!-- ${ImageWithLink({ align: 'right', href: href, src: prods[0].src })} -->

    switch (type) {
      case 'test-cat':
        function productsContainer(imageSide = 'left', prods = products.slice(0, 3)) {
          return `
          <tr>
            <td class="newsletterContainer" align="center">
              <table cellspacing="0" cellpadding="0" style="max-width: 610px; width: 100%;" >
                <tr>

                  ${
                    imageSide === 'left'
                      ? `
                    <td class="newsletterRight10pxTEST_BIGIMG_A">
                      ${AlternativeProduct(prods[0], 'left', `color: ${color || '#000000'}`, showPrices, false)}
                    </td><td style="width: 1.81%" class='newsletterProductSeparator'></td>
                    `
                      : ''
                  }

                  <td class="${
                    imageSide === 'left'
                      ? 'newsletterLeft10pxTESTPRODS_A'
                      : 'newsletterRight10pxTESTPRODS_A'
                  }">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tr>
                        <td align="center">
                          ${Product(prods[1], "center", `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                      
                      <tr>
                        <td align="center">
                          ${Product(prods[2], "center", `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                    </table>
                  </td>

                  ${
                    imageSide === 'right'
                      ? `<td style="width: 1.81%" class='newsletterProductSeparator'></td>
                    <td class="newsletterLeft10pxTEST_BIGIMG_A">
                      ${AlternativeProduct(prods[0], 'right', `color: ${color || '#000000'}`, showPrices, false)}
                    </td>
                    `
                      : ''
                  }
                </tr>
              </table>
            </td>
          </tr>
          `;
        }

        return `
        
          ${
            title?.show
              ? `
            ${
              idx !== 0
                ? Space({ className: 'newsletterBottom35px' })
                : title?.spaceBeforeClassName
                ? Space({ className: title.spaceBeforeClassName })
                : ''
            }
            ${Title({
              color: color,
              title: queries.categories[idx],
              align: title.align ?? 'left',
              insideContainer: true,
            })}
            ${Space({ className: 'newsletterBottom35px' })}
            `
              : ''
          }

          ${
            src
              ? `
            ${title?.show ? `` : Space({ className: 'newsletterBottom35px' })}
  
            ${ImageWithLink({
              href: href,
              src: src,
              alt: queries['categories'][idx] || name || 'Category Image',
              insideRow: true,
            })}
  
            ${Space({ className: 'newsletterBottom35px' })}`
              : ``
          }

          ${
            showParagraph
              ? `  
              ${src ? `` : Space({ className: 'newsletterBottom35px' })}
              ${Paragraph(
                queries.paragraphs ? queries.paragraphs[idx] : queries.paragraph,
                'left',
                color
              )}
              ${Space({ className: 'newsletterBottom35px' })}
            `
              : `${Space({ className: 'newsletterBottom20px' })}`
          }

          ${productsContainer(
            productsAlignment === 'left'
              ? 'left'
              : productsAlignment === 'right'
              ? 'right'
              : idx % 2 === 0
              ? 'left'
              : 'right',
            [products[0], products[1], products[2]]
          )}


					${ProductsRow({ align: 'center', products: [products[3], products[4], products[5]], showPrices: false })}

					

          ${
            ctaElement?.show
              ? `
            ${Space({ className: 'newsletterBottom35px' })}
            ${CTA({
              align: 'center',
              color: color,
              spaceAfter: { class: ctaElement?.spaceAfterClass },
              text: getPhrase('Shop now'),
              href: href,
            })}`
              : `${Space({ className: 'newsletterBottom20px' })}`
          }
        `;

      case 'xmas-gift-buttons':
        return `
        ${
          title?.show
            ? `
            ${
              idx !== 0
                ? Space({ className: 'newsletterBottom35px' })
                : title?.spaceBeforeClassName
                ? Space({ className: title.spaceBeforeClassName })
                : ''
            }
            ${Title({
              color: color,
              title: queries.categories[idx],
              align: title.align ?? 'left',
              insideContainer: true,
            })}
            ${Space({ className: 'newsletterBottom35px' })}
            `
            : ''
        }

        ${
          src
            ? `
            ${ImageWithLink({
              href: href || queries['linkWithFilter'],
              src: src,
              alt: queries['categories']?.idx || name || 'Category Image',
              insideRow: true,
            })}
            
            ${
              !products || products.length === 0 ? `` : Space({ className: 'newsletterBottom35px' })
            }
            `
            : ``
        }

        

        ${
          showParagraph
            ? queries.paragraphs
              ? queries.paragraphs[idx]
                ? `${Paragraph(queries.paragraphs[idx], 'left')} ${Space({
                    className: 'newsletterBottom35px',
                  })}`
                : ``
              : queries.paragraph
              ? `${Paragraph(queries.paragraph, 'left')} ${Space({
                  className: 'newsletterBottom35px',
                })}`
              : ``
            : ``
        }

        <tr>
          <td class="newsletterContainer">
            <table cellspacing="0" cellpadding="0" style="width: 100%;">
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" style="width: 100%;">
                    <tr>
                      <td>
                        ${ImageWithLink({
                          href: queries['gift_btn_href'][0] + utm,
                          src: links['gift_btn_1_src'],
                          alt: 'Newsletter Image',
                        })}
                      </td>

                      <td>
                        ${ImageWithLink({
                          href: queries['gift_btn_href'][1] + utm,
                          src: links['gift_btn_2_src'],
                          alt: 'Newsletter Image',
                        })}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" style="width: 100%;">
                    <tr>
                      <td>
                        ${ImageWithLink({
                          href: queries['gift_btn_href'][2] + utm,
                          src: links['gift_btn_3_src'],
                          alt: 'Newsletter Image',
                        })}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        ${Space({ className: 'newsletterBottom35px' })}

        ${
          ctaElement?.show
            ? CTA({
                align: 'center',
                spaceAfter: { class: 'newsletterBottom80px' },
                text: getPhrase('Shop now'),
                href: href || queries['linkWithFilter'],
                color: color,
              })
            : ''
        }

        ${
          showRedLine
            ? `<tr>
              <td class="newsletterContainer">
                  <img src="https://pictureserver.net/static/2025/redline.png?ver=264" style="display:block" width="100%" alt="Line Separator">
              </td>
          </tr>
          `
            : ''
        }

        ${
          showWhiteLine
            ? `
          <tr>
            <td class="newsletterContainer">${Line(
              'https://pictureserver.net/static/2024/white_line.jpg?ver=264'
            )}</td>
          </tr>
          `
            : ''
        }`;

      case 'imagewithv-2-1-products':
        function generateProductsContainer(imageSide = 'left', prods = products.slice(0, 3)) {
          return `
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;" class="newsletterContainer">
                <tr>

                  ${
                    imageSide === 'left'
                      ? `
                    <!-- <td class="newsletterRight10pxTEST_BIGIMG"> -->
                    <td style="width: 66.88%; padding-right: 10px;">
                      <!-- ${ImageWithLink({ align: 'left', href: href, src: prods[0].src })} -->
                      ${Product(prods[0], 'center', `color: ${color || '#000000'}`, showPrices)}
                    </td>
                    `
                      : ''
                  }
                  <!-- <td class="${
                    imageSide === 'left'
                      ? 'newsletterLeft10pxTESTPRODS'
                      : 'newsletterRight10pxTESTPRODS'
                  }"> -->
                  <td style="width: 33.12%; padding-left: 10px;">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tr>
                        <td>
                          ${Product(prods[1], 'center', `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                      
                      <tr>
                        <td>
                          ${Product(prods[2], 'center', `color: ${color || '#000000'}`, showPrices)}
                        </td>
                      </tr>
                    </table>
                  </td>
                  ${
                    imageSide === 'right'
                      ? `
                    <td class="newsletterLeft10pxTEST_BIGIMG">
                      ${ImageWithLink({ align: 'right', href: href, src: prods[0].src })}
                    </td>
                    `
                      : ''
                  }
                </tr>
              </table>
            </td>
          </tr>
          `;
        }

        return `
        
          ${
            title?.show
              ? `
            ${
              idx !== 0
                ? Space({ className: 'newsletterBottom35px' })
                : title?.spaceBeforeClassName
                ? Space({ className: title.spaceBeforeClassName })
                : ''
            }
            ${Title({
              color: color,
              title: queries.categories[idx],
              align: title.align ?? 'left',
              insideContainer: true,
            })}
            ${Space({ className: 'newsletterBottom35px' })}
            `
              : ''
          }

          ${
            src
              ? `
            ${title?.show ? `` : Space({ className: 'newsletterBottom35px' })}
  
            ${ImageWithLink({
              href: href,
              src: src,
              alt: queries['categories'][idx] || name || 'Category Image',
              insideRow: true,
            })}
  
            ${Space({ className: 'newsletterBottom35px' })}`
              : ``
          }

          ${
            showParagraph
              ? `  
              ${src ? `` : Space({ className: 'newsletterBottom35px' })}
              ${Paragraph(
                queries.paragraphs ? queries.paragraphs[idx] : queries.paragraph,
                'left',
                color
              )}
              ${Space({ className: 'newsletterBottom35px' })}
            `
              : `${Space({ className: 'newsletterBottom20px' })}`
          }

          ${generateProductsContainer(
            productsAlignment === 'left'
              ? 'left'
              : productsAlignment === 'right'
              ? 'right'
              : idx % 2 === 0
              ? 'left'
              : 'right',
            [products[0], products[1], products[2]]
          )}

          ${
            products.length === 6
              ? `
            ${Space({})}
            ${generateProductsContainer(
              productsAlignment === 'left'
                ? 'right'
                : productsAlignment === 'right'
                ? 'left'
                : idx % 2 === 0
                ? 'right'
                : 'left',
              [products[3], products[4], products[5]]
            )}`
              : ``
          }

					

          ${
            ctaElement?.show
              ? `
            ${Space({ className: 'newsletterBottom35px' })}
            ${CTA({
              align: 'center',
              color: color,
              spaceAfter: { class: ctaElement?.spaceAfterClass },
              text: getPhrase('Shop now'),
              href: href,
            })}`
              : `${Space({ className: 'newsletterBottom20px' })}`
          }
        `;

      case 'image-3productsrow-imagewithvproducts':
        const firstParagraphIdx = idx * 2;
        const secondParagraphIdx = idx * 2 + 1;

        return `
					${idx > 0 ? Space({ className: 'newsletterBottom35px' }) : ''}

					${Title({ title: queries.categories[idx], insideContainer: true })}

					${Space({ className: 'newsletterBottom35px' })}

					${ImageWithLink({
            href: href,
            src: src,
            alt: queries['categories'][idx] || name || 'Category Image',
            insideRow: true,
          })}

					${Space({ className: 'newsletterBottom35px' })}

					${Paragraph(queries.paragraphs[firstParagraphIdx], 'left')}

					${Space({ className: 'newsletterBottom35px' })}

					${ProductsRow({ products: [products[0], products[1], products[2]] })}


					${Space({ className: 'newsletterBottom80px' })}

					${Paragraph(queries.paragraphs[secondParagraphIdx], 'left')}

					${Space({ className: 'newsletterBottom35px' })}

					${ImageWithVProducts({
            category: { name: name, href: href },
            image: links[`cat${idx + 1}a_src`],
            products: products.slice(3, 5),
            imageSide: idx % 2 === 0 ? 'left' : 'right',
          })}

					${Space({ className: 'newsletterBottom35px' })}

					${CTA({
            align: 'center',
            spaceAfter: { class: 'newsletterBottom80px' },
            text: getPhrase('Shop now'),
            href: href,
          })}
				`;

      case 'image-4productsgrid':
        return `
					${
            title?.show
              ? `
              ${
                idx !== 0
                  ? Space({ className: 'newsletterBottom35px' })
                  : title?.spaceBeforeClassName
                  ? Space({ className: title.spaceBeforeClassName })
                  : ''
              }
              ${Title({
                color: color,
                title: queries.categories[idx],
                align: title.align ?? 'left',
                insideContainer: true,
              })}
              ${Space({ className: 'newsletterBottom35px' })}
              `
              : ''
          }

					${
            src
              ? `
              ${ImageWithLink({
                href: href || queries['linkWithFilter'],
                src: src,
                alt: queries['categories']?.idx || name || 'Category Image',
                insideRow: true,
              })}
              
              ${
                !products || products.length === 0
                  ? ``
                  : Space({ className: 'newsletterBottom35px' })
              }
              `
              : ``
          }

					

					${
            showParagraph
              ? queries.paragraphs
                ? queries.paragraphs[idx]
                  ? `${Paragraph(queries.paragraphs[idx], 'left')} ${Space({
                      className: 'newsletterBottom35px',
                    })}`
                  : ``
                : queries.paragraph
                ? `${Paragraph(queries.paragraph, 'left')} ${Space({
                    className: 'newsletterBottom35px',
                  })}`
                : ``
              : ``
          }

          ${
            products && products.length > 0
              ? ` 
					<tr>
						<td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
							<table cellspacing="0" cellpadding="0" style="width: 100%;">
								<tr>
									<td class="${products[2] && products[3] ? 'newsletterBottom20px' : ``}">
										<!-- 1-2 Products table -->
										<table cellspacing="0" cellpadding="0" style="width: 100%; ">
											<tr>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
													${Product(products[0], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
													${Product(products[1], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
											</tr>
										</table>
									</td>
								</tr>

                ${
                  products[2] && products[3]
                    ? `
                <tr>
									<td>
										<!-- 3-4 Products table -->
										<table cellspacing="0" cellpadding="0" style="width: 100%; ">
											<tr>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
													${Product(products[2], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
													${Product(products[3], productsAlignment, `color: ${color || '#000000'}`, showPrices)}
												</td>
											</tr>
										</table>
									</td>
								</tr>
                  `
                    : ``
                }
								
							</table>
						</td>
					</tr>
          `
              : ``
          }

					
					${Space({ className: 'newsletterBottom35px' })}

					${
            ctaElement?.show
              ? CTA({
                  align: 'center',
                  spaceAfter: { class: 'newsletterBottom80px' },
                  text: getPhrase('Shop now'),
                  href: href || queries['linkWithFilter'],
                  color: color,
                })
              : ''
          }

          ${
            showRedLine
              ? `<tr>
                <td class="newsletterContainer">
                    <img src="https://pictureserver.net/static/2025/redline.png?ver=264" style="display:block" width="100%" alt="Line Separator">
                </td>
            </tr>
            `
              : ''
          }

          ${
            showWhiteLine
              ? `<tr>
                <td class="newsletterContainer">
                    <img src="https://pictureserver.net/static/2024/white_line.jpg?ver=264" style="display:block" width="100%" alt="Line Separator">
                </td>
            </tr>
            `
              : ''
          }
				`;

      case 'image-3productsrow':
        return `
					${title?.show ? (idx !== 0 ? Space({ className: 'newsletterBottom35px' }) : '') : ''}

					${
            title?.show
              ? Title({
                  title: queries.categories[idx],
                  align: title.align ?? 'left',
                  insideContainer: true,
                })
              : ''
          }

					${title?.show ? Space({ className: 'newsletterBottom35px' }) : ''}

					${ImageWithLink({
            href: products[0].href,
            src: products[0].src,
            alt: queries['categories']?.idx || name || 'Category Image',
            insideRow: true,
          })}

					${Space({ className: 'newsletterBottom35px' })}

					${ProductsRow({
            products: [products[1], products[2], products[3]],
            showName: 'false',
            showPrices: 'false',
          })}
          
					${Space({ className: 'newsletterBottom35px' })}

          ${CTA({
            align: 'center',
            spaceAfter: { class: 'newsletterBottom80px' },
            text: getPhrase('Shop now'),
            href: href,
          })}

          <tr><td>${idx !== len - 1 ? Line(undefined, true) : ''}</td></tr>
        `;

      case 'chujWie':
        function generateCategoryIntro({
          href1,
          href2,
          src1,
          src2,
          paragraphId,
          imageSide = 'left',
        }) {
          switch (imageSide) {
            case 'right':
              return `
              <tr>
                <td class="newsletterContainer">
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                      <td width="43.45%" style="vertical-align: middle !important; width: 43.45%;" class="newsletterRight20px">
                        <span class="newsletterParagraph">
                          ${queries['paragraphs'][paragraphId]}
                        </span>
                      </td>

                      <td width="56.55%" valign="bottom" align="right" style="vertical-align: bottom !important; width: 56.55%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'bottom',
                          imgValign: 'bottom',
                          href: href1,
                          src: src1,
                          insideRow: false,
                        })}
                      </td>
                    </tr>
                  </table>

                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    ${ImageWithLink_new({
                      TdAvalign: 'top',
                      imgValign: 'top',
                      href: href2,
                      src: src2,
                      insideRow: true,
                    })}
                  </table>
                </td>
              </tr>
              `;
            default:
              return `
              <tr>
                <td class="newsletterContainer">
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                      <td width="56.55%" valign="bottom" align="left" style="vertical-align: bottom !important; width: 56.55%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'bottom',
                          imgValign: 'bottom',
                          href: href1,
                          src: src1,
                          insideRow: false,
                        })}
                      </td>

                      <td width="43.45%" style="vertical-align: middle !important; width: 43.45%;" class="newsletterLeft20px">
                        <span class="newsletterParagraph">
                          ${queries['paragraphs'][paragraphId]}
                        </span>
                      </td>
                    </tr>
                  </table>

                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    ${ImageWithLink_new({
                      TdAvalign: 'top',
                      imgValign: 'top',
                      href: href2,
                      src: src2,
                      insideRow: true,
                    })}
                  </table>
                </td>
              </tr>
              `;
          }
        }

        function generateProduct({ product, imageSide = 'left' }) {
          const imageSideWidthPercentage = 60;
          const productInfoSideWidthPercentage = 100 - imageSideWidthPercentage;

          switch (imageSide) {
            case 'right':
              return `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                      <td width="${productInfoSideWidthPercentage}%" valign="center" align="center" style="vertical-align: middle !important; background: white; text-align: center; width: ${productInfoSideWidthPercentage}%;">
                        ${Product({ ...product, src: null }, 'center', null, true)}
                      </td>

                      <td width="${imageSideWidthPercentage}%" valign="bottom" align="left" style="vertical-align: bottom; width: ${imageSideWidthPercentage}%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'center',
                          imgValign: 'middle',
                          href: product.href,
                          src: product.src,
                          insideRow: false,
                        })}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              `;
            default:
              return `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                    <tr>
                    <td width="${imageSideWidthPercentage}%" valign="bottom" align="right" style="vertical-align: bottom; width: ${imageSideWidthPercentage}%; line-height: 0; font-size: 0; padding: 0; margin: 0;">
                        ${ImageWithLink_new({
                          TdAvalign: 'center',
                          imgValign: 'middle',
                          href: product.href,
                          src: product.src,
                          insideRow: false,
                        })}
                      </td>

                      <td width="${productInfoSideWidthPercentage}%" valign="center" align="center" style="vertical-align: middle !important; background: white; text-align: center; width: ${productInfoSideWidthPercentage}%;">
                        ${Product({ ...product, src: null }, 'center', null, true)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              `;
          }
        }

        return `

          ${generateCategoryIntro({
            href1: products[0].href,
            href2: products[1].href,
            src1: products[0].src,
            src2: products[1].src,
            paragraphId: idx,
            imageSide: idx % 2 === 0 ? 'left' : 'right',
          })}
          
          ${Space({})}
          
          ${generateProduct({
            product: products[2],
            imageSide: idx % 2 === 0 ? 'right' : 'left',
          })}
          
          ${Space({})}
          
          ${generateProduct({
            product: products[3],
            imageSide: idx % 2 === 0 ? 'left' : 'right',
          })}

          ${Space({})}

          ${generateProduct({
            product: products[4],
            imageSide: idx % 2 === 0 ? 'right' : 'left',
          })}

          ${Space({})}

          ${CTA({
            align: 'center',
            spaceAfter: { class: 'newsletterBottom80px' },
            text: getPhrase('Shop now'),
            href: queries[`linkWithFilter_${idx + 1}`],
          })}
        
        `;

      default:
        break;
    }

    //     if (type === 'inspirational-0703') {
    //       function ProductDiv(product) {
    //         return `
    //         <div style="min-width: 0; box-sizing: border-box; text-align: left; height: 50%; min-height: 160px; width: 100%;">
    //           <div class="newsletterBottom20px">
    //             <a href="${product.href}">
    // 							<img alt="${product.name}" src="${
    //           product.src
    //         }" style="vertical-align: text-top; max-width: 100%; display:block; height: 100%; aspect-ratio: 1 / 1; height: 100%; min-height: 90px;" loading="lazy">
    // 						</a>
    //           </div>
    //           <div style="display: flex; text-align: left; flex-direction: column;">
    // 						<span class="newsletterProductTitle">
    // 							${product.name}
    // 						</span>
    //             <div class="newsletterProductPriceRow" style="padding-bottom: 8px; text-align: left;">
    //               <span class="newsletterProductLowPrice">${product.lowPrice} </span>
    // ${
    //                   product.highPrice
    //                     ? `<span class="newsletterProductHightPrice">${product.highPrice}</span>`
    //                     : `<span class="newsletterProductHightPrice" style="text-decoration: none; !important">&nbsp;</span>`
    //                 }            </div>
    //           </div>
    //         </div>
    //       `;
    //       }

    //       function ProductDivTall(product) {
    //         return `
    //         <div style="height: 100%; min-width: 0; box-sizing: border-box;">
    //           <div style="
    //             display: flex;
    //             flex-direction: column;
    //             justify-content: space-between;
    //             height: 100%;
    //             width: 100%;
    //             min-width: 0;
    //             box-sizing: border-box;
    //           ">
    //             <a class="newsletterMarginBottom20px" style="
    //                 flex: 1 1 auto;
    //                 display: flex;
    //                 flex-direction: column;
    //                 justify-content: space-between;
    //                 height: 100%;
    //                 width: 100%;
    //                 min-width: 0;
    //                 box-sizing: border-box;
    //                 text-decoration: none;
    //                 background-position: center;
    //                 background-image: url('${product.src}');
    //                 background-size: contain;
    //                 background-repeat: no-repeat;
    //                 background-color: white;
    //               " href="${product.href}"></a>
    //             <div style="display: flex; flex-direction: column;">
    //               <div class="newsletterProductTitleRow">
    //                 <div class="newsletterProductTitle" style="text-align: left;">
    //                   ${product.name}
    //                 </div>
    //               </div>
    //               <div class="newsletterProductPriceRow" style="padding-bottom: 8px; text-align: left;">
    //                 <span class="newsletterProductLowPrice">${product.lowPrice} </span>
    // 								${
    //                   product.highPrice
    //                     ? `<span class="newsletterProductHightPrice">${product.highPrice}</span>`
    //                     : `<span class="newsletterProductHightPrice" style="text-decoration: none; !important">&nbsp;</span>`
    //                 }

    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       `;
    //       }

    //       function generateProductsFlexGrid(products, layoutType = 0) {
    //         // layoutType: 0 = [small, small, tall, small, small]
    //         // layoutType: 1 = [small, small, small, small, small, small]
    //         // layoutType: 3 = [tall, small, small, small, small]
    //         if (layoutType === 0) {
    //           // [small, small, tall, small, small]
    //           return `
    //           <div class="newsletterContainer" style="text-align: left; display: flex; gap: 1%; align-items: stretch; justify-content: space-between;">
    //             <div style="display: flex; flex-direction: column; gap: 8px; width: 33.33%;">
    //               ${ProductDiv(products[0])}
    //               ${ProductDiv(products[3])}
    //             </div>
    //             <div style="display: flex; flex-direction: column; gap: 8px; width: 33.33%;">
    //               ${ProductDiv(products[1])}
    //               ${ProductDiv(products[4])}
    //             </div>
    //             <div style="min-width: 0; max-width: 33.33%; box-sizing: border-box; width: 100%;">
    //               ${ProductDivTall(products[2])}
    //             </div>
    //           </div>
    //         `;
    //         }
    //         if (layoutType === 1 || layoutType === 2) {
    //           // [small, small, small, small, small, small]
    //           return `
    //           <div class="newsletterContainer" style="display: flex; text-align: left; gap: 1%; align-items: stretch; justify-content: space-between;">
    //             <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; width: 33.33%;">
    //               ${ProductDiv(products[0])}
    //               ${ProductDiv(products[3])}
    //             </div>
    //             <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; width: 33.33%;">
    //               ${ProductDiv(products[1])}
    //               ${ProductDiv(products[4])}
    //             </div>
    //             <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; width: 33.33%;">
    //               ${ProductDiv(products[2])}
    //               ${ProductDiv(products[5])}
    //             </div>
    //           </div>
    //         `;
    //         }
    //         if (layoutType === 3) {
    //           // [tall, small, small, small, small]
    //           return `
    //           <div class="newsletterContainer" style="display: flex; text-align: left; gap: 1%; align-items: stretch; justify-content: space-between;">
    //             <div style="min-width: 0; max-width: 33.33%; box-sizing: border-box; width: 100%;">
    //               ${ProductDivTall(products[0])}
    //             </div>
    //             <div style="display: flex; flex-direction: column; gap: 8px; width: 33.33%;">
    //               ${ProductDiv(products[1])}
    //               ${ProductDiv(products[3])}
    //             </div>
    //             <div style="display: flex; flex-direction: column; gap: 8px; width: 33.33%;">
    //               ${ProductDiv(products[2])}
    //               ${ProductDiv(products[4])}
    //             </div>
    //           </div>
    //         `;
    //         }
    //         // fallback: all small in a row
    //         return `
    //         <div class="newsletterContainer" style="display: flex; width: 100%; text-align: left; gap: 1%; align-items: stretch; justify-content: space-between;">
    //           ${products.map(ProductDiv).join('')}
    //         </div>
    //       `;
    //       }

    //       return `

    //       <!-- Category Image -->

    //       <table border="0" cellspacing="0" cellpadding="0" width="100%">
    //         <tr>
    //           <td>
    //             ${ImageWithLink({ href: href, src: src, alt: name })}
    //           </td>
    //         </tr>
    //       </table>

    // 			<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 980px; width: 100%; background-color: #FFE0D9; color: #000000;" id="newsletter">

    //       ${Space({})}

    //       <tr><td>${Paragraph(queries.paragraphs[idx], 'left', color)}</td></tr>

    //       ${Space({})}

    //       <!-- Category Products -->
    //       <tr><td>${generateProductsFlexGrid(products, idx)}</td></tr>

    //       ${Space({})}
    // 			</table>

    //       <!-- CTA START -->
    // 			<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 980px; width: 100%; background-color: #FFE0D9; color: #000000;" id="newsletter">        <tbody>
    //           <tr>
    //             <td align="center">
    //               <a href="${href}" style="color: ${color || '#000'}; text-decoration: underline;">
    //                 <span class="newsletterCta">${cta}</span>
    //               </a>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>

    // 			<!-- END CTA -->
    // 			<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 980px; width: 100%; background-color: #FFE0D9; color: #000000;" id="newsletter">
    //       	${Space({ className: 'newsletterBottom80px' })}
    // 			</table>
    //       <!-- END INSPIRATIONAL CATEGORY -->

    //       `;
    //     }

    //     if (type === 'no_products') {
    //       if (idx === len) {
    //         return `
    // <table border="0" cellspacing="0" cellpadding="0" width="100%">
    //       <tbody>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td>
    //             ${Title({ title: name, align: 'left', color: color })}
    //           </td>
    //         </tr>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <a href="${href}">
    //               <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
    //             </a>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td align="center">
    //             ${
    //               ctaComponent
    //                 ? ctaComponent(href, cta)
    //                 : `
    //                 <a href="${href}" style="color:${color || '#000'}; text-decoration: underline;">
    //                   <span class="newsletterCta">${cta}</span>
    //                 </a>
    //               `
    //             }
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //         `;
    //       }
    //       return `
    //     <table border="0" cellspacing="0" cellpadding="0" width="100%">
    //       <tbody>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td>
    //             ${Title({ title: name, align: 'left', color: color })}
    //           </td>
    //         </tr>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <a href="${href}">
    //               <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
    //             </a>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td align="center">
    //             ${
    //               ctaComponent
    //                 ? ctaComponent(href, cta)
    //                 : `
    //                 <a href="${href}" style="color:${color || '#000'}; text-decoration: underline;">
    //                   <span class="newsletterCta">${cta}</span>
    //                 </a>
    //               `
    //             }
    //           </td>
    //         </tr>
    //         <tr>
    //           <td class="newsletterBottom35px"></td>
    //         </tr>
    //         <tr>
    //           <td>
    //               ${Line(line)}
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     `;
    //     }

    //     if (type === 'monday') {
    //       return `
    //   <table border="0" cellspacing="0" cellpadding="0" width="100%">
    //     <thead>
    //       <tr>
    //         <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
    //           ${Title({ title: name, align: 'left', color: color })}
    //         </td>
    //       </tr>
    //       <tr>
    //         <td class="newsletterBottom35px"></td>
    //       </tr>
    //       <tr>
    //         <td>
    //           ${ImageWithLink({ href: href, src: src, alt: name })}
    //         </td>
    //       </tr>
    //       <tr>
    //         <td class="newsletterBottom35px"></td>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
    //           <table cellspacing="0" cellpadding="0" style="width: 100%;">
    //             <tr>
    //               <td class="newsletterBottom20px">
    //                 <!-- 1-2 Products table -->
    //                 <table cellspacing="0" cellpadding="0" style="width: 100%; ">
    //                   <tr>
    //                     <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
    //                     <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
    //                       ${Product(products[0], 'left', `color: ${color || '#000000'}`)}
    //                     </td>
    //                     <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
    //                     <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
    //                       ${Product(products[1], 'left', `color: ${color || '#000000'}`)}
    //                     </td>
    //                   </tr>
    //                 </table>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                 <!-- 3-4 Products table -->
    //                 <table cellspacing="0" cellpadding="0" style="width: 100%; ">
    //                   <tr>
    //                     <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
    //                     <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
    //                       ${Product(products[2], 'left', `color: ${color || '#000000'}`)}
    //                     </td>
    //                     <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
    //                     <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
    //                       ${Product(products[3], 'left', `color: ${color || '#000000'}`)}
    //                     </td>
    //                   </tr>
    //                 </table>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td class="newsletterBottom35px">
    //               </td>
    //             </tr>
    //           </table>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td class="newsletterBottom80px">
    //           <table cellspacing="0" cellpadding="0" style="width: 100%; ">
    //             <tbody>
    //               <tr>
    //                 <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
    //                   ${
    //                     ctaComponent
    //                       ? ctaComponent(href, cta)
    //                       : `
    //                       <a href="${href}" style="color:${
    //                           color || '#000'
    //                         }; text-decoration: underline;">
    //                         <span class="newsletterCta">${cta}</span>
    //                       </a>
    //                     `
    //                   }
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   `;
    //     }

    //     if (type === 'image') {
    //       if (idx === len) {
    //         return `
    //         <table cellspacing="0" cellpadding="0" border="0" width="100%">
    //           <thead>
    //             <tr>
    //               <td>
    //                 ${ImageWithLink({ href: href, src: src, alt: name })}
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                   ${Space({ className: 'newsletterBottom20px' })}
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>
    //                   ${Line(line)}
    //               </td>
    //             </tr>
    //           </thead>
    //         </table>
    //         `;
    //       }
    //       return `
    //       <table cellspacing="0" cellpadding="0" border="0" width="100%">
    //         <thead>
    //           <tr>
    //             <td>
    //               ${ImageWithLink({ href: href, src: src, alt: name })}
    //             </td>
    //           </tr>
    //             <tr>
    //               <td>
    //                 ${Space({ className: 'newsletterBottom20px' })}
    //               </td>
    //             </tr>
    //         </thead>
    //       </table>
    //       `;
    //     }
  }
);
