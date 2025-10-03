import { incrementId } from "../helpers/incrementId.js";
import { getState, setState } from "./initApp.js";

function openCampaignHandler(id) {
  const config = getState("config");
  if (!id) {
    Toastify({
      text: `Select campaign.`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
    return;
  }
  window.open(config.campaign_url + id, "_blank");
}

function openIssueHandler(id) {
  const config = getState("config");

  window.open(config.issue_url + id, "_blank");
}

function figmaCardHandler(url) {
  const config = getState("config");

  window.open(url, "_blank");
}

function selectCampaignHandler(ev, campaigns) {
  const selectedCampaign = campaigns.find(
    (campaign) => campaign.startId === ev.target.value
  );

  if (!selectedCampaign) {
    Toastify({
      text: `Campaign startId ${ev.target.value} not found.`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
    return;
  }
  const { startId, name, templates } = selectedCampaign;
  setState("ids", incrementId(startId));
  return { selectedCampaign, templates };
}

function handleSlugChange(ev) {
  const slugAndName = ev.target.value.split("-");
  setState("country", slugAndName[0]);
  setState("name", slugAndName[1]);
}

function handleShopChange(ev, shops) {
  const shop = shops.find((item) => item.shopId === ev.target.value);
  setState("shop", shop);
}

export {
  handleSlugChange,
  selectCampaignHandler,
  openCampaignHandler,
  handleShopChange,
  openIssueHandler,
  figmaCardHandler
};
