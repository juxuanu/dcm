import React from "react";
import { DataService, Word } from "@dcm/services";
import { GetStaticProps } from "next";
import { Skeleton } from "@dcm/components/list-page";
import dynamic from "next/dynamic";

interface Props {
  groupedWords: Word[][];
}

const DynamicListPage = dynamic(() => import("@dcm/components/list-page"), {
  loading: () => <Skeleton />,
});

const Paraules: React.FC<Props> = (props) => (
  <DynamicListPage groupedData={props.groupedWords} title={"Paraules"} />
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedWords: await DataService.getWords() },
});

export default Paraules;
