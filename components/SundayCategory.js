import { getState } from "../main/initApp.js";
import { ImageWithLink } from "./ImageWithLink.js";
import { Space } from "./Space.js";

export function SundayCategory(props) {
    props.isCta = props?.isCta === false ? props.isCta : true
    const country = getState("country")

    for (const item of props?.renderOn || []) {
        if (country in item) {
            props[item.field] = item[country]
        }
    }

    const {href, src, cta} = props

    if (props.href === null || props.src === null) {
        return ""
    }
    return `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">

            <tr>
                <td align="center">
                    ${ImageWithLink({
                    href,
                    src,
                    })}
                </td>
            </tr>

            ${props.isCta ? `
            <tr>
                <td>
                    ${Space()}
                </td>
            </tr>

            <tr>
                <td align="center">
                    <a href="${href}" style="color:#000; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                    </a>
                </td>
            </tr>
            ` : ""}
        </table>
    `;
}
