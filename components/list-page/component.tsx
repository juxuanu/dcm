import React from "react";
import { Wrapper } from "@dcm/components/wrapper";
import { Section } from "@dcm/components/section";
import { StringPair } from "@dcm/components/string-pair";
import { Expression, Word } from "@dcm/services/data";

type Data = Expression[][] | Word[][];

interface Props {
  groupedData: Data;
  title: string;
}

const ListPage: React.FC<Props> = (props) => {
  return (
    <Wrapper title={props.title}>
      {props.groupedData.map((group) => (
        <Section
          key={group[0][0]}
          title={group[0][0].charAt(0)}
          extraClasses={"mt-6"}
        >
          <ul className="space-y-2">
            {group.map((item) => (
              <li key={item[0]}>
                <StringPair one={item[0]} two={item[1]} />
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </Wrapper>
  );
};

export default ListPage;
