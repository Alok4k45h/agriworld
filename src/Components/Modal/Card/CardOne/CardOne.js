import React, { useState } from "react";
import "./CardOne.css";

function CardOne({
  imgLink,
  title,
  desc,
  techStack,
  listFirst,
  listSecond,
  WebLink,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="col-12 col-md-6 col-lg-4 cardOne shadow">
      <div className="cardOne-container text-center p-4">
        <img src={imgLink} className="cardOne-image w-100 mb-3" alt={title} />
        <h1 className="cardOne-title">{title}</h1>
        <p className="cardOne-desc">{desc}</p>
        <h3 className="highlight">
          <span className="span-highlight">Highlight:</span> {techStack}
        </h3>
        <button
          className="btn btn-link cardOne-modal-trigger"
          onClick={toggleModal}
        >
          Learn More
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  className="close"
                  onClick={toggleModal}
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <ul>
                  <li>{listFirst}</li>
                  <li>{listSecond}</li>
                </ul>
                <div className="text-center mt-3">
                  <a
                    href={WebLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <a href={WebLink} target="_blank" rel="noreferrer" className="mt-3">
          <img
            src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-round-navigation-icon-image_1344755.jpg"
            alt="Navigate"
            className="cardOne-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default CardOne;
