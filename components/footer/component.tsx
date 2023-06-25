import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full h-fit max-w-4xl mx-auto mt-auto mb-10">
    <div className="w-full h-fit flex flex-row flex-nowrap content-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-auto h-5 mx-auto"
        loading={"lazy"}
        src={"/corito.webp"}
        alt={"Cor blau"}
      />
    </div>
  </footer>
);

export default Footer;
