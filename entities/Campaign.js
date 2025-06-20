export class Campaign {
  startId;
  name;
  date;
  alarm;
  issueCardId;
  templates;
  optimizeImg;
  isArchive;
  products;
  figmaUrl;
  translationsSpreadsheet;
  constructor({
    date,
    data,
    issueCardId,
    name,
    alarm,
    products,
    isArchive,
    optimizeImg,
    startId,
    templates,
    figmaUrl,
    translationsSpreadsheet,
  }) {
    if (!Array.isArray(templates)) {
      throw new Error('templates property should be array');
    }
    if (!name) {
      throw new Error('name property should be defined for campaign');
    }
    if (!date) {
      throw new Error('date property should be defined for campaign');
    }
    if (!startId) {
      throw new Error('startId property should be defined for campaign');
    }
    if (!translationsSpreadsheet) {
      throw new Error('translationsSpreadsheet property should be defined for campaign');
    }
    // for (const template of templates) {
    //   if (template instanceof NewsletterTemplate) {
    //     continue;
    //   } else {
    //     console.log(template, " Is not instance of NewsletterTemplate");
    //     throw new Error(
    //       "Please, use NewsletterTemplate to define template in app.js. More details in console."
    //     );
    //   }
    // }
    this.date = date;
    this.issueCardId = issueCardId || null;
    this.name = name;
    this.startId = startId;
    this.templates = templates;
    this.alarm = {
      isActive: alarm?.isActive || false,
      description: alarm?.description || 'Remember about: ',
    };
    this.data = data || null;
    this.optimizeImg = optimizeImg || false;
    this.isArchive = isArchive || false;
    this.products = products || null;
    this.figmaUrl = figmaUrl || null;
    this.translationsSpreadsheet = translationsSpreadsheet || null;
  }
}
