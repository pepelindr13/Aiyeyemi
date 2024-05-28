import React from 'react'
import Navbar from './Navbar'
import Pool from '../assets/Images/pool.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
    let navigate = useNavigate();
    function nav() {
      navigate("/booking");
    }
  return (
    <div> 
    <div id='boxx' className="box">
        <div
          style={{
            position: "absolute",
            top: "10px",
            zIndex: "20000",
            width: "100%",
          }}
        >
          <Navbar />
        </div>
        <div
          style={{ position: "absolute", width: "100%" }}
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="firstCaro carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={Pool} className="d-block w-100" alt="..." />
              <div
                id="cap2"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1 style={{fontSize:"50px"}}>
                    About us!
                </h1>
                <p>HOTEL & RESORT!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Pool} className="d-block w-100" alt="..." />
              <div
                id="cap"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1 style={{fontSize:"50px"}}>
                    About us!
                </h1>
                <p>YOUR ROOM YOUR STAY!</p>
                <button onClick={nav} className="bookBtn">
                  Book Now{" "}
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Pool} className="d-block w-100" alt="..." />
              <div
                id="cap3"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1 style={{fontSize:"50px"}}>
                    About us!
                </h1>
                <p>ENJOY WITH US!</p>
                <Link to={"/booking"}>
                  <button className="bookBtn">Book Now </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default About