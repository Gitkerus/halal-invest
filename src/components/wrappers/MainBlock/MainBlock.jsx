import React from "react";
import { Button } from "carbon-components-react";
import { useGlobalContext } from "../../../context/contex";
import "./MainBlock.scss";

const MainBlock = ({ text, title, img, subTitle }) => {
  const { openModalContactForm, setOpenModalContactForm } = useGlobalContext();

  const openPopUp = () => {
    setOpenModalContactForm(!openModalContactForm);
  };
  return (
    <div className="mainBlock">
      <div className="mainBlockLeftWrapper">
        <div>
          <div className="mainBlock__title">{title}</div>
          <div className="mainBlockContent">
            <div className="mainBlockBottomWrapper">
              {subTitle && (
                <div className="mainBlock__subTitle">{subTitle}</div>
              )}
              <div className="mainBlock__text">{text}</div>
            </div>
          </div>
        </div>
        <div className="mainBlockBtnsWrapper">
          <Button className="mainBlock__button" onClick={openPopUp}>
            Оставить заявку
          </Button>
          <Button
            className="mainBlock__button"
            kind="tertiary"
            onClick={openPopUp}
          >
            Рассчитать стоимость
          </Button>
        </div>
      </div>
      <div className="mainBlockRightWrapper">
        <img className="mainBlock__img" src={img} alt="mainBlockImg" />
      </div>
    </div>
  );
};

export default MainBlock;
