import React from "react";
import Typewriter from "typewriter-effect";
import "./HomeComponent.css";

function HomeComponent() {
  return (
    <div className="home-banner">
      <div className="home-content">
        <img
          src="https://res.cloudinary.com/alokkumar07/image/upload/v1737282958/Agrigreen/agriLogo_pkorzp.png"
          alt="AgriGreen Logo"
          className="logo-image"
        />
        <h3 className="home-description">Unifying</h3>
        <h1 className="typewriter-heading">
          <Typewriter
            options={{
              loop: true,
              delay: 75,
              strings: ["NATURE", "CLIMATE", "AGRICULTURE"],
              autoStart: true,
            }}
          />
        </h1>
        <h3 className="home-description">Introducing</h3>
        <h1 className="home-heading">
          <span className="highlight-A-home">a</span>gri
          <span className="highlight-G-home">G</span>reen
        </h1>
        <h3 className="home-description">
          Your One-Stop Solution for Sustainable Growth
        </h3>
      </div>
    </div>
  );
}

export default HomeComponent;
