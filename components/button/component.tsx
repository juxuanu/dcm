import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  active: boolean;
  extraClasses?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`px-2 py-0.5 uppercase text-sm ${
        props.active &&
        "font-semibold underline underline-offset-4 decoration-1"
      } ${props.extraClasses}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
