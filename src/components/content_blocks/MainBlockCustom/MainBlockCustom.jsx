import React from "react";
import { Button } from "carbon-components-react";

import MainTrees from "../../../assets/MainTrees.png";
import esg from "../../../assets/esg.png";
import "./MainBlockCustom.scss";

const MainBlockCustom = () => {
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
          <Button className="mainBlockCustom__button">
            Бесплатная консультация
          </Button>
        </div>
      </div>
      <div className="mainBlockCustomRightWrapper">
        <img className="mainBlockCustom__img" src={MainTrees} alt="MainTrees" />
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
