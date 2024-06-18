import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/logo_transparent.png";
import DelayedLink from "./DelayedLink";
const Navbar = () => {
  return (
    <div className="px-3 px-lg-5">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-space-between">
        <DelayedLink to={'/'} style={{textDecoration: "none"}}>
        <div className="navbar-brand text-center">
          <div>
          <a className="fw-bolder" href="#">
            AIYEYEMI 
          </a>
          </div>
          <div>
          <a className="fw-bolder" href="#">
            PALACE
          </a>
          </div>
        </div>
        </DelayedLink>
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
          <ul className="navbar-nav w-100 d-flex p-2 p-lg-0 text-start">
            <DelayedLink style={{textDecoration:"none"}} to={'/'}>
            <li className="nav-item">
              <a
              id="navLink"
                className="nav-link active fw-bold  text-decoration-none"
                aria-current="page"
                href="#"
              >
                HOME 
              </a>
            </li>
            </DelayedLink>
            <DelayedLink style={{textDecoration:"none"}} to={'/rooms'}>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                ROOMS
              </a>
            </li>
            </DelayedLink>
            <DelayedLink to={'/about'} style={{textDecoration:"none"}}>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                ABOUT
              </a>
            </li>
            </DelayedLink>
            <DelayedLink to={'/contact'} style={{textDecoration:"none"}}>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                CONTACT
              </a>
            </li>
            </DelayedLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
 