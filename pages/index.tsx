import React, { useEffect } from "react";
import { Wrapper } from "@dcm/components/wrapper";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "/paraules";
  }, []);
  return <Wrapper></Wrapper>;
};

export default Home;
