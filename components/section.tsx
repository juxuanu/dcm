import type React from "react";
import type { PropsWithChildren } from "react";

interface Props {
  title: string;
  extraClasses?: string;
  id?: string;
}

const Section: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <>
      <h2
        id={props.id}
        className={`border-book-blue/50 mb-3 h-fit w-full scroll-mt-36 border-b border-solid text-xl font-semibold uppercase ${props.extraClasses}`}
      >
        {props.title}
      </h2>
      {props.children}
    </>
  );
};

export default Section;
