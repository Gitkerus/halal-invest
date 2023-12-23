import React from "react";
import { useState, useEffect } from "react";

import LinkMore from "../../reusable/LinkMore/LinkMore";

import "./TextBlock.scss";

const TextBlock = ({ title, data, desc, blocksPerLine, linked, id }) => {
  const [titleHeight, setTitleHeight] = useState();

  useEffect(() => {
    const titleElements = document
      .querySelector(`#${id}`)
      .querySelectorAll("div.textBlockContent__title");
    const calcMaxHeight = () => {
      let maxHeight = 0;
      titleElements.forEach((item) => {
        if (item.clientHeight > maxHeight) {
          maxHeight = item.clientHeight;
        }
      });
      setTitleHeight(maxHeight);
    };

    calcMaxHeight();

    const handleResize = () => {
      titleElements.forEach((item) => {
        item.style.height = "auto";
      });
      calcMaxHeight();
      titleElements.forEach((item) => {
        item.style.height = titleHeight + "px";
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div id={id}>
      <div className="textBlock__title contentBlock__title">{title}</div>
      {desc && <div className="textBlock__desc">{desc}</div>}
      <div className="textBlockContentWrapper">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`textBlockContent textBlockContent${blocksPerLine}`}
            >
              <div className="textBlockContentText">
                <div
                  className="textBlockContent__title"
                  style={{ height: titleHeight }}
                >
                  {item.title}
                </div>
                <div className="textBlockContent__text">{item.text}</div>
              </div>
              {linked && <LinkMore path={item.link}/>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextBlock;
