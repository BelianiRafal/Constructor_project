import { ImageWithLink, Product, Title, WhiteLine } from "./index.js";
import {TemplateHandlers} from "../main/handlers/handlers.js";
export function Create2Columns_Grid_with_img({  iter, left, right, space_size, shuffle, ctaComponent, href, cta, color, align, catTitle }) {
    const handlers = new TemplateHandlers({
                                            products: null,          
                                            categoriesLinks: null,   
                                            categoriesTitles: null,
                                            footer: null,
                                            header: null,
                                            templates: null,
});
    return  iter.map((category, index) => {
                                      const columns = [];
                                      const newIndex = 0
                                      if (shuffle) {
                                          category.elements.forEach((item, index) => {
                                              if (index % 2 === 0) {
                                                  columns.push(left(item));
                                              } else {
                                                  columns.push(right(item));
                                              }
                                          });
                                      } else {
                                            console.log(handlers.getCategoryLink(category.href))
                                          
                                          category.elements.forEach((item, index) => {
                                            
                                              switch (index % 4) {
                                                  case 0:
                                                  case 2:
                                                      columns.push(left(item));
                                                      break;
                                                  case 1:
                                                  case 3:
                                                      columns.push(right(item));
                                                      break;
                                              }
                                          });
                                      }

        const CTA_ELEM = `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td align="${align}">
                            ${ctaComponent ? ctaComponent(href, cta) : `<a href="${handlers.getCategoryLink(category.href)}" style="color:${color || "#000"}; text-decoration: underline;">
                                <span class="newsletterCta">${cta}</span>
                            </a>`}
                        </td>
                    </tr>
                    <tr><td class="${space_size}"></td></tr>
                    <tr><td> ${WhiteLine()}</td></tr>
                   
                </tbody>
            </table>
        `;

        return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <thead>
                     <tr><td style="padding-bottom: 35px;"></td></tr>                   
                    <tr>
                        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
                            ${Title({ title: catTitle[index], align: "center", color: '#ffffff' })}
                        </td>
                    </tr>
                    <tr><td style="padding-bottom: 35px;"></td></tr>
                    </tr>
                    <tr>
                        <td>
                            ${ImageWithLink({ href: handlers.getCategoryLink(category.href), src: category.src, alt: category.name })}
                        </td>
                    </tr>
                    <tr><td style="padding-bottom: 35px;"></td></tr>
                </thead>
            </table>

            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td style="padding-bottom: 20px;">
                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tbody>
                                    <tr>${columns.slice(0, 2).join("")}</tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tbody>
                                    <tr>${columns.slice(2, 4).join("")}</tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr><td style="padding-bottom: 35px;"></td></tr>
                </tbody>
            </table>

            ${CTA_ELEM}
        `;
       
    }).join("");
}
