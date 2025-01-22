import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <div className="background-container">
      <div className="content-box">
        <div className="banner-card" data-aos="zoom-in">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo Section */}
              <div className="col-md-6 text-center text-md-start">
                <img
                  src="https://res.cloudinary.com/alokkumar07/image/upload/v1737283184/Agrigreen/onlyLogoAgri_mrnnfw.png"
                  className="banner-image"
                  alt="AgriGreen Logo"
                />
              </div>

              {/* Text Section */}
              <div className="col-12 col-md-6 text-center text-md-start">
                <h1 className="banner-heading">
                  <span className="highlight-A">a</span>gri
                </h1>
                <h1 className="banner-heading">
                  <span className="highlight-G">G</span>reen
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default BannerSection;
