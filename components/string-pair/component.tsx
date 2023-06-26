import React, { JSX } from "react";

interface Props {
  one: string;
  two: string;
  extraElement?: JSX.Element;
}

const StringPair: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-full">
      <h3 className="font-semibold first-letter:capitalize">{props.one}</h3>
      <div className="font-light w-full flex flex-row flex-nowrap justify-left content-baseline">
        {props.extraElement && (
          <div className="w-fit h-fit my-auto mr-4">{props.extraElement}</div>
        )}
        <p className="first-letter:capitalize w-full h-fit my-auto">
          {props.two}
        </p>
      </div>
    </div>
  );
};

export default StringPair;
