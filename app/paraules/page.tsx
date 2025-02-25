import Footer from "@dcm/components/footer";
import Header from "@dcm/components/header";
import ListPage from "@dcm/components/list-page/component";
import { getWords } from "@dcm/data/data";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Paraules | MxC",
};

const Paraules: FC = async () => {
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
