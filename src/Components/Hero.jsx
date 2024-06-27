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
import Restaurant from "../assets/Images/restaurant.svg";
import Swim from "../assets/Images/swim.svg";
import Exq from "../assets/Images/exq.svg";
import Games from "../assets/Images/games.png";
import Footer from "./Footer";
import Email from "./Email";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tt1 from '../assets/Images/30k1.jpg'
import Home1 from '../assets/Images/home1.jpg'
import Cus1 from '../assets/Images/cus1.jpg'
import Cus2 from '../assets/Images/cus2.jpg'
import Cus3 from '../assets/Images/cus3.jpg'
import Cus4 from '../assets/Images/cus4.jpg'
import Cus5 from '../assets/Images/cus5.jpg'
import Topbtn from "./Topbtn";
import Loader from './FullScreenLoader'

const Hero = () => {

  let navigate = useNavigate();
  function nav() {
    navigate("/booking");
  }
  return (
    <div className="content">
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
          style={{ position: "absolute", width: "100%",height:"max-content" }}
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="firstCarou carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <img src={Home1} className="d-block w-100" alt="..." />
              <div
                id="cap2"
                className="carousel-caption animate__animated animate__slideInUp bounce fadeIn"
              >
                <h1>
                  Welcome to your tranquil oasis amidst the bustling city.
                </h1>
                <p>HOTEL & RESORT!</p>
                <button onClick={nav} className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={About2} className="d-block w-100" alt="..." />
              <div
                id="cap"
                className="carousel-caption animate__animated animate__slideInUp bounce fadeIn"
              >
                <h1>
                  At AIYEYEMI PALACE HOTEL, elevate your stay to an
                  unforgettable experience.
                </h1>
                <p>YOUR ROOM YOUR STAY!</p>
                <button onClick={nav} className="bookBtn">
                  Book Now{" "}
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={Room1} className="d-block w-100" alt="..." />
              <div
                id="cap3"
                className="carousel-caption animate__animated animate__slideInUp bounce fadeIn"
              >
                <h1>
                  Unwind in style at AIYEYEMI PALACE HOTEL.
                </h1>
                <p>ENJOY WITH US!</p>
                <Link to={"/booking"}>
                  <button onClick={nav} className="bookBtn">Book Now </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Email />
      </div>
      <div className="featured text-center ">
        <h6 className="fw-bold" style={{ lineHeight: "15px" }}>
          <div className="fs-1 ro fw-bold">Our Rooms</div>
        </h6>
        <h1 className="mt-4">
          Feat<span id="rse">ured Roo</span>ms
        </h1>
        <div className="rooms">
          <div className="roomFlex shadow-sm">
            <div className="p-5 roomcap">
              <h2>Vip Suite</h2>
              <p>
              Spacious and Stylish: Your Home Away from Home!. Create Lasting Memories in Our Family-Friendly Room!
              </p>
              <div>
                <span>₦30,000/Night</span>
                <Link to={"/booking"}>
                  <button id="spanBtn" onClick={nav}>BOOK NOW</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={Tt1} alt="" />
            </div>
          </div>
          <div className="roomFlex shadow-sm">
            <div>
              <img src={Room2} alt="" />
            </div>
            <div className="p-5 roomcap">
              <h2>Standard Suite</h2>
              <p>
               Comfort and Convenience in Our Cozy Standard Room, Affordable Elegance: Your Perfect Retreat!.
              </p>
              <div>
                <span>₦15,000/Night</span>
                <button id="spanBtn" onClick={nav}>BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="roomFlex shadow-sm">
            <div className="p-5 roomcap">
              <h2>Crown Executive</h2>
              <p>
               Business Meets Comfort in Our Executive Room, Stay Productive and Relaxed in Our Executive Accommodations!
              </p>
              <div>
                <span>₦25,000/Night</span>
                <button id="spanBtn" onClick={nav}>BOOK NOW</button>
              </div>
            </div>
            <div>
              <img src={Room1} alt="" />
            </div>
          </div>
        </div>
        <div  className="text-center mt-5">
        <Link to={'/rooms'}>
          <button className="bookBtn">MORE ROOMS</button>
        </Link>
        </div>
      </div>
      <div className="bookUs">
        <div className=" bookusBkg"></div>
        <div></div>
      </div>
        <div className="aboutContainer">
          <div className="abt text-center">
          <h6 className="fw-bold">
          <h1 className="fs-1 ro fw-bold">About</h1>
        </h6>
        <h1>
          Ab<span id="rse">out</span> Us
        </h1>
          </div>
      <div className="about w-100">
        <div className="">
          <h1>
            Unwind A Hotel Booking Agency at <span>Aiyeyemi Palace</span>
          </h1>
          <p className="my-3">
           <span>Mr. Aiyeyemi's</span> passion for hospitality is
            evident in every aspect of our hotel, from the elegant design of our
            rooms to the exceptional service provided by our staff. Under his
            leadership, Aiyeyemi Palace Hotel continues to set new standards in
            the industry, ensuring every guest experiences the pinnacle of
            hospitality. Aiyeyemi Palace Hotel offers a perfect blend of luxury,
            comfort, and impeccable service.
          </p>
          <div className="aboutSect">
            <div className="aboutSec">
              <div>
                <img src={Restaurant} alt="" />
              </div>
              <div>
                <h5>Restaurant</h5>
                <p>We believe in healthy living so we cook the best food.</p>
              </div>
            </div>
            <div className="aboutSec">
              <div>
                <img src={Swim} alt="" />
              </div>
              <div>
                <h5>Swiming Pool</h5>
                <p>
                  We Offer a nice sized pool for lovely swimming experience.
                </p>
              </div>
            </div>
            <div className="aboutSec">
              <div>
                <img src={Exq} alt="" />
              </div>
              <div>
                <h5>Exquisite Bedrooms</h5>
                <p>Lovely rooms with maximum comfort.</p>
              </div>
            </div>
            <div className="aboutSec">
              <div>
                <img src={Games} alt="" />
              </div>
              <div>
                <h5>Games & Fun</h5>
                <p>We offer fun Facilities like snooker and more.</p>
              </div>
            </div>
          </div>
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
                <img src={Pool} class="d-block abImg w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2400">
                <img src={Rest} class="d-block abImg w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      <div className="services text-center mt-5">
        <h6 className="fw-bold">
          <div className="fs-1 ro fw-bold">Our Services</div>
        </h6>
        <h1 className="mt-4">
          Explore <span id="rse">Our Hotel</span> Services
        </h1>
        <div className="serviceDiv">
          <div className="shadow-sm bg-light">
            <img src={Power} alt="" />
            <h4>24/7 Electricity</h4>
            <p>
            Enjoy Uninterrupted Comfort with Our Steady Electricity Supply!
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Laundry} alt="" />
            <h4>Laundry</h4>
            <p>
            Enjoy Crisp, Clean Clothes Every Day with Our On-Demand Laundry Service!
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Bar} alt="" />
            <h4>Bar & Drinks</h4>
            <p>
            Unwind with Signature Cocktails and Premium Beverages at Our Bar!
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Pool} alt="" />
            <h4>Swimming Pool</h4>
            <p>
            Dive into Luxury at Our Sparkling Swimming Pool!, Relax and Refresh in Our Pristine Swimming Pool!.
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Rest} alt="" />
            <h4>Restaurant</h4>
            <p>
            Indulge in Culinary Excellence at Our Gourmet Restaurant! Savor Delectable Dishes at Our Elegant Restaurant!.
            </p>
          </div>
          <div className="shadow-sm bg-light">
            <img src={Game} alt="" />
            <h4>Games</h4>
            <p>
            Endless Fun Awaits at Our State-of-the-Art Game Center!
            </p>
          </div>
        </div>
      </div>
      <div className="background-container shadow-sm px-5">
        <div className="cover d-none d-lg-block">
          <img src="https://preview.colorlib.com/theme/ecoho/assets/img/gallery/items2.png" alt="" />
        </div>
        <div>
          <h6 className="fs-1">BEST PLACE TO BE</h6>
          <h1 className="fs-3">
            Find the Best Hotel for Your <br />
            Next Vacation
          </h1>
        </div>
        <div>
          <button onClick={nav} className="bookBtn mt-3">BOOK ROOM</button>
        </div>
      </div>
      <div className="guestBook">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          <h1 className="f2-2 ro fw-bolder">Guestbook</h1>
          What o<span id="rse">ur customer</span>s say
        </h1>
        <div id="carouselExampleIndicators" class="carousel slide paddedCaro">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="customDiv d-flex  flex-column flex-lg-row justify-content-between">
                <div className="d-flex align-items-start customs">
                  <div>
                    <img className="custom" src={Cus1} alt="" />
                  </div>
                  <div>
                    <div className="d-flex stars">
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <h5 className="fw-bold mt-2">Mrs Bushirat Says:</h5>
                    <p>
                    A perfect blend of luxury and comfort. Our stay was unforgettable!
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start customs">
                  <div>
                    <img className="custom" src={Cus2} alt="" />
                  </div>
                  <div>
                    <div className="d-flex stars">
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <h5 className="fw-bold mt-2">Mrs salami Says:</h5>
                    <p>
                    The service was impeccable and the amenities exceeded our expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="customDiv d-flex  flex-column flex-lg-row justify-content-between">
                <div className="d-flex align-items-start customs">
                  <div>
                    <img className="custom" src={Cus3} alt="" />
                  </div>
                  <div>
                    <div className="d-flex stars">
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <h5 className="fw-bold mt-2">Mrs Aishat Says:</h5>
                    <p>
                    Beautiful rooms, great location, and top-notch hospitality!
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start customs">
                  <div>
                    <img className="custom" src={Cus4} alt="" />
                  </div>
                  <div>
                    <div className="d-flex stars">
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <h5 className="fw-bold mt-2">Mrs Mahmudat Says:</h5>
                    <p>
                    We felt right at home with the friendly staff and excellent facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="customDiv d-flex  flex-column flex-lg-row justify-content-between">
                <div className="d-flex align-items-start customs">
                  <div>
                    <img className="custom" src={Cus5} alt="" />
                  </div>
                  <div>
                    <div className="d-flex stars">
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <h5 className="fw-bold mt-2">Mrs Munirat Says:</h5>
                    <p>
                    The best hotel experience we've had in years. Highly recommend!
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start customs">
                  <div>
                    <img className="custom" src={Corridor} alt="" />
                  </div>
                  <div>
                    <div className="d-flex stars">
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                      <div>
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <h5 className="fw-bold mt-2">Mrs Oreoluwa Says:</h5>
                    <p>
                    Exceptional service and stunning decor. We can't wait to return!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
