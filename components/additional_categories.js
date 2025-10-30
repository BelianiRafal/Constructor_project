import {
    Space,
  } from "../components/index.js";

export function AdditionalCategories({
    text1,
    text2,
    text3,
    text4,
    text5,
    href1,
    href2,
    href3,
    href4,
    src1,
    src2,
    src3,
    src4,
}) {


  return `
    <tr>
        <td class="backgroundOne">
            ${Space({ className: "newsletterBottom35px" })}
        </td>
    </tr>
    <tr>
        <td align="center" class="newsletterTitleContainer" style="background-color: #ffffff">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center">
                        <span class="newsletterTitle">
                            ${text1}
                        </span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="backgroundOne">
            ${Space({ className: "newsletterBottom35px" })}
        </td>
    </tr>
    <tr>
        <td align="center" class="newsletterProductContainer" style="background-color: #ffffff;">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterProductContainerLEFT70px" width="50%">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tbody>
                                <tr>
                                    <td style="padding-left: 0px; padding-right: 0px;">
                                        <a href=${href1}>
                                            <img width="100%" src="${src1}" style="display: block;" />
                                        </a>
                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tbody>
                                                <tr>
                                                <td align="center">
                                                    <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" class="newsletterProductTitleContainer">
                                                                    <a href=${href1} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${text2}</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td align="center" class="newsletterProductContainerRIGHT70px" width="50%">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tbody>
                                <tr>
                                    <td style="padding-left: 0px; padding-right: 0px;">
                                        <a href=${href2}>
                                            <img width="100%" src="${src2}" style="display: block;" />
                                        </a>
                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" class="newsletterProductTitleContainer">
                                                                        <a href=${href2} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${text3}</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="newsletterProductContainerLEFT70px" width="50%">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tbody>
                                <tr>
                                    <td style="padding-left: 0px; padding-right: 0px;">
                                        <a href=${href3}>
                                            <img width="100%" src="${src3}" style="display: block;" />
                                        </a>
                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" class="newsletterProductTitleContainer">
                                                                        <a href=${href3} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${text4}</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td align="center" class="newsletterProductContainerRIGHT70px" width="50%">
                        <table align="center" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tbody>
                                <tr>
                                    <td style="padding-left: 0px; padding-right: 0px;">
                                        <a href=${href4}>
                                            <img width="100%" src="${src4}" style="display: block;" />
                                        </a>
                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" class="newsletterProductTitleContainer">
                                                                        <a href=${href4} style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">${text5}</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
  `;
}