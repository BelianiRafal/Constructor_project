import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  Intro,
  Paragraph,
  ImageWithLink,
  TopImageTitle,
  Space,
  Product,
  OfferPartCodes,
  Timer,
  AdditionalCategories,
  CategoryOneBannerWhite,
  CategoryOneBanner,
  CategoryOneLast,
  TwoCategory,
  Create2Columns_Grid,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { NewsletterTemplate } from "../entities/NewsletterTemplate.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function BelianiBirthday({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  origin,
  country,
  type,
  categories,
  categories_add,
  background,
  header,
  offerPart,
  intro,
  timer,
  data,
  item,
  add_utm,
  shop,
  campDate,
}) {
  const codes = getCodes(queries);
   const gif_src1 = {
    CHDE:['https://gen.sendtric.com/countdown/8dx67fqhoh'],
    CHFR:['https://gen.sendtric.com/countdown/tl5lfwkh0m'],
    FR:['https://gen.sendtric.com/countdown/6fv2gwp6li'],
    UK:['https://gen.sendtric.com/countdown/btr15n325k'],
    DE:['https://gen.sendtric.com/countdown/3fxryyfz4b'],
    AT:['https://gen.sendtric.com/countdown/ywkvoly77w'],
    ES:['https://gen.sendtric.com/countdown/v56xe7u6xl'],
    PL:['https://gen.sendtric.com/countdown/4ov9vln83t'],
    NL:['https://gen.sendtric.com/countdown/0floie95w5'],
    PT:['https://gen.sendtric.com/countdown/ki9o9qsyrl'],
    IT:['https://gen.sendtric.com/countdown/4vzzp6y5pa'],
    SE:['https://gen.sendtric.com/countdown/x7jhdi1vyy'],
    HU:['https://gen.sendtric.com/countdown/jbrzwp8uvz'],
    DK:['https://gen.sendtric.com/countdown/5yxs7pz3j0'],
    CZ:['https://gen.sendtric.com/countdown/g1jh2ckc9l'],
    FI:['https://gen.sendtric.com/countdown/a9lq5oyk5t'],
    NO:['https://gen.sendtric.com/countdown/v8r4bj3esb'],
    SK:['https://gen.sendtric.com/countdown/pzp910lnq5'],
    BENL:['https://gen.sendtric.com/countdown/0floie95w5'],
    BEFR:['https://gen.sendtric.com/countdown/7k1781khkc'],
    RO:['https://gen.sendtric.com/countdown/q4c9ukdyo1'],
  };
  
  console.log(shop.slug)
    console.log(shop)
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${
    background || "#ffffff"
  }; color: #000;" id="newsletter">
        <tbody>
            ${type === "newsletter"
                ? `
                <tr>
                    <td align="center">
                        ${ImageWithLink({
                        href: links[0],
                        src: links[1],
                        })}
                    </td>
                </tr>
                `
                : `
                <tr>
                    <td align="center">
                        ${!queries.tit ?
                        `
                        ${ImageWithLink({
                            href: links[0],
                            src: links[1],
                        })}
                        `
                        :
                        `
                       
                        ${TopImageTitle({
                            href: links[0],
                            title1: queries.tit[0],
                            title2: queries.tit[1],
                            color: "#750000",
                            type: "twoSameLines",
                        })}
                        `
                        }
                    </td>
                </tr>

                `
            }
             <tr>
                          <td style="background-color: ${background}">
                          ${Timer({
                            type: "only_timer",
                            href: links[2],
                            imageSrc: gif_src1[country],
                            style: {
                              bgColor: background,
                              textColor: "#750000",
                              align: "center",
                            },
                            
                          })}
                          </td>
                        </tr>
                         <tr>
                            <td style="background-color: ${background};" class="newsletterBottom35px"></td>
                          </tr>
                        <tr>
                            <td align="center" style="background-color: ${background};">
                        ${ImageWithLink({
                            href: links[0],
                            src: links[7],
                        })}
             </td>
                        </tr>
            <tr>
                            <td align="center" style="background-color: ${background};" class="newsletterContainer">
                              ${Intro({
                                paragraph: queries.intro[0],
                                color: "#000",
                                align: "center",
                                title: "no_title",
                              })}
                              </td>
                          </tr>
                          <tr>
                            <td style="background-color: ${background};" class="newsletterBottom35px"></td>
                          </tr>
          
           
            <tr>
              <td style="background-color: ${background};" class="newsletterContainer">
                  ${Create2Columns_Grid({
                    shuffle: false,
                    iter: categories,
                    left: (computed) => `
                      <td width="50%" style="padding-left:6px">
                        <a href="${getCategoryLink(computed.href)}">
                            <img alt="" src="${
                              computed.src
                            }" style="max-width: 100%; display:block;" loading="lazy">
                        </a>
                      </td>
                    `,
                    right: (computed) => `
                      <td width="50%" style="padding-right:6px">
                        <a href="${getCategoryLink(computed.href)}">
                            <img alt="" src="${
                              computed.src
                            }" style="max-width: 100%; display:block;" loading="lazy">
                        </a>
                      </td>
                    `,
                    cta: getPhrase(
                      "Shop All Categories",
                    ),
                    color: "#000",
                    align: "center",
                    href:
                        type === "newsletter"
                            ? shop.origin + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id
                            : shop.origin,
                        type,
                  })}
                  ${Space({ className: "newsletterBottom80px" })}
              </td>
            </tr>
           
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
                        <tbody>
                            <tr>
                                <td align="left">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                        <tr>
                                          <td class="newsletterBottom35px">
                                            ${Line()}
                                          </td>
                                        </tr>
                                            <tr>
                                                <td align="left" class="newsletterBottom35px">
                                                    <span class="newsletterFooterTitle">${getPhrase(
                                                      "Shop limited-time deals"
                                                    )}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="newsletterBottom20px">
                                                    <a href=${links[3]}>
                                                        <img loading="lazy" src=${
                                                          links[4]
                                                        } style="display: block;" width="100%">
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="newsletterBottom35px">
                                                    <a href=${links[5]}>
                                                        <img loading="lazy" src=${
                                                          links[6]
                                                        } style="display: block;" width="100%">
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               
      ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["CHIT"].includes(
              country
            ),
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
              href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getFooter("Category href 4"),
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