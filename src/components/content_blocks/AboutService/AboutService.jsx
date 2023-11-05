import React from "react";

import "./AboutService.scss";

import AboutServiceContentBlock from "./AboutServiceContentBlock/AboutServiceContentBlock";

const AboutService = ({ data }) => {
  return (
    <>
      <div className="aboutService__title contentBlock__title">Об услуге</div>
      <div className="aboutServiceContentWrapper">
        {data.map((block) => {
          return <AboutServiceContentBlock {...block} key={block.id} />;
        })}
      </div>
    </>
  );
};

export default AboutService;
