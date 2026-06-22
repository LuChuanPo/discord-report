import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const file = await FileBlob.load("C:/Users/ASUS/Desktop/discord-report/outputs/infinisynapse_seo_26.6.12-26.6.16.xlsx");
const workbook = await SpreadsheetFile.importXlsx(file);
const inspected = await workbook.inspect({
  kind: "table",
  range: "SEO数据!A1:D21",
  include: "values",
  tableMaxRows: 22,
  tableMaxCols: 4,
});
console.log(inspected.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
});
console.log(errors.ndjson);
