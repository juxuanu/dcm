import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Header from "@dcm/components/header";
import Footer from "@dcm/components/footer";

interface Props {
  title?: string;
}

const Wrapper: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <>
      <Head>
        <title key={"title"}>
          {props.title ? `${props.title} | MxC` : "Mallorquí per catalans"}
        </title>
      </Head>
      <Header />
      <main className="px-4 mb-12 max-w-4xl mx-auto mt-36">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;