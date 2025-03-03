import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  // Social Media Links (Replace with actual URLs)
  const socialLinks = [
    { href: "#", icon: FaFacebook, className: "facebook" },
    { href: "#", icon: FaInstagram, className: "insta" },
    { href: "#", icon: FaLinkedinIn, className: "linkedin" },
    { href: "#", icon: FaYoutube, className: "youtube" },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo and Social Icons */}
          <div className="col-12 col-md-4 text-center">
            <img
              src="https://res.cloudinary.com/alokkumar07/image/upload/v1737282958/Agrigreen/agriLogo_pkorzp.png"
              className="logo mb-3"
              alt="Agrigreen Logo"
              loading="lazy"
            />
            <div className="social-icons">
              {socialLinks.map(({ href, icon: Icon, className }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-logo"
                  aria-label={`Agrigreen on ${className}`}
                >
                  <Icon className={className} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-6 col-md-4 mt-3">
            <h2 className="footer-section-heading">Contact Details</h2>
            <ul className="footer-section-list">
              <li className="footer-section-item">
                <FaMailBulk className="icon" />
                <span className="footer-section-text">agrigreen@gmail.com</span>
              </li>
              <li className="footer-section-item">
                <FaPhone className="icon" />
                <span className="footer-section-text">+91-xxxxxxxxx</span>
              </li>
              <li className="footer-section-item">
                <FaMapMarked className="icon" />
                <span className="footer-section-text">Company Address</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4 mt-3">
            <h2 className="footer-section-heading">Quick Links</h2>
            <ul className="footer-section-list">
              <li className="footer-section-item">
                <Link to="#" className="footer-item-link">
                  External Website Link
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <hr className="hr-footer" />
          <p className="footer-section-copyright">
            &copy; 2025 Agrigreen. All Rights Reserved. |
            <Link to="/privacy-policy" className="footer-item-link">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="footer-item-link">
              Terms of Use
            </Link>
          </p>
          <p className="footer-section-copyright">
            Agrigreen is a nonprofit organization.
          </p>
        </div>

        {/* Footer Image */}
        <div className="footerImageContainer text-center w-full">
          <img
            src="https://res.cloudinary.com/alokkumar07/image/upload/v1740853124/Agrigreen/open-nav-illustration.6cc7cf75_obl9ib.webp"
            alt="Agrigreen Footer Illustration"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
