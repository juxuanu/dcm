import Footer from "../../components/footer.tsx";
import Header from "../../components/header.tsx";
import ListPage from "../../components/list-page/component.tsx";
import { getExpressions } from "../../data/data.ts";
import type { Metadata } from "next";
import type { FC } from "react";
import React from "react";

export const metadata: Metadata = {
  title: "Expressions | MxC",
};

const Expressions: FC = async () => {
  const groupedExpressions = await getExpressions();

  return (
    <>
      <Header currentPage="expressions" />
      <ListPage groupedData={groupedExpressions} />
      <Footer />
    </>
  );
};

export default Expressions;
