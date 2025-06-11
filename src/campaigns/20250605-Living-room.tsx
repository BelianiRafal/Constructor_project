import type { Campaign } from "../types/Campaign"
import type { TopImageTitle } from "../types/TopImageTitle"
import type { Links } from "../types/Links"
import type { Category } from "../types/Category"
import type { Template } from "../types/Template"
import type { TopImage } from "../types/TopImage.js"
import localizedLink from "../utilities/localizedLink"
import localizedImage from "../utilities/localizedImage"

// Import your templates
import nslt_regular from "../templates/04-thursday/newsletter/regular.jsx"
import lp_regular from "../templates/04-thursday/landingpage/regular.jsx"

const lp_link = localizedLink("content/lp25-06-26")

const topImageTitle: TopImageTitle = {
  image: localizedImage("pl20250619_01.png"),
  link: lp_link,
  text: {
    line1: "Climate Action",
    line2: "Starts Now",
    type: "line1_bigger",
  },
}

const topImage: TopImage = {
  image: localizedImage("20250619gif_top.gif"),
  link: lp_link,
}

const categories: Category[] = [
  {
    name: "Desert",
    background: "#FFDEB3",
    color: "#000",
    image: localizedImage("20250626_cat1.png"),
    link: localizedLink("https://www.beliani.ch/trends/desert-style/"),
    type: "inspirational",
    products: [
      {
        id: "prod-1",
        image: localizedImage("20250626_1.png"),
      },
      {
        id: "prod-2",
        image: localizedImage("20250626_2.png"),
      },
    ],
  },
  {
    name: "Oasis",
    background: "#B3FFD6",
    color: "#222",
    image: localizedImage("20250626_cat2.png"),
    link: localizedLink("https://www.beliani.ch/trends/oasis-style/"),
    type: "inspirational",
  },
]

const templates: Template[] = [
  {
    name: "Newsletter",
    use: nslt_regular,
  },
  {
    name: "Landing Page",
    use: lp_regular,
  },
  // You can add more or make one optional
]

const campaign: Campaign = {
  date: "2025.05.06",
  disabled: false,
  name: "Living room",
  issueCardId: 359290,
  newsletterMasterId: 33744,
  landingPageMasterId: 25041,
  figmaId: "Fha1mLYyD3KK5a0HCxZviz",
  templates,
  TopImageTitle: topImageTitle,
  TopImage: topImage,
  categories,
}

export default campaign
