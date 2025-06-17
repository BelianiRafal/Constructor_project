import { SpinnerInit } from '../helpers/spinner/spinerOptions.js';
import { root } from '../app.js';
const state = {
  queries: {},
  country: '',
  loading: false,
  ids: {},
  translations: {},
  selectedCampaign: {},
  selectedTemplates: [],
  shop: null,
};

const setState = (key, value) => {
  state[key] = value;

  if (key === 'loading' && value === true) {
    root.innerHTML = '';
    SpinnerInit.spin(root);
  }

  if (key === 'loading' && value === false) {
    SpinnerInit.stop();
  }
};

const getState = (key) => {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
};

const getAllState = () => ({ ...state });

export { setState, getState, getAllState };
