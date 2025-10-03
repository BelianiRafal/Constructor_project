import { TableQueryCSV } from "./TableQueryCSV.js";

export class TableQueryCategoryTitles extends TableQueryCSV {
  tableColumns = false;
  constructor() {
    super({
      fallback: [],
      name: "categoriesTitles",
      tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
      tableName: "Categories"
    })
  }
}
