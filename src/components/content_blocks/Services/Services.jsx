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
        Американский рынок акций продемонстрировал уверенный рост <br />
        по итогам августа (индекс Исламских инвестиций полной доходности
        прибавил 5,3%) Лучше рынка показали себя акции нефтегазовой отрасли, ИТ,
        а также финансовый сектор. В наступающем месяце мы ожидаем продолжения
        роста в условиях повышения цен на нефть и сохранения относительно слабой
        национальной валюты.
      </>
    ),
    link: "#",
  },
  {
    id: "service2",
    title: "Консалтинг",
    img: service2,
    img_alt: "service2",

    text: (
      <>
        Оказываем финансовый консалтинг на тему того, что такое инвестиции и
        халяль инвестиции, в чем их принципиальная разница, а также о том, какие
        сущесвуют возможные уникальные формы сотрудничества и особые условия
        инвестирования для VIP клиентов.
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
        Обучение стратегии Доверительное управление, халяльные инвестиции,
        подборка пакетов для инвестирования. Обучение и сотрудничество в рамках
        компании Халяль инвест.
      </>
    ),
    link: "#",
  },
];

const Services = () => {
  return (
    <>
      <div className="services__title contentBlock__title">
        Список основных услуг
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
