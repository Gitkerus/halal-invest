import React from "react";

import "./ContactsPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

import contactsMainBlock from "../../assets/Placeholder.png";

const mainBlock__data = {
  title: "Мы всегда на связи!",
  text: (
    <>
      Вы можете связаться любым удобным для вас способом или оставить заявку и
      наш менеджер перезвонит вам
    </>
  ),
  img: contactsMainBlock,
};

const contentProps = [
  {
    id: "n1",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
  {
    id: "n2",
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
];

const ContactsPage = () => {
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

export default ContactsPage;
