import React from "react";

import { Button } from "carbon-components-react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import project1 from "../../../assets/OurProjects/project1.png";
import project2 from "../../../assets/OurProjects/project2.png";
import project3 from "../../../assets/OurProjects/project3.png";

import "./OurProjects.scss";

const ourProject__data = [
  {
    id: "project1",
    title: "Трейдинг",
    img: project1,
    img_alt: "project1",
    text: (
      <>
        Зарубежный рынок акций продемонстрировал уверенный рост по итогам года.
        Лучше всего показали себя акции Фармацевтической отрасли, ИТ, а также
        финансовый сектор. В наступающем году мы ожидаем продолжения роста в
        условиях повышения спроса в отраслях
      </>
    ),
    link: "/services/service_1",
  },
  {
    id: "project2",
    title: "Консалтинг",
    img: project2,
    img_alt: "project2",

    text: (
      <>
        Получите профессиональную консультацию по трейдингу для повышения ваших
        инвестиционных результатов. Наши эксперты помогут вам разработать
        эффективные торговые стратегии и управлять рисками. Индивидуальный
        подход, актуальные рыночные аналитика и поддержка. Ваш успех в трейдинге
        начинается здесь!
      </>
    ),
    link: "#",
    middle: true,
  },
  {
    id: "project3",
    title: "Обучение",
    img: project3,
    img_alt: "project3",

    text: (
      <>
        Откройте мир трейдинга с нашими экспертными курсами. Присоединяйтесь к
        нашим интерактивным вебинарам и учебным программам, чтобы стать успешным
        трейдером. Научитесь анализировать рынки, строить стратегии и управлять
        рисками. Ваш путь к финансовой независимости начинается здесь
      </>
    ),
    link: "#",
  },
];

const OurProjects = () => {
  return (
    <>
      <div className="ourProjects__title contentBlock__title">
        Примеры наших работ
      </div>
      <div className="ourProjectsContentWrapper">
        {ourProject__data.map((project) => {
          return <ContentBlockGrey {...project} />;
        })}
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
