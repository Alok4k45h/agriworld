import React from "react";
import PageBanner from "../Components/Global/PageBanner/PageBanner";
import NavigateTop from "../Components/Global/NavigateTop/NavigateTop";

function Resources() {
  return (
    <div>
      <NavigateTop />
      <PageBanner
        title={"Resource Section"}
        desc={""}
        pageAddress={"www.agrigreen.org/resorces"}
      />
      Resources
    </div>
  );
}

export default Resources;
