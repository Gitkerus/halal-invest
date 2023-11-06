import React from "react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import article1 from "../../../assets/Articles/article1.png";
import article2 from "../../../assets/Articles/article2.png";
import article3 from "../../../assets/Articles/article3.png";

import "./Articles.scss";

const articles = [
  {
    id: "article1",
    title: "Устойчивые инвестиции и халяль: на пути к справедливым финансам",
    text: (
      <>
        В качестве выводов и предложений было озвучено следующее: необходимо
        развивать финансово-технологический сектор, цифровые технологии,
        которые...
      </>
    ),
    img: article1,
    img_alt: "article1",
    link: "#",
  },
  {
    id: "article2",
    title: "Устойчивые инвестиции и халяль: на пути к справедливым финансам",
    text: (
      <>
        В качестве выводов и предложений было озвучено следующее: необходимо
        развивать финансово-технологический сектор, цифровые технологии,
        которые...
      </>
    ),
    img: article2,
    img_alt: "article2",
    link: "#",
    middle: true,
  },
  {
    id: "article3",
    title: "Устойчивые инвестиции и халяль: на пути к справедливым финансам",
    text: (
      <>
        В качестве выводов и предложений было озвучено следующее: необходимо
        развивать финансово-технологический сектор, цифровые технологии,
        которые...
      </>
    ),
    img: article3,
    img_alt: "article3",
    link: "#",
  },
];

const Articles = () => {
  return (
    <>
      <div className="articles__title contentBlock__title">Полезные статьи</div>
      <div className="articles__content">
        {articles.map((article) => {
          return <ContentBlockGrey {...article} key={article.id} />;
        })}
      </div>
    </>
  );
};

export default Articles;
