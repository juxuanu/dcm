import { randomUUID } from "node:crypto";
import * as fs from "node:fs";
import { readFileSync } from "node:fs";
import {
  filter,
  from,
  groupBy,
  lastValueFrom,
  map,
  mergeMap,
  toArray,
} from "rxjs";

export interface Curiosities {
  "articles definits": {
    llista: { ca: string; ma: string }[];
    notes: {
      1: { text: string };
      2: { text: string; llista: string[] };
    };
  };
  "articles personals": string;
  "maneres de dir": {
    llista: { concepte: string; paraules: string }[];
  };
  pronúncia: {
    text: string;
    llista: string[];
  };
  sufixos: {
    llista: string[];
  };
}

interface DataPair {
  id: ReturnType<typeof randomUUID>;
  one: string;
  two: string;
}

export type Word = DataPair;
export type Expression = DataPair;

let curiositiesCache: Curiosities | undefined;
let expressionsCache: Expression[][] | undefined;
let wordsCache: Word[][] | undefined;

const dataPaths = {
  curiosities: "data/curiosities.json",
  words: "data/words.csv",
  expressions: "data/expressions.csv",
} as const;

const parseCsv = (
  path: string,
  delimiter = ";",
): Promise<[string, string][][]> => {
  const fileData = readFileSync(path, { encoding: "utf-8" });
  return lastValueFrom(
    from(fileData.split("\n")).pipe(
      filter((line) => !!line && line.length > 0 && line.includes(delimiter)),
      map((line): [string, string] => {
        const split = line.split(delimiter);
        return [split[0], split[1]];
      }),
      toArray(),
      mergeMap((pairs) => pairs.sort((a, b) => a[0].localeCompare(b[0]))),
      groupBy((w) => w[0].normalize("NFD").charAt(0).toUpperCase()),
      mergeMap((group) => group.pipe(toArray())),
      map((pairGroup) =>
        pairGroup.sort((a, b) => a[0][0].localeCompare(b[0][0]))
      ),
      toArray(),
    ),
  );
};

const buildDataPairs = (data: [string, string][][]): DataPair[][] =>
  data.map((pairs) =>
    pairs.map((pair) => ({ id: randomUUID(), one: pair[0], two: pair[1] }))
  );

export const getWords = async (): Promise<Word[][]> => {
  if (wordsCache) return wordsCache;

  wordsCache = buildDataPairs(await parseCsv(dataPaths.words));
  return wordsCache;
};

export const getExpressions = async (): Promise<Expression[][]> => {
  if (expressionsCache) return expressionsCache;

  expressionsCache = buildDataPairs(await parseCsv(dataPaths.expressions));
  return expressionsCache;
};

export const getCuriosities = (): Curiosities => {
  if (curiositiesCache) return curiositiesCache;

  const fileContents = fs.readFileSync(dataPaths.curiosities, {
    encoding: "utf-8",
  });
  curiositiesCache = JSON.parse(fileContents) as Curiosities;
  return curiositiesCache;
};
