import { Footer } from "../../components/footer.js";
import { Header } from "../../components/header.js";
import {
  ImageWithLink,
  Intro,
  Line,
  Timer,
  TopImageTitle,
  Space,
} from "../components/index.js";

export async function TimerOnlyNewsletter({
  tit,
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
  console.log(`Debug Queries:`);
  console.log(JSON.stringify(queries, null, "\t"));

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
          ? ["#FFCCB7"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#FBF4F3"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}

   <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: ${color};" id='newsletter'>
   ${
     type === "newsletter"
       ? `<tr>
      <td align="center">
      ${ImageWithLink({
        href: links[0],
        src: links[1],
      })}

      </td>
    </tr>`
       : `<tr>
      <td align="center" style="background: ${background}">
      ${
        !queries.tit
          ? `
        ${ImageWithLink({
          href: links[0],
          src: links[1],
        })}`
          : `${TopImageTitle({
              href: links[0],
              title1: queries.tit[0],
              title2: queries.tit[1],
              color: tit.color,
              background: tit.background,
              type: "up_to_bigger",
            })}`
      }
      </td>
    </tr>`
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
    <td class="newsletterBottom35px">
    </td>
  </tr>
  </table>
    

  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: ${color}; background-color: ${background};" id='newsletter'>
  
  <tr>
    <td>
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
    <td class="newsletterBottom35px">
    </td>
  </tr>

  <tr>
    <td class="newsletterBottom35px">
      <table cellspacing="0" cellpadding="0" style="width: 100%; ">
        <tbody>
          <tr>
            <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
  
              <a href="${links[0]}" style="color:${
    color || "#000"
  }; text-decoration: underline;">
                <span class="newsletterCta">${getPhrase("See more")}</span>
              </a>
              
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <tr>
    <td style="background-color: ${
      timer.background
    };padding-bottom: 10px;"></td>
  </tr>

  <tr>
  ${Timer({
    title: queries.timer[0],
    subtitle: queries.timer[1],

    href: links[4],
    imageSrc: timer.timerSrc[country],
    bgColor: timer.background,
    textColor: timer.color,
    align: timer.align,
    cta: getPhrase("Shop now"),
  })}
  </tr>

  <tr>
    <td style="background-color: ${
      timer.background
    };" class="newsletterBottom20px"></td>
  </tr>
  
  ${
    timer.freebieSrc
      ? `<tr>
    <td style="background-color:${timer.background};">
        ${ImageWithLink({
          href: links[4],
          src: timer.freebieSrc,
        })}
    </td>
  </tr>
    `
      : ``
  }
  
  <tr>
    <td style="background-color: ${background};" class="newsletterBottom60px"></td>
  </tr>

  <tr>
    <td style="background-color: ${background};" class="newsletterContainer">
    ${Line()}
    </td>
  </tr>

  <tbody>
  </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color:${color}; background-color: #FFFFFF;" id="newsletter">
      <tbody>
        <tr>
        <td align="left">
          <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
            <tr>
              <td class="newsletterBottom35px" >
              </td>
            </tr>
              <tr>
                <td align="left" class="newsletterBottom35px">
                  <span class="newsletterFooterTitle">${getPhrase(
                    "Shop limited-time deals"
                  )}</span>
                </td>
              </tr>

              <!-- banner 1 -->
              <tr>
                <td align="left" class="newsletterBottom20px">
                  <a href=${links[5]}>
                    <img loading="lazy" src=${
                      links[6]
                    } style="display: block;" width="100%">
                  </a>
                </td>
              </tr>

              <!-- banner 2 -->
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
            href: getCategoryLink(
              "https://www.beliani.co.uk/sofas/all+products"
            ), //href: getFooter("Category href 1"),
          },
          secondCategory: {
            src: getFooter("Category src 2"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/beds/all+products"
            ), //href: getFooter("Category href 2"),
          },
          thirdCategory: {
            src: getFooter("Category src 3"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/tables/coffee-tables"
            ), //href: getFooter("Category href 3"),
          },
          foutrthCategory: {
            src: getFooter("Category src 4"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/chairs/all+products"
            ), //href: getFooter("Category href 4"),
          },
          fifthCategory: {
            src: getFooter("Category src 5"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/armchairs/all+products"
            ), //href: getFooter("Category href 5"),
          },
          sixthCategory: {
            src: getFooter("Category src 6"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/storage/sideboards"
            ), //href: getFooter("Category href 6"),
          },
          seventhCategory: {
            src: getFooter("Category src 7"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/lighting/all+products"
            ), //href: getFooter("Category href 7"),
          },
          eigthCategory: {
            src: getFooter("Category src 8"),
            href: getCategoryLink(
              "https://www.beliani.co.uk/rugs/all+products"
            ), //href: getFooter("Category href 8"),
          },
        },
        klarna: {
          src: getFooter("Klarna src"),
          href: getFooter("Klarna href"),
          // exclude: ["HU"].includes(country),
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
