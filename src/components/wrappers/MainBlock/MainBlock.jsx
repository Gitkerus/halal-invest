import React from "react";
import { Button } from "carbon-components-react";
import "./MainBlock.scss";

const MainBlock = ({ text, title, img }) => {
  const handleClick = () => {
    document.getElementById("PopUp").classList.toggle("popUp-open");
  };
  return (
    <div className="mainBlock">
      <div className="mainBlockLeftWrapper">
        <div className="mainBlock__title">{title}</div>
        <div className="mainBlockBottomWrapper">
          <div className="mainBlock__text">{text}</div>
          <div className="mainBlockBtnsWrapper">
            <Button className="mainBlock__button" onClick={handleClick}>
              Оставить заявку
            </Button>
            <Button
              className="mainBlock__button"
              kind="tertiary"
              onClick={handleClick}
            >
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
      <img className="mainBlock__img" src={img} alt={img} />
    </div>
  );
};

export default MainBlock;
