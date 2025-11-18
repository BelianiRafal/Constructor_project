import { isAllowToRender, optimize } from "../../helpers/optimizeImage.js";

export const ImageWithLink = isAllowToRender(
  optimize(({ href, src, alt = "Newsletter Image", attrs, align = "center" }) => {
    return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%" >
        <tbody>
            <tr>
                <td valign="top" align="${align}" >
                    <a href="${href}">
                        <img alt="${alt}" src="${src}" style="vertical-align: top; max-width: 100%;" ${attrs || ""} loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
  })
);
