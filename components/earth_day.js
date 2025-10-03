import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";
import { Space } from "./Space.js";
import { ImageWithLink } from "./ImageWithLink.js";

export const Earth_Day = isAllowToRender(({ 
  title, 
  paragraph, 
  data, 
  spaceClassName,
  ctaComponent,
  color = "#000000", 
  align = "left", 
  type = "title&paragraph", 
  idx, 
  len,
  href,
  cta,
}) => {
  if (idx !== len) return ""; // Jeśli idx nie jest ostatnim elementem, zwracamy pusty string.

  // Expected data structure:
  // data[0] = title text ("Our green initiatives")
  // data[1] = paragraph text (if any)
  // data[2] = initiatives data array with structure like:
  // [
  //   { title: "Recycled Materials", image: "path1.jpg", link: "#link1" },
  //   { title: "Acacia wood", image: "path2.jpg", link: "#link2" },
  //   { title: "Natural Jute", image: "path3.jpg", link: "#link3" }
  // ]

  const templates = {
    title: `
      <span class="${title?.className || "newsletterTitle"}" style="color: ${color}">
        ${data ? data[0] : title?.value}
      </span>
    `,
    "title&paragraph": `
      <span class="${title?.className || "newsletterTitle"}" style="color: ${color}">
        ${data ? data[0] : title?.value}
      </span>
      ${Space({ className: spaceClassName })}
      <span class="newsletterParagraph" style="color: ${color}">
        ${data ? data[1] : paragraph}
      </span>
    `
  };

  // Create initiatives columns if data[2] exists
  const greenInitiativesTemplate = data && data[2] ? `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin-top: 20px;">
      <tbody>
        <tr>
          ${data[2].map(initiative => `
          <td align="center" width="${100 / data[2].length}%" style="padding: 0 10px;">
            <a href="${initiative.link}" class="newsletterParagraph" style="color: ${color};">
              ${initiative.title}
            </a>
          </td>
          `).join('')}
        </tr>
        <tr>
          <td colspan="${data[2].length}" align="center">
            ${Space({ className: "newsletterBottom20px" })}
          </td>
        </tr>
        <tr>
          ${data[2].map(initiative => `
          <td align="center" width="${100 / data[2].length}%" style="padding: 0 10px;">
            ${ImageWithLink({
              href: initiative.link,
              src: initiative.image,
              alt: initiative.title,
              attrs: 'width="100%"'
            })}
          </td>
          `).join('')}
        </tr>

      </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin-top: 20px;">
      <tbody>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
        <td class="newsletterBottom35px">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${
                    ctaComponent
                      ? ctaComponent(href, cta)
                      : `
                      <a href="${href}" style="color:${
                          color || "#000"
                        }; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  ` : '';

  return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
      <tbody>
        <tr>
          <td align="${align}">
            ${templates[type] || ""}
          </td>
        </tr>
        ${data && data[2] ? `
        <tr>
          <td>
            ${greenInitiativesTemplate}
          </td>
        </tr>
        ` : ''}
      </tbody>
    </table>
  `;
});