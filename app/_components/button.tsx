import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  active: boolean;
  extraClasses?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`px-2 py-0.5 text-sm uppercase ${
        props.active &&
        "font-semibold underline decoration-1 underline-offset-4"
      } ${props.extraClasses}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
