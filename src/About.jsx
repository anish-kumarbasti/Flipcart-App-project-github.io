import React from "react";
import Comman from "./Comman";
import web from "../src/img/rocket red.jpg";
export const About = () => {
  return (
    <>
      <Comman
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Us"
      />
    </>
  );
};

export default About;
