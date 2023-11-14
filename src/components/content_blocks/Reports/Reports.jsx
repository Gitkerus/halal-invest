import React from "react";
import { Button } from "carbon-components-react";

import "./Reports.scss";
import report1 from "../../../assets/Placeholder.png";
import report2 from "../../../assets/Placeholder.png";
import graphs from "../../../assets/Reports/Graphs.png";

const Reports = () => {
  return (
    <>
      <div className="reports__title contentBlock__title">
        Наши показатели и отчеты за периоды
      </div>
      <div className="reportsContent">
        <div className="reportsBlock">
          <div className="reports__subTitle">
            Надежность, проверенная годами
          </div>
          <div className="reportsImgWrapper">
            <img className="reports__img" src={report1} alt="report1" />
          </div>
        </div>
        <div className="reportsBlock">
          <div className="reports__subTitle">Данные о фонде</div>
          <div className="reportsImgWrapper">
            <img className="reports__img" src={report2} alt="report2" />
          </div>
        </div>
        <div className="reportsBotWrapper">
          <img className="" src={graphs} alt="graphs" />
          <div className="reportsButtonWrapper">
            Еще больше Отчетов
            <Button className="reports__button">Смотреть Отчеты</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
