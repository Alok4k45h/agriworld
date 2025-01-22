// import React from "react";
// import Typewriter from "typewriter-effect";
// import "./PageBanner.css";

// function PageBanner(props) {
//   return (
//     <div className="banner-page-section pt-5 pb-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-md-7 text-container  p-3 text-center">
//             <div className="search-input-container text-center p-3 m-3">
//               {props.pageAddress}
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
//                 alt="search icon"
//                 className="search-icon"
//               />
//             </div>

//             <h1 className="banner-page-section-heading">
//               <Typewriter
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString(`${props.title}`)
//                     .pauseFor(2500)
//                     .deleteAll()
//                     .typeString(`${props.desc}`)
//                     .pauseFor(2500)
//                     .start();
//                 }}
//               />
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PageBanner;

import React from "react";
import Typewriter from "typewriter-effect";
import "./PageBanner.css";

function PageBanner({ pageAddress, title, desc }) {
  return (
    <div className="banner-page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 text-container">
            <div className="search-container">
              <span className="page-address">{pageAddress}</span>
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="Search Icon"
                className="search-icon"
              />
            </div>

            <h1 className="page-banner-heading">
              <Typewriter
                options={{
                  strings: [title, desc],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
