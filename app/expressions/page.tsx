import Footer from "@dcm/components/footer";
import Header from "@dcm/components/header";
import ListPage from "@dcm/components/list-page/component";
import { getExpressions } from "@dcm/data/data";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Expressions | MxC",
};

const Expressions: FC = async () => {
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
