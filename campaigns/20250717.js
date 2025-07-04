import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/lw450v7acm'],
	CHFR: ['https://gen.sendtric.com/countdown/ykod236nos'],
  FR:   ['https://gen.sendtric.com/countdown/fdaylkkrw4'],
  DE:   ['https://gen.sendtric.com/countdown/d776ia0prp'],
  UK:   ['https://gen.sendtric.com/countdown/33z9gefvj5'],
  AT:   ['https://gen.sendtric.com/countdown/liwlqlrax9'],
  ES:   ['https://gen.sendtric.com/countdown/qt3nxenv50'],
  PL:   ['https://gen.sendtric.com/countdown/h8ew8rj3l9'],
  NL:   ['https://gen.sendtric.com/countdown/txzm96x9i5'],
  PT:   ['https://gen.sendtric.com/countdown/abv8hraldc'],
  IT:   ['https://gen.sendtric.com/countdown/bx27y8x57p'],
  SE:   ['https://gen.sendtric.com/countdown/owde3r07t3'],
  HU:   ['https://gen.sendtric.com/countdown/wrjv47tgg0'],
  DK:   ['https://gen.sendtric.com/countdown/4dwd7onz5o'],
  CZ:   ['https://gen.sendtric.com/countdown/lmri8ztv9m'],
  FI:   ['https://gen.sendtric.com/countdown/kpgotebzia'],
  NO:   ['https://gen.sendtric.com/countdown/vy8t53t4yn'],
  SK:   ['https://gen.sendtric.com/countdown/7p5dwunue7'],
  BENL: ['https://gen.sendtric.com/countdown/dqc2t84a0u'],
  BEFR: ['https://gen.sendtric.com/countdown/zol6683rke'],
  RO:   ['https://gen.sendtric.com/countdown/48nepmojvt'],
};

const timer = {
  background: '#FFCCB7',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250717_freebies_1.png', true),
};

const categories = [
  {
    type: 'product-grid-4-left-1-right',
    name: 'Lemon Glow',
    background: '#FEBC66',
    color: '#000',
    src: getImageUrl('20250717_Cat_1.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/dining-room-furniture/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 178967,
        src: getImageUrl('20250717_Cat_1_Prod_1.png', true),
      },
      {
        id: 442616,
        src: getImageUrl('20250717_Cat_1_Prod_2.png', true),
      },
      {
        id: 317927,
        src: getImageUrl('20250717_Cat_1_Prod_3.png', true),
      },
      {
        id: 314390,
        src: getImageUrl('20250717_Cat_1_Prod_4.png', true),
      },
    ],
  },
  {
    type: 'product-grid-4-left-1-right',
    name: 'Retro Vibes',
    background: '#FFB6A6',
    color: '#000',
    src: getImageUrl('20250717_Cat_2.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/dining-room-furniture/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 76525,
        src: getImageUrl('20250717_Cat_2_Prod_1.png', true),
      },
      {
        id: 173522,
        src: getImageUrl('20250717_Cat_2_Prod_2.png', true),
      },
      {
        id: 346545,
        src: getImageUrl('20250717_Cat_2_Prod_3.png', true),
      },
      {
        id: 211144,
        src: getImageUrl('20250717_Cat_2_Prod_4.png', true),
      },
    ],
  },
  {
    type: 'product-grid-4-left-1-right',
    name: 'Lisbon Light',
    background: '#FEBC66',
    color: '#000',
    src: getImageUrl('20250717_Cat_3.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/dining-room-furniture/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 334668,
        src: getImageUrl('20250717_Cat_3_Prod_1.png', true),
      },
      {
        id: 427307,
        src: getImageUrl('20250717_Cat_3_Prod_2.png', true),
      },
      {
        id: 372810,
        src: getImageUrl('20250717_Cat_3_Prod_3.png', true),
      },
      {
        id: 343615,
        src: getImageUrl('20250717_Cat_3_Prod_4.png', true),
      },
    ],
  },
  {
    type: 'product-grid-4-left-1-right',
    name: 'Wabi-sabi Dining',
    background: '#FFB6A6',
    color: '#000',
    src: getImageUrl('20250717_Cat_4.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/dining-room-furniture/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 405175,
        src: getImageUrl('20250717_Cat_4_Prod_1.png', true),
      },
      {
        id: 398757,
        src: getImageUrl('20250717_Cat_4_Prod_2.png', true),
      },
      {
        id: 363754,
        src: getImageUrl('20250717_Cat_4_Prod_3.png', true),
      },
      {
        id: 432762,
        src: getImageUrl('20250717_Cat_4_Prod_4.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '17.07.25 - 4 dining room styles';

const tableQueries = [
  {
    tableRange: '16',
    name: 'Intro_Paragraph',
  },
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableName: 'Voucher - 14.07.25 - Free parasol',
    tableRange: '10:11',
    name: 'Timer',
  },
  {
    tableRange: '21:24',
    name: 'categories',
  },
  {
    tableRange: '17:20',
    name: 'paragraphs',
  },
  {
    tableRange: '38:39',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink('content/lp25-07-17'),
  TopImageTitle_src: translateImage('20250717_TopImageTitle.png'),

  TopImage: getImageUrl('20250717_TopImage.gif', true),

  Timer: translateLink('content/lp25-07-14'),

  Banner_1: translateLink('content/lp25-07-10'),
  Banner_1_Image: translateImage('20250710b.png'),

  Banner_2: translateLink('content/lp25-07-09'),
  Banner_2_Image: translateImage('20250709b.png'),

	cat1a_src: getImageUrl('20250717_Cat_1a.png', true),
	cat1b_src: getImageUrl('20250717_Cat_1b.png', true),
	cat1c_src: getImageUrl('20250717_Cat_1c.png', true),
	cat1d_src: getImageUrl('20250717_Cat_1d.png', true),

	cat2a_src: getImageUrl('20250717_Cat_2a.png', true),
	cat2b_src: getImageUrl('20250717_Cat_2b.png', true),
	cat2c_src: getImageUrl('20250717_Cat_2c.png', true),
	cat2d_src: getImageUrl('20250717_Cat_2d.png', true),

	cat3a_src: getImageUrl('20250717_Cat_3a.png', true),
	cat3b_src: getImageUrl('20250717_Cat_3b.png', true),
	cat3c_src: getImageUrl('20250717_Cat_3c.png', true),
	cat3d_src: getImageUrl('20250717_Cat_3d.png', true),

	cat4a_src: getImageUrl('20250717_Cat_4a.png', true),
	cat4b_src: getImageUrl('20250717_Cat_4b.png', true),
	cat4c_src: getImageUrl('20250717_Cat_4c.png', true),
	cat4d_src: getImageUrl('20250717_Cat_4d.png', true),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEBC66',
  type: 'standard',
};

const c20250717 = new entities.Campaign({
  date: '2025.07.17',
  name: '4 dining room styles',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '380082',
  startId: '35060',
  figmaUrl: 'https://www.figma.com/design/PWZc47oMxmznlGwiFWL8zm/',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FEBC66',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.UniversalTemplate,
      css: types.CSS.NS,
      timer: timer,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FEBC66',
      },
      inside: {
        color: '#000000',
        background: '#FEBC66',
      },
      intro: {
        background: '#FEBC66',
        color: '#000000',
        align: 'center',
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FEBC66',
      color: '#000000',
      template: templates.UniversalTemplate,
      css: types.CSS.LP,
      timer: timer,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FEBC66',
      },
      inside: {
        color: '#000000',
        background: '#FEBC66',
      },
      intro: {
        background: '#FEBC66',
        color: '#000000',
        align: 'center',
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250717 };
