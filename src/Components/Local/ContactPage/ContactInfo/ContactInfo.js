import React from "react";
import "./ContactInfo.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div
      className="contact-info-container"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="contact-info-content">
        <h1 className="info-title">Get Started Today</h1>
        <p className="info-desc">
          We’d love to hear from you. Enjoy a 15-minute no-obligation chat to
          answer your questions and discuss next steps. Call or send us a
          message—we’ll take care of the rest.
        </p>
        <div className="contact-details">
          <p className="contact-item">Phone: +91-xxxxxxxxxx</p>
          <p className="contact-item">Email: agrigreen@gmail.com</p>
        </div>
        <div className="social-links">
          <a href="#" aria-label="Facebook" className="social-link">
            <FaFacebook className="social-icon facebook" />
          </a>
          <a href="#" aria-label="Instagram" className="social-link">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="#" aria-label="YouTube" className="social-link">
            <FaYoutube className="social-icon youtube" />
          </a>
        </div>
        <div className="office-info">
          <h3 className="info-subtitle">Main Office</h3>
          <p className="info-desc">123 Street, City, Country</p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214785.17972077853!2d-0.24168169999999874!3d51.52873519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542db60f4c9%3A0xcca9e76b8fd48b6b!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1620205061550!5m2!1sen!2suk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
