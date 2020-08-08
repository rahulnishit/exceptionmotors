import React from "react";
import personal from "../src/Web/datasvg.png";
import Common from "./Common";

const Home = (props) => {
  return (
    <>
      <Common
        name="Earn Your profits with"
        visit="/account"
        imgsrc={personal}
        btname="Get Started "
        info="We are here to HELP YOU to earn your PROFITS!!!"
      />
    </>
  );
};
export default Home;
