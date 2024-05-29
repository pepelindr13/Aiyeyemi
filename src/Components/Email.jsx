import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
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

    emailjs.send('service_95ilu46', 'template_b0uh22b', templateParams, 'NVWsjfY94u8ldeolg')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Booking request sent successfully!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send booking request.');
      });

    setFormData({
      name: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
    });
  };

  return (
    <div className='RBooking'>
      <form onSubmit={sendEmail}>
      <div>
        <label>Email:</label>
        <input
        placeholder='Email address'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Check-In Date:</label>
        <input
        placeholder='Check In'
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Check-Out Date:</label>
        <input
        placeholder='Check Out'
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Room Type:</label>
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a room type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <button className='bootBtn w-25' type="submit">Book Now</button>
    </form>
    </div>
  );
};

export default Email;
