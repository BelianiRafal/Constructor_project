import { isAllowToRender } from "../helpers/optimizeImage.js";
import { getState } from "../main/initApp.js";

export const Space = isAllowToRender((props) => {
  const country = getState("country");
  for (const item of props?.renderOn || []) {
    if (country in item) {
      props[item.field] = item[country];
    }
  }

  if (props?.className === null) {
    return ""
  }

  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    <tbody>
        <tr>
            <td class="${props?.className || "newsletterBottom35px"}">
            </td>
        </tr>
    </tbody>
  </table>
  `;
})
