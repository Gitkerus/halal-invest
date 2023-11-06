import React from "react";
import { Button } from "carbon-components-react";

import "./Reports.scss";
import report from "../../../assets/Reports/reportTest.png";
import graphs from "../../../assets/Reports/Graphs.png";

const Reports = () => {
  return (
    <>
      <div className="reports__title contentBlock__title">
        Наши показатели и отчеты за периоды
      </div>
      <div className="reportsContent">
        <img className="reports__img" src={report} alt="reports" />
        <img className="reports__img" src={report} alt="reports" />
        <img className="reports__img" src={report} alt="reports" />
        <img className="reports__img" src={report} alt="reports" />
        <img className="reports__img" src={report} alt="reports" />
        <img className="reports__img" src={report} alt="reports" />
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
