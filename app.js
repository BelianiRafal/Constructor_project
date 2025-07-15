import SHOPS from "./config/shops.js";
import { loaded_campaigns } from "./loaded_campaigns.js";
import { initApp } from "./main/initApp.js";
import { appjs_config as config } from "./utils/config.js";

const root = document.querySelector("#app");


try {
  initApp({
    campaigns: loaded_campaigns,
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
