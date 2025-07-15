import shops from './config/shops.js';
import Toast from './utils/toasts.js';

import { initApp } from './main/initApp.js';
import { config } from './config/config.js';

import { c20250703 } from './campaigns/20250703.js';
import { c20250710 } from './campaigns/20250710.js';
import { c20250717 } from './campaigns/20250717.js';
import { c20250724 } from './campaigns/20250724.js';
import { c20250731 } from './campaigns/20250731.js';

const root = document.querySelector('#app');

try {
  initApp({
    campaigns: [c20250703, c20250710, c20250717, c20250724, c20250731],
    shops: shops,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toast.error(error.message || 'Something went wrong. More details in console.');
}

export { root };