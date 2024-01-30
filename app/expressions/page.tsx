import React from "react";
import { getExpressions } from "@dcm/data/data";
import ListPage from "@dcm/app/_components/list-page/component";
import { Metadata } from "next";
import Footer from "@dcm/app/_components/footer";
import Header from "@dcm/app/_components/header";

export const metadata: Metadata = {
  title: "Expressions | MxC",
};

const Expressions: React.FC = async () => {
  const groupedExpressions = await getExpressions();

  return (
    <>
      <Header currentPage={"expressions"} />
      <ListPage groupedData={groupedExpressions} />
      <Footer />
    </>
  );
};

export default Expressions;
