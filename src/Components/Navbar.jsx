import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid d-flex justify-content-space-between">
          <a className="navbar-brand fw-bolder text-light" href="#">
            AIYEYEMI <br />
            PALACE
          </a>
            <div className="navbar-toggler hamburger text-light"
                        type="button"
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
          <ul className="navbar-nav w-100 d-flex">
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
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                BOOKING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                ROOMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
