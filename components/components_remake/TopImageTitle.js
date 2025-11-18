import { isAllowToRender, optimize } from '../../helpers/optimizeImage.js';
import { Space } from '../../components/Space.js';
import { getState } from '../../utils/stateManager.js';
// prettier-ignore

export const TopImageTitle = isAllowToRender(
  optimize(({ href, src, title1, title2, color, type, renderType }) => {
    const keywords = ["retrò", "retró", "rétro", "%", "halloween", "retro"]

    function includesKeywords(title) {
      for (let keyword of keywords) {
        if (String(title).toLowerCase().includes(keyword)) {
          return true;
        }
      }

      return false;
    }


    const templates = {
      up_to: `
        <h4 style="color:${color};" class="${includesKeywords(title1) ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title1}</h4>
        <h5 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title2 ?? ''}</h5>
      `,
      up_to_bigger: `
        <h4 style="color:${color};" class="${includesKeywords(title1) ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title1}</h4>
        <h5 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title2 ?? ''}</h5>
      `,
      line2bigger: `
        <h4 style="color:${color};" class="${includesKeywords(title1) ? 'newsletterTitleH2BoldBigger' : 'newsletterTitleH1Bold'}">${title1}</h4>
        <h4 style="color:${color};" class="${includesKeywords(title2) ? 'newsletterTitleH2BoldBigger' : 'newsletterTitleH1Bold'}">${title2}</h4>
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
      halloween: `
        <h4 style="color:${color};" class="${String(title1).toLowerCase().includes('halloween') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title1}</h4>
        <h4 style="color:${color};" class="${String(title2).toLowerCase().includes('halloween') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title2}</h4>
      `
    };

		if (renderType === "landing") {
			return `
				<tr>
					<td class="newsletterContainer">
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
						<img alt="Top Image Title" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
					</a>
				</td>
			</tr>`;
  
	})
);
