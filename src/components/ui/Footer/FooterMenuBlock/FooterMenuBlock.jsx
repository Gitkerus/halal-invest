import React from "react";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ChevronDown } from "@carbon/icons-react";

const FooterMenuBlock = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const openSubMenu = () => {
    if (windowWidth < 1056) {
      document
        .getElementById("footerMenu_" + props.id)
        .classList.toggle("footerLinkWrapper-active");
      document
        .getElementById("footerSubmenu_" + props.id)
        .classList.toggle("footerSubMenu-open");
    }
  };

  return (
    <div
      className="footerMenuBlock"
      key={"footerMenuBlock" + props.id}
      id={"footerMenuBlock_" + props.id}
    >
      <div
        className="footerLinkWrapper"
        id={`footerMenu_` + props.id}
        onClick={openSubMenu}
      >
        <div className="footer__link footer__link-menu">
          {props.title} {windowWidth <= 1056 ? <ChevronDown /> : ""}
        </div>
      </div>
      <div className="footerSubMenu" id={"footerSubmenu_" + props.id}>
        {props.submenu.map((item) => (
          <div className="footerLinkWrapper" key={item.id}>
            <Link className="footer__link footer__link-subMenu" to={item.link}>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMenuBlock;
