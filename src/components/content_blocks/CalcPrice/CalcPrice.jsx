import React from "react";

import { Button, TextInput, TextArea } from "carbon-components-react";
import { submitNewClient } from "../../../api/telegramPosts";

import "./CalcPrice.scss";

const CalcPrice = () => {
  const submitForm = (e) => {
    e.preventDefault();
    submitNewClient({
      name: e.target.name.value,
      phone: e.target.phone.value,
      comment: e.target.comment.value,
    });
    e.target.reset();
  };

  return (
    <>
      <div className="calcPrice__title contentBlock__title">
        Оставьте заявку
      </div>
      <form className="calcPriceWrapper" onSubmit={submitForm}>
        <div className="calcPriceTopInput">
          <TextInput
            className="calcPrice__nameInput"
            type="text"
            labelText="Ваше имя*"
            placeholder="Иванов Иван"
            id="text-input-1"
            required
          />
          <TextInput
            className="calcPrice__numberInput"
            type="tel"
            name="phone"
            labelText="Номер телефона*"
            placeholder="+7 900 000 00-00"
            pattern="\+?[0-9\s\-\(\)]+"
            id="text-input-1"
            required
          />
        </div>
        <TextArea
          className="calcPrice__textArea"
          labelText="Сумма и Срок инвестиций"
          helperText=""
          placeholder="Первый взнос в рублях"
          rows={5}
          id="text-area-1"
          maxCount={100}
          name="comment"
        />
        <div className="calcPrice__buttonBlock">
          <Button className="calcPrice__buttonBlock__button" type="submit">
            Получить бесплатную консультацию
          </Button>
          <p className="calcPrice__buttonBlock__note">
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </form>
    </>
  );
};

export default CalcPrice;
