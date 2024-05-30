import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

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
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send('service_jjajkke', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseMessage('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setResponseMessage('Failed to send message.');
      });
  };

  return (
    <div>
      <form className='contactForm' onSubmit={sendEmail}>
        <div>
          <div><label>Full Name:</label></div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div><label>Email:</label></div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div><label>Phone:</label></div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div><label>Message:</label></div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='w-100' type="submit">Send Message</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
