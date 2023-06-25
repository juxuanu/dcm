import React from "react";
import { dataService, Expression } from "@dcm/services";
import { GetStaticProps } from "next";
import ListPage from "@dcm/components/list-page";

interface Props {
  groupedExpressions: Expression[][];
}

const Expressions: React.FC<Props> = (props) => (
  <ListPage groupedData={props.groupedExpressions} title={"Expressions"} />
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedExpressions: await dataService.getExpressions() },
});

export default Expressions;
