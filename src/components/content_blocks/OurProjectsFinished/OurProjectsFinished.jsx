import React from "react";

import "./OurProjectsFinished.scss";

import ProjectBlock from "./ProjectBlock/ProjectBlock";

import project_1 from "../../../assets/OurProjectsFinished/finishedProject1.png";
import project_2 from "../../../assets/OurProjectsFinished/finishedProject2.png";
import project_3 from "../../../assets/OurProjectsFinished/finishedProject3.png";
import project_4 from "../../../assets/OurProjectsFinished/finishedProject4.png";

const ourProjectsFinished__data = [
  {
    id: "project1",
    img: project_1,
    title: (
      <>
        Трейдинг компании <br />
        ООО “Название компании”
      </>
    ),
    description: <>Описание работ</>,
    link: "/projects/project_1",
    rightText: false,
  },
  {
    id: "project2",
    img: project_2,
    title: (
      <>
        Трейдинг компании <br />
        ООО “Название компании”
      </>
    ),
    description: <>Описание работ</>,
    link: "/projects/project_2",
    rightText: true,
  },
  {
    id: "project3",
    img: project_3,
    title: (
      <>
        Трейдинг компании <br />
        ООО “Название компании”
      </>
    ),
    description: <>Описание работ</>,
    link: "/projects/project_3",
    rightText: false,
  },
  {
    id: "project4",
    img: project_4,
    title: (
      <>
        Трейдинг компании <br />
        ООО “Название компании”
      </>
    ),
    description: <>Описание работ</>,
    link: "/projects/project_4",
    rightText: true,
  },
];

const OurProjectsFinished = () => {
  return (
    <>
      <div className="ourProjectsFinished__title contentBlock__title">
        Наши проекты
      </div>
      <div className="ourProjectsFinishedContentWrapper">
        {ourProjectsFinished__data.map((project) => {
          return <ProjectBlock {...project} key={project.id} />;
        })}
      </div>
    </>
  );
};

export default OurProjectsFinished;
