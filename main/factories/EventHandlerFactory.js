import {
  selectCampaignHandler,
  openCampaignHandler,
  handleSlugChange,
  openIssueHandler,
  handleShopChange,
  figmaCardHandler,
} from '../events.js';
import { setState, getState } from '../../utils/stateManager.js';
import renderAvailableTemplates from '../renderAvailableTemplates.js';
import Toast from '../../utils/toasts.js';
import { root } from '../../app.js';

/**
 * Factory for creating event handlers
 * Implements Factory pattern for consistent event handler creation
 */
class EventHandlerFactory {
  constructor(dependencies) {
    this.uiManager = dependencies.uiManager;
    this.selectionRestorer = dependencies.selectionRestorer;
    this.userSelections = dependencies.userSelections;
    this.campaigns = dependencies.campaigns;
    this.shops = dependencies.shops;
    this.renderFunction = dependencies.renderFunction;
  }

  /**
   * Create campaign selection handler
   */
  createCampaignHandler() {
    return (ev) => {
      if (ev.target.value === 'default') return;

      const { selectedCampaign, templates } = selectCampaignHandler(ev, this.campaigns);

      root.innerHTML = '';
      
      const selectTemplates = this.uiManager.getElement('selectTemplates');
      selectTemplates.innerHTML = '<option value="default">Select template</option>';
      selectTemplates.append(...renderAvailableTemplates(templates));

      setState('selectedTemplates', templates);
      setState('selectedCampaign', selectedCampaign);
      setState('optimizeImg', selectedCampaign.optimizeImg || false);

      this.uiManager.handleCampaignSelection(selectedCampaign);

      // Auto-select first template if no saved selections
      this.autoSelectFirstTemplate(selectTemplates, templates);
      
      // Restore shop/language selections if available
      this.restoreShopLanguageSelections();
    };
  }

  /**
   * Create template selection handler
   */
  createTemplateHandler() {
    return (ev) => {
      if (ev.target.value === 'default') return;

      this.setSelectedTemplate(ev);

      const selectedTemplates = getState('selectedTemplates');
      const selectedTemplate = selectedTemplates.find(
        (template) => template.type + '_' + template.name === ev.target.value
      );

      if (selectedTemplate) {
        this.uiManager.handleTemplateSelection(selectedTemplate);
      }

      // Handle shop restoration or auto-selection
      this.handleShopSelectionLogic();
    };
  }

  /**
   * Create shop selection handler
   */
  createShopHandler() {
    return (ev) => {
      if (ev.target.value === 'default') return;

      this.userSelections.shopIndex = ev.target.selectedIndex;
      handleShopChange(ev, this.shops);
      
      const shop = getState('shop');
      this.populateLanguageOptions(shop);
      
      this.uiManager.handleShopSelection();

      // Auto-select first language if not restoring
      if (!this.selectionRestorer.getRestorationStatus() && shop.languages.length > 0) {
        const languagesSelect = this.uiManager.getElement('languages_select');
        languagesSelect.selectedIndex = 0;
        languagesSelect.dispatchEvent(new Event('change'));
      }

      this.selectionRestorer.saveCurrentSelections();
    };
  }

  /**
   * Create language selection handler
   */
  createLanguageHandler() {
    return (ev) => {
      if (ev.target.value === 'default') return;

      this.userSelections.languageIndex = ev.target.selectedIndex;
      handleSlugChange(ev);

      this.uiManager.handleLanguageSelection();
      this.selectionRestorer.saveCurrentSelections();
    };
  }

  /**
   * Create render button handler
   */
  createRenderHandler() {
    return () => {
      this.renderFunction();
      this.uiManager.handleRenderCompletion();
    };
  }

  /**
   * Create copy template handler
   */
  createCopyHandler() {
    return () => {
      const html = getState('html');
      if (!html) {
        Toast.error('Render HTML.');
        return;
      }

      if (getState('config')?.confetti) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
          emojiSize: 20,
          confettiNumber: 80,
        });
      }

      navigator.clipboard.writeText(html);
    };
  }

  /**
   * Helper method to auto-select first template
   */
  autoSelectFirstTemplate(selectTemplates, templates) {
    if (templates.length > 0) {
      const savedSelections = this.selectionRestorer.storageService.loadSelections();
      if (!savedSelections || !savedSelections.templateType || !savedSelections.templateName) {
        selectTemplates.selectedIndex = 1;
        selectTemplates.dispatchEvent(new Event('change'));
      }
    }
  }

  /**
   * Helper method to restore shop/language selections
   */
  restoreShopLanguageSelections() {
    if (this.userSelections.shopIndex !== null) {
      const shopsSelect = this.uiManager.getElement('shops_select');
      this.uiManager.show('shops_select');
      
      shopsSelect.selectedIndex = this.userSelections.shopIndex;
      shopsSelect.dispatchEvent(new Event('change'));

      if (this.userSelections.languageIndex !== null) {
        setTimeout(() => {
          const languagesSelect = this.uiManager.getElement('languages_select');
          if (languagesSelect.options.length > this.userSelections.languageIndex) {
            languagesSelect.selectedIndex = this.userSelections.languageIndex;
            languagesSelect.dispatchEvent(new Event('change'));
          }
        }, 100);
      }
    }
  }

  /**
   * Helper method to handle shop selection logic
   */
  handleShopSelectionLogic() {
    const shopsSelect = this.uiManager.getElement('shops_select');
    
    if (this.userSelections.shopIndex !== null && 
        shopsSelect.options.length > this.userSelections.shopIndex) {
      shopsSelect.selectedIndex = this.userSelections.shopIndex;
      shopsSelect.dispatchEvent(new Event('change'));
      return;
    }

    // Auto-select first shop if no saved selections
    if (shopsSelect.options.length > 1) {
      const savedSelections = this.selectionRestorer.storageService.loadSelections();
      if (!savedSelections || !savedSelections.shopId) {
        shopsSelect.selectedIndex = 1;
        shopsSelect.dispatchEvent(new Event('change'));
      }
    }
  }

  /**
   * Helper method to populate language options
   */
  populateLanguageOptions(shop) {
    const languagesSelect = this.uiManager.getElement('languages_select');
    languagesSelect.innerHTML = '';
    
    const langOptions = [];
    
    // Add language options
    shop.languages.forEach(({ language }) => {
      const option = document.createElement('option');
      option.value = language.slug + '-' + language.name;
      option.textContent = language.name;
      option.style.textTransform = 'capitalize';
      langOptions.push(option);
    });

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = 'default';
    defaultOption.textContent = 'Select language';
    langOptions.push(defaultOption);
    
    languagesSelect.append(...langOptions);
  }

  /**
   * Helper method to set selected template
   */
  setSelectedTemplate(ev) {
    const selectedTemplates = getState('selectedTemplates');
    const selectedTemplate = selectedTemplates.find(
      (template) => template.type + '_' + template.name === ev.target.value
    );
    
    if (!selectedTemplate) {
      Toast.error(`Template ${ev.target.value} not found.`);
      return;
    }

    setState('template', selectedTemplate);
    
    if (!this.selectionRestorer.getRestorationStatus()) {
      this.selectionRestorer.saveCurrentSelections();
    }
  }
}

export default EventHandlerFactory;
