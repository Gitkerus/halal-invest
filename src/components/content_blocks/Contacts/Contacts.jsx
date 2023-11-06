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
              г. Уфа, ул. Менделеева, 170
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
          className="contacts__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab96dfbf9abbfbdf650eb71d09890f74171ea3e98213e09fd883c2ea13d44573c&amp;source=constructor"
          width="931"
          height="572"
          frameborder="0"
        ></iframe>

        {/* <img className="contacts__map" src={map} alt="map" /> */}
      </div>
    </>
  );
};

export default Contacts;
