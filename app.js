import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";
import { appjs_config as config } from "./utils/config.js";


import { test_campaign } from "./campaigns/test_campaign.js";

try {
  initApp({
    campaigns: [test_campaign],
    shops: SHOPS,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toastify({
    text: error.message || "Something went wrong. More details in console.",
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
