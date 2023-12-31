import React, { useCallback, useMemo, useState } from "react";
import { Wrapper } from "@dcm/components/wrapper";
import { Section } from "@dcm/components/section";
import { StringPair } from "@dcm/components/string-pair";
import { Expression, Word } from "@dcm/services/data";
import { Navigator } from "@dcm/components/navigator";
import { filterSearchTerm } from "./utils";

export type Data = Expression[][] | Word[][];

interface Props {
  groupedData: Data;
  title: string;
}

const ListPage: React.FC<Props> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const shownData = useMemo(
    () => filterSearchTerm(props.groupedData, searchTerm),
    [props.groupedData, searchTerm],
  );
  const onSearch = useCallback((input: string) => setSearchTerm(input), []);

  return (
    <Wrapper title={props.title}>
      <Navigator
        onSearch={onSearch}
        data={props.groupedData.map((i) => i[0].one.charAt(0))}
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
    </Wrapper>
  );
};

export default ListPage;
