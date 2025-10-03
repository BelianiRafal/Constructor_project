## Shortcuts

```CTRL + D``` Select all\
```CTRL + ALT + I``` Increment\
```ALT + SHIFT + F``` Prettier\
```SHIFT + ALT + ARROW LEFT/RIGHT``` Select to the end of the string

## API DOCUMENTATION: How to fetch spreadsheet data
#### https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values
#### path: api/fetchTranslations.js
Function ```getTranslations```
responsible for fetching translation for every tableQuery provided in **app.js** file. But before making it, app will modify/prepare in proper look tableRange by splitting it and concatenate backwards with country column provided in **config/shops.js**


## Config object in app.js
```
{
    campaign_url: "https://www.prologistics.info/news_email.php?id=",
    issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
    alarm_days: 7,
    confetti: true,
    replaceToBrs: true,
    emptyCell: (message) => `<span style='font-size: 20px; background: #ff0000;'>${message || "Cell is empty"}</span>`,
}
```
#### campaign_url string
> Value will be concatenated with campaign id provided in app.js in field: startId
#### issue_url string
> Value will be concatenated with issue id provided in app.js in field: issueCardId
#### alarm_days number
> Define alarm days to notify you if alarm for some campaign is active
```
alarm: {
  isActive: true,
  description: "Add soonending banners",
}
```
#### confetti boolean
> Decide whether app should notify you if copy template button clicked.
#### replaceToBrs boolean
> Decide whether app should replace '\n' to | '<br>' when fetching spreadsheet data
#### emptyCell function
> Error message will be placed if fallback is not provided for tableQuery and cell is empty in spreadsheet.


## How to setup global function/variable to access it everywhere
1. Open **index.html** file
2. Create ```<script></script>``` tag BEFORE ```<script type="module" src="app.js"></script>``` tag.
3. Now, everything that will be defined inside script is accessible globally across whole app.

Example:
```
    <script>
        // variable
        const name = "Me"
        // function
        const myFn = () => {

        }
    </script>
    <script type="module" src="app.js"></script>
  </body>
</html>
```


## How to access last item in loop
```index === [array_item_name].length - 1```

Example:
```
    categories.map((item, idx) => {
        if (idx === categories.length - 1) {
            return ``;
        }
        return ``;
    }).join("")
```

Or use Iterate component which has 3 properties:\
**items**       -> to iterate through\
**lastItemFn**  -> function to render last item\
**itemFn**      -> function to render each item

  EXAMPLE:
```
    Iterate({
      items: categories,
      itemFn: (item, index) => {
        return `
        <tr>
          <td class="newsletterContainer" style="background-color: ${background}; color: #000;">
            ${Category({
              type: "no_products",
              name: getCategoryTitle(item.name),
              href: getCategoryLink(item.href),
              src: item.src,
              color: item.color,
              cta: getPhrase("Shop now"),
            })}
            ${Space({ className: "newsletterBottom80px" })}
            ${Line()}
          </td>
        </tr>
        `;
      },
      lastItemFn: (item, index) => {
        return `
            <tr>
              <td class="newsletterContainer" style="background-color: ${background}; color: #000;">
                ${Category({
                  type: "no_products",
                  name: getCategoryTitle(item.name),
                  href: getCategoryLink(item.href),
                  src: item.src,
                  color: item.color,
                  cta: getPhrase("Shop now"),
                })}
                ${Space({ className: "newsletterBottom80px" })}
              </td>
            </tr>
         `;
      },
    })
```
    

## Template rendering happens inside main/initApp.js
From line 69 to 225. \
There is some checks\
Data mutations for links, categories provided in **app.js**

## What not to do:
### Try to not change any values in components. only extend them or copy.
If some value will ba changed in component, it can affect other templates,
campaigns. Instead, just copy current component and create new one. In order to make safe changes.

## Errors:
```http://127.0.0.1:5500/templates/[file_name].js net::ERR_ABORTED 404 (Not Found)``` \
-File name import not found.\
-File doesn't exist.\
-File ends on template_name but should template_name.js

## Set CLIENT ID to read values from spreadsheet
#### path: utils/config.js
#### url: https://console.cloud.google.com/apis/credentials

## Where Css and Types located
#### path: utils/types.js

## Add new shop and language
#### path: config/shops.js
#### path: config/languages.js

## Create new template
1. Create file **[template_name].js** in templates folder
2. Paste code below into created file
```
export async function [template_name]({
   links,
   getCampaignData,
   getProductById,
   getCategoryLink,
   getCategoryTitle,
   getPhrase,
   getFooter,
   getHeader,
   queries,
   id,
   shop,
   utm,
   country,
   type,
   name,
   categories,
   background,
   config
   }) {
    return `<p>template_name</p>`
}
```

 3. Change **[template_name]** to your name:
```
 export async function MondayTemplate({
   links,
   getCampaignData,
   getProductById,
   getCategoryLink,
   getCategoryTitle,
   getPhrase,
   getFooter,
   getHeader,
   queries,
   id,
   shop,
   country,
   type,
   name,
   categories,
   background,
   config
   }) {
    return `<p>MondayTemplate</p>`
}
```
4. Add template import to **/templates/index.js**
5. Add template to templates object.
6. Use it in **app.js** file by accessing templates.[template_name]

## Every template that will be rendered has access to:
```
{
  links,             -> links provided by user in app.js file for template
  getCampaignData,   -> function responsible for get Campaign data which is defined in app.js for Campaign object in hash CSV format.
  getProductById,    -> function responsible for get product by id
  getCategoryLink,   -> function responsible for get category link by ENG category
  getCategoryTitle,  -> function responsible for get category title by ENG category
  getPhrase,         -> function responsible for get translation template
  getFooter,         -> function responsible for get footer translations by ENG word
  getHeader,         -> function responsible for get header translations by ENG word
  queries,           -> object with properites that user defined in tableQueries array.
  id,                -> campaign id
  shop,              -> to see what properties available: config/shops.js
  country,           -> get access to rendered country
  type,              -> template type (newsletter or landing)
  name,              -> template name,
  utm:               -> tracking url with id,
  categories,        -> categories handled by app
  background,        -> background color | default #ffffff -> located in initApp.js, | possibility to add user color in app.js for template.
  config             -> config object that is defined in app.js file
}
```

## Entities:
#### path: entities/shops.js
#### description: Main problem why sometimes app doesn't work, because of lack provided data to render template, whether it is newsletter or landing page.
> Since we all work on this version, where we have to change data inside application some problems may appear because of lack some code.\
> Entities allows safely initialize each propery for campaign, template, tableQuery.\
> If something is wrong, notification will appear.\
> If you don't know which property to define, by clicking Ctrl+Space you will get hint window.\
**But you can always define everything as we do previously.**

## To use in app.js
#### Campaign -> to initialize campaign in app.js
```
new entities.Campaign({
        startId: "28753",
        name: "Newsletter Free wall decor",
        date: "2024.12.09",
        issueCardId: "322376",
        alarm: {
          isActive: false,
        },
        isArchive: false,
        optimizeImg: false,
        figmaUrl:
          "https://www.figma.com/design/yc30oxD9wTbtNZvNvZvMfl/Free-wall-decor-(Copy)?node-id=0-1&node-type=canvas&t=S4hTJat0KKjjlJ1J-0",
        templates: [],
        products: []
}),
```
#### products
Imported products from extension. If not provided, products from localStorage will be taken.

#### MondayFreebieNewsletter -> to initialize template inside **templates: []** with known properties
```
          new entities.MondayFreebieNewsletter({
            name: "Newsletter",
            type: types.NEWSLETTER,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#750000",
              color: "#ffffff",
            },
            offerPart: {
              type: "code",
            },
            categories: [
              new entities.MondayCategoryProducts({
                name: "Storage beds",
                background: "#750000",
                color: "#ffffff",
                src: "https://pictureserver.net/static/2024/20241209Category1.png",
                href: "https://www.beliani.ch/beds/storage-beds/",
                products: [
                  new entities.ProductInstance({
                    id: "564062",
                    src: "https://pictureserver.net/static/2024/20241209Category11.png",
                  }),
                  new entities.ProductInstance({
                    id: "192890",
                    src: "https://pictureserver.net/static/2024/20241209Category12.png",
                  }),
                  new entities.ProductInstance({
                    id: "142341",
                    src: "https://pictureserver.net/static/2024/20241209Category13.png",
                  }),
                  new entities.ProductInstance({
                    id: "392644",
                    src: "https://pictureserver.net/static/2024/20241209Category14.png",
                  }),
                ],
              }),
              new entities.MondayCategoryProducts({
                name: "Fabric beds",
                background: "#FFCCB7",
                color: "#000000",
                type: "monday",
                src: "https://pictureserver.net/static/2024/20241209Category2.png",
                href: "https://www.beliani.ch/beds/fabric-beds/",
                products: [
                  new entities.ProductInstance({
                    id: "565963",
                    src: "https://pictureserver.net/static/2024/20241209Category21.png",
                  }),
                  new entities.ProductInstance({
                    id: "449153",
                    src: "https://pictureserver.net/static/2024/20241209Category22.png",
                  }),
                  new entities.ProductInstance({
                    id: "329401",
                    src: "https://pictureserver.net/static/2024/20241209Category23.png",
                  }),
                  new entities.ProductInstance({
                    id: "186252",
                    src: "https://pictureserver.net/static/2024/20241209Category24.png",
                  }),
                ],
              }),
              new entities.MondayCategoryProducts({
                name: "Metal beds",
                background: "#750000",
                color: "#ffffff",
                type: "monday",
                src: "https://pictureserver.net/static/2024/20241209Category3.png",
                href: "https://www.beliani.ch/beds/metal-beds/",
                products: [
                  new entities.ProductInstance({
                    id: "136637",
                    src: "https://pictureserver.net/static/2024/20241209Category31.png",
                  }),
                  new entities.ProductInstance({
                    id: "244594",
                    src: "https://pictureserver.net/static/2024/20241209Category32.png",
                  }),
                  new entities.ProductInstance({
                    id: "306232",
                    src: "https://pictureserver.net/static/2024/20241209Category33.png",
                  }),
                  new entities.ProductInstance({
                    id: "51335",
                    src: "https://pictureserver.net/static/2024/20241209Category34.png",
                  }),
                ],
              }),
              new entities.MondayCategoryProducts({
                name: "Leather beds",
                background: "#FFCCB7",
                color: "#000000",
                type: "monday",
                src: "https://pictureserver.net/static/2024/20241209Category4.png",
                href: "https://www.beliani.ch/beds/leather-beds/",
                products: [
                  new entities.ProductInstance({
                    id: "93604",
                    src: "https://pictureserver.net/static/2024/20241209Category41.png",
                  }),
                  new entities.ProductInstance({
                    id: "746",
                    src: "https://pictureserver.net/static/2024/20241209Category42.png",
                  }),
                  new entities.ProductInstance({
                    id: "194963",
                    src: "https://pictureserver.net/static/2024/20241209Category43.png",
                  }),
                  new entities.ProductInstance({
                    id: "394734",
                    src: "https://pictureserver.net/static/2024/20241209Category44.png",
                  }),
                ],
              }),
            ],
            links: new entities.TemplateLinks([
              new entities.OriginHref({ value: "content/lp24-12-09" }),
              new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241209_01.png",
              }),
              new entities.OriginHref({ value: "content/lp24-12-09" }),
              new entities.Image({
                value:
                  "https://pictureserver.net/static/2024/20241209gif.gif",
              }),
              new entities.OriginHref({ value: "content/lp24-12-05" }),
              new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241205b.png",
              }),
              new entities.OriginHref({ value: "content/lp24-12-04" }),
              new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241204b.png",
              }),
            ]),
            tableQueries: [
              new entities.TableQuery({
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 09.12.24 - Free wall decor!",
                tableRange: "20:22",
                name: "offerPart",
              }),
              new entities.TableQuery({
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 09.12.24 - Free wall decor!",
                tableRange: "24:25",
                name: "intro",
              }),
              new entities.TableQuery({
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 09.12.24 - Free wall decor!",
                tableRange: "23",
                name: "code",
              }),
              new entities.TableQuery({
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 09.12.24 - Free wall decor!",
                tableRange: "26:29",
                name: "categories",
              }),
              new entities.TableQuery({
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 09.12.24 - Free wall decor!",
                tableRange: "37:39",
                name: "condition",
              }),
            ],
            freebies: {
              items: [
                new entities.FreebieItem({
                  row: 1,
                  col: 2,
                  products: [
                    {
                      id: "113426",
                      src: "https://pictureserver.net/static/2024/20241209Freebie1.png",
                      style: "padding-right: 10px; padding-left: 60px;",
                    },
                    {
                      id: "113443",
                      src: "https://pictureserver.net/static/2024/20241209Freebie2.png",
                      style: "padding-right: 60px; padding-left: 10px;",
                    },
                  ],
                }),
                new entities.FreebieItem({
                  row: 1,
                  col: 2,
                  products: [
                    {
                      id: "358921",
                      src: "https://pictureserver.net/static/2024/20241209Freebie3.png",
                      style: "padding-right: 10px; padding-left: 60px;",
                    },
                    {
                      id: "174021",
                      src: "https://pictureserver.net/static/2024/20241209Freebie4.png",
                      style: "padding-right: 60px; padding-left: 10px;",
                    },
                  ],
                }),
              ],
            },
          })
```
#### MondayCategoryProducts -> to initialize category products list for template in app.js
```
new entities.MondayCategoryProducts({
                name: "Storage beds",
                background: "#750000",
                color: "#ffffff",
                src: "https://pictureserver.net/static/2024/20241209Category1.png",
                href: "https://www.beliani.ch/beds/storage-beds/",
                products: [
                  new entities.ProductInstance({
                    id: "564062",
                    src: "https://pictureserver.net/static/2024/20241209Category11.png",
                  }),
                  new entities.ProductInstance({
                    id: "192890",
                    src: "https://pictureserver.net/static/2024/20241209Category12.png",
                  }),
                  new entities.ProductInstance({
                    id: "142341",
                    src: "https://pictureserver.net/static/2024/20241209Category13.png",
                  }),
                  new entities.ProductInstance({
                    id: "392644",
                    src: "https://pictureserver.net/static/2024/20241209Category14.png",
                  }),
                ],
              })
```

#### ProductInstance -> to initialize in **products: []** in app.js for **template**
```
new entities.ProductInstance({
                    id: "564062",
                    src: "https://pictureserver.net/static/2024/20241209Category11.png",
                  })
```
#### FreebieItem -> to initialize in **freebies: { items: [] }** for **template**
```
new entities.FreebieItem({
                  row: 1,
                  col: 2,
                  products: [
                    {
                      id: "358921",
                      src: "https://pictureserver.net/static/2024/20241209Freebie3.png",
                      style: "padding-right: 10px; padding-left: 60px;",
                    },
                    {
                      id: "174021",
                      src: "https://pictureserver.net/static/2024/20241209Freebie4.png",
                      style: "padding-right: 60px; padding-left: 10px;",
                    },
                  ],
                })
```

#### OriginHref -> to initialize href that is based on origin
```
new entities.OriginHref({ value: "content/lp24-12-09" })
```

#### SlugImage -> to initialize image that is based on slug
```
new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241209_01.png",
              })
```

#### TableQuery -> to initialize table query for tableQueries in app.js for template
> fallback: ```TYPE: [] OPTIONAL``` \
> description: Fallback value will be palced in case of cell in spreadsheet is empty. Perfect for testing scenario.
```
new entities.TableQuery({
  tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
  tableName: "Voucher - 16.12.24 - Free Candles!",
  tableRange: "20:22",
  name: "offerPart",
  fallback: [
    "Choose a FREE candle set from X options.",
    "To claim your FREE candle set, use the code at the checkout when you spend a minimum of XX",
    "The offer is valid until the 22th of December."
  ]
})
```

#### TableQueryHeader -> to initialize table query for Header spreadsheet
```
tableQueries: [
    new TableQueryHeader(),
]
```
#### TableQueryFooter -> to initialize table query for Header spreadsheet
```
tableQueries: [
    new TableQueryFooter(),
]
```
#### TableQueryTranslationTemplates -> to initialize table query for Header spreadsheet
```
tableQueries: [
    new TableQueryTranslationTemplates(),
]
```
#### TableQueryCategoryLinks -> to initialize table query for Header spreadsheet
```
tableQueries: [
    new TableQueryCategoryLinks(),
]
```
#### TableQueryCategoryTitles -> to initialize table query for Header spreadsheet
```
tableQueries: [
    new TableQueryCategoryTitles(),
]
```
#### TemplateLinks -> to initialize Template Links in app.js for template
```
new entities.TemplateLinks([
              new entities.OriginHref({ value: "content/lp24-12-09" }),
              new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241209_01.png",
              }),
              new entities.OriginHref({ value: "content/lp24-12-09" }),
              new entities.Image({
                value:
                  "https://pictureserver.net/static/2024/20241209gif.gif",
              }),
              new entities.OriginHref({ value: "content/lp24-12-05" }),
              new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241205b.png",
              }),
              new entities.OriginHref({ value: "content/lp24-12-04" }),
              new entities.SlugImage({
                value:
                  "https://pictureserver.net/static/2024/20241204b.png",
              }),
            ])
```
#### Image -> to initialize image that is not based on nothing inside **links: []""
```
new entities.Image({
                value:
                  "https://pictureserver.net/static/2024/20241209gif.gif",
              })
```

## To use internally
#### Language -> to initialize language for shops
#### TableQueryCSV -> to initialize table query for tableQueries in app.js for template
#### NewsletterTemplate -> to extend new Template (see) entities/Templates/Monday.js


## Campaign render flow
1. Define campaign using Campaign class in **app.js** file.
2. Add templates to campaign using Template classes or as always defined object by yourself.
  -Newsletter template should have type newsletter, wrapper field in newsletter responsible for adding: DOCTYPE, HEAD, TITLE, META tags and others (see: Where Css and Types located)
  -Landing template should have type landing (see: Where Css and Types located)
3. Run live server.
4. Select Campaign, Template, Seller, Country.

## Update Footer, Header, Translation templates, Category Links, Category Titles
### path: main/data
By default app will read everything from this files.
If you want fetch it dynamically, define TableQuery using class or object manually.
Also you have ability to fetch Footer, Header, Category Links, Category Titles using classes.

## Example: TableQuery class
```
tableQueries: [
    new TableQuery({
        tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
        tableName: "Voucher - 09.12.24 - Free wall decor!",
        tableRange: "37:39",
        name: "condition",
    })
]
```

## Example: object manually
```
tableQueries: [
    {
        tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
        tableName: "Voucher - 09.12.24 - Free wall decor!",
        tableRange: "37:39",
        name: "condition",
    }
]
```
## Example: Footer, Header, Translation templates, Category Links, Category Titles
```
tableQueries: [
    new TableQueryHeader(),
    new TableQueryFooter(),
    new TableQueryTranslationTemplates(),
    new TableQueryCategoryLinks(),
    new TableQueryCategoryTitles(),
]
```
If Footer, Header, Translation templates, Category Links, Category Titles fetched dynamically
functions getHeader, getFooter, getPhrase wil use fetched data.
If not fetched dynamically will use local data which is located inside: main/data/[...].js


## Add campaign data
1. Open standart CSV compatable table (slugs should be UPPERCASE)
2. Copy values from spreadsheet from 1 row and column to last row last column
3. Open https://csvjson.com/csv2json select Hash option
4. Convert value to JSON
5. Add to **app.js** file

## Use campaign data in template
1. Check if function "getCampaignData" has been added in template
2. Call "getCampaignData" function with Column name parameter in template place where you want get result.

## Example 
```
  getCampaignData("Regular Conditions")
```


## Products render flow
#### path: main/initApp.js line 143
- Get products from localstorage
- If products defined parse products array if not assing empty array
- Find products for campaign by startId (campaign_id)
- Initialize TemplateHandlers with other data and products
- Provide getProductById function for template properites

## Products parsing flow
#### path: main/initApp.js line 228
- Listen to button click
- Call prompt to receive input from user
- If no input provided show Toast: Input incorrect
- If input provided parse provided JSON products.
- IF error occured once parsing, show error: Products parse error.
- Get selectdCampaign from global state
- Get products from localstorage
- Parse JSON products
- Find products for campaign by startId (campaign_id)
- Normalize JSON products provided by user to constructor VIEW in normalizeProducts (path: utils/normalizeProducts)
- If products already exist in localStorage for this campaign override them with new provided one.
- If error happend while updating localStorage and error is isQuotaExceededError ask user about removing some localStorage data.


## How to clear localStorage
For new version: \
- click **Clear storage** button

For old version: \
- click **F12**
- open **Application** tab
- select **Local storage** on the sidebar