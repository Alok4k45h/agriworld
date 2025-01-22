import React from "react";
import PageBanner from "../Components/Global/PageBanner/PageBanner";
import InvestorSection from "../Components/Local/GetInvolvedPage/InvestorSection/InvestorSection";
import DonateSection from "../Components/Local/GetInvolvedPage/DonateSection/DonateSection";
import DevIconSection from "../Components/Local/GetInvolvedPage/DevIconSection/DevIconSection";
import FaqSection from "../Components/Local/GetInvolvedPage/FaqSection/FaqSection";
import SocialConnectSection from "../Components/Local/GetInvolvedPage/SocialConnectSection/SocialConnectSection";
import NavigateTop from "../Components/Global/NavigateTop/NavigateTop";

function GetInvolved() {
  return (
    <div>
      <NavigateTop />
      <PageBanner
        title={"Alone we can do so little"}
        desc={"Together we can do so much..."}
        pageAddress={"www.agrigreen.org/getinvolved"}
      />
      <DonateSection />
      <DevIconSection />
      <SocialConnectSection />
      <FaqSection />
      <InvestorSection />
    </div>
  );
}

export default GetInvolved;
