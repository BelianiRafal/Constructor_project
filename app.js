import shops from './config/shops.js';
import Toast from './utils/toasts.js';

import { initApp } from './main/initApp.js';
import { config } from './config/config.js';

// import { c20250703 } from './campaigns/20250703.js';
// import { c20250710 } from './campaigns/20250710.js';
// import { c20250717 } from './campaigns/20250717.js';
// import { c20250724 } from './campaigns/20250724.js';
// import { c20250731 } from './campaigns/20250731.js';
// import { c20250805 } from './campaigns/20250805.js';
// import { c20250807 } from './campaigns/20250807.js';
// import { c20250814 } from './campaigns/20250814.js';
// import { c20250821 } from './campaigns/20250821.js';
// import { c20250828 } from './campaigns/20250828.js';
// import { c20250904 } from './campaigns/20250904.js';
// import { c20250911_grupaA } from './campaigns/20250911_grupaA.js';
// import { c20250911_grupaB } from './campaigns/20250911_grupaB.js';
// import { c20250918 } from './campaigns/20250918.js';
// import { c20250925 } from './campaigns/20250925.js';
// import { c20251002_grupaA } from './campaigns/20251002_grupaA.js';
// import { c20251002_grupaB } from './campaigns/20251002_grupaB.js';
// import { c20251009 } from './campaigns/20251009.js';
// import { c20251016 } from './campaigns/20251016.js';
import { c20251023 } from './campaigns/20251023.js';
import { c20251030 } from './campaigns/20251030.js';
import { c20251106 } from './campaigns/20251106.js';
import { test } from './campaigns/test.js';

const root = document.querySelector('#app');

try {
  initApp({
    campaigns: [
      // c20250703,
      // c20250710,
      // c20250717,
      // c20250724,
      // c20250731,
      // c20250805,
      // c20250807,
      // c20250814,
      // c20250821,
      // c20250828,
      // c20250904,
      // c20250911_grupaA,
      // c20250911_grupaB,
      // c20250918,
      // c20250925,
      // c20251002_grupaA,
      // c20251002_grupaB,
      // c20251009,
      // c20251016,
      c20251023,
      c20251030,
      c20251106,
      test,
    ],
    shops: shops,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toast.error(error.message || 'Something went wrong. More details in console.');
}

export { root };
