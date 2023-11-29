import React, { useRef, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import classnames from "classnames";

const ContentBlockWraper = ({ children, id, className }) => {
  return (
    <div className={classnames(className, "contentBlock")} id={id}>
      {children}
    </div>
  );
};

export default ContentBlockWraper;
