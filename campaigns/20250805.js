import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';
import { swapImagesBySlug, swapProductsBySlug } from '../helpers/computeValue.js';

const categories = [
  {
    type: 'freebies-grid',
    name: 'freebies',
    background: '#FFF4E6',
    color: '#000',
    // src: getImageUrl('20250731_Category_1.png'), // <--- that way image doesn't change based on country
    href: 'https://www.beliani.ch/',
    // src: translateImage('20250703_cat1.png'), // <--- that way image changes based on country
    products: [
      // product 1
      {
        id: swapProductsBySlug(
          {
            '["UK", "IT"]': 413691,
          },
          70527
        ),
        src: swapImagesBySlug(
          {
            '["UK", "IT"]': '20250805_Cat03.png',
          },
          '20250805_Cat01.png'
        ),
      },

      // product 2
      {
        id: swapProductsBySlug(
          {
            '["UK", "IT"]': 108329,
          },
          63925
        ),
        src: swapImagesBySlug(
          {
            '["UK", "IT"]': '20250805_Cat04.png',
          },
          '20250805_Cat02.png'
        ),
      },

      // product 3
      {
        id: swapProductsBySlug(
          {
            '["UK", "IT"]': 189823,
            AT: 108329,
          },
          413691
        ),
        src: swapImagesBySlug(
          {
            '["UK", "IT"]': '20250805_Cat05.png',
            AT: '20250805_Cat04.png',
          },
          '20250805_Cat03.png'
        ),
      },

      // product 4
      {
        id: swapProductsBySlug(
          {
            '["UK", "IT"]': 374533,
          },
          413691
        ),
        src: swapImagesBySlug(
          {
            '["UK", "IT"]': '20250805_Cat06.png',
          },
          '20250805_Cat01.png'
        ),
      },
    ],
  },
];

const campaignTranslationsSheet = 'Voucher -  05.08.25 - Free lamps';

const tableQueries = [
  {
    tableRange: '63:64',
    name: 'tit',
  },

  {
    tableRange: '65:70',
    name: 'offerPart',
  },

  {
    tableRange: '72:74',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-08-05' }),
  TopImageTitle_src: translateImage({ value: '20250805_01.png' }),

  TopImage: translateImage({ value: '20250805_Gif.gif' }),

  Banner_1: translateLink({ value: 'content/lp25-07-17' }),
  Banner_1_Image: translateImage({ value: '20250717b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-07-16' }),
  Banner_2_Image: translateImage({ value: '20250716b.png' }),
};

const TopImageTitle_data = {
  color: '#0',
  backgroundColor: '#FFF4E6',
  type: 'twoSameLines',
};

const c20250805 = new entities.Campaign({
  date: '2025.08.05',
  name: 'Free lamps',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '385874',
  startId: '35894',
  figmaUrl: 'https://www.figma.com/design/YYwaWdeERWV4etKNvyRg36',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#F6E7E6',
      color: '#000000',
      tit: {
        background: '#F6E7E6',
        color: '#000000',
      },
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.FreebiesNew,
      css: types.CSS.NS,
      intro: true,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      tit: {
        background: '#F6E7E6',
        color: '#000000',
      },
      background: '#F6E7E6',
      color: '#000000',
      template: templates.FreebiesNew,
      css: types.CSS.LP,
      intro: true,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20250805 };
