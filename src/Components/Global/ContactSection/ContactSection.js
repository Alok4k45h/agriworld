import React, { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import "./ContactSection.css";

const ContactSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleShowModal = () => setShowContactModal(true);
  const handleCloseModal = () => setShowContactModal(false);

  return (
    <section className="contact-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="contact-heading">
              Get in Touch with <span className="highlight-text">Nature</span>
            </h1>
            <p className="contact-description">
              Have questions or want to collaborate? We're here to help. Let's
              build a greener future together!
            </p>
            <button className="contact-button" onClick={handleShowModal}>
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="https://dr-job.net/wp-content/uploads/2021/01/Contact-banner.jpg"
              alt="Contact Nature"
              className="contact-image"
            />
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal show={showContactModal} handleClose={handleCloseModal} />
    </section>
  );
};

export default ContactSection;
