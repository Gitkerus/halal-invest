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
        text: "О нас",
        link: "/about",
      },
      {
        id: "l12",
        text: "Менеджмент",
        link: "/managment",
      },
      {
        id: "l13",
        text: "Контакты",
        link: "/contacts",
      },
      {
        id: "l14",
        text: "Лицензии и сертификаты",
        link: "/license",
      },
      {
        id: "l15",
        text: "Награды",
        link: "",
      },
      {
        id: "l16",
        text: "FAQ",
        link: "/faq",
      },
      {
        id: "l17",
        text: "Отзывы",
        link: "/reviews",
      },
      {
        id: "l18",
        text: "Техника с которой работаем",
        link: "/ourTech",
      },
    ],
  },
  {
    id: "menu2",
    title: "Вывоз и утилизация ",
    submenu: [
      {
        id: "l21",
        text: "Вывоз и утилизация грунта ",
        link: "/services/service_1",
      },
      {
        id: "l22",
        text: "Вывоз бетонного боя в Москве",
        link: "/services/service_2",
      },
      {
        id: "l23",
        text: "Вывоз мусора контейнерами",
        link: "/services/service_4",
      },
      {
        id: "l24",
        text: "Вывоз и утилизация мусора в Москве",
        link: "/services/service_3",
      },
      {
        id: "l25",
        text: "Вывоз снега",
        link: "/services/service_8",
      },
    ],
  },
  {
    id: "menu3",
    title: "Земляные работы ",
    submenu: [
      {
        id: "l31",
        text: "Разработка котлованов",
        link: "/services/service_7",
      },
    ],
  },
  {
    id: "menu4",
    title: "Другие услуги",
    submenu: [
      {
        id: "l31",
        text: "Песок, щебень, кирпичный бой, асфальтная крошка с доставкой",
        link: "/services/service_5",
      },
      {
        id: "l32",
        text: "Плодородный грунт с доставкой в Москве",
        link: "/services/service_6",
      },
      {
        id: "l33",
        text: "Талоны на утилизацию грунта, мусора",
        link: "/services/service_9",
      },
    ],
  },
];

const Footer = () => {
  const [footerMenuHeigh, setFooterMenuHeigh] = useState();

  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth >= 1056) {
        const height = document.getElementById(
          "footerMenuBlock_menu1"
        ).offsetHeight;
        setFooterMenuHeigh(height + "px");
      } else {
        setFooterMenuHeigh("auto");
      }
    };
    handleChange();
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  });

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footer__title">Спецустройство</div>
        <div className="footerRightWrapper">
          <div className="footerTextWrapper">
            <div className="footerTextWrapperTop">
              <div className="footerLinkWrapper footerLinkWrapper-borderBot">
                <Link className="footer__link footer__link-menu" to="/">
                  Главная
                </Link>
              </div>
              <div className="footerLinkWrapper footerLinkWrapper-borderBot">
                <Link className="footer__link footer__link-menu" to="/price">
                  Цены
                </Link>
              </div>
              <div className="footerLinkWrapper footerLinkWrapper-borderBot">
                <Link className="footer__link footer__link-menu" to="/projects">
                  Проекты
                </Link>
              </div>
            </div>
            <div className="footerMenu" style={{ height: footerMenuHeigh }}>
              {menuNav.map((item) => {
                return <FooterMenuBlock {...item} key={item.id} />;
              })}
            </div>
          </div>
          <div className="footerLicenseWrapper">
            <div className="footerLinkWrapper footerLinkWrapper-license">
              © ООО «СУ» <br /> Все права защищены 2023
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
