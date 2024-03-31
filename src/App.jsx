import React from "react";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skill";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
