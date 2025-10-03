export class TableQueryCSV {
  tableId;
  tableName;
  tableRange = "?majorDimension=COLUMNS";
  name;
  fallback;
  tableColumns = false;
  constructor({ tableId, tableName, name, fallback }) {
    if (!tableId) {
      throw new Error("tableId for TableQueryCSV not found");
    }
    if (!tableName) {
      throw new Error("tableName for TableQueryCSV not found");
    }
    if (!name) {
      throw new Error("name for TableQueryCSV not found");
    }
    if (
      name === "templates" ||
      name === "header" ||
      name === "footer" ||
      name === "categoriesLinks" ||
      name === "categoriesTitles"
    ) {
      this.tableId = tableId;
      this.tableName = tableName;
      this.name = name;
      // Fallback array should have the same amount of items as range have in tableRange.
      // Example:
      // tableRange: 28:38 -> 10
      // fallback: [1,2,3,4,5,6,7,8,9,10]
      this.fallback = fallback || [];
      return;
    }
    throw new Error(
      "name property for TableQueryCSV can be: templates, header, footer, categoriesLinks, categoriesTitles"
    );
  }
}
