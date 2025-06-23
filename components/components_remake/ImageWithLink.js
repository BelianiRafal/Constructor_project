import { isAllowToRender, optimize } from "../../helpers/optimizeImage.js";

export const ImageWithLink = isAllowToRender(
  optimize(({ href, src, alt = "", attrs, align = "center" }) => {
    return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%" >
        <tbody>
            <tr>
                <td align="${align}" >
                    <a href="${href}">
                        <img alt="${alt}" src="${src}" style="vertical-align: text-top; max-width: 100%;" ${attrs || ""} loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
  })
);
