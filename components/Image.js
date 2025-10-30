import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";

export const Image = isAllowToRender(optimize(({src, alt = "", style}) => {

  return `
  <table align="center" cellspacing="0" cellpadding="0" style="${style || ""}">
    <tbody>
        <tr>
            <td>
                <img alt="${alt}" src="${src}" loading="lazy" style="display: block; max-width: 100%">
            </td>
        </tr>
    </tbody>
  </table>
  `;
}))
