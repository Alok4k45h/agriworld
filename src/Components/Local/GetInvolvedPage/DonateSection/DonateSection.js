import React from "react";
import "./DonateSection.css";

const DonateSection = () => {
  return (
    <section className="donate-section py-5" id="donateSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="donate-header">Contribute to Nature</h1>
            <p className="donate-desc">
              Your donations help sustain nature, protect wildlife, and support
              sustainable agriculture. Every little contribution makes a huge
              impact. Thank you for being a part of this movement towards a
              greener future.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="account-container text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h2 className="account-header">Direct Debit from Bank Account</h2>

              <div className="bank-details d-flex flex-wrap justify-content-center">
                <div
                  className="small-card"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h3 className="bank-title">Bank Details</h3>
                  <p>Account No: 123456789</p>
                </div>

                <div
                  className="small-card"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <h3 className="bank-title">IFSC Code</h3>
                  <p>SBIN0001234</p>
                </div>

                <div
                  className="small-card"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h3 className="bank-title">Bank Name</h3>
                  <p>State Bank of India</p>
                </div>

                <div
                  className="small-card"
                  data-aos="fade-up"
                  data-aos-duration="3500"
                >
                  <h3 className="bank-title">Bank Address</h3>
                  <p>XYZ City, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
