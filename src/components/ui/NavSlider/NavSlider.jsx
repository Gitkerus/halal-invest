import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/contex";

import "./NavSlider.scss";

const NavSlider = ({ props }) => {
  const { visibleContent } = useGlobalContext();

  useEffect(() => {
    const navSlidersLinks = document.querySelectorAll(".navSlider__link");
    for (let link of navSlidersLinks) {
      link.classList.remove("navSlider__link-active");
    }
    if (visibleContent) {
      document
        .getElementById("linkTo_" + visibleContent)
        .classList.add("navSlider__link-active");
    } else {
      document
        .querySelector(".navSlider__link")
        .classList.add("navSlider__link-active");
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");
    const element = document.getElementById(id);
    const position = element.offsetTop - 48;
    window.scrollTo({
      left: 0,
      top: position,
    });
  };

  return (
    <div className="navSlider">
      {props.map((item) => {
        if (item.path) {
          return (
            <div className="navSliderBlock" key={item.id}>
              <a
                id={`linkTo_${item.path}`}
                href={item.path}
                className="navSlider__link"
                onClick={handleClick}
              >
                {item.link}
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default NavSlider;
