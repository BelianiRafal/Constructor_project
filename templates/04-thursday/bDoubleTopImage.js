import { Header } from '../../components/header.js';
import {
  ImageWithLink_new as ImageWithLink,
  ImageWithText,
  CTA,
  Intro,
  Line,
  TopImageTitle,
  Space,
  ImageWithLink_new,
} from '../../components/components_remake/_index.js';

import { Footer } from '../../components/footer.js';

export async function bDoubleTopImage({
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

  const footer = Footer(
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

  const introCTA = CTA({
    text: getPhrase('Shop now'),
    href: getCategoryLink(categories[0].href),
    spaceBefore: false,
    spaceAfter: { class: 'newsletterBottom60px' },
  });

  // Resolve all products for all categories at once
  const categoriesWithProducts = await Promise.all(
    categories.slice(1).map(async (category) => ({
      ...category,
      products: await Promise.all(category.products.map((p) => getProductById(p.id, p.src))),
    }))
  );

  return `

		${header}

  	<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">

		${topImageTitle}

		${topImage}
		
			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="${nslt_styles}">
						<tr>
							<td align="left" valign="top" width="59.69%">
								${ImageWithLink({
                  href: links['TopImageTitle_href'],
                  src: links['TopImage2'],
                })}
							</td>

							<td align="right" width="40.31%">
								<a href="${getCategoryLink(categories[0].href)}">
									<img src="${
										links[`TopImage2_Text`]
									}" style="display: block; max-width: 100%; height: auto;" loading="lazy"/>
								</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>

			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">

						<tr>
								<td align="center">
										<a href="${getCategoryLink(categories[0].href)}" style="color:#000; text-decoration: underline;">
												<span class="newsletterCta" style="font-size: 20px; line-height: 1.20;">${getPhrase(
                          'Shop now'
                        )}</span>
										</a>
								</td>
						</tr>
						
						<tr>
								<td>
										${Space({ className: 'newsletterBottom60px' })}
								</td>
						</tr>

					</table>
				</td>
			</tr>

			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">


						${ImageWithLink({
              href: categoriesWithProducts[0].products[0].href,
              src: categoriesWithProducts[0].products[0].src,
              insideRow: true,
            })}
						

						<tr>
							<td>
								<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
									<tr>
										<td>
											<a href="${getCategoryLink(categories[1].href)}">
												<img src="${
                          links[`Paragraph_1`]
                        }" style="display: block; max-width: 100%; height: auto;" loading="lazy"/>
											</a>
										</td>

										<td valign="top" align="right">
											${ImageWithLink({
                        href: categoriesWithProducts[0].products[1].href,
                        src: categoriesWithProducts[0].products[1].src,
                      })}
										</td>
									</tr>
								</table>
							</td>
						</tr>

						<tr>
							<td>
								<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
								<tr>
									<td align="center">
										${ImageWithLink({
                      href: categoriesWithProducts[0].products[2].href,
                      src: categoriesWithProducts[0].products[2].src,
                    })}
									</td>
								</tr>
								</table>
							</td>
						</tr>

						<tr>
								<td>
										${Space({ className: 'newsletterBottom35px' })}
								</td>
						</tr>

						<tr>
								<td align="center">
										<a href="${getCategoryLink(categories[1].href)}" style="color:#000; text-decoration: underline;">
												<span class="newsletterCta" style="font-size: 20px; line-height: 1.20;">${getPhrase(
                          'Shop now'
                        )}</span>
										</a>
								</td>
						</tr>
						
						<tr>
								<td>
										${Space({ className: 'newsletterBottom60px' })}
								</td>
						</tr>
					</table>
				</td>
			</tr>



			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">

						${ImageWithLink({
              href: categoriesWithProducts[1].products[0].href,
              src: categoriesWithProducts[1].products[0].src,
              insideRow: true,
            })}

						<tr>
							<td>
								<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
									<tr>
										<td valign="top" align="left">
											${ImageWithLink({
                        href: categoriesWithProducts[1].products[1].href,
                        src: categoriesWithProducts[1].products[1].src,
                      })}
										</td>
										
										<td>
											<a href="${getCategoryLink(categories[2].href)}">
												<img src="${
                          links[`Paragraph_2`]
                        }" style="display: block; max-width: 100%; height: auto;" loading="lazy"/>
											</a>
										</td>
									</tr>
								</table>
							</td>
						</tr>

						<tr>
							<td>
								<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
								<tr>
									<td align="center">
										${ImageWithLink({
                      href: categoriesWithProducts[1].products[2].href,
                      src: categoriesWithProducts[1].products[2].src,
                    })}
									</td>
								</tr>
								</table>
							</td>
						</tr>

						<tr>
								<td>
										${Space({ className: 'newsletterBottom35px' })}
								</td>
						</tr>

						<tr>
								<td align="center">
										<a href="${getCategoryLink(categories[2].href)}" style="color:#000; text-decoration: underline;">
												<span class="newsletterCta" style="font-size: 20px; line-height: 1.20;">${getPhrase(
                          'Shop now'
                        )}</span>
										</a>
								</td>
						</tr>
						
						<tr>
								<td>
										${Space({ className: 'newsletterBottom60px' })}
								</td>
						</tr>
					</table>
				</td>
			</tr>




			<tr>
				<td>
					<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">

						${ImageWithLink({
              href: categoriesWithProducts[2].products[0].href,
              src: categoriesWithProducts[2].products[0].src,
              insideRow: true,
            })}

						<tr>
							<td>
								<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
									<tr>
										<td>
											<a href="${getCategoryLink(categories[3].href)}">
												<img src="${
                          links[`Paragraph_3`]
                        }" style="display: block; max-width: 100%; height: auto;" loading="lazy"/>
											</a>
										</td>

										<td valign="top" align="right">
											${ImageWithLink({
                        href: categoriesWithProducts[2].products[1].href,
                        src: categoriesWithProducts[2].products[1].src,
                      })}
										</td>
									</tr>
								</table>
							</td>
						</tr>

						<tr>
							<td>
								<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
								<tr>
									<td align="center">
										${ImageWithLink({
                      href: categoriesWithProducts[2].products[2].href,
                      src: categoriesWithProducts[2].products[2].src,
                    })}
									</td>

									<td align="center">
										${ImageWithLink({
                      href: categoriesWithProducts[2].products[3].href,
                      src: categoriesWithProducts[2].products[3].src,
                    })}
									</td>
								</table>
							</td>
						</tr>

						<tr>
								<td>
										${Space({ className: 'newsletterBottom35px' })}
								</td>
						</tr>

						<tr>
								<td align="center">
										<a href="${getCategoryLink(categories[3].href)}" style="color:#000; text-decoration: underline;">
												<span class="newsletterCta" style="font-size: 20px; line-height: 1.20;">${getPhrase(
                          'Shop now'
                        )}</span>
										</a>
								</td>
						</tr>
						
						<tr>
								<td>
										${Space({ className: 'newsletterBottom60px' })}
								</td>
						</tr>
					</table>
				</td>
			</tr>

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
						<td align="left" class="newsletterBottom20px">
								<a href=${links['Banner_1']}>
										<img loading="lazy" src=${links['Banner_1_Image']} style="display: block;" width="100%">
								</a>
						</td>
					</tr>
					<tr>
						<td align="left" class="newsletterBottom35px">
								<a href=${links['Banner_2']}>
										<img loading="lazy" src=${links['Banner_2_Image']} style="display: block;" width="100%">
								</a>
						</td>
					</tr>
			</tbody>
		</table>


		${footer}
	`;
}
