import { Space } from './Space.js';

export const TextWithSpace = ({ text, align = 'center', spaceClass = 'newsletterBottom20px' }) => {
  return `
	<table cellspacing="0" align="${align}" cellpadding="0" border="0" width="100%">
		<tr>
			<td align="${align}">
				${Space({ class: spaceClass })}
			</td>
		</tr>

		<tr>
			<td align="${align}" class="newsletterContainer" style="text-align: ${align}; max-width: 0;">
				<span class="newsletterParagraph" style="display: block; text-align: ${align};">
					${text}
				</span>
			</td>
		</tr>
	</table>`;
};
