import React from "react";

import "./License.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Documents from "../../components/content_blocks/Documents/Documents";

import licenseMainBlock from "../../assets/licenseMainBlock.png";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import licenseImg1 from "../../assets/License/license1.png";
import licenseImg2 from "../../assets/License/license2.png";
import licenseImg3 from "../../assets/License/license3.png";

import appImg1 from "../../assets/App/app1.png";
import appImg2 from "../../assets/App/app2.png";
import appImg3 from "../../assets/App/app3.png";

const mainBlock__data = {
  title: "Лицензии",
  text: <>Лицензии и сопутствующие документация</>,
  img: licenseMainBlock,
};

const license__data = [
  {
    id: "license1",
    img: licenseImg1,
  },
  {
    id: "license2",
    img: licenseImg2,
  },
  {
    id: "license2",
    img: licenseImg3,
  },
];

const app__data = [
  {
    id: "app1",
    img: appImg1,
  },
  {
    id: "app2",
    img: appImg2,
  },
  {
    id: "app3",
    img: appImg3,
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Лицензии",
    path: "License",
    className: "documents",
    component: <Documents title="Лицензии" document_data={license__data} />,
  },
  {
    id: "n2",
    link: "Приложение",
    path: "App",
    className: "documents",
    component: <Documents title="Приложение" document_data={app__data} />,
  },
  {
    id: "n3",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const License = () => {
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

export default License;
