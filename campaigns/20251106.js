import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

const categories = [
  // Kids beds
  {
    name: 'Kids beds',
    href: 'https://www.beliani.ch/children-room/kids-beds/',
    title: { show: true, align: 'left' },
    type: 'image-4productsgrid',
    background: '#FFE8DE',
    color: '#000000',
    ctaElement: { show: true },
    showParagraph: true,
    src: getImageUrl('20251106_Cat00.png', true),
    showWhiteLine: false,
    products: [
      // PETIVILLE
      {
        id: '560617',
        src: getImageUrl('20251106_Pic01.png', true),
      },
      // GUNNAR
      {
        id: '646727',
        src: getImageUrl('20251106_Pic02.png', true),
      },
      // LUNERAY
      {
        id: '647370',
        src: getImageUrl('20251106_Pic03.png', true),
      },
      // MAILLES
      {
        id: '618591',
        src: getImageUrl('20251106_Pic04.png', true),
      },
    ],
  },

  // Kids storage
  {
    name: 'Kids storage',
    href: 'https://www.beliani.ch/children-room/kids-storage/',
    title: { show: true, align: 'left' },
    type: 'image-4productsgrid',
    background: '#FF9780',
    color: '#000000',
    ctaElement: { show: true },
    showParagraph: true,
    showWhiteLine: false,
    src: getImageUrl('20251106_Cat10.png', true),
    products: [
      // LILOET
      {
        id: '575287',
        src: getImageUrl('20251106_Pic11.png', true),
      },
      // VIRDEN
      {
        id: '650315',
        src: getImageUrl('20251106_Pic12.png', true),
      },
      // CANEY
      {
        id: '574696',
        src: getImageUrl('20251106_Pic13.png', true),
      },
      // RUPERT
      {
        id: '525454',
        src: getImageUrl('20251106_Pic14.png', true),
      },
    ],
  },

  // Kids chairs
  {
    name: 'Kids chairs',
    href: 'https://www.beliani.ch/children-room/kids-chairs/',
    title: { show: true, align: 'left' },
    type: 'image-4productsgrid',
    background: '#FFE8DE',
    color: '#000000',
    ctaElement: { show: true },
    showParagraph: true,
    showWhiteLine: false,
    src: getImageUrl('20251106_Cat20.png', true),
    products: [
      // OMBO
      {
        id: '610605',
        src: getImageUrl('20251106_Pic21.png', true),
      },
      // LULEA
      {
        id: '428743',
        src: getImageUrl('20251106_Pic22.png', true),
      },
      // MARIBO
      {
        id: '574053',
        src: getImageUrl('20251106_Pic23.png', true),
      },
      // AMPOLLINO
      {
        id: '522245',
        src: getImageUrl('20251106_Pic24.png', true),
      },
    ],
  },

  // Kids rugs
  {
    name: 'Kids rugs',
    href: 'https://www.beliani.ch/children-room/kids-rugs/',
    title: { show: true, align: 'left' },
    type: 'image-4productsgrid',
    background: '#FF9780',
    color: '#000000',
    ctaElement: { show: true },
    showParagraph: true,
    showWhiteLine: false,
    src: getImageUrl('20251106_Cat30.png', true),
    products: [
      // HONAZ
      {
        id: '196715',
        src: getImageUrl('20251106_Pic31.png', true),
      },
      // KHIDARI
      {
        id: '461512',
        src: getImageUrl('20251106_Pic32.png', true),
      },
      // GHARTA
      {
        id: '460225',
        src: getImageUrl('20251106_Pic33.png', true),
      },
      // SIGLI
      {
        id: '400222',
        src: getImageUrl('20251106_Pic34.png', true),
      },
    ],
  },
];

// // prettier-ignore
const timerGifsSource = {
  "CHDE": "https://gen.sendtric.com/countdown/i8q4ntzv6v",
  "CHFR": "https://gen.sendtric.com/countdown/7oxg1lryx8",
  "FR": "https://gen.sendtric.com/countdown/l4ux7u1p4n",
  "DE": "https://gen.sendtric.com/countdown/1qak2owbtw",
  "UK": "https://gen.sendtric.com/countdown/o3i9qvq1tw",
  "AT": "https://gen.sendtric.com/countdown/nu93d5w3ef",
  "ES": "https://gen.sendtric.com/countdown/4jjfg350o3",
  "PL": "https://gen.sendtric.com/countdown/1k83opzz2h",
  "NL": "https://gen.sendtric.com/countdown/2egohralr7",
  "PT": "https://gen.sendtric.com/countdown/mz4hjk84dm",
  "IT": "https://gen.sendtric.com/countdown/ykfdfyiggj",
  "SE": "https://gen.sendtric.com/countdown/k76mf8levb",
  "HU": "https://gen.sendtric.com/countdown/71fduzb0mi",
  "DK": "https://gen.sendtric.com/countdown/pfg2a1dy6b",
  "CZ": "https://gen.sendtric.com/countdown/2qxhnbfxq1",
  "FI": "https://gen.sendtric.com/countdown/xvn88x76ho",
  "NO": "https://gen.sendtric.com/countdown/w7ergzc5b5",
  "SK": "https://gen.sendtric.com/countdown/jtr7d646gt",
  "BENL": "https://gen.sendtric.com/countdown/fjfrpxum9g",
  "BEFR": "https://gen.sendtric.com/countdown/j98psboi77",
  "RO": "https://gen.sendtric.com/countdown/1o98wa900x"
}

const timer = {
  background: '#750000',
  color: '#ffffff',
  align: 'center',
  spaceAfterClass: 'newsletterBottom35px',
  gif: timerGifsSource,
  image: getImageUrl('20251106free.png', true),
};

const campaignTranslationsSheet = '06.11.25 - Kids room';

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
    tableRange: '13:14',
    tableName: 'Voucher - 03.11.25 - Free electrical fireplace',
    name: 'Timer',
  },
  {
    tableRange: '17:20',
    name: 'categories',
  },
  {
    tableRange: '21:24',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-11-06' }),
  TopImageTitle_src: translateImage({ value: '20251106_01.png' }),

  TopImage: getImageUrl('20251106_Pic.png', true),

  Timer: translateLink({ value: 'content/lp25-11-03' }),

  Banner_1: translateLink({ value: 'content/lp25-10-30' }),
  Banner_1_Image: translateImage({ value: '20251030b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-10-29' }),
  Banner_2_Image: translateImage({ value: '20251029b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE8DE',
  type: 'twoSameLines',
};

const c20251106 = new entities.Campaign({
  date: '2025.11.06',
  name: 'Kids room',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '414401',
  startId: '38308',
  figmaUrl: 'https://www.figma.com/design/OgmvlhPPGeZyNe8AnO59QH',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      background: '#FFE8DE',
      color: '#000000',
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.NS,
      intro: {
        align: 'left',
        ctaSpace: 'newsletterBottom35px',
        ctaCategoryHref: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
        hideCTA: true,
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
      background: '#FFE8DE',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.LP,
      intro: {
        align: 'left',
        ctaSpace: 'newsletterBottom35px',
        ctaCategoryHref: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
        hideCTA: true,
      },
      timer: timer,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20251106 };
