import React from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "../../Local/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../../Local/ContactPage/ContactInfo/ContactInfo";
import "./ContactModal.css";

const ContactModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="modal-fullscreen"
    >
      <Modal.Header className="m-auto" closeButton>
        <Modal.Title className=" modal-title mr-3">
          Get in Touch with Nature
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="contact-modal-body">
        <div className="row">
          <div className="col-md-6">
            <ContactInfo />
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="m-auto">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
