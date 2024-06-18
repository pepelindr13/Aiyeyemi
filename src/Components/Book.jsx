import React from "react";
import Pool from "../assets/Images/pool.jpg";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { useState } from "react";
import Footer from "./Footer";
import Room1 from "../assets/Images/room1.jpg";
import Room2 from "../assets/Images/room2.jpg";
import Room3 from "../assets/Images/room3.jpg";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    phone:""
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
      phone: formData.phone,
      email: formData.email,
      check_in_date: formData.checkInDate,
      check_out_date: formData.checkOutDate,
      room_type: formData.roomType,
    };

    emailjs
      .send(
        "service_ap0xxkn",
        "template_b0uh22b",
        templateParams,
        "NVWsjfY94u8ldeolg"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Booking request sent successfully! contact 08033744276 for more information on your booking");
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
      <div style={{ position: "relative", height: "100vh" }}>
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
          <div id="bookCaro" className="firstCaro carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <img src={Room1} className="d-block w-100" alt="..." />
              <div
                className="carousel-caption animate__animated animate__slideInUp bounce"
                id="caption"
              >
                <h1 style={{fontSize:"40px"}}>Book Below!</h1>
                <p>HOTEL & RESORT!</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={Room2} className="d-block w-100" alt="..." />
              <div
                id="caption2"
                className="carousel-caption animate__animated animate__slideInUp bounce"
              >
                <h1 style={{fontSize:"40px"}}>Comfy & Luxurious Rooms</h1>
                <p>YOUR ROOM YOUR STAY!</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={Room1} className="d-block w-100" alt="..." />
              <div
                id="caption3"
                className="carousel-caption animate__animated animate__slideInUp bounce"
              >
                <h1 style={{fontSize:"40px"}}>Enjoy every second.</h1>
                <p>ENJOY WITH US!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="bookDiv pt-5">
            <div>
                <h2 className="mb-4">Book a room with us today and enjoy a relaxing & comfy stay </h2>
                <p className=" lh-lg text-secondary">Discover the perfect blend of luxury and comfort at <span style={{color:"#ec8004", fontWeight:"bold"}}>Aiyeyemi Palace Hotel</span>, where every stay is a memorable experience. Whether you're seeking a romantic getaway, a family vacation, or a business trip, our elegant rooms and top-notch amenities are designed to cater to all your needs.</p>
            </div>
            <div className="RbookDiv">
        <form className="shadow-lg p-4 w-100" onSubmit={sendEmail}>
            <h2 className="mb-4">Bo<span className="text-decoration-underline">ok A Ro</span>om</h2>
            <div className="w-100">
            <input
              placeholder="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-100">
            <div><label>Check-In Date:</label></div>
            <input
              placeholder="Check In"
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-100">
            <div><label>Check-Out Date:</label></div>
            <input
              placeholder="Check Out"
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-100">
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a room type
              </option>
              <option value="single">Vip Suite</option>
              <option value="double">Crown Executive</option>
              <option value="suite">Single Executive</option>
              <option value="suite">Single Ordinary</option>
            </select>
          </div>
          <div className="w-100">
            <input
              placeholder="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='w-100'>
        <label>Phone No:</label>
        <input
        placeholder='Phone number'
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
          <button className="bookBtn py-3 w-100 mt-4" type="submit">
            Book Now
          </button>
        </form>
      </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Book;
