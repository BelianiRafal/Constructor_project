import { Space } from './Space.js';

export const CTA = ({ align = 'center', spaceBefore, spaceAfter, text, href }) => {
  const space_1 = spaceBefore ? Space({ className: spaceBefore?.class }) : '';
  const space_2 = spaceAfter ? Space({ className: spaceAfter?.class }) : '';

  const ctaInner = `
		<td width="100%" style="text-align: center; color: #000000; text-decoration: underline;">
			<a href="${href}" style="color: #000000; display: block;" class="newsletterCta" >
				${text}
			</a>
		</td>
	`;

  return space_1 + ctaInner + space_2;
};
