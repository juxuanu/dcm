import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pàgina inexistent",
};

const NotFound: React.FC = () => {
  return (
    <div className="m-auto h-fit w-fit text-center text-lg">
      Què fas tu aquí? Aquesta pàgina no existeix. Arruix!
    </div>
  );
};

export default NotFound;
