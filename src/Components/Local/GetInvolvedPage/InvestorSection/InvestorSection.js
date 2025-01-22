// import React from "react";
// import PersonCard from "../../../Modal/PersonCard/PersonCard";
// import InvestorName from "./InvestorData";
// import "./InvestorSection.css";

// function InvestorSection() {
//   return (
//     <div className="pt-5 pb-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 mb-3">
//             <p className="team-subheading">Our Top Investors</p>
//             <h1 className="team-heading">People Who Believe in our Vision</h1>
//           </div>

//           {InvestorName.map((data) => (
//             <PersonCard
//               key={data.id}
//               imgLink={data.image}
//               name={data.name}
//               position={data.position}
//               linkedInLink={data.linkedInLink}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InvestorSection;

import React from "react";
import PersonCard from "../../../Modal/PersonCard/PersonCard";
import InvestorName from "./InvestorData";
import "./InvestorSection.css";

function InvestorSection() {
  return (
    <section className="investor-container py-5" id="investorSection">
      <div className="container">
        <div className="text-center mb-4">
          <p className="team-subheading">Our Top Investors</p>
          <h1 className="team-heading">People Who Believe in our Vision</h1>
        </div>
        <div className="row">
          {InvestorName.map((data) => (
            <div key={data.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <PersonCard
                key={data.id}
                imgLink={data.image}
                name={data.name}
                position={data.position}
                linkedInLink={data.linkedInLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestorSection;
