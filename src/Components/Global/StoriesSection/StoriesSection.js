import React from "react";
import "./StoriesSection.css";

function StoriesSection() {
  return (
    <div className="stories-section pt-5 pb-5" data-aos="flip-left">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <h2 className="stories-section-sub-heading mb-3">Latest Stories</h2>
            <h1 className="stories-section-heading mb-3">
              People & Ideas making a Difference.
            </h1>
          </div>

          <div className="col-12 col-md-9">
            <div
              id="testimonialIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="stories-card text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/3001/3001758.png"
                      className="stories-card-image"
                      alt="..."
                    />
                    <p className="stories-card-description">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      nostra, sagittis himenaeos ultrices fringilla dapibus mus
                      a blandit malesuada, aliquet et fames laoreet sem risus
                      sociis.
                    </p>
                    <p className="stories-card-person-name">
                      - Name, Designation if any
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="stories-card text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/3001/3001758.png"
                      className="stories-card-image"
                      alt="..."
                    />
                    <p className="stories-card-description">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      nostra, sagittis himenaeos ultrices fringilla dapibus mus
                      a blandit malesuada, aliquet et fames laoreet sem risus
                      sociis.
                    </p>
                    <p className="stories-card-person-name">
                      - Name & Designation if any
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="stories-card text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/3001/3001758.png"
                      className="stories-card-image"
                      alt="..."
                    />
                    <p className="stories-card-description">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      nostra, sagittis himenaeos ultrices fringilla dapibus mus
                      a blandit malesuada, aliquet et fames laoreet sem risus
                      sociis.
                    </p>
                    <p className="stories-card-person-name">
                      - Name & Designation if any
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center ">
                <a
                  href="#testimonialIndicators"
                  role="button"
                  data-slide="prev"
                  className=""
                >
                  <span
                    className="carousel-control-prev-icon slide-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only carousel-prev-arrow">Previous</span>
                </a>

                <a
                  href="#testimonialIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon slide-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only carousel-control-next-icon">
                    Next
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesSection;
