import React from "react";

import "./ManagmentPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Vacations from "../../components/content_blocks/Vacations/Vacations";
import OurTeam from "../../components/content_blocks/OurTeam/OurTeam";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

import test3 from "../../assets/test3.png";

const contentProps = [
  {
    id: "n1",
    link: "Компания в лицах",
    path: "OurTeam",
    className: "ourTeam",
    component: <OurTeam />,
  },
  {
    id: "n2",
    link: "Открытые вакансии",
    path: "Vacations",
    className: "vacations",
    component: <Vacations />,
  },
  {
    id: "n3",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const mainBlock__data = {
  title: "Наш менеджмент",
  text: "Профессионализм, наша главная фишка: в нашей компании состоят только опытные эксперты",
  img: test3,
};

const ManagmentPage = () => {
  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlock {...mainBlock__data} />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <ContentWrapper>
            {contentProps.map((content) => {
              if (content.className === "tags") {
                return content.component;
              } else {
                return (
                  <ContentBlockWraper
                    key={content.path}
                    className={content.className}
                    id={content.path}
                  >
                    {content.component}
                  </ContentBlockWraper>
                );
              }
            })}
          </ContentWrapper>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  );
};

export default ManagmentPage;
