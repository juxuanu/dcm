import { test } from "node:test";
import { dataPaths, parseCsv } from "@dcm/data/data";
import { readFileSync } from "fs";

test("CSV data is invalid", async () => {
  const firstFileLine = readFileSync(dataPaths.words, {
    encoding: "utf-8",
  }).split("\n")[0];
  const parsedCsvData = await parseCsv(firstFileLine);
});
