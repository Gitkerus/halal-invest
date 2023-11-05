import React from "react";

import "./ProjectBlock.scss";

import LinkMore from "../../../reusable/LinkMore/LinkMore";

const ProjectBlock = ({ title, description, img, rightText, link }) => {
  return (
    <div className="projectBlock">
      <div
        className={
          rightText
            ? "projectBlockText projectBlockText-right"
            : "projectBlockText"
        }
      >
        <div className="projectBlock__title">{title}</div>
        <div className="projectBlock__description">
          {description}
          <LinkMore path={link} className="projectBlock__link" />
        </div>
      </div>
      <img className="projectBlock__img" src={img} alt="projectBlock__img" />
    </div>
  );
};

export default ProjectBlock;
