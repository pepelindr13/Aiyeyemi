import React from 'react'
import Room1 from '../assets/Images/room1.jpg'
import Room2 from '../assets/Images/room2.jpg'
import Room3 from '../assets/Images/room3.jpg'
import Star from '../assets/Images/rightarrow.png'
import Navbar from './Navbar'
import Tt1 from '../assets/Images/30k1.jpg'
import Tt2 from '../assets/Images/30k2.jpg'
import Tt3 from '../assets/Images/30k3.jpg'
import Tf1 from '../assets/Images/25k1.jpg'
import Tf2 from '../assets/Images/25k2.jpg'
import Tf3 from '../assets/Images/25k3.jpg'
import Footer from './Footer'
import Email from './Email'
import { useState } from 'react'


const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      check_in_date: formData.checkInDate,
      check_out_date: formData.checkOutDate,
      room_type: formData.roomType,
    };

    emailjs
      .send(
        "service_95ilu46",
        "template_b0uh22b",
        templateParams,
        "NVWsjfY94u8ldeolg"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Booking request sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send booking request.");
      });

    setFormData({
      name: "",
      email: "",
      checkInDate: "",
      checkOutDate: "",
      roomType: "",
    });
  };

  return (
    <div>
      <div style={{ position: "relative", height: "80vh" }}>
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
          style={{ position: "absolute", width: "100%"}}
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="firstCaro carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={Room1} className="d-block w-100" alt="..." />
              <div
                id="cap2"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Our rooms!
                </h1>
                <p>HOTEL & RESORT!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Room2} className="d-block w-100" alt="..." />
              <div
                id="cap"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Comfy & Luxurious Rooms
                </h1>
                <p>YOUR ROOM YOUR STAY!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={Room3} className="d-block w-100" alt="..." />
              <div
                id="cap3"
                className="carousel-caption animate__animated animate__slideInUp"
              >
                <h1>
                  Enjoy every second.
                </h1>
                <p>ENJOY WITH US!</p>
                <button className="bookBtn">Book Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Email/></div>
      <div className="roomContainer text-center">
        <h6 style={{lineHeight:"15px"}}>
        <div className="fs-1 fw-bolder ro">Rooms</div>
        OUR ROOMS
        </h6>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Tt1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Tt2} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Tt3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦30,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>VIP Suite</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Swimming pool</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Breakfast</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Car parking</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Restaurant & Bar</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Tf1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Tf2} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Tf3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦25,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Crown Executive</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Swimming pool</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Breakfast</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Car parking</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Restaurant & Bar</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦15,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Standard Suite</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Swimming pool</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>No Breakfast</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Car parking</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Restaurant & Bar</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦8,000/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Single Executive</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Swimming pool</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>No Breakfast</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Car parking</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Restaurant & Bar</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
        <div className='roomies text-start '>
        <div id="carouselExampleAutoplaying4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt={Room1}/>
    </div>
    <div class="carousel-item">
      <img src={Room1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div>
              <h1 className='fw-bold'>₦7,500/<span className='fs-5'>night</span></h1>
              <h2 className='my-4 fw-bold'>Single Ordinary</h2>
              <p>We all live in an age that belongs top the young at heart, Life that is becoming extremely fast Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque quo illum nisi dolores impedit!</p>
              <div className='roomInfo'>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Air Condition</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Swimming pool</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>No Breakfast</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Car parking</span>
              </div>
              <div className="d-flex align-items-center">
                <img className='rightArrow' src={Star} alt="" />
                <span>Restaurant & Bar</span>
              </div>
              </div>
              <button className='roomBtn'>Book Now</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Booking