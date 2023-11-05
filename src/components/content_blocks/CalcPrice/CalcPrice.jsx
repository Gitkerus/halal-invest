import React from "react";

import {
  Button,
  TextInput,
  TextArea,
  FileUploaderDropContainer,
} from "carbon-components-react";

import "./CalcPrice.scss";

const CalcPrice = () => {
  return (
    <>
      <div className="calcPrice__title contentBlock__title">
        Узнайте стоимость
      </div>
      <div className="calcPriceWrapper">
        <div className="calcPriceTopInput">
          <TextInput
            className="calcPrice__nameInput"
            type="text"
            labelText="Ваше имя*"
            placeholder="Иванов Иван"
            id="text-input-1"
          />
          <TextInput
            className="calcPrice__numberInput"
            type="number"
            labelText="Номер телефона*"
            placeholder="+7 900 000 00-00"
            id="text-input-1"
          />
        </div>
        <TextArea
          className="calcPrice__textArea"
          labelText="Что нужно сделать?"
          helperText=""
          placeholder="Например: нужен снос кирпичного дома 6х6"
          rows={5}
          id="text-area-1"
          maxCount={100}
        />
        <div className="calcPrice__upload">
          <p className="cds--file--label">Есть фотография объекта?</p>
          <FileUploaderDropContainer labelText="Нажмите для выбора файла" />
        </div>
        <div className="calcPrice__buttonBlock">
          <Button className="calcPrice__buttonBlock__button">
            Рассчитать стоимость
          </Button>
          <p className="calcPrice__buttonBlock__note">
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </>
  );
};

export default CalcPrice;
