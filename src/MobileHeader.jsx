import { useState } from 'react';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header id="hamburger-nav">
      <h1>Fabio Lacerda</h1>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`${isOpen ? 'hamburger-icon open' : 'hamburger-icon'}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={`${isOpen ? 'hamburger-links open' : 'hamburger-links'}`}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
