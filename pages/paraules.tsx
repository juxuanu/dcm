import React from "react";
import { DataService, Word } from "@dcm/services";
import { GetStaticProps } from "next";
import { Wrapper } from "@dcm/components/wrapper";
import { StringPair } from "@dcm/components/string-pair";
import { from, groupBy, lastValueFrom, mergeMap, toArray } from "rxjs";

interface Props {
  groupedWords: Word[][];
}

const Paraules: React.FC<Props> = (props) => {
  return (
    <Wrapper title={"Paraules"}>
      {props.groupedWords.map((wg) => (
        <div key={wg[0][0]} className="mt-6">
          <h2 className="text-xl font-semibold w-full h-fit border-b border-solid border-bookBlue border-opacity-50 mb-3">
            {wg[0][0].charAt(0).toUpperCase()}
          </h2>
          <ul className="space-y-2">
            {wg.map((w) => (
              <li key={w[0]}>
                <StringPair one={w[0]} two={w[1]} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dataService = new DataService();
  const words = await dataService.getWords();
  const groupedWords = await lastValueFrom(
    from(words).pipe(
      groupBy((w) => w[0].charAt(0).toUpperCase()),
      mergeMap((group) => group.pipe(toArray())),
      toArray()
    )
  );
  return { props: { groupedWords } };
};

export default Paraules;
