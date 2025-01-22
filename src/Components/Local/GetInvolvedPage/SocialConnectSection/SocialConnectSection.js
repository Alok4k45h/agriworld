import React from "react";
import {
  makeChangeData,
  natureData,
  interactData,
  exploreData,
} from "./SocialConnectData";
import "./SocialConnectSection.css";
import CardTwo from "../../../Modal/Card/CardTwo/CardTwo";

function SocialConnectSection() {
  const sections = [
    { title: "MAKE CHANGE", data: makeChangeData },
    { title: "BE NATURE’S HERO", data: natureData },
    { title: "INTERACT & SHARE", data: interactData },
    { title: "KEEP EXPLORING", data: exploreData },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="social-header">
              Engage Yourself with Our Social Activities
            </h1>
            <p className="social-desc">
              With just a few clicks, you can make a big difference for our
              planet. Discover how to stand up for nature, join our community,
              interact with our work, and spread the word.
            </p>
          </div>
        </div>

        {sections.map((section) => (
          <div className="row pt-3 pb-5" key={section.title}>
            <div className="col-12 text-center">
              <h2 className="social-Title">{section.title}</h2>
            </div>

            {section.data.map((data) => (
              <CardTwo
                key={data.id}
                imgLink={data.image}
                title={data.title}
                desc={data.desc}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialConnectSection;
