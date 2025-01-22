import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="intro-section">
    <div className="container">
      <div className="row align-items-center">
        <IntroContent />
        <IntroVideo />
      </div>
    </div>
  </section>
);

const IntroContent = () => (
  <div className="col-md-8 text-content" data-aos="fade-right">
    <h1 className="intro-heading text-center">We are agriGreen</h1>
    <p className="intro-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
  </div>
);

const IntroVideo = () => (
  <div className="col-md-4 video-container" data-aos="zoom-in">
    <iframe
      title="Intro Video"
      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
      allowFullScreen
      className="responsive-iframe"
    ></iframe>
  </div>
);

export default AboutSection;
