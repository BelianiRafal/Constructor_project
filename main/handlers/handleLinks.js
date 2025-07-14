import { addParams } from '../../helpers/getQueryLink.js';
import { getState } from '../../utils/stateManager.js';

export function handleLinks(state) {
  return getState('template') === 'newsletter'
    ? addParams(getState('links'), getState('ids')[getState('country')], getState('country'))
    : getState('links');
}
