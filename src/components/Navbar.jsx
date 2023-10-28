import { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../../public/logo_jc2.png";

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
          <img className="logo-navbar" src={logo} alt="logo.png" />
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
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/about">Nosotros</a>
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
