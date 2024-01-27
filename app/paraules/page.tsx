import React from "react";
import { getWords } from "@dcm/data/data";
import ListPage from "@dcm/components/list-page/component";
import { Metadata } from "next";
import Footer from "@dcm/components/footer";
import Header from "@dcm/components/header";

export const metadata: Metadata = {
  title: "Paraules | MxC",
};

const Paraules: React.FC = async () => {
  const groupedWords = await getWords();

  return (
    <>
      <Header currentPage={"paraules"} />
      <ListPage groupedData={groupedWords} />
      <Footer />
    </>
  );
};

export default Paraules;
