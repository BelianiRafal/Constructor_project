import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

const categories = [
  {
    // type: 'inspirational-0703',
    name: 'garden-furniture',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250710_Cat_1.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    href: 'https://www.beliani.ch/garden-furniture/',
  },
  {
    // type: 'inspirational-0703',
    name: 'garden-dining-sets',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250710_Cat_2.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    products: [
      {
        id: 571884,
        src: getImageUrl('c20250710_cat1.png', true),
      },
      {
        id: 383878,
        src: getImageUrl('20250710_Cat_1_Prod_2x.png', true),
      },
      {
        id: 180762,
        src: getImageUrl('20250710_Cat_1_Prod_3.png', true),
      },
    ],
  },
  {
    // type: 'inspirational-0703',
    name: 'garden-benches',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250710_Cat_3.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/',
    products: [
      {
        id: 158160,
        src: getImageUrl('c20250710_cat2.png', true),
      },
      {
        id: 198618,
        src: getImageUrl('20250710_Cat_2_Prod_2x.png', true),
      },
      {
        id: 320746,
        src: getImageUrl('20250710_Cat_2_Prod_3.png', true),
      },
    ],
  },
  {
    // type: 'inspirational-0703',
    name: 'garden-accessories',
    background: '#FFEFD9',
    color: '#000',
    // src: getImageUrl('20250710_cat4.png'), // <--- that way image doesn't change based on country
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
    products: [
      {
        id: 584780,
        src: getImageUrl('c20250710_cat3.png', true),
      },
      {
        id: 618043,
        src: getImageUrl('20250710_Cat_3_Prod_2x.png', true),
      },
      {
        id: 558868,
        src: getImageUrl('20250710_Cat_3_Prod_3.png', true),
      },
      {
        id: 611761,
        src: getImageUrl('20250710_Cat_3_Prod_4.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '10.07.25 - Secret garden';

const tableQueries = [
  {
    tableRange: '14',
    name: 'intro',
  },
  {
    tableRange: '11:12',
    name: 'TopImageTitle',
  },
  {
    tableName: 'Voucher - 07.07.25 - Free animal rug',
    tableRange: '12:13',
    name: 'timer',
  },
  {
    tableRange: '15:17',
    name: 'paragraphs',
  },
  {
    tableRange: '36:37',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink('content/lp25-07-10'),
  TopImageTitle_src: translateImage('20250710_TopImageTitle.png'),

  TopImage: getImageUrl('c20250710_topimage.png', true),
  TopImage2: getImageUrl('20250710_TopImage_2x.png', true),

	TopImage2_Text: translateImage('20250710_intro_text.png'),

	Paragraph_1: translateImage('20250710_p1_text.png'),
	Paragraph_2: translateImage('20250710_p2_text.png'),
	Paragraph_3: translateImage('20250710_p3_text.png'),

  Timer: translateLink('content/lp25-07-07'),

  Banner_1: translateLink('content/lp25-07-03'),
  Banner_1_Image: translateImage('20250703b.png'),

  Banner_2: translateLink('content/lp25-07-02'),
  Banner_2_Image: translateImage('20250702b.png'),
};
const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEFD9',
  type: 'twoSameLines',
};

const c20250710 = new entities.Campaign({
  date: '2025.07.10',
  name: 'Secret Garden',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '377812',
  startId: '35092',
  figmaUrl: 'https://www.figma.com/design/johpGIL5cEROIvulWkdxgW',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFEFD9',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.bDoubleTopImage,
      css: types.CSS.NS,
      
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FFEFD9',
      },
      inside: {
        color: '#000000',
        background: '#FFEFD9',
      },
      intro: {
        background: '#FFEFD9',
        color: '#000000',
        align: 'left',
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#FFEFD9',
      color: '#000000',
      template: templates.bDoubleTopImage,
      css: types.CSS.LP,
      
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FFEFD9',
      },
      inside: {
        color: '#000000',
        background: '#FFEFD9',
      },
      intro: {
        background: '#FFEFD9',
        color: '#000000',
        align: 'left',
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250710 };
