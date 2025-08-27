import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';

export const Timer = ({
  title,
  subtitle,
  color,
  background,
  align,
  href,
  gif,
  image,
  cta,
  type,
}) => {
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="background-color: ${background}; color: ${color}; max-width: 650px; width: 100%;">

		<tr>
			<td style="background-color: ${background}; padding-bottom: 10px;"></td>
		</tr>    
		
		<tr>
      <td align="${align}">
        <span class="newsletterSubtitleTimer" style="color: ${color}">
          ${title}
        </span>
      </td>
    </tr>

    <tr>
      <td align="${align}">
        <span class="newsletterSubtitleTimer" style="color: ${color}">
          ${subtitle}
        </span>
      </td>
    </tr>
    
		${Space({ className: 'newsletterBottom20px' })}
    
		<tr>
      <td align="${align}" style="padding-left: 60px; padding-right: 60px;">
				${ImageWithLink({
          href: href,
          src: gif,
        })}
      </td>
    </tr>
    
		${Space({ className: 'newsletterBottom20px' })}
    
		<tr>
      <td align="${align}">
        <a href="${href}" style="color: ${color}; text-decoration: underline;">
          <span class="newsletterCta">${cta}</span>
        </a>
      </td>
    </tr>

		${image ? 
			`${Space({ className: 'newsletterBottom20px' })}

				<tr>
					<td align="${align}">
						${ImageWithLink({
							href: href,
							src: image,
						})}
					</td>
				</tr>
			`
		: `${Space({ className: 'newsletterBottom15px' })}`}
    
  </table>
  `;
};
