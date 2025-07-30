import { getState } from '../../utils/stateManager.js';
import LocalStorageService from '../services/LocalStorageService.js';

/**
 * Service for handling selection restoration from localStorage
 * Implements Strategy pattern for different restoration methods
 */
class SelectionRestorer {
  constructor() {
    this.storageService = LocalStorageService.getInstance();
    this.isRestoring = false;
    this.restorationCallbacks = new Map();
  }

  /**
   * Register restoration callbacks for different elements
   * @param {string} type - Type of element (campaign, template, shop, language)
   * @param {Function} callback - Restoration callback
   */
  registerRestorationCallback(type, callback) {
    this.restorationCallbacks.set(type, callback);
  }

  /**
   * Start the restoration process
   * @param {Object} elements - DOM elements for selection
   * @returns {Promise<boolean>} Success status
   */
  async startRestoration(elements) {
    const savedSelections = this.storageService.loadSelections();
    if (!savedSelections || !savedSelections.campaignName) {
      return false;
    }

    // console.log('Starting restoration process...');
    this.isRestoring = true;

    try {
      // Wait for DOM to be ready
      await this.delay(100);

      // Restore campaign
      const campaignRestored = await this.restoreCampaign(elements.selectCampaigns, savedSelections);
      if (!campaignRestored) {
        this.isRestoring = false;
        return false;
      }

      // Restore template
      const templateRestored = await this.restoreTemplate(elements.selectTemplates, savedSelections);
      if (!templateRestored) {
        this.isRestoring = false;
        return false;
      }

      // Restore shop
      const shopRestored = await this.restoreShop(elements.shops_select, savedSelections);
      if (!shopRestored) {
        this.isRestoring = false;
        return false;
      }

      // Restore language
      await this.restoreLanguage(elements.languages_select, savedSelections);

      this.isRestoring = false;
      return true;
    } catch (error) {
      console.error('Error during restoration:', error);
      this.isRestoring = false;
      return false;
    }
  }

  /**
   * Restore campaign selection
   */
  async restoreCampaign(selectElement, savedSelections) {
    if (selectElement.options.length <= 1) return false;

    const foundIndex = this.findOptionIndex(selectElement, (option) => 
      option.text.includes(savedSelections.campaignName)
    );

    if (foundIndex > 0) {
      selectElement.selectedIndex = foundIndex;
      selectElement.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  }

  /**
   * Restore template selection
   */
  async restoreTemplate(selectElement, savedSelections) {
    if (!savedSelections.templateType || !savedSelections.templateName) return false;

    await this.waitForOptions(selectElement, 1);
    
    const savedTemplateValue = `${savedSelections.templateType}_${savedSelections.templateName}`;
    const foundIndex = this.findOptionIndex(selectElement, (option) => 
      option.value === savedTemplateValue
    );

    if (foundIndex > 0) {
      selectElement.selectedIndex = foundIndex;
      selectElement.dispatchEvent(new Event('change'));
      await this.delay(100);
      return true;
    }
    return false;
  }

  /**
   * Restore shop selection
   */
  async restoreShop(selectElement, savedSelections) {
    if (!savedSelections.shopId) return false;

    const foundIndex = this.findOptionIndex(selectElement, (option) => 
      option.value === savedSelections.shopId
    );

    if (foundIndex > 0) {
      selectElement.selectedIndex = foundIndex;
      selectElement.dispatchEvent(new Event('change'));
      await this.delay(100);
      return true;
    }
    return false;
  }

  /**
   * Restore language selection
   */
  async restoreLanguage(selectElement, savedSelections) {
    if (!savedSelections.countrySlug) return;

    await this.waitForOptions(selectElement, 0);

    const foundIndex = this.findOptionIndex(selectElement, (option) => 
      option.value.startsWith(savedSelections.countrySlug)
    );

    if (foundIndex >= 0) {
      selectElement.selectedIndex = foundIndex;
      selectElement.dispatchEvent(new Event('change'));
    }

    await this.delay(100);
  }

  /**
   * Wait for options to be available in select element
   */
  async waitForOptions(selectElement, minCount = 0) {
    return new Promise((resolve) => {
      const checkOptions = () => {
        if (selectElement.options.length > minCount) {
          resolve();
        } else {
          setTimeout(checkOptions, 50);
        }
      };
      checkOptions();
    });
  }

  /**
   * Find option index based on predicate function
   */
  findOptionIndex(selectElement, predicate) {
    for (let i = 0; i < selectElement.options.length; i++) {
      if (predicate(selectElement.options[i])) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Utility delay function
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Get current restoration status
   */
  getRestorationStatus() {
    return this.isRestoring;
  }

  /**
   * Save current selections to storage
   */
  saveCurrentSelections(skipThrottle = false) {
    if (this.isRestoring) return;

    try {
      const selectedCampaign = getState('selectedCampaign');
      const selectedTemplate = getState('template');
      const shop = getState('shop');
      const country = getState('country');

      if (!selectedCampaign) return;

      const selections = {
        campaignName: selectedCampaign.name,
        templateType: selectedTemplate?.type,
        templateName: selectedTemplate?.name,
        shopId: shop?.shopId,
        countrySlug: country
      };

      this.storageService.saveSelections(selections, skipThrottle);
    } catch (error) {
      console.error('Error saving current selections:', error);
    }
  }
}

export default SelectionRestorer;
