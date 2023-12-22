import React from "react";
import Common from "./Common";
import icon from "../src/Web/Exception-motors.png";

const About = (props) => {
  return (
    <>
      <Common
        name="We are here to help you"
        imgsrc={icon}
        visit="/contact"
        btname="Contact Now "
        info="ExceptionMotors.com is a comprehensive webpage offering motorcycle suggestions from various companies. It provides detailed reviews, comparison tools, buying guides, user ratings, the latest industry news, maintenance tips, and features on different motorbike brands. The site aims to help users make informed decisions when choosing a motorcycle by providing valuable information and insights."
      />
    </>
  );
};
export default About;
