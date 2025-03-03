import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ResultSection.css";

const ResultSection = () => {
  const results = [
    {
      id: 1,
      heading: "Enhanced Climate Resilience in Farming Communities",
      result:
        "By promoting agroforestry and climate-smart agriculture, we aim to enhance the resilience of farming communities to climate change. This includes increased crop yields, improved soil health, and reduced vulnerability to extreme weather events such as droughts and floods.",
      impact:
        "Communities will experience greater food security and sustainable farming practices that can thrive in changing environmental conditions.",
    },
    {
      id: 2,
      heading: "Restoration of Degraded Lands and Improved Biodiversity",
      result:
        "Through agroforestry and tree-based farming systems, we aim to restore degraded lands, increase forest cover, and promote biodiversity. This will help reduce deforestation, combat soil erosion, and improve local ecosystems.",
      impact:
        "A positive environmental transformation that benefits both wildlife and farmers, enhancing ecosystem services such as pollination, water retention, and soil fertility.",
    },
    {
      id: 3,
      heading: "Reduction in Pollution and Greenhouse Gas Emissions",
      result:
        "By advocating for sustainable farming practices, waste recycling, and renewable energy solutions, we aim to significantly reduce pollution, including plastic waste, chemical runoff, and carbon emissions.",
      impact:
        "Cleaner environments, healthier communities, and a reduction in agriculture-related greenhouse gas emissions, contributing to global climate change mitigation efforts.",
    },
    {
      id: 4,
      heading: "Increased Adoption of Renewable Energy Solutions",
      result:
        "Promote the use of renewable energy sources such as solar, wind, and biogas to replace traditional, polluting energy sources in farming and rural communities.",
      impact:
        "A shift towards clean, affordable energy that reduces dependence on fossil fuels, mitigates environmental damage, and improves the livelihoods of rural families by lowering energy costs.",
    },
    {
      id: 5,
      heading: "Empowered Communities and Improved Livelihoods",
      result:
        "We aim to strengthen rural communities by empowering local leaders, particularly through Agri Green community leaders and organizing rural youth into self-help groups and farmer producer companies.",
      impact:
        "Increased access to resources, markets, and education, leading to improved economic opportunities, better quality of life, and enhanced community cohesion.",
    },
    {
      id: 6,
      heading: "Gender Equality in Agriculture",
      result:
        "Through targeted support for women’s self-help groups and ensuring equal access to training, resources, and leadership opportunities, we aim to promote gender equality in agriculture and empower women in rural areas.",
      impact:
        "Women will play an integral role in decision-making, resource management, and the adoption of sustainable farming practices, contributing to stronger, more inclusive communities.",
    },
    {
      id: 7,
      heading: "Sustainable Waste Management and Circular Economy",
      result:
        "By introducing waste recycling initiatives and promoting composting, biogas production, and organic farming, we aim to create a circular economy that reduces waste and supports sustainable agricultural practices.",
      impact:
        "Decreased environmental pollution, reduced waste generation, and a more sustainable, closed-loop agricultural system.",
    },
    {
      id: 8,
      heading: "Improved Access to Sustainable Technologies",
      result:
        "We aim to increase the adoption of modern technologies in farming, including precision agriculture, digital tools, and smart irrigation systems, to optimize resource use and improve productivity.",
      impact:
        "Farmers will gain access to the latest technologies that boost efficiency, reduce costs, and increase agricultural productivity in an environmentally sustainable way.",
    },
    {
      id: 9,
      heading: "Stronger, More Resilient Farmer Networks",
      result:
        "By organizing farmers into cooperatives, producer companies, and community-based organizations, we aim to enhance collaboration, resource sharing, and market access among smallholder farmers.",
      impact:
        "Strengthened farmer networks will provide better access to financial resources, training, and collective bargaining power, improving the economic resilience of farming communities.",
    },
    {
      id: 10,
      heading: "Scalable Impact and Replication of Best Practices",
      result:
        "By 2035, we aim to create a replicable model of sustainable agriculture and natural resource management that can be scaled to reach larger populations and regions.",
      impact:
        "A widespread impact on rural communities across regions, promoting global best practices in agroforestry, waste management, and sustainable farming for a greener future.",
    },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Result Section */}
      <div className="results-section">
        <div className="container">
          <h1 className="result-section-heading">Results We Aim For</h1>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {results.map((result) => (
              <SwiperSlide key={result.id}>
                <div className="result-card">
                  <h2 className="result-card-title">{result.heading}</h2>
                  <p className="result-card-subtitle">
                    <strong>Result:</strong> {result.result}
                  </p>
                  <p className="result-card-subtitle">
                    <strong>Impact:</strong> {result.impact}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ResultSection;
