import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Footer } from "@dcm/components/footer";
import dynamic from "next/dynamic";

interface Props {
  title?: string;
}

const DynamicHeader = dynamic(() => import("@dcm/components/header"), {
  loading: () => (
    <div className="h-32 w-full mb-6 bg-bookBlue dark:bg-black animate-pulse"></div>
  ),
});

const Wrapper: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <>
      <Head>
        <title key={"title"}>
          {props.title ? `${props.title} | MxC` : "Mallorquí per catalans"}
        </title>
      </Head>
      <DynamicHeader />
      <main className="px-4 mb-12 max-w-4xl mx-auto mt-36">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
