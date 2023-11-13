import React from "react";

import { useState, useEffect } from "react";

import "./ServicePage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import OurProjects from "../../components/content_blocks/OurProjects/OurProjects";
import Steps from "../../components/content_blocks/Steps/Steps";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import AboutService from "../../components/content_blocks/AboutService/AboutService";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

const steps_data = [
  {
    header: "этап 1",
    title: "Сбор и анализ документации",
    text: "Комплексное изучение условий и исходных материалов",
  },
  {
    header: "этап 2",
    title: "Разработка проекта",
    text: "Проектирование проекта, согласование, составление сметы",
  },
  {
    header: "этап 3",
    title: "Получение разрешений",
    text: "Согласование в ответственных органах",
  },
  {
    header: "этап 4",
    title: "Подготовка площадки",
    text: "Установка дополнительного ПО",
  },
  {
    header: "этап 5",
    title: "Отключение всех сервисов",
    text: "Описание",
  },
  {
    header: "этап 6",
    title: "Итоговый этап",
    text: "Проектирование проекта, согласование, составление сметы",
  },
  {
    header: "этап 7",
    title: "Тех поддержка, итоговое согласование",
    text: "Техническая поддержка",
  },
];

const ServicePage = ({ service__data, mainBlock__data, price1, price2 }) => {
  const contentProps = [
    {
      id: "n1",
      link: "Об услуге",
      path: "AboutService",
      className: "aboutService",
      component: <AboutService data={service__data} />,
    },
    {
      id: "n5",
      link: "Обратная связь",
      path: "CalcPrice",
      className: "calcPrice",
      component: <CalcPrice />,
    },
    {
      id: "n6",
      link: "Примеры работ",
      path: "OurProjects",
      className: "ourProjects",
      component: <OurProjects />,
    },
    {
      id: "n3",
      link: "Этапы работ",
      path: "Steps",
      className: "steps",
      component: <Steps data={steps_data} title="Этапы работ" button={false} />,
    },
    {
      id: "n8",
      link: "Контакты",
      path: "Contacts",
      className: "contacts",
      component: <Contacts />,
    },
  ];
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // });

  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlock {...mainBlock__data} />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <div className="contentCollum">
            {contentProps.map((content) => {
              return (
                <ObserverWrap
                  key={content.path}
                  className={content.className}
                  id={content.path}
                >
                  {content.component}
                </ObserverWrap>
              );
            })}
          </div>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  );
};

export default ServicePage;
