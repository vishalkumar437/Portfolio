import React from 'react';
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { ThemeContext } from '../../context/context';
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = ({ setActiveComponent, setMode }) => {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const handleNavLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };  
  React.useEffect(() => {
    console.log('Toggle value:', toggle); // Check if the value changes
    if (toggle) {
      console.log('Adding dark mode class to body');
      document.body.classList.add('dark-mode');
    } else {
      console.log('Removing dark mode class from body');
      document.body.classList.remove('dark-mode');
    }
  }, [toggle]);

  return (
    <>
      <div
        className={`Nav-MainContainer ${
          toggle ? 'dark-mode' : 'light-mode'
        }`}
      >
        <a href="/">
          <img src={logo} alt="Vishal Kumar" className="Nav-logo" />
        </a>
        <div className="Nav-Container">
          <div
            onClick={() => handleNavLinkClick('landing')}
            className={`Nav-Link ${toggle ? 'dark-mode' : 'light-mode'}`}
          >
            Home
          </div>
          <div
            onClick={() => handleNavLinkClick('about')}
            className={`Nav-Link ${toggle ? 'dark-mode' : 'light-mode'}`}
          >
            About
          </div>
          <div
            onClick={() => handleNavLinkClick('contact')}
            className={`Nav-Link ${toggle ? 'dark-mode' : 'light-mode'}`}
          >
            Contact
          </div>
          {/* theme button */}
          <DarkModeToggle
            onChange={toggleFunction}
            checked={toggle}
            size={80}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
