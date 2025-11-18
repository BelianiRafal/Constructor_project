import { isAllowToRender, optimize } from '../../helpers/optimizeImage.js';

export const ImageWithLink = isAllowToRender(
  optimize(({ TdAvalign = "top", imgValign = "top", href, src,  alt = "Newsletter Image", attrs, align = 'center', insideRow, widthPercent = '100' }) => {
    const styles = `vertical-align: ${imgValign}; display: block; max-width: ${widthPercent}% !important; height: auto; ${align !== 'center' ? `float: ${align};` : ''}`;

    if (insideRow) {
      return `
				<tr>
					<td width="100%" valign="${TdAvalign}" align="${align}" style="vertical-align: ${TdAvalign}; line-height: 0; font-size: 0; padding: 0; margin: 0;">
						<a href="${href}" valign="${TdAvalign}" align="${align}" style="vertical-align: ${TdAvalign}; display: block; text-decoration: none; float: ${align};">
							<img alt="${alt}" valign="${imgValign}" align="${align}" src="${src}" style="${styles}" ${attrs || ''} loading="lazy">
						</a>
					</td>
				</tr>
			`;
    }

    return `
			<a align="${align}" valign="${TdAvalign}" href="${href}" style="vertical-align: ${TdAvalign}; display: block; text-decoration: none;">
				<img alt="${alt}" valign="${imgValign}" align="${align}" src="${src}" style="${styles} ${align === 'center' ? `margin: auto;` : ''}" ${attrs || ''} loading="lazy">
			</a>
			`;
  })
);
