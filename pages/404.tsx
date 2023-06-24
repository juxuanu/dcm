import React from "react";
import { Wrapper } from "@dcm/components/wrapper";

const Custom404: React.FC = () => {
  return (
    <Wrapper title={"Pàgina no existent"}>
      <div className="w-fit h-fit m-auto text-center text-lg">
        Què fas tu aquí? Aquesta pàgina no existeix. Arruix!
      </div>
    </Wrapper>
  );
};

export default Custom404;
