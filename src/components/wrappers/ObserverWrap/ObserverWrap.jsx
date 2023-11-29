import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../../../context/contex";
import classnames from "classnames";

const ObserverWrap = ({ children, id, className }) => {
  const { setVisibleContent } = useGlobalContext();
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newVisibleContent = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop - 48 &&
        pageYOffset < sectionOffsetTop + sectionHeight - 48
      ) {
        newVisibleContent = section.id;
      }
    });

    setVisibleContent(newVisibleContent);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll(".contentBlock");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const { ref } = useInView({
  //   threshold: 0.5,
  //   rootMargin: "",
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       setVisibleContent(entry.target.id);
  //     }
  //   },
  // });
  return (
    <div className={classnames(className, "contentBlock")} id={id}>
      {children}
    </div>
  );
};

export default ObserverWrap;
