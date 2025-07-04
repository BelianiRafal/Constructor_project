import { isAllowToRender, optimize } from '../../helpers/optimizeImage.js';
import { Space } from '../../components/Space.js';
import { getState } from '../../utils/stateManager.js';
// prettier-ignore

export const TopImageTitle = isAllowToRender(
  optimize(({ href, src, title1, title2, color, type, renderType }) => {

    const templates = {
      up_to: `
        <h4 style="color:${color};" class="${title1.includes('%') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title1}</h4>
        <h5 style="color:${color};" class="${title2?.includes('%') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title2 ?? ''}</h5>
      `,
      up_to_bigger: `
        <h4 style="color:${color};" class="${title1.includes('%') ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title1}</h4>
        <h5 style="color:${color};" class="${title2?.includes('%') ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title2 ?? ''}</h5>
      `,
      standard: `
        <h5 style="color:${color};" class="newsletterTitleH1">${title1}</h5>
        <h4 style="color:${color};" class="newsletterTitleH2">${title2}</h4>
      `,
      twoSameLines: `
        <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
        <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
      `,
      singleLine: `
        <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
      `,
    };

		if (renderType === "landing") {
			return `
				<tr>
					<td>
						<a class="newsletterHrefTit" href="${href}">
							${Space()}
							${templates[type] || 'Invalid type'}
							${Space()}
						</a>
					</td>
				</tr>
			`;
		}

		return `
			<tr>
				<td style="line-height: 0; font-size: 0; padding: 0;">
					<a href="${href}" style="display: block; text-decoration: none;">
						<img alt="" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
					</a>
				</td>
			</tr>`;
  
	})
);
