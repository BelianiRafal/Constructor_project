import { isAllowToRender } from '../../helpers/optimizeImage.js';
import { getState } from '../../utils/stateManager.js';

export const Space = ({ className = 'newsletterBottom35px', placeInsideRow = 'false' }) => {
  return `
		<tr>
			<td class="${className}">
			</td>
		</tr>
  `;
};
