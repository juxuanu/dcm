import React from "react";
import { GetStaticProps } from "next";
import { getWords, Word } from "@dcm/data/data";
import ListPage from "@dcm/components/list-page/component";

interface Props {
  groupedWords: Word[][];
}

const Paraules: React.FC<Props> = (props) => (
  <ListPage groupedData={props.groupedWords} title={"Paraules"} />
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { groupedWords: await getWords() },
});

export default Paraules;
