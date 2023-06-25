import React from "react";

interface Props {
  one: string;
  two: string;
}

const StringPair: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-full">
      <div className="font-semibold first-letter:capitalize">{props.one}</div>
      <p className="font-light first-letter:capitalize">{props.two}</p>
    </div>
  );
};

export default StringPair;
