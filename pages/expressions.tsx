import React from "react";
import { GetStaticProps } from "next";
import { Expression, getExpressions } from "@dcm/data/data";
import ListPage from "@dcm/components/list-page/component";

interface Props {
  groupedExpressions: Expression[][];
}

const Expressions: React.FC<Props> = (props) => (
  <ListPage groupedData={props.groupedExpressions} title={"Expressions"} />
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedExpressions: await getExpressions() },
});

export default Expressions;
