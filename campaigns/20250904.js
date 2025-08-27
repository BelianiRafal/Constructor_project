import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/5ik4n0q6bi'],
  CHFR: ['https://gen.sendtric.com/countdown/nu4etegk9u'],
  FR:   ['https://gen.sendtric.com/countdown/vl2731il6y'],
  DE:   ['https://gen.sendtric.com/countdown/ym7tko2lk2'],
  UK:   ['https://gen.sendtric.com/countdown/a2ycjfn893'],
  AT:   ['https://gen.sendtric.com/countdown/kr5s0rezol'],
  ES:   ['https://gen.sendtric.com/countdown/8rxb86ad1p'],
  PL:   ['https://gen.sendtric.com/countdown/emk30jz2di'],
  NL:   ['https://gen.sendtric.com/countdown/vozjqfkly4'],
  PT:   ['https://gen.sendtric.com/countdown/ygd1ax2trd'],
  IT:   ['https://gen.sendtric.com/countdown/37df0iz9bd'],
  SE:   ['https://gen.sendtric.com/countdown/jebotlm5sb'],
  HU:   ['https://gen.sendtric.com/countdown/mb8q5t8p3y'],
  DK:   ['https://gen.sendtric.com/countdown/qq1c524cvl'],
  CZ:   ['https://gen.sendtric.com/countdown/9tk8702pwp'],
  FI:   ['https://gen.sendtric.com/countdown/vpq66npw4j'],
  NO:   ['https://gen.sendtric.com/countdown/qn3ywy80vy'],
  SK:   ['https://gen.sendtric.com/countdown/v5q0eadvu8'],
  BENL: ['https://gen.sendtric.com/countdown/yu5w1kwm4y'],
  BEFR: ['https://gen.sendtric.com/countdown/9j0e043epv'],
  RO:   ['https://gen.sendtric.com/countdown/z00plszwyg'],
};

const timer = {
  background: '#FD9000',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250901free.png', true),
};

const categories = [
  {
    showTitle: false,
    showPrices: true,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    showCTA: false,
    products: [
      {
        id: 579039,
        src: getImageUrl('20250904_Pic01.png', true),
      },
      {
        id: 563646,
        src: getImageUrl('20250904_Pic02.png', true),
      },
    ],
  },

  {
    showTitle: false,
    showPrices: true,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    src: getImageUrl('20250904_Cat10.png'),
    showCTA: false,
    products: [
      {
        id: 567546,
        src: getImageUrl('20250904_Pic11.png', true),
      },
      {
        id: 458391,
        src: getImageUrl('20250904_Pic12.png', true),
      },
    ],
  },

  {
    showTitle: false,
    showPrices: true,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    showParagraph: true,
    showCTA: false,
    src: getImageUrl('20250904_Cat20.png'),
    products: [
      {
        id: 621566,
        src: getImageUrl('20250904_Pic21.png', true),
      },
      {
        id: 642615,
        src: getImageUrl('20250904_Pic22.png', true),
      },
    ],
  },

  {
    showTitle: false,
    showPrices: true,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    src: getImageUrl('20250904_Cat30.png'),
    products: [
      {
        id: 637200,
        src: getImageUrl('20250904_Pic31.png', true),
      },
      {
        id: 601886,
        src: getImageUrl('20250904_Pic32.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '04.09.25 - Autumn colours';

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
    tableRange: '19',
    name: 'paragraph',
  },
  {
    tableRange: '20',
    name: 'linkWithFilter',
  },
  {
    tableRange: '24:25',
    name: 'Timer',
  },
  {
    tableRange: '21:22',
    name: 'condition',
  },
  {
    tableRange: '12:13',
    tableName: 'Voucher - 01.09.25 - Free rain cover',
    name: 'Timer',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-09-04' }),
  TopImageTitle_src: translateImage({ value: '20250904_01.png' }),

  TopImage: getImageUrl('20250904_01.png', true),

  Timer: translateLink({ value: 'content/lp25-09-01' }),

  Banner_1: translateLink({ value: 'content/lp25-08-28' }),
  Banner_1_Image: translateImage({ value: '20250828b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-08-27' }),
  Banner_2_Image: translateImage({ value: '20250827b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEBE2',
  type: 'twoSameLines',
};

const c20250904 = new entities.Campaign({
  date: '2025.09.04',
  name: 'Autumn colours',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '395166',
  startId: '36536',
  figmaUrl: 'https://www.figma.com/design/BAcX4zidq7FLJlFUXXJr5j',
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
      intro: {
        align: 'left',
        hideCTA: false,
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
      background: '#FFEBE2',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      intro: {
        align: 'left',
        hideCTA: false,
      },
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250904 };
