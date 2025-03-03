import React from "react";
import { FaLeaf, FaSeedling, FaGlobe, FaUsers } from "react-icons/fa";
import "./MissionSection.css";

const coreValues = [
  {
    title: "Sustainability",
    text: "We are dedicated to promoting sustainable agricultural practices that protect the environment, conserve natural resources, and ensure long-term ecological balance through agroforestry and best farming practices.",
    icon: <FaLeaf className="value-icon" />,
  },
  {
    title: "Innovation",
    text: "We embrace the latest technologies in agriculture, waste management, and renewable energy solutions to reduce pollution, improve efficiency, and drive positive change in environmental stewardship.",
    icon: <FaSeedling className="value-icon" />,
  },
  {
    title: "Collaboration",
    text: "We believe in the power of collective action. By engaging and empowering local communities, especially through self-help groups and farmer producer companies, we foster inclusive, community-driven solutions for sustainable development.",
    icon: <FaUsers className="value-icon" />,
  },
  {
    title: "Resilience",
    text: "We are committed to building climate-resilient farming systems that help communities adapt to environmental challenges and enhance their ability to thrive in an ever-changing world.",
    icon: <FaGlobe className="value-icon" />,
  },
  {
    title: "Intigrity",
    text: "We uphold the highest standards of transparency, accountability, and ethical practices in all our efforts, ensuring that our impact is both meaningful and sustainable.",
    icon: <FaGlobe className="value-icon" />,
  },
];

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container-fluid">
        {/* Mission & Vision Section */}
        <div className="mission-vision-section">
          <div className="mission-box" data-aos="fade-up">
            <h2>🌱 Our Mission</h2>
            <p>
              To empower farming communities with{" "}
              <strong>
                sustainable agroforestry, climate-smart agriculture &
                eco-innovation
              </strong>{" "}
              to combat{" "}
              <strong>
                climate change, pollution & environmental degradation.
              </strong>{" "}
              Through{" "}
              <strong>
                nature-based solutions, waste recycling & green energy
              </strong>
              , we drive resilient ecosystems and thriving livelihoods.
              <br />
              <br />
              By <strong>2035</strong>, we aim to revolutionize{" "}
              <strong>natural resource management</strong> through{" "}
              <strong>community-led action</strong>, fostering a greener,
              self-sustaining future. 🌱✨
            </p>
          </div>

          <div className="vision-box" data-aos="fade-up">
            <h2>🌍 Our Vision</h2>
            <p>
              To lead the transformation of agriculture through the promotion of{" "}
              <strong>agroforestry,</strong> empowering communities to adopt{" "}
              <strong>sustainable farming practices</strong> that combat{" "}
              <strong>
                climate change, restore ecosystems, and ensure long-term food
                security.
              </strong>
              <br />
              <br />
              We envision to create a greener, healthier planet by integrating{" "}
              <strong>innovative agricultural technologies</strong> and{" "}
              <strong>environmental stewardship, fostering resilience,</strong>{" "}
              and creating a harmonious balance between nature and food
              production.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="core-values-section" data-aos="fade-up">
          <h2>Our Core Values</h2>
          <p>
            At <strong>Agri Green Foundation</strong>, we are driven by a deep
            commitment to{" "}
            <strong>
              sustainability, innovation, and community empowerment
            </strong>
            .
            <br />
            Our values guide every initiative and action we take as we work
            towards a{" "}
            <strong>healthier planet and resilient farming communities:</strong>
          </p>

          <div className="core-values-container">
            {coreValues.map((value, index) => (
              <div key={index} className="core-value-box">
                {value.icon}
                <h3>{value.title}</h3>
                <p className="text-justify">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
