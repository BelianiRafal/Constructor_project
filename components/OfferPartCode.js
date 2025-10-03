import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";

export function OfferPartCode({ color, data, getPhrase, queries, paragraph1, paragraph2, paragraph3, href, type }) {
  const newsletter = `
    <tr>
      <td style="color: ${color}">
        ${Paragraph(data ? data[0] : paragraph1  || "Missing Offer - part 1", "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] : paragraph2, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${GetCode({
          color: color,
          code: queries?.codeCTA || "Code tableQuery not found.",
          link: href,
          type,
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(data ? data[3] :paragraph3, "center", `color: ${color}`)}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(getPhrase("Choose from:"), "center", `color: ${color}`)}
      </td>
    </tr>
  `;
  const landing = `
    <tr>
      <td >
        ${Paragraph(data ? data[0] :paragraph1, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] :paragraph2, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${GetCode({
          color: color,
          code: queries?.code || "Code tableQuery not found.",
          link: href,
          type,
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(data ? data[3] :paragraph3, "center")}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(getPhrase("Choose from:"), "center")}
      </td>
    </tr>
  `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === "newsletter" ? newsletter : landing}
  </table>
  `;
}