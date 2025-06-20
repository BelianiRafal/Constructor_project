import { isAllowToRender } from '../helpers/optimizeImage.js';
import { Space } from './Space.js';

export const Intro = isAllowToRender(
  ({ title, paragraph, data, spaceClassName, color, background, align = 'left' }) => {
    let html = `<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" class="newsletterContainer" style="background: ${background}; color: ${color};"><tbody>`;

    if (title && title.trim() != 'undefined') {
      html += `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td align="${align}">
                <span class="${title?.className || 'newsletterTitle'}">
                  ${data ? data[0] : title}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>

    <tr>
      <td>
        ${Space({ className: spaceClassName })}
      </td>
    </tr>`;
    }

    if (paragraph) {
      html += `
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td align="${align}" >
                <span class="newsletterParagraph">
                  ${data ? data[1] : paragraph}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>`;
    }

    html += `</tbody></table>`;

    return html;
  }
);
