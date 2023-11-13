import React from "react";

import "./License.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Licenses from "../../components/content_blocks/Licenses/Licenses";
import Sertification from "../../components/content_blocks/Sertification/Sertification";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";

import licenseMainBlock from "../../assets/Placeholder.png";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import licenseImg1 from "../../assets/License/license1.png";
import licenseImg2 from "../../assets/License/license2.png";
import licenseImg3 from "../../assets/License/license3.png";

const mainBlock__data = {
  title: (
    <>
      Лицензии <br />и сертификаты
    </>
  ),
  text: <></>,
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

const contentProps = [
  {
    id: "n1",
    link: "Лицензии",
    path: "Licenses",
    className: "licenses",
    component: <Licenses />,
  },
  {
    id: "n2",
    link: "Сертификаты",
    path: "Sertification",
    className: "sertification",
    component: <Sertification />,
  },
  {
    id: "n3",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
  {
    id: "n4",
    link: "Оставьте заявку",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
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
