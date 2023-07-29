import React from 'react';
import logo from '../../Assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ setActiveComponent, isScrolled }) => {
  const handleNavLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className={`Nav-MainContainer ${isScrolled ? 'scrolled' : ''}`}>
        <a href="/">
          <img src={logo} alt="Vishal Kumar" className="Nav-logo" />
        </a>
        <div className="Nav-Container">
          <div onClick={() => handleNavLinkClick('landing')}>Home</div>
          <div onClick={() => handleNavLinkClick('about')}>About</div>
          <div onClick={() => handleNavLinkClick('contact')}>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
