import React from "react";

import { Button } from "carbon-components-react";
import { useGlobalContext } from "../../../context/contex";

import "./Reviews.scss";

const reviews_data = [
  {
    id: "review1",
    title: "Иван Иванов",
    text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  },
  {
    id: "review2",
    title: "Иван Иванов",
    text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  },
  {
    id: "review3",
    title: "Иван Иванов",
    text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  },
  {
    id: "review4",
    title: "Иван Иванов",
    text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  },
  {
    id: "review5",
    title: "Иван Иванов",
    text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  },
  // {
  //   id: "review6",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
  // {
  //   id: "review7",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
  // {
  //   id: "review8",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
  // {
  //   id: "review9",
  //   title: "Иван Иванов",
  //   text: "Я хотел бы выразить свою благодарность и оставить положительный отзыв",
  // },
];

const Reviews = () => {
  const { openModalReviewForm, setOpenModalReviewForm } = useGlobalContext();

  const openPopUpReview = () => {
    setOpenModalReviewForm(!openModalReviewForm);
  };

  return (
    <>
      <div className="reviews__title contentBlock__title">Отзывы клиентов</div>
      <div className="reviewsContentWrapper">
        {reviews_data.map((item) => {
          return (
            <div className="reviews__block" key={item.id}>
              <div className="reviews__block__title">{item.title}</div>
              <div className="reviews__block__text">{item.text}</div>
            </div>
          );
        })}
        <div className="reviewsBottomWrapper">
          <div className="reviews__text">
            Еще больше отзывов и благодарственных писем
          </div>
          <Button
            className="reviews__button"
            kind="tertiary"
            onClick={openPopUpReview}
          >
            Оставить отзыв
          </Button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
