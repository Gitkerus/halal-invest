import React from "react";

import "./Letters.scss";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import letterImg1 from "../../../assets/Placeholder.png";
import letterImg2 from "../../../assets/Placeholder.png";

const letters_data = [
  {
    id: "letter1",
    title: "Название",
    text: <>Описание</>,
    img: letterImg1,
    img_alt: "letterImg1",
    noLink: true,
  },
  {
    id: "letter2",
    title: "Название",
    text: <>Описание</>,
    img: letterImg2,
    img_alt: "letterImg2",
    noLink: true,
    middle: true,
  },
  {
    id: "letter3",
    title: "Название",
    text: <>Описание</>,
    img: letterImg1,
    img_alt: "letterImg3",
    noLink: true,
  },
  {
    id: "letter4",
    title: "Название",
    text: <>Описание</>,
    img: letterImg2,
    img_alt: "letterImg4",
    noLink: true,
  },
  {
    id: "letter5",
    title: "Название",
    text: <>Описание</>,
    img: letterImg1,
    img_alt: "letterImg5",
    noLink: true,
    middle: true,
  },
  {
    id: "letter6",
    title: "Название",
    text: <>Описание</>,
    img: letterImg2,
    img_alt: "letterImg6",
    noLink: true,
  },
];

const Letters = () => {
  return (
    <>
      <div className="letters__title contentBlock__title">
        Благодарственные письма
      </div>
      <div className="lettersContentWrapper">
        {letters_data.map((item) => {
          return <ContentBlockGrey key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Letters;
