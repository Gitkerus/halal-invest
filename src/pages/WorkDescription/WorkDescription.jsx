import React from "react";

import "./WorkDescription.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../components/wrappers/MainBlock/MainBlock";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import OurProjects from "../../components/content_blocks/OurProjects/OurProjects";
import Steps from "../../components/content_blocks/Steps/Steps";
import ReviewsShort from "../../components/content_blocks/ReviewsShort/ReviewsShort";
import Photos from "../../components/content_blocks/Photos/Photos";

import workDescriptionMainBlock from "../../assets/Placeholder.png";

import photo1 from "../../assets/Photos/photo1.png";
import photo2 from "../../assets/Photos/photo2.png";
import photo3 from "../../assets/Photos/photo3.png";
import photo4 from "../../assets/Photos/photo4.png";
import photo5 from "../../assets/Photos/photo5.png";
import photo6 from "../../assets/Photos/photo6.png";
import photo7 from "../../assets/Photos/photo7.png";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

const mainBlock__data = {
  title: "Подробное описание работы",
  subTitle: `Заголовок`,
  text: (
    <>
      Наша компания, основанная 7 лет назад, начала свой путь в инвестиционной
      сфере с фокусом на халяльных инвестициях в акции компаний. Было время,
      когда этот рынок был малоизучен и малоизвестен.
    </>
  ),
  img: workDescriptionMainBlock,
};

const steps_data = [
  {
    header: "этап 1",
    title: "Сбор и анализ документации",
    text: "Комплексное изучение условий и исходных материалов",
  },
  {
    header: "этап 2",
    title: "Разработка проекта",
    text: "Проектирование проекта, согласование, составление сметы",
  },
  {
    header: "этап 3",
    title: "Получение разрешений",
    text: "Согласование в ответственных органах",
  },
  {
    header: "этап 4",
    title: "Подготовка площадки",
    text: "Установка дополнительного ПО",
  },
  {
    header: "этап 5",
    title: "Отключение всех сервисов",
    text: "Описание",
  },
  {
    header: "этап 6",
    title: "Итоговый этап",
    text: "Проектирование проекта, согласование, составление сметы",
  },
  {
    header: "этап 7",
    title: "Тех поддержка, итоговое согласование",
    text: "Техническая поддержка",
  },
];

const photos_data = [
  {
    id: "photo1",
    img: photo1,
    wide: true,
  },
  {
    id: "photo2",
    img: photo2,
  },
  {
    id: "photo3",
    img: photo3,
  },
  {
    id: "photo4",
    img: photo4,
  },
  {
    id: "photo5",
    img: photo5,
  },
  {
    id: "photo6",
    img: photo6,
  },
  {
    id: "photo7",
    img: photo7,
    wide: true,
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Примеры работ",
    path: "OurProjects",
    className: "ourProjects",
    component: <OurProjects />,
  },
  {
    id: "n2",
    link: "Фотографии",
    path: "Photos",
    className: "photos",
    component: <Photos title="Фотографии" data={photos_data} />,
  },
  {
    id: "n3",
    link: "Этапы работ",
    path: "Steps",
    className: "steps",
    component: <Steps data={steps_data} title="Этапы работ" button={false} />,
  },
  {
    id: "n4",
    link: "Отзывы клиентов",
    path: "ReviewsShort",
    className: "reviewsShort",
    component: <ReviewsShort />,
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

const WorkDescription = () => {
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

export default WorkDescription;
