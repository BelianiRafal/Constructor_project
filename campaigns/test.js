import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

const categories = [
  // New York
  {
    title: { show: false },
    type: 'test-cat',
    background: '#FFEDE6',
    color: '#000000',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    // src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/new-york-style-christmas/',
    showParagraph: true,
    showPrices: false,
    products: [
      // // PROD 1 BEZ ZNACZENIA
      // {
      //   id: '394733',
      //   src: [
      //     getImageUrl('kktest_Pic01AAATestDesktop.png', true),
      //     getImageUrl('kktest_Pic01AAATestMobile.png', true),
      //   ],
      // },
      {
        id: '394733',
        src: [
          'https://wsrv.nl/?url=pictureserver.net/static/2025/kktest2_01aaaaa.png&w=404&h=508&fit=fill',
          'https://wsrv.nl/?url=pictureserver.net/static/2025/kktest2_01aaaaa.png&w=404&h=540&fit=fill',
        ],
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('kktest2_02aaaaa.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('kktest2_03aaaaa.png', true),
      },

      // 3 products grid
      {
        id: '469028',
        src: getImageUrl('kktest2_04aaaaa.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('kktest2_05aaaaa.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('kktest2_06aaaaa.png', true),
      },

      // // PROD 1 BEZ ZNACZENIA
      // {
      //   id: '0',
      //   src: getImageUrl('20251030_Pic04.png', true),
      // },
      // // DURIAN
      // {
      //   id: '358469',
      //   src: getImageUrl('20251030_Pic05.png', true),
      // },
      // // TOPAZ
      // {
      //   id: '468108',
      //   src: getImageUrl('20251030_Pic06.png', true),
      // },
    ],
  },

  // New York
  {
    title: { show: false },
    type: 'test-cat',
    background: '#FFEDE6',
    color: '#000000',
    productsAlignment: 'right',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom35px` },
    // src: getImageUrl('20251030_Cat00.png', true),
    href: 'https://www.beliani.ch/christmas-shop/christmas-by-style/new-york-style-christmas/',
    showParagraph: true,
    showPrices: false,
    products: [
      // // PROD 1 BEZ ZNACZENIA
      // {
      //   id: '394733',
      //   src: [
      //     getImageUrl('kktest_Pic01AAATestDesktop.png', true),
      //     getImageUrl('kktest_Pic01AAATestMobile.png', true),
      //   ],
      // },
      {
        id: '394733',
        src: [
          'https://wsrv.nl/?url=pictureserver.net/static/2025/kktest2_01aaaaa.png&w=404&h=508&fit=fill',
          'https://wsrv.nl/?url=pictureserver.net/static/2025/kktest2_01aaaaa.png&w=404&h=540&fit=fill',
        ],
      },
      // SESAME
      {
        id: '394733',
        src: getImageUrl('kktest2_02aaaaa.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('kktest2_03aaaaa.png', true),
      },

      // 3 products grid
      {
        id: '469028',
        src: getImageUrl('kktest2_04aaaaa.png', true),
      },
      // QUARTZ
      {
        id: '469028',
        src: getImageUrl('kktest2_05aaaaa.png', true),
      },
      // IOANNINA
      {
        id: '464301',
        src: getImageUrl('kktest2_06aaaaa.png', true),
      },

      // // PROD 1 BEZ ZNACZENIA
      // {
      //   id: '0',
      //   src: getImageUrl('20251030_Pic04.png', true),
      // },
      // // DURIAN
      // {
      //   id: '358469',
      //   src: getImageUrl('20251030_Pic05.png', true),
      // },
      // // TOPAZ
      // {
      //   id: '468108',
      //   src: getImageUrl('20251030_Pic06.png', true),
      // },
    ],
  },
];

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

  // Timer: translateLink({ value: 'content/lp25-10-27' }),

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

const test = new entities.Campaign({
  date: '2025.11.11',
  name: 'CXXXX',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '12',
  startId: '12',
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
      // timer: timer,
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
      // timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { test };
