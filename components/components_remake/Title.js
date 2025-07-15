export const Title = ({
  title,
  color,
  align = 'left',
  insideContainer = 'false',
  className = 'newsletterTitle',
}) => {
  return `
	<tr>
			<td align="${align}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
				<span class="${className}" style="color: ${color || '#000000'}">
					${title}
				</span>
			</td>
		</tr>
	`;
};
