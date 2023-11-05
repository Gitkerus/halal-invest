import React from "react";

import "./OurProgress.scss";

const OurProgress = () => {
  return (
    <>
      <div className="ourProgressTop">
        <div className="ourProgress__title contentBlock__title">
          За одни сутки мы сможем
        </div>
        <div className="ourProgressContent">
          <div className="ourProgressBlock">
            <div className="ourProgress__number">
              2000м<sup>3</sup>
            </div>
            <div className="ourProgress__text">Вывезти грунта</div>
          </div>
          <div className="vertLine vertLine-mobile"></div>
          <div className="ourProgressBlock">
            <div className="ourProgress__number">40</div>
            <div className="ourProgress__text">Использовать грузовиков</div>
          </div>
          <div className="vertLine vertLine-mobile"></div>

          <div className="ourProgressBlock">
            <div className="ourProgress__number">120</div>
            <div className="ourProgress__text">Совершить рейсов</div>
          </div>
          <div className="vertLine vertLine-mobile"></div>
        </div>
      </div>
      <div className="ourProgressBot">
        <div className="ourProgress__title contentBlock__title">
          Наши достижения в цифрах
        </div>
        <div className="ourProgressContent">
          <div className="ourProgressBlock">
            <div className="ourProgress__number">{">"}10</div>
            <div className="ourProgress__text">лет опыта работы</div>
          </div>
          <div className="vertLine vertLine-mobile"></div>
          <div className="ourProgressBlock">
            <div className="ourProgress__number">{">"}300</div>
            <div className="ourProgress__text">реализованных проектов</div>
          </div>
          <div className="vertLine vertLine-mobile"></div>

          <div className="ourProgressBlock">
            <div className="ourProgress__number">{">"}700</div>
            <div className="ourProgress__text">довольных клиентов</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProgress;
