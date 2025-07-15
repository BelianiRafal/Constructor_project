/**
 * Manager for controlling UI element visibility
 * Implements Command pattern for UI state changes
 */
class UIVisibilityManager {
  constructor() {
    this.elements = new Map();
    this.stateHistory = [];
  }

  /**
   * Register UI elements for management
   * @param {Object} elements - Object containing DOM elements
   */
  registerElements(elements) {
    Object.entries(elements).forEach(([key, element]) => {
      if (element) {
        this.elements.set(key, element);
      }
    });
  }

  /**
   * Show element(s)
   * @param {string|Array} elementKeys - Element key(s) to show
   * @param {string} displayType - CSS display type
   */
  show(elementKeys, displayType = 'inherit') {
    this.executeVisibilityCommand(elementKeys, displayType);
  }

  /**
   * Hide element(s)
   * @param {string|Array} elementKeys - Element key(s) to hide
   */
  hide(elementKeys) {
    this.executeVisibilityCommand(elementKeys, 'none');
  }

  /**
   * Toggle element visibility
   * @param {string} elementKey - Element key to toggle
   * @param {string} showDisplayType - CSS display type when showing
   */
  toggle(elementKey, showDisplayType = 'inherit') {
    const element = this.elements.get(elementKey);
    if (!element) return;

    const isHidden = element.style.display === 'none';
    this.executeVisibilityCommand(elementKey, isHidden ? showDisplayType : 'none');
  }

  /**
   * Execute visibility command for single or multiple elements
   */
  executeVisibilityCommand(elementKeys, displayType) {
    const keys = Array.isArray(elementKeys) ? elementKeys : [elementKeys];
    
    keys.forEach(key => {
      const element = this.elements.get(key);
      if (element) {
        // Handle parent element if element is wrapped
        const targetElement = element.parentElement && 
          element.parentElement.classList.contains('select-wrapper') 
          ? element.parentElement 
          : element;
        
        targetElement.style.display = displayType;
      }
    });
  }

  /**
   * Set up initial UI state
   */
  initializeUIState() {
    // Hide all elements except campaign selector initially
    this.hide([
      'selectTemplates', 'shops_select', 'languages_select',
      'copyTemplate', 'products_management', 'campaign_links',
      'figmaCard', 'render_template'
    ]);
  }

  /**
   * Handle campaign selection UI changes
   * @param {Object} selectedCampaign - Selected campaign data
   */
  handleCampaignSelection(selectedCampaign) {
    this.show('selectTemplates');
    
    // Show figma card and campaign links if available
    if (selectedCampaign.figmaUrl) {
      this.show('figmaCard');
    } else {
      this.hide('figmaCard');
    }
    
    this.show('campaign_links', 'flex');
    
    // Show/hide issue button based on availability
    const openIssueElement = this.elements.get('openIssue');
    if (openIssueElement) {
      openIssueElement.style.display = selectedCampaign.issueCardId ? 'flex' : 'none';
    }

    // Reset other sections
    this.hide(['products_management', 'render_template', 'copyTemplate']);
  }

  /**
   * Handle template selection UI changes
   * @param {Object} selectedTemplate - Selected template data
   */
  handleTemplateSelection(selectedTemplate) {
    this.show('shops_select');

    // Show/hide buttons based on template type
    const openCampaignElement = this.elements.get('openCampaign');
    const openContentElement = this.elements.get('openContent');
    
    if (openCampaignElement) {
      openCampaignElement.style.display = selectedTemplate.type === 'newsletter' ? 'flex' : 'none';
    }
    
    if (openContentElement) {
      openContentElement.style.display = selectedTemplate.type === 'newsletter' ? 'none' : 'flex';
    }

    // Reset management sections
    this.hide(['products_management', 'render_template', 'copyTemplate']);
  }

  /**
   * Handle shop selection UI changes
   */
  handleShopSelection() {
    this.show('languages_select');
  }

  /**
   * Handle language selection UI changes
   */
  handleLanguageSelection() {
    this.show(['products_management', 'render_template'], 'flex');
    this.hide('copyTemplate');
  }

  /**
   * Handle render completion UI changes
   */
  handleRenderCompletion() {
    this.show('copyTemplate');
  }

  /**
   * Get element by key
   * @param {string} key - Element key
   * @returns {HTMLElement|null}
   */
  getElement(key) {
    return this.elements.get(key) || null;
  }

  /**
   * Check if element is visible
   * @param {string} key - Element key
   * @returns {boolean}
   */
  isVisible(key) {
    const element = this.elements.get(key);
    return element ? element.style.display !== 'none' : false;
  }
}

export default UIVisibilityManager;
