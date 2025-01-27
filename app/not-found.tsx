import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Pàgina inexistent",
};

const NotFound: FC = () => {
  return (
    <div className="m-auto h-fit w-fit text-center text-lg">
      Què fas tu aquí? Aquesta pàgina no existeix. Arruix!
    </div>
  );
};

export default NotFound;
