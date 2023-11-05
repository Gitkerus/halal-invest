import React from "react";
import { useState, useEffect } from "react";

import {
  Button,
  TextInput,
  TextArea,
  FileUploaderDropContainer,
} from "carbon-components-react";

import { Close } from "@carbon/icons-react";

import "./PopUp.scss";

const PopUp = () => {
  const handleClick = () => {
    document.getElementById("PopUp").classList.toggle("popUp-open");
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
    <div className="popUp" id="PopUp">
      <div className="popUpContent">
        <button className="popUpCloseButton" onClick={handleClick}>
          <Close size={windowWidth <= 1056 ? 30 : 50} />
        </button>
        <div className="popUp__title">Узнайте стоимость</div>
        <div className="popUpWrapper">
          <div className="popUpTopInput">
            <TextInput
              className="popUp__nameInput"
              type="text"
              labelText="Ваше имя*"
              placeholder="Иванов Иван"
              id="text-input-1"
            />
            <TextInput
              className="popUp__numberInput"
              type="number"
              labelText="Номер телефона*"
              placeholder="+7 900 000 00-00"
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
          />
          {/* <div className="popUp__upload">
            <p className="cds--file--label">Есть фотография объекта?</p>
            <FileUploaderDropContainer labelText="Нажмите для выбора файла" />
          </div> */}
          <div className="popUp__buttonBlock">
            <Button className="popUp__buttonBlock__button">
              Рассчитать стоимость
            </Button>
            <p className="popUp__buttonBlock__note">
              Нажимая на кнопку, вы даёте согласие на обработку персональных
              данных и соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
