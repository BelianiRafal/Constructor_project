import { ImageWithLink } from './ImageWithLink_new.js';
import { Space } from './Space.js';

function generateSideImage({ image, href }) {
  return `
			<div
					style="min-width: 0; max-width: 66.66%; box-sizing: border-box; width: 100%"
				>
					<div style="height: 100%; min-width: 0; box-sizing: border-box">
						<div
							style="
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								height: 100%;
								width: 100%;
								min-width: 0;
								box-sizing: border-box;
							"
						>
							<a
								class="newsletterMarginBottom20px"
								style="
									flex: 1 1 auto;
									display: flex;
									flex-direction: column;
									justify-content: space-between;
									height: 100%;
									width: 100%;
									min-width: 0;
									box-sizing: border-box;
									text-decoration: none;
									background-position: center;
									background-image: url('${image}');
									background-size: cover;
									background-repeat: no-repeat;
									background-color: white;
								"
								href="${href}"
							></a>
							<div style="display: flex; flex-direction: column">
								<div class="newsletterProductTitleRow">
									<div class="newsletterProductTitle" style="text-align: left">
										&nbsp;
									</div>
								</div>
								<div
									class="newsletterProductPriceRow"
									style="padding-bottom: 8px; text-align: left"
								>
									<span class="newsletterProductLowPrice">&nbsp; </span>
									<span
										class="newsletterProductHightPrice"
										style="text-decoration: none; !important"
										>&nbsp;</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
	`;
}

function generateProduct({ product, alignTo = 'right' }) {

	const swappedSide = alignTo === 'left' ? 'right' : 'left';

  return `
		<div
			style="
				min-width: 0;
				box-sizing: border-box;
				text-align: left;
				height: 50%;
				min-height: 160px;
				width: 100%;
			"
		>
			<div class="newsletterBottom20px" style="float: ${swappedSide}; ${swappedSide === "left" ? 'display: flex; justify-content: flex-end;' : ''}">
				<a href="${product.href}" style="width: 100%;">
					<img
						alt="${product.name}"
						src="${product.src}"
						style="
							float: ${swappedSide};
							vertical-align: text-top;
							max-width: 100%;
							display: block;
							height: 100%;
							aspect-ratio: 1 / 1;
							height: 100%;
							min-height: 90px;
						"
						loading="lazy"
					/>
				</a>
			</div>

			<div style="width: 95%; display: flex; text-align: left; flex-direction: column; float: ${swappedSide};">
				<span class="newsletterProductTitle">${product.name}</span>

				<div
					class="newsletterProductPriceRow"
					style="padding-bottom: 8px; text-align: left"
				>
					<span class="newsletterProductLowPrice">${product.lowPrice}</span>
					<span class="newsletterProductHightPrice">${product.highPrice}</span>
				</div>
			</div>
		</div>
	`;
}

export function ImageWithVProducts({
  category,
  image,
  products,
  align = 'left',
  imageSide = 'left',
}) {
  if (products.length !== 2) {
    throw new Error('ImageWithVProducts requires exactly 2 products');
  }

  return `
	<tr>
		<td class="newsletterContainer">
			<div
				style="
					text-align: left;
					display: flex;
					gap: 10px;
					align-items: stretch;
					justify-content: space-between;
				"
			>

				${imageSide === 'left' ? generateSideImage({ image: image, href: category.href }) : ''}

				<div style="display: flex; flex-direction: column; gap: 8px; width: 33.33%">
					${generateProduct({ product: products[0], alignTo: imageSide })}
					
					${generateProduct({ product: products[1], alignTo: imageSide })}
				</div>
	
				${imageSide === 'right' ? generateSideImage({ image: image, href: category.href }) : ''}




			</div>
		</td>
	</tr>
	`;
}
