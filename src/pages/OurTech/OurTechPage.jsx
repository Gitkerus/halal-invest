import React from "react";

import "./OurTechPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import OurTech from "../../components/content_blocks/OurTech/OurTech";
import RentTech from "../../components/content_blocks/RentTech/RentTech";

import ourTechMainBlock from "../../assets/ourTechMainBlock.png";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

const mainBlock__data = {
  title: "Техника, с которой работаем",
  text: (
    <>
      Наша компания предоставляет услуги по аренде самосвалов и спецтехники в
      Москве и Московской области.
    </>
  ),
  img: ourTechMainBlock,
};

const contentProps = [
  {
    id: "n1",
    link: "Наша техника",
    path: "OurTech",
    className: "ourTech",
    component: <OurTech />,
  },
  {
    id: "n2",
    link: "Аренда спецтехники ",
    path: "RentTech",
    className: "rentTech",
    component: <RentTech />,
  },
  {
    id: "n3",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const OurTechPage = () => {
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

export default OurTechPage;
