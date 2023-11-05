import React from "react";

import { useState, useEffect } from "react";

import "./MainPage.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import TextBlock from "../../components/content_blocks/TextBlock/TextBlock";
import Tags from "../../components/content_blocks/Tags/Tags";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";

import ObserverWrap from "../../components/wrappers/ObserverWrap/ObserverWrap";

import MainBlockCustom from "../../components/content_blocks/MainBlockCustom/MainBlockCustom";

const price_data = [
  {
    id: "1",
    service: "МАЗ 650129-8420",
    price: "ОТ 12000 Р",
    unit: "СМЕНА",
  },
  {
    id: "2",
    service: "КАМАЗ К5042 65801-Т5",
    price: "ОТ 12000 Р",
    unit: "СМЕНА",
  },
  {
    id: "3",
    service: "МАЗ 650128-8520",
    price: "ОТ 12000 Р",
    unit: "СМЕНА",
  },
  {
    id: "4",
    service: "КОНТЕЙНЕРЫ 8.20. 27м3",
    price: "ОТ 8000 Р",
    unit: "СМЕНА",
  },
  {
    id: "5",
    service: "АРЕНДА САМОСВАЛА ",
    price: "ОТ 1200 Р ",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "6",
    service: "Аренда экскаватора погрузчика",
    price: "ОТ 12000 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "7",
    service: "JCB 3CX",
    price: "От 15 000 р",
    unit: "СМЕНА",
  },
  {
    id: "8",
    service: "JCB 4CX",
    price: "От 15 000 р",
    unit: "СМЕНА",
  },
  {
    id: "9",
    service: "Аренда гусеничного экскаватора",
    price: "ОТ 15000 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "10",
    service: "JCB 200",
    price: "ОТ 15000 Р",
    unit: "СМЕНА",
  },
  {
    id: "11",
    service: "Экскаватор Hitachi-ZX-330",
    price: "ОТ 15000 Р",
    unit: "СМЕНА",
  },
  {
    id: "12",
    service: "Экскаватор Hyundai R290",
    price: "ОТ 15000 Р",
    unit: "СМЕНА",
  },
  {
    id: "13",
    service: "Аренда колёсного экскаватора",
    price: "ОТ 1500 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "14",
    service: "Cat M315D2, Cat M317D2, Cat M322D2",
    price: "ОТ 1500 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  {
    id: "15",
    service: "Catepillar M318D",
    price: "ОТ 1500 Р",
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Ключевая информация",
    path: "KeyInfo",
    className: "textBlock",
    component: <TextBlock />,
  },
  {
    id: "n11",
    className: "tags",
    component: <Tags key="Tags" />,
  },
  {
    id: "n12",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const Main = () => {
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
      <HeaderUI />
      <div className="content">
        <MainBlockCustom />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <div className="contentCollum">
            {contentProps.map((content) => {
              if (content.className === "tags") {
                return content.component;
              } else {
                return (
                  <ObserverWrap
                    key={content.path}
                    className={content.className}
                    id={content.path}
                  >
                    {content.component}
                  </ObserverWrap>
                );
              }
            })}
          </div>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  );
};

export default Main;
