import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

const categories = [
  // New York
  {
    title: { show: true },
    type: 'imagewithv-2-1-products',
    background: '#750000',
    color: '#ffffff',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/new-york-style-christmas/',
    showParagraph: true,
    showPrices: true,
    products: [
      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic01.png', true),
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('20251030_Pic02.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('20251030_Pic03.png', true),
      },

      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic04.png', true),
      },
      // DURIAN
      {
        id: '358469',
        src: getImageUrl('20251030_Pic05.png', true),
      },
      // TOPAZ
      {
        id: '468108',
        src: getImageUrl('20251030_Pic06.png', true),
      },
    ],
  },

  // Rustic
  {
    title: { show: true },
    type: 'imagewithv-2-1-products',
    background: '#FEBC66',
    color: '#000000',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    src: getImageUrl('20251030_Cat10.png', true),
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/rustic-christmas/',
    showParagraph: true,
    showPrices: true,
    products: [
      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic11.png', true),
      },
      // THYME
      {
        id: '394872',
        src: getImageUrl('20251030_Pic12.png', true),
      },
      // QUANDONG
      {
        id: '570653',
        src: getImageUrl('20251030_Pic13.png', true),
      },

      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic14.png', true),
      },
      // SPARTA
      {
        id: '363831',
        src: getImageUrl('20251030_Pic15.png', true),
      },
      // SKATE
      {
        id: '526546',
        src: getImageUrl('20251030_Pic16.png', true),
      },
    ],
  },

  // Traditional
  {
    title: { show: true },
    type: 'imagewithv-2-1-products',
    background: '#750000',
    color: '#ffffff',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    src: getImageUrl('20251030_Cat20.png', true),
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/traditional-christmas/',
    showParagraph: true,
    showPrices: true,
    products: [
      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic21.png', true),
      },
      // TOPAZ
      {
        id: '468056',
        src: getImageUrl('20251030_Pic22.png', true),
      },
      // FUSILLI
      {
        id: '452337',
        src: getImageUrl('20251030_Pic23.png', true),
      },

      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic24.png', true),
      },
      // SALAMINA
      {
        id: '232214',
        src: getImageUrl('20251030_Pic25.png', true),
      },
      // PUROL
      {
        id: '336400',
        src: getImageUrl('20251030_Pic26.png', true),
      },
    ],
  },

  // Scandinavian
  {
    title: { show: true },
    type: 'imagewithv-2-1-products',
    background: '#FEBC66',
    color: '#000000',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    src: getImageUrl('20251030_Cat30.png', true),
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/scandinavian-christmas/',
    showParagraph: true,
    showPrices: true,
    products: [
      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic31.png', true),
      },
      // COSTMARY
      {
        id: '620559',
        src: getImageUrl('20251030_Pic32.png', true),
      },
      // HOVILA
      {
        id: '336379',
        src: getImageUrl('20251030_Pic33.png', true),
      },

      // PROD 1 BEZ ZNACZENIA
      {
        id: '0',
        src: getImageUrl('20251030_Pic34.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('20251030_Pic35.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('20251030_Pic36.png', true),
      },
    ],
  },
];
// prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/hv15cdtw3k",
  "CHFR": "https://gen.sendtric.com/countdown/59r752w4d0",
  "FR": "https://gen.sendtric.com/countdown/17gyimj552",
  "DE": "https://gen.sendtric.com/countdown/2u6q1nwfqv",
  "UK": "https://gen.sendtric.com/countdown/lk7pljamfb",
  "AT": "https://gen.sendtric.com/countdown/trdd7frtwm",
  "ES": "https://gen.sendtric.com/countdown/65wla91uob",
  "PL": "https://gen.sendtric.com/countdown/r1at7din4e",
  "NL": "https://gen.sendtric.com/countdown/pa3bipghb8",
  "PT": "https://gen.sendtric.com/countdown/wngdrzjf9k",
  "IT": "https://gen.sendtric.com/countdown/smy50frkzj",
  "SE": "https://gen.sendtric.com/countdown/c697lij88z",
  "HU": "https://gen.sendtric.com/countdown/x283y6vo5a",
  "DK": "https://gen.sendtric.com/countdown/lvocbbwxzq",
  "CZ": "https://gen.sendtric.com/countdown/jzowf3rkrr",
  "FI": "https://gen.sendtric.com/countdown/esa9vpmm29",
  "NO": "https://gen.sendtric.com/countdown/22z0t4wtzc",
  "SK": "https://gen.sendtric.com/countdown/6ms2vjbtw9",
  "BENL": "https://gen.sendtric.com/countdown/jx22yembsn",
  "BEFR": "https://gen.sendtric.com/countdown/zm7gto02pi",
  "RO": "https://gen.sendtric.com/countdown/k2j4o07o73"
}

const timer = {
  background: '#F6E7E6',
  color: '#000000',
  align: 'center',
  spaceAfterClass: 'newsletterBottom60px',
  gif: timerGifsSource,
  // image: getImageUrl('20251023free.png', true),
};

const campaignTranslationsSheet = '30.10.25 - Christmas table essentials';

const tableQueries = [
  {
    tableRange: '15:16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18',
    name: 'intro',
  },
  {
    tableRange: '11:12',
    tableName: 'Voucher - 27.10.25 - Halloween Cashback',
    name: 'Timer',
  },
  {
    tableRange: '19:22',
    name: 'categories',
  },
  {
    tableRange: '23:26',
    name: 'paragraphs',
  },
  {
    tableRange: '27:28',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-10-30' }),
  TopImageTitle_src: translateImage({ value: '20251030_01.png' }),

  TopImage: getImageUrl('20251030_Gif.gif', true),

  Timer: translateLink({ value: 'content/lp25-10-27' }),

  Banner_1: translateLink({ value: 'content/lp25-10-02' }),
  Banner_1_Image: translateImage({ value: '20251002b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-10-01' }),
  Banner_2_Image: translateImage({ value: '20251001b.png' }),
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};

const c20251030 = new entities.Campaign({
  date: '2025.10.30',
  name: 'Christmas table essentials',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '408931',
  startId: '37988',
  figmaUrl: 'https://www.figma.com/design/arMn9ycjEqUZDMhVaD13Q',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#750000',
      color: '#ffffff',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.VPRODUCTS_NSLT,
      intro: {
        align: 'left',
        ctaSpace: 'newsletterBottom80px',
        ctaCategoryHref: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
        hideCTA: true,
      },
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#750000',
      color: '#ffffff',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.VPRODUCTS_LP,
      intro: {
        align: 'left',
        ctaSpace: 'newsletterBottom80px',
        ctaCategoryHref: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
        hideCTA: true,
      },
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20251030 };
