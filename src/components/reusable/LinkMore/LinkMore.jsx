import React from "react";
// import { Link } from "react-router-dom";
import { ArrowRight } from "@carbon/icons-react";

import classnames from "classnames";

import "./LinkMore.scss";

const LinkMore = ({ className, path, noArrow }) => {
  return (
    <a className={classnames("linkMore", className)} href={path}>
      Подробнее
      {noArrow ? "" : <ArrowRight size={20} />}
    </a>
  );
};

export default LinkMore;
