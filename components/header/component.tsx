import React from "react";
import Button from "@dcm/components/button";
import { useRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header
      className={`w-full h-32 flex flex-col flex-nowrap justify-center items-center 
        px-4 py-6 mb-6 z-10 
        fixed top-0 left-0 
        bg-bookBlue text-neutral-100 dark:text-blue-200 dark:bg-black`}
    >
      <Link href={"/"}>
        <h1 className="text-2xl text-center mb-4 uppercase font-semibold w-full max-w-4xl">
          Mallorquí per catalans
        </h1>
      </Link>
      <nav className="flex flex-row flex-nowrap justify-around overflow-y-auto gap-1 w-full max-w-4xl [&>div]:w-fit">
        <div>
          <Link href="/paraules">
            <Button active={router.pathname === "/paraules"}>Paraules</Button>
          </Link>
        </div>
        <div>
          <Link href="/expressions">
            <Button active={router.pathname === "/expressions"}>
              Expressions
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/curiositats">
            <Button active={router.pathname === "/curiositats"}>
              Curiositats
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
