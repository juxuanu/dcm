import React, { createRef, useEffect } from "react";
import Button from "@dcm/components/button";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  onHeightChange: (h: number) => void;
}

const Header: React.FC<Props> = (props) => {
  const router = useRouter();
  const headerRef = createRef<HTMLDivElement>();
  useEffect(
    () => props.onHeightChange(headerRef.current?.clientHeight ?? 0),
    [headerRef, props]
  );

  return (
    <header
      className={`w-full h-fit flex flex-col flex-nowrap justify-center items-center 
        px-4 py-6 mb-6 z-10 
        fixed top-0 left-0 
        bg-bookBlue text-neutral-100 dark:text-blue-200 dark:bg-black`}
      ref={headerRef}
    >
      <h1 className="text-2xl text-center mb-4 uppercase font-semibold w-full max-w-4xl">
        Mallorquí per catalans
      </h1>
      <nav className="flex flex-row flex-nowrap justify-around overflow-y-auto gap-1 w-full max-w-4xl [&>div]:w-fit">
        <div>
          <Button active={router.pathname === "/paraules"}>
            <Link href="/paraules">Paraules</Link>
          </Button>
        </div>
        <div>
          <Button active={router.pathname === "/expressions"}>
            <Link href="/expressions">Expressions</Link>
          </Button>
        </div>
        <div>
          <Button active={router.pathname === "/curiositats"}>
            <Link href="/curiositats">Curiositats</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
