import React from "react";
import classnames from "classnames";

import "./ContentBlockGrey.scss";
import LinkMore from "../../reusable/LinkMore/LinkMore";

const ContentBlockGrey = (props) => {
  return (
    <div className={classnames("contentBlockGrey", props.className)}>
      {props.img ? (
        <img
          className="contentBlockGrey__img"
          src={props.img}
          alt={props.img_alt}
        />
      ) : (
        ""
      )}

      <div
        className={
          props.middle
            ? "contentBlockGreyTextWrapper contentBlockGreyTextWrapper-middle"
            : "contentBlockGreyTextWrapper"
        }
      >
        <div>
          <div className="contentBlockGrey__title">{props.title}</div>
          <div type="1" className="contentBlockGrey__text">
            {props.text}
          </div>
        </div>
        {props.noLink ? "" : <LinkMore path={props.link} />}
      </div>
    </div>
  );
};

export default ContentBlockGrey;
