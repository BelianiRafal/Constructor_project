import {
  Category,
  Footer,
  ImageWithLink,
  Intro,
  Paragraph,
} from '../../components/components_remake/_index.js';
import { TopImageTitle } from '../../components/TopImageTitle.js';
import getImageUrl from '../../helpers/getImageUrl.js';

export async function LPInspirational({
  links,
  queries,
  getPhrase,
  country,
  getFooter,
  intro,
  id,
  type,
  getProductById,
  getCategoryLink,
  color,
  categories,
  background,
  tit,
}) {
  // console.log(`Debug Queries:`)
  // console.log(JSON.stringify(queries, null, "\t"))

  let categoriesHtml = '';
  if (categories && categories.length > 0) {
    categoriesHtml = categories
      .map((category, index) => {
        // console.log(JSON.parse(JSON.stringify(item)));

        return `
          <tr>
            <td align="center">
            ${Category({
              queries: queries,
              name: queries.categories[index],
              href: getCategoryLink(category.href),
              src: category.src,
              products: category.products.map((product) => getProductById(product.id, product.src)),
              ctaComponent: undefined,
              color: category.color,
              line: undefined,
              len: categories.length,
              idx: index,
              cta: getPhrase('Shop now'),
              type: category.type || (category.products ? 'monday' : 'no_products'),
            })}
            </td>
          </tr>
      `;
      })
      .join('');
  }

  return `

   <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 980px; width: 100%; background-color: ${background}; color: ${color};" id='newsletter'>
    <tr>
      <td align="center" style="background: ${background}">
        ${TopImageTitle({
          href: links[0],
          title1: queries.tit[0],
          title2: queries.tit[1],
          color: tit.color,
          background: tit.background,
          type: tit.type,
        })}
      </td>
    </tr>
    
    <tr>
      <td align="center" style="background: ${background}">
        ${ImageWithLink({
          href: links[2],
          src: links[3],
          width: '100%',
          fullWidth: true,
          renderAs: 'table',
        })}
      </td>
    </tr>
    
    <tr>
      <td class="newsletterBottom35px">
      </td>
    </tr>
    
    <tr>
      <td align="center" style="background-color: ${background};">
        ${Intro({
          title: queries.intro[1] || undefined,
          paragraph: queries.intro[0],
          background: intro.background,
          color: intro.color,
          align: intro.align,
        })}
        </td>
    </tr>

    <tr>
      <td class="newsletterBottom80px">
      </td>
    </tr>

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" styles="background-color: #ffe0d9; color: #000; max-width: 650px; width: 100%;">

    	${categoriesHtml}

		</table>
  </table>

  ${Footer('980px',
    {
      id,
      conditions: {
        conditionsTitle: getFooter('Conditions title'),
        conditionsText: queries.condition,
      },
    },
    { type }
  )}`;
}
