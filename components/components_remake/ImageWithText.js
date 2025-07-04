import { TextWithSpace } from './TextWithSpace.js';
import { ImageWithLink } from './ImageWithLink_new.js';

export const ImageWithText = ({ image, text, swapSides, variant }) => {
  if (!image || !image.src) {
    throw new Error('ImageWithText requires an image object with a src property');
  }

  if (!text) {
    throw new Error('ImageWithText requires an text string');
  }

  text = TextWithSpace({ align: 'left', text });
  const img = ImageWithLink({
    href: image.href || '#',
    src: image.src,
		align: swapSides ? 'right' : 'left',
  });

	if (variant === 'a') {

		return `
		<table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 650px; width: 100%;">
			<tr>
				<td align="center" width="100%">
					${img}
			</tr>

			<tr>
				<td align="center" width="100%" style="text-align: center;">
					${text}
				</td>
			</tr>
		</table>
		`
	}

	if (variant === 'b') {
	return `
		<table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 650px; width: 100%;">
			<tr>
				<td width="${swapSides ? '40.31%' : '59.69%'}" style="vertical-align: top; ${swapSides ? 'width: 40.31%;' : ' text-align: left; width: 59.69%;'}">
					${swapSides ? text : img}
				</td>

				<td width="${swapSides ? '59.69%' : '40.31%'}" style="vertical-align: top; ${swapSides ? ' width: 59.69%; text-align: right;' : 'width: 40.31%;'}">
					${swapSides ? img : text}
				</td>
			</tr>
		</table>`;
	}

  return `
		<table cellspacing="0" cellpadding="0" border="0" width="100%">
			<tr>
				<td width="${swapSides ? '39.39%' : '60.61%'}" style="vertical-align: top;${swapSides ? 'width: 39.39%;' : ' text-align: left; width: 60.61%;'}">
					${swapSides ? text : img}
				</td>

				<td width="${swapSides ? '60.61%' : '39.39%'}" style="vertical-align: top;${swapSides ? ' width: 60.61%; text-align: right;' : 'width: 39.39%;'}">
					${swapSides ? img : text}
				</td>
			</tr>
		</table>`;
};
