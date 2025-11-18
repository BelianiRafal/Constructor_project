import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/zin4gm92h1",
  "CHFR": "https://gen.sendtric.com/countdown/77e1au7idz",
  "FR": "https://gen.sendtric.com/countdown/gkiyrvwqz9",
  "DE": "https://gen.sendtric.com/countdown/6v2zzxns4w",
  "UK": "https://gen.sendtric.com/countdown/r0t82uyi0c",
  "AT": "https://gen.sendtric.com/countdown/nm74dpg5rb",
  "ES": "https://gen.sendtric.com/countdown/bz9f3obqej",
  "PL": "https://gen.sendtric.com/countdown/2zqvwjueaz",
  "NL": "https://gen.sendtric.com/countdown/km0f6pqobd",
  "PT": "https://gen.sendtric.com/countdown/aa56h1k873",
  "IT": "https://gen.sendtric.com/countdown/yi9lyh593u",
  "SE": "https://gen.sendtric.com/countdown/80vjmj9pfe",
  "HU": "https://gen.sendtric.com/countdown/hnr5qrlurc",
  "DK": "https://gen.sendtric.com/countdown/i1v4sr16kp",
  "CZ": "https://gen.sendtric.com/countdown/buqb9wxi7f",
  "FI": "https://gen.sendtric.com/countdown/kvmgonq3om",
  "NO": "https://gen.sendtric.com/countdown/i6az7xtmlb",
  "SK": "https://gen.sendtric.com/countdown/mmpv1ru6po",
  "BENL": "https://gen.sendtric.com/countdown/ipj5yo6xy9",
  "BEFR": "https://gen.sendtric.com/countdown/n387kcq9xa",
  "RO": "https://gen.sendtric.com/countdown/niw1tjbdpe"
}

const timer = {
  spaceAfterClass: 'newsletterBottom60px',
  background: '#750000',
  color: '#FFFFFF',
  align: 'center',
  gif: timerGifsSource,
};

const categories = [
  {
    name: 'Halloween Accessories',
    href: 'https://www.beliani.ch/halloween-accessories/',
    src: getImageUrl('20250925_Pic00.png', true),
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    showRedLine: true,
    background: '#FECD8C',
    color: '#750000',
    ctaElement: { show: true},
    showParagraph: true,
    productsAlignment: 'center',
    products: [
      // COMOROS
      {
        id: 425546,
        src: getImageUrl('20250925_Pic01.png', true),
      },

      // CUCURBITA
      {
        id: 329781,
        src: getImageUrl('20250925_Pic02.png', true),
      },

      // KALAMATA
      {
        id: 364500,
        src: getImageUrl('20250925_Pic03.png', true),
      },

      // TERRASA
      {
        id: 368342,
        src: getImageUrl('20250925_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Mirrors',
    title: { show: true, align: 'center' },
    src: getImageUrl('20250925_Pic10.png', true),
    type: 'image-4productsgrid',
    background: '#FECD8C',
    showRedLine: true,
    color: '#750000',
    productsAlignment: 'center',
    ctaElement: { show: true},
    showParagraph: true,
    products: [
      // EMBRY
      {
        id: 308194,
        src: getImageUrl('20250925_Pic11.png', true),
      },

      // CASSEL
      {
        id: 308212,
        src: getImageUrl('20250925_Pic12.png', true),
      },

      // CROSSES
      {
        id: 448540,
        src: getImageUrl('20250925_Pic13.png', true),
      },

      // CHATILLON
      {
        id: 330229,
        src: getImageUrl('20250925_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Candle holders',
    href: 'https://www.beliani.ch/accessories-decor/candle-holders/',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#FECD8C',
    color: '#750000',
    productsAlignment: 'center',
    ctaElement: { show: true},
    showRedLine: true,
    showParagraph: true,
    src: getImageUrl('20250925_Pic20.png', true),
    products: [
      // PORRTELA
      {
        id: 599932,
        src: getImageUrl('20250925_Pic21.png', true),
      },

      // LAMEGO
      {
        id: 600562,
        src: getImageUrl('20250925_Pic22.png', true),
      },

      // BUNI
      {
        id: 369453,
        src: getImageUrl('20250925_Pic23.png', true),
      },

      // CAVIANA
      {
        id: 322828,
        src: getImageUrl('20250925_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Lighting',
    title: { show: true, align: 'center' },
    type: 'image-4productsgrid',
    background: '#FECD8C',
    color: '#750000',
    productsAlignment: 'center',
    ctaElement: { show: true},
    showParagraph: true,
    src: getImageUrl('20250925_Pic30.png', true),
    products: [
      // WANCHET
      {
        id: 306610,
        src: getImageUrl('20250925_Pic31.png', true),
      },

      // HERIOT
      {
        id: 402352,
        src: getImageUrl('20250925_Pic32.png', true),
      },

      // EVANS
      {
        id: 78447,
        src: getImageUrl('20250925_Pic33.png', true),
      },

      // BANKA
      {
        id: 561946,
        src: getImageUrl('20250925_Pic34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '25.09.25 - Halloween prep';

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
    tableRange: '25:28',
    name: 'categoryLinks',
  },
  {
    tableRange: '21:24',
    name: 'paragraphs',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
  {
    tableRange: '10:11',
    tableName: 'Voucher - 19.09.25 - Cashback',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-09-25' }),
  TopImageTitle_src: translateImage({ value: '20250925_01.png' }),

  TopImage: getImageUrl('20250925_Pic.png', true),

  Timer: translateLink({ value: 'content/lp25-09-19' }),

  Banner_1: translateLink({ value: 'content/lp25-09-18' }),
  Banner_1_Image: translateImage({ value: '20250918b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-09-17' }),
  Banner_2_Image: translateImage({ value: '20250917b.png' }),
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: '#FECD8C',
  type: 'halloween',
};

const c20250925 = new entities.Campaign({
  date: '2025.09.25',
  name: 'Halloween prep',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '399959',
  startId: '36943',
  figmaUrl:
    'https://www.figma.com/design/bObKY5NHcpK1CakNBG0Ncc/Halloween--Copy---Copy-?node-id=9159-2111&t=vLdxmpL7WxvDAHST-1',
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
      color: '#750000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
      intro: {
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
      background: '#FECD8C',
      color: '#750000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      timer: timer,
      intro: {
        hideCTA: true,
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250925 };
