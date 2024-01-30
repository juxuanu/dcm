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
      className={`w-full h-32 flex flex-col flex-nowrap justify-center items-center 
        px-4 py-6 mb-6 z-10 
        fixed top-0 left-0 
        bg-bookBlue text-neutral-100 dark:text-blue-200 dark:bg-black`}
    >
      <Link href={"/"}>
        <h1 className="text-2xl text-center mb-4 uppercase font-semibold w-full max-w-4xl whitespace-nowrap">
          Mallorquí per catalans
        </h1>
      </Link>
      <nav className="flex flex-row flex-nowrap justify-around overflow-y-auto gap-1 w-full max-w-4xl [&>div]:w-fit">
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
