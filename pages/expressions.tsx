import React from "react";
import { dataService, Expression } from "@dcm/services";
import { GetStaticProps } from "next";
import { Wrapper } from "@dcm/components/wrapper";
import { StringPair } from "@dcm/components/string-pair";
import { Section } from "@dcm/components/section";

interface Props {
  groupedExpressions: Expression[][];
}

const Expressions: React.FC<Props> = (props) => {
  return (
    <Wrapper title={"Expressions"}>
      {props.groupedExpressions.map((eg) => (
        <Section
          key={eg[0][0]}
          title={eg[0][0].charAt(0)}
          extraClasses={"mt-6"}
        >
          <ul className="space-y-2">
            {eg.map((e) => (
              <li key={e[0]}>
                <StringPair one={e[0]} two={e[1]} />
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedExpressions: await dataService.getExpressions() },
});

export default Expressions;
