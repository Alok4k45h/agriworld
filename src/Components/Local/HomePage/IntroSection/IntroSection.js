import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa"; // Animated Icon
import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section className="intros-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <IntroContent />
        </div>
      </div>
    </section>
  );
};

const IntroContent = () => (
  <div className="col-12 col-md-8 text-center">
    <h1 className="intros-heading">Who We Are ?</h1>
    <p className="intros-description">
      we are a passionate team on a mission to create a sustainable future
      through youth-driven agroforestry. By blending traditional wisdom with
      modern technology, we restore ecosystems, combat climate change, and
      promote sustainable farming.
    </p>
    <div className="btn-container">
      <Link to="/about" className="intros-link">
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h6.293L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export default IntroSection;
