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
  image: getImageUrl('20250724_freebies.png', true),
};

const categories = [
  {
    type: 'image-3productsrow-imagewithvproducts',
    name: 'cups-and-mugs',
    background: '#F8F2F2',
    color: '#000',
    src: getImageUrl('20250724_Category_1.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/kitchenware-tableware/cups-and-mugs/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 585243,
        src: getImageUrl('20250724_Category_1_Prod_1.png', true),
      },
      {
        id: 585758,
        src: getImageUrl('20250724_Category_1_Prod_2.png', true),
      },
      {
        id: 585357,
        src: getImageUrl('20250724_Category_1_Prod_3.png', true),
      },
      {
        id: 585586,
        src: getImageUrl('20250724_Category_1_Prod_4.png', true),
      },
      {
        id: 585645,
        src: getImageUrl('20250724_Category_1_Prod_5.png', true),
      },
      {
        id: 585758,
      },
      {
        id: 585645,
      },
    ],
  },
  {
    type: 'image-3productsrow-imagewithvproducts',
    name: 'pots-and-pans',
    background: '#FFE9CC',
    color: '#000',
    src: getImageUrl('20250724_Category_2.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/kitchenware-tableware/pots-and-pans/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 610760,
        src: getImageUrl('20250724_Category_2_Prod_1.png', true),
      },
      {
        id: 610759,
        src: getImageUrl('20250724_Category_2_Prod_2.png', true),
      },
      {
        id: 610702,
        src: getImageUrl('20250724_Category_2_Prod_3.png', true),
      },
      {
        id: 610682,
        src: getImageUrl('20250724_Category_2_Prod_4.png', true),
      },
      {
        id: 610547,
        src: getImageUrl('20250724_Category_2_Prod_5.png', true),
      },
      {
        id: 610702,
      },
      {
        id: 610547,
      },
    ],
  },
  {
    type: 'image-3productsrow-imagewithvproducts',
    name: 'kitchen-textiles',
    background: '#F8F2F2',
    color: '#000',
    src: getImageUrl('20250724_Category_3.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/kitchenware-tableware/kitchen-textiles/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 622850,
        src: getImageUrl('20250724_Category_3_Prod_1.png', true),
      },
      {
        id: 622621,
        src: getImageUrl('20250724_Category_3_Prod_2.png', true),
      },
      {
        id: 622735,
        src: getImageUrl('20250724_Category_3_Prod_3.png', true),
      },
      {
        id: 622793,
        src: getImageUrl('20250724_Category_3_Prod_4.png', true),
      },
      {
        id: 622813,
        src: getImageUrl('20250724_Category_3_Prod_5.png', true),
      },
      {
        id: 622850,
      },
      {
        id: 622813,
      },
    ],
  },
];

const campaignTranslationsSheet = '24.07.25 - Kitchen';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '26',
    name: 'IntroCTA',
  },
  {
    tableRange: '16',
    name: 'intro',
  },
  {
    tableRange: '45:46',
    name: 'Timer',
  },
  {
    tableRange: '17:19',
    name: 'categories',
  },
  {
    tableRange: '20:25',
    name: 'paragraphs',
  },
  {
    tableRange: '39:40',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink('content/lp25-07-24'),
  TopImageTitle_src: translateImage('20250724_TopImageTitle.png'),

  TopImage: getImageUrl('20250724_TopImage.gif', true),

  Timer: translateLink('content/lp25-07-21'),

  cat1a_src: getImageUrl('20250724_Category_1_Additional.png', true),

  cat2a_src: getImageUrl('20250724_Category_2_Additional.png', true),

  cat3a_src: getImageUrl('20250724_Category_3_Additional.png', true),

  Banner_1: translateLink('content/lp25-07-17'),
  Banner_1_Image: translateImage('20250717b.png'),

  Banner_2: translateLink('content/lp25-07-16'),
  Banner_2_Image: translateImage('20250716b.png'),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F8F2F2',
  type: 'twoSameLines',
};

const c20250724 = new entities.Campaign({
  date: '2025.07.24',
  name: 'Kitchen',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '382393',
  startId: '35412',
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
      background: '#F8F2F2',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer,
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
      background: '#F8F2F2',
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

export { c20250724 };
