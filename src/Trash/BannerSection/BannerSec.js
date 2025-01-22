import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <div className="background-blur">
      <div className="contentBox">
        <div className="banner-card shadow-lg p-3 bg-white" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 d-none d-md-flex">
                <div className="img-banner-card">
                  <img
                    src="https://www.smsfoundation.org/wp-content/uploads/2023/10/agriculture.png"
                    className="banner-section-image"
                    alt="..."
                  />
                </div>
              </div>

              <div className="col-12 col-md-8">
                <h1 className="banner-section-heading mb-3">
                  {" "}
                  <span className="spanA">A</span>gri
                  <span className="spanG">g</span>reen
                </h1>
                <p className="banner-section-description mb-3">
                  Some Punch Line
                </p>
                <hr className="hrstyle" />

                <div className="text-center mt-1">
                  <p className="banner-section-description">
                    Agriculture | Nature | Climate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blurred-box"></div>
    </div>
  );
};

export default BannerSection;
