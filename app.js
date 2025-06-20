import { c20250703 } from './campaigns/20250703.js';
import shops from './config/shops.js';
import Toast from './utils/toasts.js';
import { initApp } from './main/initApp.js';
import { config } from './config.js';

const root = document.querySelector('#app');

try {
  initApp({
    campaigns: [c20250703],
    shops: shops,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toast.error(error.message || 'Something went wrong. More details in console.');
}

export { root };