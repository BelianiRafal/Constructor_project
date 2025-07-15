export const Paragraph = (paragraph, align = "left", style) => {
  return `
		<tr>
			<td class="newsletterContainer" align="${align}" style="${style ?? ""}">
				<span class="newsletterParagraph">
					${paragraph}
				</span>
			</td>
		</tr>
  `;
};
