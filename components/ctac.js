import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, ProductFree, Title } from "./index.js";

export const CtaC = isAllowToRender(
  ({
    name,
    desc,
    href,
    src,
    phref,
    psrc,
    pname,
    plow,
    product,
    products,
    ctaComponent,
    color,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    ctahref,
    ctatext,
    free,
    align,
    type = "wednesday",
  }) => {
    if (type === "wednesday") {
      return `
      <tr>
        <td class="newsletterBottom80px">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${
                    ctaComponent
                      ? ctaComponent(ctahref, ctatext)
                      : `
                      <a href="${ctahref}" style="color:${
                          color || "#000000"
                        }; text-decoration: underline;">
                        <span class="newsletterCta">${ctatext}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
  `;
    }
  }
);
