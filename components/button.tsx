import { cn } from "@dcm/styles/cn";
import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  active: boolean;
  extraClasses?: string;
}

const Button: FC<Props> = (props) => {
  return (
    <button
      type="button"
      className={cn(
        "px-2 py-0.5 text-sm uppercase cursor-pointer",
        props.active
          ? "font-semibold underline decoration-1 underline-offset-4"
          : undefined,
        props.extraClasses,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
