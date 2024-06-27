import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have this CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container d-flex justify-content-between align-items-center w-100">
        <Link to="/"  className="navbar-brand fw-bolder text-light text-center">
          <h4 className="fw-bolder">AIYEYEMI</h4>
          <h4 className="fw-bolder">PALACE</h4>
          <h4 className="fw-bolder">HOTEL</h4>
        </Link>
        <button id="hamburger" onClick={toggleNavbar}>
          &#9776;
        </button>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <NavLink
            exact
            to="/"
            className="nav-item"
            activeClassName="nav-item-active"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className="nav-item"
            activeClassName="nav-item-active"
            onClick={() => setIsOpen(false)}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item"
            activeClassName="nav-item-active"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-item"
            activeClassName="nav-item-active"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
