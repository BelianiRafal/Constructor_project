import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/jh9fxjunu3",
  "CHFR": "https://gen.sendtric.com/countdown/9fnk2zv76w",
  "FR": "https://gen.sendtric.com/countdown/wbho8ha7i0",
  "DE": "https://gen.sendtric.com/countdown/7ql8yzdiye",
  "UK": "https://gen.sendtric.com/countdown/sqk3xinrmi",
  "AT": "https://gen.sendtric.com/countdown/umms1gk4al",
  "ES": "https://gen.sendtric.com/countdown/c4tzg9azeh",
  "PL": "https://gen.sendtric.com/countdown/j44u6qbfj3",
  "NL": "https://gen.sendtric.com/countdown/nvb78ikzye",
  "PT": "https://gen.sendtric.com/countdown/lrpijj5134",
  "IT": "https://gen.sendtric.com/countdown/ru5i46rflh",
  "SE": "https://gen.sendtric.com/countdown/lb60wozfgw",
  "HU": "https://gen.sendtric.com/countdown/s7ylxb0twc",
  "DK": "https://gen.sendtric.com/countdown/m8f0glmy26",
  "CZ": "https://gen.sendtric.com/countdown/9taaolqehj",
  "FI": "https://gen.sendtric.com/countdown/2jr1g7m5ky",
  "NO": "https://gen.sendtric.com/countdown/9v51em7yxt",
  "SK": "https://gen.sendtric.com/countdown/myry3xdyo5",
  "BENL": "https://gen.sendtric.com/countdown/1ne4eey1il",
  "BEFR": "https://gen.sendtric.com/countdown/78lodnugfm",
  "RO": "https://gen.sendtric.com/countdown/j12uedmzkj"
}

const timer = {
  background: '#F6E7E6',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20251009free.png', true),
};

const categories = [
  {
    name: 'Baths',
    href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#750000',
    color: '#FFFFFF',
    ctaElement: { show: true},
    showParagraph: true,
    src: getImageUrl('20251009_Cat00.png', true),
    showPrices: true,
    products: [
      // GOCTA
      {
        id: 415278,
        src: getImageUrl('20251009_Pic01.png', true),
      },

      // NEVIS
      {
        id: 57689,
        src: getImageUrl('20251009_Pic02.png', true),
      },

      // MEVES
      {
        id: 82000,
        src: getImageUrl('20251009_Pic03.png', true),
      },

      // SAMANA
      {
        id: 62518,
        src: getImageUrl('20251009_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Storage',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#F6E7E6',
    color: '#000',
    showParagraph: true,
    ctaElement: { show: true},
    src: getImageUrl('20251009_Cat10.png', true),
    showPrices: true,
    products: [
      // NUBES
      {
        id: 571961,
        src: getImageUrl('20251009_Pic11.png', true),
      },

      // WAVERLY
      {
        id: 515547,
        src: getImageUrl('20251009_Pic12.png', true),
      },

      // TIETE
      {
        id: 648377,
        src: getImageUrl('20251009_Pic13.png', true),
      },

      // QUINTAY
      {
        id: 604408,
        src: getImageUrl('20251009_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Fittings',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-fittings/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#750000',
    color: '#FFFFFF',
    showParagraph: true,
    ctaElement: { show: true},
    src: getImageUrl('20251009_Cat20.png', true),
    showPrices: true,
    products: [
      // TINGUIRIRICA
      {
        id: 641892,
        src: getImageUrl('20251009_Pic21.png', true),
      },

      // PILCOMAYO
      {
        id: 637558,
        src: getImageUrl('20251009_Pic22.png', true),
      },

      // DICHATO
      {
        id: 634670,
        src: getImageUrl('20251009_Pic23.png', true),
      },

      // RIBBON
      {
        id: 193855,
        src: getImageUrl('20251009_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Accessories',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-accessories/',
    title: { show: true },
    type: 'image-4productsgrid',
    background: '#F6E7E6',
    color: '#000',
    ctaElement: { show: true},
    showParagraph: true,
    src: getImageUrl('20251009_Cat30.png', true),
    showPrices: true,
    products: [
      // TALARA
      {
        id: 626940,
        src: getImageUrl('20251009_Pic31.png', true),
      },

      // HUARMEY
      {
        id: 636282,
        src: getImageUrl('20251009_Pic32.png', true),
      },

      // KALUTARA
      {
        id: 370679,
        src: getImageUrl('20251009_Pic33.png', true),
      },

      // YUNGAS
      {
        id: 604159,
        src: getImageUrl('20251009_Pic34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '09.10.25 - Bathroom';

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
  {
    tableRange: '11:12',
    tableName: 'Voucher - 07.10.25 - Free lamp',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-10-09' }),
  TopImageTitle_src: translateImage({ value: '20251009_01.png' }),

  TopImage: getImageUrl('20251009_Gif.gif', true),

  Timer: translateLink({ value: 'content/lp25-10-07' }),

  Banner_1: translateLink({ value: 'content/lp25-10-02' }),
  Banner_1_Image: translateImage({ value: '20251002b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-10-01' }),
  Banner_2_Image: translateImage({ value: '20251001b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};

const c20251009 = new entities.Campaign({
  date: '2025.10.09',
  name: 'Bathroom',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '405410',
  startId: '37316',
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
      background: '#750000',
      color: '#FFFFFF',
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
      background: '#750000',
      color: '#FFFFFF',
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

export { c20251009 };
