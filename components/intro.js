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
    type = "paragraph",
    idx,
    introLine,
    href,
    cta,
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

      ${selectCampaign.date === "2025.10.06" ? Space({ className: "newsletterBottom35px" }): 
    `
    <tr>
      <td class="newsletterBottom35px">
    </tr>
    <tr>
          <td align="center">
              <a href="${href}" style="color:${color}; text-decoration: underline;">
                  <span class="newsletterCta">${cta}</span>
              </a>
          </td>
      </tr>
    `}
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
    };

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
