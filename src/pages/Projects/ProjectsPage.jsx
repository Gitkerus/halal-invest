import React from "react";

import "./ProjectsPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import OurProgress from "../../components/content_blocks/OurProgress/OurProgress";

import Reviews from "../../components/content_blocks/Reviews/Reviews";
import Clients from "../../components/content_blocks/Clients/Clients";
import OurProjectsFinished from "../../components/content_blocks/OurProjectsFinished/OurProjectsFinished";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import projectsMainBlock from "../../assets/projectsMainBlock.png";

const mainBlockText = "";

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
    link: "Наши проекты",
    path: "OurProjectsFinished",
    className: "ourProjectsFinished",
    component: <OurProjectsFinished />,
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
  {
    id: "n6",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const ProjectsPage = () => {
  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlock
          text={mainBlockText}
          title={"Реализованные проекты"}
          img={projectsMainBlock}
        />
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

export default ProjectsPage;
