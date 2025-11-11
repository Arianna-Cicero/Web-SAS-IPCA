import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/svg/ipca-logo-green.svg";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="IPCA Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-menu">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/doacoes" ? "active" : ""}>
            <Link to="/doacoes">Doações</Link>
          </li>
          <li className={location.pathname === "/campanhas" ? "active" : ""}>
            <Link to="/campanhas">Campanhas</Link>
          </li>
          <li className={location.pathname === "/sobre" ? "active" : ""}>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
