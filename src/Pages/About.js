import React from "react";
// importing all components of about page
import PageBanner from "../Components/Global/PageBanner/PageBanner";
import AboutSection from "../Components/Local/AboutPage/AboutSection/AboutSection";
import MissionSection from "../Components/Local/AboutPage/MissionSection/MissionSection";
import AgriTeam from "../Components/Local/AboutPage/AgriTeam/AgriTeam";
import NavigateTop from "../Components/Global/NavigateTop/NavigateTop";
import WhatWeAreDoing from "../Components/Local/AboutPage/WhatWeAreDoingSection/WhatWeAreDoing";

function About() {
  return (
    <div>
      <NavigateTop />
      <PageBanner
        title={"About Agreegreen"}
        desc={"Agrigreen is a nonprofit organization."}
        pageAddress={"www.agrigreen.org/about"}
      />
      <AboutSection />
      <MissionSection />
      <WhatWeAreDoing />
      <AgriTeam />
    </div>
  );
}

export default About;
