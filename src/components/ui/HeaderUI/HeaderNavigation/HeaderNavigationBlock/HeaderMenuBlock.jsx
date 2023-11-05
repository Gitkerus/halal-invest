import React from "react";

import { useState, useEffect } from "react";

import { ChevronDown, ArrowRight } from "@carbon/icons-react";

import "./HeaderMenuBlock.scss";

const HeaderMenuBlock = ({
  id,
  link,
  expanded,
  setExpanded,
  nested,
  menuItems,
}) => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [subMenu, setSubMenu] = useState(menuItems[0].submenu);
  const [gridRows, setGridRows] = useState("4");

  const calcRows = (subMenu) => {
    if (Math.ceil(subMenu.length / 3) >= 6) {
      return setGridRows(Math.ceil(subMenu.length / 3));
    } else return setGridRows(4);
  };

  const changeActiveMenu = () => {
    if (expanded === id) {
      setExpanded("");
    } else {
      setExpanded(id);
    }
    if (nested) {
      setActiveMenuItem(menuItems[0]);
      setSubMenu(menuItems[0].submenu);
      calcRows(subMenu);
    }
  };

  const subMenuClick = (submenu, item) => {
    setSubMenu(submenu);
    setActiveMenuItem(item);
    calcRows(submenu);
  };

  if (nested) {
    return (
      <>
        <a
          className={
            expanded === id
              ? "header__navigation__link header__navigation__link-active"
              : "header__navigation__link"
          }
          tabIndex="0"
          id={id}
          onClick={changeActiveMenu}
        >
          {link}
          <ChevronDown
            className={
              expanded === id
                ? "header__navigation__arrowLink header__navigation__arrowLink-active"
                : "header__navigation__arrowLink"
            }
            size={16}
          />
        </a>
        <div
          className={
            expanded === id ? "header__menu header__menu-open" : "header__menu"
          }
          id={id + "__menu"}
        >
          <div className="header__menuWrapper">
            <div className="header__menu__linksWrapper">
              {menuItems.map((item) => {
                const { menu, text, submenu } = item;
                return (
                  <a
                    className={
                      activeMenuItem.menu === menu
                        ? "header__menu__item header__menu__item-active"
                        : "header__menu__item"
                    }
                    key={menu}
                    id={menu}
                    onClick={() => subMenuClick(submenu, item)}
                  >
                    {text}
                  </a>
                );
              })}
            </div>
            <div
              className="header__menu__subMenusWrapper"
              style={{ gridTemplateRows: `repeat(${gridRows}, 48px)` }}
            >
              {subMenu &&
                subMenu.map((item) => {
                  return (
                    <a
                      className="header__menu__subMenu"
                      href={item.link}
                      key={item.id}
                      id={item.id}
                    >
                      {item.text}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <a
        className={
          expanded === id
            ? "header__navigation__link header__navigation__link-active"
            : "header__navigation__link"
        }
        tabIndex="0"
        id={id}
        onClick={changeActiveMenu}
      >
        {link}
        <ChevronDown
          className={
            expanded === id
              ? "header__navigation__arrowLink header__navigation__arrowLink-active"
              : "header__navigation__arrowLink"
          }
          size={16}
        />
      </a>
      <div
        className={
          expanded === id ? "header__menu header__menu-open" : "header__menu"
        }
        id={id + "__menu"}
      >
        <div className="header__menuWrapper">
          {menuItems.map((item) => {
            return (
              <a
                className="header__menu__itemLink"
                key={item.id}
                id={item.id}
                href={item.link}
              >
                {item.text} <ArrowRight size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeaderMenuBlock;
