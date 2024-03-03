// Contact.jsx

import React from 'react';
import '../Contact.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out using the contact information below.</p>
        </div>
        
        <div className="contact-info">
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <p>Email: thakurharshsingh99@gmail.com</p>
            <p>Phone: +91 798-773-8583,+91 744-721-8478</p>
            <p>Address: 123 Main Street,Rawet, Pune</p>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map-container">
          {/* Embed a map or use a mapping API (e.g., Google Maps) */}
          {/* <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2dLongitude!3dLatitude!4d0.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ2LjYiTiAwMcKwMzInMDcuMCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
