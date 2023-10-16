import React, { useState } from "react";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import LightParticle from "./Components/Particles";
import Footer from "./Components/Footer/index";
import Works from "./Components/works/Works";

function App() {
  const [activeComponent, setActiveComponent] = useState("landing");
  const [mode, setMode] = useState("light");
  return (
    <>
      <LightParticle mode={mode} />
      <Navbar setActiveComponent={setActiveComponent} setMode={setMode} />
      {activeComponent === "landing" && <Landing />}
      {activeComponent === "about" && <About />}
      {activeComponent === "contact" && <Contact />}
      {activeComponent === "works" && <Works />}
      <Footer />
    </>
  );
}

export default App;
