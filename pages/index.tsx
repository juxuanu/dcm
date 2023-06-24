import React, { useEffect } from "react";
import { Wrapper } from "@dcm/components/wrapper";

const Home: React.FC = () => {
  useEffect(() => {
    window.location.href = "/paraules";
  }, []);
  return <Wrapper></Wrapper>;
};

export default Home;
