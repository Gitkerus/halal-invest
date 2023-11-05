import React from "react";

import "./OurProjectsFinished.scss";

import ProjectBlock from "./ProjectBlock/ProjectBlock";

import project_1 from "../../../assets/OurProjectsFinished/project_1.png";
import project_2 from "../../../assets/OurProjectsFinished/project_2.png";
import project_3 from "../../../assets/OurProjectsFinished/project_3.png";
import project_4 from "../../../assets/OurProjectsFinished/project_4.png";

const ourProjectsFinished__data = [
  {
    id: "project1",
    img: project_1,
    title: "Вывоз железобетонного боя с Тушинского РГС",
    description: (
      <>
        <p>Адрес объекта: Тушино</p>
        <p>Даты: 2020 год</p>
        <p>Срок: работы были выполнены за 12 дней</p>
        <p>Заказчик: Тушинский РГС</p>
      </>
    ),
    link: "/projects/project_1",
    rightText: false,
  },
  {
    id: "project2",
    img: project_2,
    title: "Вывоз грунта при строительстве станции метро Мнёвники",
    description: <></>,
    link: "/projects/project_2",
    rightText: true,
  },
  {
    id: "project3",
    img: project_3,
    title: "Вывоз грунта из старого спортивного комплекса Олимпийский",
    description: (
      <>
        <p>Адрес объекта: Москва ст. Олимпийский</p>
        <p>Заказчик: Олимпийский</p>
        <p>Даты: 2018 год</p>
      </>
    ),
    link: "/projects/project_3",
    rightText: false,
  },
  {
    id: "project4",
    img: project_4,
    title:
      "Вывоз отходов сноса здания и строительства по адресу Большой Харитоньевский переулок 13А с10",
    description: <></>,
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
