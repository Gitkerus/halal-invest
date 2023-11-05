import React from "react";

import LinkMore from "../../reusable/LinkMore/LinkMore";

import "./AboutShort.scss";

import about from "../../../assets/about.png";

const AboutShort = () => {
  return (
    <>
      <div className="aboutShort__title contentBlock__title">О компании</div>
      <div className="aboutShortContentWrapper">
        <div className="aboutShortInfoWrapper">
          <div className="aboutShort__text">
            Компания ООО Спецустройство выполняет услуги: по вывозу грунта,
            вывоз мусора любого вида, как строительного, так и бытового. Услуги
            вывоза мусора контейнерами, вывоз снега, разработка котлованов в
            Москве и Московской области. Мы также предоставляем аренду
            спецтехники в Москве. Работаем без выходных и праздничных дней.
          </div>
          <LinkMore path="/about" />
        </div>
        <img className="aboutShort__img" src={about} alt="about" />
      </div>
    </>
  );
};

export default AboutShort;
