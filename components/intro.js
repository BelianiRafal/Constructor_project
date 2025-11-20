import { isAllowToRender } from "../helpers/optimizeImage.js";
import { Space } from "./Space.js";
import { Line } from "./index.js";

export const Intro = isAllowToRender(
  ({
    title,
    paragraph,
    data,
    spaceClassName,
    color = "#000000",
    align = "left",
    type = "title&paragraph",
    idx,
    introLine,
    len,
    add_utm,
    selectCampaign,
  }) => {
    if (idx !== len) return ""; // Jeśli idx nie jest ostatnim elementem, zwracamy pusty string.

    const templates = {
      paragraph: `
      <span class="newsletterParagraph" style="color: ${color}">
        ${data ? data[0] : paragraph}
      </span>
    `,

      "title&paragraph": `

      ${data ? `
        <span class="${title?.className || "newsletterTitle"}" style="color: ${color}">
          ${data ? data[0] : title?.value}
        </span>` : ""}
        ${Space({ className: spaceClassName })}
        <span class="newsletterParagraph" style="color: ${color}">
          ${data ? data[1] : paragraph}
        </span>
      
    <!-- data[2] if you need an additional paragraph with a link example watch 28/07/25 -->
      ${
         data && data[2] ? 
        `${Space({ className: spaceClassName })}
       <span class="newsletterParagraph" style="color: ${color}">
        ${data[3].replace('variable', add_utm(data[4]))}
      </span>`
        : ""
      }
    `,

      "paragraph&cta": `
        <span class="newsletterParagraph" style="color: ${color}">
          ${data ? data[0] : paragraph}
        </span>
        ${Space({ className: spaceClassName || "newsletterBottom35px" })}
        <a href="${data && data[2] ? add_utm(data[2]) : '#'}" style="color:${color}; text-decoration: underline;">
          <span class="newsletterCta">${data ? data[1] : 'CTA'}</span>
        </a>
    `,
    };

    console.log(templates[type]);

    return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
      <tbody>
        <tr>
          <td align="${align}">
            ${templates[type] || ""}
          </td>
        </tr>
      </tbody>
    </table>
  `;
  }
);
