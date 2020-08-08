import React from "react";
import Common from "./Common";
import icon from "../src/Web/personal-growth.png";

const About = (props) => {
  return (
    <>
      <Common
        name="WE Will Help You"
        imgsrc={icon}
        visit="/contact"
        btname="Contact Now "
        info="We have come this far solely based on our core values serving as a moral compass in all our dealings. Fairness, Integrity and Transparency - FIT is the driving force behind all that we do here. We only work with people who fit into our professional ethos. Our constant endeavour is to deliver befittingly on all fronts to all our stakeholders. We are resolute in the observance of these values and will let go of any growth opportunities that deem unfit."
      />
    </>
  );
};
export default About;
