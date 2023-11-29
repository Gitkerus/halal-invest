import React, { useRef, useEffect } from "react";

import { useGlobalContext } from "../../../context/contex";

const ContentWrapper = ({ children }) => {
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

  return <div className="contentCollum">{children}</div>;
};

export default ContentWrapper;
