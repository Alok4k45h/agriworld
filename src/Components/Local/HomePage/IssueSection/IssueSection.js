import React from "react";
import { Link } from "react-router-dom";
import "./IssueSection.css";

function IssueSection() {
  const issues = [
    {
      id: 1,
      image:
        "https://itrendly.com/wp-content/uploads/2022/09/Agriculture-Tools-used-in-Biotechnology-techniques.jpg",
      heading: "Sustainable Agriculture Practices",
      description:
        "Promoting eco-friendly farming methods to ensure soil health, water conservation, and sustainable food production for future generations.",
      animation: "zoom-in-right",
    },
    {
      id: 2,
      image:
        "https://itrendly.com/wp-content/uploads/2022/09/Agriculture-Tools-used-in-Biotechnology-techniques.jpg",
      heading: "Climate Resilience in Farming",
      description:
        "Helping farmers adapt to changing climatic conditions with innovative techniques and advanced technology.",
      animation: "zoom-in-left",
    },
    {
      id: 3,
      image:
        "https://itrendly.com/wp-content/uploads/2022/09/Agriculture-Tools-used-in-Biotechnology-techniques.jpg",
      heading: "Organic and Eco-Friendly Solutions",
      description:
        "Advocating for the use of organic inputs and natural pest management methods to reduce environmental impact.",
      animation: "zoom-in-right",
    },
  ];

  return (
    <div className="issue-section" data-aos="fade-up">
      <div className="container">
        <h1 className="issue-section-super-heading text-center mb-5">
          Issues We Address
        </h1>
        {issues.map((issue, index) => (
          <div
            key={issue.id}
            className={`row mb-5 issue-card p-3 ${
              index % 2 !== 0 ? "flex-md-row-reverse" : ""
            }`}
            data-aos={issue.animation}
          >
            <div className="col-12 col-md-5 text-center">
              <img
                src={issue.image}
                className="issue-section-img"
                alt={`Issue ${issue.id}`}
              />
            </div>
            <div className="col-12 col-md-7">
              <h1 className="issue-section-heading">{issue.heading}</h1>
              <p className="issue-section-description">{issue.description}</p>
              <Link to="" className="issue-item-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IssueSection;
