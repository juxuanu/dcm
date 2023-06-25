import React, { PropsWithChildren, useCallback, useState } from "react";
import Header from "@dcm/components/header";
import Head from "next/head";

interface Props {
  title?: string;
}

const Wrapper: React.FC<PropsWithChildren<Props>> = (props) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerHeightChangeCallback = useCallback(
    (h: number) => setHeaderHeight(h),
    []
  );

  return (
    <>
      <Head>
        <title key={"title"}>
          {props.title ? `${props.title} | MxC` : "MxC"}
        </title>
      </Head>
      <Header onHeightChange={headerHeightChangeCallback} />
      <main
        className="px-4 mb-8 max-w-4xl mx-auto"
        style={{ marginTop: headerHeight + 20 }}
      >
        {props.children}
      </main>
    </>
  );
};

export default Wrapper;
