// import React from "react";
// import "./MissionSection.css";

// function MissionSection() {
//   return (
//     <div className="pt-5 pb-5">
//       <div className="container-fluid">
//         <div className="row mb-3">
//           <div className="col-12 col-md-6 img-container" data-aos="fade-right">
//             <h1>Our Mission</h1>
//           </div>
//           <div className="col-12 col-md-6 txt-container">
//             <p>
//               To become the industry leader and simplify the process of
//               conducting assessments and examinations by unique and leading-edge
//               solutions.
//             </p>
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-12 col-md-6 txt-container order-2 order-md-1">
//             <p>
//               To become the industry leader and simplify the process of
//               conducting assessments and examinations by unique and leading-edge
//               solutions.
//             </p>
//           </div>
//           <div
//             className="col-12 col-md-6 img-container order-1 order-md-2"
//             data-aos="fade-left"
//           >
//             <h1>Our Vision</h1>
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-12 col-md-6 img-container" data-aos="fade-right">
//             <h1>Core Values</h1>
//           </div>
//           <div className="col-12 col-md-6 txt-container">
//             <p>
//               We Believe at- 1. Nurture each stakeholder 2. Efforts not excuses
//               3. Make positive impact 4. Experience is key
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MissionSection;

import React from "react";
import "./MissionSection.css";

const MissionSection = () => {
  const missionData = [
    {
      title: "Our Mission",
      text: "To become the industry leader and simplify the process of conducting assessments and examinations by unique and leading-edge solutions.",
      animation: "fade-right",
      order: "normal",
    },
    {
      title: "Our Vision",
      text: "To become the industry leader and simplify the process of conducting assessments and examinations by unique and leading-edge solutions.",
      animation: "fade-left",
      order: "reverse",
    },
    {
      title: "Our Core Values",
      text: "We believe in: 1. Nurturing each stakeholder 2. Efforts, not excuses 3. Making a positive impact 4. Experience is key.",
      animation: "fade-right",
      order: "normal",
    },
  ];

  return (
    <section className="mission-section">
      <div className="container">
        {missionData.map((item, index) => (
          <div
            key={index}
            className={`row mb-4 ${
              item.order === "reverse" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="col-md-6 img-container" data-aos={item.animation}>
              <h1>{item.title}</h1>
            </div>
            <div className="col-md-6 txt-container">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
