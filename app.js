import { test_campaign } from './campaigns/test-campaign.js';
import shops from './config/shops.js';
import Toast from './utils/toasts.js';
import { initApp } from './main/initApp.js';
import { config } from './config.js';

try {
  initApp({
    campaigns: [test_campaign],
    shops: shops,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toast.error(error.message || 'Something went wrong. More details in console.');
}
