import React from "react";
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Contact from "./Contact";
import Project from "./Project";
import Services from "./Services";
import Skill from "./Skill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Services></Services>
      <Project></Project> 
      <Blog></Blog>
      <Contact></Contact>
      
    </div>
  );
};

export default Home;
