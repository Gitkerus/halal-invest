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

import "./HeaderUI.scss";

const menuNav = [
  {
    menu: "aboutCompany",
    text: "О нас",
    submenu: [
      {
        id: "",
        text: "Меню",
        link: "/about",
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
    link: "О нас",
    menuItems: [
      {
        id: "menuItem_1_1",
        text: "Меню",
        link: "",
      },
    ],
    nested: false,
  },
  {
    id: "menuLink_3",
    link: "Услуги",
    menuItems: [
      {
        menu: "",
        text: "Меню",
        submenu: [
          {
            id: "l21",
            text: "Меню",
            link: "",
          },
        ],
      },
    ],
    nested: true,
  },
  {
    id: "menuLink_4",
    link: "Цены",
    path: "",
  },
  {
    id: "menuLink_5",
    link: "Инвестиции",
    path: "",
  },
  {
    id: "menuLink_6",
    link: "Блог",
    path: "",
  },
  {
    id: "menuLink_7",
    link: "Правовая информация",
    menuItems: [
      {
        menu: "",
        text: "Меню",
        submenu: [
          {
            id: "l21",
            text: "Меню",
            link: "",
          },
        ],
      },
    ],
    nested: true,
  },
  {
    id: "menuLink_8",
    link: "Контакты",
    path: "",
  },
  {
    id: "menuLink_9",
    link: "Агентам",
    path: "",
  },
  {
    id: "menuLink_10",
    link: "Еще",
    menuItems: [
      {
        menu: "",
        text: "Меню",
        submenu: [
          {
            id: "l21",
            text: "Меню",
            link: "",
          },
        ],
      },
    ],
    nested: true,
  },
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
          <img src={logo} alt="" srcset="" /> Халяль инвест
        </a>
        <HeaderNavigation menuItems={menuItems} />
        <HeaderGlobalBar className="headerGlobal">
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
            <a className="header__burgerLink" href="/price">
              Цены
            </a>
            <a className="header__burgerLink" href="/projects">
              Проекты
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
