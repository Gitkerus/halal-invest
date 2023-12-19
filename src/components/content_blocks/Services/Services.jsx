import React from "react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import service1 from "../../../assets/Services/service1.png";
import service2 from "../../../assets/Services/service2.png";
import service3 from "../../../assets/Services/service3.png";

import "./Services.scss";

const services = [
  {
    id: "service1",
    title: "Трейдинг",
    img: service1,
    img_alt: "service1",
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
    id: "service2",
    title: "Консалтинг",
    img: service2,
    img_alt: "service2",

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
    id: "service3",
    title: "Обучение",
    img: service3,
    img_alt: "service3",

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

const Services = ({ title }) => {
  return (
    <>
      <div className="services__title contentBlock__title">
        {title ? title : "Список основных услуг"}
      </div>
      <div className="servicesContent">
        {services.map((service) => {
          return <ContentBlockGrey {...service} key={service.id} />;
        })}
      </div>
    </>
  );
};

export default Services;
