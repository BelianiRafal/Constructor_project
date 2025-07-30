/**
 * Service for handling localStorage operations
 * Implements Singleton pattern for consistent storage access
 */
class LocalStorageService {
  static instance = null;
  static STORAGE_KEY = 'constructorUserSelections';

  constructor() {
    if (LocalStorageService.instance) {
      return LocalStorageService.instance;
    }
    LocalStorageService.instance = this;
    this.saveTimeout = null;
  }

  static getInstance() {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

  /**
   * Save user selections to localStorage with throttling
   * @param {Object} selections - User selections object
   * @param {boolean} skipThrottle - Skip throttling for immediate save
   */
  saveSelections(selections, skipThrottle = false) {
    if (!selections || !selections.campaignName) return;

    const saveOperation = () => {
      try {
        const selectionsToSave = {
          campaignName: selections.campaignName || '',
          templateType: selections.templateType || '',
          templateName: selections.templateName || '',
          shopId: selections.shopId || '',
          countrySlug: selections.countrySlug || ''
        };
        
        localStorage.setItem(LocalStorageService.STORAGE_KEY, JSON.stringify(selectionsToSave));
        console.log('Selections saved to localStorage');
      } catch (error) {
        console.error('Error saving selections to localStorage:', error);
      }
    };

    if (skipThrottle) {
      if (this.saveTimeout) clearTimeout(this.saveTimeout);
      saveOperation();
    } else {
      // Throttle saves to prevent spam
      if (this.saveTimeout) clearTimeout(this.saveTimeout);
      this.saveTimeout = setTimeout(saveOperation, 300);
    }
  }

  /**
   * Load user selections from localStorage
   * @returns {Object|null} Parsed selections or null
   */
  loadSelections() {
    try {
      const savedSelectionsJSON = localStorage.getItem(LocalStorageService.STORAGE_KEY);
      if (!savedSelectionsJSON) return null;
      
      const parsed = JSON.parse(savedSelectionsJSON);
      // console.log('Loaded selections:', parsed);
      return parsed;
    } catch (error) {
      console.error('Error loading selections from localStorage:', error);
      return null;
    }
  }

  /**
   * Clear all selections from localStorage
   */
  clearSelections() {
    try {
      localStorage.removeItem(LocalStorageService.STORAGE_KEY);
      console.log('Selections cleared from localStorage');
    } catch (error) {
      console.error('Error clearing selections from localStorage:', error);
    }
  }
}

export default LocalStorageService;
