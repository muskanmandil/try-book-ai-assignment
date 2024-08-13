import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Burger-menu */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navbar */}
      <nav>
        <ul className={isOpen ? "nav-links mobile-open" : "nav-links"}>
          <li>
            <a href="#overview" onClick={() => setIsOpen(false)}>
              Overview
            </a>
          </li>
          <li>
            <a href="#authentication" onClick={() => setIsOpen(false)}>
              Authentication
            </a>
          </li>
          <li>
            <a href="#endpoints" onClick={() => setIsOpen(false)}>
              Endpoints
            </a>
          </li>
          <li>
            <a href="#tutorial" onClick={() => setIsOpen(false)}>
              Tutorial
            </a>
          </li>
          <li>
            <a href="#code-examples" onClick={() => setIsOpen(false)}>
              Code Examples
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
