import React from "react";

import "./ReviewsPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Letters from "../../components/content_blocks/Letters/Letters";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Reviews from "../../components/content_blocks/Reviews/Reviews";

import reviewsMainBlock from "../../assets/Placeholder.png";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

const mainBlock__data = {
  title: "Награды и отзывы",
  text: <>Отзывы о деловой репутации "Халяль инвест"</>,
  img: reviewsMainBlock,
};

const contentProps = [
  {
    id: "n1",
    link: "Отзывы клиентов",
    path: "Reviews",
    className: "reviews",
    component: <Reviews />,
  },
  {
    id: "n2",
    link: "Благодарственные письма",
    path: "Letters",
    className: "letters",
    component: <Letters />,
  },
  {
    id: "n3",
    link: "Оставьте заявку",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n4",
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

export default ReviewsPage;
