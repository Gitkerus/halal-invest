import React from "react";
import { useEffect, useState } from "react";

import FooterMenuBlock from "./FooterMenuBlock/FooterMenuBlock";

import { Link } from "react-router-dom";

import "./Footer.scss";

const menuNav = [
  {
    id: "menu1",
    title: "О компании",
    submenu: [
      {
        id: "l11",
        text: "Проекты",
        link: "",
      },
      {
        id: "l12",
        text: "Менеджмент",
        link: "",
      },
      {
        id: "l13",
        text: "Контакты",
        link: "",
      },
      {
        id: "l15",
        text: "FAQ",
        link: "",
      },
      {
        id: "l16",
        text: "Отзывы",
        link: "",
      },
      {
        id: "l17",
        text: "Лицензии и сертификаты",
        link: "",
      },
      {
        id: "l18",
        text: "Награды",
        link: "",
      },
      {
        id: "l19",
        text: "Блог",
        link: "",
      },
    ],
  },
  {
    id: "menu2",
    title: "Услуги",
    submenu: [
      {
        id: "l21",
        text: "Трейдинг",
        link: "",
      },
      {
        id: "l22",
        text: "Финансовый Консалтинг",
        link: "/services/service_2",
      },
      {
        id: "l23",
        text: "Обучение и партнерство",
        link: "/services/service_4",
      },
      {
        id: "l24",
        text: "Подписка на новости",
        link: "/services/service_3",
      },
    ],
  },
  {
    id: "menu3",
    title: "Правовая информация",
    submenu: [
      {
        id: "l31",
        text: "Отчеты",
        link: "",
      },
      {
        id: "l32",
        text: "Подробное описание работы",
        link: "",
      },
      {
        id: "l33",
        text: "Что такое Халяль Инвест",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  const [footerMenuHeigh, setFooterMenuHeigh] = useState();

  // useEffect(() => {
  //   const handleChange = () => {
  //     if (window.innerWidth >= 1056) {
  //       const height = document.getElementById(
  //         "footerMenuBlock_menu1"
  //       ).offsetHeight;
  //       setFooterMenuHeigh(height + "px");
  //     } else {
  //       setFooterMenuHeigh("auto");
  //     }
  //   };
  //   handleChange();
  //   window.addEventListener("resize", handleChange);

  //   return () => {
  //     window.removeEventListener("resize", handleChange);
  //   };
  // });

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footer__title">Халяль инвест</div>
        <div className="footerRightWrapper">
          <div className="footerTextWrapper">
            <div className="footerTextWrapperTop">
              <div className="footerLinkWrapper footerLinkWrapper-borderBot">
                <Link className="footer__link footer__link-menu" to="/">
                  Главная
                </Link>
              </div>
            </div>
            <div className="footerMenu" style={{ height: footerMenuHeigh }}>
              {menuNav.map((item) => {
                return <FooterMenuBlock {...item} key={item.id} />;
              })}
              <div className="footerMenuBlock">
                <div className="footerLinkWrapper">
                  <div className="footer__link footer__link-menu">Контакты</div>
                </div>
                <div className="footerLinkWrapper">
                  <div className="footerSubMenu footerSubMenu-contact">
                    <div className="footer__link footer__link-subMenu">
                      8 (800) 000-00-00
                    </div>
                  </div>
                </div>
                <div className="footerLinkWrapper">
                  <div className="footerSubMenu footerSubMenu-contact">
                    <div className="footer__link footer__link-subMenu">
                      mail@email.com
                    </div>
                  </div>
                </div>
                <div className="footerLinkWrapper">
                  <div className="footerSubMenu footerSubMenu-contact">
                    <div className="footer__link footer__link-subMenu">
                      г. Уфа Ул. Авроры 2, Президент Отель
                    </div>
                  </div>
                </div>
                <div className="footerLinkWrapper">
                  <div className="footerSubMenu footerSubMenu-contact">
                    <div className="footer__link footer__link-subMenu">
                      Пн-пт 9:00-20:00 <br />
                      Сб-вс выходной
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerLicenseWrapper">
            <div className="footerLinkWrapper footerLinkWrapper-license">
              © ООО «Халяль Инвест». Все права защищены 2023
            </div>
            <div className="footerLinkWrapper footerLinkWrapper-license">
              Политика конфеденциальности
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
