import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/1ohz6e920d'],
	CHFR: ['https://gen.sendtric.com/countdown/knmylt4zyp'],
  FR:   ['https://gen.sendtric.com/countdown/306r8yzp3c'],
  DE:   ['https://gen.sendtric.com/countdown/at9r8fm7hj'],
  UK:   ['https://gen.sendtric.com/countdown/xld9h1o9nu'], // diff time zone JJ 11.08
  AT:   ['https://gen.sendtric.com/countdown/43oljqfnix'],
  ES:   ['https://gen.sendtric.com/countdown/65c37fnnzm'],
  PL:   ['https://gen.sendtric.com/countdown/vmxjww1xcr'],
  NL:   ['https://gen.sendtric.com/countdown/ycqds2dp0d'],
  PT:   ['https://gen.sendtric.com/countdown/5il8z8k04o'], // diff time zone JJ 11.08
  IT:   ['https://gen.sendtric.com/countdown/g5uzfmtkfn'],
  SE:   ['https://gen.sendtric.com/countdown/dwtepxwkqt'],
  HU:   ['https://gen.sendtric.com/countdown/joenrzd4rt'],
  DK:   ['https://gen.sendtric.com/countdown/6puoye28de'],
  CZ:   ['https://gen.sendtric.com/countdown/u134w6ra2f'],
  FI:   ['https://gen.sendtric.com/countdown/ruz0pdxwx9'],
  NO:   ['https://gen.sendtric.com/countdown/03no8o0o1n'],
  SK:   ['https://gen.sendtric.com/countdown/l1rcn5qual'],
  BENL: ['https://gen.sendtric.com/countdown/1sqmi087es'],
  BEFR: ['https://gen.sendtric.com/countdown/cmivhpnbvr'],
  RO:   ['https://gen.sendtric.com/countdown/vcywfbee37'],
};

const timer = {
  background: '#FFCCB7',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250814_freebies.png', true),
};

const categories = [
  {
		title: { show: true },
    type: 'image-4productsgrid',
    name: 'Plant pots',
    background: '#FFDED0',
    color: '#000',
    src: getImageUrl('20250814_Cat00.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-accessories/pots-and-planters/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 378178,
        src: getImageUrl('20250814_Pic01.png', true),
      },
      {
        id: 383967,
        src: getImageUrl('20250814_Pic02.png', true),
      },
      {
        id: 404375,
        src: getImageUrl('20250814_Pic03.png', true),
      },
      {
        id: 589439,
        src: getImageUrl('20250814_Pic04.png', true),
      },
    ],
  },
  {
		title: { show: true },
    type: 'image-4productsgrid',
    name: 'Fire pits & grills',
    background: '#FF9780',
    color: '#000',
    src: getImageUrl('20250814_Cat10.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 315858,
        src: getImageUrl('20250814_Pic11.png', true),
      },
      {
        id: 200578,
        src: getImageUrl('20250814_Pic12.png', true),
      },
      {
        id: 87001,
        src: getImageUrl('20250814_Pic13.png', true),
      },
      {
        id: 85075,
        src: getImageUrl('20250814_Pic14.png', true),
      },
    ],
  },
  {
		title: { show: true },
    type: 'image-4productsgrid',
    name: 'Parasols',
    background: '#FFDED0',
    color: '#000',
    src: getImageUrl('20250814_Cat20.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 634141,
        src: getImageUrl('20250814_Pic21.png', true),
      },
      {
        id: 116295,
        src: getImageUrl('20250814_Pic22.png', true),
      },
      {
        id: 522605,
        src: getImageUrl('20250814_Pic23.png', true),
      },
      {
        id: 82349,
        src: getImageUrl('20250814_Pic24.png', true),
      },
    ],
  },
  {
		title: { show: true },
    type: 'image-4productsgrid',
    name: 'Picnic baskets',
    background: '#FF9780',
    color: '#000',
    src: getImageUrl('20250814_Cat30.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/picnic-basket/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 595691,
        src: getImageUrl('20250814_Pic31.png', true),
      },
      {
        id: 594913,
        src: getImageUrl('20250814_Pic32.png', true),
      },
      {
        id: 595749,
        src: getImageUrl('20250814_Pic33.png', true),
      },
      {
        id: 595711,
        src: getImageUrl('20250814_Pic34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '14.08.25 - Garden Accessories';

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
    tableRange: '10:11',
		tableName: 'Voucher - 12.08.25 - Free outdoor rug',
    name: 'Timer',
  },
  {
    tableRange: '23:26',
    name: 'paragraphs',
  },
  {
    tableRange: '40:41',
    name: 'condition',
  },
	{
		tableRange: '19:22',
		name: 'categories'
	}
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-08-14' }),
  TopImageTitle_src: translateImage({ value: '20250814_01.png' }),

  TopImage: getImageUrl('20250814_Pic.png', true),

  Timer: translateLink({ value: 'content/lp25-08-12' }),

  Banner_1: translateLink({ value: 'content/lp25-08-07' }),
  Banner_1_Image: translateImage({ value: '20250807b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-08-06' }),
  Banner_2_Image: translateImage({ value: '20250806b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF4E6',
  type: 'standard',
};

const c20250814 = new entities.Campaign({
  date: '2025.08.14',
  name: 'Garden Accessories',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '388061',
  startId: '35830',
  figmaUrl: 'https://www.figma.com/design/Ed3ynwSlNVlQmEsuUhaNvG',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFDED0',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
			intro: {
				align: "left",
				hideCTA: true
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
      background: '#FFDED0',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
			intro: {
				align: "left",
				hideCTA: true
			},
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250814 };
