import React,{useState} from "react";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import LightParticle from "./Components/Particles";
import Footer from "./Components/Footer/index";

function App() {
  const [activeComponent, setActiveComponent] = useState("landing");
  //const [isScrolled, setIsScrolled] = useState(false);




  return (
      <>
        <LightParticle />
        <Navbar setActiveComponent={setActiveComponent} />
          {activeComponent === "landing" && <Landing />}
          {activeComponent === "about" && <About />}
          {activeComponent === "contact" && <Contact />}
        <Footer/>
      </>
  );
}

export default App;
