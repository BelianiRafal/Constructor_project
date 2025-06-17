import { incrementId } from '../helpers/incrementId.js';
import Toast from '../utils/toasts.js';
import { getState, setState } from '../../utils/stateManager.js';

function openCampaignHandler(id) {
  const config = getState('config');
  if (!id) {
    Toast.error('No campaign ID provided. Please select a campaign.');
    return;
  }
  window.open(config.campaign_url + id, '_blank');
}

function openIssueHandler(id) {
  const config = getState('config');

  window.open(config.issue_url + id, '_blank');
}

function figmaCardHandler(url) {
  const config = getState('config');

  window.open(url, '_blank');
}

function selectCampaignHandler(ev, campaigns) {
  const selectedCampaign = campaigns.find((campaign) => campaign.startId === ev.target.value);

  if (!selectedCampaign) {
    Toast.error(`Campaign startId ${ev.target.value} not found.`);
    return;
  }
  const { startId, name, templates } = selectedCampaign;
  setState('ids', incrementId(startId));
  return { selectedCampaign, templates };
}

function handleSlugChange(ev) {
  const slugAndName = ev.target.value.split('-');
  setState('country', slugAndName[0]);
  setState('name', slugAndName[1]);
}

function handleShopChange(ev, shops) {
  const shop = shops.find((item) => item.shopId === ev.target.value);
  setState('shop', shop);
}

export {
  handleSlugChange,
  selectCampaignHandler,
  openCampaignHandler,
  handleShopChange,
  openIssueHandler,
  figmaCardHandler,
};
