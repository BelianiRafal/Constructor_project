import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/b9eqyxc81d'],
  CHFR: ['https://gen.sendtric.com/countdown/968aom0qdl'],
  FR:   ['https://gen.sendtric.com/countdown/iz20vzg08s'],
  DE:   ['https://gen.sendtric.com/countdown/0w8ycq67wr'],
  UK:   ['https://gen.sendtric.com/countdown/xx2m8xgpg2'],
  AT:   ['https://gen.sendtric.com/countdown/bfwzv7biz2'],
  ES:   ['https://gen.sendtric.com/countdown/0klk6bo09t'],
  PL:   ['https://gen.sendtric.com/countdown/z3yjulbws4'],
  NL:   ['https://gen.sendtric.com/countdown/ksrfz7poe7'],
  PT:   ['https://gen.sendtric.com/countdown/ls8jxaqa0f'],
  IT:   ['https://gen.sendtric.com/countdown/bfqtnn225b'],
  SE:   ['https://gen.sendtric.com/countdown/aie033q3a9'],
  HU:   ['https://gen.sendtric.com/countdown/odu1zb7nd6'],
  DK:   ['https://gen.sendtric.com/countdown/imarl2r35v'],
  CZ:   ['https://gen.sendtric.com/countdown/spgtq87wja'],
  FI:   ['https://gen.sendtric.com/countdown/twvw5tz9tn'],
  NO:   ['https://gen.sendtric.com/countdown/yzsryewiwc'],
  SK:   ['https://gen.sendtric.com/countdown/qh3j4nslel'],
  BENL: ['https://gen.sendtric.com/countdown/k4pf3hya4w'],
  BEFR: ['https://gen.sendtric.com/countdown/d6hbj9fd9g'],
  RO:   ['https://gen.sendtric.com/countdown/borltpmbq5'],
};

const timer = {
  background: '#FD9000',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250828_freebies.png', true),
};

const categories = [
  {
    name: 'Corner sofas',
    href: 'https://www.beliani.ch/sofas/corner-sofas/',
    intro: false,
    showTitle: true,
    type: 'image-3productsrow',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250828_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 453538,
        src: getImageUrl('20250828_Pic01.png', true),
      },
      {
        id: 432299,
        src: getImageUrl('20250828_Pic02.png', true),
      },
      {
        id: 415333,
        src: getImageUrl('20250828_Pic03.png', true),
      },
      {
        id: 429106,
        src: getImageUrl('20250828_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Sofa beds',
    href: 'https://www.beliani.ch/sofas/sofa-beds/',

    showTitle: true,
    type: 'image-3productsrow',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250828_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 425616,
        src: getImageUrl('20250828_Pic11.png', true),
      },
      {
        id: 446165,
        src: getImageUrl('20250828_Pic12.png', true),
      },
      {
        id: 430505,
        src: getImageUrl('20250828_Pic13.png', true),
      },
      {
        id: 581133,
        src: getImageUrl('20250828_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Chaise lounges',
    href: 'https://www.beliani.ch/sofas/chaise-lounge/',

    showTitle: true,
    type: 'image-3productsrow',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250828_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 584848,
        src: getImageUrl('20250828_Pic21.png', true),
      },
      {
        id: 521045,
        src: getImageUrl('20250828_Pic22.png', true),
      },
      {
        id: 415176,
        src: getImageUrl('20250828_Pic23.png', true),
      },
      {
        id: 389027,
        src: getImageUrl('20250828_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Fabric sofas',
    href: 'https://www.beliani.ch/sofas/fabric-sofas/',

    showTitle: true,
    type: 'image-3productsrow',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250828_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 578147,
        src: getImageUrl('20250828_Pic31.png', true),
      },
      {
        id: 603680,
        src: getImageUrl('20250828_Pic32.png', true),
      },
      {
        id: 579271,
        src: getImageUrl('20250828_Pic33.png', true),
      },
      {
        id: 575382,
        src: getImageUrl('20250828_Pic34.png', true),
      },
    ],
  },

  {
    name: 'Leather sofas',
    href: 'https://www.beliani.ch/sofas/leather-sofas/',

    showTitle: true,
    type: 'image-3productsrow',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250828_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 562827,
        src: getImageUrl('20250828_Pic41.png', true),
      },
      {
        id: 634727,
        src: getImageUrl('20250828_Pic42.png', true),
      },
      {
        id: 596773,
        src: getImageUrl('20250828_Pic43.png', true),
      },
      {
        id: 638356,
        src: getImageUrl('20250828_Pic44.png', true),
      },
    ],
  },

  {
    name: 'Modular sofas',
    href: 'https://www.beliani.ch/sofas/modular-sofas/',

    showTitle: true,
    type: 'image-3productsrow',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250828_Cat00.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 409728,
        src: getImageUrl('20250828_Pic51.png', true),
      },
      {
        id: 576048,
        src: getImageUrl('20250828_Pic52.png', true),
      },
      {
        id: 578489,
        src: getImageUrl('20250828_Pic53.png', true),
      },
      {
        id: 321296,
        src: getImageUrl('20250828_Pic54.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '28.08.25 - Bestseller sofas';

const tableQueries = [
  {
    tableRange: '12:13',
    name: 'TopImageTitle',
  },
  {
    tableRange: '15',
    name: 'intro',
  },
  {
    tableRange: '16:23',
    name: 'categories',
  },
  {
    tableRange: '24:25',
    name: 'condition',
  },
  {
    tableRange: '10:11',
    tableName: 'Voucher - 25.08.25 - Free TV stand',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-08-28' }),
  TopImageTitle_src: translateImage({ value: '20250828_01.png' }),

  TopImage: getImageUrl('20250828_Gif.gif', true),

  Timer: translateLink({ value: 'content/lp25-08-25' }),

  Banner_1: translateLink({ value: 'content/lp25-08-14' }),
  Banner_1_Image: translateImage({ value: '20250814b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-07-24' }),
  Banner_2_Image: translateImage({ value: '20250724b.png' }),
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: '#FFEFD9',
  type: 'line2bigger',
};

const c20250828 = new entities.Campaign({
  date: '2025.08.28',
  name: 'Bestseller sofas',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '390857',
  startId: '36280',
  figmaUrl: 'https://www.figma.com/design/EzCYy41dWxF8TCE1lRrN1Z',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFEFD9',
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
            name: 'Corner sofas',
            src: translateImage({ value: '_cat_1__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/corner-sofas/',
          },
          {
            name: 'Sofa beds',
            src: translateImage({ value: '_cat_2__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/sofa-beds/',
          },
        ],
        [
          {
            name: 'Chaise lounges',
            src: translateImage({ value: '_cat_3__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/chaise-lounge/',
          },
          {
            name: 'Fabric sofas',
            src: translateImage({ value: '_cat_4__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/fabric-sofas/',
          },
        ],
        [
          {
            name: 'Leather sofas',
            src: translateImage({ value: '_cat_5__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/leather-sofas/',
          },
          {
            name: '2 seater sofas',
            src: translateImage({ value: '_cat_6__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/2-seater-sofas/',
          },
        ],
        [
          {
            name: '3 seater sofas',
            src: translateImage({ value: '_cat_7__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/3-seater-sofas/',
          },
          {
            name: 'Modular sofas',
            src: translateImage({ value: '_cat_8__20250828.png' }),
            href: 'https://www.beliani.ch/sofas/modular-sofas/',
          },
        ],
      ],
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FFEFD9',
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

export { c20250828 };
