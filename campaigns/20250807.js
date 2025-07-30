import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';
import { swapImagesBySlug } from '../helpers/computeValue.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: ['https://gen.sendtric.com/countdown/4dggc1fwey'],
	CHFR: ['https://gen.sendtric.com/countdown/nhm0wohx9k'],
  FR:   ['https://gen.sendtric.com/countdown/95hjfozzyb'],
  DE:   ['https://gen.sendtric.com/countdown/e7vfq1ob5l'],
  UK:   ['https://gen.sendtric.com/countdown/ac1md62j4i'],
  AT:   ['https://gen.sendtric.com/countdown/tx4dqxbqe6'],
  ES:   ['https://gen.sendtric.com/countdown/iw3c7u1w84'],
  PL:   ['https://gen.sendtric.com/countdown/m8qqjcwryb'],
  NL:   ['https://gen.sendtric.com/countdown/qkl399r3f0'],
  PT:   ['https://gen.sendtric.com/countdown/81kkg3tlbt'],
  IT:   ['https://gen.sendtric.com/countdown/nj5jikhk1w'],
  SE:   ['https://gen.sendtric.com/countdown/z91daybc5s'],
  HU:   ['https://gen.sendtric.com/countdown/j07zp45xrm'],
  DK:   ['https://gen.sendtric.com/countdown/zt461n3jwa'],
  CZ:   ['https://gen.sendtric.com/countdown/6w9hzzvmyo'],
  FI:   ['https://gen.sendtric.com/countdown/upeh49s19b'],
  NO:   ['https://gen.sendtric.com/countdown/up73q7fbm2'],
  SK:   ['https://gen.sendtric.com/countdown/owoaesyyu8'],
  BENL: ['https://gen.sendtric.com/countdown/a2p6w4x9ow'],
  BEFR: ['https://gen.sendtric.com/countdown/bew3xh3xea'],
  RO:   ['https://gen.sendtric.com/countdown/krlfkr1t11'],
};

const categories = [
  {
    type: 'image-4productsgrid',
    name: 'desks',
		showTitle: true,
    background: '#FFDCCD',
    color: '#000',
    src: getImageUrl('20250807_Cat00.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/office-furniture/desks-eng/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 608908,
        src: getImageUrl('20250807_Cat01.png', true),
      },
      {
        id: 234488,
        src: getImageUrl('20250807_Cat02.png', true),
      },
      {
        id: 234818,
        src: getImageUrl('20250807_Cat03.png', true),
      },
      {
        id: 391674,
        src: getImageUrl('20250807_Cat04.png', true),
      },
    ],
  },

  {
    type: 'image-4productsgrid',
    name: 'chairs',
    background: '#F6E7E6',
    color: '#000',
		showTitle: true,
    src: getImageUrl('20250807_Cat10.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/office-furniture/office-chairs/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 631276,
        src: getImageUrl('20250807_Cat11.png', true),
      },
      {
        id: 631893,
        src: getImageUrl('20250807_Cat12.png', true),
      },
      {
        id: 611647,
        src: getImageUrl('20250807_Cat13.png', true),
      },
      {
        id: 593169,
        src: getImageUrl('20250807_Cat14.png', true),
      },
    ],
  },

  {
    type: 'image-4productsgrid',
    name: 'cabinets',
    background: '#FFDCCD',
    color: '#000',
		showTitle: true,
    src: getImageUrl('20250807_Cat20.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/storage-units-and-cabinets/office-cabinet/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 359217,
        src: getImageUrl('20250807_Cat21.png', true),
      },
      {
        id: 612939,
        src: getImageUrl('20250807_Cat22.png', true),
      },
      {
        id: 613299,
        src: getImageUrl('20250807_Cat23.png', true),
      },
      {
        id: 314139,
        src: getImageUrl('20250807_Cat24.png', true),
      },
    ],
  },

  {
    type: 'image-4productsgrid',
    name: 'lamps',
		showTitle: true,
    background: '#F6E7E6',
    color: '#000',
    src: getImageUrl('20250807_Cat30.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/office-furniture/office-lamps/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 380833,
        src: getImageUrl('20250807_Cat31.png', true),
      },
      {
        id: 321675,
        src: getImageUrl('20250807_Cat32.png', true),
      },
      {
        id: 72220,
        src: getImageUrl('20250807_Cat33.png', true),
      },
      {
        id: 35510,
        src: getImageUrl('20250807_Cat34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '07.08.25 - School';

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
    tableRange: '47:48',
    name: 'Timer',
  },
  {
    tableRange: '19:22',
    name: 'paragraphs',
  },
	{
		tableRange: '23:26',
		name: 'categories',
	},
  {
    tableRange: '40:41',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-08-07' }),
  TopImageTitle_src: translateImage({ value: '20250807_01.png' }),

  TopImage: getImageUrl('20250807_Pic.png', true),

  Timer: translateLink({ value: 'content/lp25-08-05' }),

  Banner_1: translateLink({ value: 'content/lp25-07-31' }),
  Banner_1_Image: translateImage({ value: '20250731b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-07-24' }),
  Banner_2_Image: translateImage({ value: '20250724b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF4E6',
  type: 'twoSameLines',
};

const c20250807 = new entities.Campaign({
  date: '2025.08.07',
  name: 'School',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '387131',
  startId: '35734',
  figmaUrl: 'https://www.figma.com/design/AY1NxKSYNIqRUwmSx5taF5/',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFDCCD',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
			intro: {
				align: "left",
				hideCTA: true
			},
      timer: {
        background: '#F6E7E6',
        color: '#000000',
        align: 'center',
        gif: timerGifsSource,
        // swapImagesBySlug({ '["DE","CHFR","PL"]': "euro.jpg", "UK": "british.jpg" }, "default.jpg")
        image: swapImagesBySlug(
          { '["UK","IT"]': 'ukit20250807_free.png', AT: 'at20250807_free.png' },
          '20250807_free.png'
        ),
        // image: swapImagesBySlug({"PL": "20250807_free.png"}, "20250807_free.png"),
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FFDCCD',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
			intro: {
				align: "left",
				hideCTA: true
			},
      timer: {
        background: '#F6E7E6',
        color: '#000000',
        align: 'center',
        gif: timerGifsSource,
        // swapImagesBySlug({ '["DE","CHFR","PL"]': "euro.jpg", "UK": "british.jpg" }, "default.jpg")
        image: swapImagesBySlug(
          { '["UK","IT"]': 'ukit20250807_free.png', AT: 'at20250807_free.png' },
          '20250807_free.png'
        ),
        // image: swapImagesBySlug({"PL": "20250807_free.png"}, "20250807_free.png"),
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250807 };
