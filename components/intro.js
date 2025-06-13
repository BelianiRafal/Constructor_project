import { isAllowToRender } from "../helpers/optimizeImage.js";
import { Space } from "./Space.js";

export const Intro = isAllowToRender(({ 
  title, 
  paragraph, 
  data, 
  spaceClassName, 
  color = "#000000", 
  align = "left", 
  type = "title&paragraph", 
  idx, 
  len 
}) => {
  if (idx !== len) return ""; // Jeśli idx nie jest ostatnim elementem, zwracamy pusty string.

  const templates = {
    paragraph: `
      <span class="newsletterParagraph" style="color: ${color}">
        ${data ? data[0] : paragraph}
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
});
