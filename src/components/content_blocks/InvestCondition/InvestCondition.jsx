import React from "react";
import { Button } from "carbon-components-react";
import "./InvestCondition.scss";

const investCondition_data = [
  {
    id: "investCondition1",
    title: "Минимальная сумма инвестирования",
    text: "От 50-500 тысяч рублей - 8% в месяц",
  },
  {
    id: "investCondition2",
    title: "Бронзовый уровень инвестиций",
    text: "500 000-5 000 000 рублей - 10% в месяц ",
  },
  {
    id: "investCondition3",
    title: "Большие инвестиции",
    text: "От 5 000 000 рублей - 12-20% в месяц",
  },
];

const InvestCondition = () => {
  return (
    <>
      <div className="investCondition__title contentBlock__title">
        Условия инвестирования
      </div>
      <div className="investConditionContentWrapper">
        {investCondition_data.map((item) => {
          return (
            <div className="investCondition__block" key={item.id}>
              <div className="investCondition__block__title">{item.title}</div>
              <div className="investCondition__block__text">{item.text}</div>
            </div>
          );
        })}
        <div className="investConditionButtonWrapper">
          Также есть персональные пакеты крупным инвесторам
          <Button className="investCondition__button">
            Получить инвестиционное предложение
          </Button>
        </div>
      </div>
    </>
  );
};

export default InvestCondition;
