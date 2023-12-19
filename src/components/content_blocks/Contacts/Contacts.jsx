import React from "react";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <>
      <div className="contacts__title contentBlock__title">Контакты</div>
      <div className="contactsContentWrapper">
        <div className="contactsTextWrapper">
          <div className="contacts__block">
            <div className="contacts__block__title">Адрес главного офиса</div>
            <div className="contacts__block__text">
              г. Уфа Ул. Авроры 2, Президент Отель
            </div>
          </div>
          <div className="contacts__block">
            <div className="contacts__block__title">Режим работы</div>
            <div className="contacts__block__text">
              ПН-ПТ: 9:00-20:00 <br />
              СБ-ВС - выходной
            </div>
          </div>
          <div className="contacts__block">
            <div className="contacts__block__title">Телефон</div>
            <div className="contacts__block__text">8 (800) 000-00-00</div>
          </div>
          <div className="contacts__block">
            <div className="contacts__block__title">Электронная почта</div>
            <div className="contacts__block__text">mail@email.com</div>
          </div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e2a8dcc857d55d34dd84321d168b02cb6f53dd2f7759216fd83796d7677813c&amp;source=constructor"
          width="931"
          height="572"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Contacts;
