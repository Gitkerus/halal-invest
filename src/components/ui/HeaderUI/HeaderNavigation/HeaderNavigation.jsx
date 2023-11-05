import React from "react";

import { useState } from "react";

import HeaderNavigationBlock from "./HeaderNavigationBlock/HeaderMenuBlock";

import "./HeaderNavigation.scss";

const HeaderNavigation = ({ menuItems }) => {
  const [expanded, setExpanded] = useState();
  return (
    <div className="header__navigation">
      {menuItems.map((item) => {
        if (item.menuItems) {
          return (
            <HeaderNavigationBlock
              key={item.id}
              id={item.id}
              link={item.link}
              expanded={expanded}
              setExpanded={setExpanded}
              nested={item.nested}
              menuItems={item.menuItems}
            />
          );
        }
        return (
          <a
            className="header__navigation__link"
            key={item.id}
            id={item.id}
            href={item.path}
          >
            {item.link}
          </a>
        );
      })}
    </div>
  );
};

export default HeaderNavigation;
