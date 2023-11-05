import React from "react";

import "./WorkSteps.scss";

const workSteps_data = [
  {
    id: 1,
    text: (
      <>
        ЗАЯВКА <br />
        Заявка с указанием требований и пожеланий
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        РАСЧЕТ <br />
        Расчет и согласование стоимости услуг
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        ГРАФИК <br />
        Определяем последовательность работ, количество рабочих и ресурсов для
        выполнения
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        ДОГОВОР <br />
        Согласовываем детали, заключаем договор.
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        РАБОТА <br />
        Проводим работы, контроль персональнвм менеджером
      </>
    ),
  },
  {
    id: 6,
    text: (
      <>
        ОТЧЕТ <br />
        Отчетная документация каждый месяц
      </>
    ),
  },
];

const WorkSteps = () => {
  return (
    <>
      <div className="workSteps__title contentBlock__title">Этапы работ</div>
      <div className="workStepsContentWrapper">
        {workSteps_data.map((item) => {
          return (
            <div className="workSteps__block" key={"workStep" + item.id}>
              <div className="workSteps__block__title">{item.id}</div>
              <div className="workSteps__block__text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkSteps;
