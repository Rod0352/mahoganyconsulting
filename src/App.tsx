import React from "react";
import "./App.css";
import Intro from "./sections/intro";
import About from "./sections/about";
import Services from "./sections/services";
import Contact from "./sections/contact";

function App() {

  return (
    <>
      <Intro />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;
