import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
// const timerGifsSource = {
// }

// const timer = {
//   background: '#F6E7E6',
//   color: '#000000',
//   align: 'center',
//   gif: timerGifsSource,
//   image: getImageUrl('20251016free.png', true),
// };

const categories = [
  {
    name: 'Office chairs',
    href: 'https://www.beliani.ch/office-furniture/office-chairs/',
    title: { show: true, spaceBeforeClassName: "newsletterBottom35px" },
    type: 'image-4productsgrid',
    background: '#F7E8E7',
    color: '#000000',
    ctaElement: { show: true},
    showParagraph: true,
    src: getImageUrl('20251016_Cat00.png', true),
    showPrices: true,
    products: [
      // TRIUMPHER
      {
        id: 631951,
        src: getImageUrl('20251016_Pic01.png', true),
      },

      // CREATOR
      {
        id: 632161,
        src: getImageUrl('20251016_Pic02.png', true),
      },

      // ESTELL
      {
        id: 649250,
        src: getImageUrl('20251016_Pic03.png', true),
      },

      // BERNE
      {
        id: 652061,
        src: getImageUrl('20251016_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Desks',
    href: 'https://www.beliani.ch/office-furniture/desks-eng/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#FEC273',
    color: '#000',
    showParagraph: true,
    ctaElement: { show: true},
    src: getImageUrl('20251016_Cat10.png', true),
    showPrices: true,
    products: [
      // ACADEMIA
      {
        id: 570307,
        src: getImageUrl('20251016_Pic11.png', true),
      },

      // DESTINAS
      {
        id: 639277,
        src: getImageUrl('20251016_Pic12.png', true),
      },

      // ANAH
      {
        id: 391674,
        src: getImageUrl('20251016_Pic13.png', true),
      },

      // FOCUS
      {
        id: 243267,
        src: getImageUrl('20251016_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Storage',
    href: 'https://www.beliani.ch/office-furniture/storage-units-and-cabinets/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#F7E8E7',
    color: '#000000',
    showParagraph: true,
    ctaElement: { show: true},
    src: getImageUrl('20251016_Cat20.png', true),
    showPrices: true,
    products: [
      // MUSCOVITE
      {
        id: 519440,
        src: getImageUrl('20251016_Pic21.png', true),
      },

      // MOINES
      {
        id: 391623,
        src: getImageUrl('20251016_Pic22.png', true),
      },

      // CAMI
      {
        id: 359217,
        src: getImageUrl('20251016_Pic23.png', true),
      },

      // CHATEH
      {
        id: 646021,
        src: getImageUrl('20251016_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/lighting/office-lighting/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#FEC273',
    color: '#000',
    ctaElement: { show: true},
    showParagraph: true,
    src: getImageUrl('20251016_Cat30.png', true),
    showPrices: true,
    products: [
      // GRUS
      {
        id: 378717,
        src: getImageUrl('20251016_Pic31.png', true),
      },

      // RIMAVA
      {
        id: 374723,
        src: getImageUrl('20251016_Pic32.png', true),
      },

      // LACERTA
      {
        id: 379061,
        src: getImageUrl('20251016_Pic33.png', true),
      },

      // LAWSON
      {
        id: 505415,
        src: getImageUrl('20251016_Pic34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '16.10.25 - Office';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '16',
    name: 'intro',
  },
  {
    tableRange: '17:20',
    name: 'categories',
  },
  {
    tableRange: '21:24',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
  // {
  //   tableRange: '11:12',
  //   tableName: 'Voucher - 07.10.25 - Free lamp',
  //   name: 'Timer',
  // },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-10-16' }),
  TopImageTitle_src: translateImage({ value: '20251016_01.png' }),

  TopImage: getImageUrl('20251016_Pic.png', true),

  // Timer: translateLink({ value: 'content/lp25-10-07' }),

  Banner_1: translateLink({ value: 'content/lp25-10-09' }),
  Banner_1_Image: translateImage({ value: '20251009b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-10-08' }),
  Banner_2_Image: translateImage({ value: '20251008b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F7E8E7',
  type: 'up_to',
};

const c20251016 = new entities.Campaign({
  date: '2025.10.16',
  name: 'Office',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '405791',
  startId: '37476',
  figmaUrl: 'https://www.figma.com/design/uykDMxqjzb7YKxxaQLwo2g',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#F7E8E7',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
      intro: {
        align: 'left',
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
      background: '#F7E8E7',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      intro: {
        align: 'left',
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

export { c20251016 };
