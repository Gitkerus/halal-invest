import React from "react";

import { Button } from "carbon-components-react";

import "./StartInvest.scss";

const StartInvest = () => {
  const data = [
    {
      header: "шаг 1",
      title: "Оставить заявку",
      text: "Менеджер перезвонит в течение 15 минут",
    },
    {
      header: "шаг 2",
      title: "Выбор тарифа",
      text: "После бесплатной консультации вы получите емкую информацию о продуктах",
    },
    {
      header: "шаг 3",
      title: "Подписание договора",
      text: "Быстрое заключение договора в офисе либо онлайн по всему миру",
    },
    {
      header: "шаг 4",
      title: "Личный кабинет",
      text: "Проходите верификацию в личном кабинете и вам становится доступна полная аналитика и движение средств в режиме реального времени",
    },
    {
      header: "шаг 5",
      title: "Комфортное наблюдение",
      text: "В компании нет ни одного инвестора потерпевшего убыток, вы будете наблюдать как растет ваш портфель 24/7",
    },
    {
      header: "шаг 6",
      title: "Вывод средств",
      text: "Удобный формат вывода средств, оставляете заявку и выбираете любой удобный метод получения дивидентов на счет, без ограничений по всему миру",
    },
  ];
  return (
    <>
      <div className="contentBlock__title">Начать инвестировать легко</div>
      <div className="startInvestContentWrapper">
        {data.map((item) => {
          return (
            <div className="startInvestBlock">
              <div className="startInvest__header">{item.header}</div>
              <div className="startInvest__title">{item.title}</div>
              <div className="startInvest__text">{item.text}</div>
            </div>
          );
        })}
      </div>
      <Button className="startInvest__button">Подробнее</Button>
    </>
  );
};

export default StartInvest;
