import * as fs from "fs";
import { readFileSync } from "fs";
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
  // noinspection JSNonASCIINames,NonAsciiCharacters
  pronúncia: {
    text: string;
    llista: string[];
  };
  sufixos: {
    llista: string[];
  };
}

export type Word = [string, string];
export type Expression = [string, string];

// Global state as cache - to be reused for any instance of DataService.
let curiositiesCache: Curiosities | undefined;
let expressionsCache: Expression[][] | undefined;
let wordsCache: Word[][] | undefined;

export default class DataService {
  public static readonly dataPaths = {
    curiosities: "data/curiosities.json",
    words: "data/words.csv",
    expressions: "data/expressions.csv",
  };

  private async parseCsv(
    path: string,
    delimiter: string = ";"
  ): Promise<[string, string][][]> {
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
        toArray()
      )
    );
  }

  public async getWords(): Promise<Word[][]> {
    if (wordsCache) return wordsCache;

    wordsCache = await this.parseCsv(DataService.dataPaths.words);
    return wordsCache;
  }

  public async getExpressions(): Promise<Expression[][]> {
    if (expressionsCache) return expressionsCache;

    expressionsCache = await this.parseCsv(DataService.dataPaths.expressions);
    return expressionsCache;
  }

  public getCuriosities(): Curiosities {
    if (curiositiesCache) return curiositiesCache;

    const fileContents = fs.readFileSync(DataService.dataPaths.curiosities, {
      encoding: "utf-8",
    });
    curiositiesCache = JSON.parse(fileContents) as Curiosities;
    return curiositiesCache;
  }
}