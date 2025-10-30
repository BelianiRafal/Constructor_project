import { TableQueryCSV } from "./TableQueryCSV.js";

export class TableQueryHeader extends TableQueryCSV {
  tableColumns = false;
  constructor() {
    super({
      fallback: [],
      name: "header",
      tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
      tableName: "Header"
    })
  }
}
