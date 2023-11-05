import React from "react";

import { useState, useEffect } from "react";

import "./AboutPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import AboutFull from "../../components/content_blocks/AboutFull/AboutFull";
import OurProjects from "../../components/content_blocks/OurProjects/OurProjects";
import Reviews from "../../components/content_blocks/Reviews/Reviews";
import Clients from "../../components/content_blocks/Clients/Clients";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Footer from "../../components/ui/Footer/Footer";
import PopUp from "../../components/modal/PopUp/PopUp";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import test1 from "../../assets/test1.png";

const mainBlock__data = {
  title: "История компании",
  text: (
    <>
      ООО "Спецустройство" <br />
      Занимается <u>вывозом и утилизацией грунта, снега, вывозом бытового</u>и{" "}
      <u>строительного мусора</u> в Москве и Московской области. Наша компания
      предоставляет в аренду <u>самосвалы и спецтехнику.</u> Мы работаем без
      выходных и праздничных дней. В любой день, наши специалисты могут
      подъехать на объект и оценить масштабы и стоимость работ, и предложить
      оптимальные решения для выполнения ваших задач. ООО "Спецустройство"
      предлагает <u>в аренду спецтехнику</u> <u>по выгодной цене</u> для решения
      узкоспециализированных задач.
    </>
  ),
  img: test1,
};

const contentProps = [
  {
    id: "n1",
    link: "О компании",
    path: "AboutFull",
    className: "aboutFull",
    component: <AboutFull />,
  },
  {
    id: "n2",
    link: "Примеры работ",
    path: "OurProjects",
    className: "ourProjects",
    component: <OurProjects />,
  },
  {
    id: "n3",
    link: "Отзывы клиентов",
    path: "Reviews",
    className: "reviews",
    component: <Reviews />,
  },
  {
    id: "n4",
    link: "Наши клиенты",
    path: "Clients",
    className: "clients",
    component: <Clients />,
  },
  {
    id: "n5",
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
];

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

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

export default About;
