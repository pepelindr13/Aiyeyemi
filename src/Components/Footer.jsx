import React from 'react'

const Footer = () => {
  return (
    <div className="foot w-100 overflow-hidden bg-dark text-light px-5 align-items-center ">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3">Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3">Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3">Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              {/* <input id="newsletter1" type="text" className="form-control" placeholder="Email address"> */}
              <button className="  bookBtn" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer