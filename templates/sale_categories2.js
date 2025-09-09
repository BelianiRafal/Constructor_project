import { Footer } from "../components/footer.js";
import FreebiesGenerator from "../components/FreebiesGenerator.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
  OfferPartCodes,
  TopImageTitle,
  Timer,
  shopNow,
  Create2Columns_Grid,
  Create2Columns_Grid_with_img
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import { getCodes } from "../utils/getCodes.js";


/**
 * Funkcja generująca sekcje kategorii dla newslettera/landing page
 * Kolejność parametrów zgodna z wymaganiami
 */


export async function sale_categories2({
  links,
  getCategoryLink,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  country,
  type,
  categories,
  background,
  tit,
  inside,
  single_image,
  offerPart,
  soon_banners,
  gif_src,
}) {console.log(shop.slug)
  console.log(getHeader("Header Category 2 src"))
  console.log(getCategoryLink("https://www.beliani.co.uk/rugs/all+products"))
const u_t_m = "?utm_source=newsletter&utm_medium=email&utm_campaign="  + id
 const cattt = categories.href
 console.log('to jest lista kategirii', categories.href)
  //console.log('origin includes PL:', origin);

  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader("Free Delivery"),
        daysReturn: getHeader("365-Day Return"),
      },
      paragraph: {
        troubleViewing: getHeader("Trouble viewing"),
        troubleViewingHrefText: getHeader("Trouble viewing href text"),
        addBeliani: getHeader("Add Beliani to your"),
        whiteList: getHeader("Whitelist"),
        whitelistHref: getHeader("Whitelist href"),
      },
      topImage: {
        src: getHeader("Top image src"),
        href: getHeader("Top image href"),
      },
      categories: {
        firstCategory: {
          src: getHeader("Header Category 1 src"),
          href: getHeader("Header Category 1 href"),
        },
        secondCategory: {
          src: getHeader("Header Category 2 src"),
          href: getHeader("Header Category 2 href"),
        },
        thirdCategory: {
          src: getHeader("Header Category 3 src"),
          href: getHeader("Header Category 3 href"),
        },
      },
      assembly: {
        src: ["AT", "PL", "FR", "UK"].includes(country)
          ? ["#fd9000"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#750000"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
        <tbody>

              <tr>
                <td align="center">
                  ${(type === "newsletter" || !queries.tit) 
                    ? ImageWithLink({
                        href: links[0],
                        src: links[1],
                      })
                    : 
                    (!single_image ?

                      TopImageTitle({
                        href: links[0],
                        title1: queries.tit[0],
                        title2: queries.tit[1],
                        color: tit?.color || "#ffffff",
                        type: tit?.type || "up_to",
                      })
                    :
                    ``)
                  }
                </td>
              </tr>
              <!-- Sprawdź czy masz dodany parametr single_image w Campaign jeśli się nie wyświetla -->
              ${!single_image ? 
                `<tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links[0],
                        src: links[3],
                      })}
                    </td>
                </tr>`
              : 
                ``
              }

              ${!inside || inside.type == "timer" ?
              `
                <tr>
                  <td style="background-color: ${background};">
                    ${Space()}
                  </td>
                </tr>
              `
              :
              `<tr>
                  <td style="background-color: ${inside.background || background}; color: ${inside.color || "#000"};">
                    ${Space()}
                    ${ImageWithLink({
                      href: links[8],
                      src: links[9],
                    })}
                    
                  </td>
              </tr>`
              }
              <tr>
                    <td class="newsletterContainer" style="background-color: ${background || background}; color:#ffffff">
                        ${new Paragraph({
                          paragraph: queries.offerPart[0],
                          type: "standard",
                          align: 'center',
                          style:{
                            textColor:'#ffffff',
                          }
                        }).htmlOutput }
                         ${Space()}
                    </td>
                </tr>
                <tr>
                    <td class="newsletterContainer" style="background-color: ${background || background}; color:#ffffff">
                        ${new Paragraph({
                          paragraph: queries.offerPart[1],
                          type: "standard",
                          align: 'center',
                          style:{
                            textColor:'#ffffff',
                          }
                        }).htmlOutput }
                         ${Space()}
                    </td>
                </tr>
                ${type === 'landing' ? `
                  <tr>
                    <td class="newsletterContainer" style="background-color: ${background || background}; color:#ffffff">
                        ${new Paragraph({
                          paragraph: queries.offerPart[1],
                          type: "standard",
                          align: 'center',
                          style:{
                            textColor:'#ffffff',
                          }
                        }).htmlOutput }
                         
                    </td>
                </tr>`
                : 
                shopNow({
                   href: links[0],
                    cta: getPhrase('Get codes'),
                    textColor: '#ffffff',
                    backgorund: "#750000",
                    space: '35',
                    space_top: false,
                })
              }

              <tr>
                    <td class="newsletterContainer" style="background-color: ${background || background}; color:#ffffff">
                        ${new Paragraph({
                          paragraph: queries.offerPart[4],
                          type: "standard",
                          align: 'center',
                          style:{
                            textColor:'#ffffff',
                          }
                        }).htmlOutput }
                         
                    </td>
                </tr>
            
              ${!single_image ? 
                `<tr>
                    <td style="background-color: ${background};" class="newsletterContainer">
                        ${Create2Columns_Grid_with_img({
                            iter: categories, 
                            left: (computed) => `
                             <td width="50%" style="padding-right: 10px;">
                                <a href="${getCategoryLink(computed.href)}">
                                    <img alt="" src="${
                                    computed.src.value.replace('_Cat', (country.toLowerCase()+'_Cat'))
                                    }" style="max-width: 100%; display:block;" loading="lazy">
                                </a>
                            </td>
                            `,
                            right: (computed) => `
                            <td width="50%" style="padding-left:10px;">
                                <a href="${getCategoryLink(computed.href)}">
                                    <img alt="" src="${
                                    computed.src.value.replace('_Cat', (country.toLowerCase()+'_Cat'))
                                    }" style="max-width: 100%; display:block;" loading="lazy">
                                </a>
                            </td>
                            `, 
                            
                            shuffle: false, 
                            href: console.log('to to jest'), 
                            cta: getPhrase("Shop All Categories"),  
                            color:'#ffffff',
                            align: 'center',
                            space_size: "newsletterBottom80px",
                            catTitle: queries.catTitle
                        })}
                            
                    </td>
                </tr>`
              : 
                ``
              }
              
              
             
              
          <tbody>
      </table>
      ${ (type === "landing" && !soon_banners) || type === "newsletter"
        ?
        `<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
            <tr>
              <td align="left">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>${Line()}</td>
                    </tr>
                    <tr>
                      <td class="newsletterBottom35px"></td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom35px">
                        <span class="newsletterFooterTitle">${getPhrase("Shop limited-time deals")}</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom20px">
                        ${ImageWithLink({
                          href: links[links.length - 4], // Przedostatnia para linków (href)
                          src: links[links.length - 3],  // Przedostatnia para linków (src)
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom35px">
                        ${ImageWithLink({
                          href: links[links.length - 2], // Ostatnia para linków (href)
                          src: links[links.length - 1],  // Ostatnia para linków (src)
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>`
        :
        ''
      }
       ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["CHIT"].includes(country),
          },
          workBanner: {
            src: getFooter("Job src"),
            href: getFooter("Job href"),
            exclude: !["PL"].includes(country),
          },
          thousandsMore: {
            title: getFooter("Title"),
            firstCategory: {
              src: getFooter("Category src 1"),
              href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href:  getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href:  getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href:  getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
            //exclude: ["HU"].includes(country),
          },
          socials: {
            title: getFooter("Socials Title"),
            instagram: {
              src: getFooter("Instagram src"),
              href: getFooter("Instagram href"),
            },
            facebook: {
              src: getFooter("Facebook src"),
              href: getFooter("Facebook href"),
            },
            youtube: {
              src: getFooter("Youtube src"),
              href: getFooter("Youtube href"),
            },
            pinterest: {
              src: getFooter("Pinterest src"),
              href: getFooter("Pinterest href"),
            },
            Xsocial: {
              src: getFooter("X src"),
              href: getFooter("X href"),
            },
            Tiktok: {
              src: getFooter("Tiktok src"),
              href: getFooter("Tiktok href"),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getFooter("Advantages src 1"),
              href: getFooter("Advantages href 1"),
            },
            secondAdvantage: {
              src: getFooter("Advantages src 2"),
              href: getFooter("Advantages href 2"),
            },
            thirdAdvantage: {
              src: getFooter("Advantages src 3"),
              href: getFooter("Advantages href 3"),
            },
            fourthAdvantage: {
              src: getFooter("Advantages src 4"),
              href: getFooter("Advantages href 4"),
            },
          },
          conditions: {
            conditionsTitle: getFooter("Conditions title"),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getFooter("Company Details"),
            address: getFooter("Address"),
            mobileNumber: getFooter("Mobile number"),
            emailAddress: getFooter("Email address"),
            mailTo: getFooter("Mail to"),
            email: getFooter("Email"),
            commercialRegister: getFooter("Commercial register"),
            vat: getFooter("VAT"),
          },
        },
        { type }
      )}
    `;
}
