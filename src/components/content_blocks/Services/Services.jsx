import React from "react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import service1 from "../../../assets/Services/service1.png";
import service2 from "../../../assets/Services/service2.png";
import service3 from "../../../assets/Services/service3.png";

import "./Services.scss";

const services = [
  {
    id: "service1",
    title: "Вывоз и утилизация",
    img: service1,
    img_alt: "service1",
    text: (
      <ol type="1">
        <li>Вывоз грунта</li>
        <li>Вывоз мусора</li>
        <li>Вывоз строительного мусора</li>
        <li>Вывоз мусора контейнерами</li>
        <li>Вывоз бетонного боя</li>
        <li>Вывоз снега</li>
        <li>Талоны на утилизацию</li>
      </ol>
    ),
    link: "#",
  },
  {
    id: "service2",
    title: "Земляные работы",
    img: service2,
    img_alt: "service2",

    text: (
      <ol type="1">
        <li>Земляные работы для подготовки строительных участков</li>
        <li>
          Копка котлованов, траншей и фундаментов с использованием современной
          техники
        </li>
        <li>
          Устройство дренажных систем и регулирование уровня грунтовых вод
        </li>
        <li>Песок карьерный, песок мытый,щебень любой фракции.</li>
        <li>Кирпичный бой, асфальтная крошка с доставкой</li>
      </ol>
    ),
    link: "#",
    middle: true,
  },
  {
    id: "service3",
    title: "Аренда спецтехники",
    img: service3,
    img_alt: "service3",

    text: (
      <ol type="1">
        <li>Аренда самосвала</li>
        <li>Аренда Экскаватора погрузчика</li>
        <li>Аренда Гусеничного эскаватора</li>
        <li>Аренда Колесного эскаватора</li>
      </ol>
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
