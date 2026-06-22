import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "C:/Users/ASUS/Desktop/discord-report/outputs";
const outputPath = path.join(outputDir, "infinisynapse_seo_26.6.12-26.6.16.xlsx");

const rows = [
  ["https://infinisynapse.com/guides/agentic-analytics-vs-traditional-bi", "agentic analytics vs traditional BI", 337, 0],
  ["https://infinisynapse.com/guides/chatbi-alternative", "chatbi alternative", 53, 0],
  ["https://infinisynapse.com/use-cases/infinisynapse-vs-vanna-ai", "infinisynapse vs vanna ai", 29, 0],
  ["https://infinisynapse.com/use-cases/best-data-analysis-software", "best data analysis software", 97, 0],
  ["https://infinisynapse.com/use-cases/best-nl2sql-tools-2026", "best nl2sql tools 2026", 1, 0],
  ["https://infinisynapse.com/use-cases/best-ai-tools-for-data-analysis", "best ai tools for data analysis", 57, 0],
  ["https://infinisynapse.com/guides/tableau-ai-alternative", "tableau ai alternative", 104, 0],
  ["https://infinisynapse.com/guides/bi-chatbot-alternative", "bi chatbot alternative", 68, 0],
  ["https://infinisynapse.com/guides/chatbi-vs-agentic-analytics", "chatbi vs agentic analytics", 4, 0],
  ["https://infinisynapse.com/guides/sql-data-analysis-with-ai", "sql data analysis with ai", 181, 1],
  ["https://infinisynapse.com/guides/nlp2sql-alternative", "nlp2sql alternative", 117, 0],
  ["https://infinisynapse.com/guides/what-is-agentic-data-analysis", "what is agentic data analysis", 40, 0],
  ["https://infinisynapse.com/guides/breaking-data-silos", "breaking data silos", 207, 1],
  ["https://infinisynapse.com/guides/what-is-agentic-analytics", "what is agentic analytics", 13, 0],
  ["https://infinisynapse.com/guides/thoughtspot-alternative", "thoughtspot alternative", 315, 0],
  ["https://infinisynapse.com/guides/looker-alternative", "looker alternative", 269, 0],
  ["https://infinisynapse.com/guides/power-bi-copilot-alternative", "power bi copilot alternative", 213, 1],
  ["https://infinisynapse.com/guides/text-to-sql-alternative", "text to sql alternative", 203, 3],
  ["https://infinisynapse.com/guides/rag-data-analysis", "rag data analysis", 461, 0],
];

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("SEO数据");
sheet.showGridLines = true;

sheet.getRange("A1:D1").merge();
sheet.getRange("A1:D1").values = [["26.6.12-26.6.16（截止到6.16）"]];
sheet.getRange("A2:D2").values = [["网页链接", "关键词", "印象数", "点击数"]];

sheet.getRange("A3:D21").values = rows.map(([url, keyword, impressions, clicks]) => [url, keyword, impressions, clicks]);

sheet.getRange("A1:D21").format.borders = { preset: "all", style: "thin", color: "#000000" };
sheet.getRange("A1:D1").format = {
  font: { name: "Arial", size: 16, bold: false, color: "#000000" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
sheet.getRange("A2:D2").format = {
  fill: "#4D93D3",
  font: { name: "SimSun", size: 18, bold: true, color: "#FFFFFF" },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
sheet.getRange("A3:D21").format = {
  font: { name: "Arial", size: 13, color: "#000000" },
  verticalAlignment: "center",
};
sheet.getRange("A3:A21").format = {
  font: { name: "Arial", size: 13, color: "#0000EE", underline: true },
  verticalAlignment: "center",
};
sheet.getRange("C3:D21").format = {
  font: { name: "Arial", size: 13, color: "#000000" },
  horizontalAlignment: "right",
  verticalAlignment: "center",
};
sheet.getRange("A:A").format.columnWidthPx = 760;
sheet.getRange("B:B").format.columnWidthPx = 310;
sheet.getRange("C:D").format.columnWidthPx = 95;
sheet.getRange("A1:D1").format.rowHeightPx = 42;
sheet.getRange("A2:D2").format.rowHeightPx = 36;
sheet.getRange("A3:D21").format.rowHeightPx = 30;
sheet.freezePanes.freezeRows(2);

const inspected = await workbook.inspect({
  kind: "table",
  range: "SEO数据!A1:D21",
  include: "values,formulas",
  tableMaxRows: 22,
  tableMaxCols: 4,
});
console.log(inspected.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const preview = await workbook.render({ sheetName: "SEO数据", range: "A1:D21", scale: 1, format: "png" });
const previewBytes = await preview.arrayBuffer();
await fs.writeFile(path.join(outputDir, "infinisynapse_seo_preview.png"), Buffer.from(previewBytes));

await fs.mkdir(outputDir, { recursive: true });
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
console.log(`saved ${outputPath}`);
