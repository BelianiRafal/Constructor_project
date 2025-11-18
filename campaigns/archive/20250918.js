import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/j4ek1nae2m",
  "CHFR": "https://gen.sendtric.com/countdown/o0ovyrecap",
  "FR": "https://gen.sendtric.com/countdown/7qgq104rtr",
  "DE": "https://gen.sendtric.com/countdown/m268updgmh",
  "UK": "https://gen.sendtric.com/countdown/2232gg0d9j",
  "AT": "https://gen.sendtric.com/countdown/w16hk14l4l",
  "ES": "https://gen.sendtric.com/countdown/fmw5mnww8y",
  "PL": "https://gen.sendtric.com/countdown/rs40rkhx56",
  "NL": "https://gen.sendtric.com/countdown/8tjmdvmjty",
  "PT": "https://gen.sendtric.com/countdown/lw5md2h2yj",
  "IT": "https://gen.sendtric.com/countdown/i12s2t7meh",
  "SE": "https://gen.sendtric.com/countdown/iv931mr71i",
  "HU": "https://gen.sendtric.com/countdown/2ilb1ta121",
  "DK": "https://gen.sendtric.com/countdown/yargvepjyt",
  "CZ": "https://gen.sendtric.com/countdown/kw3zx7ogoq",
  "FI": "https://gen.sendtric.com/countdown/66dzp1joqe",
  "NO": "https://gen.sendtric.com/countdown/f8g0lzs91x",
  "SK": "https://gen.sendtric.com/countdown/lig4zuwhwi",
  "BENL": "https://gen.sendtric.com/countdown/hnsdzpuzlj",
  "BEFR": "https://gen.sendtric.com/countdown/2cnvpwrnaf",
  "RO": "https://gen.sendtric.com/countdown/033wwa6m8j"
}

const timer = {
  spaceAfterClass: 'newsletterBottom35px',
  background: '#FFCCB7',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250918_free.png', true),
};

const categories = [
  {
    type: 'chujWie',
    background: '#FFEBE2',
    color: '#000',
    products: [
      // LIEKSA AS INTRO_1:
      {
        id: 614870,
        src: getImageUrl('20250918_Pic01.png', true),
      },

      // BYSKE AS INTRO_1:
      {
        id: 588664,
        src: getImageUrl('20250918_Pic02.png', true),
      },

      // LIEKSA:
      {
        id: 614870,
        src: getImageUrl('20250918_Pic03.png', true),
      },

      // BYSKE:
      {
        id: 588664,
        src: getImageUrl('20250918_Pic04.png', true),
      },

      // FERGUS:
      {
        id: 318594,
        src: getImageUrl('20250918_Pic05.png', true),
      },
    ],
  },

  {
    type: 'chujWie',
    background: '#FFEBE2',
    color: '#000',
    products: [
      // SUNFISH AS INTRO_1:
      {
        id: 526505,
        src: getImageUrl('20250918_Pic11.png', true),
      },

      // LYNEY AS INTRO_1:
      {
        id: 631600,
        src: getImageUrl('20250918_Pic12.png', true),
      },

      // LYNEY:
      {
        id: 631600,
        src: getImageUrl('20250918_Pic13.png', true),
      },

      // MASCOTA:
      {
        id: 642615,
        src: getImageUrl('20250918_Pic14.png', true),
      },

      // SUNFISH:
      {
        id: 526505,
        src: getImageUrl('20250918_Pic15.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '18.09.25 - Brown';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '16:17',
    name: 'paragraphs',
  },
  {
    tableRange: '18',
    name: 'linkWithFilter_1',
  },
  {
    tableRange: '19',
    name: 'linkWithFilter_2',
  },
  {
    tableRange: '20:21',
    name: 'condition',
  },
  {
    tableRange: '10:11',
    tableName: 'Voucher - 15.09.25 - Free piece of furniture',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-09-18' }),
  TopImageTitle_src: translateImage({ value: '20250918_01.png' }),

  TopImage: getImageUrl('20250918_Pic.png', true),

  Timer: translateLink({ value: 'content/lp25-09-15' }),

  Banner_1: translateLink({ value: 'content/lp25-09-11' }),
  Banner_1_Image: translateImage({ value: '20250911b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-09-10' }),
  Banner_2_Image: translateImage({ value: '20250910b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEBE2',
  type: 'twoSameLines',
};

const c20250918 = new entities.Campaign({
  date: '2025.09.18',
  name: 'Brown',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '398950',
  startId: '36856',
  figmaUrl:
    'https://www.figma.com/design/EmuUuZkzq2om4DjoVLEG3t/Newsletter-Brown---Thursday-2025.09.18--Copy-?node-id=12001-78&t=9IonbLIHZ2aJlBvf-1',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFEBE2',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FFEBE2',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250918 };
