import React from "react";

import { useState, useEffect } from "react";

import "./Clients.scss";

const Clients = () => {
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

  return (
    <>
      <div className="clients__title contentBlock__title">
        Наши {windowWidth <= 600 ? <br /> : ``} компании-клиенты
      </div>
      <div className="clientsContentWrapper">
        <div className="clients__block">АО ПРОФЭНЕРГО</div>
        <div className="clients__block">АО ОЭК</div>
        <div className="clients__block">ООО ДЕЛЬТАГРОМУС</div>
        <div className="clients__block">ООО СМУС18</div>
        <div className="clients__block">ООО НЕСТ ТЕХНО</div>
        <div className="clients__block">АО СПКБРР</div>
      </div>
    </>
  );
};

export default Clients;
