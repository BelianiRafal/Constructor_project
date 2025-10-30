import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";

// Helper do renderowania pojedynczego bloku (paragraf + odstęp)
function renderBlock({ content, spaceAfter, isTitle, color }) {
  // Jeśli nie ma treści, nie renderuj nic
  if (!content) return "";

  const paragraphHtml = Paragraph(
    content,
    "center",
    `color: ${color}`,
    isTitle ? "newsletterTitleOfferPart" : undefined
  );

  const spaceHtml = Space({ className: `newsletterBottom${spaceAfter}` });

  return `
    <tr>
      <td>${paragraphHtml}</td>
    </tr>
    <tr>
      <td>${spaceHtml}</td>
    </tr>
  `;
}

// Zoptymalizowany komponent
export function OfferPartCodes({ color, data, data2, queries, href, type }) {
  // Tworzymy jedną, wspólną tablicę z danymi, aby uniknąć skomplikowanej logiki warunkowej
  const paragraphs = data || [];
  const codes = data2 || [];

  // Definiujemy strukturę jako tablicę konfiguracji
  const layoutConfig = [
    { content: paragraphs[0] || "Missing Offer - part 1", spaceAfter: "35px", isTitle: true },
    { content: paragraphs[1], spaceAfter: "20px", isTitle: true },
    { content: paragraphs[2], spaceAfter: type === "newsletter" ? "35px" : "20px" },
    { type: "code", content: codes[0], spaceAfter: "35px", for: "landing" },
    { content: paragraphs[3], spaceAfter: "20px", isTitle: true },
    { content: paragraphs[4], spaceAfter: type === "newsletter" ? "35px" : "20px" },
    { type: "code", content: codes[1], spaceAfter: "35px", for: "landing" },
    { content: paragraphs[5], spaceAfter: "20px", isTitle: true },
    { content: paragraphs[6], spaceAfter: type === "newsletter" ? "35px" : "20px" },
    { type: "code", content: codes[2], spaceAfter: "35px", for: "landing" },
    { content: paragraphs[7], spaceAfter: "20px", isTitle: true },
    { content: paragraphs[8], spaceAfter: type === "newsletter" ? "60px" : "20px" },
    { type: "code", content: codes[3], spaceAfter: "35px", for: "landing" },
  ];

  const contentHtml = layoutConfig
    .filter(block => !block.for || block.for === type) // Filtruj bloki przeznaczone tylko dla danego typu
    .map(block => {
      // Renderowanie specjalnych bloków
      if (block.type === 'code') {
        return renderBlock({ ...block, content: block.content, color });
      }
      // Renderowanie domyślnych bloków
      return renderBlock({ ...block, color });
    })
    .join('');

  // Specjalna sekcja CTA tylko dla newslettera
  const newsletterCta = `
    <tr>
      <td>
        ${GetCode({
          color: color,
          code: queries?.codeCTA || "Code tableQuery not found.",
          link: href,
          type,
        })}
      </td>
    </tr>
    <tr>
      <td>${Space({ className: "newsletterBottom60px" })}</td>
    </tr>
  `;

  const finalParagraph = renderBlock({
    content: paragraphs[9],
    spaceAfter: "0px", // Bez dodatkowego odstępu na końcu
    color
  });

  return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
      ${contentHtml}
      ${type === "newsletter" ? newsletterCta : ""}
      ${finalParagraph}
    </table>
  `;
}