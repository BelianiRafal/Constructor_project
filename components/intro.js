import { isAllowToRender } from "../helpers/optimizeImage.js";
import { Space } from "./Space.js";

export const Intro = isAllowToRender(({ title, paragraph, data, spaceClassName, color, align = "left" }) => {
  
  if (title === 'no_title'){
    return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      <tr>
        <td>
          ${Space({className: spaceClassName})}
        </td>
      </tr>
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tbody>
              <tr>
                <td align="${align}" >
                  <span class="newsletterParagraph" style="color: ${color || "#000000"}">
                    ${data ? data[1] : paragraph}
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
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tbody>
              <tr>
                <td align="${align}">
                  <span class="${title?.className  || "newsletterTitle"}" style="color: ${color || "#000000"}">
                    ${data ? data[0] : title?.value}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          ${Space({className: spaceClassName})}
        </td>
      </tr>
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tbody>
              <tr>
                <td align="${align}" >
                  <span class="newsletterParagraph" style="color: ${color || "#000000"}">
                    ${data ? data[1] : paragraph}
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
})