import React from "react";
import "./WhatWeAreDoing.css";
import {
  FaLeaf,
  FaWater,
  FaRecycle,
  FaSolarPanel,
  FaSeedling,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaTree,
  FaCloudSun,
} from "react-icons/fa";

const practices = [
  {
    icon: <FaTree />,
    title: "Agroforestry Integration",
    practice:
      "Encourage the integration of trees with crops and livestock to enhance biodiversity, improve soil health, and sequester carbon.",
    impact:
      "Helps mitigate climate change, restore degraded lands, and increase farmers' resilience to environmental stressors.",
  },
  {
    icon: <FaSeedling />,
    title: "Soil Conservation and Fertility Management",
    practice:
      "Promote the use of cover crops, crop rotation, and composting to maintain soil fertility and prevent erosion.",
    impact:
      "Improves soil structure, reduces dependency on chemical fertilizers, and enhances long-term agricultural productivity.",
  },
  {
    icon: <FaWater />,
    title: "Water Conservation and Management",
    practice:
      "Encourage rainwater harvesting, efficient irrigation techniques like drip and sprinkler systems, and watershed management.",
    impact:
      "Helps conserve water resources, improves crop yield, and ensures water availability during dry periods.",
  },
  {
    icon: <FaCloudSun />,
    title: "Climate-Smart Agriculture",
    practice:
      "Introduce climate-resilient crop varieties and promote agroecological practices that adapt to changing climate patterns.",
    impact:
      "Enhances food security and minimizes the risks posed by climate change to agriculture.",
  },
  {
    icon: <FaRecycle />,
    title: "Waste Management and Recycling",
    practice:
      "Implement waste reduction strategies such as composting organic waste, recycling agricultural by-products, and converting waste into biogas or biochar.",
    impact:
      "Reduces pollution, lowers greenhouse gas emissions, and promotes a circular economy within farming communities.",
  },
  {
    icon: <FaSolarPanel />,
    title: "Sustainable Energy Solutions",
    practice:
      "Promote the use of renewable energy sources, such as solar-powered irrigation systems, biogas plants, and wind energy for farm operations.",
    impact:
      "Reduces carbon footprints, cuts energy costs, and supports energy independence for rural farming communities.",
  },
  {
    icon: <FaChartLine />,
    title: "Technology for Precision Agriculture",
    practice:
      "Leverage modern technologies such as drones, satellite imagery, and soil sensors to optimize crop management and resource use.",
    impact:
      "Increases crop yields, reduces waste, and ensures efficient use of fertilizers, water, and pesticides.",
  },
  {
    icon: <FaUsers />,
    title: "Community Mobilization and Empowerment",
    practice:
      "Mobilize rural youth into organizations such as women’s self-help groups and farmer producer companies to share knowledge, resources, and strengthen collective action.",
    impact:
      "Fosters community-driven sustainable development, improves access to markets, and promotes gender equality in agriculture.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Farmer Education and Capacity Building",
    practice:
      "Provide regular training on best practices in agroforestry, sustainable agriculture, and new technologies, delivered by Agri Green community leaders and experts.",
    impact:
      "Enhances the knowledge base of young generation farmers, improving their ability to make informed decisions that benefit both their livelihoods and the environment.",
  },
  {
    icon: <FaLeaf />,
    title: "Monitoring and Impact Evaluation",
    practice:
      "Implement regular monitoring systems to assess the environmental and socio-economic impact of agricultural practices and initiatives.",
    impact:
      "Ensures the effectiveness of our programs, enables data-driven decision-making, and helps scale successful practices across regions.",
  },
];

function WhatWeAreDoing() {
  return (
    <div className="what-we-are-doing-section">
      <h1 className="section-heading">🌱 What We Are Doing</h1>
      <div className="practices-container text-center">
        {practices.map((item, index) => (
          <div key={index} className="practice-card" data-aos="fade-up">
            <div className="practice-icon">{item.icon}</div>
            <h2 className="practice-title">{item.title}</h2>
            <p className="practice-description">
              <strong>Practice:</strong> {item.practice}
            </p>
            <p className="impact-description">
              <strong>Impact:</strong> {item.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeAreDoing;
