import React from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../../../context/contex";
import classnames from "classnames";

const ObserverWrap = ({ children, id, className }) => {
  const { setVisibleContent } = useGlobalContext();

  const { ref } = useInView({
    threshold: 0.5,
    rootMargin: "",
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleContent(entry.target.id);
      }
    },
  });
  return (
    <div className={classnames(className, "contentBlock")} id={id} ref={ref}>
      {children}
    </div>
  );
};

export default ObserverWrap;
