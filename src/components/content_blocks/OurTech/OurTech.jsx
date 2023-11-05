import React from "react";

import "./OurTech.scss";

import { Button } from "carbon-components-react";
import ContentBlockGrey from "../../wrappers/ContentBlockGrey/ContentBlockGrey";

import techImg1 from "../../../assets/OurTech/ourTech1.png";
import techImg4 from "../../../assets/OurTech/ourTech4.png";
import techImg5 from "../../../assets/OurTech/ourTech5.png";
import techImg6 from "../../../assets/OurTech/ourTech6.png";

import cheme1 from "../../../assets/OurTech/cheme1.png";
import cheme2 from "../../../assets/OurTech/cheme2.png";
import cheme3 from "../../../assets/OurTech/cheme3.png";

const ourTech_data = [
  {
    id: "tech1",
    title: <u>МАЗ 650129-8420-000</u>,
    text: (
      <>
        <p>Объем кузова 20м</p>
        <p>Грузоподьемность- 30 тонн</p>
        <p>Тип кузова - Самосвал</p>
      </>
    ),
    img: techImg1,
    img_alt: "techImg",
    noLink: true,
  },
  {
    id: "tech2",
    title: <u>КАМАЗ К5042 65801-Т5</u>,
    text: (
      <>
        <p>Объем кузова 20м</p>
        <p>Грузоподьемность- 30 тонн</p>
        <p>Тип кузова - Самосвал</p>
      </>
    ),
    img: techImg1,
    img_alt: "techImg",
    noLink: true,
    middle: true,
  },
  {
    id: "tech3",
    title: <u>КАМАЗ К5042 65801-Т5</u>,
    text: (
      <>
        <p>Объем кузова 20м</p>
        <p>Грузоподьемность- 30 тонн</p>
        <p>Тип кузова - Самосвал</p>
      </>
    ),
    img: techImg1,
    img_alt: "techImg",
    noLink: true,
  },
  {
    id: "tech4",
    title: <u>МАЗ 650129-8420-000</u>,
    text: (
      <>
        <p>Объем кузова 20м</p>
        <p>Грузоподьемность- 30 тонн</p>
        <p>Тип кузова - Самосвал</p>
      </>
    ),
    img: techImg4,
    img_alt: "techImg",
    noLink: true,
  },
  {
    id: "tech5",
    title: <u>HOWO T5G</u>,
    text: (
      <>
        <p>Объем кузова 19,3м</p>
        <p>Грузоподьемность- 32 тонны</p>
        <p>Тип кузова - Самосвал</p>
      </>
    ),
    img: techImg5,
    img_alt: "techImg",
    noLink: true,
    middle: true,
  },
  {
    id: "tech6",
    title: <u>МАЗ 650128</u>,
    text: (
      <>
        <p>Объем кузова 20м</p>
        <p>Грузоподьемность- 30 тонн</p>
        <p>Тип кузова - Самосвал</p>
      </>
    ),
    img: techImg6,
    img_alt: "techImg",
    noLink: true,
  },
];

const OurTech = () => {
  const openPopUp = () => {
    document.getElementById("PopUp").classList.toggle("popUp-open");
  };

  return (
    <>
      <div className="ourTech__title contentBlock__title">Наша техника</div>
      <div className="ourTechContentWrapper">
        <div className="ourTechCardsWrapper">
          {ourTech_data.map((item) => {
            return <ContentBlockGrey key={item.id} {...item} />;
          })}
        </div>
        <div className="ourTechBotWrapper">
          <div className="ourTech__cheme">
            <img src={cheme1} alt="cheme1" />
          </div>
          <div className="ourTech__cheme">
            <img src={cheme2} alt="cheme2" />
          </div>
          <div className="ourTech__cheme">
            <img src={cheme3} alt="cheme3" />
          </div>
          <Button className="ourTech__button" onClick={openPopUp}>
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </>
  );
};

export default OurTech;
