import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/logo_transparent.png";
const Navbar = () => {
  return (
    <div className="px-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-space-between">
        <Link to={'/'} style={{textDecoration: "none"}}>
        <div className="navbar-brand">
        <a className="fw-bolder" href="#">
            AIYEYEMI <br />
            PALACE
          </a>
        </div>
        </Link>
            <div className="navbar-toggler hamburger text-light"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100 d-flex text-end">
            <Link style={{textDecoration:"none"}} to={'/'}>
            <li className="nav-item">
              <a
              id="navLink"
                className="nav-link active fw-bold "
                aria-current="page"
                href="#"
              >
                HOME 
              </a>
            </li>
            </Link>
            <Link style={{textDecoration:"none"}} to={'/rooms'}>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                ROOMS
              </a>
            </li>
            </Link>
            <Link to={'/about'} style={{textDecoration:"none"}}>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                ABOUT
              </a>
            </li>
            </Link>
            <Link to={'/contact'} style={{textDecoration:"none"}}>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                CONTACT
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
 