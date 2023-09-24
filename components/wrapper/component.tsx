import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Footer } from "@dcm/components/footer";
import dynamic from "next/dynamic";
import { Skeleton as HeaderSkeleton } from "@dcm/components/header";

interface Props {
  title?: string;
}

const DynamicHeader = dynamic(() => import("@dcm/components/header"), {
  loading: () => <HeaderSkeleton />,
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
      <article className="px-4 mb-12 max-w-4xl mx-auto mt-36">
        {props.children}
      </article>
      <Footer />
    </>
  );
};

export default Wrapper;
