import React from "react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import "./Licenses.scss";

import license1 from "../../../assets/Placeholder.png";
import license2 from "../../../assets/Placeholder.png";
import license3 from "../../../assets/Placeholder.png";

const licenses__data = [
  {
    id: "license1",
    title: "Название",
    text: <>Описание</>,
    img: license1,
    img_alt: "license1",
    link: "#",
  },
  {
    id: "license2",
    title: "Название",
    text: <>Описание</>,
    img: license2,
    img_alt: "license2",
    link: "#",
    middle: true,
  },
  {
    id: "license3",
    title: "Название",
    text: <>Описание</>,
    img: license3,
    img_alt: "license3",
    link: "#",
  },
];

const Licenses = () => {
  return (
    <>
      <div className="licenses__title contentBlock__title">Лицензии</div>
      <div className="licenses__content">
        {licenses__data.map((article) => {
          return <ContentBlockGrey {...article} key={article.id} />;
        })}
      </div>
    </>
  );
};

export default Licenses;
