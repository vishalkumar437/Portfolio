import React from 'react';
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { ThemeContext } from '../../context/context';
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = ({ setActiveComponent, setMode }) => {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false); // State to track the burger icon state

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleNavLinkClick = (componentName) => {
    setActiveComponent(componentName);
    setIsBurgerOpen(false);
  };

  React.useEffect(() => {
    if (toggle) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [toggle]);

  return (
    <>
      <div
        className={`Nav-MainContainer ${toggle ? 'dark-mode' : 'light-mode'}`}
      >
        <a href="/">
          <img src={logo} alt="Vishal Kumar" className="Nav-logo" />
        </a>
        {window.innerWidth > 767 && (
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
        </div>
        )}
        <div className='Nav-toggle'>
          {/* theme button */}
          <DarkModeToggle
            onChange={toggleFunction}
            checked={toggle}
            size={80}
          />
        </div>
        {window.innerWidth < 767 && (
          <div className={`burger-icon ${isBurgerOpen ? 'closed-burger' : 'open-burger'}`}
            onClick={handleBurgerClick}>
            <span className="burger-bun-top"></span>
            <span className="burger-middle"></span>
            <span className="burger-bun-bottom"></span>
          </div>
        )}

        {/* Render menu contents when burger icon is open */}
        {isBurgerOpen && (
          <div className={`Nav-Container ${isBurgerOpen ? 'active' : ''} ${toggle ? 'dark-mode' : 'light-mode'}`}>
            <div onClick={() => handleNavLinkClick('landing')} className="Nav-Link">
              Home
            </div>
            <div onClick={() => handleNavLinkClick('about')} className="Nav-Link">
              About
            </div>
            <div onClick={() => handleNavLinkClick('contact')} className="Nav-Link">
              Contact
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
