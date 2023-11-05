import React from "react";

import "./ReviewsPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Letters from "../../components/content_blocks/Letters/Letters";

import reviewsMainBlock from "../../assets/reviewsMainBlock.png";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

const mainBlock__data = {
  title: "Награды и отзывы",
  text: (
    <>
      Отзывы о деловой репутации Общества с ограниченной ответственностью
      «Спецустройство».
    </>
  ),
  img: reviewsMainBlock,
};

const contentProps = [
  {
    id: "n1",
    link: "Благодарственные письма",
    path: "Reviews",
    className: "letters",
    component: <Letters />,
  },
  {
    id: "n2",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const ReviewsPage = () => {
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

export default ReviewsPage;
