import React from "react";

import "./Control.scss";

const control_data = [
  {
    id: "control1",
    title: "Ликвидность",
    text: "Высокая",
  },
  {
    id: "control2",
    title: "Инвестиции в Активы",
    text: "Рублевые и Валютные",
  },
  {
    id: "control3",
    title: "Уровень риска",
    text: "Умеренный",
  },
  {
    id: "control4",
    title: "Доля прибыли",
    text: "Инвесторы зарабатывают до 20%",
  },
  {
    id: "control5",
    title: "Без убытков",
    text: "За все время существования компании нет ни одного инвестора, потерпевшего убытки",
  },
  {
    id: "control6",
    title: "Прозрачность",
    text: "Стабильная прозрачная отчетность",
  },
];

const Control = () => {
  return (
    <>
      <div className="control__title contentBlock__title">
        Доверительное Управление - это
      </div>
      <div className="controlContentWrapper">
        {control_data.map((item) => {
          return (
            <div className="control__block" key={item.id}>
              <div className="control__block__title">{item.title}</div>
              <div className="control__block__text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Control;
