import React from "react";
import "./DevIconSection.css";

const DevIconSection = () => {
  return (
    <section
      className="container-fluid devicon-container py-5"
      data-aos="fade-up"
    >
      <div className="row text-center mx-auto">
        <div className="col-12 mb-4">
          <h1 className="devicon-header">Together We Empower Rural India</h1>
          <p className="devicon-desc">
            Your donation brings security and hope to rural areas of our
            country. Help us scale our work and reach many more people in need.
          </p>
        </div>

        <div className="col-6 col-md-3 mb-4 p-5">
          <div className="icon-card">
            <img
              src="https://www.smsfoundation.org/wp-content/uploads/2020/10/good-rural-up.png"
              alt="Agriculture Development"
              className="img-style"
            />
            <h3 className="icon-title">Agriculture Development</h3>
          </div>
        </div>

        <div className="col-6 col-md-3 mb-4 p-5">
          <div className="icon-card">
            <img
              src="https://www.smsfoundation.org/wp-content/uploads/2020/10/good-rural-up.png"
              alt="Rural Empowerment"
              className="img-style"
            />
            <h3 className="icon-title">Rural Empowerment</h3>
          </div>
        </div>

        <div className="col-6 col-md-3 mb-4 p-5">
          <div className="icon-card">
            <img
              src="https://www.smsfoundation.org/wp-content/uploads/2020/10/good-rural-up.png"
              alt="Sustainable Development"
              className="img-style"
            />
            <h3 className="icon-title">Sustainable Development</h3>
          </div>
        </div>

        <div className="col-6 col-md-3 mb-4 p-5">
          <div className="icon-card">
            <img
              src="https://www.smsfoundation.org/wp-content/uploads/2020/10/good-rural-up.png"
              alt="Community Support"
              className="img-style"
            />
            <h3 className="icon-title">Community Support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevIconSection;
