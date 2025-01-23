import React from "react";
import "./FaqSection.css";
import ExpandCollapse from "../../../Modal/ExpandCollapse/ExpandCollapse";

function FaqSection() {
  return (
    <div className="py-5 faq-container" id="faqSection">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0"
            data-aos="zoom-in-up"
          >
            <img
              src="https://t4.ftcdn.net/jpg/01/28/17/47/360_F_128174778_0XvhB1qi70yXNOPuUFzBNT85xKaWnVde.jpg"
              alt="FAQ"
              className="faq-img"
            />
          </div>
          <div className="col-12 col-md-7">
            <h2 className="faq-header">Frequently Asked Questions</h2>
            <ExpandCollapse />
            <ExpandCollapse />
            <ExpandCollapse />
            <ExpandCollapse />
            <ExpandCollapse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
