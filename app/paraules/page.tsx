import React from "react";
import { getWords } from "@dcm/data/data";
import ListPage from "@dcm/app/_components/list-page/component";
import { Metadata } from "next";
import Footer from "@dcm/app/_components/footer";
import Header from "@dcm/app/_components/header";

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
