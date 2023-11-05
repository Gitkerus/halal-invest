import React from "react";

import "./FaqBlock.scss";

import { ChevronDown } from "@carbon/icons-react";

const FaqBlock = ({ answer, question, id, activeFaq, setActiveFaq }) => {
  const openAnswer = () => {
    if (activeFaq === "answer" + id) {
      setActiveFaq("");
    } else {
      setActiveFaq("answer" + id);
    }
  };
  return (
    <div
      className={
        activeFaq === "answer" + id ? "faqBlock faqBlock-active" : "faqBlock"
      }
    >
      <div
        className="faqBlock__question"
        onClick={openAnswer}
        id={"question" + id}
      >
        <div className="faqBlock__question__text">{question}</div>
        <ChevronDown
          size={16}
          className={
            activeFaq === "answer" + id
              ? "faqBlock__question__arrow faqBlock__question__arrow-active"
              : "faqBlock__question__arrow"
          }
        />
        {/* {activeFaq === "answer" + id ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )} */}
      </div>
      <div
        className={
          activeFaq === "answer" + id
            ? "faqBlock__answer faqBlock__answer-open"
            : "faqBlock__answer"
        }
        id={"answer" + id}
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqBlock;
