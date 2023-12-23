import React from "react";
import { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
import {
  Button,
  Header,
  HeaderName,
  HeaderGlobalBar,
} from "carbon-components-react";

import BurgerMenuBlock from "./BurgerMenuBlock/BurgerMenuBlock";

import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";

import { Menu } from "@carbon/icons-react";

import logo from "../../../assets/logo.png";
import rus from "../../../assets/rus.png";
import { ChevronDown } from "@carbon/icons-react";
import "./HeaderUI.scss";

const menuNav = [
  {
    menu: "aboutCompany",
    text: "О компании",
    submenu: [
      {
        id: "menuItem_1_1",
        text: "О нас",
        link: "/about",
      },
      {
        id: "menuItem_1_2",
        text: "Отзывы",
        link: "/reviews",
      },
      {
        id: "menuItem_1_3",
        text: "Лицензии",
        link: "/license",
      },
      {
        id: "menuItem_1_4",
        text: "Контакты",
        link: "/contacts",
      },
      {
        id: "menuItem_1_5",
        text: "Отчеты",
        link: "/reports",
      },
      {
        id: "menuItem_1_7",
        text: "Что такое Халяльные инвестиции",
        link: "/what_is_halal_invest",
      },
    ],
  },
];

const menuItems = [
  {
    id: "menuLink_1",
    link: "Главная",
    path: "/",
  },
  {
    id: "menuLink_2",
    link: "О компании",
    menuItems: [
      {
        id: "menuItem_1_1",
        text: "О нас",
        link: "/about",
      },
      {
        id: "menuItem_1_2",
        text: "Отзывы",
        link: "/reviews",
      },
      {
        id: "menuItem_1_3",
        text: "Лицензии",
        link: "/license",
      },
      {
        id: "menuItem_1_4",
        text: "Часто задаваемые вопросы",
        link: "/faq",
      },
      {
        id: "menuItem_1_5",
        text: "Контакты",
        link: "/contacts",
      },
      {
        id: "menuItem_1_6",
        text: "Отчеты",
        link: "/reports",
      },
      {
        id: "menuItem_1_7",
        text: "Что такое Халяльные инвестиции",
        link: "/what_is_halal_invest",
      },
    ],
    nested: false,
  },
  {
    id: "menuLink_3",
    link: "Услуги",
    path: "/services",
  },
  {
    id: "menuLink_4",
    link: "Проекты",
    path: "/projects",
  },
  {
    id: "menuLink_5",
    link: "Описание работы",
    path: "/work_description",
  },
  {
    id: "menuLink_6",
    link: "Часто задаваемые вопросы",
    path: "/faq",
  },
  // {
  //   id: "menuLink_3",
  //   link: "Услуги",
  //   menuItems: [
  //     {
  //       menu: "",
  //       text: "Меню",
  //       submenu: [
  //         {
  //           id: "l21",
  //           text: "Меню",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  //   nested: true,
  // },
  // {
  //   id: "menuLink_4",
  //   link: "Цены",
  //   path: "",
  // },
  // {
  //   id: "menuLink_5",
  //   link: "Инвестиции",
  //   path: "",
  // },
  // {
  //   id: "menuLink_6",
  //   link: "Блог",
  //   path: "",
  // },
  // {
  //   id: "menuLink_7",
  //   link: "Правовая информация",
  //   menuItems: [
  //     {
  //       menu: "",
  //       text: "Меню",
  //       submenu: [
  //         {
  //           id: "l21",
  //           text: "Меню",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  //   nested: true,
  // },
  // {
  //   id: "menuLink_8",
  //   link: "Контакты",
  //   path: "/contacts",
  // },
  // {
  //   id: "menuLink_9",
  //   link: "Агентам",
  //   path: "",
  // },
  // {
  //   id: "menuLink_10",
  //   link: "Еще",
  //   menuItems: [
  //     {
  //       menu: "",
  //       text: "Меню",
  //       submenu: [
  //         {
  //           id: "l21",
  //           text: "Меню",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  //   nested: true,
  // },
];

const HeaderUI = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const burgerSubMenus = document.getElementsByClassName("headerBurgerSubMenu");

  const changeBurgerMenuState = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
    if (!burgerMenuOpen) {
      for (var i = 0; i < burgerSubMenus.length; i++) {
        burgerSubMenus[i].classList.remove("headerBurgerSubMenu-open");
      }
    } else {
    }
  };

  const openPopUp = () => {
    document.getElementById("PopUp").classList.toggle("popUp-open");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1568) {
        setBurgerMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <header className="headerWrapper">
      <div className="header">
        <button className="headerBurgerBtn" onClick={changeBurgerMenuState}>
          <Menu />
        </button>
        <a className="header__name" prefix="">
          <img className="header__logo" src={logo} alt="" srcset="" /> Халяль
          инвест
        </a>
        <HeaderNavigation menuItems={menuItems} />
        <HeaderGlobalBar className="headerGlobal">
          <button className="header__language">
            <img src={rus} alt="" /> Русский <ChevronDown size={14} />
          </button>
          <Button className="header__calcBtn">Личный кабинет</Button>
        </HeaderGlobalBar>
        {burgerMenuOpen && (
          <div
            className="headerBurgerMenu headerBurgerMenu-open"
            id="burgerMenu"
          >
            <a className="header__burgerLink" href="/">
              Главная
            </a>
            <div className="vertLine vertLine-burger"></div>
            {menuNav.map((item) => (
              <BurgerMenuBlock {...item} key={item.menu} />
            ))}
            <a className="header__burgerLink" href="/services">
              Услуги
            </a>
            <a className="header__burgerLink" href="/projects">
              Проекты
            </a>
            <a className="header__burgerLink" href="/work_description">
              Описание работы
            </a>
            <a className="header__burgerLink" href="//faq">
              Часто задаваемые вопросы
            </a>
          </div>
        )}
        <div
          className={
            burgerMenuOpen
              ? "headerFadeScreen headerFadeScreen-open"
              : "headerFadeScreen"
          }
          id="headerFadeScreen"
        ></div>
      </div>
    </header>
  );
};

export default HeaderUI;
