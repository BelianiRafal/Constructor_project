import { Space } from './Space.js';

export const Timer = ({
  title,
  subtitle,
  subtitle1,
  textColor,
  bgColor,
  align,
  href,
  imageSrc,
  cta,
  type,
}) => {
  const styles = `background-color: ${bgColor};`;

  if (type === 'gif_on_the_left_side') {
    return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
        <td align="center">
            <a href=${href}>
                <img src="https://upload.pictureserver.net/static/2024/test_gif.gif" style="display: block; max-width: 100%;">
            </a>
        </td>
        <td align="right" style="padding-top: 20px; padding-bottom: 20px;">
            <span class="newsletterSubtitleTimer" style="color: #ffffff">
                ${title}
            </span>

            ${Space({ className: 'newsletterBottom60px' })}

            <a href=${href}>
                <img src="${imageSrc}" style="display: block; max-width: 100%;">
            </a>

            ${Space({ className: 'newsletterBottom60px' })}

            <a href="${href}" style="color:#fff; text-decoration: underline;">
                <span class="newsletterCta">${cta}</span>
            </a>
        </td>
    </tr>
    </table>
`;
  }

  return `
  <td style="${styles}">
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
        <tr>
            <td align="${align}">
                <span class="newsletterSubtitleTimer" style="color: ${textColor}">
                    ${title}
                </span>
            </td>
        </tr>
        <tr>
            <td align="${align}">
                <span class="newsletterSubtitleTimer" style="color: ${textColor}">
                    ${subtitle}
                </span>
            </td>
        </tr>
        
				
				
				${imageSrc ? 
					`<tr>
            <td align="center" style="color: ${textColor}">
                ${Space({ className: 'newsletterBottom20px' })}
            </td>
        </tr>
        
				
				<tr>
            <td align="center" style="padding-left: 60px; padding-right: 60px;">
                <a href=${href}>
                    <img src="${imageSrc}" style="display: block; max-width: 100%;">
                </a>
            </td>
        </tr>`
				 : ''}
        
				
				<tr>
            <td align="center" style="color: ${textColor}">
                ${Space({ className: 'newsletterBottom20px' })}
            </td>
        </tr>
        <tr>
            <td align="center">
                <a href="${href}" style="color: ${textColor}; text-decoration: underline;">
                    <span class="newsletterCta">${cta}</span>
                </a>
            </td>
        </tr>
    </table>
    </td>
  `;
};
