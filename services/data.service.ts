import * as fs from "fs";
import { readFileSync } from "fs";
import {
  filter,
  from,
  groupBy,
  lastValueFrom,
  map,
  mergeMap,
  pairs,
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

export default class DataService {
  public static readonly dataPaths = {
    curiosities: "data/curiosities.json",
    words: "data/words.csv",
    expressions: "data/expressions.csv",
  };

  private curiositiesCache: Curiosities | undefined;
  private expressionsCache: Expression[][] | undefined;
  private wordsCache: Word[][] | undefined;

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
    if (this.wordsCache) return this.wordsCache;

    this.wordsCache = await this.parseCsv(DataService.dataPaths.words);
    return this.wordsCache;
  }

  public async getExpressions(): Promise<Expression[][]> {
    if (this.expressionsCache) return this.expressionsCache;

    this.expressionsCache = await this.parseCsv(
      DataService.dataPaths.expressions
    );
    return this.expressionsCache;
  }

  public getCuriosities(): Curiosities {
    if (this.curiositiesCache) return this.curiositiesCache;

    const fileContents = fs.readFileSync(DataService.dataPaths.curiosities, {
      encoding: "utf-8",
    });
    this.curiositiesCache = JSON.parse(fileContents) as Curiosities;
    return this.curiositiesCache;
  }
}
