import { FreebieProduct } from "./freebieProduct.js";
import { Matrix } from "./matrix.js";

export function Freebies({ products,  size = { row: 2, col: 2 }, color }) {
  size = {
    row: 2,
    col: 2,
    ...size,
  };

	
	size =  {
		row: products[0].name === products[1].name ? 1 : 2,
		col: products[0].name === products[1].name ? 3 : 2,
	}

  

  return `
      <table cellspacing="0" cellpadding="0" border="0" align="center">
      <tbody>
        ${Matrix({
          col: size.col,
          row: size.row,
         

          html: products.map((product) =>
            FreebieProduct(
              {
                ...product,
              },
              product.align,
              product.style,
              product.containerAlign,
              color,
             
            )
          ),
        })}
      </tbody>
      </table>
    `;
}