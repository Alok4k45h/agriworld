import React from "react";
// importing all components of home page
import NavbarTop from "../Components/Global/NavbarTop/NavbarTop";
import HomeComponent from "../Components/Local/HomePage/HomeComponent/HomeComponent";
import IntroSection from "../Components/Local/HomePage/IntroSection/IntroSection";
import IssueSection from "../Components/Local/HomePage/IssueSection/IssueSection";
import ResultSection from "../Components/Local/HomePage/ResultSection/ResultSection";
import NavigateTop from "../Components/Global/NavigateTop/NavigateTop";

function Home() {
  return (
    <div>
      <NavigateTop />
      <NavbarTop />
      <HomeComponent />
      <IntroSection />
      <IssueSection />
      <ResultSection />
    </div>
  );
}

export default Home;
