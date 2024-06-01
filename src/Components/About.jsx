import React from "react";
import Navbar from "./Navbar";
import Pool from "../assets/Images/pool.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CEO from "../assets/Images/ceo.jpg";
import Rest from "../assets/Images/rest.jpg";
import Game from "../assets/Images/game.jpg";
import Power from "../assets/Images/power.jpg";
import Laundry from "../assets/Images/laundry.jpg";
import Bar from "../assets/Images/bar.jpg";
import Ten from '../assets/Images/ten.jpg'
import Home1 from '../assets/Images/home1.jpg'
import Home2 from '../assets/Images/home2.jpg'



const About = () => {
  let navigate = useNavigate();
  function nav() {
    navigate("/booking");
  }
  return (
    <div>
      <div id="boxx" className="box">
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
                <h1 style={{ fontSize: "50px" }}>About us!</h1>
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
                <h1 style={{ fontSize: "50px" }}>About us!</h1>
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
                <h1 style={{ fontSize: "50px" }}>About us!</h1>
                <p>ENJOY WITH US!</p>
                <Link to={"/booking"}>
                  <button className="bookBtn">Book Now </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div>
          <h6 style={{ lineHeight: "15px" }}>
            <div className="fs-1 ro">About Us</div>
            About Us
          </h6>
          <p>
            At the heart of Aiyeyemi Palace Hotel's success is our esteemed CEO,
            <span>Mr. Aiyeyemi</span>. His vision, dedication, and unwavering commitment to
            excellence have transformed our hotel into a premier destination for
            luxury and comfort. <span>Mr. Aiyeyemi's</span> passion for hospitality is
            evident in every aspect of our hotel, from the elegant design of our
            rooms to the exceptional service provided by our staff. Under his
            leadership, Aiyeyemi Palace Hotel continues to set new standards in
            the industry, ensuring every guest experiences the pinnacle of
            hospitality. Aiyeyemi Palace Hotel offers a perfect blend of luxury,
            comfort, and impeccable service.
          </p>
          <button onClick={nav} className='roomBtn mt-4 w-100'>Book Now</button>
        </div>
        <div>
          <img src={CEO} alt="" />
        </div>
      </div>
      <div className="gallery">
      <h6 style={{ lineHeight: "15px",textAlign:"center" }}>
            <div className="fs-1 ro">Gallery</div>
            Gallery
          </h6>
          <div className="galleryImages">
          <img className="shadow-lg" src={Rest} alt="" />
        <img className="shadow-lg" src={Pool} alt="" />
        <img className="shadow-lg" src={Bar} alt="" />
        <img className="shadow-lg" src={Game} alt="" />
        <img className="shadow-lg" src={Home2} alt="" />
        <img className="shadow-lg" src={Laundry} alt="" />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
