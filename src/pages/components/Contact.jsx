import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <div className="contact-info">
          <h2>Call Us</h2>
          <p>+263 224 879 023</p>
          <h2>Email Us</h2>
          <p>info@deignhub.zw.co</p>
          <h2>Location</h2>
          <p>1050 Mbare Arts
            Stodart Mbare
            Harare
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get In Touch With Design Hub</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
