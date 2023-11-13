import React from "react";

import { useState } from "react";

import "./Faq.scss";

import FaqBlock from "./FaqBlock/FaqBlock";

const faq_data = [
  {
    id: "1",
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    id: "2",
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    id: "3",
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    id: "4",
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    id: "5",
    question: "Вопрос",
    answer: "Ответ",
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
