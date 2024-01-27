"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Expression, Word } from "@dcm/data/data";
import { filterSearchTerm } from "./filter-search-term";
import Navigator from "@dcm/components/navigator";
import StringPair from "@dcm/components/string-pair";
import Section from "@dcm/components/section";

export type Data = Expression[][] | Word[][];

interface Props {
  groupedData: Data;
}

const ListPage: React.FC<Props> = ({ groupedData }) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const shownData = useMemo(
    () => filterSearchTerm(groupedData, searchTerm),
    [groupedData, searchTerm],
  );
  const onSearch = useCallback((input: string) => setSearchTerm(input), []);

  return (
    <>
      <Navigator
        onSearch={onSearch}
        data={groupedData.map((i) => i[0].one.charAt(0))}
      />
      {shownData.map((group) => (
        <Section
          key={group[0].id}
          title={group[0].one.charAt(0)}
          extraClasses={"mt-6"}
          id={group[0].one.charAt(0)}
        >
          <ul className="space-y-2">
            {group.map((item) => (
              <li key={item.id}>
                <StringPair one={item.one} two={item.two} />
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
};

export default ListPage;
