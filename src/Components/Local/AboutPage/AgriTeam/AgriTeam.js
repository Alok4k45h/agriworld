// import React from "react";
// import PersonCard from "../../../Modal/PersonCard/PersonCard";
// import AgriTeamData from "./AgriTeamData";
// import "./AgriTeam.css";

// function AgriTeam() {
//   return (
//     <div className="pb-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 mb-3">
//             <p className="team-subheading">Team Agrigreen</p>
//             <h1 className="team-heading">People Who Dreamt the Vision</h1>
//           </div>

//           {AgriTeamData.map((data) => (
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

// export default AgriTeam;

import React from "react";
import PersonCard from "../../../Modal/PersonCard/PersonCard";
import AgriTeamData from "./AgriTeamData";
import "./AgriTeam.css";

const AgriTeam = () => {
  return (
    <section className="agri-team-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <p className="team-subheading">Team Agrigreen</p>
          <h1 className="team-heading">People Who Dreamt the Vision</h1>
        </div>

        <div className="row">
          {AgriTeamData.map((data) => (
            <div key={data.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <PersonCard
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
};

export default AgriTeam;
