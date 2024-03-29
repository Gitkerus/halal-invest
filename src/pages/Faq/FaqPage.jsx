import React from "react";

import "./FaqPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Faq from "../../components/content_blocks/Faq/Faq";

import faqMainBlock from "../../assets/Placeholder.png";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

const mainBlock__data = {
  title: "Часто задаваемые вопросы",
  text: (
    <>
      Не нашли ответа на свой вопрос? Оставьте заявку и наш менеджер ответит на
      любые ваши вопросы
    </>
  ),
  img: faqMainBlock,
};

const contentProps = [
  {
    id: "n1",
    link: "FAQ",
    path: "Faq",
    className: "faq",
    component: <Faq />,
  },
  {
    id: "n2",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
  {
    id: "n3",
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
];

const FaqPage = () => {
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

export default FaqPage;
