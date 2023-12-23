import React from "react";
import { Button } from "carbon-components-react";

import { useGlobalContext } from "../../../context/contex";

import esg from "../../../assets/esg.png";
import video from "../../../assets/Video/Main.mp4";
import "./MainBlockCustom.scss";

const MainBlockCustom = () => {
  const { openModalContactForm, setOpenModalContactForm } = useGlobalContext();

  const openPopUp = () => {
    setOpenModalContactForm(!openModalContactForm);
  };

  return (
    <div className="mainBlockCustom">
      <div className="mainBlockCustomLeftWrapper">
        <div className="mainBlockCustom__title">
          Стратегия доверительного управления
        </div>
        <div className="mainBlockCustomBottomWrapper">
          <div className="mainBlockCustom__text">Халяльные инвестиции</div>
          <img className="mainBlockCustom__esg" src={esg} alt="esg" />
          <div className="mainBlockCustom__desc">
            БИРЖЕВОЙ ФОНД, ИНВЕСТИРУЮЩИЙ В АКЦИИ КОМПАНИЙ В СООТВЕТСТВИИ С
            НОРМАМИ ШАРИАТА ESG-рейтинг
          </div>
          <Button className="mainBlockCustom__button" onClick={openPopUp}>
            Бесплатная консультация
          </Button>
        </div>
      </div>
      <div className="mainBlockCustomRightWrapper">
        <video className="mainBlockCustom__img" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="mainBlockCustom__note">
          10 % с доходности идет на ВАКФ (Халяль благотворительность) При
          инвестировании в Акции необходимо иметь правильное намерение
          поддержать бизнес, как велено это делать в фетвах по инвестированию в
          акции халяльных компаний
        </div>
      </div>
    </div>
  );
};

export default MainBlockCustom;
