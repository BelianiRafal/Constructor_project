import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";

export function OfferPartCodes({ color, data, data2, queries, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9, paragraph10, code1, code2, code3, code4, href, type, className }) {
  const newsletter = `
    <tr>
      <td style="color: ${color}">
        ${Paragraph(data ? data[0] : paragraph1  || "Missing Offer - part 1", "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] : paragraph2, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[2] : paragraph3, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[3] : paragraph4, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[4] : paragraph5, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[5] : paragraph6, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[6] : paragraph7, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[7] : paragraph8, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[8] : paragraph9, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom60px" })}
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
        ${Space({ className: "newsletterBottom60px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(data ? data[9] :paragraph10, "center", `color: ${color}`)}
      </td>
    </tr>
  `;
  const landing = `
    <tr>
      <td style="color: ${color}">
        ${Paragraph(data ? data[0] : paragraph1  || "Missing Offer - part 1", "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[1] : paragraph2, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[2] : paragraph3, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data2 ? data2[0] : code1, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[3] : paragraph4, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[4] : paragraph5, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data2 ? data2[1] : code2, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[5] : paragraph6, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[6] : paragraph7, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data2 ? data2[2] : code3, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    <tr>
      <td >
        ${Paragraph(data ? data[7] : paragraph8, "center", `color: ${color}`, className="newsletterTitleOfferPart")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data ? data[8] : paragraph9, "center", `color: ${color}`)}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom20px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(data2 ? data2[3] : code4, "center", `color: ${color}`)}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(data ? data[9] :paragraph10, "center", `color: ${color}`)}
      </td>
    </tr>
  `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === "newsletter" ? newsletter : landing}
  </table>
  `;
}