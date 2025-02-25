import React from "react";
import type { JSX } from "react";

interface Props {
  one: string;
  two: string;
  extraElement?: JSX.Element;
}

const StringPair: React.FC<Props> = (props) => {
  return (
    <div className="h-full w-full">
      <h3 className="font-semibold first-letter:capitalize">{props.one}</h3>
      <div className="justify-left flex w-full flex-row flex-nowrap content-baseline font-light">
        <p className="my-auto h-fit w-full first-letter:capitalize">
          {props.two}
        </p>
        {props.extraElement && (
          <div className="my-auto h-fit w-fit">{props.extraElement}</div>
        )}
      </div>
    </div>
  );
};

export default StringPair;
