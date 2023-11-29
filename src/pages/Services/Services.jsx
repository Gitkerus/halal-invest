import React from "react";

import { useState, useEffect } from "react";

import "./Services.scss";

import HeaderUI from "../../components/ui/HeaderUI/HeaderUI";
import MainBlockServices from "../../components/content_blocks/MainBlockServices/MainBlockServices";
import Services from "../../components/content_blocks/Services/Services";
import CalcPrice from "../../components/content_blocks/CalcPrice/CalcPrice";
import Footer from "../../components/ui/Footer/Footer";
import NavSlider from "../../components/ui/NavSlider/NavSlider";
import PopUp from "../../components/modal/PopUp/PopUp";
import Contacts from "../../components/content_blocks/Contacts/Contacts";
import Steps from "../../components/content_blocks/Steps/Steps";
import StartInvest from "../../components/content_blocks/StartInvest/StartInvest";

import ContentBlockWraper from "../../components/wrappers/ContentBlockWrapper/ContentBlockWrap";
import ContentWrapper from "../../components/wrappers/ConentWrapper/ContentWrapper";

const steps_data = [
  {
    title: "Для тех, у кого есть финансовые цели",
    text: "Прийти к финансовой цели намного легче, когда помогают друг другу на принципах партнерства и по канонам Шариата, в таких делах есть баракат от Аллаха, такие достигают успеха",
  },
  {
    title: "Для начинающих инвесторов",
    text: "Стать инвестором с нашей командой легко независимо от опыта. Команда профессионалов еще до контракта с инвестором думает о безопасности общего капитала, правильных и прозрачных договорах, соблюдении чистоты сделок, и принципиальном соблюдении договора, сохранения индекса Халяль",
  },
  {
    title: "Для тех, кто хочет сохранить уже имеющийся капитал",
    text: "Распределяем инвестиции по разным проектам, диверсификация капитала, 100% безопасный механизм, даже при снижении роста на одном рынке, мы получаем рост на другом рынке",
  },
  {
    title: "Для тех, кто хочет уникальное и персональное предложение",
    text: "Повышенная доля в прибыли от 50 000 000 рублей",
  },
  {
    title: "Для Юридических лиц",
    text: "Ряд разработанных тарифов на короткие и длинные сроки для юридических лиц, работа с НДС, быстрые переводы",
  },
  {
    title: "Для физических лиц",
    text: "В зависимости от суммы инвестиций существует уже готовая линейка инвестиционных продуктов. Быстрые переводы, возможность быстро вывести капитал",
  },
];

const contentProps = [
  {
    id: "n1",
    link: "Наши услуги",
    path: "Services",
    className: "services",
    component: <Services title="Наши услуги" />,
  },
  {
    id: "n2",
    link: "Для кого подходит инвестирование",
    path: "Steps",
    className: "steps",
    component: (
      <Steps
        data={steps_data}
        title="Для кого подходит инвестирование"
        button={false}
        subText="В оплату инвестиционных паев принимаются только денежные средства, независимо от валюты"
      />
    ),
  },
  {
    id: "n3",
    link: "Начать инвестировать легко",
    path: "StartInvest",
    className: "startInvest ",
    component: <StartInvest />,
  },
  {
    id: "n4",
    link: "Обратная связь",
    path: "CalcPrice",
    className: "calcPrice",
    component: <CalcPrice />,
  },
  {
    id: "n5",
    link: "Контакты",
    path: "Contacts",
    className: "contacts",
    component: <Contacts />,
  },
];

const ServicesPage = () => {
  return (
    <>
      <HeaderUI />
      <div className="content">
        <MainBlockServices />
        <div className="contentWrapper">
          <NavSlider props={contentProps} />
          <ContentWrapper>
            {contentProps.map((content) => {
              if (content.className === "tags") {
                return content.component;
              } else {
                return (
                  <ContentBlockWraper
                    key={content.path}
                    className={content.className}
                    id={content.path}
                  >
                    {content.component}
                  </ContentBlockWraper>
                );
              }
            })}
          </ContentWrapper>
        </div>
      </div>
      <PopUp />
      <Footer />
    </>
  );
};

export default ServicesPage;
