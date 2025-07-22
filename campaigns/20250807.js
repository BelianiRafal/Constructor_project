import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';
import { swapImagesBySlug } from '../helpers/computeValue.js';

// prettier-ignore
const timerGifsSource = {
  CHDE: [''],
	CHFR: [''],
  FR:   [''],
  DE:   [''],
  UK:   [''],
  AT:   [''],
  ES:   [''],
  PL:   [''],
  NL:   [''],
  PT:   [''],
  IT:   [''],
  SE:   [''],
  HU:   [''],
  DK:   [''],
  CZ:   [''],
  FI:   [''],
  NO:   [''],
  SK:   [''],
  BENL: [''],
  BEFR: [''],
  RO:   [''],
};

const categories = [
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFF4E6',
    color: '#000',
    src: getImageUrl('20250807_Cat00.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 82347,
        src: getImageUrl('20250807_Cat01.png', true),
      },
      {
        id: 82395,
        src: getImageUrl('20250807_Cat02.png', true),
      },
      {
        id: 82346,
        src: getImageUrl('20250807_Cat03.png', true),
      },
      {
        id: 326853,
        src: getImageUrl('20250807_Cat04.png', true),
      },
    ],
  },
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFE3D8',
    color: '#000',
    src: getImageUrl('20250807_Cat10.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 327295,
        src: getImageUrl('20250807_Cat11.png', true),
      },
      {
        id: 327197,
        src: getImageUrl('20250807_Cat12.png', true),
      },
      {
        id: 57677,
        src: getImageUrl('20250807_Cat13.png', true),
      },
      {
        id: 130931,
        src: getImageUrl('20250807_Cat14.png', true),
      },
    ],
  },
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFF4E6',
    color: '#000',
    src: getImageUrl('20250807_Cat20.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 634160,
        src: getImageUrl('20250807_Cat21.png', true),
      },
      {
        id: 368940,
        src: getImageUrl('20250807_Cat22.png', true),
      },
      {
        id: 522855,
        src: getImageUrl('20250807_Cat23.png', true),
      },
      {
        id: 116294,
        src: getImageUrl('20250807_Cat24.png', true),
      },
    ],
  },
  {
    type: 'image-4productsgrid',
    name: 'parasols',
    background: '#FFE3D8',
    color: '#000',
    src: getImageUrl('20250807_Cat30.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      {
        id: 327295,
        src: getImageUrl('20250807_Cat31.png', true),
      },
      {
        id: 327197,
        src: getImageUrl('20250807_Cat32.png', true),
      },
      {
        id: 57677,
        src: getImageUrl('20250807_Cat33.png', true),
      },
      {
        id: 130931,
        src: getImageUrl('20250807_Cat34.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '07.08.25 - School';

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
      intro: true,
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
      intro: true,
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
