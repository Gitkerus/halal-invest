import React from "react";
import { ChevronRight, ChevronLeft } from "@carbon/icons-react";
// import { Link } from "react-router-dom";

const MenuBlock = ({ submenu, menu, text }) => {
  const toggleBurgerSubMenu = () => {
    document
      .getElementById(`headerBurgerSubmenu_` + menu)
      .classList.toggle("headerBurgerSubMenu-open");
    document
      .getElementById("burgerMenu")
      .classList.toggle("headerBurgerMenu-open");
  };

  return (
    <div className="headerBurgerMenuBlock" key={menu}>
      <div className="headerLinkWrapper">
        <div className="header__burgerLink" onClick={toggleBurgerSubMenu}>
          <div className="header__burgerLink__text">{text}</div>
          <ChevronRight />
        </div>
        <div className="vertLine vertLine-burger"></div>
      </div>
      <div className="headerBurgerSubMenu" id={"headerBurgerSubmenu_" + menu}>
        <div
          className="header__burgerLink header__burgerLink-back"
          onClick={toggleBurgerSubMenu}
        >
          <ChevronLeft /> Назад
        </div>
        <div className="header__burgerLink header__burgerLink-bold">{text}</div>

        <div className="vertLine vertLine-subMenu"></div>

        {submenu.map((item) => (
          <div key={item.id}>
            {/* Временно изменено на a элемент с Link, Так как сейчас ошибки рендера */}
            <a className="header__burgerLink" href={item.link}>
              {item.text}
            </a>
            <div className="vertLine vertLine-burger"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBlock;
