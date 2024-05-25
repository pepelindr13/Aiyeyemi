import React from "react";
import Nine from "../assets/Images/body.jpg";
import Eight from "../assets/Images/home.jpg";
import Ten from "../assets/Images/ten.jpg";
import Navbar from "./Navbar";
import Right from "../assets/Images/right.png";
import About1 from "../assets/Images/about3.jpg";
import About2 from "../assets/Images/about2.jpg";
import Rest from "../assets/Images/rest.jpg";
import Pool from "../assets/Images/pool.jpg";
import Game from "../assets/Images/game.jpg";
import Power from "../assets/Images/power.jpg";
import Laundry from "../assets/Images/laundry.jpg";
import Bar from "../assets/Images/bar.jpg";
import find from "../assets/Images/about1.jpg";
import Room1 from "../assets/Images/room1.jpg";
import Room2 from "../assets/Images/room2.jpg";
import Room3 from "../assets/Images/room3.jpg";
import Star from "../assets/Images/star.png";
import Corridor from "../assets/Images/corridor.jpg";
import Restaurant from '../assets/Images/restaurant.svg';
const Hero = () => {
  return (
    <div>
      <div className="box">
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
              <img src={Corridor} className="d-block w-100" alt="..." />
              <div
                id="cap2"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Welcome to your tranquil oasis amidst the bustling city, where
                  every stay is a journey of comfort and luxury.
                </h1>
                <p>HOTEL & RESORT!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={About2} className="d-block w-100" alt="..." />
              <div
                id="cap"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  At Aiyeyemi Palace Hotel, Elevate your stay to an
                  unforgettable experience, where every moment is crafted with
                  care.
                </h1>
                <p>YOUR ROOM YOUR STAY!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Room1} className="d-block w-100" alt="..." />
              <div
                id="cap3"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Unwind in style at AIYEYEMI PALACE HOTEL, where every detail
                  is designed to exceed your expectations.
                </h1>
                <p>ENJOY WITH US!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="RBooking">
        <form action="">
          <div className="w-100">
            <label htmlFor="">Check In Date</label> <br />
            <input type="date" />
          </div>
          <div className="w-100">
            <label htmlFor="">Check Out Date</label>
            <input type="date" />
          </div>
          <div className="w-100">
            <label htmlFor="">Adults</label>
            <select name="" id="">
              <option value="">Adult 1</option>
              <option value="">Adult 2</option>
              <option value="">Adult 3</option>
            </select>
          </div>
          <div className="w-100">
            <label htmlFor="">Children</label>
            <select name="" id="">
              <option value="">Children 1</option>
              <option value="">Children 2</option>
              <option value="">Children 3</option>
            </select>
          </div>
          <button className="bootBtn">Book Now</button>
        </form>
      </div>
      <div className="featured text-center ">
        <h6 style={{ lineHeight: "15px" }}>
          <div className="fs-1 ro">Rooms</div>
          OUR ROOMS
        </h6>
        <h1 className="mt-4">
          Feat<span className="rse">ured Roo</span>ms
        </h1>
        <div className="rooms">
          <div className="roomFlex shadow-sm bg-light">
            <div className="p-5">
              <h2>Royal Room</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <span>₦8,000/Night</span>
                <button>BOOK NOW</button>
              </div>
            </div>
            <div>
              <img className="h-100" src={Room3} alt="" />
            </div>
          </div>
          <div className="roomFlex shadow-sm">
            <div>
              <img src={Room2} alt="" />
            </div>
            <div className="p-5">
              <h2>Deluxe Room</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <span>₦15,000/Night</span>
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="roomFlex shadow-sm">
            <div className="p-5">
              <h2>Standard Room</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <span>₦25,000/Night</span>
                <button>BOOK NOW</button>
              </div>
            </div>
            <div>
              <img style={{ height: "100%" }} src={Room1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bookUs">
        <div className=" bookusBkg"></div>
        <div></div>
      </div>
      <div className="about w-100">
        <div className="">
        <h6 style={{ lineHeight: "15px" }}>
          <div className="fs-1 ro">About Us</div>
          ABOUT US
        </h6>
          <h1 className="my-4">
            Unwind A Hotel Booking Agency at <span>Aiyeyemi Palace</span>
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi
            consequuntur maiores quia. Quam asperiores dignissimos esse sequi
            tempora? Saepe ab quam fugit! Quod, sit! Esse earum recusandae non
            tempora.
          </p>
          <div className="aboutSect">
            <div className="aboutSec">
              <div><img src={Restaurant} alt="" /></div>
              <div>
                <h5>Restaurant</h5>
                <p>We believe in healthy living so we cook the best food.</p>
              </div>
            </div>
            <div className="aboutSec">
              <div><img src={Restaurant} alt="" /></div>
              <div>
                <h5>Restaurant</h5>
                <p>We believe in healthy living so we cook the best food.</p>
              </div>
            </div>
            <div className="aboutSec">
              <div><img src={Restaurant} alt="" /></div>
              <div>
                <h5>Restaurant</h5>
                <p>We believe in healthy living so we cook the best food.</p>
              </div>
            </div>
            <div className="aboutSec">
              <div><img src={Restaurant} alt="" /></div>
              <div>
                <h5>Restaurant</h5>
                <p>We believe in healthy living so we cook the best food.</p>
              </div>
            </div>
          </div>
          <button className="bookBtn2 mt-4">BOOK A ROOM NOW</button>
        </div>
        <div className=" rightAbout">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner topRight">
              <div class="carousel-item active" data-bs-interval="1500">
                <img src={About2} class="d-block abImg w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2100">
                <img src={About1} class="d-block abImg w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2400">
                <img src={About2} class="d-block abImg w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services text-center mt-5">
        <h6 style={{ lineHeight: "15px" }}>
          <div className="fs-1 ro">Services</div>
          OUR SERVICES
        </h6>
        <h1 className="mt-4">
          Explore <span className="rse">Our Hotel</span> Services
        </h1>
        <div className="serviceDiv">
          <div className="shadow-sm bg-light">
            <img src={Power} alt="" />
            <h4>24/7 Electricity</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              corrupti ut? Repellat iste nobis placeat error deleniti voluptate
              dolorum possimus?
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Laundry} alt="" />
            <h4>Laundry</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              corrupti ut? Repellat iste nobis placeat error deleniti voluptate
              dolorum possimus?
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Bar} alt="" />
            <h4>Bar & Drinks</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              corrupti ut? Repellat iste nobis placeat error deleniti voluptate
              dolorum possimus?
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Pool} alt="" />
            <h4>Swimming Pool</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              corrupti ut? Repellat iste nobis placeat error deleniti voluptate
              dolorum possimus?
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Rest} alt="" />
            <h4>Restaurant</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              corrupti ut? Repellat iste nobis placeat error deleniti voluptate
              dolorum possimus?
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Game} alt="" />
            <h4>Games</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              corrupti ut? Repellat iste nobis placeat error deleniti voluptate
              dolorum possimus?
            </p>
          </div>
        </div>
      </div>
      <div className="background-container">
        <div>
          <h6>BEST PLACE TO BE</h6>
          <h1>
            Find the Best Hotel for Your <br />
            Next Vacation
          </h1>
        </div>
        <div>
          <button className="bookBtn mt-3">BOOK ROOM</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
