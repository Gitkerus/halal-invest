import React from "react";

import { useState, useEffect } from "react";

import "./ServicePage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import OurProjects from "../../components/content_blocks/OurProjects/OurProjects";
import WorkSteps from "../../components/content_blocks/WorkSteps/WorkSteps";
import OurProgress from "../../components/content_blocks/OurProgress/OurProgress";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import AboutService from "../../components/content_blocks/AboutService/AboutService";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

const ServicePage = ({ service__data, mainBlock__data, price1, price2 }) => {
  const contentProps = [
    {
      id: "n1",
      link: "Почему мы?",
      path: "OurProgress",
      className: "ourProgress",
      component: <OurProgress />,
    },
    {
      id: "n2",
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
      id: "n7",
      link: "Этапы работ",
      path: "WorkSteps",
      className: "workSteps",
      component: <WorkSteps />,
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
