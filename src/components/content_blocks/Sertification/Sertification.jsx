import React from "react";

import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import "./Sertification.scss";

import sertification1 from "../../../assets/Sertification/sertification1.png";
import sertification2 from "../../../assets/Sertification/sertification2.png";
import sertification3 from "../../../assets/Sertification/sertification3.png";

const sertification__data = [
  {
    id: "sertification1",
    title: "Название",
    text: <>Описание</>,
    img: sertification1,
    img_alt: "sertification1",
    link: "#",
  },
  {
    id: "sertification2",
    title: "Название",
    text: <>Описание</>,
    img: sertification2,
    img_alt: "sertification2",
    link: "#",
    middle: true,
  },
  {
    id: "sertification3",
    title: "Название",
    text: <>Описание</>,
    img: sertification3,
    img_alt: "sertification3",
    link: "#",
  },
];

const Sertification = () => {
  return (
    <>
      <div className="licenses__title contentBlock__title">Сертификаты</div>
      <div className="licenses__content">
        {sertification__data.map((article) => {
          return <ContentBlockGrey {...article} key={article.id} />;
        })}
      </div>
    </>
  );
};

export default Sertification;
