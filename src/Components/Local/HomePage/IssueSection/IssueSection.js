import React from "react"; // More premium warning icon
import "./IssueSection.css";

function IssueSection() {
  const issues = [
    {
      icon: "🌍",
      title: "Climate Change and Its Impact on Agriculture",
      issue:
        "Climate change poses significant challenges to agriculture, including altered rainfall patterns, extreme weather events, and rising temperatures that negatively affect crop yields and food security.",
      approach:
        "We promote climate-smart agriculture and agroforestry practices that enhance resilience to climate change by improving soil health, increasing biodiversity, and diversifying crop production systems.",
    },
    {
      icon: "🌱",
      title: "Soil Degradation and Erosion",
      issue:
        "Unsustainable farming practices, such as excessive tilling and monoculture, lead to soil degradation and erosion, reducing agricultural productivity.",
      approach:
        "We advocate for soil conservation techniques such as cover cropping, crop rotation, and agroforestry to restore soil health and prevent erosion.",
    },
    {
      icon: "🌳",
      title: "Deforestation and Loss of Biodiversity",
      issue:
        "Deforestation and the loss of biodiversity due to agricultural expansion and unsustainable land-use practices are major contributors to environmental degradation.",
      approach:
        "Through agroforestry and tree-based farming systems, we encourage the restoration of degraded lands and the promotion of biodiversity, supporting ecosystems while improving agricultural productivity.",
    },
    {
      icon: "💧",
      title: "Pollution from Agricultural Practices",
      issue:
        "The use of synthetic fertilizers, pesticides, and improper waste disposal contributes to soil and water pollution, adversely affecting the environment and human health.",
      approach:
        "We promote organic farming, integrated pest management, and waste recycling practices to reduce pollution and minimize the use of harmful chemicals in agriculture.",
    },
    {
      icon: "♻️",
      title: "Waste Management and Pollution",
      issue:
        "Improper waste disposal in rural and agricultural areas leads to environmental pollution, including plastic waste and the burning of crop residues, which contribute to air pollution.",
      approach:
        "We advocate for sustainable waste management solutions, including recycling, composting, and using agricultural waste for energy production, reducing both pollution and waste in farming communities.",
    },
    {
      icon: "⚡",
      title: "Energy Inefficiency and Dependence on Fossil Fuels",
      issue:
        "Rural communities often rely on traditional, inefficient energy sources, such as wood and fossil fuels, leading to deforestation, health problems, and greenhouse gas emissions.",
      approach:
        "We promote the adoption of clean, renewable energy solutions, such as solar energy for irrigation and biogas plants for cooking and lighting, reducing reliance on polluting energy sources.",
    },
    {
      icon: "🚜",
      title: "Lack of Access to Sustainable Agricultural Technologies",
      issue:
        "Many farmers, particularly in rural areas, lack access to modern technologies and knowledge that could help improve productivity and sustainability.",
      approach:
        "We work to provide farmers with access to the latest agricultural technologies, such as precision farming tools, soil sensors, and climate-resilient crop varieties, enabling them to make informed decisions and improve their yields sustainably.",
    },
    {
      icon: "💰",
      title: "Rural Poverty and Limited Economic Opportunities",
      issue:
        "Many rural communities face economic hardship, with limited access to markets, financial resources, and business opportunities, especially for women and youth.",
      approach:
        "By organizing farmers into self-help groups and producer companies, we help create opportunities for economic growth, access to markets, and financial support, empowering rural youth and women to become leaders in sustainable farming.",
    },
    {
      icon: "♀️",
      title: "Gender Inequality in Agriculture",
      issue:
        "Women, particularly in rural communities, often face barriers to land ownership, access to resources, and decision-making power in agriculture.",
      approach:
        "We focus on gender inclusion by supporting women’s self-help groups, ensuring women have access to resources, training, and opportunities to take leadership roles in sustainable agricultural practices.",
    },
    {
      icon: "🤝",
      title: "Fragmented Farming Communities and Lack of Collective Action",
      issue:
        "Fragmented farming communities often lack the ability to collaborate and share resources, limiting their impact and access to larger markets or technological advancements.",
      approach:
        "We facilitate the formation of community organizations such as farmer producer companies and cooperatives, enabling farmers to work together, share knowledge, and access better resources, services, and markets.",
    },
  ];

  return (
    <div className="issue-section" id="issueSection">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="issue-section-heading text-center mb-5">
          Issues We Address
        </h1>

        {issues.map((issue, index) => (
          <div
            key={index}
            className={`row issue-card ${index % 2 ? "reverse" : ""}`}
          >
            <div className="col-12 col-md-4 text-center issue-icon-wrapper">
              <span className="issue-icon-content">{issue.icon}</span>
            </div>
            <div className="col-12 col-md-8 issue-text-content">
              <h2 className="issue-title">{issue.title}</h2>
              <p className="issue-description">
                <strong>Issue:</strong> {issue.issue}
              </p>
              <p className="issue-description">
                <strong>Our Approach:</strong> {issue.approach}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IssueSection;
