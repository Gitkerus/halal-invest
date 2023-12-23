import React from "react";
import { useState, useEffect } from "react";

import { submitNewReview } from "../../../api/telegramPosts";
import { Button, TextInput, TextArea } from "carbon-components-react";
import { Close } from "@carbon/icons-react";

import { useGlobalContext } from "../../../context/contex";

import "./ReviewPopUp.scss";

const ReviewPopUp = () => {
  const { openModalReviewForm, setOpenModalReviewForm } = useGlobalContext();

  const closePopUp = () => {
    setOpenModalReviewForm(!openModalReviewForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    submitNewReview({
      name: e.target.name.value,
      service: e.target.service.value,
      comment: e.target.comment.value,
    });
    e.target.reset();
    closePopUp();
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <form
      className={openModalReviewForm ? "popUp popUp-open" : "popUp"}
      id="ReviewPopUp"
      onSubmit={submitForm}
    >
      <div className="popUpContent">
        <button className="popUpCloseButton" type="button" onClick={closePopUp}>
          <Close size={windowWidth <= 1056 ? 30 : 50} />
        </button>
        <div className="popUp__title">Оставить отзыв</div>
        <div className="popUpWrapper">
          <div className="popUpTopInput">
            <TextInput
              className="popUp__nameInput"
              type="text"
              name="name"
              labelText="Ваше имя*"
              placeholder="Иванов Иван"
              id="text-input-2"
              required
            />
            <TextInput
              className="popUp__numberInput"
              type="text"
              name="service"
              labelText="Какой услугой воспользовались?"
              placeholder="Например: Консалтинг"
              required
              id="text-input-2"
            />
          </div>
          <TextArea
            className="popUp__textArea"
            labelText="Ваш отзыв"
            helperText=""
            placeholder="Текст отзыва"
            rows={4}
            id="text-area-2"
            maxCount={100}
            name="comment"
            required
          />
          <div className="popUp__buttonBlock">
            <Button className="popUp__buttonBlock__button" type="submit">
              Отправить отзыв
            </Button>
            <p className="popUp__buttonBlock__note">
              Нажимая на кнопку, вы даёте согласие на обработку персональных
              данных и соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewPopUp;
