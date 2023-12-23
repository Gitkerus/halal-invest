import React from "react";

import "./ProjectsPage.scss";

import MainBlock from "../../components/wrappers/MainBlock/MainBlock";

import ReviewsShort from "../../components/content_blocks/ReviewsShort/ReviewsShort";
import OurProjectsFinished from "../../components/content_blocks/OurProjectsFinished/OurProjectsFinished";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import NavSlider from "../../components/ui/NavSlider/NavSlider";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

import projectsMainBlock from "../../assets/Placeholder.png";

const mainBlockText = "";

const contentProps = [
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
    path: "ReviewsShorts",
    className: "reviewsShorts",
    component: <ReviewsShort />,
  },
  {
    id: "n4",
    link: "Оставьте заявку",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n5",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const ProjectsPage = () => {
  return (
    <>
      <div className="content">
        <MainBlock
          text={mainBlockText}
          title={"Реализованные проекты"}
          img={projectsMainBlock}
        />
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
    </>
  );
};

export default ProjectsPage;
