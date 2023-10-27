import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log("click");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Icon icon="healthicons:gym" width={30}/>
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? (
            <Icon icon="pepicons-pop:times" />
          ) : (
            <Icon icon="fa-solid:bars" />
          )}
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Acerca</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
