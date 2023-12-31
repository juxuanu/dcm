import React, { PropsWithChildren } from "react";

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
        className={
          "text-xl font-semibold w-full h-fit border-b border-solid border-bookBlue border-opacity-50 mb-3 uppercase scroll-mt-36 " +
          props.extraClasses
        }
      >
        {props.title}
      </h2>
      {props.children}
    </>
  );
};

export default Section;
