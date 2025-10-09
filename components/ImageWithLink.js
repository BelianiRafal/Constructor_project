import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";

export const ImageWithLink = isAllowToRender(
  optimize(({ href, src, alt, attrs }) => {
    return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%" >
        <tbody>
            <tr>
                <td>
                    <a href="${href}">
                        <img alt="${alt ? alt : "Newsletter image"}" src="${src}" style="vertical-align: middle; max-width: 100%;" ${attrs || ""} loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
  })
);
