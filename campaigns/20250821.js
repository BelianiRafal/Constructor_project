import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/j7pfnq2bo1'],
	CHFR: ['https://gen.sendtric.com/countdown/lwij005own'],
  FR:   ['https://gen.sendtric.com/countdown/e3rnz3orug'],
  DE:   ['https://gen.sendtric.com/countdown/6dg29ia13t'],
  UK:   ['https://gen.sendtric.com/countdown/25noowa42k'],
  AT:   ['https://gen.sendtric.com/countdown/qt3yz3o33l'],
  ES:   ['https://gen.sendtric.com/countdown/4hasvyergy'],
  PL:   ['https://gen.sendtric.com/countdown/556hpdyaqp'],
  NL:   ['https://gen.sendtric.com/countdown/r5ykrcos47'],
  PT:   ['https://gen.sendtric.com/countdown/u2asgq5frb'],
  IT:   ['https://gen.sendtric.com/countdown/2u71bvq5az'],
  SE:   ['https://gen.sendtric.com/countdown/420fd5z0zi'],
  HU:   ['https://gen.sendtric.com/countdown/7bh15ptd05'],
  DK:   ['https://gen.sendtric.com/countdown/slpx5oizry'],
  CZ:   ['https://gen.sendtric.com/countdown/s09cv7qrgm'],
  FI:   ['https://gen.sendtric.com/countdown/gkf3gg1uw9'],
  NO:   ['https://gen.sendtric.com/countdown/1pkl2rpzki'],
  SK:   ['https://gen.sendtric.com/countdown/jozq7q852t'],
  BENL: ['https://gen.sendtric.com/countdown/vdxgw9hrgh'],
  BEFR: ['https://gen.sendtric.com/countdown/tbrmh8evi7'],
  RO:   ['https://gen.sendtric.com/countdown/32f9ymt7d2'],
};

const timer = {
  background: '#FF2F00',
  color: '#ffffff',
  align: 'center',
  gif: timerGifsSource,
  // image: getImageUrl('20250821_freebies.png', true),
};

const categories = [
  {
    name: 'Lounge sets',
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 338035,
        src: getImageUrl('20250821_Pic01.png', true),
      },
      {
        id: 143892,
        src: getImageUrl('20250821_Pic02.png', true),
      },
      {
        id: 326799,
        src: getImageUrl('20250821_Pic03.png', true),
      },
      {
        id: 207163,
        src: getImageUrl('20250821_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Dining sets',
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 311209,
        src: getImageUrl('20250821_Pic11.png', true),
      },
      {
        id: 555774,
        src: getImageUrl('20250821_Pic12.png', true),
      },
      {
        id: 374902,
        src: getImageUrl('20250821_Pic13.png', true),
      },
      {
        id: 8313,
        src: getImageUrl('20250821_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Parasols',
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 522720,
        src: getImageUrl('20250821_Pic21.png', true),
      },
      {
        id: 30242,
        src: getImageUrl('20250821_Pic22.png', true),
      },
      {
        id: 368923,
        src: getImageUrl('20250821_Pic23.png', true),
      },
      {
        id: 82395,
        src: getImageUrl('20250821_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Balcony furniture',
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 198625,
        src: getImageUrl('20250821_Pic31.png', true),
      },
      {
        id: 294478,
        src: getImageUrl('20250821_Pic32.png', true),
      },
      {
        id: 385843,
        src: getImageUrl('20250821_Pic33.png', true),
      },
      {
        id: 126877,
        src: getImageUrl('20250821_Pic34.png', true),
      },
    ],
  },

  {
    name: 'Swings',
    href: 'https://www.beliani.ch/outdoor-furniture/swings/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 30180,
        src: getImageUrl('20250821_Pic41.png', true),
      },
      {
        id: 71367,
        src: getImageUrl('20250821_Pic42.png', true),
      },
      {
        id: 591546,
        src: getImageUrl('20250821_Pic43.png', true),
      },
      {
        id: 61818,
        src: getImageUrl('20250821_Pic44.png', true),
      },
    ],
  },

  {
    name: 'Storage',
    href: 'https://www.beliani.ch/outdoor-furniture/storage-boxes/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 200593,
        src: getImageUrl('20250821_Pic51.png', true),
      },
      {
        id: 557557,
        src: getImageUrl('20250821_Pic52.png', true),
      },
      {
        id: 198292,
        src: getImageUrl('20250821_Pic53.png', true),
      },
      {
        id: 97811,
        src: getImageUrl('20250821_Pic54.png', true),
      },
    ],
  },

  {
    name: 'Fire pits',
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 177328,
        src: getImageUrl('20250821_Pic61.png', true),
      },
      {
        id: 200578,
        src: getImageUrl('20250821_Pic62.png', true),
      },
      {
        id: 87001,
        src: getImageUrl('20250821_Pic63.png', true),
      },
      {
        id: 209083,
        src: getImageUrl('20250821_Pic64.png', true),
      },
    ],
  },

  {
    name: 'Accessories',
    href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
    intro: true,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FECD8C',
    color: '#000',
    // src: getImageUrl('20250821_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 121559,
        src: getImageUrl('20250821_Pic71.png', true),
      },
      {
        id: 77323,
        src: getImageUrl('20250821_Pic72.png', true),
      },
      {
        id: 598467,
        src: getImageUrl('20250821_Pic73.png', true),
      },
      {
        id: 599400,
        src: getImageUrl('20250821_Pic74.png', true),
      },
    ],
  }
];

const campaignTranslationsSheet = '21.08.25 - Outdoor bestsellers';

const tableQueries = [
  {
    tableRange: '12:13',
    name: 'TopImageTitle',
  },
  {
    tableRange: '14',
    name: 'intro',
  },
  {
    tableRange: '10:11',
    tableName: '04.08.25 - August Peak Start',
    name: 'Timer',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
  {
    tableRange: '15:22',
    name: 'categories',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-08-21' }),
  TopImageTitle_src: translateImage({ value: '20250821_01.png' }),

  TopImage: getImageUrl('20250821_Gif.gif', true),

  Timer: translateLink({ value: 'content/lp25-08-22' }),

  Banner_1: translateLink({ value: 'content/lp25-08-14' }),
  Banner_1_Image: translateImage({ value: '20250814b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-08-13' }),
  Banner_2_Image: translateImage({ value: '20250813b.png' }),
};

const TopImageTitle_data = {
  color: '#FF3A0D',
  backgroundColor: '#FECD8C',
  type: 'line2bigger',
};

const c20250821 = new entities.Campaign({
  date: '2025.08.21',
  name: 'Outdoor bestsellers',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '388730',
  startId: '36023',
  figmaUrl: 'https://www.figma.com/design/cxSZTl2JvXI2BClj5kK1II',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FECD8C',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.categoryPeakRegular,
      css: types.CSS.NS,
      intro: {
        align: 'center',
        hideCTA: true,
      },
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: [
        [
          {
            name: 'Lounge Sets',
            src: translateImage({ value: '_cat_1__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
          },
          {
            name: 'Dining Sets',
            src: translateImage({ value: '_cat_2__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ',
          },
        ],
        [
          {
            name: 'Sun Loungers',
            src: translateImage({ value: '_cat_3__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/ ',
          },
          {
            name: 'Benches',
            src: translateImage({ value: '_cat_4__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/ ',
          },
        ],
        [
          {
            name: 'Patio Daybeds',
            src: translateImage({ value: '_cat_5__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ',
          },
          {
            name: 'Storage',
            src: translateImage({ value: '_cat_6__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/storage-boxes/ ',
          },
        ],
        [
          {
            name: 'Swings',
            src: translateImage({ value: '_cat_7__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/swings/ ',
          },
          {
            name: 'Balcony Furniture',
            src: translateImage({ value: '_cat_8__20250821.png' }),
            href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ',
          },
        ],
        [
          {
            name: 'Plant Pots',
            src: translateImage({ value: '_cat_9__20250821.png' }),
            href: 'https://www.beliani.ch/garden-accessories/pots-and-planters/ ',
          },
          {
            name: 'Fire Pits',
            src: translateImage({ value: '_cat_10__20250821.png' }),
            href: 'https://www.beliani.ch/garden-accessories/fire-pits/ ',
          },
        ],
        [
          {
            name: 'Textiles',
            src: translateImage({ value: '_cat_11__20250821.png' }),
            href: 'https://www.beliani.ch/garden-furniture/outdoor-textiles/ ',
          },
          {
            name: 'Rugs',
            src: translateImage({ value: '_cat_12__20250821.png' }),
            href: 'https://www.beliani.ch/garden-furniture/garden-rugs/ ',
          },
        ],
      ],
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FECD8C',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      intro: {
        align: 'center',
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

export { c20250821 };
