import React from "react";
import Covercontainer from "../components/container/Covercontainer";
import Skills from "../components/container/Skills";
import AboutMeContainer from "../components/container/AboutMeContainer";
import ProjectContainer from "../components/container/ProjectContainer";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Covercontainer />
      <ProjectContainer />
      <Skills />
      <AboutMeContainer />
      <Contact />
    </>
  );
};

export default Home;
