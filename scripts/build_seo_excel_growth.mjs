import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "C:/Users/ASUS/Desktop/discord-report/outputs";
const outputPath = path.join(outputDir, "infinisynapse_seo_26.6.12-26.6.16_growth.xlsx");

const rows = [
  {
    url: "https://infinisynapse.com/use-cases/sql-data-analysis-with-ai",
    keyword: "sql-data-analysis-with-ai",
    impressions: 1180,
    clicks: 5,
    previousImpressions: 1180,
  },
  {
    url: "https://infinisynapse.com/use-cases/best-ai-tools-for-data-analysis",
    keyword: "best ai tools for data analysis",
    impressions: 2282,
    clicks: 4,
    previousImpressions: 2382,
  },
  {
    url: "https://infinisynapse.com/guides/text-to-sql-alternative",
    keyword: "text to sql alternative",
    impressions: 203,
    clicks: 3,
    previousImpressions: 93,
  },
  {
    url: "https://infinisynapse.com/use-cases/best-data-analysis-software",
    keyword: "best data analysis software",
    impressions: 3160,
    clicks: 1,
    previousImpressions: 3160,
  },
  {
    url: "https://infinisynapse.com/use-cases/nl2sql",
    keyword: "nl2sql",
    impressions: 775,
    clicks: 1,
    previousImpressions: 471,
  },
  {
    url: "https://infinisynapse.com/guides/sql-data-analysis-with-ai",
    keyword: "sql data analysis with ai",
    impressions: 181,
    clicks: 1,
    previousImpressions: 175,
  },
  {
    url: "https://infinisynapse.com/guides/breaking-data-silos",
    keyword: "breaking data silos",
    impressions: 207,
    clicks: 1,
    previousImpressions: 146,
  },
  {
    url: "https://infinisynapse.com/guides/power-bi-copilot-alternative",
    keyword: "power bi copilot alternative",
    impressions: 213,
    clicks: 1,
    previousImpressions: 149,
  },
  {
    url: "https://infinisynapse.com/guides/agentic-analytics-vs-traditional-bi",
    keyword: "agentic analytics vs traditional BI",
    impressions: 337,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/chatbi-alternative",
    keyword: "chatbi alternative",
    impressions: 53,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/use-cases/infinisynapse-vs-vanna-ai",
    keyword: "infinisynapse vs vanna ai",
    impressions: 445,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/use-cases/best-nl2sql-tools-2026",
    keyword: "best nl2sql tools 2026",
    impressions: 1,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/tableau-ai-alternative",
    keyword: "tableau ai alternative",
    impressions: 104,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/bi-chatbot-alternative",
    keyword: "bi chatbot alternative",
    impressions: 68,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/chatbi-vs-agentic-analytics",
    keyword: "chatbi vs agentic analytics",
    impressions: 4,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/nlp2sql-alternative",
    keyword: "nlp2sql alternative",
    impressions: 117,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/what-is-agentic-data-analysis",
    keyword: "what is agentic data analysis",
    impressions: 40,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/what-is-agentic-analytics",
    keyword: "what is agentic analytics",
    impressions: 13,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/thoughtspot-alternative",
    keyword: "thoughtspot alternative",
    impressions: 315,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/looker-alternative",
    keyword: "looker alternative",
    impressions: 269,
    clicks: 0,
  },
  {
    url: "https://infinisynapse.com/guides/rag-data-analysis",
    keyword: "rag data analysis",
    impressions: 461,
    clicks: 0,
  },
];

function growthText(row) {
  if (!row.previousImpressions) return "本周刚收录";
  const growth = (row.impressions - row.previousImpressions) / row.previousImpressions;
  const sign = growth > 0 ? "+" : "";
  return `${sign}${(growth * 100).toFixed(2)}%`;
}

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("SEO数据");
sheet.showGridLines = true;

const data = rows.map((row) => [
  row.url,
  row.keyword,
  row.impressions,
  row.clicks,
  growthText(row),
]);
const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);

sheet.getRange("A1:E1").merge();
sheet.getRange("A1:E1").values = [["26.6.12-26.6.16（截止到6.16）"]];
sheet.getRange("A2:E2").values = [["网页链接", "关键词", "印象数", "点击数", "增长率"]];
sheet.getRange("A3:E24").values = [
  ...data,
  ["", "总计", totalImpressions, totalClicks, ""],
];

sheet.getRange("A1:E24").format.borders = { preset: "all", style: "thin", color: "#000000" };
sheet.getRange("A1:E1").format = {
  font: { name: "Arial", size: 16, bold: false, color: "#000000" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
sheet.getRange("A2:E2").format = {
  fill: "#4D93D3",
  font: { name: "SimSun", size: 18, bold: true, color: "#FFFFFF" },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
sheet.getRange("A3:E24").format = {
  font: { name: "Arial", size: 12, color: "#000000" },
  verticalAlignment: "center",
};
sheet.getRange("A3:A22").format = {
  font: { name: "Arial", size: 12, color: "#0000EE", underline: true },
  verticalAlignment: "center",
};
sheet.getRange("C3:D24").format = {
  font: { name: "Arial", size: 12, color: "#000000" },
  horizontalAlignment: "right",
  verticalAlignment: "center",
};
sheet.getRange("E3:E24").format = {
  font: { name: "Arial", size: 12, color: "#1F7A3D" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
sheet.getRange("B24:E24").format = {
  font: { name: "Arial", size: 12, bold: true, color: "#000000" },
  horizontalAlignment: "right",
  verticalAlignment: "center",
};

sheet.getRange("A:A").format.columnWidthPx = 690;
sheet.getRange("B:B").format.columnWidthPx = 285;
sheet.getRange("C:D").format.columnWidthPx = 90;
sheet.getRange("E:E").format.columnWidthPx = 130;
sheet.getRange("A1:E1").format.rowHeightPx = 42;
sheet.getRange("A2:E2").format.rowHeightPx = 36;
sheet.getRange("A3:E24").format.rowHeightPx = 28;
sheet.freezePanes.freezeRows(2);

const inspected = await workbook.inspect({
  kind: "table",
  range: "SEO数据!A1:E24",
  include: "values",
  tableMaxRows: 25,
  tableMaxCols: 5,
});
console.log(inspected.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

await fs.mkdir(outputDir, { recursive: true });
const preview = await workbook.render({ sheetName: "SEO数据", range: "A1:E24", scale: 1, format: "png" });
const previewBytes = await preview.arrayBuffer();
await fs.writeFile(path.join(outputDir, "infinisynapse_seo_growth_preview.png"), Buffer.from(previewBytes));

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
console.log(`saved ${outputPath}`);
