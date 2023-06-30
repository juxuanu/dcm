import React, { createContext, PropsWithChildren, useState } from "react";
import Header from "@dcm/components/header";
import Head from "next/head";
import { Footer } from "@dcm/components/footer";

interface Props {
  title?: string;
}

export const HeaderHeightContext = createContext(0);

const Wrapper: React.FC<PropsWithChildren<Props>> = (props) => {
  const [headerHeight, setHeaderHeight] = useState(120);

  return (
    <>
      <Head>
        <title key={"title"}>
          {props.title ? `${props.title} | MxC` : "Mallorquí per catalans"}
        </title>
      </Head>
      <Header onHeaderHeightChange={(h) => setHeaderHeight(h)} />
      <main
        className="px-4 mb-12 max-w-4xl mx-auto"
        style={{ marginTop: headerHeight + 20 }}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
