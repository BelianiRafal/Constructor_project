import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
} from './events.js';
import Toast from '../utils/toasts.js';
import { TemplateHandlers } from './handlers/handlers.js';
import { wrapTemplate } from '../helpers/wrapTemplate.js';
import { fetchTranslations } from '../api/fetchTranslations.js';
import { normalizeProducts } from '../utils/normalizeProducts.js';
import { isQuotaExceededError } from '../helpers/isQuotaExceededError.js';
import { computeValue } from '../helpers/computeValue.js';
import { getTrackingUrl } from '../utils/geTrackingUrl.js';
import { addParams } from '../helpers/getQueryLink.js';
import initCampaigns from './initCampaigns.js';
import { setState, getState, getAllState } from '../utils/stateManager.js';
import { root } from '../app.js';

// Import new services and managers
import LocalStorageService from './services/LocalStorageService.js';
import SelectionRestorer from './services/SelectionRestorer.js';
import UIVisibilityManager from './managers/UIVisibilityManager.js';
import EventHandlerFactory from './factories/EventHandlerFactory.js';

const jsConfetti = new JSConfetti();

/**
 * Main application initialization function
 * Refactored with proper separation of concerns and design patterns
 */
export function initApp({ campaigns, shops, config }) {
  // Initialize services and managers
  const storageService = LocalStorageService.getInstance();
  const selectionRestorer = new SelectionRestorer();
  const uiManager = new UIVisibilityManager();
  
  // Get DOM elements
  const elements = getDOMElements();
  
  // Register elements with UI manager
  uiManager.registerElements(elements);
  
  // Initialize user selections cache
  const userSelections = {
    shopIndex: null,
    languageIndex: null
  };

  // Set up initial state
  setState('config', config);
  elements.selectCampaigns.append(...initCampaigns(campaigns, config));
  uiManager.initializeUIState();

  // Initialize event handlers
  const eventHandlerFactory = new EventHandlerFactory({
    uiManager,
    selectionRestorer,
    userSelections,
    campaigns,
    shops,
    renderFunction: render
  });

  // Set up all event listeners
  setupEventListeners(elements, eventHandlerFactory, shops);

  // Attempt to restore previous selections
  restoreSelectionsOrSelectDefaults(selectionRestorer, elements);

  /**
   * Get all required DOM elements
   */
  function getDOMElements() {
    return {
      shops_select: document.querySelector('#shops'),
      languages_select: document.querySelector('#languages'),
      new_products: document.querySelector('#new_products'),
      selectCampaigns: document.querySelector('#campaigns'),
      selectTemplates: document.querySelector('#templates'),
      copyTemplate: document.querySelector('.copyTemplate'),
      openCampaign: document.querySelector('.openCampaign'),
      openContent: document.querySelector('.openContent'),
      openIssue: document.querySelector('.openIssue'),
      figmaCard: document.querySelector('.figmaCard'),
      clearStorage: document.querySelector('.clearStorage'),
      products_management: document.querySelector('#products_management'),
      campaign_links: document.querySelector('#campaign_links'),
      render_template: document.querySelector('#render_template')
    };
  }

  /**
   * Set up all event listeners
   */
  function setupEventListeners(elements, eventHandlerFactory, shops) {
    // Main selection handlers
    elements.selectCampaigns.addEventListener('change', eventHandlerFactory.createCampaignHandler());
    elements.selectTemplates.addEventListener('change', eventHandlerFactory.createTemplateHandler());
    elements.shops_select.addEventListener('change', eventHandlerFactory.createShopHandler());
    elements.languages_select.addEventListener('change', eventHandlerFactory.createLanguageHandler());
    
    // Action button handlers
    elements.render_template?.addEventListener('click', eventHandlerFactory.createRenderHandler());
    elements.copyTemplate?.addEventListener('click', eventHandlerFactory.createCopyHandler());
    
    // External link handlers
    elements.openCampaign?.addEventListener('click', (e) =>
      openCampaignHandler(getState('ids')[getState('country')])
    );
    
    elements.openIssue?.addEventListener('click', (e) => {
      if (!getState('selectedCampaign').issueCardId) {
        Toast.warn('Select campaign.');
        return;
      }
      openIssueHandler(getState('selectedCampaign').issueCardId);
    });
    
    elements.figmaCard?.addEventListener('click', (e) => {
      if (!getState('selectedCampaign').figmaUrl) {
        Toast.error('Figma url not found.');
        return;
      }
      figmaCardHandler(getState('selectedCampaign').figmaUrl);
    });

    // Utility handlers
    elements.clearStorage?.addEventListener('click', handleClearStorage);
    elements.new_products?.addEventListener('click', handleNewProducts);

    // Initialize shop options
    initializeShopOptions(elements.shops_select, shops);
  }

  /**
   * Initialize shop options in select element
   */
  function initializeShopOptions(shopsSelect, shops) {
    const options = [];
    
    shops.forEach(shop => {
      const option = document.createElement('option');
      option.value = shop.shopId;
      option.textContent = shop.seller;
      options.push(option);
    });
    
    const defaultOption = document.createElement('option');
    defaultOption.value = 'default';
    defaultOption.textContent = 'Select Shop';
    defaultOption.defaultSelected = true;
    options.push(defaultOption);
    
    shopsSelect.append(...options);
  }

  /**
   * Restore selections or select defaults
   */
  async function restoreSelectionsOrSelectDefaults(selectionRestorer, elements) {
    const restored = await selectionRestorer.startRestoration(elements);
    
    if (!restored) {
      defaultSelectFirstCampaign(elements.selectCampaigns);
    }
  }

  /**
   * Default selection of first campaign
   */
  function defaultSelectFirstCampaign(selectCampaigns) {
    if (selectCampaigns.options.length > 1) {
      selectCampaigns.selectedIndex = 1;
      selectCampaigns.dispatchEvent(new Event('change'));
    }
  }

  /**
   * Handle clear storage action
   */
  function handleClearStorage() {
    if (confirm('All data will be removed from localstorage! Are you sure?')) {
      localStorage.clear();
      Toast.success('Storage cleared. Refresh the page to start fresh.');
    }
  }

  /**
   * Handle new products action
   */
  function handleNewProducts() {
    const products = prompt('Provide products');
    if (!products) {
      return Toast.error('Input incorrect');
    }

    let newProducts;
    try {
      newProducts = JSON.parse(products);
    } catch (error) {
      console.log(error);
      Toast.error(`Products parse error: ${error.message}`);
      return;
    }

    const selectedCampaign = getState('selectedCampaign');
    const prev = localStorage.getItem('products');
    
    try {
      const prevProducts = prev ? JSON.parse(prev) : [];
      const normalizedProducts = normalizeProducts(newProducts);
      
      updateProductsInStorage(prevProducts, selectedCampaign, normalizedProducts);
    } catch (error) {
      Toast.error(`Products error: ${error.message}`);
    }
  }

  /**
   * Update products in localStorage
   */
  function updateProductsInStorage(prevProducts, selectedCampaign, normalizedProducts) {
    const existingProductIndex = prevProducts.findIndex(
      (item) => item.campaign_id === selectedCampaign.startId
    );

    if (existingProductIndex !== -1) {
      // Update existing products
      prevProducts[existingProductIndex].products = normalizedProducts;
      saveProductsToStorage(prevProducts);
    } else {
      // Add new products
      const newProductsArray = [
        ...prevProducts,
        {
          campaign_id: selectedCampaign.startId,
          products: normalizedProducts,
        }
      ];
      saveProductsToStorage(newProductsArray);
    }
  }

  /**
   * Save products to localStorage with quota handling
   */
  function saveProductsToStorage(products) {
    try {
      localStorage.setItem('products', JSON.stringify(products));
      Toast.success('Products successfully saved.');
    } catch (error) {
      if (isQuotaExceededError(error)) {
        handleQuotaExceeded(products);
      } else {
        throw error;
      }
    }
  }

  /**
   * Handle localStorage quota exceeded
   */
  function handleQuotaExceeded(products) {
    const ids = products.map((item) => item.campaign_id);
    const deleteCampaignId = prompt(
      'Memory exceeded, please enter startId to delete: ' + ids.join(',')
    );
    
    if (!deleteCampaignId || !ids.includes(deleteCampaignId)) {
      Toast.error('Invalid campaign ID provided.');
      return;
    }

    const filteredProducts = products.filter(
      (item) => item.campaign_id !== deleteCampaignId
    );
    
    try {
      localStorage.setItem('products', JSON.stringify(filteredProducts));
      Toast.success('Products successfully saved after cleanup.');
    } catch (error) {
      Toast.error('Failed to save products even after cleanup.');
    }
  }

  /**
   * Main render function - refactored for better readability
   */
  async function render() {
    const renderData = prepareRenderData();
    if (!renderData) return;

    const { country, templateToRender, selectedCampaign } = renderData;

    try {
      // Handle translations if needed
      await handleTranslations(selectedCampaign, templateToRender);

      // Prepare template data
      const templateData = await prepareTemplateData(country, templateToRender, selectedCampaign);
      
      // Render template
      const html = await templateToRender.template(templateData);
      
      // Process and display HTML
      processAndDisplayHTML(html, templateToRender);
      
    } catch (error) {
      handleRenderError(error, templateToRender);
    }
  }

  /**
   * Prepare basic render data and validate
   */
  function prepareRenderData() {
    const country = getState('country');
    const templateToRender = getState('template');
    const selectedCampaign = getState('selectedCampaign');

    if (!country) return null;

    if (!selectedCampaign) {
      Toast.error('Select campaign.');
      return null;
    }

    if (!templateToRender) {
      Toast.error('Select template.');
      return null;
    }

    return { country, templateToRender, selectedCampaign };
  }

  /**
   * Handle translations fetching if needed
   */
  async function handleTranslations(selectedCampaign, templateToRender) {
    if (!selectedCampaign.data && templateToRender.tableQueries.length > 0) {
      try {
        setState('loading', true);
        const translationsResult = await fetchTranslations({
          tableName: selectedCampaign.translationsSpreadsheet,
          tableQueries: templateToRender.tableQueries,
        });
        
        const queries = {};
        translationsResult.forEach(translation => {
          queries[translation.name] = translation.data;
        });
        
        setState('loading', false);
        setState('queries', queries);
      } catch (error) {
        setState('loading', false);
        console.log(error);
        Toast.error(error);
        throw error;
      }
    }

    // Handle fallbacks if data is provided
    if (selectedCampaign.data && templateToRender.tableQueries.length > 0) {
      const queries = {};
      templateToRender.tableQueries.forEach(translation => {
        queries[translation.name] = translation.fallback;
      });
      setState('queries', queries);
    }
  }

  /**
   * Prepare all template data
   */
  async function prepareTemplateData(country, templateToRender, selectedCampaign) {
    const slugData = getSlugData(selectedCampaign, country);
    const links = addParams({ links: templateToRender.links });
    const products = getProductsData(selectedCampaign);
    const handlers = createTemplateHandlers(products);
    const ids = getState('ids');

    return {
      ...getAllState(),
      ...templateToRender,
      background: templateToRender.background || '#ffffff',
      country,
      id: ids[country],
      categories: templateToRender.categories?.map((item) =>
        Array.isArray(item)
          ? item.map((item) => computeValue({ ...item }))
          : computeValue({ ...item })
      ),
      type: templateToRender.type,
      getProductById: handlers.getProductById,
      getCategoryTitle: handlers.getCategoryTitle,
      getCategoryLink: handlers.getCategoryLink,
      getFooter: handlers.getFooter,
      getHeader: handlers.getHeader,
      getPhrase: handlers.getPhrase,
      getCampaignData: (key) => slugData[key] || undefined,
      links: links,
      utm: getTrackingUrl({ type: templateToRender.type, id: ids[country] }),
    };
  }

  /**
   * Get slug data for campaign
   */
  function getSlugData(selectedCampaign, country) {
    if (!selectedCampaign.data) return {};

    if (country in selectedCampaign.data) {
      return selectedCampaign.data[country] || {};
    } else {
      Toast.error(`Country ${country} not found in campaign data. For ${selectedCampaign.name}.`);
      throw new Error('Country not found in campaign data');
    }
  }

  /**
   * Get products data
   */
  function getProductsData(selectedCampaign) {
    const localProducts = selectedCampaign.products;
    const LSProducts = localProducts || localStorage.getItem('products');
    
    const parsedProducts = localProducts
      ? normalizeProducts(localProducts)
      : LSProducts
      ? JSON.parse(LSProducts)
      : [];
      
    return localProducts
      ? parsedProducts
      : parsedProducts.find((item) => item.campaign_id === selectedCampaign.startId);
  }

  /**
   * Create template handlers
   */
  function createTemplateHandlers(campaignProducts) {
    return new TemplateHandlers({
      templates: getState('queries').templates,
      header: getState('queries').header,
      footer: getState('queries').footer,
      categoriesLinks: getState('queries').categoriesLinks,
      categoriesTitles: getState('queries').categoriesTitles,
      products: campaignProducts?.products,
    });
  }

  /**
   * Process and display rendered HTML
   */
  function processAndDisplayHTML(html, templateToRender) {
    const withStylesOrNo = 'css' in templateToRender 
      ? `<style>${templateToRender.css}</style>` + html 
      : html;

    const wrappedHtml = templateToRender.wrapper
      ? wrapTemplate(templateToRender.wrapper, {
          style: templateToRender.css ?? '',
          html: html,
        })
      : withStylesOrNo;
      
    setState('html', wrappedHtml);

    if (withStylesOrNo.includes('undefined')) {
      if (confirm('Do you want to render template with undefined value?')) {
        root.innerHTML = withStylesOrNo;
      } else {
        Toast.error('Error rendering. HTML code has undefined value.');
      }
    } else {
      root.innerHTML = withStylesOrNo;
    }
  }

  /**
   * Handle render errors
   */
  function handleRenderError(error, templateToRender) {
    if (error instanceof TypeError && 
        error.message.includes('templateToRender.template is not a function')) {
      Toast.error('Template not found. Cannot build.');
      console.error(
        'Template not found: The selected template does not exist or is not properly defined. ' +
        'Please check the campaign file (look for "template:") or exported templates!'
      );
    } else {
      console.log(error);
      Toast.error(`Please check console. ${error.message}`);
    }
  }
}
