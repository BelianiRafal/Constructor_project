import { isAllowToRender } from '../../helpers/optimizeImage.js';
import { Space } from './Space.js';

export const Intro = isAllowToRender(
  ({ title, paragraph, spaceClassName, color, background, align = 'left' }) => {
    let html = `<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background: ${background}; color: ${color};"><tbody>`;

    if (spaceClassName) html += Space({ className: spaceClassName });

		console.log(title, paragraph);

		let titleTrimmed, paragraphTrimmed = undefined;

		if (title) {
			titleTrimmed = String(title).trim();
		} 

		if (paragraph) {
			paragraphTrimmed = String(paragraph).trim();
		}

		console.log(
			'Intro component rendering with title:',
			titleTrimmed,
			'and paragraph:',
			paragraphTrimmed
		);

    if (titleTrimmed) {
      html += `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="${align}">
                <span class="${title?.className || 'newsletterTitle'}">
                  ${titleTrimmed}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>`;

			if (spaceClassName) html += Space({ className: spaceClassName });
    }

    if (paragraphTrimmed) {
      html += `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td class="newsletterContainer" align="${align}" >
                <span class="newsletterParagraph" style="display: block;">
                  ${paragraphTrimmed}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>`;
    }

    if (spaceClassName) html += Space({ className: spaceClassName });

    html += `</tbody></table>`;

    return html;
  }
);
