import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/iojg4g0iob",
  "CHFR": "https://gen.sendtric.com/countdown/hdfj4281wx",
  "FR": "https://gen.sendtric.com/countdown/r16fn7gx73",
  "DE": "https://gen.sendtric.com/countdown/36vbybczbe",
  "UK": "https://gen.sendtric.com/countdown/ljiwel516p",
  "AT": "https://gen.sendtric.com/countdown/8at5ygsxlf",
  "ES": "https://gen.sendtric.com/countdown/hjyn6lodlx",
  "PL": "https://gen.sendtric.com/countdown/ujf1y9ktkx",
  "NL": "https://gen.sendtric.com/countdown/lta2lfyfxb",
  "PT": "https://gen.sendtric.com/countdown/co8fn2vz8x",
  "IT": "https://gen.sendtric.com/countdown/4z9yuzf0xo",
  "SE": "https://gen.sendtric.com/countdown/5jxz3kdmek",
  "HU": "https://gen.sendtric.com/countdown/ehg7346qso",
  "DK": "https://gen.sendtric.com/countdown/o3bcxqfadn",
  "CZ": "https://gen.sendtric.com/countdown/pkfr2x435v",
  "FI": "https://gen.sendtric.com/countdown/kmbk14guvw",
  "NO": "https://gen.sendtric.com/countdown/92vfntrgvk",
  "SK": "https://gen.sendtric.com/countdown/ysgt6x8jnz",
  "BENL": "https://gen.sendtric.com/countdown/3x54no4pv8",
  "BEFR": "https://gen.sendtric.com/countdown/fb6i2e64m7",
  "RO": "https://gen.sendtric.com/countdown/1v8lvoz8t0"
}

const timer = {
  background: '#FF2F00',
  color: '#ffffff',
  align: 'center',
  spaceAfterClass: 'newsletterBottom80px',
  gif: timerGifsSource,
  // image: getImageUrl('20251023free.png', true),
};

const categories = [
  // for host
  {
    name: 'For Host',
    href: 'https://www.beliani.ch/gift-guide/gift-guide-host/',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#750000',
    color: '#FFFFFF',
    ctaElement: { show: true },
    showParagraph: false,
    src: getImageUrl('20251023_Cat00.png', true),
    showWhiteLine: true,
    products: [],
  },

  // for the homebody
  {
    name: 'For the Homebody',
    href: 'https://www.beliani.ch/gift-guide/gift-guide-homebody/',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#750000',
    color: '#FFFFFF',
    ctaElement: { show: true },
    showParagraph: false,
    showWhiteLine: true,
    src: getImageUrl('20251023_Cat10.png', true),
    products: [],
  },

  // for kids
  {
    name: 'For Kids',
    href: 'https://www.beliani.ch/gift-guide/gift-guide-kids/',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#750000',
    color: '#FFFFFF',
    ctaElement: { show: true },
    showParagraph: false,
    showWhiteLine: true,
    src: getImageUrl('20251023_Cat20.png', true),
    products: [],
  },

  // Budget - Friendly
  {
    name: 'Budget - Friendly',
    href: 'https://www.beliani.ch/gift-guide/gift-guide-kids/',
    title: { show: true, align: 'center' },
    type: 'xmas-gift-buttons',
    background: '#750000',
    color: '#FFFFFF',
    ctaElement: { show: false },
    showParagraph: false,
    showWhiteLine: true,
    // src: getImageUrl('20251023_Cat30.png', true),
    products: [],
  },

  // Gift Vouchers
  {
    name: 'Gift Vouchers',
    href: 'https://www.beliani.ch/gift-cards/looks/',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#750000',
    color: '#FFFFFF',
    ctaElement: { show: true },
    showParagraph: false,
    showWhiteLine: false,
    src: getImageUrl('20251023_Cat40.png', true),
    products: [],
  },
];

const campaignTranslationsSheet = '23.10.25 - Christmas Gift Guide';

const tableQueries = [
  {
    tableRange: '11:12',
    name: 'TopImageTitle',
  },
  {
    tableRange: '14',
    name: 'intro',
  },
  {
    tableRange: '15:19',
    name: 'categories',
  },
  {
    tableRange: '23:26',
    name: 'underWithPrices',
  },
  {
    tableRange: '39:40',
    name: 'condition',
  },
  {
    tableRange: '36:38',
    name: 'gift_btn_href',
  },
  {
    tableRange: '10:11',
    tableName: '06.10.25 - October Peak Start',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-10-23' }),
  TopImageTitle_src: translateImage({ value: '20251023_01.png' }),

  TopImage: getImageUrl('20251023_Gif.gif', true),

  Timer: translateLink({ value: 'content/lp25-10-24' }),

  gift_btn_1_src: translateImage({ value: '20251023_Under50.png' }),
  gift_btn_2_src: translateImage({ value: '20251023_Under150.png' }),
  gift_btn_3_src: translateImage({ value: '20251023_Under250.png' }),

  Banner_1: translateLink({ value: 'content/lp25-10-16' }),
  Banner_1_Image: translateImage({ value: '20251016b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-10-15' }),
  Banner_2_Image: translateImage({ value: '20251015b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};

const c20251023 = new entities.Campaign({
  date: '2025.10.23',
  name: 'Christmas Gift Guide',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '408931',
  startId: '37668',
  figmaUrl: 'https://www.figma.com/design/mosvPG3pebhbowGYLvl7u6/',
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
      css: types.CSS.NS,
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
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#750000',
      color: '#ffffff',
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

export { c20251023 };
