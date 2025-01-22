import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ContactModal from "../ContactModal/ContactModal";
import "./NavbarTop.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/getinvolved", label: "Get Involved" },
  { path: "/resources", label: "Resources" },
];

const Navbars = () => {
  const [navColor, setNavColor] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setNavColor(window.scrollY >= 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleShowModal = () => {
    setShowContactModal(true);
    setExpanded(false); // Collapse the navbar when opening the modal
  };

  const handleCloseModal = () => setShowContactModal(false);

  const handleNavItemClick = () => setExpanded(false); // Collapse navbar on menu click

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`nav-container fixed-top ${navColor ? "colorChange" : ""}`}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
            <img
              src="https://res.cloudinary.com/alokkumar07/image/upload/v1737283184/Agrigreen/onlyLogoAgri_mrnnfw.png"
              className="agrigreen-logo"
              alt="Logo"
            />
            <span className="nav-heading">agriGreen</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-responsive"
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse id="navbar-responsive">
            <Nav className="mx-auto text-center">
              {navLinks.map(({ path, label }) => (
                <Nav.Link
                  key={path}
                  as={Link}
                  to={path}
                  className={`nav-link-item ${
                    location.pathname === path ? "active" : ""
                  }`}
                  onClick={handleNavItemClick}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>

            <div className="navbar-actions text-center">
              <Button
                variant="outline-success"
                onClick={handleShowModal}
                className="nav-button"
              >
                Contact
              </Button>
              <Link to="/getinvolved#donateSection">
                <Button
                  variant="warning"
                  className="nav-button"
                  onClick={handleNavItemClick}
                >
                  Donate
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Modal */}
      <ContactModal show={showContactModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Navbars;
