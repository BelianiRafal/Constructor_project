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
} from './_index.js';
import translateImage from '../../helpers/translateImage.js';
import { Freebies } from '../freebies.js';

export const Category = isAllowToRender(
  ({
    links,
    queries,
    name,
    href,
    src,
    products,
    ctaComponent,
    color,
		getPhrase,
    line,
    len,
    idx,
    cta = 'CTA',
    type = 'monday',
  }) => {
    src = typeof src == 'object' ? src.src ?? src.value : src;

    if (!type) {
      return 'Please specify type category.';
    }
    switch (type) {
      case 'image-3productsrow-imagewithvproducts':
        const firstParagraphIdx = idx * 2;
        const secondParagraphIdx = idx * 2 + 1;

        return `
					${Space({ className: 'newsletterBottom35px' })}

					${Title({ title: queries.categories[idx], insideContainer: true })}

					${Space({ className: 'newsletterBottom35px' })}

					${ImageWithLink({ href: href, src: src, alt: queries['categories'][idx], insideRow: true })}

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
						spaceAfter: {class: 'newsletterBottom60px'},
						text: getPhrase("Shop now"),
						href: href,
					})}
				`;

      case 'image-4productsgrid':
        return `
					${ImageWithLink({ href: href, src: src, alt: queries['categories']?.idx || null, insideRow: true })}

					${Space({ className: 'newsletterBottom35px' })}

					${Paragraph(queries.paragraphs[idx], 'left')}

					${Space({ className: 'newsletterBottom35px' })}

					<tr>
						<td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
							<table cellspacing="0" cellpadding="0" style="width: 100%;">
								<tr>
									<td class="newsletterBottom20px">
										<!-- 1-2 Products table -->
										<table cellspacing="0" cellpadding="0" style="width: 100%; ">
											<tr>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
													${Product(
														products[0],
														"left",
														`color: ${color || "#000000"}`
													)}
												</td>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
													${Product(
														products[1],
														"left",
														`color: ${color || "#000000"}`
													)}
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td>
										<!-- 3-4 Products table -->
										<table cellspacing="0" cellpadding="0" style="width: 100%; ">
											<tr>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
													${Product(
														products[2],
														"left",
														`color: ${color || "#000000"}`
													)}
												</td>
												<!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
												<td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
													${Product(
														products[3],
														"left",
														`color: ${color || "#000000"}`
													)}
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					
					${Space({ className: 'newsletterBottom35px' })}

					${CTA({
						align: 'center',
						spaceAfter: {class: 'newsletterBottom80px'},
						text: getPhrase("Shop now"),
						href: href,
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
