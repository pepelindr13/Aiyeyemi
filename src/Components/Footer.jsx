import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="foot w-100 overflow-hidden bg-dark text-light align-items-center ">
    <footer className="py-5 px-lg-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3 fw-bold">Address</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="https://maps.app.goo.gl/qqNnjv3ecNKeyZZu5" className="nav-link my-2 p-0 text-light">
              Find us on Google Maps<p className='text-light'>11 Paulson Odu Avenue, Omoologede Estate, Ogolonto, Ikorodu, Lagos</p>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
              Find us on Google Maps<p className='text-light'>No 10 shobowale alayo akasolori estate itokin road ikorodu</p>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://maps.app.goo.gl/qTXRC4aiEgKah3ss8?g_st=com.google.maps.preview.copy" className="nav-link my-2 p-0 text-light">
              Find us on Google Maps<p className='text-light'>Ajasse Ipo 251102, Kwara</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3 fw-bold">Navigation</h5>
          <ul className="nav flex-column">
            <Link to={'/'} style={{textDecoration:"none"}}>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Home
              </a>
            </li>
            </Link>
            <Link to={'/rooms'} style={{textDecoration:"none"}}>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Rooms
              </a>
            </li>
            </Link>
            <Link to={'/about'} style={{textDecoration:"none"}}>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                About
              </a>
            </li>
            </Link>
            <Link to={'/contact'} style={{textDecoration:"none"}}>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link my-2 p-0 text-light">
                Contact
              </a>
            </li>
            </Link>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className="fs-3">Booking</h5>
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
            <p id='month'>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              {/* <input id="newsletter1" type="text" className="form-control" placeholder="Email address"> */}
              <button className="  bookBtn" type="button">
                Book Now!
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