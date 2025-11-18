import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import translateImage from '../helpers/translateImage.js';
import translateLink from '../helpers/translateLink.js';
import getImageUrl from '../helpers/getImageUrl.js';

const categories = [
  // PIERWSZA POMARANCZOWA
  {
    title: { show: false },
    type: 'imagewithv-2-1-products',
    background: '#FDA633',
    color: '#000',
    ctaElement: { show: false },
    href: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
    showParagraph: false,
    showPrices: true,
    products: [
      // MATILA AS LARGE IMAGE
      {
        id: 579271,
        src: getImageUrl('20251002_Pic01.png', true),
      },

      // MATILA
      {
        id: 579271,
        src: getImageUrl('20251002_Pic02e.png', true),
      },

      // PERAI
      {
        id: 423778,
        src: getImageUrl('20251002_Pic03e.png', true),
      },
    ],
  },

  // DRUGA ZWYKLA Z PARAGRAFEM
  {
    title: { show: false },
    type: 'imagewithv-2-1-products',
    background: '#F6E7E6',
    color: '#000',
    ctaElement: { show: false },
    showParagraph: true,
    href: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
    showPrices: true,
    products: [
      // NANTON AS LARGE IMAGE
      {
        id: 584579,
        src: getImageUrl('20251002_Pic11.png', true),
      },

      // ARWAD
      {
        id: 108480,
        src: getImageUrl('20251002_Pic12e.png', true),
      },

      // NANTON
      {
        id: 584579,
        src: getImageUrl('20251002_Pic13e.png', true),
      },
    ],
  },

  // TRZECIA POMARANCZOWA
  {
    title: { show: false },
    type: 'imagewithv-2-1-products',
    background: '#FDA633',
    color: '#000',
    href: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
    ctaElement: { show: false },
    showParagraph: false,
    showPrices: true,
    products: [
      // SKARA AS LARGE IMAGE
      {
        id: 516196,
        src: getImageUrl('20251002_Pic21.png', true),
      },

      // WELTON
      {
        id: 97763,
        src: getImageUrl('20251002_Pic23e.png', true),
      },

      // SKARA
      {
        id: 516196,
        src: getImageUrl('20251002_Pic22e.png', true),
      },
    ],
  },

  // CZWARTA ZWYKLA Z PARAGRAFEM
  {
    title: { show: false },
    type: 'imagewithv-2-1-products',
    background: '#F6E7E6',
    color: '#000',
    ctaElement: { show: true},
    showParagraph: true,
    href: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
    showPrices: true,
    products: [
      // TAROON AS LARGE IMAGE
      {
        id: 601886,
        src: getImageUrl('20251002_Pic31.png', true),
      },

      // TAROON
      {
        id: 601886,
        src: getImageUrl('20251002_Pic32e.png', true),
      },

      // APAYAO
      {
        id: 581895,
        src: getImageUrl('20251002_Pic33e.png', true),
      },
    ],
  },
];

const campaignTranslationsSheet = '02.10.25 - Retro';

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
    tableRange: '19:22',
    name: 'paragraphs',
  },
  {
    tableRange: '23:24',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-10-02' }),
  TopImageTitle_src: translateImage({ value: '20251002_01.png' }),

  TopImage: getImageUrl('20251002_Pic.png', true),

  Banner_1: translateLink({ value: 'content/lp25-09-25' }),
  Banner_1_Image: translateImage({ value: '20250925b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-09-24' }),
  Banner_2_Image: translateImage({ value: '20250924b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'up_to',
};

const c20251002_grupaA = new entities.Campaign({
  date: '2025.10.02',
  name: 'Retro | TEST A',
  translationsSpreadsheet: campaignTranslationsSheet,
  issueCardId: '403957',
  startId: '37039',
  figmaUrl:
    'https://www.figma.com/design/vyBbhWqUMMN27dwPcBF2Q2/2025.09.11--Sofas--Copy-?node-id=0-1&t=Ys0Ikx2xrN9feIGy-1',
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
      wrapper: types.WRAPPER, // TYLKO DLA NSLT
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.VPRODUCTS_NSLT,
      intro: {
        align: 'left',
        ctaSpace: 'newsletterBottom80px',
        ctaCategoryHref: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
        hideCTA: false,
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing Page',
      type: types.LANDINGPAGE,
      background: '#F6E7E6',
      color: '#000000',
      template: templates.TIT_TopImage_Timer_Categories,
      css: types.CSS.VPRODUCTS_LP,
      intro: {
        align: 'left',
        ctaSpace: 'newsletterBottom80px',
        ctaCategoryHref: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
        hideCTA: false,
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

export { c20251002_grupaA };
