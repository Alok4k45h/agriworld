// import React from "react";
// import ResultData from "./ResultData";
// import "./ResultSection.css";
// import CardOne from "../../../Modal/Card/CardOne/CardOne";

// function ResultSection() {
//   return (
//     <div className="pt-5 pb-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 text-center mb-3">
//             <h1 className="result-heading">Results We Aim For...</h1>
//           </div>

//           {ResultData.map((data) => (
//             <CardOne
//               key={data.id}
//               imgLink={data.image}
//               title={data.title}
//               desc={data.description}
//               techStack={data.technologies}
//               listFirst={data.listFirst}
//               listSecond={data.listSecond}
//               WebLink={data.link}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResultSection;

// import React from "react";
// import ResultData from "./ResultData";
// import "./ResultSection.css";
// import CardOne from "../../../Modal/Card/CardOne/CardOne";

// const ResultSection = () => {
//   return (
//     <section className="result-section py-5">
//       <div className="container">
//         <header className="text-center mb-4">
//           <h1 className="result-heading">Results We Aim For...</h1>
//         </header>

//         <div className="row">
//           {ResultData.map((data) => (
//             <CardOne
//               key={data.id}
//               imgLink={data.image}
//               title={data.title}
//               desc={data.description}
//               techStack={data.technologies}
//               listFirst={data.listFirst}
//               listSecond={data.listSecond}
//               WebLink={data.link}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResultSection;

import React from "react";
import ResultData from "./ResultData";
import "./ResultSection.css";
import CardOne from "../../../Modal/Card/CardOne/CardOne";

const ResultSection = () => {
  return (
    <section className="result-section">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="result-heading">Results We Aim For</h1>
          <p className="result-subheading">
            Our mission is to achieve meaningful, measurable results for the
            betterment of agriculture, nature, and climate sustainability.
          </p>
        </header>

        <div className="row g-4">
          {ResultData.map(
            ({
              id,
              image,
              title,
              description,
              technologies,
              listFirst,
              listSecond,
              link,
            }) => (
              <CardOne
                key={id}
                imgLink={image}
                title={title}
                desc={description}
                techStack={technologies}
                listFirst={listFirst}
                listSecond={listSecond}
                WebLink={link}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
