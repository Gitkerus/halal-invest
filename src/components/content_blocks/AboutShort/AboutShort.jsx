import React from "react";

import LinkMore from "../../reusable/LinkMore/LinkMore";

import "./AboutShort.scss";

import about from "../../../assets/about.png";

const AboutShort = () => {
  return (
    <>
      <div className="aboutShort__title contentBlock__title">О компании</div>
      <div className="aboutShortContentWrapper">
        <div className="aboutShortInfoWrapper">
          <div className="aboutShort__text"></div>
          <LinkMore path="/about" />
        </div>
        <img className="aboutShort__img" src={about} alt="about" />
      </div>
    </>
  );
};

export default AboutShort;
