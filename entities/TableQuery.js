export class TableQuery {
  tableId;
  tableName;
  tableRange;
  name;
  fallback;
  constructor({ tableId, tableName, name, tableRange, fallback }) {
    if (!tableId) {
      throw new Error("tableId for TableQuery not found");
    }
    if (!tableName) {
      throw new Error("tableName for TableQuery not found");
    }
    if (!name) {
      throw new Error("name for TableQuery not found");
    }
    if (!tableRange) {
      throw new Error("tableRange for TableQuery not found");
    }
    this.tableId = tableId;
    this.tableName = tableName;
    this.tableRange = tableRange;
    this.name = name;
    // Fallback array should have the same amount of items as range have in tableRange.
    // Example:
    // tableRange: 28:38 -> 10
    // fallback: [1,2,3,4,5,6,7,8,9,10]
    this.fallback = fallback || [];
  }
}
