import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";
import { appjs_config as config } from "./utils/config.js";

const root = document.querySelector("#app");

import { test_campaign } from "./campaigns/test_campaign.js";

try {
  initApp({
    campaigns: [test_campaign],
    shops: SHOPS,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toast.error(
    error.message || "Something went wrong. More details in console."
  );
}

export { root };
