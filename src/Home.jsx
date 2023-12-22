import React from "react";
import personal from "../src/Web/datasvg.png";
import Common from "./Common";

const Home = (props) => {
  return (
    <>
      <Common
        name="Get Experts Advice with"
        visit="/account"
        imgsrc={personal}
        btname="Get Started "
        info="We are here to select the best motorbike for you!!!"
      />
    </>
  );
};
export default Home;
