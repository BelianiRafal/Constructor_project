import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/310180i54y'],
  CHFR: ['https://gen.sendtric.com/countdown/0d5libujte'],
  FR:   ['https://gen.sendtric.com/countdown/cwwiqnebva'],
  DE:   ['https://gen.sendtric.com/countdown/tddt871uet'],
  UK:   ['https://gen.sendtric.com/countdown/frcowezx4k'],
  AT:   ['https://gen.sendtric.com/countdown/om2ivtkgoj'],
  ES:   ['https://gen.sendtric.com/countdown/jqw6b38x6m'],
  PL:   ['https://gen.sendtric.com/countdown/n01c71fg72'],
  NL:   ['https://gen.sendtric.com/countdown/7b98k24trz'],
  PT:   ['https://gen.sendtric.com/countdown/eikoqdes9s'],
  IT:   ['https://gen.sendtric.com/countdown/816l22n13w'],
  SE:   ['https://gen.sendtric.com/countdown/6mqvg4ca34'],
  HU:   ['https://gen.sendtric.com/countdown/89b89c317p'],
  DK:   ['https://gen.sendtric.com/countdown/i55azlxuys'],
  CZ:   ['https://gen.sendtric.com/countdown/k2jzhk9y6z'],
  FI:   ['https://gen.sendtric.com/countdown/yliq3a5o43'],
  NO:   ['https://gen.sendtric.com/countdown/hlcz16l5dz'],
  SK:   ['https://gen.sendtric.com/countdown/0ocp1idv48'],
  BENL: ['https://gen.sendtric.com/countdown/ps1lnoynvv'],
  BEFR: ['https://gen.sendtric.com/countdown/3v26wdm5qk'],
  RO:   ['https://gen.sendtric.com/countdown/z2hbl8eyip'],
};

const timer = {
  background: '#FF2F00',
  color: '#FFFFFF',
  align: 'center',
  timerSrc: timerGifsSource,
  freebieSrc: getImageUrl('20250703_freebies_1.png', true),
};

const categories = [
  {
    type: 'inspirational-0703',
    name: 'cosy-neutral',
    background: '#FFE0D9',
    color: '#000',
    // src: getImageUrl('uk20250703_cat1.png'), // <--- that way image doesn't change based on country
    src: translateImage('20250703_cat1.png'),
    href: 'https://www.beliani.ch/trends/cosy-neutral/',
    products: [
      {
        id: 363736,
        src: getImageUrl('20250703_prod1.png', true),
      },
      {
        id: 403317,
        src: getImageUrl('20250703_prod2.png', true),
      },
      {
        id: 81395,
        src: getImageUrl('20250703_prod3.png', true),
      },
      {
        id: 423964,
        src: getImageUrl('20250703_prod4.png', true),
      },
      {
        id: 427359,
        src: getImageUrl('20250703_prod5.png', true),
      },
    ]
  },
  {
    type: 'inspirational-0703',
    name: 'maximalist-haven',
    background: '#FFE0D9',
    color: '#000',
    src: translateImage('20250703_cat2.png'),
    href: 'https://www.beliani.ch/trends/maximalist-haven/',
    products: [
      {
        id: 358009,
        src: getImageUrl('20250703_prod6.png', true),
      },
      {
        id: 433452,
        src: getImageUrl('20250703_prod7.png', true),
      },
      {
        id: 380473,
        src: getImageUrl('20250703_prod8.png', true),
      },
      {
        id: 581895,
        src: getImageUrl('20250703_prod9.png', true),
      },
      {
        id: 421872,
        src: getImageUrl('20250703_prod10.png', true),
      },
      {
        id: 553162,
        src: getImageUrl('20250703_prod11.png', true),
      },
    ]
  },
  {
    type: 'inspirational-0703',
    name: 'earthy-tones',
    background: '#FFE0D9',
    color: '#000',
    src: translateImage('20250703_cat3.png'),
    href: 'https://www.beliani.ch/trends/earthy-tones/',
    products: [
      {
        id: 459448,                                    // got to be changed
        src: getImageUrl('20250703_prod12.png', true), //
      },
      {
        id: 211042,
        src: getImageUrl('20250703_prod13.png', true),
      },
      {
        id: 428815,
        src: getImageUrl('20250703_prod14.png', true),
      },
      {
        id: 612563,
        src: getImageUrl('20250703_prod15.png', true),
      },
      {
        id: 430872,
        src: getImageUrl('20250703_prod16.png', true),
      },
      {
        id: 258242,
        src: getImageUrl('20250703_prod17.png', true),
      },
    ]
  },
  {
    type: 'inspirational-0703',
    name: 'soft-glam',
    background: '#FFE0D9',
    color: '#000',
    src: translateImage('20250703_cat4.png'),
    href: 'https://www.beliani.ch/trends/soft-glam/',
    products: [
      {
        id: 168282,
        src: getImageUrl('20250703_prod18.png', true),
      },
      {
        id: 413674,
        src: getImageUrl('20250703_prod19.png', true),
      },
      {
        id: 442708,
        src: getImageUrl('20250703_prod20.png', true),
      },
      {
        id: 403789,
        src: getImageUrl('20250703_prod21.png', true),
      },
      {
        id: 433980,
        src: getImageUrl('20250703_prod22.png', true),
      },
    ]
  },
];

const campaignTranslationsSheet = '03.07.25 - Rent friendly';

const tableQueries = [
  {
    tableRange: '14',
    name: 'intro',
  },
  {
    tableRange: '15:18',
    name: 'categories',
  },
  {
    tableRange: '11:12',
    name: 'tit',
  },
  {
    tableName: 'Voucher - 30.06.2025 - Free outdoor cushion set',
    tableRange: '10:11',
    name: 'timer',
  },
  {
    tableRange: '19:22',
    name: 'paragraphs',
  },
  {
    tableRange: '37:38',
    name: 'condition',
  },
];

const nslt_links = [
  // TOP IMAGE TITLE
  translateLink('content/lp25-07-03'),
  translateImage('20250703_01.png'),

  // TOP IMAGE TITLE GIF
  translateLink('content/lp25-07-03'),
  {
    value: getImageUrl('20250703nslt_gif.gif', true),
  },

  // TIMER
  translateLink('content/lp25-06-30'),

  // BANNER 1
  translateLink('content/lp25-06-26'),
  translateImage('20250626b.png'),

  // BANNER 2
  translateLink('content/lp25-06-25'),
  translateImage('20250625b.png'), //links 8
];

const lp_links = [
  // TOP IMAGE TITLE
  translateLink('content/lp25-07-03'),
  translateImage('20250703_01.png'),

  // TOP IMAGE TITLE GIF
  translateLink('content/lp25-07-03'),
  {
    value: getImageUrl('20250703lp_gif.gif', true),
  },

  // BANNER 1
  translateLink('content/lp25-06-26'),
  translateImage('20250626b.png'),

  // BANNER 2
  translateLink('content/lp25-06-25'),
  translateImage('20250625b.png'), //links 8
];

const c20250703 = new entities.Campaign({
  date: '2025.07.03',
  name: 'Rent friendly',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '375807',
  startId: '34577',
  figmaUrl: 'https://www.figma.com/design/h9X4yymu6EC5WUVF6m71WC',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFE0D9',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TimerOnlyNewsletter,
      css: types.CSS.NS,
      timer: timer,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FFE0D9',
      },
      inside: {
        color: '#000000',
        background: '#FFE0D9',
      },
      intro: {
        background: '#FFE0D9',
        color: '#000000',
        align: 'left',
      },
      categories: categories,
      links: nslt_links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FFE0D9',
      color: '#000000',
      template: templates.LPInspirational,
      css: types.CSS.LP,
      timer: timer,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FFE0D9',
      },
      inside: {
        color: '#000000',
        background: '#FFE0D9',
      },
      intro: {
        background: '#FFE0D9',
        color: '#000000',
        align: 'left',
      },
      tit: {
        color: '#000000',
        background: '#FFE0D9',
        type: 'twoSameLines',
      },
      categories: categories,
      links: lp_links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250703 };
