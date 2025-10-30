import { Space } from "./Space.js";

export const shopNow = ({
  href,
  cta,
  textColor,
  space = false,
  space_top = true,
  backgorund = "#FD9000",
}) => {

        return `
        ${space_top === false ? 
            `<tr >
                    <td style="background-color:${backgorund}" class="newsletterBottom${space_top}px"></td>
                 </tr>
                ` :
         `<tr >
                    <td style="background-color:${backgorund}" class="newsletterBottom35px"></td>
                 </tr>
                `}
            <tr>
                <td align="center" style="background-color:${backgorund}">
                    <a href="${href}" style="color:${textColor}; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                    </a>
                </td>
            </tr>
            ${space != false ? 
                `<tr >
                    <td style="background-color:${backgorund}" class="newsletterBottom${space}px"></td>
                 </tr>
                `
            :
        ""}
            
       
    `;
    }
