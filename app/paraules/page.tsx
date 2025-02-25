import React from "react";
import Footer from "../../components/footer.tsx";
import Header from "../../components/header.tsx";
import ListPage from "../../components/list-page/component.tsx";
import { getWords } from "../../data/data.ts";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Paraules | MxC",
};

const Paraules: FC = async () => {
  const groupedWords = await getWords();

  return (
    <>
      <Header currentPage="paraules" />
      <ListPage groupedData={groupedWords} />
      <Footer />
    </>
  );
};

export default Paraules;
