import { TableQueryCSV } from "./TableQueryCSV.js";

export class TableQueryCategoryLinks extends TableQueryCSV {
  tableColumns = false;
  constructor() {
    super({
      fallback: [],
      name: "categoriesLinks",
      tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
      tableName: "Categories"
    })
  }
}
