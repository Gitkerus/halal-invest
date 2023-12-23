import React from "react";

import { useState } from "react";

import "./Faq.scss";

import FaqBlock from "./FaqBlock/FaqBlock";

const faq_data = [
  {
    id: "1",
    question: "На каком рынке торгуем?",
    answer: "Фондовый рынок Nasdaq.",
  },
  {
    id: "2",
    question: "Почему именно он?",
    answer: "Потому что этот рынок предоставляет акции халяльных компани.",
  },
  {
    id: "3",
    question: "В какой валюте проходит работа?",
    answer: "В Долларах США (USD)",
  },
  {
    id: "4",
    question: "Какой размер дивидендов?",
    answer: "10% от капитала это 50/50",
  },
  {
    id: "5",
    question: "Как часто выплачиваются дивиденды?",
    answer: "Раз в месяц",
  },
  {
    id: "6",
    question: "Дозволено ли это со стороны Шариата?",
    answer: "Да, мы работаем только на халяльном фондовом рынке",
  },
  {
    id: "7",
    question: "Каковы риски?",
    answer: "Риски до 20%",
  },
  {
    id: "8",
    question: "Что происходит при достижение минимального порога?",
    answer:
      "Сделка закрывается. (Минимальный порог 2% на сделку и 10% на общий капитал)",
  },
  {
    id: "9",
    question: "Есть ли какие-то гарантии?",
    answer:
      "Гарантий нет. Гарантия - это наша стратегия. (Стоп-лосс и общий убыток в размере до 20 %)",
  },
  {
    id: "10",
    question:
      " Возможно ли забрать тело инвестиций раньше срока окончания договора?",
    answer: "Да, это возможно",
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState();

  return (
    <>
      <div className="faq__title contentBlock__title">FAQ</div>
      {faq_data.map((block) => {
        return (
          <FaqBlock
            {...block}
            activeFaq={activeFaq}
            setActiveFaq={setActiveFaq}
            key={"faqBlock" + block.id}
          />
        );
      })}
    </>
  );
};

export default Faq;
