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
              г. Москва, ул. Иркутская, д. 11, к1, эт1, пом/ч.ком. оф. 2004
            </div>
          </div>
          <div className="contacts__block">
            <div className="contacts__block__title">Режим работы</div>
            <div className="contacts__block__text">
              ПН-ПТ: 8:30-20:00 <br />
              СБ-ВС - 10:00-18:00
            </div>
          </div>
          <div className="contacts__block">
            <div className="contacts__block__title">Телефон</div>
            <div className="contacts__block__text">
              +7 (925) 701-00017 <br />
              +7 (499) 755-71-07
            </div>
          </div>
          <div className="contacts__block">
            <div className="contacts__block__title">Электронная почта</div>
            <div className="contacts__block__text">specystroystvo@mail.ru</div>
          </div>
        </div>
        <iframe
          className="contacts__map"
          src="https://yandex.com/map-widget/v1/?um=constructor%3A9c79e98da2fcd784168ed828f02f54b985d9370c132ebf1a739b343932c71ed9&amp;source=constructor"
          width="1155"
          height="378"
          frameborder="0"
        ></iframe>
        {/* <img className="contacts__map" src={map} alt="map" /> */}
      </div>
    </>
  );
};

export default Contacts;
