import { entities } from '../entities/index.js';
import { templates } from '../templates/index.js';
import types from '../utils/types.js';
import getImageUrl from '../helpers/getImageUrl.js';

const test_campaign = new entities.Campaign({
  startId: '00000',
  name: 'Kampania Testowa',
  date: '2025.01.01',
  issueCardId: '000000',
  figmaUrl: 'https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/',
  optimizeImg: false,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.mondayRegularNslt,
      background: '#FFCCB7',
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FFCCB7',
      },
      intro: {
        background: '#FFCCB7',
        align: 'center',
      },
      categories: [
        {
          name: 'Lounge sets',
          background: '#FFCCB7',
          color: '#000000',
          src: getImageUrl('20250526Category1.png', true),
          href: 'https://www.beliani.ch/hallway-seating/',
          products: [
            {
              id: '584253', //origin.includes("HU") ? "306283" : "231605",
              src: getImageUrl('20250526Category11.png', true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
            },
            {
              id: '581094',
              src: getImageUrl('20250526Category12.png', true),
            },
            {
              id: '207163',
              src: getImageUrl('20250526Category13.png', true),
            },
            {
              id: '338035',
              src: getImageUrl('20250526Category14.png', true),
            },
          ],
        },
        {
          name: 'Dining sets',
          background: '#FD9000',
          color: '#000000',
          src: getImageUrl('20250526Category2.png', true),
          href: 'https://www.beliani.ch/storage/',
          products: [
            {
              id: '523743',
              src: getImageUrl('20250526Category21.png', true),
            },
            {
              id: '517382',
              src: getImageUrl('20250526Category22.png', true),
            },
            {
              id: '508284',
              src: getImageUrl('20250526Category23.png', true),
            },
            {
              id: '76376',
              src: getImageUrl('20250526Category24.png', true),
            },
          ],
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-14',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250303_01.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-14',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250414_gif.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-04',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250404b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-03',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250403b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '12',
          name: 'intro',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '21',
          name: 'cta',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '25:26',
          name: 'condition',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '13:20',
          name: 'category',
        },
        {
          tableId: '1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk',
          tableName: 'Templates',
          tableRange: '?majorDimension=COLUMNS',
          name: 'templates',
          tableColumns: false,
        },
        {
          tableId: '1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4',
          tableName: 'Categories',
          tableRange: '?majorDimension=COLUMNS',
          name: 'categoriesTitles',
          tableColumns: false,
        },
        {
          tableId: '1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8',
          tableName: 'Categories',
          tableRange: '?majorDimension=COLUMNS',
          name: 'categoriesLinks',
          tableColumns: false,
        },
        {
          tableId: '1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU',
          tableName: 'Header',
          tableRange: '?majorDimension=COLUMNS',
          name: 'header',
          tableColumns: false,
        },
        {
          tableId: '1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M',
          tableName: 'Footer',
          tableRange: '?majorDimension=COLUMNS',
          name: 'footer',
          tableColumns: false,
        },
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.mondayRegularNslt,
      background: '#FFCCB7',
      css: types.CSS.LP,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FFCCB7',
      },
      intro: {
        background: '#FFCCB7',
        align: 'center',
      },
      categories: [
        {
          name: 'Lounge sets',
          background: '#FFCCB7',
          color: '#000000',
          src: getImageUrl('20250526Category1.png', true),
          href: 'https://www.beliani.ch/hallway-seating/',
          products: [
            {
              id: '584253', //origin.includes("HU") ? "306283" : "231605",
              src: getImageUrl('20250526Category11.png', true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
            },
            {
              id: '581094',
              src: getImageUrl('20250526Category12.png', true),
            },
            {
              id: '207163',
              src: getImageUrl('20250526Category13.png', true),
            },
            {
              id: '338035',
              src: getImageUrl('20250526Category14.png', true),
            },
          ],
        },
        {
          name: 'Dining sets',
          background: '#FD9000',
          color: '#000000',
          src: getImageUrl('20250526Category2.png', true),
          href: 'https://www.beliani.ch/storage/',
          products: [
            {
              id: '523743',
              src: getImageUrl('20250526Category21.png', true),
            },
            {
              id: '517382',
              src: getImageUrl('20250526Category22.png', true),
            },
            {
              id: '508284',
              src: getImageUrl('20250526Category23.png', true),
            },
            {
              id: '76376',
              src: getImageUrl('20250526Category24.png', true),
            },
          ],
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-14',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250303_01.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-14',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250414_gif.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-04',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250404b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-03',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250403b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '12',
          name: 'intro',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '10',
          name: 'tit',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '21',
          name: 'cta',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '25:26',
          name: 'condition',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '14.04.25 - March Peak reminder!',
          tableRange: '13:20',
          name: 'category',
        },
        {
          tableId: '1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk',
          tableName: 'Templates',
          tableRange: '?majorDimension=COLUMNS',
          name: 'templates',
          tableColumns: false,
        },
        {
          tableId: '1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4',
          tableName: 'Categories',
          tableRange: '?majorDimension=COLUMNS',
          name: 'categoriesTitles',
          tableColumns: false,
        },
        {
          tableId: '1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8',
          tableName: 'Categories',
          tableRange: '?majorDimension=COLUMNS',
          name: 'categoriesLinks',
          tableColumns: false,
        },
        {
          tableId: '1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU',
          tableName: 'Header',
          tableRange: '?majorDimension=COLUMNS',
          name: 'header',
          tableColumns: false,
        },
        {
          tableId: '1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M',
          tableName: 'Footer',
          tableRange: '?majorDimension=COLUMNS',
          name: 'footer',
          tableColumns: false,
        },
      ],
    },
  ],
});

export { test_campaign };
