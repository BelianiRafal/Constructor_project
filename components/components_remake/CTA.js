import { Space } from './Space.js';

export const CTA = ({ align = 'center', spaceBefore, spaceAfter, text, href, color = "#000000" }) => {
  const space_1 = spaceBefore ? Space({ className: spaceBefore?.class }) : '';
  const space_2 = spaceAfter ? Space({ className: spaceAfter?.class }) : '';

  const ctaInner = `
		<td width="100%" style="text-align: center; color: ${color}; text-decoration: underline;">
			<a href="${href}" style="color: ${color}; text-decoration: underline;">
				<span class="newsletterCta">${text}</span>
			</a>
		</td>
	`;

  return space_1 + ctaInner + space_2;
};
