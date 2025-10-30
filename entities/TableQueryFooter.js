import { TableQueryCSV } from "./TableQueryCSV.js";

export class TableQueryFooter extends TableQueryCSV {
  tableColumns = false;
  constructor() {
    super({
      fallback: [],
      name: "footer",
      tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
      tableName: "Footer"
    })
  }
}
