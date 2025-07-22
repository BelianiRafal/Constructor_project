import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/sxet9fgqai'],
	CHFR: ['https://gen.sendtric.com/countdown/0nsyi3qgl6'],
  FR:   ['https://gen.sendtric.com/countdown/op1egcb2jp'],
  DE:   ['https://gen.sendtric.com/countdown/qf0gjvokl3'],
  UK:   ['https://gen.sendtric.com/countdown/rqky9bzqxo'],
  AT:   ['https://gen.sendtric.com/countdown/ywgju0ai9i'],
  ES:   ['https://gen.sendtric.com/countdown/yi2lfdh101'],
  PL:   ['https://gen.sendtric.com/countdown/h207rjt1bu'],
  NL:   ['https://gen.sendtric.com/countdown/a9488h6n2c'],
  PT:   ['https://gen.sendtric.com/countdown/eluk3m0ijb'],
  IT:   ['https://gen.sendtric.com/countdown/w3c5gluy47'],
  SE:   ['https://gen.sendtric.com/countdown/4s8qbppw5t'],
  HU:   ['https://gen.sendtric.com/countdown/qwnj1k5t42'],
  DK:   ['https://gen.sendtric.com/countdown/1p7396kcnu'],
  CZ:   ['https://gen.sendtric.com/countdown/ap8h483okk'],
  FI:   ['https://gen.sendtric.com/countdown/hyh6ey13mv'],
  NO:   ['https://gen.sendtric.com/countdown/yyr1kkjx39'],
  SK:   ['https://gen.sendtric.com/countdown/vip661zx0y'],
  BENL: ['https://gen.sendtric.com/countdown/nl5pt28ck0'],
  BEFR: ['https://gen.sendtric.com/countdown/anh3pa6p6g'],
  RO:   ['https://gen.sendtric.com/countdown/fa0x7geyso'],
};

const timer = {
  background: '#FFCCB7',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250731_freebies.png', true),
};

const categories = [
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFF4E6',
    color: '#000',
    src: getImageUrl('20250731_Category_1.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 82347,
        src: getImageUrl('20250731_Category_1_Prod_1.png', true),
      },
      {
        id: 82395,
        src: getImageUrl('20250731_Category_1_Prod_2.png', true),
      },
      {
        id: 82346,
        src: getImageUrl('20250731_Category_1_Prod_3.png', true),
      },
      {
        id: 326853,
        src: getImageUrl('20250731_Category_1_Prod_4.png', true),
      },
    ],
  },
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFE3D8',
    color: '#000',
    src: getImageUrl('20250731_Category_2.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 327295,
        src: getImageUrl('20250731_Category_2_Prod_1.png', true),
      },
      {
        id: 327197,
        src: getImageUrl('20250731_Category_2_Prod_2.png', true),
      },
      {
        id: 57677,
        src: getImageUrl('20250731_Category_2_Prod_3.png', true),
      },
      {
        id: 130931,
        src: getImageUrl('20250731_Category_2_Prod_4.png', true),
      },
    ],
  },
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFF4E6',
    color: '#000',
    src: getImageUrl('20250731_Category_3.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 634160,
        src: getImageUrl('20250731_Category_3_Prod_1.png', true),
      },
      {
        id: 368940,
        src: getImageUrl('20250731_Category_3_Prod_2.png', true),
      },
      {
        id: 522855,
        src: getImageUrl('20250731_Category_3_Prod_3.png', true),
      },
      {
        id: 116294,
        src: getImageUrl('20250731_Category_3_Prod_4.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '31.07.25 - Parasols for summer';

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
    tableRange: '39:40',
    name: 'Timer',
  },
  {
    tableRange: '17:19',
    name: 'paragraphs',
  },
  {
    tableRange: '34:35',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-07-31' }),
  TopImageTitle_src: translateImage({ value: '20250731_TopImageTitle.png' }),

  TopImage: getImageUrl('20250731_TopImage.png', true),

  Timer: translateLink({ value: 'content/lp25-07-28' }),

  Banner_1: translateLink({ value: 'content/lp25-07-24' }),
  Banner_1_Image: translateImage({ value: '20250724b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-07-23' }),
  Banner_2_Image: translateImage({ value: '20250723b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF4E6',
  type: 'twoSameLines',
};

const c20250731 = new entities.Campaign({
  date: '2025.07.31',
  name: 'Parasols',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '384777',
  startId: '35444',
  figmaUrl: 'https://www.figma.com/design/NL4W3nRqUe2jHQFncEmcBA',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFF4E6',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
			intro: true,
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FFF4E6',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
			intro: true,
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250731 };
