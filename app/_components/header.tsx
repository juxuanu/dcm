import React from "react";
import Link from "next/link";
import Button from "@dcm/app/_components/button";

export type PageType = "paraules" | "curiositats" | "expressions";

interface Props {
  currentPage?: PageType;
}

const Header: React.FC<Props> = ({ currentPage }) => {
  return (
    <header
      className={`fixed left-0 top-0 z-10 mb-6 flex h-32 
        w-full flex-col flex-nowrap items-center 
        justify-center bg-bookBlue px-4 
        py-6 text-neutral-100 dark:bg-black dark:text-blue-200`}
    >
      <Link href={"/"}>
        <h1 className="mb-4 w-full max-w-4xl whitespace-nowrap text-center text-2xl font-semibold uppercase">
          Mallorquí per catalans
        </h1>
      </Link>
      <nav className="flex w-full max-w-4xl flex-row flex-nowrap justify-around gap-1 overflow-y-auto [&>div]:w-fit">
        <div>
          <Link href="/paraules">
            <Button active={currentPage === "paraules"}>Paraules</Button>
          </Link>
        </div>
        <div>
          <Link href="/expressions">
            <Button active={currentPage === "expressions"}>Expressions</Button>
          </Link>
        </div>
        <div>
          <Link href="/curiositats">
            <Button active={currentPage === "curiositats"}>Curiositats</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
