import React from "react";
import { Link } from "react-router-dom";
import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section className="intro-section py-5 my-3">
      <div className="container">
        <div className="row align-items-center">
          <IntroVideo />
          <IntroContent />
        </div>
      </div>
    </section>
  );
};

const IntroVideo = () => (
  <div className="col-12 col-md-5" data-aos="fade-right">
    <div className="video-wrapper">
      <iframe
        title="Intro Video"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const IntroContent = () => (
  <div
    className="col-12 col-md-7 text-center text-md-left"
    data-aos="fade-left"
  >
    <h1 className="intro-heading">Who We Are...?</h1>
    <p className="intro-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <Link to="/about" className="intro-link">
      Know more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </Link>
  </div>
);

export default IntroSection;
