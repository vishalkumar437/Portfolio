import React,{useState,useEffect} from "react";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import LightParticle from "./Components/Particles";
import Footer from "./Components/Footer/index";

function App() {
  const [activeComponent, setActiveComponent] = useState("landing");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add a class to the body element to hide the scrollbar
    document.body.classList.add("hide-scrollbar");

    return () => {
      // Remove the class when the component unmounts
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);
  return (
      <>
        <LightParticle />
        <Navbar setActiveComponent={setActiveComponent} isScrolled={isScrolled}/>
          {activeComponent === "landing" && <Landing />}
          {activeComponent === "about" && <About />}
          {activeComponent === "contact" && <Contact />}
        <Footer/>
      </>
  );
}

export default App;
