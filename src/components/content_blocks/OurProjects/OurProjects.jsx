import React from "react";

import { Button } from "carbon-components-react";

import project1 from "../../../assets/OurProjects/project1.png";
import project2 from "../../../assets/OurProjects/project2.png";
import project3 from "../../../assets/OurProjects/project3.png";
import project4 from "../../../assets/OurProjects/project4.png";

import "./OurProjects.scss";

const OurProjects = () => {
  return (
    <>
      <div className="ourProjects__title contentBlock__title">
        Примеры наших работ
      </div>
      <div className="ourProjectsContentWrapper">
        <img
          className="ourProjects__img ourProjects__img-1"
          src={project1}
          alt="project1"
        />
        <img
          className="ourProjects__img ourProjects__img-2"
          src={project2}
          alt="project2"
        />
        <img
          className="ourProjects__img ourProjects__img-3"
          src={project3}
          alt="project3"
        />
        <img
          className="ourProjects__img ourProjects__img-4"
          src={project4}
          alt="project4"
        />
        <div className="ourProjectsBottomWrapper">
          <div className="ourProjects__text">
            Еще больше работ с описанием и этапами
          </div>
          <a href="/projects">
            <Button className="ourProjects__button">Смотреть кейсы</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
