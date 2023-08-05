import React from "react";
import { DataService, Expression } from "@dcm/services";
import { GetStaticProps } from "next";
import { Skeleton } from "@dcm/components/list-page";
import dynamic from "next/dynamic";

interface Props {
  groupedExpressions: Expression[][];
}

const DynamicListPage = dynamic(() => import("@dcm/components/list-page"), {
  loading: () => <Skeleton />,
});

const Expressions: React.FC<Props> = (props) => (
  <DynamicListPage
    groupedData={props.groupedExpressions}
    title={"Expressions"}
  />
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedExpressions: await DataService.getExpressions() },
});

export default Expressions;
