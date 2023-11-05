import React from "react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import article1 from "../../../assets/Articles/article1.png";
import article2 from "../../../assets/Articles/article2.png";
import article3 from "../../../assets/Articles/article3.png";

import "./Articles.scss";

const articles = [
  {
    id: "article1",
    title: "Заголовок статьи блога",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        asperiores earum delectus! Rem, perspiciatis inventore commodi fuga ad
        alias magnam totam laboriosam, sit, voluptate atque optio illum
        expedita? Temporibus, quis.
      </>
    ),
    img: article1,
    img_alt: "article1",
    link: "#",
  },
  {
    id: "article2",
    title: "Заголовок статьи блога",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab quasi
        fuga, ipsa voluptatum cum. Aut commodi modi velit praesentium facilis
        harum numquam nulla architecto consequuntur saepe atque, recusandae
        expedita.
      </>
    ),
    img: article2,
    img_alt: "article2",
    link: "#",
    middle: true,
  },
  {
    id: "article3",
    title: "Заголовок статьи блога",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, neque
        est tenetur quasi error ipsum deserunt, ipsam nemo eius nostrum qui
        molestias vero. Distinctio voluptate, deleniti corrupti maiores a
        suscipit?
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
