import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/whopojvbxl'],
  CHFR: ['https://gen.sendtric.com/countdown/3pij6gve4w'],
  FR:   ['https://gen.sendtric.com/countdown/33w2p13zkm'],
  DE:   ['https://gen.sendtric.com/countdown/v3w5pyre8t'],
  UK:   ['https://gen.sendtric.com/countdown/t6pybxrcb4'],
  AT:   ['https://gen.sendtric.com/countdown/bbgwfkyxyy'],
  ES:   ['https://gen.sendtric.com/countdown/gm4w15ow8x'],
  PL:   ['https://gen.sendtric.com/countdown/a5xe4ukvqr'],
  NL:   ['https://gen.sendtric.com/countdown/j5l1xtzxj1'],
  PT:   ['https://gen.sendtric.com/countdown/ax1i8ar4zt'],
  IT:   ['https://gen.sendtric.com/countdown/oa2j32cvtl'],
  SE:   ['https://gen.sendtric.com/countdown/8t0nber2d4'],
  HU:   ['https://gen.sendtric.com/countdown/o91j4c0p5d'],
  DK:   ['https://gen.sendtric.com/countdown/xp6clsm2qz'],
  CZ:   ['https://gen.sendtric.com/countdown/a12wyyapty'],
  FI:   ['https://gen.sendtric.com/countdown/e0atjm7ug2'],
  NO:   ['https://gen.sendtric.com/countdown/6ai12g4go0'],
  SK:   ['https://gen.sendtric.com/countdown/gpq3e4r39y'],
  BENL: ['https://gen.sendtric.com/countdown/7s2qw5gncm'],
  BEFR: ['https://gen.sendtric.com/countdown/p01b59vv30'],
  RO:   ['https://gen.sendtric.com/countdown/fvv9e9a5mq'],
};

const timer = {
  background: '#FFCCB7',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250911free.png', true),
};

const categories = [
  {
    name: 'Corner sofas',
    href: 'https://www.beliani.ch/sofas/corner-sofas/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#F6E7E6',
    color: '#000',
    ctaElement: { show: true},
    src: getImageUrl('20250911_Cat00.png', true),
    showPrices: false,
    products: [
      {
        id: 441833,
        src: getImageUrl('20250911_Pic01.png', true),
      },
      {
        id: 453557,
        src: getImageUrl('20250911_Pic02.png', true),
      },
      {
        id: 450062,
        src: getImageUrl('20250911_Pic03.png', true),
      },
      {
        id: 442250,
        src: getImageUrl('20250911_Pic04.png', true),
      },
    ],
  },

  {
    name: '2 seater sofas',
    href: 'https://www.beliani.ch/sofas/2-seater-sofas/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#FFCCB7',
    color: '#000',
    ctaElement: { show: true},
    src: getImageUrl('20250911_Cat10.png', true),
    showPrices: false,
    products: [
      {
        id: 579079,
        src: getImageUrl('20250911_Pic11.png', true),
      },
      {
        id: 618307,
        src: getImageUrl('20250911_Pic12.png', true),
      },
      {
        id: 646933,
        src: getImageUrl('20250911_Pic13.png', true),
      },
      {
        id: 615997,
        src: getImageUrl('20250911_Pic14.png', true),
      },
    ],
  },

  {
    name: '3 seater sofas',
    href: 'https://www.beliani.ch/sofas/3-seater-sofas/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#F6E7E6',
    color: '#000',
    ctaElement: { show: true},
    src: getImageUrl('20250911_Cat20.png', true),
    showPrices: false,
    products: [
      {
        id: 603680,
        src: getImageUrl('20250911_Pic21.png', true),
      },
      {
        id: 579251,
        src: getImageUrl('20250911_Pic22.png', true),
      },
      {
        id: 429983,
        src: getImageUrl('20250911_Pic23.png', true),
      },
      {
        id: 428954,
        src: getImageUrl('20250911_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Sofa beds',
    href: 'https://www.beliani.ch/sofas/sofa-beds/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#FFCCB7',
    color: '#000',
    ctaElement: { show: true},
    src: getImageUrl('20250911_Cat30.png', true),
    showPrices: false,
    products: [
      {
        id: 633454,
        src: getImageUrl('20250911_Pic31.png', true),
      },
      {
        id: 425705,
        src: getImageUrl('20250911_Pic32.png', true),
      },
      {
        id: 617292,
        src: getImageUrl('20250911_Pic33.png', true),
      },
      {
        id: 601281,
        src: getImageUrl('20250911_Pic34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '11.09.25 - Sofas';

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
  {
    tableRange: '10:11',
    tableName: 'Voucher - 08.09.25 - Free mirrors',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-09-11' }),
  TopImageTitle_src: translateImage({ value: '20250911_01.png' }),

  TopImage: getImageUrl('20250911_01.png', true),

  Timer: translateLink({ value: 'content/lp25-09-08' }),

  Banner_1: translateLink({ value: 'content/lp25-09-04' }),
  Banner_1_Image: translateImage({ value: '20250904b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-09-03' }),
  Banner_2_Image: translateImage({ value: '20250903b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const c20250911_grupaB = new entities.Campaign({
  date: '2025.09.11',
  name: 'Sofas | TEST B',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '396480',
  startId: '36760',
  figmaUrl:
    'https://www.figma.com/design/vyBbhWqUMMN27dwPcBF2Q2/2025.09.11--Sofas--Copy-?node-id=0-1&t=Ys0Ikx2xrN9feIGy-1',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#F6E7E6',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
      intro: {
        align: 'left',
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
      background: '#F6E7E6',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      intro: {
        align: 'left',
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

export { c20250911_grupaB };
