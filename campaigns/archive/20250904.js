import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

// prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/pks06ednl0",
  "CHFR": "https://gen.sendtric.com/countdown/4a2a82bwa6",
  "FR": "https://gen.sendtric.com/countdown/8h3a8ijjcq",
  "DE": "https://gen.sendtric.com/countdown/aw8i7hm5ld",
  "UK": "https://gen.sendtric.com/countdown/iaae9bq0al",
  "AT": "https://gen.sendtric.com/countdown/2txub8zkx9",
  "ES": "https://gen.sendtric.com/countdown/taod1axzwj",
  "PL": "https://gen.sendtric.com/countdown/badpazmc5i",
  "NL": "https://gen.sendtric.com/countdown/s04fw5k0u7",
  "PT": "https://gen.sendtric.com/countdown/s2df4e8xjc",
  "IT": "https://gen.sendtric.com/countdown/ex2j23t696",
  "SE": "https://gen.sendtric.com/countdown/k7lqcetmiy",
  "HU": "https://gen.sendtric.com/countdown/1p6dcd3p2b",
  "DK": "https://gen.sendtric.com/countdown/a2p9h0o47r",
  "CZ": "https://gen.sendtric.com/countdown/twmkzoykld",
  "FI": "https://gen.sendtric.com/countdown/u8irwpxhza",
  "NO": "https://gen.sendtric.com/countdown/547w170fzw",
  "SK": "https://gen.sendtric.com/countdown/teslfm1u0o",
  "BENL": "https://gen.sendtric.com/countdown/34zb74m80n",
  "BEFR": "https://gen.sendtric.com/countdown/9p2kpmkblm",
  "RO": "https://gen.sendtric.com/countdown/l42kj0gczv"
}

const timer = {
  background: '#FD9000',
  color: '#000000',
  align: 'center',
  gif: timerGifsSource,
  image: getImageUrl('20250901free.png', true),
};

const categories = [
  {
    title: { show: false },
    showPrices: true,
    showParagraph: false,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    ctaElement: { show: false },
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
    title: { show: false },
    showParagraph: false,
    showPrices: true,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    src: getImageUrl('20250904_Cat10.png'),
    ctaElement: { show: false },
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
    title: { show: false },
    showPrices: true,
    showParagraph: true,
    type: 'image-4productsgrid',
    background: '#FFEBE2',
    color: '#000',
    showParagraph: true,
    ctaElement: { show: false },
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
    title: { show: false },
    showParagraph: false,
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
