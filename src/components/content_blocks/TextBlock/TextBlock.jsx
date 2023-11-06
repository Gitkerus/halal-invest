import React from "react";

import LinkMore from "../../reusable/LinkMore/LinkMore";

import "./TextBlock.scss";

const TextBlock = ({ title, data, desc, blocksPerLine }) => {
  return (
    <>
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
                <div className="textBlockContent__title">{item.title}</div>
                <div className="textBlockContent__text">{item.text}</div>
              </div>
              <LinkMore path={item.link} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TextBlock;
