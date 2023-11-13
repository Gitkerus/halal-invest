import React from "react";

import { Button } from "carbon-components-react";

import "./ReviewsShort.scss";

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
];

const ReviewsShort = () => {
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
          <a href="/reviews">
            <Button className="reviews__button">Смотреть кейсы</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ReviewsShort;
