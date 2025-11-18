import { Header } from '../../components/header.js';
import {
  ImageWithLink_new as ImageWithLink,
  ImageWithText,
  CTA,
  Intro,
  Line,
  TopImageTitle,
  Timer,
  Space,
  Category,
} from '../../components/components_remake/_index.js';

import { Footer } from '../../components/footer.js';
import { getTrackingUrl } from '../../utils/geTrackingUrl.js';

export async function TIT_TopImage_Timer_Categories({
  TopImageTitle_data,
  intro,
  timer,
  links,
  utm,
  getProductById,
  getImageBySlug,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  showPrices,
  ctaComponent,
  shop,
  country,
  type,
  categories,
  freebies,
  color,
  background,
}) {
  const header = Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader('Free Delivery'),
        daysReturn: getHeader('365-Day Return'),
      },
      paragraph: {
        troubleViewing: getHeader('Trouble viewing'),
        troubleViewingHrefText: getHeader('Trouble viewing href text'),
        addBeliani: getHeader('Add Beliani to your'),
        whiteList: getHeader('Whitelist'),
        whitelistHref: getHeader('Whitelist href'),
      },
      topImage: {
        src: getHeader('Top image src'),
        href: getHeader('Top image href'),
      },
      categories: {
        firstCategory: {
          src: getHeader('Header Category 1 src'),
          href: getHeader('Header Category 1 href'),
        },
        secondCategory: {
          src: getHeader('Header Category 2 src'),
          href: getHeader('Header Category 2 href'),
        },
        thirdCategory: {
          src: getHeader('Header Category 3 src'),
          href: getHeader('Header Category 3 href'),
        },
      },
      assembly: {
        src: ['AT', 'PL', 'FR', 'UK'].includes(country)
          ? ['#FFCCB7'].includes(background)
            ? getHeader('Header delivery_cosy src')
            : getHeader('Header delivery src')
          : ['#FBF4F3'].includes(background)
          ? getHeader('Header asembly src')
          : getHeader('Header asembly_cosy src'),
        href: getHeader('Header asembly href'),
        exclude: true,
      },
    },
    { type }
  );

  const nslt_styles = `background-color: ${background}; color: ${color}; max-width: 650px; width: 100%;`;

  const tit_data = {
    ...TopImageTitle_data,
    href: links['TopImageTitle_href'],
    src: links['TopImageTitle_src'],
    title1: queries['TopImageTitle'][0],
    title2: queries['TopImageTitle'][1],
  };

  const topImageTitle = TopImageTitle({ ...tit_data, renderType: type });

  const topImage = ImageWithLink({
    href: links['TopImageTitle_href'],
    src: links['TopImage'],
    insideRow: true,
  });

  const timerElement = timer
    ? Timer({
        title: queries['Timer'][0] ?? 'timer title not found',
        subtitle: queries['Timer'][1] ?? 'timer subtitle not found',
        href: links['Timer'],
        gif: timer.gif[country],
        image: getImageBySlug(timer.image),
        background: timer.background,
        color: timer.color,
        align: timer.align,
        cta: getPhrase('Shop now'),
      })
    : '';

  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      products: await Promise.all(category.products.map((p) => getProductById(p.id, p.src))),
    }))
  );

  return `
		${header}

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
			${topImageTitle}
				<tr>
					<td align="center" >
						<a href="${links['TopImageTitle_href']}">
							<img src="${
                links['TopImage']
              }" alt="Top Image" style="vertical-align: middle; max-width: 100%;" loading="lazy">
						</a>
					</td>
				</tr>
        
        ${
          intro
            ? `
              <tr>
                <td>	
                  ${Intro({
                    spaceClassName: 'newsletterBottom35px',
                    paragraph: queries['intro'],
                    color: intro.color ?? color,
                    background: intro.background ?? background,
                    align: intro.align ?? 'center',
                  })}
                </td>
              </tr>
              
              ${
                !intro.hideCTA
                  ? `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" align="center">
                    ${CTA({
                      align: 'center',
                      spaceAfter: { class: intro.ctaSpace ?? 'newsletterBottom35px' },
                      text: getPhrase('Shop now'),
                      href:
                        queries['linkWithFilter'] ??
                        getCategoryLink(intro.ctaCategoryHref) ??
                        links['TopImageTitle_href'],
                      // href: getCategoryLink(categories[0].href),
                    })}
                  </table>
                </td>
              </tr>`
                  : ``
              }
          `
            : Space({})
        }

        ${
          timer
            ? `
              <tr>
                <td>
                  ${timerElement}
                </td>
              </tr>
        
              ${Space({ className: timer.spaceAfterClass ?? 'newsletterBottom60px' })}`
            : ``
        }

        ${categoriesWithProducts
          .map((category, index) => {
            const prod = category.products;
            const cat_styles = `background-color: ${category.background}; color: ${category.color}; max-width: 650px; width: 100%;`;
    
            return `
            <tr>
              <td align="center">
              <table cellspacing="0" cellpadding="0" border="0" align="center" style="${cat_styles}">
                ${Category({
                  links: links,
                  queries: queries,
                  name: category?.name,
                  href: category.href
                    ? getCategoryLink(category.href)
                    : queries.categoryLinks
                    ? queries.categoryLinks[index]
                      ? `${queries.categoryLinks[index]}${utm}`
                      : undefined
                    : undefined,
                  src: category.src,
                  products: prod,
                  showParagraph: category.showParagraph,
                  title: category.title,
                  background: category.background,
                  color: category.color,
                  productsAlignment: category.productsAlignment,
                  len: categoriesWithProducts.length,
                  idx: index,
                  showRedLine: category.showRedLine,
                  showWhiteLine: category.showWhiteLine,
                  ctaElement: category.ctaElement,
                  showPrices: category.showPrices,
                  type: category.type,
                  getPhrase: getPhrase,
                  utm: utm,
                })}
                </table>
              </td>
            </tr>
            `;
          })
          .join('')}
          </table>
          
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; width: 100%; color: #000000; background-color:#ffffff;" id="newsletter">
      <tbody>
        <tr>
          <td>${Line()}</td>
        </tr>
				<tr>
					<td class="newsletterBottom35px" >
					</td>
				</tr>

				<tr>
					<td align="left" class="newsletterBottom35px">
						<span class="newsletterFooterTitle">${getPhrase('Shop limited-time deals')}</span>
					</td>
				</tr>

				<tr>
					<td align="left" style="line-height: 0; font-size: 0;">
						<a href=${links['Banner_1']}>
							<img loading="lazy" src=${
                links['Banner_1_Image']
              } style="display: block; width: 100%; max-width: 100%; border: 0;" alt="Soon ending campaign 1">
						</a>
					</td>
				</tr>

				<tr>
					<td class="newsletterBottom20px">
					</td>
				</tr>

				<tr>
					<td align="left" class="newsletterBottom35px" style="line-height: 0; font-size: 0;">
						<a href=${links['Banner_2']}>
							<img loading="lazy" src=${
                links['Banner_2_Image']
              } style="display: block; width: 100%; max-width: 100%; border: 0;" alt="Soon ending campaign 2">
						</a>
					</td>
				</tr>

			</tbody>
		</table>

    ${Footer(
      {
        id,
        assembly: {
          src: ['AT', 'PL', 'FR', 'UK'].includes(country)
            ? getFooter('Delivery src')
            : getFooter('Asembly src'),
          href: getFooter('Asembly href'),
          exclude: ['CHIT'].includes(country),
        },
        workBanner: {
          src: getFooter('Job src'),
          href: getFooter('Job href'),
          exclude: !['PL'].includes(country),
        },
        thousandsMore: {
          title: getFooter('Title'),
          firstCategory: {
            src: getFooter('Category src 1'),
            href: getCategoryLink('https://www.beliani.co.uk/sofas/all+products'),
            name: getCategoryTitle('Sofas'), //href: getFooter("Category href 1"),
          },
          secondCategory: {
            src: getFooter('Category src 2'),
            href: getCategoryLink('https://www.beliani.co.uk/beds/all+products'),
            name: getCategoryTitle('Beds'), //href: getFooter("Category href 2"),
          },
          thirdCategory: {
            src: getFooter('Category src 3'),
            href: getCategoryLink('https://www.beliani.co.uk/tables/coffee-tables'),
            name: getCategoryTitle('Coffee Tables'), //href: getFooter("Category href 3"),
          },
          foutrthCategory: {
            src: getFooter('Category src 4'),
            href: getCategoryLink('https://www.beliani.co.uk/chairs/all+products'),
            name: getCategoryTitle('Chairs'), //href: getFooter("Category href 4"),
          },
          fifthCategory: {
            src: getFooter('Category src 5'),
            href: getCategoryLink('https://www.beliani.co.uk/armchairs/all+products'),
            name: getCategoryTitle('Armchairs'), //href: getFooter("Category href 5"),
          },
          sixthCategory: {
            src: getFooter('Category src 6'),
            href: getCategoryLink('https://www.beliani.co.uk/storage/sideboards'),
            name: getCategoryTitle('Storage'), //href: getFooter("Category href 6"),
          },
          seventhCategory: {
            src: getFooter('Category src 7'),
            href: getCategoryLink('https://www.beliani.co.uk/lighting/all+products'),
            name: getCategoryTitle('Lighting'), //href: getFooter("Category href 7"),
          },
          eigthCategory: {
            src: getFooter('Category src 8'),
            href: getCategoryLink('https://www.beliani.co.uk/rugs/all+products'),
            name: getCategoryTitle('Rugs'), //href: getFooter("Category href 8"),
          },
        },
        klarna: {
          src: getFooter('Klarna src'),
          href: getFooter('Klarna href'),
          //exclude: ["HU"].includes(country),
        },
        socials: {
          title: getFooter('Socials Title'),
          instagram: {
            src: getFooter('Instagram src'),
            href: getFooter('Instagram href'),
          },
          facebook: {
            src: getFooter('Facebook src'),
            href: getFooter('Facebook href'),
          },
          youtube: {
            src: getFooter('Youtube src'),
            href: getFooter('Youtube href'),
          },
          pinterest: {
            src: getFooter('Pinterest src'),
            href: getFooter('Pinterest href'),
          },
          Xsocial: {
            src: getFooter('X src'),
            href: getFooter('X href'),
          },
          Tiktok: {
            src: getFooter('Tiktok src'),
            href: getFooter('Tiktok href'),
          },
        },
        advantages: {
          firstAdvantage: {
            src: getFooter('Advantages src 1'),
            href: getFooter('Advantages href 1'),
          },
          secondAdvantage: {
            src: getFooter('Advantages src 2'),
            href: getFooter('Advantages href 2'),
          },
          thirdAdvantage: {
            src: getFooter('Advantages src 3'),
            href: getFooter('Advantages href 3'),
          },
          fourthAdvantage: {
            src: getFooter('Advantages src 4'),
            href: getFooter('Advantages href 4'),
          },
        },
        conditions: {
          conditionsTitle: getFooter('Conditions title'),
          conditionsText: queries.condition,
        },
        companyDetails: {
          title: getFooter('Company Details'),
          address: getFooter('Address'),
          mobileNumber: getFooter('Mobile number'),
          emailAddress: getFooter('Email address'),
          mailTo: getFooter('Mail to'),
          email: getFooter('Email'),
          commercialRegister: getFooter('Commercial register'),
          vat: getFooter('VAT'),
        },
      },
      { type }
    )}

	`;
}
