import React from "react";
import { dataService, Word } from "@dcm/services";
import { GetStaticProps } from "next";
import ListPage from "@dcm/components/list-page";

interface Props {
  groupedWords: Word[][];
}

const Paraules: React.FC<Props> = (props) => (
  <ListPage groupedData={props.groupedWords} title={"Paraules"} />
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedWords: await dataService.getWords() },
});

export default Paraules;
