import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  Intro,
  Earth_Day,
  Paragraph,
  ImageWithLink,
  Space,
  Product,
  OfferPartCodes,
  Timer,
  TopImageTitle,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function MondayEarthDayNslt({
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
  background,
  header,
  offerPart,
  intro,
  timer,
  data,
  item,
  add_utm,
  EarthDaySrc,
  EarthDayPart,
  earth,
  footer_cat
}) {
  const codes = getCodes(queries);
  //console.log(categories.href);
// Bezpośrednie przekazanie stringów z uniknięciem potencjalnych problemów
let categoryName = queries.categories[0];
let categoryDesc = queries.categories[1];

// Upewnij się, że tekst jest bezpieczny do wyświetlenia w HTML
// Usuwamy potencjalnie problematyczne znaki lub stosujemy kodowanie HTML
function sanitizeHtml(text) {
  if (typeof text !== 'string') {
    return String(text);
  }
  
  // Prosta funkcja sanityzacji, można rozbudować w razie potrzeby
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
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
                      `${TopImageTitle({
                            href: links[0],
                            title1: queries.tit[0],
                            title2: '', // <--- dodaj to!
                            color: "#000000",
                            type: "singleLine",
                          })}`
                      }
                    </td>
                </tr>
                  
              `
            }
            <tr>
                <td align="center">
                ${ImageWithLink({
                    href: links[2],
                    src: links[3],
                })}
                </td>
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Space()}
                </td> 
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Intro({
                        data: queries.intro,
                        align: "center",
                        type: "paragraph",
                    })}
                </td>
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Space({className: "newsletterBottom60px"})}
                </td> 
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Line()}
                </td> 
            </tr>
             <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Space()}
                </td> 
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Intro({
                        data: queries.introEarth,
                        align: "center",
                    })}
                </td>
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                    ${Space()}
                </td> 
            </tr>
            <tr>
                <td class="newsletterContainer" style="background-color: ${earth?.background || background};">
                ${Earth_Day({
                    data: [
                        queries.EarthDayPart[0], // Główny tytuł
                        "", // Brak paragrafu, więc pusty string
                        [
                            {
                                title: queries.EarthDayPart[1], // Tytuł pierwszej inicjatywy
                                image: EarthDaySrc[0].src,      // Obrazek pierwszej inicjatywy
                                link: add_utm(queries.earthHref[0])      // Link pierwszej inicjatywy
                            },
                            {
                                title: queries.EarthDayPart[2], // Tytuł drugiej inicjatywy
                                image: EarthDaySrc[1].src,      // Obrazek drugiej inicjatywy
                                link: add_utm(queries.earthHref[0])      // Link drugiej inicjatywy
                            },
                            {
                                title: queries.EarthDayPart[3], // Tytuł trzeciej inicjatywy  
                                image: EarthDaySrc[2].src,      // Obrazek trzeciej inicjatywy
                                link: add_utm(queries.earthHref[0])      // Link trzeciej inicjatywy
                            }
                        ]
                    ],
                    align: "center",
                    href: add_utm(queries.earthHref[0]),
                    cta: getPhrase("See more"),
                    idx: 3, 
                    len: 3,
                    type: "title" // Opcjonalnie - jeśli chcesz wyświetlić tylko tytuł bez paragrafu
                })}
                </td>
            </tr>
            <tr>
                <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
                    <tbody>
                    ${categories
                      .map((item, index) => {
                        console.log(`Sprawdzam href dla kategorii ${index}:`, item.href);
                        const isLast = index === categories.length - 1; // Sprawdzenie, czy to ostatni element
                        const background = item.background; // Domyślny kolor tła
                        const color = item.color; // Domyślny kolor tekstu
                        const srcValue = item.src?.value || ""; // Pobranie `value`, jeśli istnieje
                    
                        // Pobieranie poprawnego indeksu dla `queries.categories`
                        const dataIndex = index * 2; 
                        if (dataIndex >= queries.categories.length) return ""; // Zabezpieczenie przed wyjściem poza zakres
                    
                        const title = queries.categories[dataIndex] || "Default Title";
                        const paragraph = queries.categories[dataIndex + 1] || "Default Paragraph";
                    
                        return `
                        <tr>
                            <td style="background-color: ${background}; color: ${color};">
                              ${Category({
                                data: [title, paragraph], // Przekazanie poprawnej pary danych
                                href: queries?.filters
                                  ? add_utm(queries.filters[index])
                                  : getCategoryLink(categories[index].href),
                                name: title,
                                color: item.color,
                                desc: paragraph,
                                src: item.src,
                                cta: getPhrase("Shop now"),
                                type: "mondaywithparagraph",
                                products: item.products?.map((item) =>
                                  getProductById(item.id, item.src)
                                ) || [],
                              })}
                            </td>
                        </tr>
                        `;
                      })
                      .join("")}
                </td>
            </tr>

          <tbody>
      </table>

  <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
              <tr>
                  <td align="left">
                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                          <tr>
                            <td class="newsletterBottom35px" >
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
                                      <a href=${links[4]}>
                                          <img loading="lazy" src=${
                                            links[5]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[6]}>
                                          <img loading="lazy" src=${
                                            links[7]
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
              href: getCategoryLink("https://www.beliani.co.uk/sofas/all+products"),//href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getCategoryLink("https://www.beliani.co.uk/beds/all+products"),//href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getCategoryLink("https://www.beliani.co.uk/tables/coffee-tables"),//href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getCategoryLink("https://www.beliani.co.uk/chairs/all+products"),//href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getCategoryLink("https://www.beliani.co.uk/armchairs/all+products"),//href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getCategoryLink("https://www.beliani.co.uk/storage/sideboards"),//href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getCategoryLink("https://www.beliani.co.uk/lighting/all+products"),//href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getCategoryLink("https://www.beliani.co.uk/rugs/all+products"),//href: getFooter("Category href 8"),
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