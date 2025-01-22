import React from "react";
import "./CardTwo.css";

function CardTwo({ imgLink, title, desc }) {
  return (
    <div className="col-12 col-md-4">
      <div className="d-flex flex-column flex-md-row social-card p-3 mb-4 shadow">
        <div className="text-content">
          <h3 className="cardTwo-title">{title}</h3>
          <p className="cardTwo-desc">{desc}</p>
        </div>
        <img src={imgLink} alt={title} className="cardTwo-img" />
      </div>
    </div>
  );
}

export default CardTwo;
