import Button from "@dcm/components/button";
import Link from "next/link";
import type { FC } from "react";

export type PageType = "paraules" | "curiositats" | "expressions";

interface Props {
  currentPage?: PageType;
}

const Header: FC<Props> = ({ currentPage }) => {
  return (
    <header
      className={
        "bg-book-blue fixed top-0 left-0 z-10 mb-6 flex h-32 w-full flex-col flex-nowrap items-center justify-center px-4 py-6 text-neutral-100 dark:bg-black dark:text-blue-200"
      }
    >
      <Link href={{ pathname: "/" }}>
        <h1 className="mb-4 w-full max-w-4xl text-center text-2xl font-semibold whitespace-nowrap uppercase">
          Mallorquí per catalans
        </h1>
      </Link>
      <nav className="flex w-full max-w-4xl flex-row flex-nowrap justify-around gap-1 overflow-y-auto [&>div]:w-fit">
        <div>
          <Link href={{ pathname: "paraules" }}>
            <Button active={currentPage === "paraules"}>Paraules</Button>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: "expressions" }}>
            <Button active={currentPage === "expressions"}>Expressions</Button>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: "curiositats" }}>
            <Button active={currentPage === "curiositats"}>Curiositats</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
