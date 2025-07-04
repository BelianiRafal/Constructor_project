import { Header } from '../../components/header.js';
import {
  ImageWithLink_new as ImageWithLink,
  ImageWithText,
  Footer,
  CTA,
  Intro,
  Line,
  TopImageTitle,
  Timer,
  Space,
} from '../../components/components_remake/_index.js';

export async function UniversalTemplate({
  TopImageTitle_data,
  intro,
  timer,
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
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


  const nslt_styles = `background-color: ${background}; color: #000; max-width: 650px; width: 100%;`;

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

  const introElement = intro
    ? Intro({
        title: queries['Intro_Title'] ?? null,
        paragraph: queries['Intro_Paragraph'] ?? null,
        color: intro.color ?? '#000000',
        background: intro.background ?? '#ffffff',
        align: intro.align ?? 'left',
        spaceClassName: 'newsletterBottom35px',
      })
    : '';

  const timerElement = timer
    ? Timer({
        title: queries['Timer'][0] ?? 'timer title not found',
        subtitle: queries['Timer'][1] ?? 'timer subtitle not found',
        href: links['Timer'],
        gif: timer.gif[country],
        image: timer.image,
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
		</table>

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
			<table cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 650px; width: 100%;" >
				<tbody>
					<tr>
						<td align="center" >
							<a href="${links['TopImageTitle_href']}">
								<img src="${links['TopImage']}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</table>
		
		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
			<tr>
				<td>
					${introElement}
				</td>
			</tr>
		</table>
		
		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
			<tr>
				<td>
					${timerElement}
				</td>
			</tr>
		</table>

		<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
		${categoriesWithProducts
      .map((category, index) => {
        const prod = category.products;
        const cat_styles = `background-color: ${category.background}; color: ${category.color}; max-width: 650px; width: 100%;`;

				// if (index !== 0) return ``;

        return `
			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
						<tr>
							<td width="100%">
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${cat_styles}">
									<tr>
										<td width="100%">
											${Intro({
                        spaceClassName: 'newsletterBottom35px',
                        title: queries.categories[index],
                        paragraph: queries.paragraphs[index] ?? null,
                        color: category.color,
                        background: category.background,
                        align: 'center',
                      })}
										</td>
									</tr>	
								</table>

								<!-- START A -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${cat_styles}">
									<tr width="100%">
										<td width="30%" valign="top">
											${ImageWithLink({
												href: prod[0].href,
												src: prod[0].src,
												alt: prod[0].title,
												align: 'left'
											})}
										</td>
										
										<td width="70%" rowspan="2">
											${ImageWithLink({
												src: links[`cat${index+1}a_src`],
												href: category.href,
												alt: queries['categories'][index],
												align: 'right'
											})}
										</td>
									</tr>
								</table>

								<!-- START B -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${cat_styles}">
									<tr width="100%">
										<td width="30%" valign="top">
											${ImageWithLink({
												href: prod[1].href,
												src: prod[1].src,
												alt: prod[1].title,
												align: 'left'
											})}
										</td>
										
										<td width="70%" rowspan="2">
											${ImageWithLink({
												src: links[`cat${index+1}b_src`],
												href: category.href,
												alt: queries['categories'][index],
												align: 'right'
											})}
										</td>
									</tr>
								</table>

								<!-- START C -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${cat_styles}">
									<tr width="100%">
										<td width="30%" valign="top">
											${ImageWithLink({
												href: prod[2].href,
												src: prod[2].src,
												alt: prod[2].title,
												align: 'left'
											})}
										</td>
										
										<td width="70%" rowspan="2">
											${ImageWithLink({
												src: links[`cat${index+1}c_src`],
												href: category.href,
												alt: queries['categories'][index],
												align: 'right'
											})}
										</td>
									</tr>
								</table>

								<!-- START D -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${cat_styles}">
									<tr width="100%">
										<td width="30%" valign="top">
											${ImageWithLink({
												href: prod[3].href,
												src: prod[3].src,
												alt: prod[3].title,
												align: 'left'
											})}
										</td>
										
										<td width="70%" rowspan="2">
											${ImageWithLink({
												src: links[`cat${index+1}d_src`],
												href: category.href,
												alt: queries['categories'][index],
												align: 'right'
											})}
										</td>
									</tr>
								</table>



								<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${cat_styles}">
									<tr>
										<td>
											${CTA({
                        text: getPhrase('Shop now'),
                        href: getCategoryLink(category.href) ?? '#',
                        spaceBefore: true,
                        spaceAfter: { class: 'newsletterBottom80px' },
                      })}
										</td>
									</tr>
								</table>
								
							</td>
						</tr>
					</table>
				</td>
			</tr>
		`;
      })
      .join('')}
		</table>


		<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
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
					<td align="left" class="newsletterBottom20px" style="line-height: 0; font-size: 0;">
						<a href=${links['Banner_1']}>
							<img loading="lazy" src=${
                links['Banner_1_Image']
              } style="display: block; width: 100%; max-width: 100%; border: 0;" alt="">
						</a>
					</td>
				</tr>
				
				<tr>
					<td align="left" class="newsletterBottom35px" style="line-height: 0; font-size: 0;">
						<a href=${links['Banner_2']}>
							<img loading="lazy" src=${
                links['Banner_2_Image']
              } style="display: block; width: 100%; max-width: 100%; border: 0;" alt="">
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
						href: getCategoryLink('https://www.beliani.co.uk/sofas/all+products'), //href: getFooter("Category href 1"),
					},
					secondCategory: {
						src: getFooter('Category src 2'),
						href: getCategoryLink('https://www.beliani.co.uk/beds/all+products'), //href: getFooter("Category href 2"),
					},
					thirdCategory: {
						src: getFooter('Category src 3'),
						href: getCategoryLink('https://www.beliani.co.uk/tables/coffee-tables'), //href: getFooter("Category href 3"),
					},
					foutrthCategory: {
						src: getFooter('Category src 4'),
						href: getCategoryLink('https://www.beliani.co.uk/chairs/all+products'), //href: getFooter("Category href 4"),
					},
					fifthCategory: {
						src: getFooter('Category src 5'),
						href: getCategoryLink('https://www.beliani.co.uk/armchairs/all+products'), //href: getFooter("Category href 5"),
					},
					sixthCategory: {
						src: getFooter('Category src 6'),
						href: getCategoryLink('https://www.beliani.co.uk/storage/sideboards'), //href: getFooter("Category href 6"),
					},
					seventhCategory: {
						src: getFooter('Category src 7'),
						href: getCategoryLink('https://www.beliani.co.uk/lighting/all+products'), //href: getFooter("Category href 7"),
					},
					eigthCategory: {
						src: getFooter('Category src 8'),
						href: getCategoryLink('https://www.beliani.co.uk/rugs/all+products'), //href: getFooter("Category href 8"),
					},
				},
				klarna: {
					src: getFooter('Klarna src'),
					href: getFooter('Klarna href'),
					// exclude: ["HU"].includes(country),
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
