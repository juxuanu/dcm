import React from "react";
import corito from "../../public/corito.png";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="w-full h-fit max-w-4xl mx-auto mt-auto mb-10">
    <div className="w-auto mx-auto h-auto flex flex-row flex-nowrap content-center justify-center">
      <Image loading={"lazy"} src={corito} alt={"Cor blau"} />
    </div>
  </footer>
);

export default Footer;
