export const adjustTableRangeToCountry = (query, tableColumn) => {
  if ("tableColumns" in query && query.tableColumns === false) {
    return query;
  }
  if (query.tableRange.includes(":")) {
    const splitRange = query.tableRange.split(":");
    const tableRange =
      tableColumn + splitRange[0] + ":" + tableColumn + splitRange[1];
    query = {
      ...query,
      tableRange,
    };
    return query;
  } else {
    const tableRange = tableColumn + query.tableRange;
    query = {
      ...query,
      tableRange,
    };
    return query;
  }
};
