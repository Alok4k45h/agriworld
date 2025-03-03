import React from "react";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import { FaGlobe, FaSeedling } from "react-icons/fa";
import "./HomeComponent.css";

function HomeComponent() {
  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false, // Prevents carousel from stopping on hover
  };

  return (
    <div className="home-banner">
      {/* Carousel Section with Dark Overlay */}
      <div className="carousel-container">
        <div className="dark-overlay"></div>{" "}
        {/* Dark overlay for better text visibility */}
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/alokkumar07/image/upload/v1740508588/Agrigreen/DALL_E_2025-02-26_00.02.30_-_A_stunning_homepage_background_for_a_professional_agriculture_nature_and_climate_website._The_image_features_a_lush_green_landscape_with_a_golden_su_ds1pam.webp"
              alt="Sustainable Farming"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/alokkumar07/image/upload/v1740912417/Agrigreen/a2040f46-7c1a-47c5-b438-e1bfd43af6d1.png"
              alt="Eco-Friendly Agriculture"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/alokkumar07/image/upload/v1740912716/Agrigreen/065e3bc5-e55e-4e0b-b267-e77d62f3501b.png"
              alt="Smart Agriculture"
              className="carousel-image"
            />
          </div>
        </Slider>
      </div>

      {/* Text Content Section */}
      <div className="home-content">
        <div className="glass-container">
          <h3 className="home-description">
            <FaGlobe className="icon" /> Uniting Nature, Climate & Agriculture
          </h3>

          <h1 className="typewriter-heading">
            <Typewriter
              options={{
                loop: true,
                delay: 75,
                strings: [
                  "Cultivating a Greener Future",
                  "Empowering Sustainable Growth",
                  "Revolutionizing Agriculture",
                ],
                autoStart: true,
              }}
            />
          </h1>

          <h3 className="home-description">
            <FaSeedling className="icon" /> Introducing
          </h3>

          <h1 className="home-heading">
            <span className="highlight-A-home">a</span>gri
            <span className="highlight-G-home">G</span>reen
          </h1>

          <h3 className="home-quote">
            "The future of farming lies in sustainability. Join the revolution."
            🌾
          </h3>

          {/* Call-to-Action Button */}
          <a href="#issueSection" className="cta-button">
            Explore More 🌎
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
