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
          "mb-3 h-fit w-full scroll-mt-36 border-b border-solid border-bookBlue border-opacity-50 text-xl font-semibold uppercase " +
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
