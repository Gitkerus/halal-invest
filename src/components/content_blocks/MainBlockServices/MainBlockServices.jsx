import React from "react";
import { Button } from "carbon-components-react";

// import MainTrees from "../../../assets/MainTrees.png";
import esg from "../../../assets/esg.png";
import video from "../../../assets/Video/Main.mp4";
import "./MainBlockServices.scss";

const MainBlockServices = () => {
  const handleClick = () => {
    document.getElementById("PopUp").classList.toggle("popUp-open");
  };
  return (
    <div className="mainBlockServices">
      <div className="mainBlockServicesLeftWrapper">
        <div className="mainBlockServices__title">
          Стратегия доверительного управления
        </div>
        <div className="mainBlockServicesBottomWrapper">
          <div className="mainBlockServices__text">
            Список <br /> основных услуг
          </div>
          <img className="mainBlockServices__esg" src={esg} alt="esg" />
          <div className="mainBlockServices__desc">
            БИРЖЕВОЙ ФОНД, ИНВЕСТИРУЮЩИЙ В АКЦИИ КОМПАНИЙ В СООТВЕТСТВИИ С
            НОРМАМИ ШАРИАТА ESG-рейтинг
          </div>
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
      {/* <div className="mainBlockServicesRightWrapper">
        <video className="mainBlockServices__img" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="mainBlockServices__note">
          10 % с доходности идет на ВАКФ (Халяль благотворительность) При
          инвестировании в Акции необходимо иметь правильное намерение
          поддержать бизнес, как велено это делать в фетвах по инвестированию в
          акции халяльных компаний
        </div>
      </div> */}
    </div>
  );
};

export default MainBlockServices;
