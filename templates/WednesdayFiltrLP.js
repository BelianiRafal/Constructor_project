import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Product,
  OfferPartCodes,
  Timer,
  TopImageTitle,
  AdditionalCategories,
  AdditionalCategoriesPadding,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function RegularWednesdayFiltrLP({
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
  titleFontColor,
  titleSize,
  header,
  offerPart,
  intro,
  timer,
  data,
  item,
  add_utm
}) {
  const codes = getCodes(queries);
  const timer_link = {
    CHDE: [""],
    CHFR: [""],
    UK: [""],
    DE: [""],
    FR: [""],
    AT: [""],
    ES: [""],
    PL: [""],
    NL: [""],
    PT: [""],
    IT: [""],
    SE: [""],
    HU: [""],
    DK: [""],
    CZ: [""],
    FI: [""],
    NO: [""],
    SK: [""],
  };

  const cat2 = {
    UK: "https://www.beliani.co.uk/curved-furniture/?Type=Sofas&sort=default",
    PL: "https://www.beliani.pl/oble-ksztalty/looks/?Typ=Sofy&sort=default",
    DE: "https://www.beliani.de/geschwungene-moebel/?Typ=Sofas&sort=default",
    AT: "https://www.beliani.at/geschwungene-moebel/?Typ=Sofas&sort=default",
    CHDE: "https://www.beliani.ch/geschwungene-moebel/?Typ=Sofas&sort=default",
    NL: "https://www.beliani.nl/gebogen-meubels/?Type=Banken&sort=default",
    FR: "https://www.beliani.fr/meuble-courbes/looks/?Type=Canapes&sort=default",
    CHFR: "https://www.beliani.ch/meuble-courbes/looks/?Type=Canapes&sort=default",
    ES: "https://www.beliani.es/mobiliario-curvado/looks/?Tipo=Sofas&sort=default",
    PT: "https://www.beliani.pt/moveis-curvos/?Tipo=Sofas&sort=default",
    IT: "https://www.beliani.it/arredi-curvi/?Tipo=Divani&sort=default",
    DK: "https://www.beliani.dk/kurvede-moebler/?sort=default ",
    NO: "https://www.beliani.no/kurvede-mobler/?Type=Sofaer&sort=default",
    FI: "https://www.beliani.fi/kaarevat-kalusteet/?Malli=Sohvat",
    SE: "https://www.beliani.se/svangda-mobler/?Typ=Soffor&sort=default",
    CZ: "https://www.beliani.cz/zaobleny-nabytek/looks/?Typ=Pohovky&sort=default",
    SK: "https://www.beliani.sk/zaobleny-nabytok-sk/?Typ=Pohovky&sort=default",
    HU: "https://www.beliani.hu/ivelt-butorok/?Tipus=Kanapek&sort=default",
    BEFR: "https://www.beliani.be/meuble-courbes/looks/?Type=Canapes&sort=default",
    BENL: "https://www.beliani.be/gebogen-meubels/?Type=Banken&sort=default",
    RO: "https://www.beliani.ro/mobilier-curbat/?Tip=Canapele&sort=default",
  };

  const cat4 = {
    UK: "https://www.beliani.co.uk/sofas/all+products/?Colour=Blue,Red,Pink,Green,Orange&sort=default",
    PL: "https://www.beliani.pl/sofy/wszystkie+produkty/?Kolor=Niebieski,Czerwony,Rozowy,Zielony,Pomaranczowy&sort=default",
    DE: "https://www.beliani.de/sofas/alle+produkte/?Farbe=Blau,Rot,Rosa,Grun,Orange&sort=default ",
    AT: "https://www.beliani.at/sofas/alle+produkte/?Farbe=Blau,Rot,Rosa,Grun,Orange&sort=default ",
    CHDE: "https://www.beliani.ch/sofas/alle+produkte/?Farbe=Blau,Rot,Rosa,Grun,Orange&sort=default",
    NL: "https://www.beliani.nl/banken/alle+producten/?Kleur=Blauw,Rood,Roze,Groen,Oranje&sort=default",
    FR: "https://www.beliani.fr/canapes/tous+les+produits/?Couleur=Bleu,Rouge,Rose,Vert,Orange&sort=default",
    CHFR: "https://www.beliani.ch/canapes/tous+les+produits/?Couleur=Bleu,Rouge,Rose,Vert,Orange&sort=default",
    ES: "https://www.beliani.es/sofas/todos+los+productos/?Color=Azul,Rojo,Rosa,Verde,Naranja&sort=default",
    PT: "https://www.beliani.pt/sofas/todos+os+produtos/?Cor=Azul,Vermelho,Rosa,Verde,Laranja&sort=default",
    IT: "https://www.beliani.it/divani/tutti+i+prodotti/?Colore=Blu,Rosso,Rosa,Verde,Arancione&sort=default",
    DK: "https://www.beliani.dk/stuemobler/sofaer/alle+produkter/?Farve=Bla,Rod,Lyserod,Gron,Orange&sort=default ",
    NO: "https://www.beliani.no/sofaer/alle+produkter/?Farge=Bla,Rod,Rosa,Gronn,Oransje&sort=default",
    FI: "https://www.beliani.fi/sohvat/kaikki+tuotteet/?Vari=Sininen,Punainen,Vaaleanpunainen,Vihrea,Oranssi",
    SE: "https://www.beliani.se/vardagsrumsmobler/soffor/alla+produkter/?Farg=Bla,Rod,Rosa,Gron,Orange&sort=default",
    CZ: "https://www.beliani.cz/pohovky/v%C5%A1echny+produkty/?Barva=Modra,Cervena,Ruzova,Zelena,Oranzova&sort=default",
    SK: "https://www.beliani.sk/pohovky/zobrazit+vsetky+produkty/?Farba=Modra,Cervena,Ruzova,Zelena,Oranzova&sort=default",
    HU: "https://www.beliani.hu/nappali-butorok/kanapek/minden+termek/?Szin=Kek,Rozsaszin,Zold,Narancssarga&sort=default",
    BEFR: "https://www.beliani.be/canapes/tous+les+produits/?Couleur=Bleu,Rouge,Rose,Vert,Orange&sort=default",
    BENL: "https://www.beliani.be/banken/alle+producten/?Kleur=Blauw,Rood,Roze,Groen,Oranje&sort=default",
    RO: "https://www.beliani.ro/canapele/toate+produsele/?Culoare=Albastru,Rosu,Roz,Portocaliu&sort=defa…",
  };

  const categoryLinks = [null, cat2, null, cat4];

  // jeśli wpis zaczyna się od "?utm...", doklej do bazowego href
  const withBaseIfUtm = (maybe, base) =>
    typeof maybe === "string" && maybe.startsWith("?") ? `${base}${maybe}` : maybe;
  
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
                      `
                        ${TopImageTitle({
                          href: links[0],
                          title1: queries.tit[0],
                          title2: queries.tit[1],
                          color: titleFontColor,
                          type: titleSize,
                        })}
                      `
                      }
                    </td>
                </tr>

              `
            }
            <tr>
            <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
            <tbody>
              ${categories
                .map((item, index) => {
                  const isLast = index === categories.length - 1;
                  const background = item.background;
                  const color = item.color;
          
                  const dataIndex = index * 2;
                  if (dataIndex >= queries.categories.length) return "";
          
                  const title = queries.categories[dataIndex] || "Default Title";
                  const paragraph = queries.categories[dataIndex + 1] || "Default Paragraph";
                  const lastbottomclass = isLast ? "newsletterBottom40px" : "newsletterBottom80px";
          
                  // --- HREF wg wymagań ---
                  let href;
                  if (index === 0) {
                    href = getCategoryLink(categories[0].href);        // kat. 1
                  } else if (index === 1) {
                    href = cat2[country]; // kat. 2
                  } else if (index === 2) {
                    href = getCategoryLink(categories[2].href);        // kat. 3
                  } else if (index === 3) {
                    href = cat4[country]; // kat. 4
                  } else {
                    href = getCategoryLink(item.href);                 // fallback (gdyby były dalsze)
                  }
          
                  return `
                    <tr>
                      <td style="background-color: ${background}; color: ${color};">
                        ${Category({
                          data: [title, paragraph],
                          href,
                          name: title,
                          color: item.color,
                          desc: paragraph,
                          src: item.src,
                          lastbottomclass,
                          cta: getPhrase("Shop now"),
                          type: "wednesday",
                          products: item.products?.map((product) =>
                            getProductById(product.id, product.src)
                          ) || [],
                        })}
                      </td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </td>
          <tr>
              <td style="background-color: ${categories[4]?.background || "#ffffff"}; color: ${categories[4]?.color || "#000000"}">
                  ${Space({ className: "newsletterBottom40px" })}
              </td>
          </tr>
          <tr>
            <td align="center" class="newsletterContainer" style="background-color: ${categories[4]?.background || "#ffffff"}; color: ${categories[4]?.color || "#000000"}">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                  <td align="center" class="newsletterBottom35px">
                    <span class="newsletterAditionalTitle">${queries.additionalt[0]}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" class="newsletterContainer" style="background-color: ${categories[4]?.background || "#ffffff"}; color: ${categories[4]?.color || "#000000"}">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                ${
                  [0, 1].map(rowIndex => `
                    <tr>
                      ${
                        [0, 1].map(colIndex => {
                          const index = rowIndex * 2 + colIndex;
                          if (!categories_add[index]) return "";
                          // Ustalanie wartości paddingside na podstawie index
                          const paddingside = (index === 0 || index === 2) ? "newsletterRight10px" : "newsletterLeft10px";
                          const paddingbottom = (index === 0 || index === 1) ? "newsletterBottom70px" : "newsletterBottom80px";
                          return `
                            ${AdditionalCategoriesPadding({
                              name: queries.additional[index],
                              href: getCategoryLink(categories_add[index].href),
                              src: categories_add[index].src,
                              paddingside: paddingside,
                              paddingbottom: paddingbottom,

                            })}
                          `;
                        }).join("")
                      }
                    </tr>
                  `).join("")
                }
              </table>
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
                                      <a href=${links[5]}>
                                          <img loading="lazy" src=${
                                            links[6]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[7]}>
                                          <img loading="lazy" src=${
                                            links[8]
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
            src: ["AT", "PL", "FR", "UK"].includes(country) ? getFooter("Delivery src") : getFooter("Asembly src"),
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
              href: getCategoryLink("https://www.beliani.co.uk/sofas/all+products"),
              name: getCategoryTitle("Sofas"), //href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getCategoryLink("https://www.beliani.co.uk/beds/all+products"),
              name: getCategoryTitle("Beds"), //href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getCategoryLink("https://www.beliani.co.uk/tables/coffee-tables"),
              name: getCategoryTitle("Coffee Tables"), //href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getCategoryLink("https://www.beliani.co.uk/chairs/all+products"),
              name: getCategoryTitle("Chairs"), //href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getCategoryLink("https://www.beliani.co.uk/armchairs/all+products"),
              name: getCategoryTitle("Armchairs"), //href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getCategoryLink("https://www.beliani.co.uk/storage/sideboards"),
              name: getCategoryTitle("Storage"), //href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getCategoryLink("https://www.beliani.co.uk/lighting/all+products"),
              name: getCategoryTitle("Lighting"), //href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getCategoryLink("https://www.beliani.co.uk/rugs/all+products"),
              name: getCategoryTitle("Rugs"), //href: getFooter("Category href 8"),
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