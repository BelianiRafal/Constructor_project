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
  single_image;
  soon_banners;
  white_line;
  full_img_width;
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
    single_image,
    soon_banners,
    white_line,
    full_img_width,
  }) {
    if (!Array.isArray(templates)) {
      throw new Error("templates property should be array");
    }
    if (!name) {
      throw new Error("name property should be defined for campaign");
    }
    if (!date) {
      throw new Error("date property should be defined for campaign");
    }
    if (!startId) {
      throw new Error("startId property should be defined for campaign");
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
    this.startId = startId
    this.templates = templates;
    this.alarm = {
      isActive: alarm?.isActive || false,
      description: alarm?.description || "Remember about: ",
    };
    this.data = data || null;
    this.optimizeImg = optimizeImg || false;
    this.isArchive = isArchive || false;
    this.products = products || null;
    this.figmaUrl = figmaUrl || null;
    this.single_image = single_image || false;
    this.soon_banners = soon_banners || false;
    this.white_line = white_line || false;
    this.full_img_width = full_img_width || false;
  }
}
