import React from "react";

import { Button } from "carbon-components-react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import project1 from "../../../assets/OurProjects/project1.png";
import project2 from "../../../assets/OurProjects/project2.png";
import project3 from "../../../assets/OurProjects/project3.png";
import project4 from "../../../assets/OurProjects/project4.png";
import project5 from "../../../assets/OurProjects/project5.png";

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
  // {
  //   id: "ourProject1",
  //   title: "Трейдинг",
  //   text: (
  //     <>
  //       <p>Адрес объекта: ул. Назарбаева</p>
  //       <p>Даты: 2020 год</p>
  //       <p>Срок: работы были выполнены за 12 дней</p>
  //       <p>Заказчик: ООО “Название компании”</p>
  //     </>
  //   ),
  //   img: project1,
  //   img_alt: "project1",
  //   link: "#",
  // },
  // {
  //   id: "ourProject2",
  //   title: "Консалтинг",
  //   text: (
  //     <>
  //       <p>Адрес объекта: Казань, ул. Гаврилова 1</p>
  //       <p>Даты: 2018 год</p>
  //       <p>Сроки: 12 дней</p>
  //       <p>Заказчик: ООО “Название компании”</p>
  //     </>
  //   ),
  //   img: project2,
  //   img_alt: "project2",
  //   link: "#",
  //   middle: true,
  // },
  // {
  //   id: "ourProject3",
  //   title: "Обучение",
  //   text: (
  //     <>
  //       <p>Адрес объекта: Казань</p>
  //       <p>Даты: 2021 год</p>
  //       <p>Заказчик: частное лицо</p>
  //     </>
  //   ),
  //   img: project3,
  //   img_alt: "project3",
  //   link: "#",
  // },
  // {
  //   id: "ourProject4",
  //   title: "Трейдинг",
  //   text: (
  //     <>
  //       <p>Адрес объекта: ул. Назарбаева</p>
  //       <p>Даты: 2020 год</p>
  //       <p>Срок: работы были выполнены за 12 дней</p>
  //       <p>Заказчик: ООО “Название компании”</p>
  //     </>
  //   ),
  //   img: project4,
  //   img_alt: "project4",
  //   link: "#",
  // },
  // {
  //   id: "ourProject5",
  //   title: "Консалтинг",
  //   text: (
  //     <>
  //       <p>Адрес объекта: Казань, ул. Гаврилова 1</p>
  //       <p>Даты: 2018 год</p>
  //       <p>Сроки: 12 дней</p>
  //       <p>Заказчик: ООО “Название компании”</p>
  //     </>
  //   ),
  //   img: project5,
  //   img_alt: "project5",
  //   link: "#",
  //   middle: true,
  // },
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
