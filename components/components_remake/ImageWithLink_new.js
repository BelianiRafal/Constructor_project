import { isAllowToRender, optimize } from '../../helpers/optimizeImage.js';

export const ImageWithLink = isAllowToRender(
  optimize(({ href, src, alt = '', attrs, align = 'center', insideRow, widthPercent = '100' }) => {
    const styles = `display: block; max-width: ${widthPercent}%; height: auto; ${align !== 'center' ? `float: ${align};` : ''}`;

    if (insideRow) {
      return `
				<tr>
					<td width="100%" align="${align}" style="line-height: 0; font-size: 0; padding: 0; margin: 0;">
						<a href="${href}" align="${align}" style="display: block; text-decoration: none; float: ${align};">
							<img alt="${alt}" align="${align}" src="${src}" style="${styles}" ${attrs || ''} loading="lazy">
						</a>
					</td>
				</tr>
			`;
    }

    return `
			<a align="${align}" href="${href}" style="display: block; text-decoration: none;">
				<img alt="${alt}" align="${align}" src="${src}" style="${styles} ${align === 'center' ? `margin: auto;` : ''}" ${attrs || ''} loading="lazy">
			</a>
			`;
  })
);
