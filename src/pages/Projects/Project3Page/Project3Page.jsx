import React from "react";

import "./Project3Page.scss";

import HeaderUI from "../../../components/ui/HeaderUI/HeaderUI";
import MainBlock from "../../../components/wrappers/MainBlock/MainBlock";

import Reviews from "../../../components/content_blocks/Reviews/Reviews";
import FinishedProjectPhotos from "../../../components/content_blocks/FinishedProjectPhotos/FinishedProjectPhotos";
import CalcPrice from "../../../components/content_blocks/CalcPrice/CalcPrice";
import Contacts from "../../../components/content_blocks/Contacts/Contacts";
import Footer from "../../../components/ui/Footer/Footer";
import NavSlider from "../../../components/ui/NavSlider/NavSlider";
import PopUp from "../../../components/modal/PopUp/PopUp";

import ObserverWrap from "../../../components/wrappers/ObserverWrap/ObserverWrap";

import project_3Main from "../../../assets/projects_3Main.png";

import projectPhoto_1 from "../../../assets/Project_3_Photos/projectPhoto_1.png";
import projectPhoto_2 from "../../../assets/Project_3_Photos/projectPhoto_2.png";
import projectPhoto_3 from "../../../assets/Project_3_Photos/projectPhoto_3.png";
import projectPhoto_4 from "../../../assets/Project_3_Photos/projectPhoto_4.png";
import projectPhoto_5 from "../../../assets/Project_3_Photos/projectPhoto_5.png";
import projectPhoto_6 from "../../../assets/Project_3_Photos/projectPhoto_6.png";
import projectPhoto_7 from "../../../assets/Project_3_Photos/projectPhoto_7.png";

const photos__data = [
  {
    id: "photo1",
    img: projectPhoto_1,
    wide: true,
  },
  {
    id: "photo2",
    img: projectPhoto_2,
    wide: false,
  },
  {
    id: "photo3",
    img: projectPhoto_3,
    wide: false,
  },
  {
    id: "photo4",
    img: projectPhoto_4,
    wide: false,
  },
  {
    id: "photo5",
    img: projectPhoto_5,
    wide: false,
  },
  {
    id: "photo6",
    img: projectPhoto_6,
    wide: false,
  },
  {
    id: "photo7",
    img: projectPhoto_7,
    wide: true,
  },
];

const mainBlock__data = {
  title: "Демонтаж школы Мохариши",
  text: (
    <>
      Адрес объекта: Казань, ул. Гаврилова 1 <br />
      Заказчик: YIT Corporation <br />
      Даты: 2018 год
    </>
  ),
  img: project_3Main,
};

const contentProps = [
  {
    id: "n1",
    link: "Фото с объекта",
    path: "FinishedProjectPhotos",
    className: "finishedProjectPhotos",
    component: <FinishedProjectPhotos photos__data={photos__data} />,
  },
  {
    id: "n3",
    link: "Отзывы клиентов",
    path: "Reviews",
    className: "reviews",
    component: <Reviews />,
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

const Project_1Page = () => {
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

export default Project_1Page;
