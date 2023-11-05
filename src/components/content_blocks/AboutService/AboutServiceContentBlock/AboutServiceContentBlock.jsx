import React from "react";

import "./AboutServiceContentBlock.scss";

const AboutServiceContentBlock = ({ img, title, text, textRight }) => {
  return (
    <div className="aboutServiceContentBlock">
      <div
        className={
          img
            ? "aboutService__text"
            : "aboutService__text aboutService__text-noImg"
        }
      >
        <p className="aboutService__text__title">{title}</p>
        {text}
      </div>
      {img ? (
        <img
          src={img}
          alt="aboutService__img"
          className={
            textRight
              ? "aboutService__img aboutService__img-left"
              : "aboutService__img"
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AboutServiceContentBlock;
