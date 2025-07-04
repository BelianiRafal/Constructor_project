import { Footer } from "../../components/footer.js";
import FreebiesGenerator from "../../components/FreebiesGenerator.js";
import { Header } from "../../components/header.js";
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
  Timer,
  TopImageTitle,
  Image,
  Title,
} from "../../components/index.js";
import { OfferPart } from "../../components/OfferPart.js";
import { OfferPartCode } from "../../components/OfferPartCode.js";
import { priceFree } from "../../helpers/priceFree.js";
import { getCodes } from "../../utils/getCodes.js";
import { YouTube } from "../../components/YouTube.js";
import { Iterate } from "../../components/Iterate.js";
import { Create2Columns } from "../../components/Create2Columns.js";

export async function CategoriesTester({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  origin,
  utm,
  country,
  type,
  categories,
  freebies,
  background,
  header,
  offerPart,
  intro,
  timer,
  data,
  item,
  add_utm,
  insideBanner,
  config,
}) {
  // Initialize commonly used variables
  const codes = getCodes(queries);

  // Common country-specific logic
  const isDeliveryCountry = ["AT", "PL", "FR", "UK"].includes(country);
  const isCozyBackground = ["#FFCCB7", "#FBF4F3"].includes(background);

  // Debug logging for testing
  console.log("CategoriesTester - Testing with parameters:", {
    country,
    type,
    background,
    hasCategories: !!categories,
    hasFreebies: !!freebies,
    hasOfferPart: !!offerPart,
    hasIntro: !!intro,
    hasTimer: !!timer,
    hasInsideBanner: !!insideBanner,
    codesCount: codes ? Object.keys(codes).length : 0,
  });

  const headerElement = Header(
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
        src: isDeliveryCountry
          ? isCozyBackground
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : isCozyBackground
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  );

  const footerElement = Footer(
    {
      id,
      assembly: {
        src: isDeliveryCountry
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
          href: getCategoryLink("https://www.beliani.co.uk/sofas/all+products"), //href: getFooter("Category href 1"),
        },
        secondCategory: {
          src: getFooter("Category src 2"),
          href: getCategoryLink("https://www.beliani.co.uk/beds/all+products"), //href: getFooter("Category href 2"),
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
          href: getCategoryLink("https://www.beliani.co.uk/storage/sideboards"), //href: getFooter("Category href 6"),
        },
        seventhCategory: {
          src: getFooter("Category src 7"),
          href: getCategoryLink(
            "https://www.beliani.co.uk/lighting/all+products"
          ), //href: getFooter("Category href 7"),
        },
        eigthCategory: {
          src: getFooter("Category src 8"),
          href: getCategoryLink("https://www.beliani.co.uk/rugs/all+products"), //href: getFooter("Category href 8"),
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
  );

  return `
	<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
	<tbody>
	
	<!-- HEADER SECTION -->
	<tr>
		<td>
			${headerElement}
		</td>
	</tr>

	<!-- INTRO SECTION -->
	<tr>
		<td>
			${
        intro
          ? Intro({
              title: intro.title,
              paragraph: intro.paragraph,
              data: intro.data,
              spaceClassName: intro.spaceClassName,
              color: intro.color,
              align: intro.align,
            })
          : "<!-- No intro provided -->"
      }
		</td>
	</tr>
	
	<tr>
		<td>
			${Space()}
		</td>
	</tr>
	
	<!-- CATEGORIES SECTION -->
	<tr>
		<td>
			${
        categories && categories.length
          ? categories
              .map((category, index) =>
                Category({
                  name: category.name,
                  href: category.href,
                  src: category.src,
                  products: category.products?.map((item) =>
                    getProductById(item.id, item.src)
                  ),
                  color: category.color,
                  line: category.line,
                  length: category.length,
                  idx: category.index,
                  cta: category.cta,
                  type: category.type,
                })
              )
              .join("")
          : "<!-- No categories provided -->"
      }
		</td>
	</tr>
	
	<tr>
		<td>
			${Space()}
		</td>
	</tr>
	
	<!-- FREEBIES SECTION -->
	<tr>
		<td>
			${
        freebies
          ? Freebies({
              products: freebies.products || null,
              size: freebies.size || { row: 2, col: 2 },
            })
          : "<!-- No freebies provided -->"
      }
		</td>
	</tr>
	
	<!-- OFFER PART SECTION -->
	<tr>
		<td>
			${
        offerPart
          ? OfferPart({
              offers: offerPart.offers,
              offerDate: offerPart.offerDate,
              href: offerPart.href,
              code: offerPart.code,
              type: offerPart.type,
              color: offerPart.color,
            })
          : "<!-- No offer part provided -->"
      }
		</td>
	</tr>
	
	<!-- TIMER SECTION -->
	<tr>
		<td>
			${
        timer
          ? Timer({
              title: timer.title,
              subtitle: timer.subtitle,
              href: timer.href,
              imageSrc: timer.imageSrc,
              cta: timer.cta,
              type: timer.type,
            })
          : "<!-- No timer provided -->"
      }
		</td>
	</tr>
	
	<!-- CTA SECTION -->
	<tr>
		<td>
			${queries.cta ? Paragraph(queries["cta"], "left") : "<!-- No CTA provided -->"}
		</td>
	</tr>
	
	<!-- LINKS/IMAGES SECTION -->
	<tr>
		<td>
			${
        links && links.length
          ? links
              .map((link, index) =>
                ImageWithLink({
                  href: link["href"],
                  src: link["src"],
                  alt: link["alt"],
                  attrs: link["attrs"],
                })
              )
              .join("")
          : "<!-- No links provided -->"
      }
		</td>
	</tr>
	
	<!-- INSIDE BANNER SECTION -->
	<tr>
		<td>
			${
        insideBanner
          ? ImageWithLink({
              href: insideBanner.href,
              src: insideBanner.src,
              alt: insideBanner.alt,
              attrs: insideBanner.attrs,
            })
          : "<!-- No inside banner provided -->"
      }
		</td>
	</tr>
	
	<!-- CODES SECTION -->
	<tr>
		<td>
			${
        codes && Object.keys(codes).length
          ? OfferPartCodes({ offerParts: codes, type })
          : "<!-- No codes available -->"
      }
		</td>
	</tr>
	
	<tr>
		<td>
			${Space()}
		</td>
	</tr>

	<!-- FOOTER SECTION -->
	<tr>
		<td>
			${footerElement}
		</td>
	</tr>

	</tbody>
	</table>
	
	<!-- DEBUG INFO -->
	<!-- Template: CategoriesTester -->
	<!-- Country: ${country} -->
	<!-- Type: ${type} -->
	<!-- Background: ${background} -->
	<!-- Parameters tested: ${Object.keys({
    links,
    getProductById,
    getCategoryLink,
    getCategoryTitle,
    getPhrase,
    getFooter,
    getHeader,
    queries,
    id,
    shop,
    origin,
    utm,
    country,
    type,
    categories,
    freebies,
    background,
    header,
    offerPart,
    intro,
    timer,
    data,
    item,
    add_utm,
    insideBanner,
    config,
  }).join(", ")} -->
	`;
}
