import Button from "../components/button.tsx";
import Link from "next/link";
import type { FC } from "react";
import React from "react";

export type PageType = "paraules" | "curiositats" | "expressions";

interface Props {
  currentPage?: PageType;
}

const Header: FC<Props> = ({ currentPage }) => {
  return (
    <header className="bg-book-blue fixed top-0 left-0 z-10 mb-6 flex h-32 w-full flex-col flex-nowrap items-center justify-center px-4 py-6 text-neutral-100 dark:bg-black dark:text-blue-200">
      <Link.default href={{ pathname: "/" }}>
        <h1 className="mb-4 w-full max-w-4xl text-center text-2xl font-semibold whitespace-nowrap uppercase">
          Mallorquí per catalans
        </h1>
      </Link.default>
      <nav className="flex w-full max-w-4xl flex-row flex-nowrap justify-around gap-1 overflow-y-auto [&>div]:w-fit">
        <div>
          <Link.default href={{ pathname: "paraules" }}>
            <Button active={currentPage === "paraules"}>Paraules</Button>
          </Link.default>
        </div>
        <div>
          <Link.default href={{ pathname: "expressions" }}>
            <Button active={currentPage === "expressions"}>Expressions</Button>
          </Link.default>
        </div>
        <div>
          <Link.default href={{ pathname: "curiositats" }}>
            <Button active={currentPage === "curiositats"}>Curiositats</Button>
          </Link.default>
        </div>
      </nav>
    </header>
  );
};

export default Header;
