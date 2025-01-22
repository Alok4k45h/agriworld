// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import "./PersonCard.css";

// function PersonCard(props) {
//   const { imgLink, name, position, linkedInLink } = props;
//   return (
//     <div
//       className="col-12 col-md-6 col-lg-4 person-card"
//       style={{
//         backgroundImage: `url(${imgLink})`,
//       }}
//     >
//       <div className="text-center card-text-container">
//         <h1 className="person-name">{name}</h1>
//         <p className="person-position">{position}</p>
//         <a href={linkedInLink} className="">
//           <FaLinkedin className="LinkedIn-icon" />
//           <span className="person-position">LinkedIn</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default PersonCard;

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./PersonCard.css";

const PersonCard = ({ imgLink, name, position, linkedInLink }) => {
  return (
    <div
      className="person-card"
      style={{
        backgroundImage: `url(${imgLink})`,
      }}
    >
      <div className="card-text-container">
        <h1 className="person-name">{name}</h1>
        <p className="person-position">{position}</p>
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin className="linkedin-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default PersonCard;
