import React from "react";
import { useState, useEffect } from "react";

import { submitNewClient } from "../../../api/telegramPosts";
import { Button, TextInput, TextArea } from "carbon-components-react";
import { Close } from "@carbon/icons-react";

import { useGlobalContext } from "../../../context/contex";

import "./PopUp.scss";

const PopUp = () => {
  const { openModalContactForm, setOpenModalContactForm } = useGlobalContext();

  const closePopUp = () => {
    setOpenModalContactForm(!openModalContactForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    submitNewClient({
      name: e.target.name.value,
      phone: e.target.phone.value,
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
      className={openModalContactForm ? "popUp popUp-open" : "popUp"}
      id="PopUp"
      onSubmit={submitForm}
    >
      <div className="popUpContent">
        <button className="popUpCloseButton" type="button" onClick={closePopUp}>
          <Close size={windowWidth <= 1056 ? 30 : 50} />
        </button>
        <div className="popUp__title">Узнайте стоимость</div>
        <div className="popUpWrapper">
          <div className="popUpTopInput">
            <TextInput
              className="popUp__nameInput"
              type="text"
              name="name"
              labelText="Ваше имя*"
              placeholder="Иванов Иван"
              id="text-input-1"
              required
            />
            <TextInput
              className="popUp__numberInput"
              type="tel"
              name="phone"
              labelText="Номер телефона*"
              placeholder="+7 900 000 00-00"
              pattern="\+?[0-9\s\-\(\)]+"
              required
              id="text-input-1"
            />
          </div>
          <TextArea
            className="popUp__textArea"
            labelText="Что нужно сделать?"
            helperText=""
            placeholder="Например: "
            rows={4}
            id="text-area-1"
            maxCount={100}
            name="comment"
          />
          <div className="popUp__buttonBlock">
            <Button className="popUp__buttonBlock__button" type="submit">
              Рассчитать стоимость
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

export default PopUp;
