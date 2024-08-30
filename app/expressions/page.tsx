import { FC } from "react";
import { getExpressions } from "@dcm/data/data";
import ListPage from "@dcm/components/list-page/component";
import { Metadata } from "next";
import Footer from "@dcm/components/footer";
import Header from "@dcm/components/header";

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
