import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="intro-section">
    <div className="container">
      <div className="" data-aos="fade-up">
        <h1 className="intro-heading">We are AgriGreen</h1>
        <p className="intro-description">
          we are a passionate and diverse team of professionals dedicated to
          creating a sustainable future through participation of youth in the
          promotion of agroforestry. Our mission is to combat climate change,
          restore ecosystems, and address pressing environmental challenges by
          integrating innovative agricultural practices with cutting-edge
          technology. <br />
          Our team consist experts from a wide range of fields, including
          agriculture, environment, forestry, and technology, all working
          collaboratively to implement the best practices in crop production and
          land management. By combining traditional knowledge with modern
          advancements, we empower communities to adopt sustainable solutions
          that nurture both the land and its people. <br />
          We are committed to driving positive change, ensuring that
          agroforestry becomes a key strategy in building a resilient, greener
          world for future generations.
        </p>

        {/* Video Section */}
        <div className="video-container">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="AgriGreen Mission Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
